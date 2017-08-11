<h2 class="pdfAppendix"><center>APPENDIX 1: GEOSUPPORT FUNCTIONS - QUICK REFERENCE</center></h2>

## <span id="appendix01.1"> Introduction </span>

This appendix contains a summary description of each Geosupport function.  The entry for each function includes the following elements:

* <u>Description of function and UPG citations:</u>  A brief narrative description of the function’s purposes, main features and principal output data, with references to relevant sections in the body of the UPG.  (For a comprehensive list of output data items, see the corresponding work area layouts in [Appendix 2.](/appendices/appendix02/))

* <u><b>Validation:</b></u>  A description of the validation significance of a successful two-work area call to the function.  (The nature of the validation significance of a one-work area call is described in [Chapter II.4.](/chapters/chapterII/section04/))  Entries in this appendix for functions that cannot be called using two work areas do not have a validation section.

* <u>Input fields:</u>  A list of mandatory and optional WA1 input fields used to call the function.  All input field names are listed in this appendix as they appear in the WA1 layout in [Appendix 2](/appendices/appendix02/) for MSWs and [Appendix 13](/appendices/appendix13/) for COWs, except for street and house number input fields, which are listed as follows:

* Input street fields are usually listed in this appendix generically, using the terms ‘Street-1’, ‘Street-2’ and ‘Street-3’.  Input street data may be in the form of either street names or street codes; input street code data may be in several forms (see [Chapter IV.8](/chapters/chapterIV/section08/)).  The terms ‘Street-1’, ‘Street-2’ and ‘Street-3’ refer to any of the following three sets of WA1 input fields, the choice of which is at the discretion of the application designer:   Street Name-1, Street Name-2 and Street Name-3;  or PB5SC-1, PB5SC-2 and PB5SC-3 (MSW only); or B10SC-1, B10SC-2 and B10SC-3.  (<u>Note:</u> B5SC-x (where x = 1, 2 or 3) input and B7SC-x input is located left-justified and space-filled in the corresponding B10SC-x input fields.)

The generic street input field names, ‘Street-1’, ‘Street-2’ and ‘Street-3’, are not used in the entries for Function 1N, which accepts input street names only, and Functions D, DG and DN, which accept input street codes only.

* <u>Input house number fields</u> are listed generically using the term ‘House Number’.  Input house numbers may be in a displayable, character format, using the WA1 input field called House Number, or they may be in HNI format (MSW, see [Chapter V.2](/chapters/chapterV/section02/)), using the WA1 input field House Number in Internal Format (HNI), or they may be in HNS format (COW, see [Chapter V.2](/chapters/chapterV/section02/)); using the WA1 input field House Number in Sort Format (HNS).

* <u>Selected Geosupport Return Codes:</u> A list of selected Geosupport Return Codes (GRCs) and Reason Codes that the function can issue, with brief explanations.  Only certain notable GRCs specific to the function are included.  GRCs that are self-explanatory or that apply to many functions, such as those relating to system errors or to street name normalization and recognition problems, are not included.  For a complete list of GRCs, Reason Codes and Messages, see [Appendix 4](/appendices/appendix04/).

[Appendix 2](/appendices/appendix02/) (MSW) and [Appendix 13](/appendices/appendix13/) (COW) contain the work area layouts of all of the Geosupport functions.  The abbreviated notation for street code items listed in Table IV-1 (at the end of [Chapter IV](/chapters/chapterIV/chapterIV/)) is used throughout Appendices [1](/appendices/appendix01/), [2](/appendices/appendix02/) and [13](/appendices/appendix03/).   Below is a summary list of the Geosupport functions.

<table>
<tr>
  <th colspan="3">Summary of Geosupport Functions</th>
</tr>
<tr>
<th>Function</th>
<th>User Input</th>
<th>Selected Geosupport Output Items</th>
</tr>
<tr>
<td>1</td>
<td>Address or Non-Addressable Place name (NAP) </td>
<td>Block face-level data - Standardized Street Name and Street Code, Address Range, List of Cross Streets, ZIP Code, Community District, Health Area, Health Center District, 1990 Census Tract, 2010 Census Tract and block, Fire Engine or Ladder Company, School District, Police Precinct, Police Patrol Borough, XY Coordinates (based on the State Plane Coordinate System), <br><b>COW</b>: Hurricane Evacuation Zone, <br>
<b>COW Extended</b>: USPS Preferred City Name, Latitude, Longitude </td>
</tr>
<tr>
<td>1B</td>
<td>Address or NAP </td>
<td>Same as for Function 1E + Property Level Information from Function 1A + Street Names for Cross Streets and Address Lists</td>
</tr>
<tr>
<td>1E</td>
<td>Address or NAP</td>
<td>Same as for Function 1 + Political Geography (Election District, Assembly District, Congressional District, City Council District, Municipal Court District and State Senatorial District)</td>
</tr>
<tr>
<td>1A</td>
<td>Address</td>
<td>Tax lot - and building-level data - Standardized Street Name and Street Code, Tax Block and Lot, Alternative Addresses for Lot, Building Identification Number (BIN), RPAD Building Class, Interior Lot Flag, Vacant Lot Flag, Irregularly-Shaped Lot Flag, Corner Code, Business Improvement District (BID), Latitude, Longitude.</td>
</tr>
<tr>
<td>1N</td>
<td>Street Name</td>
<td>Standardized Street Name and Street Code (not available in the Desktop Edition of GOAT)</td>
</tr>
<tr>
<td>2 / 2W</td>
<td>Pair of Intersecting Streets, Named Intersection, or Node Number</td>
<td>Intersection-Level data - Standardized Street Name and Street Codes, List of Additional Cross Streets, ZIP Code, Community District, Health Area, 1990 and 2000 Census Tract, Fire Districts, School District, Police Precinct, XY Coordinates (based on State Plane Coordinate System),
<b>COW:</b> Sanitation District, Health Center District, some Political Geography
<b>COW: 2W:</b> Latitude, Longitude, Node IDs and Cross Streets</td>
</tr>
<tr>
<td>3</td>
<td>On Street and a pair of Consecutive Cross Streets</td>
<td>Segment-level data - Standardized Street Names and Street Codes, Lists of Cross Streets at both ends, and information about both sides of the street, (including ZIP Codes, Community Districts, Health Areas, 1990, 2000 and 2010 Census Tracts, Fire Districts, School Districts, Police Precincts)
<b>COW:</b> ‘From’ and ‘To’ Nodes, Election District, Assembly District
<b>COW Extended:</b> Latitude, Longitude, Blockface ID</td>
</tr>
<tr>
<td>3C</td>
<td>On Street and a Pair of Consecutive Cross Streets & a Compass Direction (Side of Street)</td>
<td>Same as Function 3 but for one side of the street only (Blockface information)</td>
</tr>
<tr>
<td>3S</td>
<td>On Street and an Optional pair of any Intersecting Streets along the On Street</td>
<td>Stretch-level data - Street Stretch information: List of intersecting streets in order along ‘on’ street, the distance between them and node IDs</td>
</tr>
<tr>
<td>AP</td>
<td>Address</td>
<td>Address Point ID, Spatial Coordinates of CSCL Address Point, BBL, BIN</td>
</tr>
<tr>
<td>BF, BB</td>
<td>Character String</td>
<td>List of up to 10 street names in alphabetic order - supports street name browsing</td>
</tr>
<tr>
<td>BL</td>
<td>Borough, Tax Block and Lot</td>
<td>Tax lot- and building- level data - List of Addresses for Lot, List of Building Identification Numbers (BINs), RPAD Building Class, Interior Lot Flag, Vacant Log Flag, Flag, Corner Code, etc.</td>
</tr>
<tr>
<td>BN</td>
<td>Building Identification Number</td>
<td>Ta lot- and building-level data -  List of Address Ranges for Building, Tax Block and Lot, RPAD Building Class, Interior Lot Flag, Vacant Lot Flag, Irregularly Shaped Lot Flag, Corner Code etc.</td>
</tr>
<tr>
<td>D, DG, DN</td>
<td>Street Code and/or House Number</td>
<td>Street Name and./or House Number in Displayable</td>
</tr>
<tr>
<td>HR</td>
<td>None – CICS GOAT</td>
<td>Geosupport Data Set Information – Creation date, release cycle, number of records</td>
</tr>
<tr>
<td>N*</td>
<td>Street Name</td>
<td>Normalized street name (w/o a borough, so no consideration of validity)</td>
</tr>
</table>



## <span id="appendix01.2"> Function 1 </span>

<u><b>Description:</b></u>  Function 1 processes an input address or input Non-Addressable Place name (NAP) (see [Chapter III.6](/chapters/chapterIII/section06/)).  When called using two work areas, Function 1 returns information about the blockface containing the input address or NAP.  This information includes the cross streets at the two intersections delimiting the blockface, and a set of geographic district identifiers including ZIP code, census tract and community district.  MSW Function 1 can be called with the long WA2 option.  COW Function 1 may be called with the Extended Mode Switch.      

See [Chapter V](/chapters/chapterV/chapterV/) for a detailed discussion of Function 1 and how it differs from Function 1A.

<u><b>Validation:</b></u>  A successful outcome of a two-work area call to Function 1 signifies (assuming address rather than NAP input) only that the input address falls within a valid range of addresses of the same parity (odd or even house numbers) allocated to some blockface;  it does <u>not</u> signify that there is an actual building having the input address.  (To validate the latter condition, Function 1A or AP must be used.  See [Chapter V.4](/chapters/chapterV/section04/) and [Chapter VI.10](/chapters/chapterVI/section10/) for Function 1A and Function AP respectively.)  

<u><b>Input Fields:</b></u>

<table>
<tr>
<th colspan="3">Function 1 Input Fields</th>
</tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘1 ’ ( ‘1’ followed by a blank)</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>‘C’ = COW format <br>Blank = MSW format</td>
<td>Optional; default (blank) requests MSW format. See <a href="../appendix12/">Appendix 12</a>.</td>
</tr>
<tr>
<td>Mode Switch</td>
<td>‘X’ = Extended Mode Work Area 2 <br> Blank = normal mode</td>
<td>Optional; COW Only.  See <a href="../../chapters/chapterII/section07/">Chapter II.7</a>.</td>
</tr>
<tr>
<td>Borough Code-1 (or ZIP Code)</td>
<td>1’=Manhattan, ‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island</td>
<td>Required. (ZIP Code may be used  instead of Borough Code)</td>
</tr>
<tr>
<td>House Number</td>
<td></td>
<td>Required for address input except free-form addresses (see <a href="../../chapters/chapterV/section03/">Chapter V.3</a>).  Typically not used for NAP input (see <a href="../../chapters/chapterIII/section06/"> Chapter III.6</a>).</td>
</tr>
<tr>
<td>Long WA2 Flag (MSW Only)</td>
<td>‘L’ = Long WA2, <br> Blank = regular WA2</td>
<td>Optional; default (blank) is regular WA2.  See <a href="../chapters/chapterII/section05/">Chapter II.5</a>.</td>
</tr>
<tr>
<td>Street-1</td>
<td></td>
<td>Required.</td>
</tr>
<tr>
<td>SNL</td>
<td>A number between 4 and 32</td>
<td>Optional; default is 32.  See <a href="../../chapters/chapterIII/section02/">Chapter III.2<a/>.</td>
</tr>
<tr>
<td>Street Name Normalization Format Flag</td>
<td>‘C’ = compact format, <br> Blank = sort format</td>
<td>Optional; default (blank) requests sort format.  See <a href="../../chapters/chapterIII/section03/">Chapter III.3</a>.</td>
</tr>
<tr>
<td>Cross Street Names Flag</td>
<td>‘E’ = return names <br> Blank = do not return names</td>
<td>Optional</td>
</tr>
<tr>
<td>ZIP Code</td>
<td></td>
<td>Optional; may be used instead of Borough Code, or to identify a DAPS.  See <a href="../../chapters/chapterIII/section06/"> Chapter III.6</a> and <a href="../../chapters/chapterV/section06/">Chapter V.6</a>.</td>
</tr>
<tr>
<td>Roadbed Request Switch</td>
<td>‘R’ = Roadbed info requested <br> Blank = Generic info requested</td>
<td>Optional; default (blank) requests generic information.</td>
</tr>
<tr>
<td>Browse Flag (COW Only)</td>
<td>‘P’ = primary street name / code
‘F’ = principal street name / code
‘R’= DCP preferred street name / code
Blank = input street name / code</td>
<td>Optional; may be used to  select output street name / code.
Default (blank) requests use of input street name / code.  See <a href="../../chapters/chapterIII/section08/"> Chapter III.8</a></td>
</tr>
</table>

<u><b>Selected Function 1 Geosupport Return Codes:</b></u>

| <u><b> GRC Value/ Reason Code Value</b></u> | <u><b>Meaning</b></u> |
| :------------- | :------------- |
| 01/V        | (Warning) The input was a vanity address, an addressable place name, or a NAP. This message returns the underlying address or street name when available       |
| 01/P | (Warning) The street segment containing the input address is an irregular curve (i.e., it is curved but not as an arc of a circle).  No values are returned in the WA2 Spatial Coordinate fields. |
| 07 | The input street was specified as a B5SC (or PB5SC) representing a NAP that is the name of a complex.  Five-digit street code input is not permitted for the name of a complex.  Either the NAP (the name of the complex) must be specified in the input street name field, or its B7SC or B10SC must be specified in the appropriate input street code field. |
| 28 | Partial Street name is not valid for free-form address |
| 29 | Intersection name cannot be used as ‘on’ Street. |
| 41 | The input street name is valid but this entire street has no addresses |
| 42 | The input address does not fall within a valid range of addresses for a blockface of the input street. |
| 50 | The input street name is not valid for the portion of the street where the input house number is located.  See <a href="../../chapters/chapterIV/section05/">Chapter IV.5</a>. |
| 75 | The input address is a ‘duplicate address’ - i.e., the same address exists at two different locations on the given input street.  (Note: this is not a user data error, but an address that is duplicated on this street in reality.)  See <a href="../../chapters/chapterV/section06/"> Chapter V.6</a>. |
| 89 | Long workarea2 option is invalid for COW format for function 1.  It is only valid for MSW for this function |  

## <span id="appendix01.3">Function 1A</span>

<u><b>Description:</b></u>  Function 1A processes an input address or input NAP.  When successfully called using two work areas, it returns information in WA2 about the tax lot and the building (if any) identified by the input address or NAP.  See [Chapter VI](/chapters/chapterVI/chapterVI/) and particularly [Chapters VI.6](/chapters/chapterVI/section06/).

The information that is returned in WA2 consists of information about the tax lot and the building (if any) identified by the input address or NAP.  This information includes the Borough‑Block‑and‑Lot (BBL), which is the Department of Finance’s (DOF) identifier for the tax lot;  the DOF building class code;  the number of buildings on the lot;  the number of street frontages of the lot;  a flag indicating whether the lot is a condominium; the Building Identification Number (BIN) (see [Chapter VI.3](/chapters/chapterVI/section03/)) of the building identified by the input address, if any; and the Business Improvement District (BID) if the property is in such a district.  Function 1A can be called with the long WA2 option.  The regular WA2 includes a List of Geographic Identifiers (LGI) for the tax lot, including address ranges, BINs and street frontages.  The long WA2 includes, instead of the LGI, a List of BINs for all the buildings in the tax lot.

Function 1A normally returns information that is updated on a quarterly basis.  COW users may request more up-to-date information on new buildings and demolitions using the TPAD Request Switch.  The TPAD information will include the status of new building construction and/or demolition.  See [Chapter VI.11](/chapters/chapterVI/section11/).

The regular, long, and extended WA2s for Function 1A are identical to those for Function BL.  Function 1A enables the user to retrieve this information by address, while Function BL enables retrieval by BBL.

The regular and extended WA2s for Function 1A is identical to that for Function BN.  Function 1A enables the user to retrieve this information by address, while Function BN enables retrieval by BIN.


<u><b>Validation:</b></u>  An unconditionally successful outcome of a two-work-area call to Function 1A signifies that a building having the given input address exists.  A warning is issued if the input is a pseudo-address (see [Chapter VI.5](/chapters/chapterVI/section05/)).


<u><b>Input Fields:</b></u>
<table>
<tr><th colspan="3">Function 1A Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘1A’</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>‘C’ = COW format <br> Blank = MSW format</td>
<td>Optional; default (blank) requests MSW format. See <a href="../appendix12/">Appendix 12</a>.</td>
</tr>
<tr>
<td>Mode Switch</td>
<td>‘X’ = Extended Mode Work Area 2 <br> Blank = normal mode</td>
<td>Optional; COW Only.  See <a href="../../chapters/chapterII/section07/">Chapter II.7</a>. </td>
</tr>
<tr>
<td>Borough Code-1 (or ZIP Code)</td>
<td>‘1’=Manhattan, ‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island</td>
<td>Required. <br> (ZIP Code may be used instead of Borough Code)</td>
</tr>
<tr>
<td>House Number</td>
<td></td>
<td>Required for address input except free-form addresses (see <a href="../../chapters/chapterV/section03/"> Chapter V.3</a>).  Typically not used for NAP input (see <a href="../../chapters/chapterIII/section06/">Chapter III.6</a>).</td>
</tr>
<tr>
<td>Street-1</td>
<td></td>
<td>Required.</td>
</tr>
<tr>
<td>SNL</td>
<td>A number between 4 and 32</td>
<td>Optional; default is 32.  See <a href="../../chapters/chapterIII/section02/">Chapter III.2</a>.</td>
</tr>
<tr>
<td>Street Name Normalization Format Flag</td>
<td>‘C’ = compact format, <br> Blank = sort format</td>
<td>Optional; default (blank) requests sort format.  See <a href="../../chapters/chapterIII/section03/"> Chapter III.3</a>.</td>
</tr>
<tr>
<td>ZIP Code</td>
<td></td>
<td>Optional; may be used instead of Borough Code, or to identify a DAPS.  See <a href="../../chapters/chapterIII/section06/"> Chapter III.6</a> and <a href="../../chapters/chapterV/section06/"> Chapter V.6</a>.</td>
</tr>
<tr>
<td>Browse Flag (COW Only)</td>
<td>‘P’ = primary street name / code <br> ‘F’ = principal street name / code <br>‘R’ = DCP preferred street name <br> Blank = input street name / code</td>
<td>Optional; may be used to select output street name / code. Default (blank) requests use of input street name / code.  <a href="../../chapters/chapterIII/section08/">Chapter III.8</a></td>
</tr>
<tr>
<td>Long WA2 Flag</td>
<td>‘L’ = Long WA2, <br> Blank = regular WA2</td>
<td>Optional; default (blank) is regular WA2.  See <a href="../../chapters/chapterII/section05/">Chapters II.5</a> and <a href="../../chapters/chapterVI/section06/">VI.6</a>.</td>
</tr>
<tr>
<td>TPAD Request Switch (COW Only)</td>
<td>‘Y’ = TPAD information  requested <br> Blank or ‘N’ = TPAD not requested</td>
<td>Optional; may be used to request Transitional PAD information. <br> See <a href="../../chapters/chapterVI/section11/"> Chapter VI.11</a></td>
</tr>
<tr>
<td>1A/BL Version Switch</td>
<td>‘S’ = standard version(MSW or COW) <br> Blank = standard version; (COW Only)</td>
<td>‘S’ is required for MSW; Optional for COW. See <a href="../../chapters/chapterVI/section08/">Chapter VI.8</a>.</td>
</tr>
<tr>
<td>1A/BL Version Switch</td>
<td>‘S’ = standard version, <br> Blank = standard version; valid only for COW</td>
<td>Required for MSW; Optional for COW. See <a href="../../chapters/chapterVI/section08/">Chapter VI.8</a>.</td>
</tr>
</table>

<u><b>Selected Function 1A Geosupport Return Codes:</b></u>  

| GRC Value/ Reason Code Value     | Meaning     |
| :------------- | :------------- |
| 01/8       | (Warning) Input address is a pseudo-address.       |
| 01/A | (Warning) Function 1A has been called with the regular WA2, but the tax lot identified by the input address or NAP has the List of Geographic Identifiers (LGI) overflow condition, and therefore the LGI in WA2 is incomplete.  If a complete list of BINs for the tax lot is required, Function 1A may be called with the long WA2 option for the same input data to retrieve the BINs of all buildings on the tax lot. |
| 01/* | (Warning) [related to TPAD]See <a href="../../chapters/chapterVI/section11/">Chapter VI.11</a>.Various messages are returned with this reason code.  The Conflict flag is set to correspond to the specific warning message |
| 04 | An invalid value has been specified for the 1A/BL Version Switch.  Must be ‘S’ for standard.  See <a href="../../chapters/chapterVI/section08/">Chapter VI.8</a>. |
| 07 | The input street was specified as a B5SC (or PB5SC) representing a NAP that is the name of a complex.  Five-digit street code input is not permitted for the name of a complex.  Either the NAP itself (the name of the complex) must be specified in the input street name field, or its B7SC or B10SC must be specified in the appropriate input street code field. |
| 41 | The input street name is valid but this entire street has no addresses. |
| 42 | The input address is not valid (as defined in <a href="../../chapters/chapterV/section04/">Chapter V.4</a>). |
| 50 | The input street name is not valid for the portion of the street where the input house number is located.  See <a href="../../chapters/chapterIV/section05/">Chapter IV.5</a>. |
| 69/B | Invalid TPAD Request Switch. Must be Y, N or blank |
| 73 | Legacy version of Function 1A is discontinued.  See Technical Bulletin 05-1. |
| 75 | The input address is a ‘duplicate address’ - i.e., the same address exists at two different locations on the given input street.  (Note: this is not a user input data error, but an address duplication that exists in reality.)  See <a href="../../chapters/chapterV/section06/">Chapter V.6</a>. |
| 90 | Invalid value specified for Long WA2 Flag – must be ‘L’ or blank |

## <span id="appendix01.4"> Function 1E </span>

<u><b>Description:</b></u>  Function 1E processes an input address or input NAP.  When called using two work areas, it returns the same WA2 information that is returned by Function 1, and additionally, it returns a set of political districts, including Election, State Assembly and Senate, City Council and Congressional Districts.  The layouts of WA2 for Functions 1 and 1E are identical, except for the political district fields, which are fillers in Function 1’s WA2.  

<u>Input Fields:</u> Same as Function 1, except for definition of the Browse Flag. When the Browse Flag is set to ‘R’, the Board of Elections (BOE) preferred street code is returned instead of the DCP preferred street code.  See below.

<table>
<tr>
<td>Browse Flag (COW Only)</td>
<td>‘P’ = primary street name / code <br> ‘F’ = principal street name / code <br> ‘R’ = BOE preferred street name / code <br> Blank = input street name / code</td>
<td>
Optional; may be used to select output street name / code.<br> Default (blank) requests use of input street name / code. See <a href="../../chapters/chapterIII/section08/">Chapter III.8</a>
</td>
</tr>
</table>

Browse Flag	‘P’ = primary street name / code	Optional; may be used to
(COW Only)	‘F’ = principal street name / code	select output street name / code.
	‘R’ = BOE preferred street name 	Default (blank) requests use of
		   / code	input street name / code.  See
 	Blank = input street name / code	<a href="../../chapters/chapterIII/section08/">Chapter III.8</a>

<u><b>Validation:</b></u> Same as Function 1.

<u><b>Selected Function 1E Geosupport Return Codes:</b></u>

Function 1E’s possible GRC values include all of the ones for Function 1, and also the following:

| GRC Value/ Reason Code Value     | Meaning     |
| :------------- | :------------- |
| 01/E       | (Warning) The output address range returned in WA2 is split by an election district boundary.  Therefore, the election district value returned in WA2 applies to only a portion of that address range.       |
| 56 | The input address is associated with more than one Election District (ED). Function 1E requires that this address be specified with a house number suffix to identify a portion of the building specific to one ED.  See <a href="../../chapters/chapterV/section04/">Chapter V.4</a>.|


## <span id="appendix01.5">Function 1B</span>

<u><b>Description:</b></u>  Function 1B processes an input address or input Non-Addressable Place name (NAP) (see [Chapter III.6](/chapters/chapterIII/section06/)).  When called using two work areas, Function 1B returns information about the blockface as well as information about the tax lot and the building (if any) identified by the input address or NAP.   The information that is returned in WA2 includes the cross streets at the two intersections delimiting the blockface, and a set of geographic district identifiers including ZIP code, census tract and community district. Information about the tax lot and the building (if any) identified by the input address or NAP is also returned.  This information includes the Borough‑Block‑and‑Lot (BBL), which is the Department of Finance’s (DOF) identifier for the tax lot;  the DOF building class code;  the number of buildings on the lot;  the number of street frontages of the lot;  a flag indicating whether the lot is a condominium; and the Building Identification Number (BIN) (see [Chapter VI.3](/chapters/chapterVI/section03/)) of the building identified by the input address

<u><b>Function 1B Input Fields:</b></u>

<table>
<tr><th colspan="3">Function 1B Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘1B’</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>‘C’ = COW format </td>
<td></td>
</tr>
<tr>
<td>Borough Code or ZIP Code</td>
<td>‘1’=Manhattan‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island, or nnnnn</td>
<td>Required.</td>
</tr>
<tr>
<td>Street Name</td>
<td></td>
<td>Required.</td>
</tr>
<tr>
<td>SNL</td>
<td>A number between 4 and 32</td>
<td>Optional; default is 32.  See <a href="../../chapters/chapterIII/section02/"> Chapter III.2</a>.</td>
</tr>
<tr>
<td>Street Name Normalization Format Flag</td>
<td>‘C’ = compact format, Blank = sort format</td>
<td>Optional; default (blank) requests sort format.  See <a href="../../chapters/chapterIII/section03/">Chapter III.3</a>.</td>
</tr>
<tr>
<td>ZIP Code</td>
<td>Optional; may be used instead of Borough Code, or to identify a DAPS.  See <a href="../../chapters/chapterIII/section06/">Chapter III.6</a> and <a href="../../chapters/chapterV/section06/">Chapter V.6</a>.</td>
<td></td>
</tr>
<tr>
<td>Browse Flag</td>
<td>‘P’ = primary street name / code <br>
‘F’ = principal street name / code <br>
‘R’= DCP preferred street name / cod e <br>
Blank = input street name / code</td>
<td>Optional; may be used to select Output street name / code.<br>
Default (blank) requests use of Input street name / code. <br>
See <a href="../../chapters/chapterIII/section08/">Chapter III.8</a>.</td>
</tr>
</table>

<u><b>Validation:</b></u> Same as Function 1 and Function 1A..

<u><b>Selected Geosupport Return Codes:</b></u>   Function 1B’s possible GRC values include all of the ones for Function 1, Function 1E, Function 1A, and also the following:

| GRC Value / Reason Code Value     | Meaning     |
| :------------- | :------------- |
| ??/1 (MSW Only)       | INVALID FUNCTION CODE – AVAILABLE IN COW FORMAT ONLY       |


## <span id="appendix01.6">Function 1N </span>

<u><b>Description:</b></u>  Function 1N is used to normalize a street name and obtain its street code.  Functions 1, 1A and 1E can do this also, but those functions require an input house number.  The purpose of Function 1N is to provide a way to process a street name alone, without a house number.  Note that since the input to Function 1N is not a specific location along a street, Function 1N does not perform local street name validation.  

Function 1N does not have a Work Area 2, and can only be called using one work area.  See <a href="chapters/chapterIII/section01/">Chapter III.1</a>.

<u><b>Function 1N Input Fields:</b></u>

<table>
<tr><th colspan="3">Function 1N Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘1N’</td>
<td>Required</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>C’ = COW format <br>
Blank = MSW format</td>
<td>Optional; default (blank) requests MSW format. See <a href="../appendix12/">Appendix 12</a></td>
</tr>
<tr>
<td>Borough Code-1</td>
<td>1’=Manhattan, ‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island</td>
<td>Required</td>
</tr>
<tr>
<td>Street Name-1</td>
<td></td>
<td>Required. (Note:  Street code input is not permitted for Function 1N.)</td>
</tr>
<tr>
<td>SNL</td>
<td>A number between 4 and 32</td>
<td>Optional; default is 32.  See <a href="../../chapters/chapterIII/section02/">Chapter III.2</a>.</td>
</tr>
<tr>
<td>Street Name Normalization Format Flag</td>
<td>‘C’ = compact format, <br>
Blank = sort format</td>
<td>Optional; default (blank) requests sort format.  See <a href="../../chapters/chapterIII/section03/">Chapter III.3</a>.</td>
</tr>
<tr>
<td>Browse Flag (COW Only)</td>
<td>‘P’ = primary street name / code <br>
‘F’ = principal street name / code <br>
Blank = input street name / code</td>
<td>‘P’ = primary street name / code <br>
‘F’ = principal street name / code <br>
Blank = input street name / code</td>
</tr>
</table>

<b><u>Selected Geosupport Return Codes: </u><span class="smallText">All are self-explanatory.</span></b>



## <span id="appendix01.7">Function 2 (and 2W) </span>

<u><b>Description:</b></u>  Function 2 processes an input intersection specified either in terms of an intersection name, or in terms of two streets (and, when necessary, a compass direction), or in terms of a node ID.  If two input streets intersect exactly once, the user should not specify an input compass direction.  If the two input streets intersect at two distinct locations, a compass direction must be specified; it serves to identify which of the two intersections the user wishes Geosupport to process.  Geosupport has the ability to process a pair of input streets that intersect more than twice, only if the user can identify the intersection by its node ID.  If the user does not know the node ID, the user may issue Function 2W to find the node ID.  Function 2W is basically identical to Function 2 except when streets intersect more than twice, Function 2W will reject the call and return a Work Area 2 that includes the node IDs and street codes/street names for all the intersections at the various nodes.  Function 2 and Function 2W are discussed in detail in [Chapter VII.2](/chapters/chapterVII/section02/).

When successfully called using two work areas, Function 2 returns information about the input intersection in WA2.  If there are more than two streets at an intersection, Function 2 accepts any pair of those streets as user input for that intersection.  An intersection that lies on a borough boundary can be specified in terms of one street from each borough, by using the WA1 input field Borough Code 2, as described in [Chapter VII.7](/chapters/chapterVII/section07/).

The information that Function 2 returns in WA2 includes a list of street codes for all streets at the intersection (including the input streets), spatial coordinates for the intersection, and a set of geographic area identifiers including community district, census tract, police precinct and others.  If the intersection lies on the boundary of two or more areas of a given type, the information for one of those areas is returned..

In COW format only, Function 2 also returns political geography and CD Eligibility.

<u><b>Validation:</b></u> A successful outcome of a two-work-area Function 2 call signifies that the two input streets intersect exactly once (if no input compass direction was specified) or exactly twice (if a compass direction was specified).  In the double-intersection case, a successful outcome also signifies that the input compass direction is a valid designation of one of the two intersections.

<u><b>Input Fields:</b></u>

<table>
<tr><th colspan="3">Function 2 (and 2W) Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘2 ’  (‘2’ followed by a blank) <br>
‘2W’</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>C’ = COW format <br>
Blank = MSW format</td>
<td>Optional; default (blank) requests MSW format. See <a href="../appendix12/">Appendix 12</a>.</td>
</tr>
<tr>
<td>Borough Code-1</td>
<td>‘1’=Manhattan, ‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island</td>
<td>Required (unless Node Number is used as input).  Specifies borough of Street Name 1.</td>
</tr>
<tr>
<td>Street-1</td>
<td></td>
<td>Required (<sup>●</sup>) (unless Node Number is used as input).  Specifies either of the two streets defining the intersection.</td>
</tr>
<tr>
<td>Borough Code-2</td>
<td>See Borough Code-1)</td>
<td>Optional unless Street Name 2 is in a different borough from Street Name 1; default is value in Borough Code-1.</td>
</tr>
<tr>
<td>Street-2</td>
<td></td>
<td>Required (<sup>●</sup>) (unless Node Number is used as input).  Specifies the other street defining the intersection</td>
</tr>
<tr>
<td>Compass Direction</td>
<td>‘N’, ‘S’, ‘E’ or ‘W’</td>
<td>Required only when the two input streets intersect twice, in which case it designates which intersection to process</td>
</tr>
<tr>
<td>Node Number</td>
<td>Seven-digit number</td>
<td>Required when streets intersect more than twice.
Optional at other nodes.  May be used instead of borough and street names.</td>
</tr>
<tr>
<td>SNL</td>
<td>A number between 4 and 32</td>
<td>Optional; default is 32. See Chapter III.2](/chapters/chapterIII/section02/).</td>
</tr>
<tr>
<td>Street Name Normalization Format Flag</td>
<td>‘C’ = compact format, <br>
Blank = sort format</td>
<td>Optional; default (blank) requests sort format.  See <a href="../../chapters/chapterIII/section03/">Chapter III.3</a>.</td>
</tr>
<tr>
<td>Cross Street Names Flag</td>
<td>E’ = return names <br>
Blank = do not return names</td>
<td>Optional.</td>
</tr>
<tr>
<td>Browse Flag <br>
(COW Only)</td>
<td>P’ = primary street names / codes <br>
F’ = principal street names / codes <br>
R’ = DCP preferred street names/Codes <br>
Blank = input street names / codes</td>
<td>Optional; may be used to select output street names / codes.
Default (blank) requests use of input street names / codes.  See <a href="../../chapters/chapterIII/section08/">Chapter III.8</a></td>
</tr>
</table>
(<sup>●</sup>) Note: If either Street 1 or Street 2 contains an intersection name, then the other input street field may either be left blank or it may contain any street that exists at the given intersection.


<b><u>Selected Function 2 (and 2W) Geosupport Return Codes:</u></b>

<table>
<tr><th colspan="2">Selected Function 2 (and 2W) Geosupport Return Codes</th></tr>
<tr>
<th>GRC Value/ Reason Code Value</th>
<th>Meaning</th>
</tr>
<tr>
<td>01/H</td>
<td>(Warning)  The two input streets intersect only once, but a non-blank input compass direction value has been supplied.  The compass direction is superfluous and is ignored.  A full complement of output data is returned in the work areas.</td>
</tr>
<tr>
<td>01/N</td>
<td>(Warning) Both a node ID and street names or street codes were specified as input. The node ID will be used; the street names/codes will be ignored.</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>01/T</td>
<td>(Warning) The input street name is ignored if an intersection name is specified along with a street name that is part of the intersection.</td>
</tr>
<tr>
<td>02</td>
<td>The two input streets intersect twice, but no input compass direction has been supplied.  The distance between the two intersections is included in the message.  A valid input compass direction value is required for these input streets.</td>
</tr>
<tr>
<td>03/blank</td>
<td>(Reject) <b>MSW</b> - The two input streets intersect more than twice.  MSW Function 2 calls cannot process such intersections. The Reason Code value is blank.  The message suggests that the user use a COW function call.</td>
</tr>
<tr>
<td>03/A</td>
<td>(Reject) <b>COW</b> - The two input streets intersect more than twice.  Function 2 calls cannot process such intersections.  The message suggests that the user issue a Function 2W call to find related nodes.</td>
</tr>
<tr>
<td>03/B</td>
<td>(Reject) <b>COW – Function 2W only</b> - The two input streets intersect more than twice.  Function 2W returns node IDs and street codes.  The message suggests that the user use a node ID as input.</td>
</tr>
<tr>
<td>12</td>
<td>The input information was in the form of an intersection name or a street code of an intersection name.  Geosupport recognizes this name or code as valid, but does not yet have this name or code associated with a specific intersection.</td>
</tr>
<tr>
<td>30</td>
<td>An input intersection name was specified along with an input street name, but the input street is not part of the intersection</td>
</tr>
<tr>
<td>32</td>
<td>(Reject) An invalid node ID was specified as input.  It was non-numeric or had embedded blanks..</td>
</tr>
<tr>
<td>33</td>
<td>(Reject) A node ID was specified as input, but no intersection was found with that node ID.</td>
</tr>
<tr>
<td>39</td>
<td>The input compass direction field contains an invalid value, that is, a non-blank value other than ‘N’, ‘S’, ‘E’ or ‘W’.</td>
</tr>
<tr>
<td>40</td>
<td>The two input streets intersect twice, but the input compass direction value supplied is an invalid descriptor for either of those intersections.  If the value supplied is ‘E’ or ‘W’, it is invalid because the two intersections are situated approximately due north-south of each other;  if the value supplied is ‘N’ or ‘S’, it is invalid because the two intersections are situated approximately due east-west of each other.</td>
</tr>
<tr>
<td>50</td>
<td>An input street name is not valid for the portion of the street where the input intersection is located.  See <a href="../../chapters/chapterIV/section05/">Chapter IV.5</a>.</td>
</tr>
<tr>
<td>62</td>
<td>The two input streets do not intersect.  </td>
</tr>
</table>



## <span id="appendix01.7">Function 3 </span>

<u><b>Description:</b></u>   Function 3 processes street segments and closely related three-street configurations.  A street segment is a part of a street (called the ‘on' street) between two consecutive cross streets.  For example, Madison Avenue (in Manhattan) between East 51st Street and East 52nd Street is a street segment.  Madison Avenue between East 51st Street and East 53rd Street is not a street segment, because there is an intervening street, East 52nd Street, between the given cross streets.  An exception to the requirement that the input cross streets be consecutive along the ‘on’ street is the case of a T‑intersection: Function 3 accepts as input a street configuration that defines the long blockface of a T‑intersection.  (For precise definitions of the terms ‘three-street configuration’, ‘street segment’, and ‘T-intersection’, see [Chapter VII.3](/chapters/chapterVII/section03/).)  A street segment intersecting with or lying on a borough boundary can be specified in terms of streets from both boroughs, by using the WA1 input fields Borough Code 2 and Borough Code 3, as described in [Chapter VII.7](/chapters/chapterVII/section07/).

The information returned by a successful two‑work‑area Function 3 call includes two lists of street codes for all cross streets at the two intersections defined by the input streets;  and geographic area codes for the left and right sides of the street, such as the left and right community districts, ZIP codes, census tracts, etc.  ‘Left’ and ‘right’ are defined relative to the ‘on’ street’s ‘logical direction’, which in general is the direction of increasing address.  The WA2 information also includes two items called the Segment Azimuth and the Segment Orientation that indicate how the street segment is oriented with respect to the points of the compass.  Applications can use either of these items to determine compass direction descriptors for the left and right sides of the street.  Another WA2 item, the Cross Street Reversal Flag, can be used to determine left and right relative to the order in which the input cross streets were specified.

In COW format, Function 3 also returns the FROM and TO node IDs.   

In COW Extended format, Function 3 also returns Latitude and Longitude.   

Function 3 in MSW format has the Long Work Area 2 Option (see [Chapter II.5](/chapters/chapterII/section05/)).  

Function 3 in COW format has the Auxiliary Segment Option (see [Chapter II.6](/chapters/chapterII/section06/)).  

For a detailed discussion of Function 3, see [Chapter VII.4](/chapters/chapterVII/section04/).

<u><b>Validation:</b></u>  A successful outcome of a two-work-area call to Function 3 signifies that the input
‘on’ street and two cross streets define a valid street segment or long blockface of a T-intersection.

<u><b>Input Fields:</b></u>

<table>
<tr><th colspan="3">Function 3 Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘3 ’ (‘3’ followed by a blank)</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>‘C’ = COW format <br>
Blank = MSW format</td>
<td>Optional; default (blank) requests MSW format. See <a href="../appendix12/">Appendix 12</a>.</td>
</tr>
<tr>
<td>Mode Switch</td>
<td>‘X’ = Extended Mode Work Area 2 <br>
Blank = normal mode</td>
<td>Optional; COW Only.  See <a href="../../chapters/chapterII/section07/">Chapter II.7</a>.</td>
</tr>
<tr>
<td>Borough Code-1</td>
<td>‘1’=Manhattan, ‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island</td>
<td>Required.  Specifies borough of Street Name-1.</td>
</tr>
<tr>
<td>Street-1</td>
<td></td>
<td>Required.  Specifies ‘on’ street</td>
</tr>
<tr>
<td>Borough Code-2</td>
<td>(See Borough Code-1)</td>
<td>Optional unless borough of Street Name-2 differs from that of Street Name-1.  Specifies borough of Street Name-2.  Default is Borough Code-1 value.</td>
</tr>
<tr>
<td>Street-2</td>
<td></td>
<td>Required.  Specifies either cross street.</td>
</tr>
<tr>
<td>Borough Code-3</td>
<td>(See Borough Code-1)</td>
<td>Optional unless borough of Street Name-3 differs from that of Street Name-1.  Specifies borough of Street Name-3.  Default is Borough Code-1 value.</td>
</tr>
<tr>
<td>Street-3</td>
<td></td>
<td>Required.  Specifies other cross street.</td>
</tr>
<tr>
<td>SNL</td>
<td>A number between 4 and 32</td>
<td>Optional; default is 32.  See <a href="../../chapters/chapterIII/section02/">Chapter III.2</a>.</td>
</tr>
<tr>
<td>Street Name Normalization Format Flag</td>
<td>‘C’ = compact format, Blank = sort format</td>
<td>Optional; default (blank) requests sort format.  See <a href="../../chapters/chapterIII/section03/">Chapter III.3</a>.</td>
</tr>
<tr>
<td>Cross Street Names Flag</td>
<td>‘E’ = return names <br>
Blank = do not return names</td>
<td>Optional</td>
</tr>
<tr>
<td>Long WA2 Flag <br> (MSW only)</td>
<td>‘L’ = Long WA2, Blank = regular WA2</td>
<td>Optional; default (blank) is regular WA2.  See <a href="../../chapters/chapterII/section05/">Chapter II.5</a>.</td>
</tr>
<tr>
<td>Auxiliary Segment Switch <br>
(COW only)</td>
<td>‘Y’ = return all segment IDs <br>
‘N’ or Blank = regular WA2</td>
<td>Optional; default (blank) is regular WA2.  See <a href="../../chapters/chapterII/section06/">Chapter II.6</a></td>
</tr>
<tr>
<td>Browse Flag <br>
(COW Only)</td>
<td>‘P’ = primary street names / codes <br>
‘F’ = principal street names / codes <br>
‘R’ = DCP preferred street names / codes <br>
Blank = input street names / codes</td>
<td>Optional; may be used to select output street names / codes. Default (blank) requests use of input street names / codes. See <a href="../../chapters/chapterIII/section08/">Chapter III.8</a></td>
</tr>
</table>


<b><u>Selected Function 3 Geosupport Return Codes:</u></b>

<table>
<tr><th colspan="3">Selected Function 3 Geosupport Return Codes:</th></tr>
<tr>
<th>GRC Value/ Reason Code Value</th>
<th>Meaning</th>
</tr>
<tr>
<td>01/L or R</td>
<td>(Warning)  The input ’on’ street lies on a borough boundary.  The side of street indicated by the Reason Code value is outside of the input borough; no information is returned in WA2 for that side of the street if it is in Nassau or Westchester.</td>
</tr>
<tr>
<td>01/Q</td>
<td>These streets involve a dogleg, Shortest Stretch provided. (See <a href="../../chapters/chapterII/section02/">Chapter VII.2</a>)</td>
</tr>
<tr>
<td>45</td>
<td>Although each of the three input street names was individually recognized, collectively they do not define a valid street segment nor the long blockface of a T‑intersection.</td>
</tr>
<tr>
<td>46</td>
<td>The geographic location specified by the combination of three input streets is ambiguous, i.e., it defines more than one valid segment or T‑intersection blockface.  Geosupport cannot process this input.  </td>
</tr>
<tr>
<td>50</td>
<td>An input street name is not valid for the portion of the street where the input street segment is located.  See <a href="../../chapters/chapterIV/section05/">Chapter IV.5</a>.</td>
</tr>
<tr>
<td>55</td>
<td>At least one of the input streets is a Non-Addressable Place Name (NAP).  NAPs are not allowed as input streets for this function</td>
</tr>
<tr>
<td>69/A</td>
<td>Invalid value specified for Auxiliary Segment Switch.  Auxiliary Segment Switch must be ‘Y’ or ‘N’ or blank.</td>
</tr>
<tr>
<td>89</td>
<td>Long WA2 option is not valid for this function in COW format.</td>
</tr>
<tr>
<td>90</td>
<td>Invalid value specified for Long WA2 Flag - must be ‘L’ or blank.</td>
</tr>
</table>


## <span id="appendix01.8">Function 3C </span>

<u><b>Description:</b></u>  Function 3C processes blockfaces specified in terms of an input ‘on’ street, two cross streets and a compass direction designating the side of the street, such as ‘the west side of Madison Avenue between East 53rd Street and East 54th Street’.  A blockface intersecting with or lying on a borough boundary can be specified in terms of streets from both boroughs, by using the WA1 input fields Borough Code 2 and Borough Code 3, as described in [Chapter VII.7](/chapters/chapterVI/section07/).

When called using two work areas, function 3C returns blockface related information in WA2.  This information is a subset of the set of items returned in WA2 by Function 3, consisting of those items that are related to the specified side of the street. 

Function 3C in COW format has the Auxiliary Segment Option (see [Chapter II.6](/chapters/chapterII/section06/)).  

Function 3C is discussed in detail in [Chapter VII.5](/chapters/chapterVII/section05/).

<u><b>Validation:</b></u>  A successful outcome of a two-work-area call to Function 3C signifies that the input ‘on’ street and two cross streets define a valid street segment or long blockface of a T-intersection, and that the input compass direction is a valid designation of a side of this segment.  The validity of an input compass direction is determined by the spatial orientation of the segment.

<u><b>Input Fields:</b></u>

<table>
<tr><th colspan="3">Function 3C Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘3C’</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>‘C’ = COW format <br>
Blank = MSW format</td>
<td>Optional; default (blank) requests MSW format. See <a href="../appendix12/">Appendix 12</a>.</td>
</tr>
<tr>
<td>Mode Switch</td>
<td>‘X’ = Extended Mode Work Area 2 <br>
Blank = normal mode</td>
<td>Optional; COW Only.  See <a href="../../chapters/chapterII/section07/">Chapter II.7</a>.</td>
</tr>
<tr>
<td>Borough Code-1</td>
<td>‘1’=Manhattan, ‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island</td>
<td>Required.  Specifies borough of Street Name-1.</td>
</tr>
<tr>
<td>Street-1</td>
<td></td>
<td>Required. Specifies ‘on’ street</td>
</tr>
<tr>
<td>Borough Code-2</td>
<td>(See Borough Code-1)</td>
<td>Optional unless borough of Street Name-2 differs from that of Street Name-1.  Specifies borough of Street Name-2.  Default is Borough Code-1 value.</td>
</tr>
<tr>
<td>Street-2</td>
<td></td>
<td>Required.  Specifies either cross street.</td>
</tr>
<tr>
<td>Borough Code-3</td>
<td>(See Borough Code-1)</td>
<td>Optional unless borough of Street Name-3 differs from that of Street Name-1.  Specifies borough of Street Name-3.  Default is Borough Code-1 value.</td>
</tr>
<tr>
<td>Street-3</td>
<td></td>
<td>Required.  Specifies other cross street.</td>
</tr>
<tr>
<td>Compass Direction</td>
<td>‘N’, ‘S’, ‘E’ or ‘W’</td>
<td>Required.  Specifies side of street of blockface (relative to street’s ‘logical direction’ - see <a href="../../chapters/chapterVII/section03/">Chapter VII.3</a>).</td>
</tr>
<tr>
<td>SNL</td>
<td>A number between 4 and 32</td>
<td>Optional; default is 32. See <a href="../../chapters/chapterIII/section02/">Chapter III.2</a>.</td>
</tr>
<tr>
<td>Street Name Normalization Format Flag</td>
<td>‘C’ = compact format, Blank = sort format</td>
<td>Optional; default (blank) requests sort format.  See <a href="../../chapters/chapterIII/section03/">Chapter III.3</a>.</td>
</tr>
<tr>
<td>Cross Street Names Flag</td>
<td>‘E’ = return names <br>
Blank = do not return names</td>
<td>Optional</td>
</tr>
<tr>
<td>Long WA2 Flag <br>
(MSW only)</td>
<td>‘L’ = Long WA2, Blank = regular WA2</td>
<td>Optional; default (blank) is regular WA2.  See <a href="../../chapters/chapterII/section05/">Chapter II.5</a>.</td>
</tr>
<tr>
<td>Auxiliary Segment Switch <br>
(COW only)</td>
<td>‘Y’ = return all segment IDs <br>
‘N’ or Blank = regular WA2</td>
<td>Optional; default (blank) is regular WA2.  See <a href="../../chapters/chapterII/section05/">Chapter II.6</a></td>
</tr>
<tr>
<td>Browse Flag <br>
(COW Only)</td>
<td>‘P’ = primary street names / codes <br>
‘F’ = principal street names / codes <br>
‘R’= DCP preferred street names / codes <br>
Blank= input street names / codes</td>
<td>Optional; may be used to select output street names / codes. Default (blank) requests use of input street names / codes.  See <a href="../../chapters/chapterIII/section08/">Chapter III.8</a></td>
</tr>
</table>

<u><b>Selected Geosupport Return Codes:</b></u>

<table>
<tr><th colspan="2">Selected Geosupport Return Codes</th></tr>
<tr>
<th>GRC Value</th>
<th>Meaning</th>
</tr>
<tr>
<td>09</td>
<td>The blockface on the side of street specified by the compass direction does not exist in the borough specified for the ‘on’ street.</td>
</tr>
<tr>
<td>39</td>
<td>The input compass direction field contains a non-blank value other than ‘N’, ‘S’, ‘E’ or ‘W’</td>
</tr>
<tr>
<td>40</td>
<td>The input compass direction value is invalid as a descriptor of a side of the input street segment, because it is incompatible with the segment’s spatial orientation.  This condition arises if the segment is oriented approximately east-west and the input compass direction value is specified as ‘E’ or ‘W’ (because a street segment oriented approximately east-west has no east and west sides), or the segment is oriented approximately north-south and the input compass direction value is ‘N’ or ‘S’</td>
</tr>
<tr>
<td>44</td>
<td>Although each of the three input street names was individually recognized, collectively they do not define a valid blockface.</td>
</tr>
<tr>
<td>46</td>
<td>The combination of these three input streets is ambiguous, i.e., it defines more than one valid blockface.  Function 3C cannot process such input.  </td>
</tr>
<tr>
<td>50</td>
<td>An input street name is not valid for the portion of the street where the input blockface is located.  See <a href="../../chapters/chapterIV/section05/">Chapter IV.5</a>.</td>
</tr>
<tr>
<td>69/A</td>
<td>Invalid value specified for Auxiliary Segment Switch.  Auxiliary Segment Switch must be ‘Y’ or ‘N’ or blank.</td>
</tr>
</table>

## <span id="appendix01.9">Function 3S </span>

<u><b>Description:</b></u>  Function 3S processes input street stretches.  A street stretch is a portion of a street between any two cross streets.  If an input cross street intersects with the ‘on’ street twice, an input compass direction is required to identify which of the two intersections is intended.  If the user application does not specify input cross streets, Function 3S returns information about the full length of the ‘on’ street.  Note that, in a Function 3S call, the input cross streets need not be consecutive along the ‘on’ street.

When successfully called using two work areas, Function 3S returns, in WA2, a list of all intersections in sequence along the ‘on’ street between (and including) the two intersections defined by the input ‘on’ and two cross streets, if any.  If the user has not specified input cross streets, the list contains all intersections in sequence from the beginning to the end of the ‘on’ street.  The sequence in which the intersections are listed accords with the direction of increasing addresses along the ‘on’ street.  Each intersection in the list is specified as a pair of street codes for two of the streets at that intersection.  One of the street codes listed for an intersection may or not be the street code of the ‘on’ street. 

In a COW function 3S call, if the user requests Real Street Only output, only real street intersections are returned; Bends and Non-Street Features are not included in the list of intersections.

For each entry in the WA2 list of intersections of the street stretch, there are fields for a distance and a gap flag.  The distance is the approximate distance in feet between the given intersection and its predecessor in the list; the gap flag indicates whether the intersection and its predecessor are connected by the ‘on’ street.  The gap flag also indicates the nature of the gap.  The first entry within a list will always have a zero in the distance field and a blank in the gap flag.

Function 3S is discussed in detail in [Chapter VII.6](/chapters/chapterVII/section06/).

<u><b>Validation:</b></u>  A successful outcome of a two-work-area call to Function 3S using input cross streets signifies that each of the input cross streets intersects the input ‘on’ street.

<u><b>Input Fields</b>:</u>

<table>
<tr><th colspan="3">Function 3S Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘3S’</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>‘C’ = COW format <br>
Blank = MSW format</td>
<td>Optional; default (blank) requests MSW format. See <a href="../appendix12/">Appendix 12</a></td>
</tr>
<tr>
<td>Borough Code-1</td>
<td>‘1’=Manhattan, ‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island</td>
<td>Required.  Specifies borough of Street-1.</td>
</tr>
<tr>
<td>Street-1</td>
<td></td>
<td>Required.  Specifies ‘on’ street.</td>
</tr>
<tr>
<td>Street-2</td>
<td></td>
<td>Optional.  Specifies either cross street.</td>
</tr>
<tr>
<td>Compass Direction for First Intersection</td>
<td>‘N’, ‘S’, ‘E’ or ‘W’</td>
<td>Required if Street-2 intersects Street-1 (‘on’-street) twice.  Identifies which of the two intersections is intended.</td>
</tr>
<tr>
<td>Street-3</td>
<td></td>
<td>Optional.  Specifies other cross street.  Must be specified if Street-2 is specified.  If Street-2 and Street-3 are not specified, data for full length of street are returned in WA2.</td>
</tr>
<tr>
<td>Compass Direction for Second Intersection</td>
<td>‘N’, ‘S’, ‘E’ or ‘W’</td>
<td>Required if Street-3 intersects Street-1 (‘on’-street) twice.  Identifies which of the two intersections is intended.</td>
</tr>
<tr>
<td>SNL</td>
<td>A number between 4 and 32</td>
<td>Optional; default is 32.  See <a href="../../chapters/chapterIII/section02/">Chapter III.2.</a></td>
</tr>
<tr>
<td>Street Name Normalization Format Flag</td>
<td>‘C’ = compact format, Blank = sort format</td>
<td>Optional; default (blank) requests sort format.  See <a href="../../chapters/chapterIII/section03/">Chapter III.3.</a></td>
</tr>
<tr>
<td>Real Street Only Flag <br> (COW Only)</td>
<td>‘R’ = real streets only <br>
Blank = all streets</td>
<td>Optional; default (blank) requests all streets.  See <a href="../../chapters/chapterVII/section06/">Chapter VII.6]</a>.</td>
</tr>
<tr>
<td>Roadbed Request Switch</td>
<td>R’ = Roadbed info requested <br>
Blank = Generic info requested</td>
<td>Optional; default (blank) requests generic information See <a href="../../chapters/chapterVII/section06/">Chapter VII.6</a></td>
</tr>
</table>

<u><b>Selected Geosupport Return Codes:</b></u>

<table>
<tr><th colspan="2">Selected Geosupport Return Codes</th></tr>
<tr>
<th>Value</th>
<th>Meaning</th>
</tr>
<tr>
<td>01/H</td>
<td>(Warning) The input ‘on’ street intersects only once with one of the input cross streets, but a non-blank input compass direction value has been supplied for that intersection.  That compass direction is superfluous and is ignored.  A full complement of output data is returned in the work areas.</td>
</tr>
<tr>
<td>05</td>
<td>A value was supplied in at least one of the input borough code fields other than Borough Code 1.  All Function 3S input streets are required to be from the same borough, which must be supplied in the WA1 field Borough Code 1;  Borough Code 2 and Borough Code 3 must be blank.</td>
</tr>
<tr>
<td>14</td>
<td>The three input streets do not define a street stretch, because the ‘from’ and ‘to’ input intersections are identical.</td>
</tr>
<tr>
<td>38</td>
<td>The input ‘on’ street and an input cross street intersect twice, but the input compass direction value supplied is an invalid descriptor for either of those intersections.  If the value supplied is ‘E’ or ‘W’, it is invalid because the two intersections are situated approximately due north-south of each other;  if the value supplied is ‘N’ or ‘S’, it is invalid because the two intersections are situated approximately due east-west of each other.</td>
</tr>
<tr>
<td>39</td>
<td>An input compass direction field contains an invalid value, that is, a non-blank value other than ‘N’, ‘S’, ‘E’ or ‘W’.</td>
</tr>
<tr>
<td>55</td>
<td>At least one of the input streets is a Non-Addressable Place Name (NAP).  NAPs are not allowed as input streets for this function.</td>
</tr>
<tr>
<td>61</td>
<td>Geosupport has no street stretch data for this ‘on’ street.  (This condition should never occur for a normal input street.  It occurs if the input ‘on’ street is a pseudo-street name (such as DEAD END) or another type of geographic feature that Geosupport recognizes but that Function 3S cannot process as an input ‘on’ street.)</td>
</tr>
<tr>
<td>62</td>
<td>The input ‘on’ street does not intersect with one of the input cross streets.</td>
</tr>
<tr>
<td>66</td>
<td>The input ‘on’ street intersects with one of the input cross streets more than twice.  Function 3S cannot be used to process this combination of input data.  (However, Function 3S could be called for this ‘on’ street with no cross streets specified.  That call would return data for the full length of the street, including the intersections in question.)</td>
</tr>
<tr>
<td>68</td>
<td>The input ‘on’ street intersects with one of the input cross streets twice. An input compass direction value must be supplied to identify which of the two intersections is intended.</td>
</tr>
<tr>
<td>96</td>
<td>The functionality to support part of a roadbed street stretch is under construction</td>
</tr>
</table>


## <span id="appendix01.10">Function AP </span>

<u><b>Description:</b></u>  Function AP processes an input address.  When successfully called using two work areas, it returns information in WA2 about the CSCL Address Point identified by the input address.  See [Chapter VI](/chapters/chapterVI/chapterVI/) and particularly [Chapter VI.10](/chapters/chapterVI/section10/).  Function AP and its data are currently available to Geosupport users.

The information that is returned in WA2 consists of information about the address point and the tax lot and the building (if any) identified by the input address.  This information includes the CSCL Address Point ID, the spatial coordinates of the Address Point, the Building Identification Number (BIN) and the Borough‑Block‑and‑Lot (BBL), which is the Department of Finance’s (DOF) identifier for the tax lot.  By geocoding to a CSCL Address Point, the user application will presumably geocode to a ‘real’ posted address – not an address that might be part of an administrative range.

Function AP is also available in an Extended Mode.  It includes that Principal Street Name in WA2.  See the Function AP work area layouts in [Appendix 13](/appendices/appendix13/).

<u><b>Validation:</b></u>  An unconditionally successful outcome of a two-work-area call to Function AP signifies that a building having the given input address exists.  


<u><b>Input Fields:</b></u>

<table>
<tr><th colspan="3">Function AP Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘AP’</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>‘C’ = COW format</td>
<td>Required.  AP is a COW only function</td>
</tr>
<tr>
<td>Mode Switch</td>
<td>‘X’ = Extended Mode Work Area 2 <br>
Blank = normal mode</td>
<td>Optional</td>
</tr>
<tr>
<td>Borough Code-1<br>
    (or ZIP Code)</td>
<td>‘1’=Manhattan, ‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island</td>
<td>Required.<br>
(ZIP Code may be used instead of Borough Code)</td>
</tr>
<tr>
<td>House Number</td>
<td></td>
<td>Required for address input except free-form addresses (see <a href="../../chapters/chapterV/section03/">Chapter V.3</a>).</td>
</tr>
<tr>
<td>Street-1</td>
<td></td>
<td>Required.</td>
</tr>
<tr>
<td>SNL</td>
<td>A number between 4 and 32</td>
<td>Optional; default is 32.  See <a href="../../chapters/chapterIII/section02/">Chapter III.2</a>.</td>
</tr>
<tr>
<td>Street Name Normalization Format Flag</td>
<td>‘C’ = compact format, <br>
Blank = sort format</td>
<td>Optional; default (blank) <br>
requests sort format.  See <a href="../../chapters/chapterIII/section03/">Chapter III.3</a>.</td>
</tr>
<tr>
<td>ZIP Code</td>
<td></td>
<td>Optional; may be used instead of Borough Code, or to identify a DAPS.  See <a href="../../chapters/chapterIII/section06/"> Chapter III.6</a> and <a href="../../chapters/chapterV/section06/"> Chapter V.6</a>.</td>
</tr>
<tr>
<td>Browse Flag <br>
(COW Only) </td>
<td>‘P’ = primary street name / code <br>
‘F’ = principal street name / code <br>
‘R’ = DCP preferred street name <br>
Blank = input street name / code</td>
<td>Optional; may be used to select output street name / code. <br>
Default (blank) requests use of input street name / code. <a href="../../chapters/chapterIII/section08/"> Chapter III.8</a></td>
</tr>
</table>

<u><b>Selected Geosupport Return Codes:</b></u>

<table>
<tr> <th colspan="2">Selected Geosupport Return Codes</th> </tr>
<tr>
<th>GRC Value/ Reason Code Value</th>
<th>Meaning</th>
</tr>
<tr>
<td>42</td>
<td>The input address is not valid (as defined in <a href="../../chapters/chapterV/section04/">Chapter V.4 </a>.</td>
</tr>
<tr>
<td>50</td>
<td>The input street name is not valid for the portion of the street where the input house number is located.  See <a href="../../chapters/chapterIV/section05/">Chapter IV.5</a>.</td>
</tr>
<tr>
<td>75</td>
<td>The input address is a ‘duplicate address’ - i.e., the same address exists at two different locations on the given input street.  (Note: this is not a user input data error, but an address duplication that exists in reality.) See <a href="../../chapters/chapterV/section06/"> Chapter V.6</a>.</td>
</tr>
</table>

## <span id="appendix01.11">Functions BB and BF </span>

<u><b>Description:</b></u>  Function  BB ("browse backward") and BF ("browse forward") enable applications to develop street name browse capability, in order to assist user data entry staff to determine valid spellings of street names that have been rejected.  Functions BB and BF can only be called using one work area.

A sequence of repeated calls to Functions BB and/or BF will browse backwards and/or forwards in alphabetical order through the set of all valid normalized street names in a given borough.  When issuing a COW Function BB or BF call, the user may request that only Primary or Principal street names be returned.  This is done by setting the Browse Flag to ‘P’ or ‘F’ respectively. 

Each call to one of these functions returns up to ten such names in alphabetical order (or fewer, if there are not ten names remaining in the given borough in the given browse direction).  The names are returned in the WA1 field List of Street Names.  The number of street names returned in the list is returned in the WA1 field Number of Street Names in List.  For COWs, corresponding B7SCs are also returned.

To start a browse sequence, the user application calls either of the browse functions , passing a borough code and character string in the WA1 input fields called Borough Code 1 and  Street Name 1, respectively.  The input character string can be from one to 32 bytes long.  When the last set of ten or fewer names in the given borough is reached, a warning is issued.

For a detailed discussion of Functions BB and BF, see [Chapter III.7](/chapters/chapterIII/section07/).

<u><b>Input Fields:</b></u>

<table>
<tr><th colspan="3">Functions BB / BF Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘BB’ or ‘BF’</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>‘C’ = COW format <br>
Blank = MSW format</td>
<td>Optional; default (blank) requests MSW format. See <a href="../appendix12/">Appendix 12</a></td>
</tr>
<tr>
<td>Borough Code-1</td>
<td>‘1’=Manhattan, ‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island</td>
<td>Required.</td>
</tr>
<tr>
<td>Street Name-1</td>
<td>Any character string</td>
<td>Required.</td>
</tr>
<tr>
<td>Browse Flag <br>
(COW Only) </td>
<td>‘P’ = primary street names’ <br>
‘F’ = principal street names <br>
Blank = all street names</td>
<td>Optional; default (blank) See <a href="../../chapters/chapterIII/section07/"> Chapter III.7</a>.</td>
</tr>
</table>

<u><b>Selected Geosupport Return Codes:</b></u>

<table>
<tr><th colspan="2">Selected Geosupport Return Codes</th></tr>
<tr>
<th>GRC Value / Reason Code Value</th>
<th>Meaning</th>
</tr>
<tr>
<td>01/4</td>
<td>(Warning)  The last street name has been reached in the specified input borough in the given browse direction.  It is possible that fewer than ten street names have been returned in WA1</td>
</tr>
<tr>
<td>97</td>
<td>The input street name is alphabetically beyond the last street name in the specified input borough. </td>
</tr>
</table>

## <span id="appendix01.12">Function BL </span>

<u><b>Description:</b></u>  Function BL processes a parcel of real property, or tax lot, specified in terms of a standard Department of Finance set of tax lot identifiers, consisting of a combination of a borough code, a tax block number and a tax lot number, collectively called the BBL.  When successfully called using two work areas, Function BL returns information about the tax lot in WA2.  The WA2 layouts for Function BL are identical to those for Function 1A.  Function 1A enables the user to retrieve this information by address, while Function BL enables retrieval by BBL.

For a detailed discussion of Function BL, see [Chapter VI](/chapters/chapterVI/chapterVI/) and particularly [Chapter VI.7](/chapters/chapterVI/section07/).

<u><b>Validation:</b></u>  A successful outcome of a two-work-area call to Function BL signifies that the input BBL is valid.

<u><b>Function BL Input Fields:</b></u>

<table>
<tr><th colspan="3">Function BL Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘BL’</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>‘C’ = COW format Blank = MSW format</td>
<td>Optional; default (blank) requests MSW format. See <a href="../appendix12/">Appendix 12</a></td>
</tr>
<tr>
<td>Mode Switch</td>
<td>‘X’ = Extended Mode Work Area 2 <br>
Blank = normal mode</td>
<td>Optional; COW Only.  See <a href="../../chapters/chapterII/section07/"> Chapter II.7</a>. </td>
</tr>
<tr>
<td>Borough-Block-Lot (BBL)</td>
<td></td>
<td>Required.</td>
</tr>
<tr>
<td>Long WA2 Flag</td>
<td>‘L’ = Long <br>
Blank = regular WA2</td>
<td>Optional default (blank) is regular WA2.  See <a href="../../chapters/chapterII/section05/">Chapter II.5</a>.</td>
</tr>
<tr>
<td>TPAD Request Switch <br>
(COW Only)</td>
<td>‘Y’ = TPAD information  requested <br>
Blank or ‘N’ = TPAD not requested</td>
<td>Optional; may be used to request Transitional PAD information. See <a href="../../chapters/chapterVI/section11/"> Chapter VI.11</a></td>
</tr>
<tr>
<td>1A/BL Version Switch</td>
<td>‘S’ = standard version, <br>
Blank = standard version; valid only for COW</td>
<td>Required for MSW; optional for COW.  See <a href="../../chapters/chapterVI/section08/"> Chapter VI.8</a>.</td>
</tr>
</table>


<u><b>Selected Geosupport Return Codes:</b></u>

<table>
<tr><th colspan="2">Selected Geosupport Return Codes</th></tr>
<tr>
<th>GRC Value /  Reason Code Value</th>
<th>Meaning</th>
</tr>
<tr>
<td>01/A</td>
<td>(Warning) Function BL has been called with the regular WA2, but the input tax lot has the List of Geographic Identifiers (LGI) overflow condition, and therefore the LGI in WA2 is incomplete.  If a complete list of BINs for the tax lot is required, Function BL may be called with the long WA2 option for the same input data to retrieve the BINs of all buildings on the tax lot.</td>
</tr>
<tr>
<td>04</td>
<td>An invalid value has been specified for the 1A/BL Version Switch.  See <a href="../../chapters/chapterVI/section08/"> Chapter VI.8</a>.</td>
</tr>
<tr>
<td>01/* </td>
<td>(Warning) [related to TPAD]See <a href="../../chapters/chapterVI/section11/"> Chapter VI.11</a> and <a href="../../appendices/appendix04/">Appendix 4</a>.Various messages are returned with this reason code. The Conflict flag is set to correspond the specific warning message.</td>
</tr>
<tr>
<td>69/B</td>
<td>Invalid TPAD Request Switch. Must be Y, N or blank</td>
</tr>
<tr>
<td>73</td>
<td>Legacy version of Function BL is discontinued.  See Technical Bulletin 05-1.</td>
</tr>
<tr>
<td>90</td>
<td>Invalid value specified for Long WA2 Flag - must be ‘L’ or blank.</td>
</tr>
</table>

## <span id="appendix01.13">Function BN </span>

<u><b>Description:</b></u> Function BN processes a building specified by an input Building Identification Number (BIN).  For a discussion of BINs, see [Chapter VI.3](/chapters/chapterVI/section03/).

A successful Function BN call using two work areas returns information about the building in WA2.  This includes the building's borough‑tax block‑tax lot (BBL);  a list of geographic identifiers associated with the building (in contrast to Functions 1A and BL, which return geographic identifiers for the entire tax lot, subject to the list’s space limitation);  a building status flag and date <i>[not implemented]</i>;  and a condominium flag.  Condominiums have unique characteristics discussed in [Chapter VI.4](/chapters/chapterVI/section04/).

Function BN is discussed in detail in [Chapter VI](/chapters/chapterIV/chapterIV/) and particularly in [Chapter VI.9](/chapters/chapterVI/section09/).

<u><b>Validation:</b></u>  A successful outcome of a two-work-area call to Function BN signifies that the input BIN is valid.

<u><b>Input Fields:</b></u>

<table>
<tr><th colspan="3">Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘BN’</td>
<td>Required</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>C’ = COW format <br>
Blank = MSW format</td>
<td>Optional; default (blank) requests MSW format.  See <a href="../appendix12/">Appendix 12</a>.</td>
</tr>
<tr>
<td>Mode Switch</td>
<td>‘X’ = Extended Mode Work Area 2 <br>
Blank = normal mode</td>
<td>Optional; COW Only.  See <a href="../../chapters/chapterII/section07/">Chapter II.7</a>.</td>
</tr>
<tr>
<td>BIN</td>
<td></td>
<td>Required</td>
</tr>
</table>

<u><b>Selected Geosupport Return Codes:</b></u>
<table>
<tr><th colspan="2">Selected Geosupport Return Codes</th></tr>
<tr>
<th>GRC Value / Reason Code Value</th>
<th>Meaning</th>
</tr>
<tr>
<td>01/F</td>
<td>(Warning)  The input BIN (contains a 9 in the 2nd digit after the borough code) is a temporary BIN assigned by GSS to a multi-building tax lot, the individual buildings of which have not yet been assigned permanent BINs.  The temporary BIN will be replaced in the future</td>
</tr>
<tr>
<td>20</td>
<td>No input BIN value was specified.</td>
</tr>
<tr>
<td>21</td>
<td>The input BIN is not valid</td>
</tr>
<tr>
<td>22</td>
<td>The input BIN has an invalid format: either it contains non-numeric characters, or its first digit is not a valid borough code (the digits 1 through 5), or the digits beyond the first digit are all zeros.</td>
</tr>
<tr>
<td>23</td>
<td>The input BIN is a ‘dummy’ BIN (contains an 8 in the 2nd digit after the borough code)  assigned by the NYC Department of Buildings.  It exists only in DOB files and is not valid in Geosupport.</td>
</tr>
</table>

## <span id="appendix01.14">Functions D, DG and DN </span>

<u><b>Description:</b></u>  Functions D, DG and DN are the ‘display’ functions.  They do not actually display anything themselves, but can be used to obtain data items that applications can use to format geographic locations for display on reports, screens, mailing labels etc.  

The display functions do not have a WA2 and can only be called using one work area.  Each of them can process any combination of up to two input House Numbers in Internal format (HNI) for MSWs or up to two input House Numbers in Sort format (HNS) for COWs and up to three input street codes.  For each successfully processed input HNI/HNS, the corresponding House Number in Display format (HND) is returned in WA1.  (House number processing by the display functions is discussed in detail in [Chapter V.2](/chapters/chapterV/section02/).)  For each successfully processed input street code, a corresponding street name is returned in WA1.  (Street code processing by the display functions is discussed in [Chapter IV.6](/chapters/chapterIV/section06/).)  For each unsuccessfully processed input street code, the corresponding output field is returned containing all question marks.  If one input HNI/HNS is supplied, it may be passed in either input HNI/HNS field.  Input street codes may not ‘skip’ any input street code fields.

The display functions process each input item independently of the others, and the input data are not treated as collectively forming a geographic location. In particular, a successful call to a display function does not imply the validation of a geographic location.  For example, if there is an input house number and an input street code, these are not treated or validated as forming an address, but are independently processed for conversion to display format.  If the input consists of two street codes, these are not treated or validated as forming an intersection, etc.

Functions D, DG and DN differ in the type of street code each processes and in the street name each returns:

* Function D processes input borough-code-and-five-digit street codes, specified either in the form of B5SCs or PB5SCs (MSW only).  Input B5SCs are passed left-justified and space-filled in the corresponding WA1 input B10SC fields.  Input PB5SCs are passed in the corresponding MSW WA1 input PB5SC fields.  For each successfully processed input B5SC or PB5SC (MSW only), Function D returns the corresponding ‘primary’ name for the street ( a name from among all of the street’s aliases that GSS has designated as ‘best’ representing the street as a whole).

* Function DG processes input borough-code-and-seven-digit street codes (B7SCs).  Input B7SCs are passed left-justified and space-filled in the corresponding WA1 input B10SC fields.  For each input B7SC, Function DG returns a street name that GSS has designated as the ‘principal’ street name of the local group of names represented by the given B7SC.  Function DG can be used in conjunction with a geographic location-processing function to obtain the ‘preferred street name’ customized for a particular geographic location.  (For a discussion of seven-digit street codes and local groups, see [Chapter IV.5](/chapters/chapterIV/section05/).)

* Function DN processes input borough-code-and-ten-digit street codes (B10SCs).  For each input B10SC, Function DN returns the unique street name spelling corresponding to it.

<u><b>Input Fields:</b></u>

<table>
<tr><th colspan="3">Input Fields</th></tr>
<tr>
<th>Field</th>
<th>Value</th>
<th>Comments</th>
</tr>
<tr>
<td>Function Code</td>
<td>‘D ’ (D followed by a blank) or <br>
‘DG’ or <br>
‘DN’</td>
<td>Required.</td>
</tr>
<tr>
<td>Work Area Format Indicator</td>
<td>‘C’ = COW format <br>
Blank = MSW format</td>
<td>Optional; default (blank) <br>
 requests MSW format. See <a href="../appendix12/">Appendix 12</a></td>
</tr>
<tr>
<td>HNI-1 or HNS-1</td>
<td></td>
<td>Optional.</td>
</tr>
<tr>
<td>HNI-2 or HNS-2</td>
<td></td>
<td>Optional.</td>
</tr>
<tr>
<td>PB5SC-1 (MSW)</td>
<td></td>
<td>Function D only; optional unless PB5SC-2 is nonblank.</td>
</tr>
<tr>
<td>PB5SC-2 (MSW)</td>
<td></td>
<td>Function D only; optional unless PB5SC-3 is nonblank.</td>
</tr>
<tr>
<td>PB5SC-3 (MSW)</td>
<td></td>
<td>Function D only; optional.</td>
</tr>
<tr>
<td>B10SC-1 <br>
(or B5SC-1) <br>
(or B7SC-1)</td>
<td></td>
<td>Optional unless B10SC-2 is nonblank. <br>
(B5SC-1, B7SC-1are left-justified, space-filled in B10SC-1)</td>
</tr>
<tr>
<td>B10SC-2 <br>
(or B5SC-2) <br>
(or B7SC-2)</td>
<td></td>
<td>Optional unless B10SC-3 is nonblank.  (B5SC-2, B7SC-2 are left-justified, space-filled in B10SC-2)</td>
</tr>
<tr>
<td>B10SC-3 <br>
(or B5SC-3) <br>
(or B7SC-3)</td>
<td></td>
<td>Optional. <br>
(B5SC-3, B7SC-3 are left- justified, space-filled in B10SC-3)</td>
</tr>
<tr>
<td>SNL</td>
<td>A number between 4 and 32</td>
<td>Optional; default is 32.  See <a href="../../chapters/chapterIII/section02/">Chapter III.2</a>.</td>
</tr>
<tr>
<td>Street Name Normalization Format Flag</td>
<td>‘C’ = compact format, <br>
Blank = sort format </td>
<td>Optional; default (blank) requests sort format. See <a href="../../chapters/chapterIII/section03/">Chapter III.3</a>.</td>
</tr>
</table>


<u><b>Selected Geosupport Return Codes:</b></u>

<table>
<tr><th colspan="2">Selected Geosupport Return Codes</th></tr>
<tr>
<th>GRC / Reason Code Value</th>
<th>Meaning</th>
</tr>
<tr>
<td>13</td>
<td>At least one input HNI/HNS has a format error.  There are many possible house number format errors.  The specific format error is indicated by the Reason Code and Message. Output HND fields corresponding to unsuccessfully processed input HNI/HNSs are returned containing all blanks.</td>
</tr>
<tr>
<td>64</td>
<td>At least one input street code is invalid.  Output street name fields corresponding to invalid input street code fields are returned containing all ‘?’.</td>
</tr>
</table>
