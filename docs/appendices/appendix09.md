<h2 class="pdfAppendix"><center>APPENDIX 9:  GBAT REFERENCE TABLES</center></h2>


## <span id="appendix09.1"><center>Table A9-1: GBAT Control Entry Descriptions by Keyword</center></span>

This table lists all of the control entries alphabetically by keyword.  Each control entry’s coding format is indicated, and its purpose and usage are described.  Control entry variables are indicated using ‘S’ and ‘L’ to represent the starting position and length, respectively, of a field in the input data records, and ‘V’ to represent other types of variables.  Certain control entries do not have full table entries of their own but are cross-referenced to closely related control entries.


<table>
  <tr>
    <th>Control Entry</th>
    <th>Description</th>
  </tr>
  <tr>
    <td class="topVerticalTD"><b>ALIASES=V</b></td>
    <td>Specifies whether an input alias file is to be used during this GBAT run.  If so, during the processing of the input data file, the user-defined street name aliases in the alias file supplement the set of street names that Geosupport recognizes ([see ChapterIX.6](../../chapters/chapterIX/section06/)).  This control entry is optional; if it is not coded, the default value is NO.  The valid variable values are NO, YES and VAL.

ALIASES=NO directs GBAT not to perform any alias processing.  If there is
an ALIASES DD statement in the JCL, it is ignored.

ALIASES=YES directs GBAT to validate the ALIASES file, and then to process the input data file whether or not there are any invalid records in the alias file.  An ALIASES DD statement referring to the alias file is required to be in the JCL.

ALIASES=VAL directs GBAT to validate the alias file, and then to process the input data file only if there are no invalid records in the alias file.  An ALIASES DD statement referring to the alias file is required to be in the JCL.</td>
  </tr>
  <tr>
   <td class="topVerticalTD"><b>AUXSEG=V</b></td>
   <td>Specifies whether the Work Area 2 to be used to form the records written into the output file of accepted data (OUTFILE) is the regular WA2 or the auxiliary segment WA2 ([see Chapter II.6](../../chapters/chapterII/section06/)).  The valid variable values are YES and NO and are self-explanatory.  Currently, the Auxiliary Segment WA2 option is only available for COW format Functions 3 and 3C;  this control entry is invalid for all other functions.  For the functions that have the Auxiliary Segment WA2 option, this control entry is invalid when GEOCODE=NO or VAL;  it is optional when GEOCODE=YES or ALL, and the default value is NO.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>BBL=S,10</b></td>
   <td>Specifies the starting position and length of the input BBL field in the input data records.  This control entry is valid only for Function BL.  This control entry can be used in place of the three control entries BORO, BLOCK and LOT whenever the input data records contain those three items in adjacent positions so that they can be treated collectively as a BBL field.  The length value must be explicitly coded as  ‘10’.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>BIN=S or BIN=S,7</b></td>
   <td>Specifies the starting position and length of the input Building Identification Number  (BIN) field in the input data records.  This control entry is valid only for Function BN.  An input BIN field must always have a length of seven bytes, which may be coded explicitly as ‘7’ in this control entry or it may be left uncoded, in which case it defaults to that value.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>BLOCK=S or BLOCK=S,5</b></td>
   <td>Specifies the starting position and length of the input tax block field in the input data
	records.  This control entry is valid only for Function BL.  Either all three control entries BORO, BLOCK and LOT must be specified, or the control entry BBL must be specified.  An input tax block field must always have a length of five bytes, which may be coded explicitly as ‘5’ in this control entry, or it may be left uncoded, in which case it defaults to that value.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>BORO=S,L</b></td>
   <td>Specifies the starting position and length of the input borough code field in the input data records.  This control entry is valid for all functions except Function BN.  It is mandatory for functions that require an input borough code field.  BORO is optional if ZIPCODE is specified for Function 1, 1A, 1B or 1E.  For Functions 2, 3, 3C, 3S and D, which accept multiple input street fields, the field specified by BORO serves as the input borough code field for the input street field specified by the control entry ONSTREET or STRTCODE;  in addition, if the control entries CROSSBORO1 and CROSSBORO2 are not coded, it also serves as the input borough code field for the other input street fields.  The maximum permissible length value of BORO is L=12.  Note: The input borough code field specified by BORO may contain user-defined, non-standard borough code values - see discussion at table entry for BRONX.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>BRONX=V <br> BROOKLYN=V <br> MANHATTAN=V  <br> QUEENS=V <br> STATEN=V</b></td>
   <td>GBAT can accept non-standard, user-defined borough code values in the input
	borough code fields specified by the control entries BORO, CROSSBORO1 and
	CROSSBORO2.  (If there is more than one input borough code field, the same
	borough code values must be used in all of them.)  The five control entries
	BRONX, BROOKLYN, MANHATTAN, QUEENS and STATEN are used to specify the character strings that represent each borough in those input borough code fields.  (Note: these control entries do not pertain to the borough code sub-fields that are embedded within larger data items such as BBL, BIN and B7SC, which must always contain the standard Geosupport borough code values.)  The five borough code values may be specified as any strings of non-blank characters the lengths of which do not exceed the length value specified in the BORO control entry (which has a maximum permissible length value of 12).  Embedded blanks should not be included in user-defined borough code values, since the first blank that GBAT encounters when scanning a borough code value terminates the scan.  For example, coding STATEN=STATEN ISLAND would cause GBAT to interpret the control entry as STATEN=STATEN and to interpret ISLAND as the next keyword in the control file.  Since ISLAND is an invalid control keyword, GBAT would terminate abnormally.  However, coding STATEN=STATENISLAND (without the embedded blank) is acceptable.


  These five control entries are optional, but if any of them is coded, all five must be coded. If these control entries are not coded, the default values are the standard Geosupport borough codes, as follows:

MANHATTAN=1 <br>
BRONX=2 <br>
BROOKLYN=3 <br>
QUEENS=4 <br>
STATEN=5

</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>BROOKLYN</b></td>
   <td>See BRONX.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>BROWSEFLAG=V</b></td>
   <td>Specifies whether the Browse Flag request (described in [Chapter III.7](../../chapters/chapterIII/section07/) and [III.8](../../chapters/chapterIII/section08/)) is in effect.  This control entry is valid only for COW functions that return normalized street name output.  For such functions, this control entry is optional.

BROWSEFLAG=P specifies that the Browse Flag is set to ‘P’.  Only the primary name and street code of the input street names will be returned to the user.

BROWSEFLAG=F specifies that the Browse Flag is set to ‘F’.  Only principal street name and street code of the input street names will be returned to the user.

BROWSEFLAG=R specifies that the Browse Flag is set to ‘R’.  Only the DCP or BOE preferred street name and street code of the input street names will be returned to the user. The value of ‘R’ is valid only for ‘GEOCODE=YES’ or ‘GEOCODE=ALL’.
</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>B7SC1=S <br> or B7SC1=S,8 <br> B7SC1=S,8 <br> B7SC1=S,8 <br> B7SC3=S or <br> B7SC3=S,8</b></td>
   <td>Specify the starting positions of up to three input Borough-and-7-digit Street Code
	(B7SC) fields for input to Function DG.  An input B7SC field must always have a
	length of 8, which may be coded explicitly in these control entries, or it may be
	left uncoded, in which case it defaults to 8.
</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>B10SC1=S or <br> B10SC1=S or <br> B10SC2=S or <br> B10SC2=S,11 <br> B10SC3=S or <br> B10SC3=S,11</b></td>
   <td>Specify the starting positions of up to three input Borough-and-10-digit Street
	Code (B10SC) fields for input to Function DN.  An input B10SC field must always
	have a length of 11, which may be coded explicitly in these control entries, or it
	may be left uncoded, in which case it defaults to 11.
</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>COMPACT=V</b></td>
   <td>Specifies whether the Compact Names option (described in [Chapter III.3](../../chapters/chapterIII/section03/)) is in effect.  This control entry is valid only for functions that return normalized street name output.  For such functions, this control entry is optional, and NO is the default value.

COMPACT=YES specifies that the Compact Names option is in effect.  Street names with numeric components are normalized into the compact format.

COMPACT=NO specifies that the Compact Names option is not in effect.  Street names with numeric components are normalized into the sort format.
</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>COMPASS=S</b></td>
   <td>Specifies the position of an input compass direction field in the input data records.  This control entry is never coded with a length variable;  GBAT always assumes an input compass direction field to be one byte long.  This control entry is valid only for Functions 2, 3C and 3S.

For Function 2:  this control entry is required only if the input data file contains at least one input street intersection defined by a pair of streets that intersect at two distinct locations ([see Chapter VII.2](../../chapters/chapterVII/section02/)).  In such input data records, the input compass direction field must contain a valid non-blank compass direction value, ‘N’, ‘S’, ‘E’ or ‘W’, which serves to designate which of the two intersections of the given pair of streets is to be processed.  In other input data records, the input compass direction field should be blank.

For Function 3C:  this control entry is mandatory.  The input data field that this control entry specifies contains the compass direction designating the side of the street.  This field must contain a valid non-blank compass direction value, ‘N’, ‘S’, ‘E’ or ‘W’, in every input data record.

For Function 3S:  this control entry corresponds to the ‘first input intersection’, that is, the input intersection defined either by ONSTREET and CROSS1 or by STRTCODE and CRSCOD1.  (The control entry COMPASS2 corresponds to the second input intersection.)  The COMPASS control entry is required only if the input data file contains at least one first input intersection that is defined by a pair of streets that intersect in two locations ([see Chapter VII.2](../../chapters/chapterVII/section02/)).  In such input data records, the input data field that this control entry specifies must contain a valid compass direction value identifying which of the two locations is the intended first input intersection.  In other input data records, this field should contain a blank.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>COMPASS2=S</b></td>
   <td>Specifies the position of the input compass direction field in the input data records that corresponds to the second input intersection, that is, the input intersection defined either by ONSTREET and CROSS2 or by STRTCODE and CRSCOD2.  The COMPASS2 control entry is never coded with a length variable;  GBAT always assumes an input compass direction field to be one byte long.  The COMPASS2 control entry is valid only for Function 3S.  It is required only if the input data file contains at least one second input intersection that is defined by a pair of streets that intersect at two distinct locations ([see Chapter VII.2](../../chapters/chapterVII/section02/)).  In such input data records, the input data field that this control entry specifies must contain a valid compass direction value identifying which of the two locations is the intended second input intersection.  In other input data records, this field should contain a blank.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>CROSSBORO1=S,L</b></td>
   <td>Specifies the starting position and length of the input borough code field corresponding to the input street field specified by the control entry CROSS1 or CRSCOD1.  

CROSSBORO1 is coded only if the input data records have separate borough code fields corresponding to each of the input street fields.  Such separate input borough code fields enable GBAT to process input data files containing borough boundary locations that are defined by streets in different boroughs (see discussion of Geosupports borough boundary processing feature in [Chapter VII.7](../../chapters/chapterVII/section07/)).   

CROSSBORO1 is valid for Functions 2, 3, 3C, 3S and D, and is optional for those functions.  If CROSSBORO1 is not coded, then the field specified by BORO is used as the input borough code field for the input street field specified by CROSS1 or CRSCOD1.  If CROSSBORO1 is coded, then whenever the field it specifies contains a blank, the contents of the field specified by BORO is used as the input borough code for the input street field specified by CROSS1 or CRSCOD1.  If CROSSBORO1 is coded, and the input street field it applies to is specified by CRSCOD1 rather than CROSS1 (i.e., if that field contains street codes rather than street names), and the length of CRSCOD1 is specified as 4 or 6 (i.e., the input street code field is in one of the formats that contain their own borough code), then CROSSBORO1 is ignored, and the input borough code field it specifies is not used.  Note: The input borough code field specified by CROSSBORO1 may contain user-defined, non-standard borough code values - see discussion at table entry for BRONX.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>CROSSBORO2=S,L</b></td>
   <td>Specifies the starting position and length of the input borough code field corresponding to the input street field specified by the control entry CROSS2 or CRSCOD2.

CROSSBORO2 is coded only if the input data records have separate borough code fields corresponding to each of the input street fields.  Such separate input borough code fields enable GBAT to process input data files containing borough boundary locations that are defined by streets in different boroughs (see discussion of Geosupport’s borough boundary processing feature in [Chapter VII.7](../../chapters/chapterVII/section07/).   CROSSBORO2 is valid for Functions 3, 3C, 3S and D, and is optional for those functions.  If CROSSBORO2 is not coded, then the field specified by BORO is used as the input borough code field for the input street field specified by CROSS2 or CRSCOD2.  If CROSSBORO2 is coded, then whenever the field it specifies contains a blank, the contents of the field specified by BORO is used as the input borough code for the input street field specified by CROSS2 or CRSCOD2.  If CROSSBORO2 is coded, and the input street field it applies to is specified by CRSCOD2 rather than CROSS2 (i.e., if that field contains street codes rather than street names), and the length of CRSCOD2 is specified as 4 or 6 (i.e., the input street code field is in one of the formats that contain their own borough code), then CROSSBORO2 is ignored, and the input borough code field it specifies is not used.  Note: The input borough code field specified by CROSSBORO2 may contain user-defined, non-standard borough code values - see discussion at table entry for BRONX.
</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>CROSSSTNAMES=V</b></td>
   <td>Specifies whether a list of street names of the cross streets or intersecting streets is to be included in the appended output data.  Note: the CROSSSTNAMES feature incurs processing overhead, and should only be used when necessary.

Note that CROSSSTNAMES may no longer be necessary with certain COW functions  since MODE=X (Extended Mode) and Function 1B Work Areas are now supported, and they contain the cross street B7SCs and the corresponding Principal cross street names.

CROSSSTNAMES=YES specifies that the street names of the cross streets (RECTYPE=1, 1E, 2, 3 or 3C) or intersecting streets (RECTYTPE=2) are to be appended.  This causes a 320-byte block of data to be included in the appended data containing those street names, laid out as described in the [Appendix 3](../appendix03/) entry for the List of Street Names (see paragraph on List of Cross Street Names).  CROSSSTNAMES=YES is valid only when GEOCODE=ALL and RECTYPE=1, 1E, 2, 3 or 3C have been specified.

CROSSSTNAMES=NO specifies that the street names of cross streets or intersecting streets are not to be appended.  The default value is NO.

This control entry is optional; if it is not coded, the default value is NO.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>CROSS1, CROSS2</b></td>
   <td>See ONSTREET.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>CRSCOD1, CRSCOD2</b></td>
   <td>See STRTCODE.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>GEOCODE=V</b></td>
   <td>Specifies whether GBAT will issue one-work-area or two-work-area calls (<a href="../../chapters/chapterII/section04/">see Chapter II.4</a>;  whether OUTFILE will be produced;  and if so, what information GBAT will append to the user input records in forming the OUTFILE records (<a href="../../chapters/chapterXI/section07/">see Chapter XI.7</a>.  The valid variable values for this control entry are NO, YES, ALL and VAL.  For COW Functions 1, 1E, 1A and 1B, see also keyword GEOUNIT.

GEOCODE=NO specifies a one-work-area call.  Only selected information from Work Area 1 is appended.  For Function BL, the BBL is appended; for Function BN, the BIN is appended;  for the other functions, normalized house numbers, normalized street names and street codes are appended.  For a detailed layout of the appended information for GEOCODE=NO, <a href="../appendix09/#table-a9-4-msw-appended-items-for-geocodeno">see Table A9-4</a> for MSW format, and <a href="../appendix12/#a12-2">see Table A12-2</a> for COW format.  In addition, for COW Functions 1, 1E, 1A and 1B, if GEOUNIT=YES is specified, the Normalized Display Format Unit output field is also appended, in the form of a 70-byte block of data, the first 14 bytes of which are the Unit output field.  For a description of the Unit fields, <a href="../../chapters/chapterV/section15/">see Chapter V.15</a>.  OUTFILE is produced.

GEOCODE=YES specifies a two‑work‑area call.  Only a copy of Work Area 2 for the given function is appended.  OUTFILE is produced.

GEOCODE=ALL specifies a two‑work‑area call.  Both the GEOCODE=NO information (including the GEOUNIT=YES information, as described above with GEOCODE=NO) and the GEOCODE=YES information are appended.  In addition, if CROSSSTNAMES=YES is specified, a list of street names of the cross streets or intersecting streets is also appended, in the form of a 320-byte block of data, between the GEOCODE=NO data and the GEOCODE=YES data.  OUTFILE is produced.

GEOCODE=VAL specifies a two‑work‑area call.  OUTFILE is not produced.

This control entry is optional.  The default value depends on the function:  it is NO for Functions 1, 1N, 2, 3, D, DG and DN, and it is YES for all other functions.  The values YES, ALL and VAL are invalid for functions that can only be called using one work area (currently, Functions 1N, D, DG and DN).</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>GEOUNIT=V</b></td>
   <td>Specifies whether GBAT will append the Normalized Display Format Unit Output field.  This control entry is valid only for COW Functions 1, 1E, 1A and 1B and only when GEOCODE=NO or GEOCODE=ALL is specified.  The Normalized Display Format Unit output field is appended, in the form of a 70-byte block of data, the first 14 bytes of which are the Unit output field.  See the description of GEOCODE=V above.  The GEOUNIT control entry is optional.  The valid values are YES and NO.  The default is GEOUNIT=NO.  For a description of the Unit fields, <a href="../../chapters/chapterV/section15/">see Chapter V.15.</a></td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>HNI=V</b></td>
   <td>Specifies whether the input house number fields specified by the HOUSENUM and HOUSENUM2 control entries are House Numbers in Internal format (HNIs) (<a href="../../chapters/chapterV/section02/">see Chapter V.2</a>) or are in character format, indicated by the variable values YES and NO respectively.  The HNI control entry is optional only for MSW Functions 1, 1A, 1E, D, DG and DN, and is invalid for other functions and for the COW format.  The default value depends on the function.  For MSW Functions 1, 1A and 1E, NO is the default, and YES is also valid.  For MSW Functions D, DG and DN, YES is the default and is the only valid value.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>HNS=V</b></td>
   <td>Specifies whether the input house number field specified by the HOUSENUM and HOUSENUM2 control entries are House Numbers in Sort format (HNSs) (<a href="../../chapters/chapterV/section02/">see Chapter V.2</a>) or are in character format, indicated by the variable values YES and NO respectively.  The HNS control entry is optional for COW Functions 1, 1A, 1E, D, DG and DN, and is invalid for other functions and for the MSW format.  The default value depends on the function.  For COW Functions 1, 1A and 1E, NO is the default, and YES is also valid.  For COW Functions D, DG and DN, YES is the default and is the only valid value.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>HOUSENUM=S or HOUSENUM=S,L</b></td>
   <td>Specifies the starting position and length of an input house number field. This control entry is optional.  It is valid for Functions 1, 1A, 1B, 1E, D, DG and DN.

For Functions 1, 1A, 1B and 1E, if HOUSENUM is not coded, Geosupport assumes that the input street name field (specified by the control entry ONSTREET) contains a free‑form address (<a href="../../chapters/chapterV/section03/">see ChapterV.3</a>).  If HOUSENUM is coded, the input data field it specifies may contain either a House Number in Internal format (HNI - for MSW format only - <a href="../../chapters/chapterV/section02/">see ChapterV.2</a>), a House Number in Sort Format (HNS - for COW format only - <a href="../../chapters/chapterV/section02/">see ChapterV.2</a>), or a house number in character format.  If it contains an HNI, then the control entry HNI=YES must be in effect (either by explicitly coding it or by default), and HOUSENUM’s length variable must either be coded with the value ‘6’ or not coded (in which case it defaults to ‘6’ by virtue of HNI=YES).  If it contains an HNS, then the control entry HNS=YES must be in effect (either by explicitly coding it or by default), and HOUSENUM’s length variable must either be coded with the value ‘11’ or not coded (in which case it defaults to ‘11’ by virtue of HNS=YES). If HOUSENUM is not an HNI or an HNS, its length variable must be a number between 5 and 12.

For Functions D, DG and DN, if HOUSENUM is coded, for MSW format, the input data field it specifies must contain an HNI, and the length variable must either be coded with the value ‘6’ or not coded (in which case it defaults to ‘6’).  For COW format, the input data field it specifies must contain an HNS, and the length variable must either be coded with the value ‘11’ or not coded (in which case it defaults to ‘11’).
</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>HOUSENUM2=S or HOUSENUM2=S,L</b></td>
   <td>Specifies the starting position and length of an input house number field containing an HNI for the MSW format, or an HNS for the COW format.  HOUSENUM2 is valid for Functions D, DG and DN, for which it is optional.  Those functions can accept two input HNI or HNS fields per call.  Coding both HOUSENUM and HOUSENUM2 enables two input HNI or HNS fields to be processed through Functions D, DG or DN in a single GBAT pass.  For the MSW format, when HOUSENUM2 is coded, the OUTFILE records include a corresponding 12-byte field (identified as HND-2 in Table A9-4) in the appended data for a House Number in Display format (HND), and the total length of the appended data is 120 bytes.  When HOUSENUM2 is not coded using the MSW format, no corresponding HND-2 field is included in the OUTFILE records, and the total length of the appended data is 108 bytes.  For the COW format, the OUTFILE record length is always 128 bytes, and has space for two 16-byte output House Numbers in Display format (HNDs), each of which would either have data or be blank, dependent on the input..</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>LONGWA2=V</b></td>
   <td>Specifies whether the Work Area 2 to be used to form the records written into the output file of accepted data (OUTFILE) is the regular WA2 or the long WA2 (<a href="../../chapters/chapterII/section05/">see ChapterII.5</a>).  The valid variable values are YES and NO and are self-explanatory.  Currently, the long WA2 option is only available for MSW format Functions 1, 1E, and 3, and for both MSW and COW formats for Functions 1A and BL;  this control entry is invalid for all other functions. For the functions that have the long WA2 option, this control entry is invalid when GEOCODE=NO or VAL;  it is optional when GEOCODE=YES or ALL, and the default value is NO.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>LOT=S,L</b></td>
   <td>Specifies the starting position and length of the input tax lot field.  This control entry is valid only for Function BL.  The Function BL user must specify either all three control entries BORO, BLOCK and LOT, or the control entry BBL.  The length value of LOT must be explicitly coded as ‘4’.  There is no default.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>MANHATTAN</b></td>
   <td>See BRONX.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>MAXREJECTS=V</b></td>
   <td>Specifies how many rejects (including warnings, if REJECTWARNINGS=YES has been specified) occurring at the beginning of the input data file, other than any records rejected for an invalid borough code, are to cause a ‘MAXREJECTS termination’, that is, would cause GBAT to terminate execution abnormally and exit with Condition Code 20 (<a href="../../chapters/chapterXI/section03/">see ChapterXI.3</a>).  The variable value must be either a positive integer specifying the number of such rejects that are to cause a MAXREJECTS termination, or the value NOMAX.  If MAXREJECTS=NOMAX is coded, the entire input data file is processed, regardless of the number of rejects occurring at the beginning of the file.  The MAXREJECTS control entry is optional, and the default value is MAXREJECTS=200. </td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>MODE=V</b></td>
   <td>Specifies whether the Work Area 2 to be used to form the records written into the output file of accepted data (OUTFILE) is the regular WA2 or the Extended WA2 (<a href="../../chapters/chapterII/section07/">see ChapterII.7</a>).  The valid variable values are X or NO.  X requests the Extended Work Area 2.  Currently, the extended WA2 option is available only for COW format (WORKAREA=COW) Functions 1, 1E, 1A, 3, 3C, BL, and BN;  this control entry is invalid for all other functions.  When MODE=X, LONGWA2 cannot be set to YES for Function 1A or BL.  All other control cards are the same for each of the Functions 1, 1E, 1A, 3, 3C, BL or BN.  For the functions that have the extended WA2 option, this control entry (MODE=X) is invalid when GEOCODE=NO or VAL;  it is optional when GEOCODE=YES or ALL, and the default value of MODE is NO.
</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>NODE=S or NODE=S,7</b></td>
   <td>Specifies the starting position and length of the input node ID field.  This
NODE=S,7	control entry is valid only for COW Functions 2 and 2W.  An input node ID field must always have a length of seven bytes, which may be coded explicitly as ‘7’ in this control entry or it may be left uncoded, in which case it defaults to that value.  

This entry must be coded if you have node input instead of two intersecting streets or an intersection name.  Since node input stands on its own and does not require a borough code, the GBAT statistical report will not include groupings by borough.  It is therefore recommended that the user not mix street name/street code input with node input.
</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>ONSTREET=S,L <br> CROSS1=S,L <br> CROSS2=S,L</b></td>
   <td>Specify the starting positions and lengths of input street name fields for Functions
	1, 1A, 1B, 1E, 1N, 2, 3, 3C, 3S.  (For functions 1, 1A, 1B, 1E, those fields may
	 contain free-form addresses.)  The appropriate combination of these control entries
		for the function being called must be coded, as follows:
    <br/>
    <table>
      <tr>
        <th>Functions</th>
        <th>Field(s) Specified</th>
        <th>Control Entries Used to Specify These Fields</th>
      </tr>      <tr>
        <td>1, 1A, 1B, 1E, 1N</td>
        <td>‘On’ Street</td>
        <td>ONSTREET</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Two Intersecting Streets in Either Order</td>
        <td>ONSTREET and CROSS1</td>
      </tr>
      <tr>
        <td>3, 3C, 3S</td>
        <td>‘On’ Street and	, Two Cross Streets in Either Order</td>
        <td>ONSTREET, CROSS1 and CROSS2 (Note: For Function 3S, input cross street fields are optional.) </td>
      </tr>    
    </table>

Whenever input street name fields are specified by coding any of the three control entries ONSTREET, CROSS1 and CROSS2, an input borough code field (or fields) must also be specified, by coding the control entry BORO (and optionally CROSSBORO1 and CROSSBORO2, as appropriate).

<br>
Note: for Functions 1, 1A, 1B, 1E, 2, 3, 3C and 3S, but not function 1N, input street data may be provided either in the form of street name fields, specified using the control entries ONSTREET, CROSS1 and CROSS2, or alternatively, in the form of five-digit street code fields (<a href="../../chapters/chapterIV/section08/">see ChapterIV.8</a>), specified using the control entries STRTCODE, CRSCOD1 and CRSCOD2.  For those of the aforementioned functions that accept multiple input streets, either all of those input streets must take the form of street names or all must take the form of street codes;  a mixture of names and codes is not permitted.  For Function 1N, street name input fields are mandatory.
</td>
</tr>
 <tr>
    <td class="topVerticalTD"><b>QUEENS</b></td>
    <td>See BRONX.</td>
  </tr>
  <tr>
     <td class="topVerticalTD"><b>REALSTREETONLY=V</b></td>
     <td>Specifies whether the Real Street Only request (described in Chapter VII.6) is in effect.  This control entry is valid only for COW function 3S.  This control entry is optional.

REALSTREETONLY=YES specifies that the Real Street Only flag is set to ‘R’.  Only real streets (not bends or non-street features) will be returned to the user.

REALSTREETONLY=NO specifies that the Real Street Only flag is set to blank.  All intersections, including bends and non-street features, will be returned to the user.

If this control entry is not coded, the default value is NO.</td>
   </tr>
   <tr>
   <td class="topVerticalTD"><b>RECTYPE=V</b></td>
   <td>Specifies the Geosupport function to be executed.  This control entry is mandatory.  The valid variable values are the valid Geosupport function codes. As of this writing, these are 1, 1A, 1B, 1E, 1N, 2, 3, 3C, 3S, AP, BL, BN, D, DG, DN.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>REJECTWARNINGS=V</b></td>
   <td>Specifies whether input data records that result in warnings are to be treated as accepted records or as rejects (see discussion of REJECTWARNINGS in <a href="../../chapters/chapterXI/section07/">Section XI.7</a>).  The valid variable values are YES and NO.  This control entry is optional, and the default value is NO.

If REJECTWARNINGS=YES is coded, records resulting in warnings (GRC=01) are treated as rejects;  that is, they are written into ERRFILE (or ERRFIL2) rather than OUTFILE, they are counted as rejects in the report of run statistics, and they are considered to be rejects for the purpose of determining whether a MAXREJECTS termination is to be triggered.  

If REJECTWARNINGS=NO is coded or is in effect by default, warnings are treated as accepted records;  that is, they are written into OUTFILE rather than ERRFILE (or ERRFIL2), they are counted as accepted records in the report of run statistics, and they are considered to be accepted records for the purpose of determining whether a MAXREJECTS termination is to be triggered.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>RELATEDNODES=V</b></td>
   <td>If COW Function 2 results in a ‘many-node case’ (GRC 03 with Reason Code A), this control entry specifies if GBAT should return the Nodes and B7SCs for the streets at those nodes (up to 20 nodes).  This control entry is valid only with WORKAREA=COW, RECTYPE=2 and GEOCODE=YES or ALL.  ERRFIL3 will contain this output.  The variable values are YES and NO and are self-explanatory. If these If this control entry is not coded, the default value is NO. </td>
 </tr>
 <tr>
    <td class="topVerticalTD"><b>ROADBED=V</b></td>
    <td>Specifies whether the output of a multi-Roadbed street should contain Roadbed information or information based on the center line of the street. This control entry is valid only for Functions 1, 1E, 1B and 3S for which it is optional.  The variable values are YES and NO and are self-explanatory.  If this control entry is not coded, the default value is NO.</td>
  </tr>
  <tr>
   <td class="topVerticalTD"><b>SNL=V</b></td>
   <td>Specifies a value for the Street Name Normalization Length Limit (SNL) parameter (<a href="../../chapters/chapterIII/section02/">see ChapterIII.2</a>).  The variable value must be a number between 4 and 32, inclusive.  This control entry is valid only for functions that return normalized street names, for which it is optional.  The default value is 32. </td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>STATEN</b></td>
   <td>See BRONX.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>STRTCODE=S,L <br> CRSCOD1=S,L <br> CRSCOD2=S,L </b></td>
   <td>Specify the starting positions and lengths of input five-digit street code fields for
	Functions 1, 1A, 1B, 1E, 2, 3, 3C, 3S and D.  The appropriate combination of these
	control entries for the function being called must be coded, as follows:


<table>
    <tr>
      <th>Functions</th>
      <th>Street Input Fields Required</th>
      <th>Control Entries Used to Specify These Fields</th>
    </tr>
    <tr>
      <td>1, 1A, 1B, 1E </td>
      <td>‘On’ Street</td>
      <td>STRTCODE</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Two Intersecting Streets in Either Order</td>
      <td>STRTCODE and CRSCOD1 </td>
    </tr>
    <tr>
      <td>3, 3C, 3S</td>
      <td>‘On’ Street and Two Cross Streets in Either Order</td>
      <td>STRTCODE, CRSCOD1 and CRSCOD2 (Note: For Function 3S, input cross street fields are optional.)</td>
    </tr>
    <tr>
      <td>D	</td>
      <td>Up to Three 5-Digit Street Codes</td>
      <td>CRSCOD1 if necessary, CRSCOD2 if necessary</td>
    </tr>
</table>


  Each of the input street code fields specified by STRTCODE, CRSCOD1 and CRSCOD2 must contain a five-digit street code in one of four formats:  P5SC (which has a length of 3 bytes, valid only with MSW format), PB5SC (length = 4, valid only with MSW format), 5SC (length = 5) or B5SC (length = 6).  For Functions 2, 3, 3C, 3S and D, which can have multiple input five-digit street code fields, it is allowable for those fields to have different formats;  for example, for MSW Function 3, it is permissible for the input ‘on’ street field to contain a PB5SC while one input cross street field contains a 5SC and the other input cross street field contains a B5SC. The user must code the length variable value in each of these control entries so that it accords with the street code format of the corresponding input street code field.  GBAT uses that length value to determine which five-digit street code format to expect in that input field.

If any input street code fields are in the form of P5SCs or 5SCs, which do not contain their own borough code sub-field, the input data file must also have a separate input borough code field or fields, which must be specified by coding the control entry BORO, and if needed, the control entries CROSSBORO1 and CROSSBORO2.

Note:  for Functions 1, 1A, 1B, 1E, 2, 3, 3C and 3S, but not Function D, input street data may be provided either in the form of five-digit street code fields, specified using the control entries STRTCODE, CRSCOD1 and CRSCOD2, or alternatively, in the form of street name fields, specified using the control entries ONSTREET, CROSS1 and CROSS2.  For those of the aforementioned functions that accept multiple input streets, either all of those input streets must take the form of street codes or all must take the form of street names;  a mixture of codes and names is not permitted.  For Function D, input street data must be in the form of street codes.

  </td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>TITLE=V</b></td>
   <td>Specifies a title to appear on the top of the SYSPRINT output report of summary run statistics.  A valid variable value is any character string of up to 73 bytes ending in a semicolon.  This control entry is optional.  If it is not coded, the report is generated without a title.  If it is coded, it is mandatory to terminate the title character string with a semicolon, which does not appear in the actual report.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>TPADDATA=V</b></td>
   <td>Specifies whether TPAD processing should be performed for functions 1A, 1B, BL, and BN Work Area 2 giving more up-to-date property-level information. (<a href="../../chapters/chapterVI/section11/">see ChapterVI.11</a>).The valid variable values are YES and NO.  Y requests the TPAD processing.  The TPADDATA option is available only for COW format (WORKAREA=COW) Functions 1A, 1B, BL, and BN;  this control entry is invalid for all other functions.  All other control cards are the same for each of the Functions 1A, 1B, BL or BN.  For the functions that have the TPAD option, this control entry (TPADDATA=YES) is invalid/ignored when GEOCODE=NO or VAL;  it is optional when GEOCODE=YES or ALL, and the default value of TPADDATA= NO.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>UNIT=S,L</b></td>
   <td>Specify the starting position and length for the input Unit field.  This control entry is valid only for COW Functions 1, 1E, 1A and 1B.  This control entry is optional and there is no default.  To have GBAT append the Normalized Display Format Unit Output field (in OUTFILE) also specify GEOUNIT=YES and either GEOCODE=NO or GEOCODE=ALL.  See the description of those control entries.  For a description of the Unit fields, <a href="../../chapters/chapterV/section15/">see ChapterV.15</a>.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>VSAM=V</b></td>
   <td>Specifies whether the input data file is a VSAM file or a sequential file.  The valid variable values are YES and NO, specifying that the file is a VSAM file or a sequential file, respectively.  This control entry is optional, and NO is the default value.  If NO is specified or is in effect by default, then in the JCL, the DD statement for the input data file must contain the DDname INFILE.  If YES is specified, the DDname must be coded as INVSAM.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>WORKAREA=V</b></td>
   <td>Specifies whether the work areas should be in MSW or COW format. The WORKAREA control entry is valid for all functions.  The valid variable values are COW (Character Only Work Area) and MSW (Mainframe Specific Work Area), and are self-explanatory.  If this control entry is not coded, the default value is MSW.</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>WORKAREA1=V</b></td>
   <td>Specifies whether Work Area 1 is to be included at the end of each record written to the Output File of Rejected Records.  The valid variable values are YES or NO.  YES requests that Work Area 1 be included in the output records.  NO requests that Work Area 1 not be included in the output records.  When WORKAREA1=YES the records are written to ERRFIL4 and ERRFIL5; when WORKAREA1=NO, the records are written to ERRFILE and ERRFIL2 (<a href="../../chapters/chapterIX/section08/">see Chapter IX.8</a>).  WORKAREA1 is optional and is valid only when the format is COW (WORKAREA=COW).  The default value of WORKAREA1 is NO.
</td>
 </tr>
 <tr>
   <td class="topVerticalTD"><b>ZIPCODE=S or ZIPCODE=S,5</b></td>
   <td>Specifies the starting position and length of the input ZIP code field.  This control
 entry is valid only for Functions 1, 1A, 1B and 1E.  An input ZIP code field must always have a length of five bytes, which may be coded explicitly as ‘5’ in this control entry or it may be left uncoded, in which case it defaults to that value.</td>
 </tr>

 <tr>
   <td class="topVerticalTD"><b>1ABLVERSION=V</b></td>
   <td>Specifies that standard processing is to be performed for Functions 1A and BL (<a href="../../chapters/chapterVI/section08/">see ChapterVI.8</a>).  The 1ABLVERSION control entry is valid only for Functions 1A and BL, and is required for the MSW format.  The only valid variable value for this control entry is STANDARD or S, and is self-explanatory.  Note: Legacy has been discontinued..</td>
 </tr>


</table>  


## <span id="appendix09.2"><center>Table A9-2:  Summary of GBAT Control Entries by Keyword</center></span>

This table lists all of the control entries alphabetically by keyword, indicates their coding formats, their allowable and default variable values, and the Geosupport functions for which each control entry or combination of control entry and variable value is valid.  Control entry variables are indicated using ‘S’ and ‘L’ to represent the starting position and length of a field in the input data records, respectively, and ‘V’ to represent variables of other types.


<table>
  <tr>
    <td colspan="4"><center>Table A9-2:  Summary of GBAT Control Entries by Keyword</center></td>
  </tr>
  <tr>
    <th>Control Entry</th>
    <th>Valid Variable Values</th>
    <th>Default</th>
    <th>Functions</th>
  </tr>
  <tr>
    <td>ALIASES=V</td>
    <td>NO, YES, VAL</td>
    <td>NO</td>
    <td>1, 1A, 1B, 1E, 1N, 2, 3, 3C, 3S, AP</td>
  </tr>
  <tr>
    <td>AUXSEG=V</td>
    <td>YES, NO</td>
    <td>NO</td>
    <td>COW only: 3, 3C</td>
  </tr>
  <tr>
    <td>BBL=S,10</td>
    <td>1
      <=S <=( LRECL-1)-10</td>
        <td>None</td>
        <td>BL</td>
  </tr>
  <tr>
    <td>BIN=S or BIN=S,7</td>
    <td>1
      <=S <=( LRECL+1)-7</td>
        <td>L=7</td>
        <td>BN</td>
  </tr>
  <tr>
    <td>BLOCK=S or BLOCK=S,5</td>
    <td>1
      <=S <=( LRECL+1)-5</td>
        <td>L=5</td>
        <td>BL</td>
  </tr>
  <tr>
    <td>BORO=S,L</td>
    <td>1
      <=S <=( LRECL+1)-L <br> 1
        <=L <=1 2</td>
          <td>None</td>
          <td>All but BN, DG, DN</td>
  </tr>
  <tr>
    <td>BRONX=V</td>
    <td>Any character string that fits BORO</td>
    <td>2</td>
    <td>All but BN, DG, DN</td>
  </tr>
  <tr>
    <td>BROOKLYN=V</td>
    <td>Any character string that fits BORO</td>
    <td>3</td>
    <td>All but BN, DG, DN</td>
  </tr>
  <tr>
    <td>BROWSEFLAG=V</td>
    <td>P, F, R</td>
    <td>None</td>
    <td>1, 1A, 1B, 1E,1N, 2, 3, 3C, AP</td>
  </tr>
  <tr>
    <td>B7SC1=S or B7SC1=S,8</td>
    <td>1
      <=S <=( LRECL+1)-8</td>
        <td>L=8</td>
        <td>DG</td>
  </tr>
  <tr>
    <td>B7SC2=S or B7SC2=S,8</td>
    <td>1
      <=S <=( LRECL+1)-8</td>
        <td>L=8</td>
        <td>DG</td>
  </tr>
  <tr>
    <td>B7SC3=S or B7SC3=S,8</td>
    <td>1
      <=S <=( LRECL+1)-8</td>
        <td>L=8</td>
        <td>DG</td>
  </tr>
  <tr>
    <td>B10SC1=S or B10SC1=S,11</td>
    <td>1
      <=S <=( LRECL+1)-11</td>
        <td>L=11</td>
        <td>DN</td>
  </tr>
  <tr>
    <td>B10SC2=S or B10SC2=S,11</td>
    <td>1
      <=S <=( LRECL+1)-11</td>
        <td>L=11</td>
        <td>DN</td>
  </tr>
  <tr>
    <td>B10SC3=S or B10SC3=S,11</td>
    <td>1
      <=S <=( LRECL+1)-11</td>
        <td>L=11</td>
        <td>DN</td>
  </tr>
  <tr>
    <td>COMPACT=V</td>
    <td>YES, NO</td>
    <td>NO</td>
    <td>All but BL, BN</td>
  </tr>
  <tr>
    <td>COMPASS=S</td>
    <td>1
      <=S <=L RECL</td>
        <td>None</td>
        <td>2, 3C, 3S</td>
  </tr>
  <tr>
    <td>COMPASS2=S</td>
    <td>1
      <=S <=L RECL</td>
        <td>None</td>
        <td>3S</td>
  </tr>
  <tr>
    <td>CROSSBORO1=S,L</td>
    <td>1
      <=S <=( LRECL+1)-L <br> 1
        <=L <=1 2</td>
          <td>None</td>
          <td>2, 3, 3C, 3S, D</td>
  </tr>
  <tr>
    <td>CROSSBORO2=S,L</td>
    <td>1
      <=S <=( LRECL+1)-L <br> 1
        <=L <=1 2</td>
          <td>None</td>
          <td>3, 3C, 3S, D</td>
  </tr>
  <tr>
    <td>CROSSSTNAMES=V</td>
    <td>YES, NO (YES is valid only for GEOCODE=ALL)</td>
    <td>NO</td>
    <td>1, 1B, 1E, 2, 3, 3C</td>
  </tr>
  <tr>
    <td>CROSS1=S,L</td>
    <td>1
      <=S <=( LRECL+1)-L <br> 4
        <=L <=3 2</td>
          <td>None</td>
          <td>2, 3, 3C, 3S</td>
  </tr>
  <tr>
    <td>CROSS2=S,L</td>
    <td>1
      <=S <=( LRECL+1)-L <br> 4
        <=L <=3 2</td>
          <td>None</td>
          <td>3, 3C, 3S</td>
  </tr>
  <tr>
    <td>CRSCOD1=S,L</td>
    <td>1
      <=S <=( LRECL+1)-L <br> 1
        <=L <=1 2</td>
          <td> None</td>
          <td> 3, 3C, 3S, D</td>
  </tr>
  <tr>
    <td>CROSS1=S,L</td>
    <td> 1
      <=S <=( LRECL+1)-L <br> 4
        <=L <=3 2</td>
          <td> None</td>
          <td> 2, 3, 3C, 3S</td>
  </tr>
  <tr>
    <td>CROSS2=S,L</td>
    <td> 1
      <=S <=( LRECL+1)-L <br> 4
        <=L <=3 2</td>
          <td> None</td>
          <td> 3, 3C, 3S</td>
  </tr>
  <tr>
    <td>CRSCOD1=S,L</td>
    <td> 1
      <=S <=( LRECL+1)-L <br> L=3 if field contains P5SC (MSW) <br> L=4 if field contains PB5SC (MSW) <br> L=5 if field contains 5SC <br> L=6 if field contains B5SC</td>
    <td>None</td>
    <td>2, 3, 3C, 3S, D</td>
  </tr>
  <tr>
    <td>CRSCOD2=S,L</td>
    <td> 1
      <=S <=( LRECL+1)-L <br> L=3 if field contains P5SC (MSW) <br> L=4 if field contains PB5SC (MSW) <br> L=5 if field contains 5SC <br> L=6 if field contains B5SC</td>
    <td> None</td>
    <td> 3, 3C, 3S, D</td>
  </tr>
  <tr>
    <td rowspan="2">GEOCODE=V</td>
    <td rowspan="2">NO, YES, ALL, VAL <br> YES and ALL are invalid for Functions 1N, D, DG, DN)</td>
    <td>NO</td>
    <td>1, 1N, 2, 3, D, DG, DN</td>
  </tr>
  <tr>
    <td>YES</td>
    <td>1A, 1B, 1E, 3C, 3S, AP, BL, BN</td>
  </tr>
  <tr>
    <td>GEOUNIT=V</td>
    <td> YES, NO <br> (YES is valid only for GEOCODE=NO or <br> GEOCODE=ALL) <br></td>
    <td> NO</td>
    <td> COW only: 1, 1E, 1A, 1B</td>
  </tr>
  <tr>
    <td rowspan="2">HNI=V</td>
    <td rowspan="2">YES, NO   (MSW format only) <br> (NO is invalid for MSW Fns D, DG, DN)</td>
    <td>YES</td>
    <td>D, DG, DN</td>
  </tr>
  <tr>
    <td>NO</td>
    <td>1, 1A, 1E</td>
  </tr>
  <tr>
    <td rowspan="2">HNS=V</td>
    <td rowspan="2">YES, NO   (COW format only) <br> (NO is invalid for COW Fns D, DG, DN)</td>
    <td>YES</td>
    <td>D, DG, DN</td>
  </tr>
  <tr>
    <td>NO</td>
    <td>1, 1A, 1B, 1E, AP</td>
  </tr>
  <tr>
    <td>HOUSENUM=S or HOUSENUM=S,L</td>
    <td> 1
      <=S <=( LRECL+1)-L <br> 5
        <=L <=1 2 if field contains house number in character format <br> L= 6 if field contains HNI <br> L=11 if field contains HNS </td>
    <td> L=6 when HNI=YES;L=11 when HNS= YES else no length default</td>
    <td> 1, 1A, 1B, 1E, AP, D, DG, DN</td>
  </tr>
  <tr>
    <td>HOUSENUM2=S or HOUSENUM2=S,L</td>
    <td> 1
      <=S <=( LRECL+1)-L <br> L= 6 if field contains HNI <br> L=11 if field contains HNS</td>
    <td>L=6 when HNI=YES; <br> L=11 when HNS=YES</td>
    <td>D, DG, DN</td>
  </tr>
  <tr>
    <td>LONGWA2=V</td>
    <td> YES, NO</td>
    <td> NO</td>
    <td> MSW and COW: 1A, BL <br> MSW only: <br> 1, 1E, 3</td>
  </tr>
  <tr>
    <td>LOT=S,4</td>
    <td> 1
      <=S <=( LRECL+1)-4</td>
        <td> None</td>
        <td>BL</td>
  </tr>
  <tr>
    <td>MANHATTAN=V</td>
    <td> Any character string that fits BORO</td>
    <td>1</td>
    <td>All but BN, DG, DN</td>
  </tr>
  <tr>
    <td>MAXREJECTS=V</td>
    <td>Any positive integer or NOMAX</td>
    <td>200</td>
    <td>All</td>
  </tr>
  <tr>
    <td>MODE=V</td>
    <td>X, NO</td>
    <td>NO</td>
    <td>COW and GEOCODE=ALL or YES:<br>1,1E,1A,3,3C,<br>BL,BN</td>
  </tr>
  <tr>
    <td>ONSTREET=S,L</td>
    <td>1
      <=S <=( LRECL+1)-L<br>4
        <=L <=3 2</td>
          <td>None</td>
          <td>1, 1A, 1B, 1E, 1N, AP, 2, 3, 3C, 3S</td>
  </tr>
  <tr>
    <td>QUEENS=V</td>
    <td>Any character string that fits BORO</td>
    <td>4</td>
    <td>All but BN, DG, DN</td>
  </tr>
  <tr>
    <td>RECTYPE=V</td>
    <td>1, 1A, 1B, 1E, 1N, 2, 3, 3C, 3S, AP, BL, BN, D, DG, DN</td>
    <td>None</td>
    <td>All (Note 1B and AP are COW only</td>
  </tr>
  <tr>
    <td>REALSTREETONLY=V</td>
    <td>YES, NO</td>
    <td>NO</td>
    <td>COW only: 3S</td>
  </tr>
  <tr>
    <td>REJECTWARNINGS=V</td>
    <td>YES, NO</td>
    <td>NO</td>
    <td>All</td>
  </tr>
  <tr>
    <td>ROADBED</td>
    <td>YES, NO</td>
    <td>NO</td>
    <td>1, 1B, 1E, 3S</td>
  </tr>
  <tr>
    <td>SNL=V</td>
    <td>4
      <=V <=3 2</td>
        <td>32</td>
        <td>All but BL, BN</td>
  </tr>
  <tr>
    <td>STATEN=V</td>
    <td>Any character string that fits BORO</td>
    <td>5</td>
    <td>All but BN, DG, DN</td>
  </tr>
  <tr>
    <td>STRTCODE=S,L</td>
    <td>1
      <=S <=( LRECL+1)-L<br>L=3 if contains P5SC (MSW<br>L=4 if contains PB5SC (MSW)<br>L=5 if contains 5SC<br>L=6 if contains B5SC<br></td>
    <td>None</td>
    <td>1, 1A, 1B, 1E, 2, 3, 3C, 3S, AP, D</td>
  </tr>
  <tr>
    <td>TITLE=V</td>
    <td>Any character string of up to 73 bytes ending in a semicolon</td>
    <td>No title</td>
    <td>All</td>
  </tr>
  <tr>
    <td>TPADDATA=V</td>
    <td>YES, NO</td>
    <td>NO</td>
    <td>1A, 1B, BL, BN</td>
  </tr>
  <tr>
    <td>UNIT=S,L</td>
    <td>1
      <=S <=( LRECL+1)-L<br>1
        <=L <=1 4</td>
          <td>None</td>
          <td>COW only: 1, 1E, 1A, 1B</td>
  </tr>
  <tr>
    <td>VSAM=V</td>
    <td>YES, NO</td>
    <td>NO</td>
    <td>All</td>
  </tr>
  <tr>
    <td>WORKAREA=V</td>
    <td>COW, MSW</td>
    <td>MSW</td>
    <td>All</td>
  </tr>
  <tr>
    <td>WORKAREA1=V</td>
    <td>YES, NO</td>
    <td>NO</td>
    <td>COW only: All</td>
  </tr>
  <tr>
    <td>ZIPCODE=S or ZIPCODE=S,5</td>
    <td>1
      <=S <=( LRECL+1)-5</td>
        <td>L=5</td>
        <td>1, 1A, 1B, 1E, AP</td>
  </tr>
  <tr>
    <td>1ABLVERSION=V</td>
    <td>STANDARD, S</td>
    <td>None</td>
    <td>1A, BL</td>
  </tr>
</table>


## <span id="appendix09.3"><center>Table A9-3:  Summary of GBAT Control Entry Usage by Function</center></span>

This table lists, by Geosupport function, which control entries are allowable and which of those are mandatory. Control entries are represented in this table by their keywords.  Some combinations of control entries are mandatory or prohibited; such conditions are indicated in this table by using the logical connectors “and”, “or” (inclusive or) and “xor” (exclusive or) and by using underlining, as follows:

<ul>

  <li>A table entry of the form “A and B” signifies that if either A or B is coded, then both must be coded.  Similarly, “A and B and C” signifies that if any of A, B or C is coded, then all three must be coded.</li>

  <li>A table entry of the form “A or B” signifies that A may be coded without B, B may be coded without A, and A and B may both be coded.  Similarly, “A or B or C” signifies that any combination of these three items may be coded.”</li>

  <li>A table entry of the form “A xor B” signifies that if either A or B is coded, then the other one must not be coded.</li>

  <li>If a table entry is underlined, that control entry or combination of control entries is mandatory for the given function.  All table entries not underlined are optional.</li>

  <li>Square brackets (“ [.....]”) are sometimes used for logical grouping to increase clarity.</li>

  Thus, a table entry of the form “A or B” signifies that it is mandatory to code A or B; that is, it is mandatory to code at least one of A and B and it is permissible to code both A and B.  “A xor B” signifies that it is mandatory to code A xor B; that is, it is mandatory to code either A or B but prohibited (because of the exclusive or) to code both A and B.  A table entry of the form “ [A and B] xor [C and D]” signifies that it is mandatory to code either both A and B or both C and D but prohibited to code all four of them.

</ul>

<table class="borderlessTable">

  <tr>
    <td><b><u>Function</u></b></td>
    <td><b><u>Control Entries</u></b></td>
  </tr>

  <tr>
    <td>1</td>
    <td>ALIASES, <u>BORO or ZIPCODE</u>, BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, BROWSEFLAG (valid only if WORKAREA=COW),COMPACT, CROSSSTNAMES, GEOCODE, GEOUNIT (requires WORKAREA=COW and [GEOCODE=NO or GEOCODE=ALL]), HNI xor HNS (see Note 1), HOUSENUM (see Note 2), LONGWA2 xor WORKAREA=COW, MAXREJECTS, MODE=X (valid only if WORKAREA=COW and GEOCODE=ALL or YES),  <u>ONSTREET xor STRTCODE, RECTYPE</u>, REJECTWARNINGS, ROADBED, SNL, TITLE, UNIT (requires WORKAREA=COW), WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM</td>
  </tr>

  <tr>
    <td></td>
    <td><u>Note 1</u>: HNI is a valid entry only if WORKAREA defaults to MSW or is set to MSW.  HNS is a valid entry only if WORKAREA=COW</td>
  </tr>

  <tr>
    <td></td>
    <td><u>Note 2</u>: For Functions 1, 1A 1B and 1E, HOUSENUM is optional in the sense that coding it is either mandatory or prohibited, depending, respectively, on whether the input data file contains free-form addresses (in which a single field contains the house number followed by the street name in non-fixed positions;  <a href="../../chapters/chapterV/section03/">see ChapterV.3</a>) or parsed-form addresses (in which the house number and street name are in separate fields). When HOUSENUM is not coded, the input street must be in the form of street names rather than street codes, the input street name field must be specified by the control entry ONSTREET, and in every input data record, that field must contain either a free-form address or a Non-Addressable Place name (NAP).  When HOUSENUM is coded, and the input street is in the form of street names, GBAT assumes that the input street name field contains street names and NAPs only, not free-form addresses.</td>
  </tr>

  <tr>
    <td>1 Extended</td>
    <td>Same as Function 1, except <u>[GEOCODE=ALL] xor [GEOCODE=YES], MODE=X, WORKAREA=COW</u></td>
  </tr>

  <tr>
    <td>1A</td>
    <td>ALIASES, <u>BORO or ZIPCODE</u>, BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, BROWSEFLAG (valid only if WORKAREA=COW), COMPACT, GEOCODE, GEOUNIT (requires WORKAREA=COW and [GEOCODE=NO or GEOCODE=ALL]), HNI xor HNS (see Note 1 following Function 1 entry), HOUSENUM (see Note 2 following Function 1 entry), LONGWA2, MAXREJECTS, <u>ONSTREET xor STRTCODE, RECTYPE</u>, REJECTWARNINGS, ROADBED, SNL, TITLE, TPADDATA (requires WORKAREA=COW), UNIT (requires WORKAREA=COW), WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM,  1ABLVERSION</td>
  </tr>

  <tr>
    <td>1A Extended</td>
    <td>Same as Function 1A, except <u>[GEOCODE=ALL] xor [GEOCODE=YES], LONGWA2=NO (specified or by default), MODE=X, WORKAREA=COW</u></td>
  </tr>

  <tr>
    <td>1B</td>
    <td>ALIASES, <u>BORO or ZIPCODE</u> , BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, BROWSEFLAG , COMPACT, CROSSSTNAMES, <u>[GEOCODE=ALL] xor [GEOCODE=YES]</u>, GEOUNIT (requires GEOCODE=ALL), HNS, HOUSENUM (see Note 2 following Function 1 entry), MAXREJECTS, <u>ONSTREET xor STRTCODE, RECTYPE</u>, REJECTWARNINGS, ROADBED, SNL, TITLE, TPADDATA, UNIT, <u>WORKAREA=COW</u>, WORKAREA1, VSAM</td>
  </tr>

  <tr>
    <td>1E</td>
    <td>ALIASES, <u>BORO or ZIPCODE</u> , BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, BROWSEFLAG (valid only if WORKAREA=COW), COMPACT, CROSSSTNAMES, GEOCODE, GEOUNIT (requires WORKAREA=COW and [GEOCODE=NO or GEOCODE=ALL]), HNI xor HNS (see Note 1 following Function 1 entry), HOUSENUM (see Note 2 following Function 1 entry), LONGWA2 xor WORKAREA=COW, MAXREJECTS, <u>ONSTREET xor STRTCODE, RECTYPE</u>, REJECTWARNINGS, ROADBED, SNL, TITLE, UNIT (requires WORKAREA=COW), WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM</td>
  </tr>

  <tr>
    <td>1E Extended</td>
    <td>Same as Function 1E, except <u>[GEOCODE=ALL] xor [GEOCODE=YES], MODE=X, WORKAREA=COW</u></td>
  </tr>

  <tr>
    <td>1N</td>
    <td>ALIASES, <u>BORO</u>, BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, BROWSEFLAG (valid only if WORKAREA=COW), COMPACT, GEOCODE, MAXREJECTS, <u>ONSTREET, RECTYPE</u>, REJECTWARNINGS, SNL, TITLE, WORKAREA, VSAM</td>
  </tr>

  <tr>
    <td>2</td>
    <td>ALIASES, <u>BORO</u>, BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, BROWSEFLAG (valid only if WORKAREA=COW), COMPACT, COMPASS, CROSSBORO1, CROSSSTNAMES, GEOCODE, MAXREJECTS, <u>[ONSTREET and CROSS1] xor [STRTCODE and CRSCOD1], RECTYPE</u>, REJECTWARNINGS, SNL, TITLE, WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM</td>
  </tr>

  <tr>
    <td>3</td>
    <td>ALIASES, AUXSEG (see Note 3), <u>BORO</u>, BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, BROWSEFLAG (valid only if WORKAREA=COW), COMPACT, CROSSBORO1, CROSSBORO2, CROSSSTNAMES, GEOCODE, LONGWA2 xor WORKAREA=COW, MAXREJECTS, <u>[ONSTREET and CROSS1 and CROSS2] xor [STRTCODE and CRSCOD1 and CRSCOD2], RECTYPE</u>, REJECTWARNINGS, SNL, TITLE, WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM</td>
  </tr>

  <tr>
    <td></td>
    <td><u>Note 3</u>: AUXSEG is a valid entry only if WORKAREA=COW</td>
  </tr>

  <tr>
    <td>3C</td>
    <td>ALIASES, AUXSEG (see Note 3 following Function 3 entry), <u>BORO</u>, BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, BROWSEFLAG (valid only if WORKAREA=COW), COMPACT, COMPASS, CROSSBORO1, CROSSBORO2, CROSSSTNAMES, GEOCODE, MAXREJECTS, <u>[ONSTREET and CROSS1 and CROSS2] xor [STRTCODE and CRSCOD1 and CRSCOD2], RECTYPE</u>, REJECTWARNINGS, SNL, TITLE, WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM</td>
  </tr>

  <tr>
    <td>3/3C (extended)</td>
    <td></td>
  </tr>

  <tr>
    <td>3S</td>
    <td>ALIASES, <u>BORO</u>, BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, COMPACT, COMPASS, COMPASS2, CROSSBORO1, CROSSBORO2, [CROSS1 and CROSS2] xor STRTCODE, [CRSCOD1 and CRSCOD2] xor ONSTREET, GEOCODE, MAXREJECTS, <u>ONSTREET xor STRTCODE</u>, REALSTREETONLY (see Note 4), <u>RECTYPE</u>, REJECTWARNINGS, ROADBED, SNL, TITLE, WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM</td>
  </tr>

  <tr>
    <td></td>
    <td><u>Note 4</u>: REALSTREETONLY is a valid entry only if WORKAREA=COW</td>
  </tr>

  <tr>
    <td>AP</td>
    <td>ALIASES, <u>BORO or ZIPCODE</u>, BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, BROWSEFLAG , COMPACT, GEOCODE, HNS, HOUSENUM (see Note 2 following Function 1 entry), MAXREJECTS, <u>ONSTREET xor STRTCODE, RECTYPE</u>, REJECTWARNINGS, SNL, TITLE, <u>WORKAREA=COW</u>, WORKAREA1, VSAM </td>
  </tr>

  <tr>
    <td>AP Extended</td>
    <td>Same as Function AP, except <u>[GEOCODE=ALL] xor [GEOCODE=YES], MODE=X</u></td>
  </tr>

  <tr>
    <td>BL</td>
    <td><u>BORO and BLOCK and LOT xor BBL</u>, BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, LONGWA2, MAXREJECTS, <u>RECTYPE</u>, REJECTWARNINGS, TITLE, TPADDATA (requires WORKAREA=COW), VSAM, WORKAREA, WORKAREA1 (requires WORKAREA=COW), 1ABLVERSION</u></td>
  </tr>

  <tr>
    <td>BL Extended</td>
    <td>Same as Function BL, except <u>[GEOCODE=ALL] xor [GEOCODE=YES], LONGWA2=NO (specified or by default), MODE=X, WORKAREA=COW</u></td>
  </tr>

  <tr>
    <td>BN</td>
    <td><u>BIN</u>, GEOCODE, MAXREJECTS, <u>RECTYPE</u>, REJECTWARNINGS, TITLE, TPADDATA (requires WORKAREA=COW), WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM</td>
  </tr>

  <tr>
    <td>BN Extended</td>
    <td>Same as Function BN, except <u>[GEOCODE=ALL] xor [GEOCODE=YES], MODE=X, WORKAREA=COW</u></td>
  </tr>

  <tr>
    <td>D</td>
    <td>BRONX and BROOKLYN and MANHATTAN and QUEENS and STATEN, COMPACT, CROSSBORO1, CROSSBORO2, GEOCODE, HNI xor HNS, <u>HOUSENUM or HOUSENUM2 or [BORO and STRTCODE] or [BORO and STRTCODE and CRSCOD1] or [BORO and STRTCODE and CRSCOD1 and CRSCOD2]</u>, MAXREJECTS, <u>RECTYPE</u>, REJECTWARNINGS, SNL, TITLE, WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM</td>
  </tr>

  <tr>
    <td>DG</td>
    <td>COMPACT, GEOCODE, HNI xor HNS, <u>HOUSENUM or HOUSENUM2 or B7SC1 or [B7SC1 and B7SC2] or [B7SC1 and B7SC2 and B7SC3]</u>, MAXREJECTS, RECTYPE, REJECTWARNINGS, SNL, TITLE, WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM</td>
  </tr>

  <tr>
    <td>DN</td>
    <td>COMPACT, GEOCODE, HNI xor HNS, <u>HOUSENUM or HOUSENUM2 or B10SC1 or [B10SC1 and B10SC2] or [B10SC1 and B10SC2 and B10SC3]</u>, MAXREJECTS, <u>RECTYPE</u>, REJECTWARNINGS, SNL, TITLE, WORKAREA, WORKAREA1 (requires WORKAREA=COW), VSAM</td>
  </tr>

</table>

## <span id="appendix09-tblA9-4"<center>Table A9-4: MSW Appended Items for GEOCODE=NO</center></span>

NOTE: For COW Appended Items for GEOCODE=NO <a href="../appendix12/#a12-2">see TABLE 12.2</a>
This table contains, by function or combination of function and option, a layout of the data that GBAT appends to the input data record to form the OUTFILE record for the MSW format when GEOCODE=NO has been specified.

<table>
    <thead>
        <tr>
            <td><strong>Function(s)</strong></td>
            <td><strong>Option</strong></td>
            <td><strong>Appended Items</strong></td>
            <td><strong>Length</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1, 1A, 1E </td>
            <td></td>
            <td>HND HNHPD Normalized Street Name 10SC</td>
            <td>12 8 32 10</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Total Length:</td>
            <td>62</td>
        </tr>
        <tr>
            <td>1N</td>
            <td></td>
            <td>Normalized Street Name 10SC</td>
            <td>32 10</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Total Length:</td>
            <td>42</td>
        </tr>
        <tr>
            <td>2</td>
            <td></td>
            <td>Normalized Street Name-1 10SC-1 Normalized Street Name-2 10SC-2</td>
            <td>32 10 32 10</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Total Length:</td>
            <td>84</td>
        </tr>
        <tr>
            <td>3, 3C, 3S</td>
            <td></td>
            <td>Normalized Street Name-1 10SC-1 Normalized Street Name-2 10SC-2 Normalized Street Name-3 10SC-3</td>
            <td>32 10 32 10 32 10</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Total Length:</td>
            <td>126</td>
        </tr>
        <tr>
            <td>BL</td>
            <td>1ABLVERSION=STANDARD</td>
            <td>BBL (Standard Format): Borough Code Tax Block Tax Lot</td>
            <td>1 5 4</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Total Length:</td>
            <td>10</td>
        </tr>
        <tr>
            <td></td>
            <td>1ABLVERSION=LEGACY</td>
            <td>No longer supported</td>
            <td></td>
        </tr>
        <tr>
            <td>BN</td>
            <td></td>
            <td>BIN Filler</td>
            <td>73</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Total Length:</td>
            <td>10</td>
        </tr>
        <tr>
            <td>D, DG, DN
            </td>
            <td>HOUSENUM2 control entry not coded</td>
            <td>HND Normalized Street Name-1 Normalized Street Name-2 Normalized Street Name-3</td>
            <td>12 32 32 32</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Total Length:</td>
            <td>108</td>
        </tr>
        <tr>
            <td>D, DG,DN (cont.)</td>
            <td>HOUSENUM2 control entry coded</td>
            <td>HND-1 Normalized Street Name-1 Normalized Street Name-2 Normalized Street Name-3 HND-2</td>
            <td>12 32 32 32 12</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Total Length:</td>
            <td>120</td>
        </tr>
    </tbody>
</table>

## <span id="appendix09-tblA9-5"><center>Table A9-5: MSW Format- Length of GBAT‑Appended Data</center></span>

This table lists, by function and GEOCODE value, the length in bytes of the data that GBAT appends to an input data record that has been accepted by Geosupport to form the corresponding OUTFILE record.  The LRECL value that the user must specify in the OUTFILE DD statement in the JCL is computed by adding the length of the appended data as indicated in this table to the LRECL of the input data file.

Note: For Functions 1, 1E, 2, 3 and 3C, when GEOCODE=ALL and CROSSSTNAMES=YES, the appended data consist of the concatenation of the GEOCODE=NO data, followed by a 320-byte block of data containing cross street names, followed by the GEOCODE=YES data.  For further information about the layout of the appended CROSSSTNAMES data, refer to the <a href="../appendix03/">Appendix 3</a> entry for the List of Street Names (see paragraph on List of Cross Street Names).

<table>
    <thead>
        <tr>
            <td rowspan="2">MSW Functions</td>
            <td rowspan="2">Options</td>
            <td colspan="3">GEOCODE Value</td>
        </tr>
        <tr>
            <td>NO</td>
            <td>YES</td>
            <td>ALL</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td>62</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>LONGWA2=NO, CROSSSTNAMES=NO</td>
            <td></td>
            <td>200</td>
            <td>262</td>
        </tr>
        <tr>
            <td>1, 1E</td>
            <td>LONGWA2=YES, CROSSSTNAMES=NO</td>
            <td></td>
            <td>300</td>
            <td>362</td>
        </tr>
        <tr>
            <td></td>
            <td>LONGWA2=NO, CROSSSTNAMES=YES</td>
            <td></td>
            <td></td>
            <td>582</td>
        </tr>
        <tr>
            <td></td>
            <td>LONGWA2=YES, CROSSSTNAMES=YES</td>
            <td></td>
            <td></td>
            <td>682</td>
        </tr>
        <tr>
            <td></td>
            <td>1ABLVERSION=STANDARD</td>
            <td>62</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>1A</td>
            <td>1ABLVERSION=STANDARD, LONGWA2=NO</td>
            <td></td>
            <td>939</td>
            <td>1001</td>
        </tr>
        <tr>
            <td></td>
            <td>1ABLVERSION=STANDARD,LONGWA2=YES</td>
            <td></td>
            <td>17683</td>
            <td>17745</td>
        </tr>
        <tr>
            <td>1N</td>
            <td></td>
            <td>42</td>
            <td>Invalid</td>
            <td>Invalid</td>
        </tr>
        <tr>
            <td>2</td>
            <td>CROSSSTNAMES=NO</td>
            <td>84</td>
            <td>200</td>
            <td>284</td>
        </tr>
        <tr>
            <td></td>
            <td>CROSSSTNAMES=YES</td>
            <td></td>
            <td></td>
            <td>604</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>126</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>LONGWA2=NO, CROSSSTNAMES=NO</td>
            <td></td>
            <td>200</td>
            <td>326</td>
        </tr>
        <tr>
            <td>3</td>
            <td>LONGWA2=YES, CROSSSTNAMES=NO</td>
            <td></td>
            <td>300</td>
            <td>426</td>
        </tr>
        <tr>
            <td></td>
            <td>LONGWA2=NO, CROSSSTNAMES=YES</td>
            <td></td>
            <td></td>
            <td>646</td>
        </tr>
        <tr>
            <td></td>
            <td>LONGWA2=YES, CROSSSTNAMES=YES</td>
            <td></td>
            <td></td>
            <td>746</td>
        </tr>
        <tr>
            <td>3C</td>
            <td>CROSSSTNAMES=NO</td>
            <td>126</td>
            <td>200</td>
            <td>326</td>
        </tr>
        <tr>
            <td></td>
            <td>CROSSSTNAMES=YES</td>
            <td></td>
            <td></td>
            <td>646</td>
        </tr>
        <tr>
            <td>3S</td>
            <td></td>
            <td>126</td>
            <td>4224</td>
            <td>4350</td>
        </tr>
        <tr>
            <td rowspan="3">BL</td>
            <td>1ABLVERSION=STANDARD</td>
            <td>10</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>1ABLVERSION=STANDARD, LONGWA2=NO</td>
            <td></td>
            <td>939</td>
            <td>949</td>
        </tr>
        <tr>
            <td>1ABLVERSION=STANDARD, LONGWA2=YES</td>
            <td></td>
            <td>17683</td>
            <td>17693</td>
        </tr>
        <tr>
            <td>BN</td>
            <td></td>
            <td>10</td>
            <td>939</td>
            <td>949</td>
        </tr>
        <tr>
            <td>D, DG, DN</td>
            <td>HOUSENUM2 not coded</td>
            <td>108</td>
            <td>Invalid</td>
            <td>Invalid</td>
        </tr>
        <tr>
            <td></td>
            <td>HOUSENUM2 coded</td>
            <td>120</td>
            <td>Invalid</td>
            <td>Invalid</td>
        </tr>
    </tbody>
</table>
