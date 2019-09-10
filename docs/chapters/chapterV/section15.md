<h2>V.15  UNIT Information Feature (COW Only)</h2>  

Users have requested the ability to describe addresses more in more detail.  Geosupport now allows users to specify UNIT information, e.g. APT 5, on COW address-processing functions  

The UNIT feature enables users to keep better track of information specific to units within a building.  For example, it will be useful for PECO (Post Emergency Canvassing Operations) to record which units in a building were canvassed, and which units required assistance.  By allowing users to input apartment numbers it will help the users keep track of whom they saw when going into the field.  They can print lists with apartment numbers and keep track of which apartments were seen and which still remain to be seen.  The Unit information can also be used on mailing labels, etc.  

  * Unit information may appear at the end of an input free-form address,  
    e.g. 120 BROADWAY STE 3102  

  * Alternatively, unit information may also appear in the Unit Input field in Work Area 1,  
    e.g. STE 3102  

** Unit ** information consists of a ** Type ** and an ** Identifier ** .  For example, ‘APT 5’ consists of a Unit Type of ‘APT’ (apartment) and a Unit Identifier of ‘5’.  (Unit Type and Unit Identifier are similar to NENA (National Emergency Number Association) terminology.)  NENA and USPS (US Postal Service) have defined Preferred Types with a length of up to 4 characters.  Geosupport converts the input Type to the Preferred Type.  See Table of Preferred Types later in this section.  If the unit information does not have a recognized type, the Type will be set to a pound sign, viz. #, and the data will be considered as the Identifier.  If the data is longer than the space available in the Unit fields, the identifier will be truncated and a warning message (Reason Code $) will be issued.  

Unit information is supplied by the user in the Work Area 1 (WA1) Unit Input field for a length of 14, or at the end of a free-form address.  In either case, the unit information is normalized and returned in the Output Area of WA1 in two formats – Display format and Sort format.  

  * <u>Display format</u> for a length of 14, with Type and Identifier concatenated with one blank in between them.  

  * <u>Sort format</u> for a length of 14, which is broken down into two consecutive fields  

    * Unit Type for a length of 4  
    * Unit Identifier for a length of 10  

The following table indicates the size and location of the UNIT fields in the COW Work Area 1.  These fields are defined in the Geosupport COPY library.  

<table class="table">
    <tr>
      <th colspan="5"> UNIT Fields Work Area 1 (COW only) </th>  
    </tr>
    <tr>
      <th> Field name </th>
      <th> Size </th>
      <th> From </th>
      <th> To </th>
      <th> Functions </th>
    </tr>
    <tr><td colspan="5"> ----  The following Unit field is in the Input portion of Work Area 1 ----</td> </tr>
    <tr>
      <td> Unit Input </td>
      <td> 14 </td>
      <td> 219 </td>
      <td> 232 </td>
      <td> 1* </td>
    </tr>
    <tr><td colspan="5"> ----  The following Unit fields are in the Output portion of Work Area 1 ----</td>
    </tr>
    <tr>
      <td> UNIT - SORT FORMAT </td>
      <td> 14 </td>
      <td> 667 </td>
      <td> 680 </td>
      <td> 1* </td>
    </tr>
    <tr>
      <td> Unit – Type </td>
      <td> 4 </td>
      <td> 667 </td>
      <td> 670 </td>
      <td> 1* </td>
    </tr>
    <tr>
      <td> Unit – Identifier </td>
      <td> 10 </td>
      <td> 671 </td>
      <td> 680 </td>
      <td> 1* </td>
    </tr>
    <tr>
      <td> Unit – Display Format </td>
      <td> 14 </td>
      <td> 681 </td>
      <td> 694 </td>
      <td> 1* </td>
    </tr>
</table>  

The <u>normalization</u> of Unit input includes recognizing the Unit Type and Identifier and converting all Unit Types to the Preferred Unit Types.  In addition, the first instance of a Type is moved to the front of the Display Unit field.  Some of the basics of normalization are mentioned here.  

  * All ordinals are removed
  * All characters aside from A-Z, 0-9, -, / are removed
  * All extraneous blanks and all blanks before and after / or – are removed  
  * The first instance of a Type is moved to the front of the unit field with the rest of the identifier following, e.g. 1st Floor will be output as FL 1.  
  * All instances of a Type are replaced by the Preferred Type  
  * In the absence of a Type, the software will return a pound sign (#).  
  * In Display format there will always be a blank between the Type and the Identifier, e.g.<pre class="preInline">MEZZA</pre> will appear as <pre class="preInline">MEZZ A</pre> in a Unit output field.  (<pre class="preInline">MEZZ</pre> is the preferred Type for Mezzanine.)  

  Note: In the following discussions, blanks appear as hyphens.  

  * Consider an example where the Unit Input is '<pre class="preInline">4TH-FLOOR</pre>'. It will be normalized to: '<pre class="preInline">FL-4</pre>'  in the Display format. The ordinal <pre class="preInline">'TH'</pre> was removed; <pre class="preInline">'FLOOR'</pre> was replaced by the Preferred Type <pre class="preInline">'FL'</pre> ; and <pre class="preInline">'FL'</pre> was moved to the front of the Display Unit field.  

  * The Sort format is similar except that it is composed of two fields.  The Type is always 4 characters.  The first instance of a Type is put into the Type field of the Sort format.  The Identifier has 10 characters and any numeric may have extra spaces around them to ensure that they sort properly.  In this case, <pre class="preInline">'4<sup>th</sup>-FLOOR'</pre> would be appear as <pre class="preInline">'FL--'</pre> in the Sort Type field and '---4------' in the Sort Identifier field.   The extra blanks before the ‘4’ in the Sort Identifier field will ensure that if they are sorted, the sort version of <pre class="preInline">'10TH‑FLOOR'</pre> ('--10------') will appear <u>after</u> the sort version of <pre class="preInline">'4TH-FLOOR'</pre>  

  * If no Type at all is recognized in the input, then a pound sign ‘#’ is used as the Type in the Display and the Sort format.  For example, if the Unit Input just had a ‘5’, Then the Display format would contain <pre class="preInline">'#-5'</pre> ; the Sort format would contain Type: '#---' and Identifier:'---5------'.  

  * If Unit Input is specified in the WA1 Unit Input field, and additional information also appears after the Street Name in a <u>free-form call</u>, then the WA1 Unit Input field is processed and the information appearing after the free-form address is ignored.  

  * When the Unit information is supplied as part of the <u>free-form address</u>, Geosupport continues to give the Reason Code 'W' warning message  
  INPUT STREET NAME HAS BEEN MODIFIED  

  * In rare instances, a Unit Identifier may be truncated in an output field.  In that case, if the Unit Input was specified in the WA1 Unit Input field, then a warning message is issued.  The warning message is:  

  <table class="table">
  <tr>
    <th> GRC </th>
    <th> Reason Code </th>
    <th> Functions </th>
    <th> Message </th>
  </tr>
  <tr>
    <td>01</td>
    <td>$</td>
    <td>1*</td>
    <td>UNIT IDENTIFIER HAS BEEN TRUNCATED</td>
  </tr>
  </table>

When this situation occurs with a free-form address, the original warning message with Reason Code ‘W’:  INPUT STREET NAME HAS BEEN MODIFIED is still given.  

The following is a table of the Preferred Unit Types and the Alternate Types that are recognized as input.  The Preferred Type will appear in the Unit Output fields.  

<table>
 <tr>
    <th colspan="5"> Table of PREFERRED UNIT TYPEs  </th>
 </tr>
 <tr>
  <th>Preferred</th>
  <th>Alternate</th>
  <th>Alternate</th>
  <th>Alternate</th>
  <th>Alternate</th>
 </tr>
 <tr>
  <th>Unit Type</th>
  <th>Input 1</th>
  <th>Input 2</th>
  <th>Input 3</th>
  <th>Input 4</th>
 </tr>
 <tr>
  <td>APT</td>
  <td>APARTMENT</td>
  <td>APART</td>
  <td>APT</td>
  <td></td>
 </tr>
 <tr>
  <td>BSMT</td>
  <td>BASEMENT</td>
  <td>BSMT</td>
  <td>BSM</td>
  <td></td>
 </tr>
 <tr>
  <td>BSMBLDGT</td>
  <td>BUILDING</td>
  <td>BLDG</td>
  <td>BLD</td>
  <td></td>
 </tr>
 <tr>
  <td>CLR </td>
  <td>CELLAR</td>
  <td>CELAR</td>
  <td>CELL</td>
  <td>CLR</td>
 </tr>
 <tr>
  <td>COMM</td>
  <td>COMMONS</td>
  <td>COMMON</td>
  <td>COMM</td>
  <td>COM</td>
 </tr>
 <tr>
  <td>CONC</td>
  <td>COMCONCOURSEMONS</td>
  <td>CONCOURS</td>
  <td>CONC</td>
  <td></td>
 </tr>
 <tr>
  <td>CORR</td>
  <td>CORRIDOR</td>
  <td>CORRID</td>
  <td>CORR</td>
  <td>COR</td>
 </tr>
 <tr>
  <td>DEPT</td>
  <td>DEPARTMENT</td>
  <td>DEPT</td>
  <td>DEP</td>
  <td></td>
 </tr>
 <tr>
  <td>FL  </td>
  <td>FLOOR</td>
  <td>FLR</td>
  <td>FL</td>
  <td></td>
 </tr>
 <tr>
  <td>FRNT</td>
  <td>FRONT</td>
  <td>FRNT</td>
  <td>FRT</td>
  <td></td>
 </tr>
 <tr>
  <td>HNGR</td>
  <td>HANGER</td>
  <td>HNGR</td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>KEY </td>
  <td>KEY</td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>LBBY</td>
  <td>LOBBY</td>
  <td>LBBY</td>
  <td>LBY</td>
  <td></td>
 </tr>
 <tr>
  <td>LOT </td>
  <td>LOT </td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>LVL </td>
  <td>LEVEL</td>
  <td>LEVL</td>
  <td>LVL</td>
  <td>LEV</td>
 </tr>
 <tr>
  <td>LOWR </td>
  <td>LOWER </td>
  <td>LOWR</td>
  <td>LOW</td>
  <td></td>
 </tr>
 <tr>
  <td>MEZZ </td>
  <td>MEZZANINE </td>
  <td>MEZZ</td>
  <td>MEZ</td>
  <td></td>
 </tr>
 <tr>
  <td>OFC  </td>
  <td>OFFICE </td>
  <td>OFFIC</td>
  <td>OFF</td>
  <td></td>
 </tr>
 <tr>
  <td>PH   </td>
  <td>PENTHOUSE </td>
  <td>PNTHSE</td>
  <td>PH</td>
  <td></td>
 </tr>
 <tr>
  <td>PIER </td>
  <td>PIER </td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>REAR </td>
  <td>REAR </td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>RM   </td>
  <td>ROOM </td>
  <td>RM  </td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>SIDE </td>
  <td>SIDE </td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>SLIP </td>
  <td>SLIP </td>
  <td>SLP</td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>SPC    </td>
  <td>SPACE </td>
  <td>SPAC  </td>
  <td>SPC</td>
  <td></td>
 </tr>
 <tr>
  <td>STG    </td>
  <td>STORAGE </td>
  <td>STORAG  </td>
  <td>STRG</td>
  <td>STG</td>
 </tr>
 <tr>
  <td>STOP   </td>
  <td>STOP </td>
  <td>STP  </td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>STE    </td>
  <td>SUITE </td>
  <td>SUIT  </td>
  <td>STE</td>
  <td></td>
 </tr>
 <tr>
  <td>TRML   </td>
  <td>TERMINAL </td>
  <td>TRMNL  </td>
  <td>TRML</td>
  <td></td>
 </tr>
 <tr>
  <td>UNIT   </td>
  <td>UNIT </td>
  <td>UNT  </td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>RM   </td>
  <td>ROOM </td>
  <td>RM  </td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>UPPR   </td>
  <td>UPPER </td>
  <td>UPPR  </td>
  <td>UPR</td>
  <td></td>
 </tr>
 <tr>
  <td>WING   </td>
  <td>WING </td>
  <td>WNG  </td>
  <td></td>
  <td></td>
 </tr>
 </table>

 <u>** Mainframe GOAT (CICS) Support of Unit - Functions 1A and 1B ** </u>  

 * <u>Function:1A</u>  

 * Input: Field labeled <pre class="preInline"> 'Unit'</pre> is available for input data.  

 * Output: Field labeled <pre class="preInline"> 'Norm Unit Disp'</pre> displays the Normalized Display Format
  Unit Output field.  


 * <u>Function:1B</u>  

 * Input: Field labeled ‘Unit’ is available for input data.  

 * Output: To save screen space, the Field labeled <pre class="preInline">'Unit'</pre> that was used for input is also used for output and displays the Normalized Display Format Unit Output field.  

<u>** Mainframe GBAT Support - Functions 1A and 1B ** </u>  

* ** Required ** GBAT Control Entries  
      WORKAREA=COW  
      RECTYPE=1A or 1B  

* ** Optional ** GBAT Control Entries  
<table class="table">
  <tr>
    <td>UNIT=S,L</td>
    <td>defines location of Unit input field(not required if input data is free-form only)</td>
  </tr>
  <tr>
    <td class>GEOUNIT=YES or NO</td>
    <td>specifies if GBAT returns the Normalized Display Format Unit output field.</td>
  </tr>
  <tr>
    <td>GEOCODE=NO or ALL</td>
    <td>required if GEOUNIT=YES</td>
  </tr>
</table>

* ** Optional LRECL ** change  
  If GEOUNIT=YES is in effect, the LRECL of OUTFILE must be increased by 70.  

* For more detail on GBAT Unit processing, see Chapter IX, Appendix 9, and Appendix 12.  

** <u>Summary of Geosupport support of Unit processing</u> **  

* As of this writing, Unit Processing is supported by:  
    * Mainframe Batch and CICS  

    * Desktop Edition  

    * Linux Edition  

    * .net and Java classes  

    * Mainframe GBAT Batch (Functions 1A and 1B)  

    * Mainframe GOAT	CICS	(Functions 1A and 1B)  

    * Desktop Edition GBAT	(Functions 1A and 1B)!  

    * Web GOAT  

* As of this writing, Unit fields are not processed by:  

    * Mainframe GBAT	Batch	(Functions 1 and 1E)  

    * Desktop Edition GBAT	(Functions 1 and 1E)  

    * Desktop Edition GOAT

<br>
