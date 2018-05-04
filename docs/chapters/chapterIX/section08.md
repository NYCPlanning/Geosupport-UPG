<h2>IX.8  The Output Files of Rejected Records (DDNAME=ERRFILx)</h2>

Each record in the Output Files of Rejected Records typically contains a Geosupport Return Code (GRC), a Reason Code and a copy of the user's input data record (ERRFILE and ERRFIL2).  The user may optionally request that Work Area 1 also be included in the output record (ERRFIL4 and ERRFIL5 are created instead of ERRFILE and ERRFIL2).  Work Area 1 contains an Error Message which may help the user to correct the input data.  See more detail below.
<br><br>

<!-- ## <span id="chapterIX.8.1">IX.8.1  ERRFILE not working used IX.8.2 instead. investigate later - commented out </span>  -->
## IX.8.1  ERRFILE <span class="subSection_header" id="chapterIX.8.1"></span>
ERRFILE is mandatory when WORKAREA1=NO (which is the GBAT default).  This output file contains a record for each ‘rejected’ input data record.  The value of the REJECTWARNINGS option that is in effect determines which input data records are treated as rejects, as explained in [Chapter XI.7](/chapters/chapterXI/section07/).

Each ERRFILE record consists of four bytes, followed by an exact copy of the input data record.  The four bytes consist of the two-byte GRC, followed by a one-byte filler containing a ‘-‘(dash character) for display readability, followed by the one-byte Reason Code.  The LRECL of ERRFILE must always be four greater than that of the input data file.  It is the user’s responsibility to specify the LRECL of ERRFILE correctly in the JCL.

## IX.8.2  ERRFIL2 <span class="subSection_header" id="chapterIX.8.2">(for use by Function 1B only)</span>
ERRFIL2 is mandatory with RECTYPE=1B together with WORKAREA1=NO.  It contains a record for each ‘rejected’ input data record.  The value of the REJECTWARNINGS option that is in effect determines which input data records are treated as rejects, as explained in [Chapter XI.7](/chapters/chapterXI/section07/).

The contents of each ERRFIL2 record is as follows:  The first 4 bytes contain the 2-byte GRC, followed by a dash, followed by the Reason Code for the Block Face level (Function 1E Extended) information. This is followed by 6 bytes of filler. Byte 11 contains the 2-byte GRC, followed by a dash, followed by the Reason Code for the Property level (Function 1A Extended) information. This is followed by 6 bytes of filler. The input record begins in byte 21. The LRECL of ERRFIL2 must always be 20 greater than that of the input data file.  It is the user’s responsibility to specify the LRECL of ERRFIL2 correctly in the JCL.

**The remainder of this section describes ERRFILE / ERRFIL2 processing.**  
<u>**It also applies to ERRFIL4 / ERRFIL5 processing correspondingly**</u>.

The GBAT output <u>ERRFIL2</u> will contain all Function 1B records that were rejected for <u>any</u> reason.  It will contain records that were rejected for:

 * The Block level but not the Property level call

 * The Property level but not for the Block level call

 * Both the Block and Property level calls (These rejects will also be in the ERRFILE)  

If the input record has been rejected for both Block and Property level information, the output error record will be found <u>both</u> in the ERRFILE output error file, as well as the ERRFIL2 error file.  The ERRFILE output record will have the GRC of the results of the Block level call (i.e. Function 1E), and corresponds to the GRC and Reason Code in Work Area 1.  ERRFIL2 will have the same output error record and will contain both the GRC and Reason code and the newly defined GRC2 and its corresponding Reason Code.   There will be no Work Area 2 returned by GBAT when the record is rejected for both Block an Property level information.

Note:  If you are not using Function 1B, you do not have to add ERRFIL2 to your GBAT JCL.  The file is not opened.  No changes have to be made.  However, if you are using GBAT for a Function 1B call, GBAT will abend if you do not add a DD card for ERRFIL2 to your JCL.


## IX.8.3  ERRFIL3 <span class="subSection_header" id="chapterIX.8.3">(for use by Function 2 with RELATEDNODES=YES)</span>
ERRFIL3 is mandatory with RECTYPE=2 and RELATEDNODES=YES.  It contains a record for each  input data record that is rejected with GRC 03 and Reason Code B (‘many-node case’).

When the requested streets intersect more than twice (GRC 03), if the user has set RELATEDNODES to YES s/he will get a special error file, ERRFIL3, with a logical record length of 3352 + length of the user’s input.  The ERRFIL3 record will include for each of the many nodes, the Node ID and the streets (as B7SCs) at the nodes.  Therefore, to process streets that intersect more than twice, the GBAT user need only add the RELATEDNODES=YES option to get the information needed.  S/He does not have to run a Function 2W GBAT run.

The contents of each ERRFIL3 record is as follows:  The first 4 bytes contain the 2-byte GRC (‘03’), followed by a dash, followed by the 1-byte Reason Code (‘B’). This is followed by 6 bytes of filler. A copy of the  input record begins in byte 11. The input record is followed by the list of nodes and the B7SCs at the nodes.  The LRECL of ERRFIL3 must always be 3352 greater than that of the input data file.  It is the user’s responsibility to specify the LRECL of ERRFIL3 correctly in the JCL.  



<table  style="width:100%">

<tr>
  <th colspan="3">GBAT - ERRFIL3 Record Layout</th>
 </tr>
<tr>
  <th>Length</th>
  <th>Positions</th>
  <th>Contents</th>
 </tr>
 <tr>
  <td>4</td>
  <td>1-4</td>
  <td>’03-B’ (which is the GRC-Reason Code)</td>
 </tr>

 <tr>
  <td>6</td>
  <td>5-10</td>
  <td>Blanks</td>
 </tr>

 <tr>
  <td>Length of I/P record</td>
  <td>11-nn </td>
  <td>User’s input record</td>
 </tr>

 <tr>
  <td>2</td>
  <td>After input record</td>
  <td>True Replication Counter (maximum of 20)
(matches bytes 259-260 of Function 2W’s Work Area 2) </td>
 </tr>

 <tr>
  <td>140</td>
  <td>After input record + 2</td>
  <td>List of up to 20 Node ID (7 bytes each)
(matches bytes 261-400 of Function 2W’s Work Area 2) </td>
 </tr>

 <tr>
  <td>3200</td>
  <td>After input record + 142</td>
  <td>List of B7SCs for Nodes.  
(matches bytes 401-3600 of Function 2W’s Work Area 2)
([See Appendix 13](/appendices/appendix13/) - layout of Function 2W’s Work Area 2) </td>
 </tr>
 <tr>
 <td colspan="3">Total length: 3352 + Length of user’s input record</td>
 </tr>

</table>  

The count of the records in the new ERRFIL3 file will match the statistics for:
<pre class="pdfPre"> 03 – STREETS INTERSECT MORE THAN TWICE – USE NODE AS INPUT.</pre>

Note that the rejected input records will also still appear in the regular reject file (ERRFILE) in  the standard ERRFILE format.

Important JCL Note: ERRFIL3 must be defined in the user’s JCL for RELATEDNODES to take effect.  If DDname ERRFIL3 is undefined in the user’s JCL, the file will default to DD DUMMY which will not give an appropriate length.  The execution will fail with a programmed abnormal termination and a Condition Code of 15.  See the following error message which will appear in the output.


<table>
<tr><td>Condition Code: 15</td></tr>
<tr><td>GBAT Error Message:</td></tr>
<tr><td><pre class="pdfPre">ERROR: THE RECORD LENGTH OF ERRFIL3 MUST EQUAL THE RECORD LENGTH OF THE INPUT FILE PLUS 3352.
RECORD LENGTH OF THE INPUT FILE =       xxx    RECORD LENGTH OF ERRFIL3 =   yyy </pre></td></tr>
</table>

Note:  If you are not using RELATEDNODES, you do not have to add ERRFIL3 to your GBAT JCL.  The file is not opened.  No changes have to be made.

## IX.8.4  ERRFIL4 <span class="subSection_header" id="chapterIX.8.1">(for use with WORKAREA1=YES)</span>
ERRFIL4 is mandatory when WORKAREA1=YES.  This output file contains a record for each ‘rejected’ input data record.  The value of the REJECTWARNINGS option that is in effect determines which input data records are treated as rejects, as explained in [Chapter XI.7](/chapters/chapterXI/section07/).

The ERRFIL4 record is the same as the ERRFILE record, except that it also includes a copy of Work Area 1.  Each ERRFIL4 record consists of four bytes, followed by an exact copy of the input data record, followed by a copy of Work Area 1.  The four bytes consist of the two-byte GRC, followed by a one-byte filler containing a ‘-‘(dash character) for display readability, followed by the one-byte Reason Code.  The Work Area 1 is 1,200 bytes long.  The LRECL of ERRFIL4 must always be 1,204 greater than that of the input data file.  It is the user’s responsibility to specify the LRECL of ERRFIL4 correctly in the JCL.


## IX.8.5  ERRFIL5 <span class="subSection_header" id="chapterIX.8.5">(for use by Function 1B only - with WORKAREA1=YES)</span>
ERRFIL5 is mandatory when RECTYPE=1B together with WORKAREA1=YES.  It contains a record for each ‘rejected’ input data record.  The value of the REJECTWARNINGS option that is in effect determines which input data records are treated as rejects, as explained in [Chapter XI.7](/chapters/chapterXI/section07/).

The  ERRFIL5 record is the same as the ERRFIL2 record, except that it also includes a copy of Work Area 1.  The contents of each ERRFIL5 record is as follows:  The first 4 bytes contain the 2-byte GRC, followed by a dash, followed by the Reason Code for the Block Face level (Function 1E Extended) information. This is followed by 6 bytes of filler. Byte 11 contains the 2-byte GRC, followed by a dash, followed by the Reason Code for the Property level (Function 1A Extended) information. This is followed by 6 bytes of filler. The input record begins in byte 21. The 1,200-byte Work Area 1 follows the input record.  The LRECL of ERRFIL5 must always be 1,220 greater than that of the input data file.  It is the user’s responsibility to specify the LRECL of ERRFIL5 correctly in the JCL.

ERRFIL5 processing is identical to ERRFIL2 processing (except for the Work Area 1 which appears in the ERRFIL5 record).  See the description in IX.8.2 above for further information.   
