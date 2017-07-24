<h2 class="pdfAppendix"><center>APPENDIX 17: TPAD - ADDITIONAL INFORMATION</center></h2>

<h6><center>Geosupport Warnings, TPAD Conflict Flag, Reason Code Qualifier and Error Message</center></h6>

The TPAD Option allows users to get up-to-date property-level information.  The TPAD Option is available for Function 1A, BL, BN, and 1B calls (PAD calls).  When users turn the TPAD Switch ‘on’ in their applications, Geosupport reads the Transitional PAD file (TPAD) for intra-cycle PAD data and if any is found, Geosupport returns the TPAD data to the calling application.  [See Chapter VI.11](/chapters/chapterVI/section11/) for a more detailed description of the TPAD option and the information it returns.

This appendix describes the special return code and error message handling with respect to TPAD.  <b>If your applications make function 1A, BL, BN or 1B calls with the TPAD Option ‘on’, then you must read this description.</b>

Geosupport is designed to return information about both a normal warning (e.g. Hyphen Deleted) and a TPAD Conflict situation (e.g. …No Existing PAD BBL) with only one Function 1A, BL, BN or 1B call (with TPAD Switch ‘on’) to Geosupport.  The value in the Geosupport Reason Code will be the value that a user would expect when a Geosupport function call has completed with a warning.  The TPAD Conflict Flag will be in Work Area 2 (WA2) for all PAD calls with the TPAD Option ‘on’.  The ‘\*’ Reason Code (which indicates a TPAD Warning) will appear in only one exceptional case.  In the situation where there was no regular Warning Message for the regular PAD call and there was TPAD data found that <u><i>conflicts</i></u> with the PAD data, then the GRC will contain ‘01’ (indicating a warning) and the Reason Code will contain ‘\*’ (indicating that there is only a TPAD Conflict Flag warning and no regular Geosupport warning).

In addition, if TPAD data is found and there is a conflict with the PAD data, the value in the WA2 Conflict Flag field will also be placed into a new field called the <u>Geosupport Reason Code Qualifier</u> field which immediately follows the Geosupport Reason Code field in Work Area 1 (WA1).  When this new field is populated with the TPAD Conflict Flag, the <u>TPAD Conflict Message</u> will be put in the Geosupport Error Message field instead of the Geosupport Warning Message that would normally appear.  Note, therefore, that if there was a Geosupport Warning involving the regular PAD portion of this call, the Reason Code field will indicate the nature of the warning as with all other Geosupport calls (but the Error Message field for this warning will be overridden by the TPAD Conflict message if a conflict exists).

Values of ‘0’ or ‘1’ in the TPAD Conflict Flag (in WA2) are considered ‘normal results’.
        ‘0’ signifies TPAD data was found and does not conflict with PAD data;
        ‘1’ signifies that no TPAD data was found.
When there are ‘normal results’, the WA2 TPAD Conflict Flag will not be placed into the new Geosupport Reason Qualifier field in WA1.

The following table shows the possible results for Function 1A, BL, BN an 1B calls with the TPAD Switch ‘on’.

<table>
  <tr>
    <th></th>
    <th colspan="4">Regular Geosupport Warning for PAD Call</th>
  </tr>
   <tr>
    <th></th>
    <th colspan="2">Yes</th>
    <th colspan="2">No</th>
  </tr>
  <tr>
    <th></th>
    <th colspan="2">TPAD Data Found</th>
    <th colspan="2">TPAD Data Found</th>
  </tr>
  <tr>
   	<th>Work Area 1 Fields</th>
    <td>Yes</td>
    <td>No</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
  <tr>
  	<td>Geosupport Return Code<br>(GRC)</td>
    <td>01</td>
    <td>01</td>
    <td>01</td>
    <td>00</td>
  </tr>
   <tr>
  	<td>Reason Code</td>
    <td>Warning<br>Reason Code</td>
    <td>Warning<br>Reason Code</td>
    <td>\*</td>
    <td>blank</td>
  </tr>
  <tr>
  	<td>Reason Code Qualifier</td>
    <td>TPAD Conflict<br>Flag†</td>
    <td>blank</td>
    <td>TPAD Conflict<br>Flag†</td>
    <td>blank</td>
  </tr>
   <tr>
  	<td>Error Message</td>
    <td>TPAD Conflict<br>Flag†</td>
    <td>blank</td>
    <td>TPAD Conflict<br>Flag†</td>
    <td>blank</td>
  </tr>
  <tr>
  	<th>WA2 Conflict Flag</th>
    <td>TPAD Conflict Flag</td>
    <td>TPAD Conflict Flag</td>
    <td>TPAD Conflict Flag</td>
    <td>TPAD Conflict Flag</td>
  </tr>
</table>

† <b>Note:</b>  <i>The TPAD Conflict Flag appears in the Reason Code Qualifier only if its value is greater than ‘1’.  Similarly, the TPAD Conflict Message will appear in the Error Message field, only if the TPAD Conflict field is greater than ‘1’.
The TPAD Conflict Flag ‘1’ (no TPAD data was found) and the TPAD Conflict Flag ‘0’ (TPAD data found and it does not conflict with PAD data) will not appear in the Reason Code Qualifier field in WA1.  The Error Message field will have a TPAD Conflict Message only when TPAD data was found and it conflicts with the PAD data in some way (and as a result, the Reason Code Qualifier will be non-blank).  Note that if there is no Regular Geosupport Warning, and there is TPAD data which does not conflict with the PAD data (Conflict Flag ‘0’), the GRC will be ‘00’ the Reason Code, Reason Code Qualifier, and Error Message will all be blank.
</i>

See examples on the following pages.

<b>Examples:		PAD Data Found with Regular Warnings</b>

<table>
  <tr>
    <th colspan="2">PAD Data (with regular Geosupport warning) and No TPAD Data Found</th>
  </tr>
  <tr>
    <th colspan="2">Input:  12-34 Sample Street </th>
  </tr>
  <tr>
    <th>WA1 Fields </th>
    <th>Value</th>
  </tr>
  <tr>
    <td>GRC</td>
    <td>01</td>
  </tr>
  <tr>
    <td>Reason Code</td>
    <td>3		[indicates input address number altered – hyphen deleted]</td>
  </tr>
  <tr>
    <td>Reason Code Qualifier</td>
    <td>blank</td>
  </tr>
  <tr>
    <td>Error Message</td>
    <td>ADDR NUMBER ALTERED: HYPHEN DELETED</td>
  </tr>
  <tr>
    <th><b>WA2 Conflict Flag</b></th>
    <td>1</td>
  </tr>
</table>

<br/>

<table>
  <tr>
    <th colspan="2">PAD Data (with regular Geosupport warning) and TPAD Data (with no conflicts)</th>
  </tr>
  <tr>
    <th colspan="2">Input:  12-34 Sample Street </th>
  </tr>
  <tr>
    <th>WA1 Fields </th>
    <th>Value</th>
  </tr>
  <tr>
    <td>GRC</td>
    <td>01</td>
  </tr>
  <tr>
    <td>Reason Code</td>
    <td>3		[indicates input address number altered – hyphen deleted]</td>
  </tr>
  <tr>
    <td>Reason Code Qualifier</td>
    <td>blank</td>
  </tr>
  <tr>
    <td>Error Message</td>
    <td>ADDR NUMBER ALTERED: HYPHEN DELETED</td>
  </tr>
  <tr>
    <th><b>WA2 Conflict Flag</b></th>
    <td>0</td>
  </tr>
</table>

<br/>

<table>
  <tr>
    <th colspan="2">PAD Data (with regular Geosupport warning) and TPAD Data (with conflicts)</th>
  </tr>
  <tr>
    <th colspan="2">Input:  12-34 Sample Street </th>
  </tr>
  <tr>
    <th>WA1 Fields </th>
    <th>Value</th>
  </tr>
  <tr>
    <td>GRC</td>
    <td>01</td>
  </tr>
  <tr>
    <td>Reason Code</td>
    <td>3		[indicates input address number altered – hyphen deleted]</td>
  </tr>
  <tr>
    <td>Reason Code Qualifier</td>
    <td>D 		[indicates address in TPAD but not PAD (PAD data from BL call)]</td>
  </tr>
  <tr>
    <td>Error Message</td>
    <td>ADDRESS FOUND IN TPAD, NOT FOUND IN PAD……</td>
  </tr>
  <tr>
    <th><b>WA2 Conflict Flag</b></th>
    <td>D</td>
  </tr>
</table>

<b>Examples:	PAD Data Found with No Regular Geosupport Warning </b>

<table>

  <tr>
    <th colspan="2">PAD Data (with no regular Geosupport warning) and No TPAD Data Found</th>
  </tr>
  <tr>
    <th colspan="2">Input:  1234 Sample Street </th>
  </tr>
  <tr>
    <th>WA1 Fields </th>
    <th>Value</th>
  </tr>
  <tr>
    <td>GRC</td>
    <td>00</td>
  </tr>
  <tr>
    <td>Reason Code</td>
    <td>Blank</td>
  </tr>
  <tr>
    <td>Reason Code Qualifier</td>
    <td>Blank</td>
  </tr>
  <tr>
    <td>Error Message</td>
    <td>Blank</td>
  </tr>
  <tr>
    <th><b>WA2 Conflict Flag</b></th>
    <td>1</td>
  </tr>
</table>

<br/>

<table>

  <tr>
    <th colspan="2">PAD Data (with no regular Geosupport warning) and TPAD Data (with no conflicts)</th>
  </tr>
  <tr>
    <th colspan="2">Input:  1234 Sample Street </th>
  </tr>
  <tr>
    <th>WA1 Fields </th>
    <th>Value</th>
  </tr>
  <tr>
    <td>GRC</td>
    <td>00</td>
  </tr>
  <tr>
    <td>Reason Code</td>
    <td>Blank</td>
  </tr>
  <tr>
    <td>Reason Code Qualifier</td>
    <td>Blank</td>
  </tr>
  <tr>
    <td>Error Message</td>
    <td>Blank</td>
  </tr>
  <tr>
    <th><b>WA2 Conflict Flag</b></th>
    <td>0</td>
  </tr>
</table>

<br/>

<table>

  <tr>
    <th colspan="2">PAD Data (with no regular Geosupport warning) and TPAD Data (with conflicts)</th>
  </tr>
  <tr>
    <th colspan="2">Input:  1234 Sample Street </th>
  </tr>
  <tr>
    <th>WA1 Fields </th>
    <th>Value</th>
  </tr>
  <tr>
    <td>GRC</td>
    <td>01</td>
  </tr>
  <tr>
    <td>Reason Code</td>
    <td>*                            [indicates TPAD Conflict only; no regular warning]</td>
  </tr>
  <tr>
    <td>Reason Code Qualifier</td>
    <td>D 		[indicates address in TPAD but not PAD (PAD data from BL call)]</td>
  </tr>
  <tr>
    <td>Error Message</td>
    <td>ADDRESS FOUND IN TPAD, NOT FOUND IN PAD…….. </td>
  </tr>
  <tr>
    <th>WA2 Conflict Flag</th>
    <td>D</td>
  </tr>
</table>

The Reason Code Qualifier is used to define a specific TPAD warning.  When there is a true conflict between TPAD data and PAD data, the Reason Code Qualifier contains the same information as the TPAD Conflict Flag.

The following table indicates where in Work Area 1 the one-byte Reason Code Qualifier field(s) may be found.

<table>
  <tr>
    <th colspan="4"><b>(1 byte) Position</b></th>
  </tr>
  <tr>
    <th>Field Name</th>
    <th>Function(s)</th>
    <th>COW</th>
    <th>MSW</th>
  </tr>
  <tr>
    <td>Reason Code Qualifier</td>
    <td>1A, BL, BN</td>
    <td>714</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Reason Code Qualifier 2</td>
    <td>1B</td>
    <td>575</td>
    <td>n/a</td>
  </tr>
</table>

For Functions 1A, BL, and BN the Reason Code Qualifier is a one-byte field, in column 714 of COW Work Area 1.
For Function 1B, the Reason Code Qualifier 2 is a one-byte field, in column 575 of COW Work Area 1.

The following table contains the field name in the COPY libraries for the Reason Code Qualifiers.

<table>
  <tr>
    <th colspan="4">Reason Code Qualifier(s)<br>Field Names in COPY Libraries</th>
  </tr>
  <tr>
    <th>Language</th>
    <th>COPY<br>Library<br>(COW Only)</th>
    <th>Function(s)<br>(COW Only)</th>
    <th>Field Name</th>
  </tr>
  <tr>
    <td>BAL</td>
    <td>P1BAL</td>
    <td>1A, BL, BN <br> 1B</td>
    <td>reason_code_qual<br>reason_code_qual_2</td>
  </tr>
  <tr>
    <td>COBOL</td>
    <td>P1COB</td>
    <td>1A, BL, BN <br> 1B</td>
    <td>GEO-WA1-OUT-REASON-CODE-QUAL<br>GEO-WA1-OUT-REASON-CODE-QUAL2</td>
  </tr>
  <tr>
    <td>Natural</td>
    <td>GEOLP1</td>
    <td>1A, BL, BN <br> 1B</td>
    <td>PIWA1-OUT-REASON-CODE-QUAL<br>PIWA1-OUT-REASON-CODE-QUAL-2</td>
  </tr>
  <tr>
    <td>PL/1</td>
    <td>P1PL1</td>
    <td>1A, BL, BN <br> 1B</td>
    <td>PIWA1_OUT_REASON_CODE_QUAL<br>PIWA1_OUT_REASON_CODE_QUAL_2</td>
  </tr>
</table>
