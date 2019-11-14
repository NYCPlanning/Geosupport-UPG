<h2 class="pdfAppendix"><center>APPENDIX 12: CHARACTER-ONLY WORK AREAS (COW)</center></h2>


## <span id="appendix12.1">Introduction</span>

<u>**IMPORTANT MAINFRAME ANNOUNCEMENT**</u>  

<b>Beginning with Version 19.3, enhancements to Geosupport (such as new fields and new functions) are made available and supported only for applications running in a non-mainframe environment (NMF), e.g. Desktop Edition, GeoX, .net, and Linux.</b>  Enhancements to Geosupport will continue to be implemented for non-mainframe environments.  

It is therefore important for users to convert any existing mainframe applications to a non-mainframe environment.


Note also, as of January 1, 2020, Mainframe-Specific Work Areas (MSWs) will no longer be supported.  It is therefore essential that users convert their MSW applications to the COW format, in a non-mainframe environment.

=====================================

This appendix is based on Geosupport System Technical Bulletin 02-01 (dated 15 November 2002) and Geosupport Technical Bulletin 02-01 Addendum (dated 22 November 2002).  It contains information needed to create Geosupport applications using the Character-Only Work Areas (COWs).  Included are the following topics:

* Comparison of COWs and Mainframe-Specific Work Areas (MSWs)
* Considerations when using COWs
* Work Area Lengths
* Specifying the Work Area Format
* GBAT Considerations
* COW COPY Files


Notes:  

1. There are two versions of the sample programs in [Appendix 5](/appendices/appendix05/) of this User Programming Guide.  One version is for MSWs and the other is for COWs.  When coding, bear in mind the differences between COWs and MSWs.

2. The Work Area Layouts in [Appendix 2](/appendices/appendix02/) of this User Programming Guide are the layouts of the MSWs.  For the COW layouts, [see Appendix 13](/appendices/appendix13/).   

3. The COPY files that are printed in [Appendix 5](/appendices/appendix05/) of this User Programming Guide are for the Mainframe-Specific Work Areas (MSWs).  For the COW COPY files, [see Appendix 14](/appendices/appendix14/).


## <span id="appendix12.2">Overview </span>

Standard work areas with pre-defined layouts are used to pass data between the Geosupport System and user-developed application programs.  The same work areas are also used by GBAT, the Geosupport batch utility program, to pass data to and from Geosupport.

The Geosupport work areas that have long been in use are called the <u>Mainframe-Specific Work Areas (MSWs)</u>.  Most of the MSWs contain one or more packed decimal fields, a data encoding schema unique to IBM mainframes.  This appendix discusses an alternative set of Geosupport work areas called the <u>Character-Only Work Areas (COWs)</u> which, as the name implies, contain character fields only.  The introduction of the COW is an essential part of a long-term effort to port the Geosupport System to other platforms.

Each specific Geosupport work area (for example, Work Area 2 for Function 3S) has both a COW version and an MSW version.  User-written application programs running on mainframes now have the option to use either set of work areas when making calls to Geosupport.  GBAT users can also specify the use of either set of work areas.

<b>From now on, all new applications should be designed to use the COWs.</b>  We also recommend that <b>all existing applications be converted to use the COWs.</b>  Although the MSWs will continue to be supported, as of some future date (not yet determined), only the COWs will be enhanced with new data items and functionality.  Eventually, the MSWs may be de-supported.  

## <span id="appendix12.3">Comparison of COWs and MSWs</span>

Each non-character field in an MSW has a character field counterpart in the corresponding COW. Except for an item called the HND (discussed below in the sub-section on house number fields), each character field in an MSW appears in identical form in the corresponding COW.  However, corresponding fields do not necessarily occupy the same byte positions or occur in the same order in the corresponding MSW and COW.  In designing the COWs, the opportunity has been taken to reorganize the layouts to situate related fields near each other and to increase the amount of filler space available for adding new data items in the future.

The data items for which the MSWs contain non-character fields are house numbers, street codes, segment lengths, and count fields.  Each of these is discussed in detail below.

<b>House Number Fields.</b>  The Geosupport System uses three different formats for standardized or
‘normalized’ house numbers:  the House Number in Display format (HND), the House Number in Internal format (HNI), and the new House Number in Sort format (HNS).

* The <b>HND</b> is a character item that is present in both the COWs and the MSWs, but it has a different length in each: 16 bytes in the COWs and 12 bytes in the MSWs.  The length of the HND was increased in the COWs to insure that house numbers having suffixes fit within the HND field without the suffix having to be abbreviated.  (House number suffixes are certain character strings that occur at the ends of some New York City house numbers, such as 1/2, 1/4, REAR, GARAGE.)  For compatibility with MSW, by default Geosupport uses only the first 12 characters of the 16-byte COW HND. The remaining 4 characters are blank.  To use all 16 characters, the user can specify an HNL (House Number Length) of 16.

* The <b>HNI</b> is a six-byte data item with a hybrid format: the first five bytes are in packed decimal format, and the sixth byte contains a binary value.  HNIs occur only in the MSW.

* The <b>HNS</b> is a new 11-byte item that is the character equivalent of the HNI in the COWs.  

The HND is the appropriate format for displaying house numbers on application screens, reports and computer-generated maps, and is specifically designed for that purpose.  In particular, the HND is left-justified and space-filled.  However, the HND renders unsatisfactory results when used as a field to sort addresses.  For example, it would, inappropriately, cause 102 MAIN STREET to sort ahead of 98 MAIN STREET.

In contrast to the HND, both the HNI and the HNS are suitable to use as fields to sort addresses.  For example, both would, appropriately, cause 98 MAIN STREET to sort ahead of 102 MAIN STREET.  However, neither the HNI nor the HNS is suitable for display:

* The HNI is not a character item and so cannot be displayed as intelligible data unless first converted to character format.  Any of the Geosupport display functions (Functions D, DG and DN) can be used with the MSWs to convert an HNI to an HND.

* The HNS, although it is a character item, is unsuitable for display.  In particular, the HNS is in an internal format with a unique layout and flags.  If the house number has a suffix, the HNS does not contain the suffix itself, but instead, contains a code for the suffix meaningful only to the Geosupport software.  Any of the Geosupport display functions (Function D, DG and DN) can be used with the COWs to convert an HNS to an HND.  


To reiterate, <b>the HND should be used for display, and the HNI (in MSWs) or the HNS (in COWs) should be used for sorting.</b>

<b><u>Street Code Fields.</u></b>  A notable feature of the Geosupport System is its set of numeric street codes assigned to the names of New York City streets and selected non-street geographic features.  The street code feature provides specialized capabilities that are essential for certain types of applications.

Street codes appear in several forms in the Geosupport work areas.  In many of the MSWs, there are four-byte fields for a packed decimal data item called the Packed Borough and 5-Digit Street Code (PB5SC).  The COW counterparts of PB5SC fields can take one of the following three forms:

* A six-byte field for an item called the Borough and 5-Digit Street Code (B5SC).  This is simply the unpacked version of the PB5SC

* The first six bytes (constituting the B5SC) of an eight-byte field for an item called the Borough and 7-Digit Street Code (B7SC)

* The first six bytes (constituting the B5SC) of an 11-byte field for an item called the Borough and 10-Digit Street Code (B10SC)

<b><u>Segment Length Fields.</u></b>  Both Work Area 2 for Function 3 and Work Area 2 for Function 3C contain fields for the segment length expressed in feet.  In the MSW format, these are 3-byte packed decimal fields.  In the COW format, they are 5-byte character fields.

<b><u>Count Fields.</u></b>  Some count fields, e.g. Number of Street Names in List, are packed decimal fields in the MSW format, and character fields in the COW format.  


## <span id="appendix12.4">Consideration When Using the COWs</span>

The Long Work Area 2 option that is available when using the MSWs is occasionally not needed or not supported when using the COWs, as follows:

* When using the COWs, Functions 1, 1E and 3 do not have the long Work Area 2 option.  This option is unnecessary in these cases, since the COW versions of the regular Work Area 2s for these functions already accommodate all the requisite fields.  However, Functions 1A and BL continue to have the long Work Area 2 option when COWs are used.  ([See Chapter II.5](/chapters/chapterII/chapterII/) for a general discussion of the long Work Area 2 option.)


## <span id="appendix12.5">Work Area Lengths (COWs and MSWs)</span>

The following table lists the lengths of the members of both sets of work areas.  Note that the lengths of corresponding members from the two sets differ in most cases.  

<table>
  <tr><td colspan="3" id="a12-1"><center>Table A12-1:  Lengths of Work Areas (COWs and MSWs)</center></td></tr>
  <tr>
    <th>Work Area</th>
    <th>Length of COW</th>
    <th>Length of MSW</th>
  </tr>
  <tr>
    <td>Work Area 1 (used with all functions)</td>
    <td>1200</td>
    <td>884</td>
  </tr>
  <tr>
    <td>Regular WA2 for Functions 1, 1E</td>
    <td>300</td>
    <td>200</td>
  </tr>
  <tr>
    <td>Long WA2 for Functions 1, 1E</td>
    <td>N/A</td>
    <td>300</td>
  </tr>
  <tr>
    <td>Extended WA2 for Functions 1, 1E</td>
    <td>1500</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Regular WA2 for Functions 1A, BL, BN</td>
    <td>1363</td>
    <td>939</td>
  </tr>
  <tr>
    <td>Long WA2 for Functions 1A, BL</td>
    <td>17750</td>
    <td>17683</td>
  </tr>
  <tr>
    <td>Extended WA2 for Functions 1A</td>
    <td>2800</td>
    <td>NA </td>
  </tr>
  <tr>
    <td>WA2 for Function 1B</td>
    <td>4300</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>WA2 for Function 2</td>
    <td>200</td>
    <td>200</td>
  </tr>
  <tr>
    <td>Regular WA2 for Function 3</td>
    <td>450</td>
    <td>200</td>
  </tr>
  <tr>
    <td>Long WA2 for Function 3</td>
    <td>N/A</td>
    <td>300</td>
  </tr>
  <tr>
    <td>Extended WA2 for Function 3</td>
    <td>1000</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Auxiliary Segment WA2 for Function 3</td>
    <td>950</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Extended WA2 with Auxiliary Segment for Function 3</td>
    <td>1500</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>WA2 for Function 3C</td>
    <td>300</td>
    <td>200</td>
  </tr>
  <tr>
    <td>Auxiliary Segment WA2 for Function 3C</td>
    <td>800</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Extended WA2 with Auxiliary Segment for Function 3C</td>
    <td>1350</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Regular WA2 for Function AP</td>
    <td>1363</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Extended WA2 for Functions AP</td>
    <td>2800</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>WA2 for Function 3S</td>
    <td>19274</td>
    <td>4224</td>
  </tr>
</table>  


## <span id="appendix12.6">Specifying a Work Area Format (COW or MSW)</span>

To indicate which set of work areas is being used in a call to Geosupport, an application program uses a new field called the Work Area Format Indicator.  This field is one byte long and is located at position 213 of both the COW Work Area 1 and the MSW Work Area 1.

* The value ‘C’ in the Work Area Format Indicator indicates to Geosupport that COWs are being used for the given call.

* A blank in the Work Area Format Indicator indicates that MSWs are being used.

* If the Work Area Format Indicator is invalid, the call is rejected with a Geosupport Return Code of 27 and an appropriate message.

Since every call to Geosupport is an independent event, application programs must insure that the Work Area Format Indicator is appropriately set for each call;  Geosupport doesn’t ‘remember’ previous calls.

Note that the MSWs are the default work areas, that is, the work areas that Geosupport expects when the Work Area Format Indicator is blank.  Therefore, <b>existing applications that use the MSWs will continue to execute properly without modification, provided Work Area 1 is being passed to Geosupport with position 213 containing a blank.</b>  (As a matter of course, every application program should be designed so that, each time a call to Geosupport is to be made, the program clears Work Area 1 entirely to blanks prior to moving the input data for that call into the requisite Work Area 1 fields.  This insures that Work Area 1 will not be ‘polluted’ by stray input data lingering from a previous call.)  



## <span id="appendix12.7">GBAT Considerations for COWs</span>

When executing GBAT, the set of work areas that are used affects the length and format of the records written into OUTFILE (the output file of successfully processed data records).

To specify the set of work areas GBAT is to use, the user codes a control entry in CARDIN (the input control file) containing the keyword WORKAREA, as follows:

* WORKAREA=COW specifies the COWs.

* WORKAREA=MSW specifies the MSWs.

* (Default:)  If no WORKAREA control entry is coded, GBAT uses the MSWs.

Since the MSWs are GBAT’s default set of work areas, existing GBAT jobs will continue to execute properly without modification.

When COWs are used, GBAT options that involve processing packed decimal input data are, of course, invalid.  Specifically, the following control entries or control entry variable values are invalid when COWs are being used:

* HNI=YES is invalid.

* In the control entries STRTCODE, CRSCOD1 and CRSCOD2, the values 3 and 4 are invalid for the length variable.

* If MSWs are being used, the default is 1ABLVERSION=L (or 1ABLVERSION=LEGACY), which results in an error, since Legacy is no longer supported.

GBAT forms each OUTFILE record by appending Geosupport information to a copy of the data input record.  The information that is appended is determined by three factors:  the set of work areas being used, the function being executed and the value of the GEOCODE control entry that is in effect.  The GEOCODE value affects the appended information as follows:

* When  GEOCODE=NO, the appended items consist only of selected output items from Work Area 1 (and, in case of MSW Functions 1, 1A, and 1E, an item created by GBAT called the HNHPD).  [See Table A12-2](#a12-2) below for lists of the appended COW items and their lengths by function and set of work areas.  For MSW format, see [Table 9-4](/appendices/appendix09/#table-a9-4-msw-appended-items-for-geocodeno) and [Table 9-5](/appendices/appendix09/#table-a9-5-msw-format-length-of-gbatappended-data).  

    When GEOCODE =YES the appended information consists only of work area 2 in its entirety. [Table A12-1](#a12-1) above lists the lengths of these work areas by function and work area format.  [Appendix 2](/appendices/appendix02/) contains the MSW Work Area Layouts and [Appendix 13](/appendices/appendix13/) contains the COW Work Area layouts.  

* When GEOCODE=ALL, the appended information consists of the data for GEOCODE=NO followed by the data appended for GEOCODE=YES.  [Table A12-3](#a12-3) lists the lengths of the appended information by function and set of work areas.  These lengths typically are the sums of the corresponding lengths listed in [Table A12-1](#a12-1) and [Table A12-2](#a12-2)(and [A12-2A](#a12-2a) if GEOUNIT=YES).

YES and ALL are invalid GEOCODE options for Functions 1N, D, DG and DN, since these functions do not have a Work Area 2.

The information appended for GEOCODE=NO is as follows.  

* <u>For the functions that allow an input house number other than the display functions (viz. Functions 1, 1A, 1B and 1E):</u>  the appended information includes normalized house number items as follows:

    * If COWs are being used, the HND and the HNS are appended.  

    * If MSWs are being used, the HND and an 8-byte item called the HNHPD are appended.  The HNHPD is a normalized house number created by GBAT in a special format for use only by the Department of Housing Preservation and Development.

* <u>For the display functions (Functions D, DG and DN), which allow input house numbers in the form of HNIs when using MSWs:</u>  the appended information includes the normalized house numbers only in the HND format for a length of 12.

* <u>For the display functions (Functions D, DG and DN), which allow  input house numbers in the form of HNSs when using COWs:</u>  the appended information includes the normalized house numbers only in the HND format for a length of between 12 and 16.

* <u>For the functions that involve input street names (Functions 1, 1A, 1B, 1E, 1N, 2, 3, 3C, 3S, D, DG and DN):</u>  the appended information includes normalized street name(s) and street codes, as follows:

    * Regardless of which set of work areas is being used, normalized street names are provided in 32‑byte fields, left-justified and blank‑filled.  

    * If COWs are being used, street codes are provided as B10SCs, an 11-byte item.

* If MSWs are being used, street codes are provided as 10SCs (ten‑digit street codes without a borough code), a 10-byte item.

* <u>For Function BL:</u> the appended information when 1ABLVERSION=STANDARD is specified consists of the standard 10-byte BBL, which is composed of the one-byte borough code followed by the five-byte tax block followed by the four-byte tax lot.   Note: STANDARD is the only valid value for 1ABLVERSION.  

* <u>For Function BN:</u>  the appended information consists of ten bytes containing the seven-byte Building Identification Number (BIN) followed by a three-byte filler.

Table A12-2 below lists the appended items when GEOCODE=NO, itemized by function and set of work areas.  When an item of appended data has no value for a particular record (such as a house number item, when the input location is a non-addressable place name), the given field is still present in the appended data but it contains all blanks.  The only exception to this involves the display functions (D, DG and DN) when using MSWs, where there is no field for the second house number unless it is provided as an input datum by the user.

Table [A12-2A](#a12-2a), which follows Table [A12-2](#a12-2), lists the additional appended items when GEOUNIT=YES.  Note that that the GEOUNIT option is for COW only.  The GEOUNIT items are appended in the output file record immediately after the GEOCODE=NO items (when GEOCODE=NO or GEOCODE=ALL).  

<span id="appendix12-tblA12-2"><b><center>Table A12-2: GBAT-Appended Items when GEOCODE=NO (COWs and MSWs)</center></b></span>
<center>See Table A12-2A for additional GBAT-Appended Items when GEOUNIT=YES(COW Only)</center>

<table id="a12-2">
  <tr>
    <th rowspan="2"> Functions </br> [Options]</th>
    <th colspan="2"> COWs</th>
    <th colspan="2"> MSWs</th>
  </tr>
  <tr>
    <th>Appended Items</th>
    <th>Length</th>
    <th>Appended Items</th>
    <th>Length</th>
  </tr>
  <tr>
    <td rowspan="5">1, 1A, 1B<a href="#appendix12-15" id="appendix12-15-15"><sup>15</sup></a>, 1E, AP<a href="#appendix12-16" id="appendix12-16-16"><sup>16</sup></a></td>
    <td>HND</td>
    <td>16</td>
    <td>HND</td>
    <td>12</td>
  </tr>
  <tr>
    <td>HNS</td>
    <td>11</td>
    <td>HNHPD</td>
    <td>8</td>
  </tr>
  <tr>
    <td>Normalized Street Name</td>
    <td>32</td>
    <td>Normalized Street Name</td>
    <td>32</td>
  </tr>
  <tr>
    <td>B10SC</td>
    <td>11</td>
    <td>10SC</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>70</td>
    <td>Total Length:</td>
    <td>62</td>
  </tr>
  <tr>
    <td rowspan="3">1N</td>
    <td>Normalized Street Name</td>
    <td>32</td>
    <td>Normalized Street Name</td>
    <td>32</td>
  </tr>
  <tr>
    <td>B10SC</td>
    <td>11</td>
    <td>10SC</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>43</td>
    <td>Total Length:</td>
    <td>42</td>
  </tr>
  <tr>
    <td rowspan="5">2</td>
    <td>Normalized Street Name-1</td>
    <td>32</td>
    <td>Normalized Street Name-1</td>
    <td>32</td>
  </tr>
  <tr>
    <td>B10SC-1</td>
    <td>11</td>
    <td>10SC-1</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Normalized Street Name-2</td>
    <td>32</td>
    <td>Normalized Street Name-2</td>
    <td>32</td>
  </tr>
  <tr>
    <td>B10SC-2</td>
    <td>11</td>
    <td>10SC-2</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>86</td>
    <td>Total Length:</td>
    <td>84</td>
  </tr>

  <tr>
    <td rowspan="2">2 - NODE input</td>
    <td>Filler</td>
    <td>86</td>
    <td rowspan="2">Invalid</td>
    <td rowspan="2"></td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>86</td>
  </tr>



  <tr>
    <td rowspan="7">3, 3C, 3S</td>
    <td>Normalized Street Name-1</td>
    <td>32</td>
    <td>Normalized Street Name-1</td>
    <td>32</td>
  </tr>
  <tr>
    <td>B10SC-1</td>
    <td>11</td>
    <td>10SC-1</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Normalized Street Name-2</td>
    <td>32</td>
    <td>Normalized Street Name-2</td>
    <td>32</td>
  </tr>
  <tr>
    <td>B10SC-2</td>
    <td>11</td>
    <td>10SC-2</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Normalized Street Name-3</td>
    <td>32</td>
    <td>Normalized Street Name-3</td>
    <td>32</td>
  </tr>
  <tr>
    <td>B10SC-3</td>
    <td>11</td>
    <td>10SC-3</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>129</td>
    <td>Total Length:</td>
    <td>126</td>
  </tr>



  <tr>
    <td rowspan="2">AP</td>
    <td>See 1, 1A, 1E, 1B, AP above</td>
    <td>70</td>
    <td rowspan="2">Invalid</td>
    <td rowspan="2"></td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>70</td>
  </tr>


  <tr>
    <td rowspan="5">BL (Standard)</td>
    <td>BBL:</td>
    <td></td>
    <td>BBL:</td>
    <td></td>
  </tr>
  <tr>
    <td>Borough Code</td>
    <td>1</td>
    <td>Borough Code</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Tax Block</td>
    <td>5</td>
    <td>Tax Block</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Tax Lot</td>
    <td>4</td>
    <td>Tax Lot</td>
    <td>4</td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>10</td>
    <td>Total Length:</td>
    <td>10</td>
  </tr>

  <tr>
    <td>BL (Legacy)</td>
    <td>Invalid</td>
    <td></td>
    <td>Invalid</td>
    <td></td>
  </tr>




  <tr>
    <td rowspan="3">BN</td>
    <td>BIN</td>
    <td>7</td>
    <td>BIN</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>3</td>
    <td>Filler</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>10</td>
    <td>Total Length:</td>
    <td>10</td>
  </tr>




  <tr>
    <td rowspan="6">D, DG, DN [HOUSENUM2 control entry not coded]</td>
    <td>HND-1</td>
    <td>16</td>
    <td>HND</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Normalized Street Name-1</td>
    <td>32</td>
    <td>Normalized Street Name-1</td>
    <td>32</td>
  </tr>
  <tr>
    <td>Normalized Street Name-2</td>
    <td>32</td>
    <td>Normalized Street Name-2</td>
    <td>32</td>
  </tr>
  <tr>
    <td>Normalized Street Name-3</td>
    <td>32</td>
    <td>Normalized Street Name-3</td>
    <td>32</td>
  </tr>
  <tr>
    <td>HND-2</td>
    <td>16</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>128</td>
    <td>Total Length:</td>
    <td>108</td>
  </tr>

  <tr>
    <td rowspan="6">D, DG, DN [HOUSENUM2 control entry coded]</td>
    <td>HND-1</td>
    <td>16</td>
    <td>HND-1</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Normalized Street Name-1</td>
    <td>32</td>
    <td>Normalized Street Name-1</td>
    <td>32</td>
  </tr>
  <tr>
    <td>Normalized Street Name-2</td>
    <td>32</td>
    <td>Normalized Street Name-2</td>
    <td>32</td>
  </tr>
  <tr>
    <td>Normalized Street Name-3</td>
    <td>32</td>
    <td>Normalized Street Name-3</td>
    <td>32</td>
  </tr>
  <tr>
    <td>HND-2</td>
    <td>16</td>
    <td>HND-2</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>128</td>
    <td>Total Length:</td>
    <td>120</td>
  </tr>

</table>



<span id="appendix12-tblA12-2A"><b>Table A12-2A:  Additional GBAT-Appended Items when GEOUNIT=YES (COW only)</b> </span>

<table id="a12-2a">

<tr>
  <th rowspan="2"> Functions </br> [Options]</th>
  <th colspan="2"> COWs</th>
</tr>
<tr>
  <th>Appended Items</th>
  <th>Length</th>
</tr>

  <tr>
    <td rowspan="3">1, 1E, 1A, 1B</td>
    <td>Normalized Display-Format Unit Output</td>
    <td>14</td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>56</td>
  </tr>
  <tr>
    <td>Total Length:</td>
    <td>70</td>
  </tr>

</table>  


Table A12-3 lists the length of the data appended by GBAT, itemized by function and option within function, GEOCODE value and set of work areas being used.

<b><u>Note: CROSSSTNAMES=YES</u></b>
For Functions 1, 1E, 1B, 2, 3 and 3C, when GEOCODE=ALL (and, optionally, GEOUNIT=YES) and CROSSSTNAMES=YES, the appended data consist of the concatenation of the GEOCODE=NO data, (followed, optionally, by GEOUNIT=YES data,) followed by a 320-byte block of data containing cross street names, followed by the GEOCODE=YES data.  For further information about the layout of the appended CROSSSTNAMES data, refer to the [Appendix 3](/appendices/appendix03/) entry for the List of Street Names (see paragraph on List of Cross Street Names).


<center><b>Table A12-3:  Length of GBAT‑Appended Data (COWs and MSWs)</b></center>
<center>Note: The data is appended to the user’s input record</center>  


<table id="a12-3">
  <tr>
    <th rowspan="2">Functions</th>
    <th rowspan="2">Options <sup>17</sup></th>
    <th colspan="2">GEOCODE=NO</th>
    <th colspan="2">GEOCODE=YES</th>
    <th colspan="2">GEOCODE=ALL</th>
  </tr>
  <tr>
    <td>COWs</td>
    <td>MSWs</td>
    <td>COWs</td>
    <td>MSWs</td>
    <td>COWs</td>
    <td>MSWs</td>
  </tr>
  <tr>
    <td rowspan="5">1, 1E</td>
    <td>LONGWA2=NO</td>
    <td>70</td>
    <td>62</td>
    <td>300</td>
    <td>200</td>
    <td>370</td>
    <td>262</td>
  </tr>
  <tr>
    <td>LONGWA2=NO <br> GEOUNIT=YES</td>
    <td>140</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>440</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>LONGWA2=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>300</td>
    <td>Invalid</td>
    <td>362</td>
  </tr>
  <tr>
    <td>MODE=X</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>1500</td>
    <td>Invalid</td>
    <td>1570</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>MODE=X GEOUNIT=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>1640</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td rowspan="6">1A</td>
    <td>LONGWA2=NO</td>
    <td>70</td>
    <td>62</td>
    <td>1363</td>
    <td>939</td>
    <td>1433</td>
    <td>1001</td>
  </tr>
  <tr>
    <td>LONGWA2=NO, GEOUNIT=YES</td>
    <td>140</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>1503</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>LONGWA2=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>17750</td>
    <td>17683</td>
    <td>17820</td>
    <td>17745</td>
  </tr>
  <tr>
    <td>LONGWA2=YES, GEOUNIT=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>17890</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>MODE=X, LONGWA2=NO</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>2800</td>
    <td>Invalid</td>
    <td>2870</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>MODE=X, LONGWA2=NO, GEOUNIT=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>2940</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td rowspan="2">1B</td>
    <td></td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>4300</td>
    <td>Invalid</td>
    <td>4370</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>GEOUNIT=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>4440</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>1N</td>
    <td></td>
    <td>43</td>
    <td>42</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
  </tr>

  <tr>
    <td rowspan="2">2</td>
    <td></td>
    <td>86</td>
    <td>84</td>
    <td>200</td>
    <td>200</td>
    <td>286</td>
    <td>284</td>
  </tr>
  <tr>
    <td>RELATEDNODES = YES  (ERRFIL3)</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>3352</td>
    <td>Invalid</td>
    <td>3352</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td rowspan="5">3</td>
    <td>LONGWA2=NO with AUXSEG=NO</td>
    <td>129</td>
    <td>126</td>
    <td>450</td>
    <td>200</td>
    <td>579</td>
    <td>326</td>
  </tr>
  <tr>
    <td>LONGWA2=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>300</td>
    <td>Invalid</td>
    <td>426</td>
  </tr>
  <tr>
    <td>AUXSEG=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>950</td>
    <td>Invalid</td>
    <td>1079</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>MODE=X</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>1000</td>
    <td>Invalid</td>
    <td>1129</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>MODE=X with AUXSEG=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>1500</td>
    <td>Invalid</td>
    <td>1629</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td rowspan="4">3C</td>
    <td>AUXSEG=NO</td>
    <td>129</td>
    <td>126</td>
    <td>300</td>
    <td>200</td>
    <td>429</td>
    <td>326</td>
  </tr>
  <tr>
    <td>AUXSEG=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>800</td>
    <td>Invalid</td>
    <td>929</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>MODE=X</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>850</td>
    <td>Invalid</td>
    <td>979</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>MODE=X with AUXSEG=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>1350</td>
    <td>Invalid</td>
    <td>1479</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>3S</td>
    <td></td>
    <td>129</td>
    <td>126</td>
    <td>19274</td>
    <td>4224</td>
    <td>19403</td>
    <td>4350</td>
  </tr>
  <tr>
    <td rowspan="2">AP</td>
    <td></td>
    <td>70</td>
    <td>Invalid</td>
    <td>1363</td>
    <td>Invalid</td>
    <td>1433</td>
    <td>Invalid</td>
  </tr>
  <tr>
    <td>MODE=X</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>2800</td>
    <td>Invalid</td>
    <td>2870</td>
    <td>Invalid</td>
  </tr>

  <tr>
    <td rowspan="3">BL</td>
    <td>LONGWA2=NO</td>
    <td>10</td>
    <td>10</td>
    <td>1363</td>
    <td>939</td>
    <td>1373</td>
    <td>949</td>
  </tr>

  <tr>
    <td>LONGWA2=YES</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>17750</td>
    <td>17683</td>
    <td>17760</td>
    <td>17693</td>
  </tr>

  <tr>
    <td>MODE=X, LONGWA2=NO</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>2800</td>
    <td>Invalid</td>
    <td>2810</td>
    <td>Invalid</td>
  </tr>


  <tr>
    <td rowspan="2">BN</td>
    <td>10</td>
    <td>10</td>
    <td>1363</td>
    <td>939</td>
    <td>1373</td>
    <td>949</td>
  </tr>


  <tr>
    <td>MODE=X</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>2800</td>
    <td>Invalid</td>
    <td>2810</td>
    <td>Invalid</td>
  </tr>


  <tr>
    <td rowspan="2">D, DG, DN</td>
    <td>HOUSENUM2 not coded</td>
    <td>128</td>
    <td>128</td>
    <td>128</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
  </tr>


  <tr>
    <td>HOUSENUM2 coded</td>
    <td>128</td>
    <td>120</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
    <td>Invalid</td>
  </tr>
</table>





## <span id="appendix12.8">COPY Files for COWs</span>

For COBOL, PL/1, BAL and C programmers, copy files have been created to enable you to easily use the new work areas (COWs) in your programming work. Local Data Areas will be available for Natural programmers.  If you use the MVSP LPAR at DoITT, these items will be found in library ‘A030.GEO.COPYLIB’.  If you use any other LPAR at DoITT or if you work at a different data center, contact your system programming staff to learn the name of the library in which these members are stored.  The following table shows you the copy file name by language and Geosupport Function.

<b><center>Table A12-4:  List of COPY Files for COWs</center></b>



<table id="a12-4">
<tr>
  <th>Language</th>
  <th>COW Work Area</th>
  <th>Copy File</th>
</tr>
<tr>
  <td>COBOL</td>
  <td>Work Area 1 (used with all Functions) <br>
Regular Work Area 2 for Functions 1 and 1E <br>
Extended Work Area 2 for Functions 1 and 1E <br>
Regular Work Area 2 for Functions 1A, BL, BN <br>
Long Work Area 2 for Functions 1A and BL <br>
Work Area 2 for Function 2 <br>
Regular Work Area 2 for Function 3 <br>
Auxiliary Segment Work Area 2 for Function 3 <br>
Regular Work Area 2 for Function 3C <br>
Auxiliary Segment Work Area 2 for Function 3C <br>
Work Area 2 for Function 3S <br>
Regular Work Area 2 for Function AP <br>
Extended Work Area 2 for Function AP</td>
  <td>
  P1COB <br>
P2COB <br>
P2COB1AL <br>
P2COB1A <br>
P2COB1AL <br>
P2COB <br>
P2COB <br>
P2COB <br>
P2COB <br>
P2COB <br>
P2COB3S <br>
P2COBAP <br>
P2COBAP

  </td>
</tr>
<tr>
  <td>PL/1</td>
  <td>Work Area 1 (used with all Functions)<br>
  Regular Work Area 2 for Functions 1 and 1E<br>
  Extended Work Area 2 for Functions 1 and 1E<br>
  Regular Work Area 2 for Functions 1A, BL, BN<br>
  Long Work Area 2 for Functions 1A and BL<br>
  Work Area 2 for Function 2<br>
  Regular Work Area 2 for Function 3<br>
  Auxiliary Segment Work Area 2 for Function 3<br>
  Regular Work Area 2 for Function 3C<br>
  Auxiliary Segment Work Area 2 for Function 3C<br>
  Work Area 2 for Function 3S<br>
  Regular Work Area 2 for Function AP<br>
  Extended Work Area 2 for Function AP</td>
  <td>P1PL1<br>
  P2PL1<br>
  P2PL11AL<br>
  P2PL11A<br>
  P2PL11AL<br>
  P2PL1<br>
  P2PL1<br>
  P2PL1<br>
  P2PL1<br>
  P2PL1<br>
  P2PL13S<br>
  P2PLIAP<br>
  P2PLIAP</td>
</tr>
<tr>
  <td>NATURAL</td>
  <td>Work Area 1 (used with all Functions)<br>
  Regular Work Area 2 for Functions 1 and 1E<br>
  Extended Work Area 2 for Functions 1 and 1E<br>
  Regular Work Area 2 for Functions 1A, BL, BN<br>
  Long Work Area 2 for Functions 1A and BL<br>
  Work Area 2 for Function 2<br>
  Regular Work Area 2 for Function 3<br>
  Auxiliary Segment Work Area 2 for Function 3<br>
  Regular Work Area 2 for Function 3C<br>
  Auxiliary Segment Work Area 2 for Function 3C<br>
  Work Area 2 for Function 3S<br>
  Regular Work Area 2 for Function AP<br>
  Extended Work Area 2 for Function AP<br></td>
  <td>GEOLP1<br>
  GEOLP2<br>
  GEOLP2AL<br>
  GEOLP21A<br>
  GEOLP2AL<br>
  GEOLP2<br>
  GEOLP2<br>
  GEOLP2<br>
  GEOLP2<br>
  GEOLP2<br>
  GEOLP23S<br>
  GEOL2AP<br>
  GEOL2APX</td>
</tr>
<tr>
  <td>BAL</td>
  <td>Work Area 1 (used with all Functions)<br>
  Regular Work Area 2 for Functions 1 and 1E<br>
  Extended Work Area 2 for Functions 1 and 1E<br>
  Regular Work Area 2 for Functions 1A, BL, BN<br>
  Long Work Area 2 for Functions 1A and BL<br>
  Work Area 2 for Function 2<br>
  Regular Work Area 2 for Function 3<br>
  Auxiliary Segment Work Area 2 for Function 3<br>
  Regular Work Area 2 for Function 3C<br>
  Auxiliary Segment Work Area 2 for Function 3C<br>
  Work Area 2 for Function 3S<br>
  Regular Work Area 2 for Function AP<br>
  Extended Work Area 2 for Function AP<br></td>
  <td>P1BAL<br>
  P2BAL<br>
  P2BAL1A<br>
  P2BAL1A<br>
  P2BAL1A<br>
  P2BAL<br>
  P2BAL<br>
  P2BAL<br>
  P2BAL<br>
  P2BAL<br>
  P2BAL3S<br>
  P2PLIAP<br>
  P2PLIAP</td>
</tr>
<tr>
  <td>C</td>
  <td>All Work Areas for all Functions</td>
  <td>PAC</td>
</tr>
</table>



<p>___________________________</p>
<a href="#appendix12-15-15"><sup id="appendix12-15">15 </sup></a>GEOCODE=NO is invalid for Function 1B, but the 70 bytes are appended when GEOCODE=ALL.  
<a href="#appendix12-16-16"><sup id="appendix12-16">16 </sup></a>Functions 1B and AP are valid for COW only  
