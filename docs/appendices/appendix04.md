<h2 class="pdfAppendix"><center>APPENDIX 4: GEOSUPPORT RETURN CODES, REASON CODES AND MESSAGES</center> </h2>  

This appendix consists of a table listing all of the Geosupport Return Codes (GRCs), Reason Codes and Messages, and the Geosupport function(s) that can elicit each of them.  The table is current as of the Geosupport software version indicated in the table heading.  [See Chapter II.2](../../chapters/chapterII/section02/) for a detailed discussion of application reject handling using GRCs, Reason Codes and Messages.

In the table, an asterisk in the second byte position of a function code is a 'wildcard', signifying
all function codes that begin with the character that is in the first byte position. For example, '3<sup>* </sup>' signifies all function codes that begin with '3'(namely, as of this writing, Functions 3, 3C and
3S).  

An asterisk in the second position of a function code is used as a shorthand notation to represent all function codes having the indicated value in the first position, as follows  

  1<sup>* </sup> = 1, 1A, 1B, 1E, 1N, AP  
  3<sup>* </sup> = 3, 3C, 3S  
  B<sup>* </sup> = BB, BF, BL, BN  
  D<sup>* </sup> = D, DG, DN  

Typically, any function listed with an asterisk also includes the various forms of the function, e.g. Extended, Long, Auxiliary Segments etc.  

<table class="pdfSmallTable">
  <tr>
    <th colspan="4"><b> GEOSUPPORT SYSTEM RETURN CODES, REASON CODES AND MESSAGES <br> (As of Geosupport Software Version 20.1 - <span class="smallText">unchanged since</span> V17.1) </b>
    </th>
  </tr>
  <tr>
    <td><b>GRC</b></td>
    <td>REASON CODE</td>
    <td>FUNCTIONS <br> * = wildcard</td>
    <td>MESSAGE (LITERAL TEXT IN UPPERCASE,
      < Variable values in angled brackets>, [Comments in Square Brackets & Mixed Case])</td>
  </tr>
  <tr class="borderlessTable">
    <td></td>
  </tr>
  <tr>
    <td>00</td>
    <td> </td>
    <td>All</td>
    <td>[Processing was unconditionally successful-no message issued]</td>
  </tr>
  <tr>
    <td rowspan="39" class="topVerticalTD">01</td>
    <td colspan="3"><b><center>[GRC 01s are warnings]</b>
      <center>
    </td>
  </tr>
  <tr>
    <td>1</td>
    <td>1,1A,1B,<br>1E,AP</td>
    <td>ADDR NUMBER ALTERED: RANGE ASSUMED. USING DIGITS BEFORE DASH ONLY<br> ADDR NUMBER ALTERED: USING DIGITS BEFORE DASH ONLY</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDR NUMBER ALTERED: HYPHEN INSERTED</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDR NUMBER ALTERED: HYPHEN DELETED</td>
  </tr>
  <tr>
    <td>4</td>
    <td>BB,BF</td>
    <td>YOU HAVE REACHED THE
      < FIRST or LAST> STREET NAME IN THE BOROUGH OF
        < boro. name>
    </td>
  </tr>
  <tr>
    <td>5</td>
    <td>1,1A,1B,1E</td>
    <td>INPUT IS A COMPLEX. OUTPUT DATA MAY PERTAIN TO ONLY PART OF THE COMPLEX</td>
  </tr>
  <tr>
    <td>6</td>
    <td>1,1A,1B,1E</td>
    <td>OUTPUT STREET NAME/CODE DIFFER FROM INPUT [Browse Flag P/F/R and Ruby Street/Sapphire Street processing]</td>
  </tr>
  <tr>
    <td>7</td>
    <td>1,1A,1B,1E </td>
    <td><span class="customPre">OUTPUT STREET NAME/CODE DIFFER FROM INPUT. ADDR NUMBER ALTERED: RANGE ASSUMED</span><br>
      <span class="customPre">OUTPUT STREET NAME/CODE DIFFER FROM INPUT. ADDR NUMBER ALTERED: HYPHEN INSERTED</span><br>
      <span class="customPre">OUTPUT STREET NAME/CODE DIFFER FROM INPUT. ADDR NUMBER ALTERED: HYPHEN DELETED</span> </td>
  </tr>
  <tr>
    <td>8</td>
    <td>1A,1B</td>
    <td>INPUT ADDRESS IS A PSEUDO-ADDRESS</td>
  </tr>
  <tr>
    <td>9</td>
    <td>1A,1B</td>
    <td><span class="customPre">INPUT ADDRESS IS PSEUDO-ADDRESS. ADDR NUMBER ALTERED: ADDRESS RANGE ASSUMED </span><br>
      <span class="customPre">INPUT ADDRESS IS PSEUDO-ADDRESS. ADDR NUMBER ALTERED: HYPHEN INSERTED</span><br>
      <span class="customPre">INPUT ADDRESS IS PSEUDO-ADDRESS. ADDR NUMBER ALTERED: HYPHEN DELETED</span></td>
  </tr>
  <tr>
    <td>A</td>
    <td>1A,1B,BL</td>
    <td>LOT HAS MORE ITEMS THAN LISTED</td>
  </tr>
  <tr>
    <td>B</td>
    <td>1A,1B</td>
    <td><span class="customPre">LOT HAS MORE ITEMS THAN LISTED. ADDR NUMBER ALTERED: ADDR RANGE ASSUMED</span><br>
      <span class="customPre">LOT HAS MORE ITEMS THAN LISTED. ADDR NUMBER ALTERED: HYPHEN INSERTED</span><br>
      <span class="customPre">LOT HAS MORE ITEMS THAN LISTED. ADDR NUMBER ALTERED: HYPHEN DELETED</span>
    </td>
  </tr>
  <tr>
    <td>C</td>
    <td>1,1A,1B,1E,2,3<sup>* </sup></td>
    <td>IN MARBLE HILL – LEGAL BORO IS MANHATTAN<br>
      <span class="customPre">IN MARBLE HILL - LEGAL BORO IS MANHATTAN. ADDR NUMBER ALTERED: RANGE ASSUMED</span><br>
      <span class="customPre">IN MARBLE HILL - LEGAL BORO IS MANHATTAN. ADDR NUMBER ALTERED: HYPHEN INSERTED</span><br>
      <span class="customPre">IN MARBLE HILL - LEGAL BORO IS MANHATTAN. ADDR NUMBER ALTERED: HYPHEN DELETED</span><br><br> ON RIKERS ISL - LEGAL BORO IS THE BRONX <br>
      <span class="customPre">ON RIKERS ISL - LEGAL BORO IS THE BRONX. ADDR NUMBER ALTERED: RANGE ASSUMED</span><br>
      <span class="customPre">ON RIKERS ISL - LEGAL BORO IS THE BRONX. ADDR NUMBER ALTERED: HYPHEN INSERTED</span><br>
      <span class="customPre">ON RIKERS ISL - LEGAL BORO IS THE BRONX. ADDR NUMBER ALTERED: HYPHEN DELETED</span>
    </td>
  </tr>
  <tr>
    <td>D</td>
    <td>1<sup>* </sup>,2,3<sup>* </sup>,AP</td>
    <td>PARTIAL STREET NAME USED TO MEET SNL REQUIREMENT </td>
  </tr>
  <tr>
    <td>E</td>
    <td>1B,1E</td>
    <td>OUTPUT ADDRESS RANGE IS SPLIT BY ELECTION DISTRICT BOUNDARY </td>
  </tr>
  <tr>
    <td>F</td>
    <td>BN</td>
    <td>THIS BIN IS TEMPORARY AND WILL BE REPLACED IN THE FUTURE</td>
  </tr>
  <tr>
    <td>G</td>
    <td>1,1A,1B,1E</td>
    <td>ADDR NUMBER ALTERED: RANGE ASSUMED. NOTE: INCONSISTENT ODD/EVEN ADDR RANGE</td>
  </tr>
  <tr>
    <td>H</td>
    <td>2,3S</td>
    <td>THESE STREETS INTERSECT ONCE-COMPASS DIRECTION IGNORED</td>
  </tr>
  <tr>
    <td>I</td>
    <td>1,1A,1B,1E</td>
    <td>INPUT IS NON-ADDRESSABLE PLACE NAME (NAP) - ADDRESS NUMBER IGNORED <br> INPUT IS NAP WITH INVALID ADDRESS NUMBER. ADDRESS NUMBER IGNORED</td>
  </tr>
  <tr>
    <td>J[not implemented]</td>
    <td>1,1A,1B,1E,2,3<sup>* </sup></td>
    <td>
      < Full street name including EAST or WEST as first word> ASSUMED [An input Bronx or Manhattan street name is missing EAST or WEST as its first word, and the intended full street name is unambiguous]</td>
  </tr>
  <tr>
    <td rowspan="2">J(cont.)</td>
    <td>2,3<sup>* </sup></td>
    <td>
      < Full street name> AND
        <other full street name> ASSUMED [Two input Bronx or Manhattan street names are missing EAST or WEST as their first words, and the intended names are unambiguous]</td>
  </tr>
  <tr>
    <td>3<sup>* </sup></td>
    <td>
      < ALL THREE STREET NAMES ASSUMED <br>
        [Three input Bronx or Manhattan street names are missing EAST or WEST as their first words, and the intended names are unambiguous]</td>
  </tr>
  <tr>
    <td>K</td>
    <td>1,1A,1B,1E,AP</td>
    <td>EMBEDDED BLANK IN ADDRESS NUMBER HAS BEEN REPLACED WITH A HYPHEN</td>
  </tr>
  <tr>
    <td>L or R</td>
    <td>3,3C</td>
    <td>
      < LEFT or RIGHT> SIDE OF SEGMENT IS IN
        < BROOKLYN or QUEENS>
          <center>or</center><br>
          < LEFT or RIGHT> SIDE OF SEGMENT IS IN
            < NASSAU or WESTCHESTER> - NO INFO RETURNED FOR THAT SIDE</td>
  </tr>
  <tr>
    <td>M</td>
    <td>1,1A,1B,1E</td>
    <td>INPUT ADDRESS NUMBER IS ZERO</td>
  </tr>
  <tr>
    <td>N</td>
    <td>1,1A,1B,1E,<br>2,3<sup>* </sup>,D<sup>* </sup></td>
    <td>STREET NAME(S) AND STREET CODE(S) BOTH SPECIFIED AS INPUT -
      < CODE(S) or NAMES> IGNORED </td>
  </tr>
  <tr>
    <td>O</td>
    <td>1,1A,1B,1E</td>
    <td>CAUTION:
      < BLOCK FACE or ADDRESS RANGE> CONTAINS OUT-OF-SEQUENCE AND/OR OPPOSITE PARITY ADDRESSES</td>
  </tr>
  <tr>
    <td>P</td>
    <td>1,1B,1E</td>
    <td>IRREGULARLY CURVED STREET SEGMENT - SPATIAL COORDINATES RETURNED AS BLANKS</td>
  </tr>
  <tr>
    <td>Q</td>
    <td>3</td>
    <td>THESE STREETS INVOLVE A ‘DOGLEG’ - SHORTEST STRETCH PROVIDED</td>
  </tr>
  <tr>
    <td>S</td>
    <td>1,1A,1B,1E,AP </td>
    <td>
      < HNI or HNS> AND DISPLAY ADDRESS NUMBER BOTH SPECIFIED AS INPUT-
        < HNI or HNS> IGNORED </td>
  </tr>
  <tr>
    <td>T</td>
    <td>2</td>
    <td>NON-INTERSECTION NAME IGNORED</td>
  </tr>
  <tr>
    <td>U</td>
    <td>3</td>
    <td>STRETCH HAS MORE ITEMS THAN LISTED</td>
  </tr>
  <tr>
    <td>V</td>
    <td>1,1B,1E</td>
    <td>
      < Normalized input address number>
        < Norm’d input street name> IS ON
          < LEFT or RIGHT> SIDE OF
            < True street name>
              [This warning is issued for vanity addresses, addressable place names, NAPs other than complexes (for which an underlying address is not available), and certain alternative addresses known as type ‘B’ addresses.]<br>
              <center> or</center><br>
              < Address number>
                < True street name> IS THE UNDERLYING ADDRESS OF
                  < Normalized input NAP>
                    [This warning is issued for NAPs other than complexes, for which an underlying address is available.]
    </td>
  </tr>
  <tr>
    <td>W</td>
    <td>1,1A,1B, 1E,AP,2,3<sup>* </sup></td>
    <td>INPUT STREET NAME HAS BEEN MODIFIED [a. MSW: Extraneous data were deleted from the end of a free-form address.<br> COW: Same as MSW above, except that, in addition, the first 14 bytes of the extraneous data on a free-form address were processed as
      if they were in the UNIT input field (if there was no other data in the Unit input field).] [b. Neighborhood name was deleted from Duplicate Address Pseudo-Street Name (DAPS) for Functions 2, 3<sup>* </sup>.]</td>
  </tr>
  <tr>
    <td>X</td>
    <td>1E,1B</td>
    <td>THERE ARE NO POLITICAL DISTRICTS ASSIGNED TO THIS LOCATION</td>
  </tr>
  <tr>
    <td>Y</td>
    <td>1/1E Ext 1B COW Only</td>
    <td>ZIP NOT IN CITY NAME TABLE. GENERIC CITY NAME RETURNED. NOTIFY DCP/GSS </td>
  </tr>
  <tr>
    <td>Z</td>
    <td>1A,1B,BL,BN </td>
    <td>A BILLING BBL HAS NOT YET BEEN ASSIGNED TO THIS CONDOMINIUM</td>
  </tr>
  <tr>
    <td>$</td>
    <td>1<sup>* </sup> COW Only</td>
    <td>UNIT IDENTIFIER HAS BEEN TRUNCATED<br> [This warning is generated only when the Unit Input field is used.]</td>
  </tr>
  <tr>
    <td>* </td>
    <td>1A,1B BL,BN COW Only</td>
    <td>TPAD Warning will appear in message field. <br> [See list of TPAD Warning messages and Reason Code Qualifiers /TPAD Conflict Flag after this table.]</td>
  </tr>
  <tr>
    <td colspan="4"><b><center>[GRCs greater than 01 are rejects or errors]</center></b></td>
  </tr>
  <tr>
    <td>02</td>
    <td> </td>
    <td>2</td>
    <td>STREETS INTERSECT TWICE-
      < number of feet> FT BETWEEN INTERSECTIONS. COMPASS DIRECTION REQ'D</td>
  </tr>
  <tr>
    <td rowspan="3">03</td>
    <td>BLANK</td>
    <td>2 MSW Only</td>
    <td>STREETS INTERSECT MORE THAN TWICE-CAN ONLY BE PROCESSED BY COW FUNCTION CALL <br>[Reason Code value is blank]</td>
  </tr>
  <tr>
    <td>A </td>
    <td>2 COW Only</td>
    <td>STREETS INTERSECT MORE THAN TWICE–USE FUNCTION 2W TO FIND RELATED NODES </td>
  </tr>
  <tr>
    <td>B </td>
    <td>2 COW Only</td>
    <td>STREETS INTERSECT MORE THAN TWICE – USE NODE AS INPUT </td>
  </tr>
  <tr>
    <td>04</td>
    <td></td>
    <td>1A,BL <br>MSW Only</td>
    <td>1A/BL VERSION SWITCH INVALID - MUST BE S. ONLY STANDARD IS SUPPORTED</td>
  </tr>
  <tr>
    <td>05</td>
    <td></td>
    <td>3S</td>
    <td>FOR FUNCTION 3S, ONLY FIRST BOROUGH CODE IS PERMITTED</td>
  </tr>
  <tr>
    <td>07</td>
    <td></td>
    <td>1,1A,1B,1E</td>
    <td>FOR A NAME OF A COMPLEX, 5-DIGIT STREET CODE INPUT IS NOT PERMITTED</td>
  </tr>
  <tr>
    <td>08</td>
    <td></td>
    <td>All but B<sup>* </sup></td>
    <td>INVALID STREET NAME NORMALIZATION FORMAT FLAG - MUST BE BLANK, C OR S</td>
  </tr>
  <tr>
    <td>09</td>
    <td></td>
    <td>3C</td>
    <td>
      < Compass direction> SIDE OF STREET SEGMENT IS NOT IN
        < borough name>
    </td>
  </tr>
  <tr>
    <td>10</td>
    <td></td>
    <td>All but B<sup>* </sup></td>
    <td>INVALID SNL VALUE - MUST BE BETWEEN 4 AND 32 INCLUSIVE</td>
  </tr>
  <tr>
    <td>11</td>
    <td>0</td>
    <td>1<sup>* </sup>,2,3<sup>* </sup>, AP</td>
    <td>
      <Street name> NOT RECOGNIZED. THERE ARE NO SIMILAR NAMES</td>
  </tr>
  <tr>
    <td>12</td>
    <td></td>
    <td>2</td>
    <td>INTERSECTION NAME NOT FOUND</td>
  </tr>
  <tr>
    <td rowspan="15" class="topVerticalTD">13</td>
    <td>1</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NBR
      < value> CONTAINS AN INVALID CHARACTER
        < character> IN POSITION
          < position number>
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NBR
      < value> HAS MORE THAN 3 DIGITS AFTER DASH</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NBR
      < value> HAS TOO MANY DASHES</td>
  </tr>
  <tr>
    <td>4</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NBR
      < value> HAS NO DIGITS AFTER THE DASH</td>
  </tr>
  <tr>
    <td>6</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NBR
      <value> HAS TOO MANY DIGITS (MORE THAN 5)</td>
  </tr>
  <tr>
    <td>7</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NBR
      < value> IS NOT COMPLETE AS ENTERED</td>
  </tr>
  <tr>
    <td>8</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NBR
      < value> PORTION AFTER HYPHEN EXCEEDS ALLOWABLE MAXIMUM</td>
  </tr>
  <tr>
    <td>9</td>
    <td>1,1A,1B,1E,AP,D<sup>* </sup></td>
    <td>ADDRESS NBR
      < hse nr value> INVALID INTERNAL FORMAT</td>
  </tr>
  <tr>
    <td>A</td>
    <td>1,1A,1B,1E,AP,D<sup>* </sup></td>
    <td>ADDRESS NBR
      < value> HAS AN UNKNOWN OR INVALID SUFFIX/ENDING</td>
  </tr>
  <tr>
    <td>B</td>
    <td>1,1A,1B,1E,AP</td>
    <td>INPUT CONTAINS NO ADDRESS NUMBER</td>
  </tr>
  <tr>
    <td>C</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NBR
      < value> HAS AN EMBEDDED BLANK</td>
  </tr>
  <tr>
    <td>D</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NBR HAS INVALID FORMAT FOR EDGEWATER PARK</td>
  </tr>
  <tr>
    <td>E</td>
    <td>1,1A,1B,1E,AP</td>
    <td>THIS STREET HAS HYPHENATED ADDRESS NBRS ONLY. TRY
      < address nbr with hyphen ins erted to left of last two digits> OR
        < address nbr with hyphen inserted to left of last three digits></td>
  </tr>
  <tr>
    <td>F</td>
    <td>1,1A,1B,1E,AP</td>
    <td>THIS STREET HAS UNHYPHENATED ADDRESS NBRS ONLY. TRY
      < digits of address number to left of dash only> OR
        < digits to left and right of dash concatenated without the dash>
    </td>
  </tr>
  <tr>
    <td>G</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NUMBER HAS INVALID HYPHENATION FOR THIS STREET [Input address number is an unhyphenated 2-digit number, but the input street has hyphenated address numbers only.]</td>
  </tr>
  <tr>
    <td rowspan="2">14</td>
    <td>BLANK</td>
    <td>3S</td>
    <td>INPUT DOES NOT DEFINE A STREET STRETCH, SINCE INPUT INTERSECTIONS ARE IDENTICAL</td>
  </tr>
  <tr>
    <td>A</td>
    <td>3S</td>
    <td>INPUT DOES NOT DEFINE A STREET STRETCH <br>[e.g. On-street has a different 5-digit street code than the underlying street]</td>
  </tr>
  <tr>
    <td>15</td>
    <td></td>
    <td>All but B<sup>* </sup></td>
    <td>STREET NAME CANNOT BE NORMALIZED</td>
  </tr>
  <tr>
    <td>16</td>
    <td></td>
    <td>1<sup>* </sup>,AP</td>
    <td>STREET NAME IS MISSING</td>
  </tr>
  <tr>
    <td>17</td>
    <td></td>
    <td>All</td>
    <td>BOROUGH CODE IS MISSING</td>
  </tr>
  <tr>
    <td>18</td>
    <td></td>
    <td>BL</td>
    <td>TAX BLOCK NOT NUMERIC</td>
  </tr>
  <tr>
    <td>19</td>
    <td></td>
    <td>BL</td>
    <td>TAX LOT NOT NUMERIC</td>
  </tr>
  <tr>
    <td>20</td>
    <td></td>
    <td>BN</td>
    <td>BUILDING IDENTIFICATION NUMBER (BIN) IS MISSING</td>
  </tr>
  <tr>
    <td>21</td>
    <td></td>
    <td>BN</td>
    <td>BUILDING IDENTIFICATION NUMBER (BIN) NOT FOUND</td>
  </tr>
  <tr>
    <td>22</td>
    <td></td>
    <td>BN</td>
    <td>INVALID BIN FORMAT: NON-NUMERIC, FIRST DIGIT NOT 1-5 OR REST OF DIGITS ALL ZERO</td>
  </tr>
  <tr>
    <td>23</td>
    <td></td>
    <td>BN</td>
    <td>TEMPORARY DEPARTMENT OF BUILDINGS BIN: EXISTS ONLY IN D.O.B FILES</td>
  </tr>
  <tr>
    <td>24</td>
    <td></td>
    <td>3<sup>* </sup></td>
    <td>ON STREET IS MISSING</td>
  </tr>
  <tr>
    <td>25</td>
    <td></td>
    <td>2,3<sup>* </sup></td>
    <td>CROSS STREET 1 IS MISSING</td>
  </tr>
  <tr>
    <td>26</td>
    <td></td>
    <td>2,3<sup>* </sup></td>
    <td>CROSS STREET 2 IS MISSING</td>
  </tr>
  <tr>
    <td>27</td>
    <td></td>
    <td>All</td>
    <td>INVALID WORK AREA FORMAT INDICATOR - MUST BE C OR BLANK</td>
  </tr>
  <tr>
    <td>28</td>
    <td></td>
    <td>1,1A,1B,1E,AP</td>
    <td>A PARTIAL STREET NAME MAY NOT BE USED IN A FREE-FORM ADDRESS</td>
  </tr>
  <tr>
    <td>29</td>
    <td></td>
    <td>1,1A,1B,1E,AP,3<sup>* </sup></td>
    <td>INTERSECTION
      < INTERSECTION NAME> MAY NOT SERVE AS ON-STREET</td>
  </tr>
  <tr>
    <td>30</td>
    <td></td>
    <td>2</td>
    <td>
      < STREET NAME> IS NOT PART OF
        < INTERSECTION NAME>
    </td>
  </tr>
  <tr>
    <td>31</td>
    <td>1</td>
    <td>1A,BL <br>COW Only</td>
    <td>MODE SWITCH OF X NOT VALID WITH LONG-WORK-AREA-2 SET TO L</td>
  </tr>
  <tr>
    <td>32</td>
    <td></td>
    <td>2,2W <br>COW Only</td>
    <td>INVALID NODE – NON-NUMERIC OR EMBEDDED BLANKS FOUND</td>
  </tr>
  <tr>
    <td>33</td>
    <td></td>
    <td>2,2W <br>COW Only</td>
    <td>ACCESS BY NODE FAILED – NODE NOT FOUND</td>
  </tr>
  <tr>
    <td>38</td>
    <td></td>
    <td>3S</td>
    <td>
      < Compass direction value> IS AN INVALID COMPASS DIRECTION VALUE FOR
        < FIRST or SECOND> INPUT INTERSECTION</td>
  </tr>
  <tr>
    <td>39</td>
    <td></td>
    <td>2,3C</td>
    <td>INVALID COMPASS DIRECTION VALUE - MUST BE N, S, E OR W</td>
  </tr>
  <tr>
    <td>40</td>
    <td></td>
    <td>2,3C</td>
    <td>COMPASS DIRECTION VALUE IS INVALID FOR THIS INPUT LOCATION</td>
  </tr>
  <tr>
    <td>41</td>
    <td></td>
    <td>1,1A,1B,1E,AP</td>
    <td>THIS STREET HAS NO ADDRESSES</td>
  </tr>
  <tr>
    <td rowspan="3">42</td>
    <td>blank</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NUMBER OUT OF RANGE</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NUMBER OUT OF RANGE. CORRECT DIGITS OR INSERT HYPHEN AS<br>
      < AB-CD> OR
        < A-BCD>
          [where input was of the form ABCD]</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1,1A,1B,1E,AP</td>
    <td>ADDRESS NUMBER OUT OF RANGE. CORRECT DIGITS OR TRY<br>
      < AB> OR
        < ABCD> [where input was of the form AB-CD]</td>
  </tr>
  <tr>
    <td>44</td>
    <td></td>
    <td>3C</td>
    <td>INPUT DOES NOT DEFINE A BLOCK FACE</td>
  </tr>
  <tr>
    <td>45</td>
    <td></td>
    <td>3</td>
    <td>INPUT DOES NOT DEFINE A STREET SEGMENT</td>
  </tr>
  <tr>
    <td>46</td>
    <td></td>
    <td>3,3C</td>
    <td>STREET COMBINATION NOT UNIQUE <br> [The input is ambiguous, i.e., it describes more than one valid street segment.]</td>
  </tr>
  <tr>
    <td>47</td>
    <td></td>
    <td>1,1A,1B,1E <br>COW Only</td>
    <td>INVALID HNL VALUE - MUST BE BETWEEN 12 AND 16 INCLUSIVE</td>
  </tr>
  <tr>
    <td>48</td>
    <td></td>
    <td>1,1A,1B,1E <br>COW Only</td>
    <td>INVALID HOUSE NUMBER JUSTIFICATION VALUE - MUST BE L, R OR BLANK</td>
  </tr>
  <tr>
    <td>49</td>
    <td></td>
    <td>1,1A,1B,1E <br>COW Only</td>
    <td>ADDRESS NUMBER CANNOT BE NORMALIZED WITHIN REQUESTED HNL</td>
  </tr>
  <tr>
    <td>50</td>
    <td>1 thru 4</td>
    <td>1,1A,1B,1E,2,3<sup>* </sup>,AP</td>
    <td>
      < Input street name> IS AN INVALID STREET NAME FOR THIS LOCATION <br>[The Reason Code indicates the number of valid street names returned in the Similar Names List.]</td>
  </tr>
  <tr>
    <td>55</td>
    <td></td>
    <td>2,3 <sup>* </sup></td>
    <td>NON-ADDRESSABLE PLACE NAME PROCESSING IS NOT AVAILABLE FOR THIS FUNCTION</td>
  </tr>
  <tr>
    <td>56</td>
    <td></td>
    <td>1E</td>
    <td>ADDRESS IS SPLIT AMONG MULTIPLE ELECTION DISTRICTS. ADDRESS NBR SUFFIX REQUIRED <br> [The input address is associated with more than one Election District (ED). Function 1E requires an address number suffix to be included with this address to identify
      a portion of the building specific to one ED.]
    </td>
  </tr>
  <tr>
    <td>57</td>
    <td></td>
    <td>3S</td>
    <td><span class="customPre">INPUT INCLUDES ROADBED NAME, BUT ROADBED REQUEST SWITCH IS OFF</span></td>
  </tr>
  <tr>
    <td>58</td>
    <td></td>
    <td>1,1A,1B,1E,AP</td>
    <td>NON-ADDRESSABLE PLACE NAME, BRIDGE, TUNNEL OR MISC STRUCTURE NOT FOUND</td>
  </tr>
  <tr>
    <td>59</td>
    <td></td>
    <td>1<sup>* </sup>,2,3<sup>* </sup>, AP</td>
    <td>STREET NAME CANNOT BE NORMALIZED WITHIN REQUESTED SNL</td>
  </tr>
  <tr>
    <td>61</td>
    <td></td>
    <td>3S</td>
    <td>STREET STRETCH NOT FOUND</td>
  </tr>
  <tr>
    <td>62</td>
    <td></td>
    <td>2,3S</td>
    <td>
      < Street name> &
        < other street name> DO NOT INTERSECT</td>
  </tr>
  <tr>
    <td>63</td>
    <td>2 thru 4</td>
    <td>2</td>
    <td>INPUT STREET NAMES DO NOT FORM A UNIQUE INTERSECTION [Issued when there is more than one possibility for an assumed front- truncated street name (where EAST or WEST is added at the beginning of the name). Reason Code indicates the number of possible
      names. The possible names are returned in the List of Street Names in WA1.]</span</td>
  </tr>
  <tr>
    <td>64</td>
    <td></td>
    <td>1,1A,1B,1E,2,3<sup>* </sup>,AP,D<sup>* </sup></td>
    <td>STREET CODE NOT FOUND</span</td>
  </tr>
  <tr>
    <td>65</td>
    <td></td>
    <td>All</td>
    <td>INVALID ROADBED REQUEST SWITCH. MUST BE R OR BLANK</td>
  </tr>
  <tr>
    <td>66</td>
    <td></td>
    <td>3S</td>
    <td>
      < Street name> &
        < other street name> INTERSECT MORE THAN TWICE-CANNOT BE PROCESSED</td>
  </tr>
  <tr>
    <td>67</td>
    <td>A-Z</td>
    <td>All</td>
    <td>ERROR ACCESSING GEOSUPPORT FILE:
      <file name>. NOTIFY SYSTEM SUPPORT [This can be an installation error or a system error. Notify System Support.]</td>
  </tr>
  <tr>
    <td>68</td>
    <td></td>
    <td>3S</td>
    <td>
      < Street name> &
        < other street name> INTERSECT TWICE-COMPASS DIRECTION REQ’D</td>
  </tr>
  <tr>
    <td rowspan="4">69</td>
    <td>A</td>
    <td>3,3C <br>COW Only </td>
    <td>INVALID AUXSEG REQUEST SWITCH. MUST BE Y, N OR BLANK</td>
  </tr>
  <tr>
    <td>B</td>
    <td>1A,1B, BL,BN <br>COW Only</td>
    <td>INVALID TPAD REQUEST SWITCH. MUST BE Y, N OR BLANK</td>
  </tr>
  <tr>
    <td>C</td>
    <td>1,1E,1A,3,3C,AP BL,BN <br> COW Only</td>
    <td>INVALID MODE SWITCH VALUE. MUST BE X OR BLANK</td>
  </tr>
  <tr>
    <td>D</td>
    <td>All COW Only</td>
    <td>INVALID WTO SWITCH VALUE. MUST BE Y, N, OR BLANK</td>
  </tr>
  <tr>
    <td rowspan="3">70</td>
    <td>A</td>
    <td>All but 3,3C <br>COW Only </td>
    <td>AUXSEG REQUEST SWITCH NOT VALID FOR THIS FUNCTION</td>
  </tr>
  <tr>
    <td>B</td>
    <td>All but 1A,1B,BL,BN <br>COW Only</td>
    <td>TPAD REQUEST SWITCH NOT VALID FOR THIS FUNCTION</td>
  </tr>
  <tr>
    <td>C</td>
    <td>All but 1,1E,1A,3,3C,AP,BL,BN <br> COW Only</td>
    <td>MODE SWITCH OF X (EXTENDED) NOT VALID FOR THIS FUNCTION</td>
  </tr>
  <tr>
    <td>71</td>
    <td></td>
    <td>1,1A,1B,1E.AP</td>
    <td>INPUT ZIP CODE IS NOT A NEW YORK CITY ZIP CODE</td>
  </tr>
  <tr>
    <td>72</td>
    <td></td>
    <td>1,1A,1B,1E,AP</td>
    <td>INPUT ZIP CODE IS NOT ALL NUMERIC</td>
  </tr>
  <tr>
    <td>73</td>
    <td></td>
    <td>1A,BL <br>MSW Only</td>
    <td>LEGACY VERSION OF FUNCTIONS 1A AND BL IS DISCONTINUED. SEE TECH BULLETIN 05-1</td>
  </tr>
  <tr>
    <td>74</td>
    <td></td>
    <td>2,3<sup>* </sup></td>
    <td>ADDRESSABLE PLACE NAME PROCESSING IS NOT AVAILABLE FOR THIS FUNCTION</td>
  </tr>
  <tr>
    <td>75</td>
    <td></td>
    <td>1,1A,1B,1E</td>
    <td>DUPLICATE ADDRESS-USE
      < pseudo-streetname1> OR
        < pseudo-streetname2>
    </td>
  </tr>
  <tr>
    <td>76</td>
    <td></td>
    <td>All but 1,1B,1E,3S</td>
    <td>ROADBED REQUEST SWITCH NOT IMPLEMENTED FOR THIS FUNCTION</td>
  </tr>
  <tr>
    <td>77</td>
    <td></td>
    <td>BL</td>
    <td>TAX LOT NOT FOUND</td>
  </tr>
  <tr>
    <td>78</td>
    <td></td>
    <td>All<br> COW Only</td>
    <td>INVALID BROWSE FLAG VALUE. MUST BE P, F, R, OR BLANK</td>
  </tr>
  <tr>
    <td>79</td>
    <td></td>
    <td>3S,BL,BN,D<sup>* </sup> <br>COW Only</td>
    <td>BROWSE FLAG NOT VALID FOR THIS REQUEST</td>
  </tr>
  <tr>
    <td>57</td>
    <td></td>
    <td>3S</td>
    <td><span class="customPre">INPUT INCLUDES ROADBED NAME, BUT ROADBED REQUEST SWITCH IS OFF</span</td>
    </tr>
    <tr>
      <td>80</td>
      <td></td>
      <td>1,1A,1B,1E,2,3<sup>* </sup></td>
      <td>BUSINESS IMPROVEMENT DISTRICT (BID) IS NOT VALID AS INPUT FOR THIS FUNCTION</td>
    </tr>
    <tr>
      <td rowspan="2">88</td>
      <td>Blank</td>
      <td>All</td>
      <td>GEOSUPPORT ERROR. EMAIL <a href="mailto:email@GSS_FEEDBACK@PLANNING.NYC.GOV">GSS_FEEDBACK@PLANNING.NYC.GOV </a> AND REPORT 88-[An internal Geosupport problem, not a user error.]</td>
    </tr>
    <tr>
      <td>1-9,A-Z</td>
      <td>All</td>
      <td>GEOSUPPORT ERROR. EMAIL <a href="mailto:email@GSS_FEEDBACK@PLANNING.NYC.GOV">GSS_FEEDBACK@PLANNING.NYC.GOV </a> AND REPORT 88- < value > ERROR <br>[where <value> is the reason code.]<br> [An internal Geosupport problem, not a user error.]</td>
    </tr>
    <tr>
      <td rowspan="2">89</td>
      <td rowspan="2"></td>
      <td>2,3C,3S,BN</td>
      <td rowspan="2">LONG WORK-AREA-2 OPTION IS INVALID FOR THIS FUNCTION</td>
    </tr>
    <tr>
        <td>1,1B,1E,3 <br> COW Only </td>
    </tr>
    <tr>
      <td>90</td>
      <td></td>
      <td>1,1A,1E,3,BL</td>
      <td>LONG WORK-AREA-2 FLAG MUST BE L OR BLANK</td>
    </tr>
    <tr>
      <td>96</td>
      <td></td>
      <td>All</td>
      <td>FUNCTIONALITY UNDER CONSTRUCTION</td>
    </tr>
    <tr>
      <td>97</td>
      <td></td>
      <td>BB,BF</td>
      <td>INPUT IS BEYOND THE LAST STREET NAME IN THE BOROUGH OF <borough name></td>
    </tr>
    <tr>
      <td>98</td>
      <td></td>
      <td>All</td>
      <td>NO INPUT DATA RECEIVED</td>
    </tr>
    <tr>
      <td>99</td>
      <td></td>
      <td>All</td>
      <td>INVALID BOROUGH CODE. MUST BE 1, 2, 3, 4 OR 5</td>
    </tr>
    <tr>
      <td rowspan="2">EE</td>
      <td >1</td>
      <td>1<sup>* </sup>,2,3<sup>* </sup>,AP</td>
      <td rowspan"2"><span class="customPre"> < Street name > NOT RECOGNIZED. IS IT < similar street name >? <br> [Issued when there is precisely one similar name.] </span></td>
  </tr>
  <tr>
    <td>2 thru 9, A</td>
    <td>1<sup>* </sup>,2,3<sup>* </sup>,AP</td>
    <td><span class="customPre">< Street name > NOT RECOGNIZED. THERE ARE < number > SIMILAR NAMES [Issued when there is more than one similar name.  Reason Code indicates number of similar names. Reason Code ‘A’ signifies 10 similar names.  The similar names are returned in WA1.]</span></td>
  </tr>
  <tr>
    <td rowspan="2"> ?? </td>
    <td>
      <Blank/td>
        <td>N/A</td>
        <td>INVALID FUNCTION CODE</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1B,AP <br> MSW Only</td>
    <td>INVALID FUNCTION CODE- AVAILABLE IN COW FORMAT ONLY</td>
  </tr>
</table>

  <br>


## <span id="appendix04.1"> TPAD WARNING MESSAGES and TPAD Conflict Flag  / REASON CODE QUALIFIERS in ( ) </span>

"TPAD BBL USED, NO EXISTING PAD BBL"; (2)

"TPAD BBL USED, PAD PSEUDO-ADDRESS ON DIFFERENT BBL THAN TPAD NB BIN"; (3)

"TPAD BBL USED, EXISTING PAD BIN OF INPUT ADDR ON DIFF BBL THAN TPAD NB BIN"; (4)

"TPAD BBL USED, PAD BIN OF INPUT ADDR W/DM-5 ON DIFF BBL THAN TPAD NB BIN"; (6)

"TPAD BBL USED, PAD BIN OF INPUT ADDR W/DM-6 ON DIFF BBL THAN TPAD NB BIN"; (7)

"PAD BBL USED, TPAD NB BIN WITH NB-0 ON DIFFERENT BBL THAN PAD BIN"; (8)

"PAD BBL USED, TPAD NB BIN WITH NB-1 ON DIFFERENT BBL THAN PAD BIN"; (9)

"PAD BBL USED, TPAD NB BIN WITH NB-2 ON DIFFERENT BBL THAN PAD BIN"; (A)

"PAD BBL USED, TPAD NB BIN WITH NB-3 ON DIFFERENT BBL THAN PAD BIN"; (B)

"TPAD DATA FOUND, TPAD ADDRESS OVERLAPS PAD ADDRESS"; (C)

"ADDRESS FOUND IN TPAD, NOT FOUND IN PAD"; (D)

"BIN FOUND IN TPAD, NOT FOUND IN PAD"; (E)
