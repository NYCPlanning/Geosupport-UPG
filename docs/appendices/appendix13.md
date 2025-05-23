<h2 class="pdfAppendix"><center>APPENDIX 13:  CHARACTER-ONLY WORK AREA LAYOUTS (COW)</center></h2>
<h6><center>(as of Geosupport System Software Version 20.1 - <span class="smallText">Layouts unchanged since</span> V19.2)</center></h6>


This appendix contains layouts of all of the COW work areas used with the Geosupport System’s API.  These layouts are current as of the Geosupport software version indicated above.  The layouts are in the Character-Only Work Area (COW) format.<sup><a href="#section13.18" id="section13.18-18">18</a></sup>

Beginning with Geosupport Version 19.3, all new COW fields and functions are supported  only in non-mainframe environments, e.g. Desktop Edition, GeoX, .net, and Linux.  The new fields and functions will not appear in these layouts.

Some Geosupport functions can only be called using one work area, Work Area 1 (WA1). Other functions can be called using two work areas, WA1 and Work Area 2 (WA2).  WA1 contains both input fields (fields used to pass data from the application to Geosupport) and output fields (fields used to pass data from Geosupport to the application).  WA1 is organized so that all the input fields occur first, followed by all the output fields.  WA2 contains output fields only.

All functions use the same WA1 layout, but the set of WA1 fields that are used depends on the function.  In the layout of WA1 in this appendix, the column labeled ‘Functions’ indicates which functions use each field.

The functions that can be called using two work areas use various WA2 layouts of various lengths.  In some cases, several functions share a single WA2 layout.  For functions 1A and BL, the user has a choice of two WA2 layouts, a ‘regular’ WA2 and a ‘long’ WA2.

The majority of the COW fields are identical to the MSW (Mainframe-Specific Work Area) fields.

[Appendix 3](../appendix03/) consists of a data item dictionary describing the fields that occur in the work areas.

[Appendix 12](../appendix12/) describes the differences between the COWs and MSWs.
Note that as of January 1, 2020, MSWs are no longer supported.

The Geosupport Character-Only work areas (COWs) contain no packed decimal or binary fields; all fields are character.  The work areas are divided into logical groups. For example work area 1 is divided into three parts; namely,

* Input information from user
* Input flags set by user
* Output information supplied by Geosupport

For precise information on work areas, refer to the appropriate section below.

<b>NOTE:</b>  The notation <i>“Not Implemented”</i> in the comments column of the work area layout means the field is blank, its contents are not reliable or the functionality has not yet been implemented.  Only items that we intend to implement and/or correct at a later date are listed in this fashion.  


The following is a list of all of the Geosupport COW work areas, indicating the length of each in bytes.  Functions that are listed together share a single Work Area 2 layout.  


<p>____________________________</p>
<a href="#section13.18-18"><span id="section13.18"><sup>18</sup></span></a>The mainframe version of Geosupport supports the Character-Only Work Area (COW) format.  Note that as of January 1, 2020 the Mainframe-Specific Work Area (MSW (a.k.a. MFS)) format is no longer supported.  The layout of the MSWs is in [Appendix 2](../appendix02/).  

The following is a list of all of the Geosupport COW work areas, indicating the length of each in bytes.  Functions that are listed together share a single Work Area 2 layout.

<table class="borderlessTable rightTableAlignment">
  <tr>
    <th><u>Character-Only Work Area (COW)</u></th>
    <th><u>Length</u></th>
  </tr>
  <tr>
    <td>WA1, All Functions</td>
    <td>1,200</td>
  </tr>
  <tr>
    <td>WA2, Functions 1, 1E Regular</td>
    <td>300</td>
  </tr>
  <tr>
    <td>WA2, Functions 1, 1E Extended</td>
    <td>1,500</td>
  </tr>
  <tr>
    <td>WA2, Functions 1A, BL, BN Regular</td>
    <td>1,363</td>
  </tr>
  <tr>
    <td>Long WA2, Functions 1A, BL</td>
    <td>17,750</td>
  </tr>
  <tr>
    <td>TPAD Long WA2, Functions 1A, BL</td>
    <td>17,750</td>
  </tr>
  <tr>
    <td>WA2, Functions 1A, BL, BN Extended</td>
    <td>2,800</td>
  </tr>
  <tr>
    <td>WA2, Function 1B</td>
    <td>4,300</td>
  </tr>
  <tr>
    <td>WA2, Function AP Regular</td>
    <td>1,363</td>
  </tr>
  <tr>
    <td>WA2, Function AP Extended</td>
    <td>2,800</td>
  </tr>
  <tr>
    <td>WA2, Function 2</td>
    <td>200</td>
  </tr>
  <tr>
    <td>WA2, Function 2W (Wide)</td>
    <td>4000</td>
  </tr>
  <tr>
    <td>WA2, Function 3 Regular</td>
    <td>450</td>
  </tr>
  <tr>
    <td>WA2, Function 3 with Auxiliary Segment</td>
    <td>950</td>
  </tr>
  <tr>
    <td>WA2, Function 3 Extended</td>
    <td>1,000</td>
  </tr>
  <tr>
    <td>WA2, Function 3 Extended with Auxiliary Segment</td>
    <td>1,500</td>
  </tr>
  <tr>
    <td>WA2, Function 3C Regular</td>
    <td>300</td>
  </tr>
  <tr>
    <td>WA2, Function 3C with Auxiliary Segment</td>
    <td>800</td>
  </tr>
  <tr>
    <td>WA2, Function 3C Extended</td>
    <td>850</td>
  </tr>
  <tr>
    <td>WA2, Function 3C Extended with Auxiliary Segment</td>
    <td>1,350</td>
  </tr>
  <tr>
    <td>WA2, Function 3S</td>
    <td>19,274</td>
  </tr>
</table>  


<b>Notes:</b>
<ol>
<li>When a group of fields are listed together in a layout, the name of the group appears in UPPER CASE and is followed by a colon (:).  The fields within the group appear in mixed case and are indented under the group name.  The ‘FROM’ and ‘TO’ POSITIONS are listed for the group and for the individual fields within the group.  

<u>Example:</u>  
<table>
  <tr>
    <th>(Field Name)</th>
    <th>(Size)</th>
    <th>(From)</th>
    <th>(To)</th>
    <th>(Function)</th>
  </tr>
  <tr>
    <td>BOROUGH BLOCK LOT (BBL):</td>
    <td>10</td>
    <td>186</td>
    <td>195</td>
    <td>BL</td>
  </tr>
  <tr>
    <td class="indentRows"> Borough Code</td>
    <td>1</td>
    <td>186</td>
    <td>186</td>
    <td>BL</td>
  </tr>
  <tr>
    <td class="indentRows">Tax Block</td>
    <td>5</td>
    <td>187</td>
    <td>191</td>
    <td>BL</td>
  </tr>
  <tr>
    <td class="indentRows">Tax Lot</td>
    <td>4</td>
    <td>192</td>
    <td>195</td>
    <td>BL</td>
  </tr>
</table>  
</li>
<li>If there is a multi-field entry that may be repeated a variable number of times in the work area, then the <u>relative positions</u> of the fields within the entry are published and those relative positions appear in parentheses ‘( )’.  

<u>Example:</u>
<table>
  <tr>
    <th>(Field Name)</th>
    <th>(Size)</th>
    <th>(From)</th>
    <th>(To)</th>
    <th>(Comment)</th>
  </tr>
  <tr>
    <td>LIST OF GEOGRAPHIC IDENTIFIERS: Variable length list of up to 21 entries; each is 53 bytes long, structured as follows:</td>
    <td>1113</td>
    <td>251</td>
    <td>1363</td>
    <td>Maximum of 21 entries, each 53 bytes long: 21x53 = 1,113</td>
  </tr>
  <tr>
    <td class="indentRows">Low House Number</td>
    <td>(16)</td>
    <td>(1)</td>
    <td>(16)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">High House Number</td>
    <td>(16)</td>
    <td>(17)</td>
    <td>32)</td>
    <td></td>
  </tr>
  <tr>
    <td class="centerRow">✶ <br> ✶ <br> ✶</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">TPAD BIN Status</td>
    <td>(1)</td>
    <td>(50)</td>
    <td>(50)</td>
    <td>TPAD Request</td>
  </tr>
  <tr>
    <td class="indentRows">Filler</td>
    <td>(3)</td>
    <td>(51)</td>
    <td>(53)</td>
    <td></td>
  </tr>
  <tr>
    <td>* End of 53-byte entry * </td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
</li>
</ol>  


## <span id="appendix13.1">Character-Only Work Area 1 (COW) – All Functions  </span>

<table>
    <tr>
        <th rowspan="2">INPUT FIELDS</th>
        <th rowspan="2">SIZE</th>
        <th colspan="2">POSITION</th>
        <th rowspan="2">FUNCTIONS<sup><a href="#section13.19" id="section13.19-19">19</a></sup></th>
    </tr>
    <tr>
        <th>FROM</th>
        <th>TO</th>
    </tr>
    <tr>
        <td>Geosupport Function Code</td>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        <td>All</td>
    </tr>
    <tr>
        <td>House Number - Display Format</td>
        <td>16</td>
        <td>3</td>
        <td>18</td>
        <td>1, 1A, 1B, 1E, AP</td>
    </tr>
    <tr>
        <td>House Number - Sort Format</td>
        <td>11</td>
        <td>19</td>
        <td>29</td>
        <td>1, 1A, 1B, 1E, AP, D*</td>
    </tr>
    <tr>
        <td>Low House Number - Display Format<sup><a href="#section13.20" id="section13.20-20">20</a></sup>
        </td>
        <td>16</td>
        <td>30</td>
        <td>45</td>
        <td>Internal Use</td>
    </tr>
    <tr>
        <td>Low House Number – Sort Format</td>
        <td>11</td>
        <td>46</td>
        <td>56</td>
        <td>D*, Internal Use</td>
    </tr>
    <tr>
        <td>B10SC-1 (includes Borough Code 1,  B5SC-1 and B7SC-1):</td>
        <td>11</td>
        <td>57</td>
        <td>67</td>
        <td>See next 2 entries</td>
    </tr>
    <tr>
        <td class="indentRows">Borough Code-1</td>
        <td>1</td>
        <td>57</td>
        <td>57</td>
        <td>Required for All Functions but BL, BN. Ignored if Fn 2 has Node Number input</td>
    </tr>
    <tr>
        <td class="indentRows">10SC<sup><a href="#section13.21" id="section13.21-21">21</a></sup>-1</td>
        <td>10</td>
        <td>58</td>
        <td>67</td>
        <td>All but 1N, B*</td>
    </tr>
    <tr>
        <td>Street Name-1</td>
        <td>32</td>
        <td>68</td>
        <td>99</td>
        <td>All but BL, BN, D*</td>
    </tr>
    <tr>
        <td class="indentRows">B10SC-2 (includes Borough Code 2, B5SC-2 and B7SC-2):</td>
        <td>11</td>
        <td>100</td>
        <td>110</td>
        <td>2, 3*, D*</td>
    </tr>
    <tr>
        <td class="indentRows">Borough Code<sup><a href="#section13.22" id="section13.22-22">22</a></sup>-2</td>
        <td>1</td>
        <td>100</td>
        <td>100</td>
        <td>2, 3*, D*</td>
    </tr>
    <tr>
        <td>10SC-2</td>
        <td>10</td>
        <td>101</td>
        <td>110</td>
        <td>2, 3*, D*</td>
    </tr>
    <tr>
        <td>Street Name-2</td>
        <td>32</td>
        <td>111</td>
        <td>142</td>
        <td>2, 3*</td>
    </tr>
    <tr>
        <td>B10SC-3 (includes Borough Code 3, B5SC-3 and B7SC-3):</td>
        <td>11</td>
        <td>143</td>
        <td>153</td>
        <td>3*, D*</td>
    </tr>
    <tr>
        <td class="indentRows">Borough Code-3</td>
        <td>1</td>
        <td>143</td>
        <td>143</td>
        <td>3*, D*</td>
    </tr>
    <tr>
        <td class="indentRows">10SC-3</td>
        <td>10</td>
        <td>144</td>
        <td>153</td>
        <td>3*, D*</td>
    </tr>
    <tr>
        <td>Street Name-3</td>
        <td>32</td>
        <td>154</td>
        <td>185</td>
        <td>3*</td>
    </tr>
    <tr>
        <td>BOROUGH BLOCK LOT (BBL):</td>
        <td>10</td>
        <td>186</td>
        <td>195</td>
        <td>BL</td>
    </tr>
    <tr>
        <td class="indentRows">Borough Code</td>
        <td>1</td>
        <td>186</td>
        <td>186</td>
        <td>BL</td>
    </tr>
    <tr>
        <td class="indentRows">Tax Block</td>
        <td>5</td>
        <td>187</td>
        <td>191</td>
        <td>BL</td>
    </tr>
    <tr>
        <td class="indentRows">Tax Lot</td>
        <td>4</td>
        <td>192</td>
        <td>195</td>
        <td>BL</td>
    </tr>
    <tr>
        <td>Filler for Tax Lot Version Number</td>
        <td>1</td>
        <td>196</td>
        <td>196</td>
        <td>Not Implemented </td>
    </tr>
    <tr>
        <td>Building Identification Number (BIN)</td>
        <td>7</td>
        <td>197</td>
        <td>203</td>
        <td>BN</td>
    </tr>
    <tr>
        <td>Compass Direction</td>
        <td>1</td>
        <td>204</td>
        <td>204</td>
        <td>2, 3C, 3S</td>
    </tr>
    <tr>
        <td>Compass Direction for 2<sup>nd</sup> Intersection</td>
        <td>1</td>
        <td>205</td>
        <td>205</td>
        <td>3S</td>
    </tr>
    <tr>
        <td>Node Number</td>
        <td>7</td>
        <td>206</td>
        <td>212</td>
        <td>2, 2W</td>
    </tr>
    <tr>
        <td>Work Area Format Indicator<sup><a href="#section13.23" id="section13.23-23">23</a></sup>
        </td>
        <td>1</td>
        <td>213</td>
        <td>213</td>
        <td>All</td>
    </tr>
    <tr>
        <td>ZIP Code Input</td>
        <td>5</td>
        <td>214</td>
        <td>218</td>
        <td>1*, AP</td>
    </tr>
    <tr>
        <td>Unit Input</td>
        <td>14</td>
        <td>219</td>
        <td>232</td>
        <td>1*</td>
    </tr>
    <tr>
        <td>Filler</td>
        <td>82</td>
        <td>233</td>
        <td>314</td>
        <td></td>
    </tr>
    <tr>
        <td>Input Flags</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Long Work Area 2 Flag</td>
        <td>1</td>
        <td>315</td>
        <td>315</td>
        <td>1A, BL</td>
    </tr>
    <tr>
        <td>House Number Justification Flag<sup><a href="#section13.24" id="section13.24-24">24</a></sup>
        </td>
        <td>1</td>
        <td>316</td>
        <td>316</td>
        <td>Not Implemented</td>
    </tr>
    <tr>
        <td>House Number Normalization Length<sup><a href="#section13.25" id="section13.25-25">25</a></sup>
        </td>
        <td>2</td>
        <td>317</td>
        <td>318</td>
        <td>Not Implemented</td>
    </tr>
    <tr>
        <td>House Number Normalization Override Flag</td>
        <td>1</td>
        <td>319</td>
        <td>319</td>
        <td>Internal Use</td>
    </tr>
    <tr>
        <td>Street Name Normalization Length Limit (SNL)</td>
        <td>2</td>
        <td>320</td>
        <td>321</td>
        <td>All but B*</td>
    </tr>
    <tr>
        <td>Street Name Normalization Format Flag<sup><a href="#section13.26" id="section13.26-26">26</a></sup>
        </td>
        <td>1</td>
        <td>322</td>
        <td>322</td>
        <td>All but B*</td>
    </tr>
    <tr>
        <td>Cross Street Names Flag<sup><a href="#section13.27" id="section13.27-27">27</a></sup> a.k.a. Expanded Format Flag</td>
        <td>1</td>
        <td>323</td>
        <td>323</td>
        <td>1, 1A, 1B, 1E, 2, 3, 3C</td>
    </tr>
    <tr>
        <td>Roadbed Request Switch</td>
        <td>1</td>
        <td>324</td>
        <td>324</td>
        <td>1, 1B, 1E, 3S (Limited)</td>
    </tr>
    <tr>
        <td>Reserved for Internal Use</td>
        <td>1</td>
        <td>325</td>
        <td>325</td>
        <td>Internal GRC Flag</td>
    </tr>
    <tr>
        <td>Auxiliary Segment Switch</td>
        <td>1</td>
        <td>326</td>
        <td>326</td>
        <td>3, 3C</td>
    </tr>
    <tr>
        <td>Browse Flag</td>
        <td>1</td>
        <td>327</td>
        <td>327</td>
        <td>1*, 2, 3, 3C, BB, BF</td>
    </tr>
    <tr>
        <td>Real Streets Only Flag</td>
        <td>1</td>
        <td>328</td>
        <td>328</td>
        <td>3S</td>
    </tr>
    <tr>
        <td>TPAD Switch</td>
        <td>1</td>
        <td>329</td>
        <td>329</td>
        <td>1A, 1B, BL, BN</td>
    </tr>
    <tr>
        <td>Mode Switch</td>
        <td>1</td>
        <td>330</td>
        <td>330</td>
        <td>1, 1E, 1A, 3, 3C, AP</td>
    </tr>
    <tr>
        <td>WTO Switch</td>
        <td>1</td>
        <td>331</td>
        <td>331</td>
        <td>All</td>
    </tr>
    <tr>
        <td>Filler</td>
        <td>29</td>
        <td>332</td>
        <td>360</td>
        <td></td>
    </tr>
    <tr>
        <td>OUTPUT Fields</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>First Borough Name</td>
        <td>9</td>
        <td>361</td>
        <td>369</td>
        <td>All but D*</td>
    </tr>
    <tr>
        <td>House Number - Display Format</td>
        <td>16</td>
        <td>370</td>
        <td>385</td>
        <td>1, 1A, 1B, 1E, AP, D*</td>
    </tr>
    <tr>
        <td>House Number - Sort Format</td>
        <td>11</td>
        <td>386</td>
        <td>396</td>
        <td>1, 1A, 1B, 1E, AP, D*</td>
    </tr>
    <tr>
        <td>B10SC - First Borough and Street Code</td>
        <td>11</td>
        <td>397</td>
        <td>407</td>
        <td>All but BL, BN</td>
    </tr>
    <tr>
        <td>First Street Name Normalized</td>
        <td>32</td>
        <td>408</td>
        <td>439</td>
        <td>439</td>
    </tr>
    <tr>
        <td>B10SC - Second Borough and Street Code</td>
        <td>11</td>
        <td>440</td>
        <td>450</td>
        <td>2, 3*, D*</td>
    </tr>
    <tr>
        <td>Second Street Name Normalized</td>
        <td>32</td>
        <td>451</td>
        <td>482</td>
        <td>2, 3*, D*</td>
    </tr>
    <tr>
        <td>B10SC - Third Borough and Street Code</td>
        <td>11</td>
        <td>483</td>
        <td>493</td>
        <td>3*, D*</td>
    </tr>
    <tr>
        <td>Third Street Name Normalized</td>
        <td>32</td>
        <td>494</td>
        <td>525</td>
        <td>3*, D*</td>
    </tr>
    <tr>
        <td>BOROUGH BLOCK LOT (BBL):</td>
        <td>10</td>
        <td>526</td>
        <td>535</td>
        <td>BL (Also 1, 1A, 1B, 1E if Cross Street Names Flag is ‘E’; Also 1, 1E if Mode Switch is ‘X’)</td>
    </tr>
    <tr>
        <td class="indentRows">Borough Code</td>
        <td>1</td>
        <td>526</td>
        <td>526</td>
        <td>BL (see BL comment above)</td>
    </tr>
    <tr>
        <td class="indentRows">Tax Block</td>
        <td>5</td>
        <td>527</td>
        <td>531</td>
        <td>BL (see BL comment above)</td>
    </tr>
    <tr>
        <td class="indentRows">Tax Lot</td>
        <td>4</td>
        <td>532</td>
        <td>535</td>
        <td>BL (see BL comment above)</td>
    </tr>
    <tr>
        <td>Filler for Tax Lot Version Number</td>
        <td>1</td>
        <td>536</td>
        <td>536</td>
        <td><i>Not Implemented</i>
        </td>
    </tr>
    <tr>
        <td>Low House Number - Display Format</td>
        <td>16</td>
        <td>537</td>
        <td>552</td>
        <td>Internal Use, D*</td>
    </tr>
    <tr>
        <td>Low House Number - Sort Format</td>
        <td>11</td>
        <td>553</td>
        <td>563</td>
        <td>Internal Use, D*</td>
    </tr>
    <tr>
        <td>Building Identification Number (BIN)</td>
        <td>7</td>
        <td>564</td>
        <td>570</td>
        <td>BN (see BBL functions list above)</td>
    </tr>
    <tr>
        <td>Street Attribute Indicators</td>
        <td>3</td>
        <td>571</td>
        <td>573</td>
        <td>Internal Use</td>
    </tr>
    <tr>
        <td>Reason Code 2 </td>
        <td>1</td>
        <td>574</td>
        <td>574</td>
        <td>1B - reflects 1A Extended</td>
    </tr>
    <tr>
        <td>Reason Code Qualifier 2</td>
        <td>1</td>
        <td>575</td>
        <td>575</td>
        <td>1B (See Reason Code 2)</td>
    </tr>
    <tr>
        <td>Warning Code 2</td>
        <td>2</td>
        <td>576</td>
        <td>577</td>
        <td>1B (not used)</td>
    </tr>
    <tr>
        <td>Geosupport Return Code 2 (GRC 2)</td>
        <td>2</td>
        <td>578</td>
        <td>579</td>
        <td>1B (See Reason Code 2)</td>
    </tr>
    <tr>
        <td>Message 2</td>
        <td>80</td>
        <td>580</td>
        <td>659</td>
        <td>1B (See Reason Code 2)</td>
    </tr>
    <tr>
        <td>Node Number</td>
        <td>7</td>
        <td>660</td>
        <td>666</td>
        <td>2, 2W</td>
    </tr>
    <tr>
        <td>UNIT – SORT FORMAT</td>
        <td>14</td>
        <td>667</td>
        <td>680</td>
        <td>1*</td>
    </tr>
    <tr>
        <td class="indentRows">Unit – Type</td>
        <td>4</td>
        <td>667</td>
        <td>670</td>
        <td>1*</td>
    </tr>
    <tr>
        <td class="indentRows">Unit – Identifier</td>
        <td>10</td>
        <td>671</td>
        <td>680</td>
        <td>1*</td>
    </tr>
    <tr>
        <td>Unit – Display Format</td>
        <td>14</td>
        <td>681</td>
        <td>694</td>
        <td>1*</td>
    </tr>
    <tr>
        <td>Filler</td>
        <td>11</td>
        <td>695</td>
        <td>705</td>
        <td></td>
    </tr>
    <tr>
        <td>NIN<sup><a href="#section13.28" id="section13.28-28">28</a></sup>
        </td>
        <td>6</td>
        <td>706</td>
        <td>711</td>
        <td><i>Not Implemented</i>
        </td>
    </tr>
    <tr>
        <td>Street Attribute Indicator</td>
        <td>1</td>
        <td>712</td>
        <td>712</td>
        <td>Internal Use</td>
    </tr>
    <tr>
        <td>Reason Code</td>
        <td>1</td>
        <td>713</td>
        <td>713</td>
        <td>All</td>
    </tr>
    <tr>
        <td>Reason Code Qualifier </td>
        <td>1</td>
        <td>714</td>
        <td>714</td>
        <td>1A, BL, BN</td>
    </tr>
    <tr>
        <td>Warning Code</td>
        <td>2</td>
        <td>715</td>
        <td>716</td>
        <td>All (not used)</td>
    </tr>
    <tr>
        <td>Geosupport Return Code (GRC)</td>
        <td>2</td>
        <td>717</td>
        <td>718</td>
        <td>All</td>
    </tr>
    <tr>
        <td>Message</td>
        <td>80</td>
        <td>719</td>
        <td>798</td>
        <td>All</td>
    </tr>
    <tr>
        <td>Number of Street Codes and Street Names in List (up to 10) </td>
        <td>2</td>
        <td>799</td>
        <td>800</td>
        <td>1*, 2, 3*, BB, BF</td>
    </tr>
    <tr>
        <td>List of Street Codes (10 B7SC’s)</td>
        <td>80</td>
        <td>801</td>
        <td>880</td>
        <td>1*, 2, 3*, BB, BF</td>
    </tr>
    <tr>
        <td>List of Street Names (10 Street Name Fields, 32 Bytes Each)</td>
        <td>320</td>
        <td>881</td>
        <td>1200</td>
        <td>1*, 2, 3*, BB, BF</td>
    </tr>
</table>

<p>____________________________</p>

<a href="#section13.19-19"><span id="section13.19"><sup>19</sup></span></a> Note: An asterisk in the second position of a function code is used as a shorthand notation to represent all function codes having the indicated value in the first position, as follows:  

        1* = 1, 1A, 1B, 1E, 1N, AP
        3* = 3, 3C, 3S
        B* = BB, BF, BL, BN
        D* = D, DG, DN  

Typically, any function listed with an asterisk also includes the various forms of the function, e.g. Extended, Long, Auxiliary Segments etc.

<a href="#section13.20-20"><span id="section13.20"><sup>20</sup></span></a> The Low House Number fields are for Internal Use (Fn 5).  In addition the low House Number in Sort Format can be used with Functions D*.

<a href="#section13.21-21"><span id="section13.21"><sup>21</sup></span></a> The user may supply either a 5-Digit, 7-Digit or 10-Digit Street code in this field.  The contents are to be left-justified and blank-filled.  

<a href="#section13.22-22"><span id="section13.22"><sup>22</sup></span></a> When using street name input, the second and third borough codes are required only if they differ from the first.

<a href="#section13.23-23"><span id="section13.23"><sup>23</sup></span></a> When this indicator, also known as the Platform Indicator, is set to C or P, the Character-Only formats of the work areas (i.e., the formats documented herein) are used.  A blank in this indicator means that the IBM mainframe specific work areas, known as MSW (a.k.a. MFS), are used.  Note that as of January 1, 2020, MSWs are no longer supported.  

<a href="#section13.24-24"><span id="section13.24"><sup>24</sup></span></a> If the house number is to be right justified, the House Number Justification Flag is set to R and if the house number is to be left justified, the House Number Justification Flag is set to L or left blank.

<a href="#section13.25-25"><span id="section13.25"><sup>25</sup></span></a> The House Number Normalization Length field is used to achieve compatibility between the Main Frame Specific (MSW) work areas and the COWs.  In the COWs, the House Number is permitted to be 16 characters, but, in the MSW, it is limited to 12 characters.  It is not anticipated that users will make use of this field.  

<a href="#section13.26-26"><span id="section13.26"><sup>26</sup></span></a> This field, Street Name Normalization Format Flag, was formerly known as the Compact Option.  If the Street Name Normalization Format Flag is set to S or blank, then the street name is returned in sort format.  If it is set to C, then the street name is returned in compact format.

<a href="#section13.27-27"><span id="section13.27"><sup>27</sup></span></a> The Cross Street Names Flag (a.k.a. Expanded Format Flag), if set to E, will return the Cross Street Names and Cross Street Codes  in the List of Street Names and List of Street Codes fields respectively for Functions 1, 1E, 2, 3, 3C.  These lists are in the output section of Work Area 1.  These lists are also used for Similar Names processing and the Browse function.  (The cross street names and codes lists are not returned for Functions 1A and 1B.)  The BBL and BIN are returned in the output area of Work Area 1 where possible for Functions 1, 1A, 1B, 1E.  

<a href="#section13.28-28"><span id="section13.28"><sup>28</sup></span></a> NAP Identification Number



## <span id="appendix13.2">Work Area 2 (COW) - Functions 1, 1E</span>

<h3>Block Face Defined by Address Range Along a Street</h3>
<table>
    <thead>
        <tr>
            <th rowspan="2">FIELD</th>
            <th rowspan="2">SIZE</th>
            <th colspan="2">POSITION</th>
            <th rowspan="2">COMMENT</th>
        </tr>
        <tr>
            <td>FROM</td>
            <td>TO</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Internal Use
            </td>
            <td>
                21
            </td>
            <td>
                1
            </td>
            <td>
                21
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Continuous Parity Indicator/Duplicate Address Indicator
            </td>
            <td>
                1
            </td>
            <td>
                22
            </td>
            <td>
                22
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Low House Number of Block Face
            </td>
            <td>
                11
            </td>
            <td>
                23
            </td>
            <td>
                33
            </td>
            <td>
                Sort Format
            </td>
        </tr>
        <tr>
            <td>
                High House Number of Block Face
            </td>
            <td>
                11
            </td>
            <td>
                34
            </td>
            <td>
                44
            </td>
            <td>
                Sort Format
            </td>
        </tr>
        <tr>
            <td>
                DCP Preferred LGC (For Function 1E,
                <br /> See comment)
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                For Function 1E, the BOE preferred LGC is provided.
            </td>
        </tr>
        <tr>
            <td>
                No. of Cross Streets at Low Address End
            </td>
            <td>
                1
            </td>
            <td>
                47
            </td>
            <td>
                47
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                List of Cross Streets at Low Address End (Up to 5 B5SCs)
            </td>
            <td>
                30
            </td>
            <td>
                48
            </td>
            <td>
                77
            </td>
            <td>
                B5SC - Blank-Filled
            </td>
        </tr>
        <tr>
            <td>
                No. of Cross Streets at High Address End
            </td>
            <td>
                1
            </td>
            <td>
                78
            </td>
            <td>
                78
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                List of Cross Streets at High Address End (Up to 5 B5SCs)
            </td>
            <td>
                30
            </td>
            <td>
                79
            </td>
            <td>
                108
            </td>
            <td>
                B5SC - Blank-Filled
            </td>
        </tr>
        <tr>
            <td>
                LION KEY:
            </td>
            <td>
                10
            </td>
            <td>
                109
            </td>
            <td>
                118
            </td>
            <td></td>
        </tr>
        <tr>
            <td class="indentRows">
                Borough Code
            </td>
            <td>
                1
            </td>
            <td>
                109
            </td>
            <td>
                109
            </td>
            <td></td>
        </tr>
        <tr>
            <td class="indentRows">
                Face Code
            </td>
            <td>
                4
            </td>
            <td>
                110
            </td>
            <td>
                113
            </td>
            <td></td>
        </tr>
        <tr>
            <td class="indentRows">
                Sequence Number
            </td>
            <td>
                5
            </td>
            <td>
                114
            </td>
            <td>
                118
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Special Address Generated Record Flag
            </td>
            <td>
                1
            </td>
            <td>
                119
            </td>
            <td>
                119
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Side of Street Indicator
            </td>
            <td>
                1
            </td>
            <td>
                120
            </td>
            <td>
                120
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Segment Length in Feet
            </td>
            <td>
                5
            </td>
            <td>
                121
            </td>
            <td>
                125
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                SPATIAL X-Y COORDINATES OF ADDRESS:
            </td>
            <td>
                14
            </td>
            <td>
                126
            </td>
            <td>
                139
            </td>
            <td></td>
        </tr>
        <tr>
            <td class="indentRows">
                X Coordinate
            </td>
            <td>
                7
            </td>
            <td>
                126
            </td>
            <td>
                132
            </td>
            <td></td>
        </tr>
        <tr>
            <td class="indentRows">
                Y Coordinate
            </td>
            <td>
                7
            </td>
            <td>
                133
            </td>
            <td>
                139
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Reserved for Possible Z Coordinate
            </td>
            <td>
                7
            </td>
            <td>
                140
            </td>
            <td>
                146
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Community Development Eligibility Indicator
            </td>
            <td>
                1
            </td>
            <td>
                147
            </td>
            <td>
                147
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Marble Hill/Rikers Island Alternative Borough Flag
            </td>
            <td>
                1
            </td>
            <td>
                148
            </td>
            <td>
                148
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                DOT Street Light Contractor Area
            </td>
            <td>
                1
            </td>
            <td>
                149
            </td>
            <td>
                149
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                COMMUNITY DISTRICT:
            </td>
            <td>
                3
            </td>
            <td>
                150
            </td>
            <td>
                152
            </td>
            <td></td>
        </tr>
        <tr>
            <td class="indentRows">
                Community District Borough Code
            </td>
            <td>
                1
            </td>
            <td>
                150
            </td>
            <td>
                150
            </td>
            <td></td>
        </tr>
        <tr>
            <td class="indentRows">
                Community District Number
            </td>
            <td>
                2
            </td>
            <td>
                151
            </td>
            <td>
                152
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                ZIP Code
            </td>
            <td>
                5
            </td>
            <td>
                153
            </td>
            <td>
                157
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <strong>FUNCTION 1E ITEMS:</strong>
            </td>
            <td>
                14
            </td>
            <td>
                158
            </td>
            <td>
                171
            </td>
            <td>
                <strong>Use ONLY for Function 1E</strong>
            </td>
        </tr>
        <tr>
            <td class="indentRows">
                Election District
            </td>
            <td>
                3
            </td>
            <td>
                158
            </td>
            <td>
                160
            </td>
            <td>
                Invalid for Fn 1
            </td>
        </tr>
        <tr>
            <td class="indentRows">
                Assembly District
            </td>
            <td>
                2
            </td>
            <td>
                161
            </td>
            <td>
                162
            </td>
            <td>
                Invalid for Fn 1
            </td>
        </tr>
        <tr>
            <td class="indentRows">
                Split Election District Flag
            </td>
            <td>
                1
            </td>
            <td>
                163
            </td>
            <td>
                163
            </td>
            <td>
                Invalid for Fn 1
            </td>
        </tr>
        <tr>
            <td>
                Congressional District
            </td>
            <td>
                2
            </td>
            <td>
                164
            </td>
            <td>
                165
            </td>
            <td>
                Invalid for Fn 1
            </td>
        </tr>
        <tr>
            <td class="indentRows">
                State Senatorial District
            </td>
            <td>
                2
            </td>
            <td>
                166
            </td>
            <td>
                167
            </td>
            <td>
                Invalid for Fn 1
            </td>
        </tr>
        <tr>
            <td class="indentRows">
                Civil Court District
            </td>
            <td>
                2
            </td>
            <td>
                168
            </td>
            <td>
                169
            </td>
            <td>
                Invalid for Fn 1
            </td>
        </tr>
        <tr>
            <td class="indentRows">
                City Council District
            </td>
            <td>
                2
            </td>
            <td>
                170
            </td>
            <td>
                171
            </td>
            <td>
                Invalid for Fn 1
            </td>
        </tr>
        <tr>
            <td>
                Health Center District
            </td>
            <td>
                2
            </td>
            <td>
                172
            </td>
            <td>
                173
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Health Area
            </td>
            <td>
                4
            </td>
            <td>
                174
            </td>
            <td>
                177
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Sanitation District
            </td>
            <td>
                3
            </td>
            <td>
                178
            </td>
            <td>
                180
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Sanitation Collection Scheduling Section and Subsection
            </td>
            <td>
                2
            </td>
            <td>
                181
            </td>
            <td>
                182
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Sanitation Regular Collection Schedule
            </td>
            <td>
                5
            </td>
            <td>
                183
            </td>
            <td>
                187
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Sanitation Recycling Collection Schedule
            </td>
            <td>
                3
            </td>
            <td>
                188
            </td>
            <td>
                190
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Police Patrol Borough Command
            </td>
            <td>
                1
            </td>
            <td>
                191
            </td>
            <td>
                191
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Police Precinct
            </td>
            <td>
                3
            </td>
            <td>
                192
            </td>
            <td>
                194
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Fire Division
            </td>
            <td>
                2
            </td>
            <td>
                195
            </td>
            <td>
                196
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Fire Battalion
            </td>
            <td>
                2
            </td>
            <td>
                197
            </td>
            <td>
                198
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Fire Company Type
            </td>
            <td>
                1
            </td>
            <td>
                199
            </td>
            <td>
                199
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Fire Company Number
            </td>
            <td>
                3
            </td>
            <td>
                200
            </td>
            <td>
                202
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Filler
            </td>
            <td>
                1
            </td>
            <td>
                203
            </td>
            <td>
                203
            </td>
            <td>
                Was Split Comm School Dist Flag
            </td>
        </tr>
        <tr>
            <td>
                Community School District
            </td>
            <td>
                2
            </td>
            <td>
                204
            </td>
            <td>
                205
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Atomic Polygon
            </td>
            <td>
                3
            </td>
            <td>
                206
            </td>
            <td>
                208
            </td>
            <td>
                Was Dynamic Block
            </td>
        </tr>
        <tr>
            <td>
                Police Patrol Borough
            </td>
            <td>
                2
            </td>
            <td>
                209
            </td>
            <td>
                210
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Feature Type Code
            </td>
            <td>
                1
            </td>
            <td>
                211
            </td>
            <td>
                211
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Segment Type Code
            </td>
            <td>
                1
            </td>
            <td>
                212
            </td>
            <td>
                212
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Alley or Cross Street List Flag
            </td>
            <td>
                1
            </td>
            <td>
                213
            </td>
            <td>
                213
            </td>
            <td>
                A - Alley Split X - Cross Street
                <br /> List Modified
            </td>
        </tr>
        <tr>
            <td>
                Coincidence Segment Count
            </td>
            <td>
                1
            </td>
            <td>
                214
            </td>
            <td>
                214
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Filler
            </td>
            <td>
                2
            </td>
            <td>
                215
            </td>
            <td>
                216
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Borough of Census Tract
            </td>
            <td>
                1
            </td>
            <td>
                217
            </td>
            <td>
                217
            </td>
            <td>
                Internal
            </td>
        </tr>
        <tr>
            <td>
                1990 Census Tract
            </td>
            <td>
                6
            </td>
            <td>
                218
            </td>
            <td>
                223
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                2010 Census Tract
            </td>
            <td>
                6
            </td>
            <td>
                224
            </td>
            <td>
                229
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                2010 Census Block
            </td>
            <td>
                4
            </td>
            <td>
                230
            </td>
            <td>
                233
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                2010 Census Block Suffix
            </td>
            <td>
                1
            </td>
            <td>
                234
            </td>
            <td>
                234
            </td>
            <td>
                <em>Not Implemented</em>
            </td>
        </tr>
        <tr>
            <td>
                2000 Census Tract
            </td>
            <td>
                6
            </td>
            <td>
                235
            </td>
            <td>
                240
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                2000 Census Block
            </td>
            <td>
                4
            </td>
            <td>
                241
            </td>
            <td>
                244
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                2000 Census Block Suffix
            </td>
            <td>
                1
            </td>
            <td>
                245
            </td>
            <td>
                245
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Neighborhood Tabulation Area (NTA)
            </td>
            <td>
                4
            </td>
            <td>
                246
            </td>
            <td>
                249
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                DSNY Snow Priority Code
            </td>
            <td>
                1
            </td>
            <td>
                250
            </td>
            <td>
                250
            </td>
            <td>
                Dept. of Sanitation
            </td>
        </tr>
        <tr>
            <td>
                DSNY Organic Recycling Schedule
            </td>
            <td>
                5
            </td>
            <td>
                251
            </td>
            <td>
                255
            </td>
            <td>
                Dept. of Sanitation
            </td>
        </tr>
        <tr>
            <td>
                DSNY Bulk Pickup Schedule
            </td>
            <td>
                5
            </td>
            <td>
                256
            </td>
            <td>
                260
            </td>
            <td>
                Dept. of Sanitation
            </td>
        </tr>
        <tr>
            <td>
                Hurricane Evacuation Zone (HEZ)
            </td>
            <td>
                2
            </td>
            <td>
                261
            </td>
            <td>
                262
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Filler
            </td>
            <td>
                11
            </td>
            <td>
                263
            </td>
            <td>
                273
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Underlying Address Number on True Street (for NAPs, Vanity, etc)
            </td>
            <td>
                11
            </td>
            <td>
                274
            </td>
            <td>
                284
            </td>
            <td>
                Sort Format
            </td>
        </tr>
        <tr>
            <td>
                Underlying B7SC of True Street (NAPs etc)
            </td>
            <td>
                8
            </td>
            <td>
                285
            </td>
            <td>
                292
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Segment Identifier
            </td>
            <td>
                7
            </td>
            <td>
                293
            </td>
            <td>
                299
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                Curve Flag
            </td>
            <td>
                1
            </td>
            <td>
                300
            </td>
            <td>
                300
            </td>
            <td></td>
        </tr>
    </tbody>
</table>


## <span id="appendix13.3"> Work Area 2 (COW) - Functions 1, 1E Extended  </span>

<h3>Block Face Defined by Address Range Along a Street</h3>  

<table>
	<thead>
		<tr>
			<td rowspan="2">
				<strong>FIELD</strong>
			</td>
			<td rowspan="2">
				<strong>SIZE</strong>
			</td>
			<td colspan="2">
				<strong>POSITION</strong>
			</td>
			<td rowspan="2">
				<strong>COMMENT</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>FROM</strong>
			</td>
			<td>
				<strong>TO</strong>
			</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				Same as Regular Work Area 2 for Functions 1, 1E
			</td>
			<td>
				300
			</td>
			<td>
				1
			</td>
			<td>
				300
			</td>
			<td>
			</td>
		</tr>
		<tr>
			<td>
				List of 4 LGC&rsquo;s
			</td>
			<td>
				8
			</td>
			<td>
				301
			</td>
			<td>
				308
			</td>
			<td>
			</td>
		</tr>
		<tr>
			<td>
				BOE LGC Pointer
			</td>
			<td>
				1
			</td>
			<td>
				309
			</td>
			<td>
				309
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Segment Azimuth
			</td>
			<td>
				3
			</td>
			<td>
				310
			</td>
			<td>
				312
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Segment Orientation
			</td>
			<td>
				1
			</td>
			<td>
				313
			</td>
			<td>
				313
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				SPATIAL COORDINATES OF SEGMENT:
			</td>
			<td>
				42
			</td>
			<td>
				314
			</td>
			<td>
				355
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				X Coordinate, Low Address End
			</td>
			<td>
				7
			</td>
			<td>
				314
			</td>
			<td>
				320
			</td>
			<td>
				From Node
			</td>
		</tr>
		<tr>
			<td>
				Y Coordinate, Low Address End
			</td>
			<td>
				7
			</td>
			<td>
				321
			</td>
			<td>
				327
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Z Coordinate, Low Address End
			</td>
			<td>
				7
			</td>
			<td>
				328
			</td>
			<td>
				334
			</td>
			<td>
				<em>Not Implemented</em>
			</td>
		</tr>
		<tr>
			<td>
				X Coordinate, High Address End
			</td>
			<td>
				7
			</td>
			<td>
				335
			</td>
			<td>
				341
			</td>
			<td>
				To Node
			</td>
		</tr>
		<tr>
			<td>
				Y Coordinate, High Address End
			</td>
			<td>
				7
			</td>
			<td>
				342
			</td>
			<td>
				348
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Z Coordinate, High Address End
			</td>
			<td>
				7
			</td>
			<td>
				349
			</td>
			<td>
				355
			</td>
			<td>
				<em>Not Implemented</em>
			</td>
		</tr>
		<tr>
			<td>
				SPATIAL COORDINATES OF CENTER OF CURVATURE:
			</td>
			<td>
				21
			</td>
			<td>
				356
			</td>
			<td>
				376
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				X Coordinate
			</td>
			<td>
				7
			</td>
			<td>
				356
			</td>
			<td>
				362
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Y Coordinate
			</td>
			<td>
				7
			</td>
			<td>
				363
			</td>
			<td>
				369
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Z Coordinate
			</td>
			<td>
				7
			</td>
			<td>
				370
			</td>
			<td>
				376
			</td>
			<td>
				<em>Not Implemented</em>
			</td>
		</tr>
		<tr>
			<td>
				Radius of Circle
			</td>
			<td>
				7
			</td>
			<td>
				377
			</td>
			<td>
				383
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Secant Location Related to Curve
			</td>
			<td>
				1
			</td>
			<td>
				384
			</td>
			<td>
				384
			</td>
			<td>
				L - Left, R - Right
			</td>
		</tr>
		<tr>
			<td>
				Angle to From Node &ndash; Beta Value
			</td>
			<td>
				5
			</td>
			<td>
				385
			</td>
			<td>
				389
			</td>
			<td rowspan="2">
				Beta &amp; Alpha Used to Calculate Coordinates
			</td>
		</tr>
		<tr>
			<td>
				Angle to To Node &ndash; Alpha Value
			</td>
			<td>
				5
			</td>
			<td>
				390
			</td>
			<td>
				394
			</td>
		</tr>
		<tr>
			<td>
				From LION Node ID
			</td>
			<td>
				7
			</td>
			<td>
				395
			</td>
			<td>
				401
			</td>
			<td>
				From Node
			</td>
		</tr>
		<tr>
			<td>
				To LION Node ID
			</td>
			<td>
				7
			</td>
			<td>
				402
			</td>
			<td>
				408
			</td>
			<td>
				To Node
			</td>
		</tr>
		<tr>
			<td>
				LION KEY FOR VANITY ADDRESS:
			</td>
			<td>
				10
			</td>
			<td>
				409
			</td>
			<td>
				418
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Borough Code
			</td>
			<td>
				1
			</td>
			<td>
				409
			</td>
			<td>
				409
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Face Code
			</td>
			<td>
				4
			</td>
			<td>
				410
			</td>
			<td>
				413
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Sequence Number
			</td>
			<td>
				5
			</td>
			<td>
				414
			</td>
			<td>
				418
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Side of Street of Vanity Address
			</td>
			<td>
				1
			</td>
			<td>
				419
			</td>
			<td>
				419
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Split Low House Number
			</td>
			<td>
				11
			</td>
			<td>
				420
			</td>
			<td>
				430
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Traffic Direction
			</td>
			<td>
				1
			</td>
			<td>
				431
			</td>
			<td>
				431
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Turn Restrictions
			</td>
			<td>
				10
			</td>
			<td>
				432
			</td>
			<td>
				441
			</td>
			<td>
				<em>Not Implemented</em>
			</td>
		</tr>
		<tr>
			<td>
				Fraction for Curve Calculation
			</td>
			<td>
				3
			</td>
			<td>
				442
			</td>
			<td>
				444
			</td>
			<td>
				Internal Use
			</td>
		</tr>
		<tr>
			<td>
				Roadway Type
			</td>
			<td>
				2
			</td>
			<td>
				445
			</td>
			<td>
				446
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Physical ID
			</td>
			<td>
				7
			</td>
			<td>
				447
			</td>
			<td>
				453
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Generic ID
			</td>
			<td>
				7
			</td>
			<td>
				454
			</td>
			<td>
				460
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				NYPD ID
			</td>
			<td>
				7
			</td>
			<td>
				461
			</td>
			<td>
				467
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				FDNY ID
			</td>
			<td>
				7
			</td>
			<td>
				468
			</td>
			<td>
				474
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Bike Lane 2
			</td>
			<td>
				2
			</td>
			<td>
				475
			</td>
			<td>
				476
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Bike Traffic Direction
			</td>
			<td>
				2
			</td>
			<td>
				477
			</td>
			<td>
				478
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Filler
			</td>
			<td>
				3
			</td>
			<td>
				479
			</td>
			<td>
				481
			</td>
			<td>
				Was Blockface ID, See bytes 730-739
			</td>
		</tr>
		<tr>
			<td>
				Street Status
			</td>
			<td>
				1
			</td>
			<td>
				482
			</td>
			<td>
				482
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Street Width
			</td>
			<td>
				3
			</td>
			<td>
				483
			</td>
			<td>
				485
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Street Width Irregular
			</td>
			<td>
				1
			</td>
			<td>
				486
			</td>
			<td>
				486
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Bike Lane
			</td>
			<td>
				1
			</td>
			<td>
				487
			</td>
			<td>
				487
			</td>
			<td>
				Will be retired. See Bike Lane 2
			</td>
		</tr>
		<tr>
			<td>
				Federal Classification Code
			</td>
			<td>
				2
			</td>
			<td>
				488
			</td>
			<td>
				489
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Right Of Way Type
			</td>
			<td>
				1
			</td>
			<td>
				490
			</td>
			<td>
				490
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				List of Second Set of 5 LGCs
			</td>
			<td>
				10
			</td>
			<td>
				491
			</td>
			<td>
				500
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Legacy Segment ID
			</td>
			<td>
				7
			</td>
			<td>
				501
			</td>
			<td>
				507
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				From Preferred LGCs First Set of 5
			</td>
			<td>
				10
			</td>
			<td>
				508
			</td>
			<td>
				517
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				To Preferred LGCs First Set of 5
			</td>
			<td>
				10
			</td>
			<td>
				518
			</td>
			<td>
				527
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				From Preferred LGCs Second Set of 5
			</td>
			<td>
				10
			</td>
			<td>
				528
			</td>
			<td>
				537
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				To Preferred LGCs Second Set of 5
			</td>
			<td>
				10
			</td>
			<td>
				538
			</td>
			<td>
				547
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				No Cross Street Calculation Flag
			</td>
			<td>
				1
			</td>
			<td>
				548
			</td>
			<td>
				548
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Individual Segment Length
			</td>
			<td>
				5
			</td>
			<td>
				549
			</td>
			<td>
				553
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				NTA Name
			</td>
			<td>
				75
			</td>
			<td>
				554
			</td>
			<td>
				628
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				USPS Preferred City Name
			</td>
			<td>
				25
			</td>
			<td>
				629
			</td>
			<td>
				653
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Latitude
			</td>
			<td>
				9
			</td>
			<td>
				654
			</td>
			<td>
				662
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Longitude
			</td>
			<td>
				11
			</td>
			<td>
				663
			</td>
			<td>
				673
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				From <u>Actual</u> Segment Node ID
			</td>
			<td>
				7
			</td>
			<td>
				674
			</td>
			<td>
				680
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				To <u>Actual</u> Segment Node ID
			</td>
			<td>
				7
			</td>
			<td>
				681
			</td>
			<td>
				687
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				SPATIAL COORDINATES OF <u>ACTUAL</u> SEGMENT:
			</td>
			<td>
				42
			</td>
			<td>
				688
			</td>
			<td>
				729
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				X Coordinate, Low Address End
			</td>
			<td>
				7
			</td>
			<td>
				688
			</td>
			<td>
				694
			</td>
			<td>
				<u>Actual</u> From Node
			</td>
		</tr>
		<tr>
			<td>
				Y Coordinate, Low Address End
			</td>
			<td>
				7
			</td>
			<td>
				695
			</td>
			<td>
				701
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Z Coordinate, Low Address End
			</td>
			<td>
				7
			</td>
			<td>
				702
			</td>
			<td>
				708
			</td>
			<td>
				<em>Not Implemented</em>
			</td>
		</tr>
		<tr>
			<td>
				X Coordinate, High Address End
			</td>
			<td>
				7
			</td>
			<td>
				709
			</td>
			<td>
				715
			</td>
			<td>
				<u>Actual</u> To Node
			</td>
		</tr>
		<tr>
			<td>
				Y Coordinate, High Address End
			</td>
			<td>
				7
			</td>
			<td>
				716
			</td>
			<td>
				722
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Z Coordinate, High Address End
			</td>
			<td>
				7
			</td>
			<td>
				723
			</td>
			<td>
				729
			</td>
			<td>
				<em>Not Implemented</em>
			</td>
		</tr>
		<tr>
			<td>
				Blockface ID
			</td>
			<td>
				10
			</td>
			<td>
				730
			</td>
			<td>
				739
			</td>
			<td>
				Previously 7 bytes
			</td>
		</tr>
		<tr>
			<td>
				Number of Travel Lanes on the Street
			</td>
			<td>
				2
			</td>
			<td>
				740
			</td>
			<td>
				741
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Number of Parking Lanes on the Street
			</td>
			<td>
				2
			</td>
			<td>
				742
			</td>
			<td>
				743
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Number of Total Lanes on the Street
			</td>
			<td>
				2
			</td>
			<td>
				744
			</td>
			<td>
				745
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Street Width Maximum
			</td>
			<td>
				3
			</td>
			<td>
				746
			</td>
			<td>
				748
			</td>
			<td></td>
		</tr>
    <tr>
      <td>
        Speed Limit
      </td>
      <td>
        2
      </td>
      <td>
        749
      </td>
      <td>
        750
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        PUMA Code
      </td>
      <td>
        5
      </td>
      <td>
        751
      </td>
      <td>
        755
      </td>
      <td></td>
    </tr>		
    <tr>
      <td>
        Police Sector
      </td>
      <td>
        4
      </td>
      <td>
        756
      </td>
      <td>
        759
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Police Service Area
      </td>
      <td>
        1
      </td>
      <td>
        760
      </td>
      <td>
        760
      </td>
      <td></td>
    </tr>			
    <tr>
			<td>
				Filler
			</td>
			<td>
				240
			</td>
			<td>
				761
			</td>
			<td>
				1000
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Reason Code
			</td>
			<td>
				1
			</td>
			<td>
				1001
			</td>
			<td>
				1001
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Reason Code Qualifier
			</td>
			<td>
				1
			</td>
			<td>
				1002
			</td>
			<td>
				1002
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Warning Code Filler
			</td>
			<td>
				2
			</td>
			<td>
				1003
			</td>
			<td>
				1004
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Return Code
			</td>
			<td>
				2
			</td>
			<td>
				1005
			</td>
			<td>
				1006
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Number of Cross Streets at Low Address End
			</td>
			<td>
				1
			</td>
			<td>
				1007
			</td>
			<td>
				1007
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				List of Cross Streets at Low Address End (Up to 5 B7SCs)
			</td>
			<td>
				40
			</td>
			<td>
				1008
			</td>
			<td>
				1047
			</td>
			<td>
				B7SC-Blank-Filled
			</td>
		</tr>
		<tr>
			<td>
				Number of Cross Streets at High Address End
			</td>
			<td>
				1
			</td>
			<td>
				1048
			</td>
			<td>
				1048
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				List of Cross Streets at High Address End (Up to 5 B7SCs)
			</td>
			<td>
				40
			</td>
			<td>
				1049
			</td>
			<td>
				1088
			</td>
			<td>
				B7SC-Blank-Filled
			</td>
		</tr>
		<tr>
			<td>
				List of Cross Street Names at Low Address End
			</td>
			<td>
				160
			</td>
			<td>
				1089
			</td>
			<td>
				1248
			</td>
			<td>
				5 x 32 = 160 Up to 5 Street Names
			</td>
		</tr>
		<tr>
			<td>
				List of Cross Street Names at High Address End
			</td>
			<td>
				160
			</td>
			<td>
				1249
			</td>
			<td>
				1408
			</td>
			<td>
				5 x 32 = 160 Up to 5 Street Names
			</td>
		</tr>
		<tr>
			<td>
				BOE Preferred B7SC
			</td>
			<td>
				8
			</td>
			<td>
				1409
			</td>
			<td>
				1416
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				BOE Preferred Street Name
			</td>
			<td>
				32
			</td>
			<td>
				1417
			</td>
			<td>
				1448
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Filler
			</td>
			<td>
				52
			</td>
			<td>
				1449
			</td>
			<td>
				1500
			</td>
			<td>
			</td>
		</tr>
	</tbody>
</table>


## <span id="appendix13.4">Work Area 2 (COW) - Functions 1A, BL, BN</span>

<h3>Property Level Information Defined by Address, BBL or BIN</h3>  

<table>
  <thead>
    <tr>
      <td rowspan="2">
        FIELD
      </td>
      <td rowspan="2">
        SIZE
      </td>
      <td colspan="2">
        POSITION
      </td>
      <td rowspan="2">
        COMMENT
      </td>
    </tr>
    <tr>
      <td>
        FROM
      </td>
      <td>
        TO
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Internal Use
      </td>
      <td>
        21
      </td>
      <td>
        1
      </td>
      <td>
        21
      </td>
      <td></td>
    </tr>
    <tr>
      <td>Continuous Parity Indicator /Duplicate Address Indicator</td>
      <td>1</td>
      <td>22</td>
      <td>22</td>
      <td></td>
    </tr>
    <tr>
      <td>Low House Number of Defining Address Range</td>
      <td>11</td>
      <td>23</td>
      <td>33</td>
      <td>Sort Format</td>
    </tr>
    <tr>
      <td>
        BOROUGH BLOCK LOT (BBL):
      </td>
      <td>
        10
      </td>
      <td>
        34
      </td>
      <td>
        43
      </td>
      <td>
        Billing BBL if Condo
      </td>
    </tr>
    <tr>
      <td class="indentRows">
         Borough Code
      </td>
      <td>
        1
      </td>
      <td>
        34
      </td>
      <td>
        34
      </td>
      <td></td>
    </tr>
    <tr>
      <td  class="indentRows">
         Tax Block
      </td>
      <td>
        5
      </td>
      <td>
        35
      </td>
      <td>
        39
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Tax Lot
      </td>
      <td>
        4
      </td>
      <td>
        40
      </td>
      <td>
        43
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Filler for Tax Lot Version Number
      </td>
      <td>
        1
      </td>
      <td>
        44
      </td>
      <td>
        44
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
        RPAD Self-Check Code (SCC) for BBL
      </td>
      <td>
        1
      </td>
      <td>
        45
      </td>
      <td>
        45
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Filler
      </td>
      <td>
        1
      </td>
      <td>
        46
      </td>
      <td>
        46
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        RPAD Building Classification Code
      </td>
      <td>
        2
      </td>
      <td>
        47
      </td>
      <td>
        48
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Corner Code
      </td>
      <td>
        2
      </td>
      <td>
        49
      </td>
      <td>
        50
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Number of Existing Structures on Lot
      </td>
      <td>
        4
      </td>
      <td>
        51
      </td>
      <td>
        54
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Number of Street Frontages of Lot
      </td>
      <td>
        2
      </td>
      <td>
        55
      </td>
      <td>
        56
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Interior Lot Flag
      </td>
      <td>
        1
      </td>
      <td>
        57
      </td>
      <td>
        57
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Vacant Lot Flag
      </td>
      <td>
        1
      </td>
      <td>
        58
      </td>
      <td>
        58
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Irregularly-Shaped Lot Flag
      </td>
      <td>
        1
      </td>
      <td>
        59
      </td>
      <td>
        59
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Marble Hill/Rikers Island Alternate Borough Flag
      </td>
      <td>
        1
      </td>
      <td>
        60
      </td>
      <td>
        60
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        List of Geographic Identifiers (LGI) Overflow Flag
      </td>
      <td>
        1
      </td>
      <td>
        61
      </td>
      <td>
        61
      </td>
      <td>
        When = 'E', there are more than 21 addrs for Fns 1A and BL.
      </td>
    </tr>
    <tr>
      <td>
        STROLLING KEY:
      </td>
      <td>
        19
      </td>
      <td>
        62
      </td>
      <td>
        80
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
         Borough
      </td>
      <td>
        1
      </td>
      <td>
        62
      </td>
      <td>
        62
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
         5-Digit Street Code of &lsquo;On&rsquo; Street
      </td>
      <td>
        5
      </td>
      <td>
        63
      </td>
      <td>
        67
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
         Side of Street Indicator
      </td>
      <td>
        1
      </td>
      <td>
        68
      </td>
      <td>
        68
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
         High House Number &ndash; Sort Format
      </td>
      <td>
        11
      </td>
      <td>
        69
      </td>
      <td>
        79
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
         Filler
      </td>
      <td>
        1
      </td>
      <td>
        80
      </td>
      <td>
        80
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
        Reserved for Internal Use
      </td>
      <td>
        1
      </td>
      <td>
        81
      </td>
      <td>
        81
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Building Identification Number (BIN) of Input Address or NAP
      </td>
      <td>
        7
      </td>
      <td>
        82
      </td>
      <td>
        88
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Condominium Flag
      </td>
      <td>
        1
      </td>
      <td>
        89
      </td>
      <td>
        89
      </td>
      <td>
        If condo, = 'C';
      </td>
    </tr>
    <tr>
      <td>
        Filler
      </td>
      <td>
        1
      </td>
      <td>
        90
      </td>
      <td>
        90
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        DOF Condominium Identification Number
      </td>
      <td>
        4
      </td>
      <td>
        91
      </td>
      <td>
        94
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Condominium Unit ID Number
      </td>
      <td>
        7
      </td>
      <td>
        95
      </td>
      <td>
        101
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
        Condominium Billing BBL
      </td>
      <td>
        10
      </td>
      <td>
        102
      </td>
      <td>
        111
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Filler - Tax Lot Version No. for Billing BBL
      </td>
      <td>
        1
      </td>
      <td>
        112
      </td>
      <td>
        112
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
        Self-Check Code (SCC) of Billing BBL
      </td>
      <td>
        1
      </td>
      <td>
        113
      </td>
      <td>
        113
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        LOW BBL OF THIS BUILDING'S CONDOMINIUM UNITS:
      </td>
      <td>
        10
      </td>
      <td>
        114
      </td>
      <td>
        123
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Borough Code
      </td>
      <td>
        1
      </td>
      <td>
        114
      </td>
      <td>
        114
      </td>
      <td>
        Condo
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Tax Block
      </td>
      <td>
        5
      </td>
      <td>
        115
      </td>
      <td>
        119
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Tax Lot
      </td>
      <td>
        4
      </td>
      <td>
        120
      </td>
      <td>
        123
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Filler for Tax Lot Version No. of Low BBL
      </td>
      <td>
        1
      </td>
      <td>
        124
      </td>
      <td>
        124
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
        HIGH BBL OF THIS BUILDING'S CONDOMINIUM UNITS:
      </td>
      <td>
        10
      </td>
      <td>
        125
      </td>
      <td>
        134
      </td>
      <td></td>
    </tr>
    <tr>
      <td  class="indentRows">
         Borough Code
      </td>
      <td>
        1
      </td>
      <td>
        125
      </td>
      <td>
        125
      </td>
      <td>
        Condo
      </td>
    </tr>
    <tr>
      <td class="indentRows">
         Tax Block
      </td>
      <td>
        5
      </td>
      <td>
        126
      </td>
      <td>
        130
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Tax Lot
      </td>
      <td>
        4
      </td>
      <td>
        131
      </td>
      <td>
        134
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Filler for Tax Lot Version No. of High BBL
      </td>
      <td>
        1
      </td>
      <td>
        135
      </td>
      <td>
        135
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
        Filler
      </td>
      <td>
        15
      </td>
      <td>
        136
      </td>
      <td>
        150
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Cooperative ID Number
      </td>
      <td>
        4
      </td>
      <td>
        151
      </td>
      <td>
        154
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        SBVP (SANBORN MAP IDENTIFIER):
      </td>
      <td>
        8
      </td>
      <td>
        155
      </td>
      <td>
        162
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Sanborn Borough Code
      </td>
      <td>
        1
      </td>
      <td>
        155
      </td>
      <td>
        155
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Volume Number
      </td>
      <td>
        2
      </td>
      <td>
        156
      </td>
      <td>
        157
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Volume Number Suffix
      </td>
      <td>
        1
      </td>
      <td>
        158
      </td>
      <td>
        158
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Page Number
      </td>
      <td>
        3
      </td>
      <td>
        159
      </td>
      <td>
        161
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Page Number Suffix
      </td>
      <td>
        1
      </td>
      <td>
        162
      </td>
      <td>
        162
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        DCP Commercial Study Area
      </td>
      <td>
        5
      </td>
      <td>
        163
      </td>
      <td>
        167
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Tax Map Number Section & Volume
      </td>
      <td>
        5
      </td>
      <td>
        168
      </td>
      <td>
        172
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Reserved for Tax Map Page Number
      </td>
      <td>
        4
      </td>
      <td>
        173
      </td>
      <td>
        176
      </td>
      <td>
        <em>Not Implemented</em>
      </td>
    </tr>
    <tr>
      <td>
        Filler
      </td>
      <td>
        3
      </td>
      <td>
        177
      </td>
      <td>
        179
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Latitude
      </td>
      <td>
        9
      </td>
      <td>
        180
      </td>
      <td>
        188
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Longitude
      </td>
      <td>
        11
      </td>
      <td>
        189
      </td>
      <td>
        199
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        X-Y Coordinates of Tax Lot Centroid (Internal to Lot)
      </td>
      <td>
        14
      </td>
      <td>
        200
      </td>
      <td>
        213
      </td>
      <td>
        Previously X-Y Coordinates of COGIS Annotation Point
      </td>
    </tr>
    <tr>
      <td>
        Business Improvement District (BID)
      </td>
      <td>
        6
      </td>
      <td>
        214
      </td>
      <td>
        219
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        TPAD BIN Status (for DM job)
      </td>
      <td>
        1
      </td>
      <td>
        220
      </td>
      <td>
        220
      </td>
      <td>
        TPAD request
      </td>
    </tr>
    <tr>
      <td>
        TPAD New BIN
      </td>
      <td>
        7
      </td>
      <td>
        221
      </td>
      <td>
        227
      </td>
      <td>
        TPAD request
      </td>
    </tr>
    <tr>
      <td>
        TPAD New BIN Status
      </td>
      <td>
        1
      </td>
      <td>
        228
      </td>
      <td>
        228
      </td>
      <td>
        TPAD request
      </td>
    </tr>
    <tr>
      <td>
        TPAD Conflict Flag
      </td>
      <td>
        1
      </td>
      <td>
        229
      </td>
      <td>
        229
      </td>
      <td>
        TPAD request
      </td>
    </tr>
    <tr>
      <td>
        DCP Zoning Map
      </td>
      <td>
        3
      </td>
      <td>
        230
      </td>
      <td>
        232
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Filler
      </td>
      <td>
        6
      </td>
      <td>
        233
      </td>
      <td>
        238
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        List of 4 LGCs
      </td>
      <td>
        8
      </td>
      <td>
        239
      </td>
      <td>
        246
      </td>
      <td>
        Internal Use
      </td>
    </tr>
    <tr>
      <td>
        Number of Entries in List of Geographic <br /> Identifiers
      </td>
      <td>
        4
      </td>
      <td>
        247
      </td>
      <td>
        250
      </td>
      <td>
        Maximum of 21 entries
      </td>
    </tr>
    <tr>
      <td>
        LIST OF GEOGRAPHIC IDENTIFIERS:
        Variable length list of up to 21 entries,
        each 53-bytes long, structured as follows:
      </td>
      <td>
        1113
      </td>
      <td>
        251
      </td>
      <td>
        1363
      </td>
      <td>
        Maximum of 21 entries, each 53 bytes long: 21x53 = 1,113
      </td>
    </tr>
    <tr>
      <td class="indentRows">
         Low House Number
      </td>
      <td>
        (16)
      </td>
      <td>
        (1)
      </td>
      <td>
        (16)
      </td>
      <td>
        Display format
      </td>
    </tr>
    <tr>
      <td class="indentRows">
         High House Number
      </td>
      <td>
        (16)
      </td>
      <td>
        (17)
      </td>
      <td>
        (32)
      </td>
      <td>
        Display format
      </td>
    </tr>
    <tr>
      <td class="indentRows">
         Borough Code
      </td>
      <td>
        (1)
      </td>
      <td>
        (33)
      </td>
      <td>
        (33)
      </td>
      <td>
        Start of B7SC
      </td>
    </tr>
    <tr>
      <td class="indentRows">
         5-Digit Street Code
      </td>
      <td>
        (5)
      </td>
      <td>
        (34)
      </td>
      <td>
        (38)
      </td>
      <td>
        Part of B7SC
      </td>
    </tr>
    <tr>
      <td class="indentRows">
         DCP-Preferred Local Group Code (LGC)
      </td>
      <td>
        (2)
      </td>
      <td>
        (39)
      </td>
      <td>
        (40)
      </td>
      <td>
        End of B7SC
      </td>
    </tr>
    <tr>
      <td class="indentRows">
         Building Identification Number (BIN)
      </td>
      <td>
        (7)
      </td>
      <td>
        (41)
      </td>
      <td>
        (47)
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">
         Side of Street Indicator
      </td>
      <td>
        (1)
      </td>
      <td>
        (48)
      </td>
      <td>
        (48)
      </td>
      <td>
        L - Left, R - Right
      </td>
    </tr>
    <tr>
      <td>
         Geographic Identifier Entry Type Code
      </td>
      <td>
        (1)
      </td>
      <td>
        (49)
      </td>
      <td>
        (49)
      </td>
      <td>
        N - NAP (Simplex)<br>
        G - Complex NAP</br>
        X - Constituent entity<br /> of Complex NAP</br>
        B - NAUB</br>
        F - Frontage</br>
        W - Blank Wall</br>
        Q - Pseudo Addr</br>
        T - Tunnel</br>
        U - Misc. Structure</br>
        V - Vanity Address</br>
        O - Out-of Sequence Address</br>
        Blank - Normal
      </td>
    </tr>
    <tr>
      <td>
         TPAD BIN Status
      </td>
      <td>
        (1)
      </td>
      <td>
        (50)
      </td>
      <td>
        (50)
      </td>
      <td>
        TPAD Request
      </td>
    </tr>
    <tr>
      <td>
         Filler
      </td>
      <td>
        (3)
      </td>
      <td>
        (51)
      </td>
      <td>
        (53)
      </td>
      <td></td>
    </tr>
    <tr>
      <td>* End of 53-byte entry *
      </td>
      <td colspan="4">
      </td>
    </tr>
    <tr>
      <td>
        *** End of Work Area *** (1,363 bytes)
      </td>
      <td colspan="4">
      </td>
    </tr>
  </tbody>
</table>


## <span id="appendix13.5">Long Work Area 2 (COW) - Functions 1A, BL  </span>
<b>Property Level Information (BIN Number) Defined by Address, BBL</b>

<table>
  <tr>
  <th rowspan="2">FIELD</th>
  <th rowspan="2">SIZE</th>
  <th colspan="2">POSITION</th>
  <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <th>FROM</th>
    <th>TO</th>
  </tr>
  <tr>
    <td>Same as Regular Work Area 2 – Functions 1A, BL, BN</td>
    <td>246</td>
    <td>1</td>
    <td>246</td>
    <td></td>
  </tr>
  <tr>
    <td>Number of Buildings on Tax Lot</td>
    <td>4</td>
    <td>247</td>
    <td>250</td>
    <td>Maximum of 2,500</td>
  </tr>
  <tr>
    <td>LIST OF BUILDINGS ON TAX LOT: Variable length list of up to 2,500 entries; each is 7 bytes long structured as follows:</td>
    <td>17500</td>
    <td>251</td>
    <td>17750</td>
    <td>Maximum of 2,500 entries, each 7 bytes long. 7 x 2,500 = 17,500</td>
  </tr>
  <tr>
    <td>Building Identification Number (BIN)</td>
    <td>-7</td>
    <td>-1</td>
    <td>-7</td>
    <td></td>
  </tr>
  <tr>
    <td>* End of 7-byte entry *</td>
    <td colspan="4"></td>
  </tr>
  <tr>
    <td>*** End of Work Area *** (17,750 bytes)"</td>
    <td colspan="4"></td>
  </tr>
</table>  

## <span id="appendix13.6">TPAD Long Work Area 2 (COW) - Functions 1A, BL</span>
<b>Property Level Information Defined by Address/BBL</b>  

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <th>FROM</th>
    <th>TO</th>
  </tr>
  <tr>
    <td>Same as Regular Work Area 2 – Functions 1A, BL, BN</td>
    <td>246</td>
    <td>1</td>
    <td>246</td>
    <td></td>
  </tr>
  <tr>
    <td>Number of Buildings on Tax Lot</td>
    <td>4</td>
    <td>247</td>
    <td>250</td>
    <td>Maximum is 2,187</td>
  </tr>
  <tr>
    <td>LIST OF BUILDINGS ON TAX LOT: Variable length list of up to 2,187 entries; each is 8 bytes long, structured as follows:</td>
    <td>17496</td>
    <td>251</td>
    <td>17746</td>
    <td>Maximum of 2,187 entries, each 8 bytes long. 8 x 2,187 = 17,496</td>
  </tr>
  <tr>
    <td class="indentRows">TPAD BIN</td>
    <td>(7)</td>
    <td>(1)</td>
    <td>(7)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">TPAD BIN Status</td>
    <td>(1)</td>
    <td>(8)</td>
    <td>(8)</td>
    <td></td>
  </tr>
  <tr>
    <td>* End of 8-byte entry * </td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>4</td>
    <td>17747</td>
    <td>17750</td>
    <td></td>
  </tr>
</table>


## <span id="appendix13.7">Work Area 2 (COW) - Functions 1A, BL, BN Extended</span>

<b>Property Level Information Defined by Address, BBL or BIN</b>  

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <td>TO</td>
    <td>FROM</td>
  </tr>
  <tr>
    <td>Same as Regular Work Area 2 – Functions 1A, BL, BN</td>
    <td>246</td>
    <td>1</td>
    <td>246</td>
    <td></td>
  </tr>
  <tr>
    <td>Reason Code</td>
    <td>1</td>
    <td>247</td>
    <td>247</td>
    <td>Same as Work Area 1</td>
  </tr>
  <tr>
    <td>Reason Code Qualifier</td>
    <td>1</td>
    <td>248</td>
    <td>248</td>
    <td>Same as Work Area 1</td>
  </tr>
  <tr>
    <td>Warning Code</td>
    <td>2</td>
    <td>249</td>
    <td>250</td>
    <td>Not used</td>
  </tr>
  <tr>
    <td>Return Code (GRC)</td>
    <td>2</td>
    <td>251</td>
    <td>252</td>
    <td>Same as Work Area 1</td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>108</td>
    <td>253</td>
    <td>360</td>
    <td></td>
  </tr>
  <tr>
    <td>Number of Entries in List of Geographic Identifiers </td>
    <td>4</td>
    <td>361</td>
    <td>364</td>
    <td>Maximum number is 21</td>
  </tr>
  <tr>
    <td>LIST OF GEOGRAPHIC IDENTIFIERS: Variable length list of up to 21 entries; each is 116 bytes long, structured as follows:</td>
    <td>2436</td>
    <td>365</td>
    <td>2800</td>
    <td>Maximum of 21 entries, each 116 bytes long: 116 x 21 = 2,436</td>
  </tr>
  <tr>
    <td class="indentRows">Low House Number</td>
    <td> (16)</td>
    <td> (1)</td>
    <td> (16)</td>
    <td>Display format</td>
  </tr>
  <tr>
    <td class="indentRows">High House Number</td>
    <td> (16)</td>
    <td> (17)</td>
    <td> (32)</td>
    <td>Display format</td>
  </tr>
  <tr>
    <td class="indentRows">Borough Code</td>
    <td> (1)</td>
    <td> (33)</td>
    <td> (33)</td>
    <td>Start of B7SC</td>
  </tr>
  <tr>
    <td class="indentRows">5-Digit Street Code</td>
    <td> (5)</td>
    <td> (34)</td>
    <td> (38)</td>
    <td>Part of B7SC</td>
  </tr>
  <tr>
    <td class="indentRows">DCP-Preferred Local Group Code (LGC)</td>
    <td> (2)</td>
    <td> (39)</td>
    <td> (40)</td>
    <td>End of B7SC</td>
  </tr>
  <tr>
    <td class="indentRows">Building Identification Number (BIN)</td>
    <td> (7)</td>
    <td> (41)</td>
    <td> (47)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">Side of Street Indicator</td>
    <td> (1)</td>
    <td> (48)</td>
    <td> (48)</td>
    <td>L - Left, R - Right</td>
  </tr>
  <tr>
    <td class="indentRows">Geographic Identifier Entry Type Code</td>
    <td> (1)</td>
    <td> (49)</td>
    <td> (49)</td>
    <td>
    N - NAP (Simplex) <br>
    G - Complex NAP <br>
    X - Constituent Entity  of Complex NAP <br>
    B - NAUB <br>
    F - Frontage <br>
    W - Blank Wall <br>
    Q - Pseudo Address <br>
    T - Tunnel <br>
    U - Misc Structure <br>
    V - Vanity Address <br>
    O - Out-of-Sequence Addr <br>
    Blank - Normal
    </td>
  </tr>

  <tr>
    <td class="indentRows">TPAD BIN Status</td>
    <td> (1)</td>
    <td> (50)</td>
    <td> (50)</td>
    <td>TPAD Request</td>
  </tr>
  <tr>
    <td class="indentRows">Street Name (Principal Street Name)</td>
    <td> (32)</td>
    <td> (51)</td>
    <td> (82)</td>
    <td>Based on B7SCin Address List</td>
  </tr>
  <tr>
    <td class="indentRows">Filler</td>
    <td> (34)</td>
    <td> (83)</td>
    <td> (116)</td>
    <td></td>
  </tr>
  <tr>
    <td>* End of 116-byte entry * </td>
    <td colspan="4"></td>
  </tr>
  <tr>
    <td colspan="4">*** End of Work Area *** (2,800 bytes)</td>
    <td colspan="4"></td>
  </tr>
</table>  

## <span id="appendix13.8">Work Area 2 (COW) - Function 1B</span>

<b>Block Face Information Defined by Address Range Along a Street & <br>
Property Level Information Defined by Address</b>  

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <th>TO</th>
    <th>FROM</th>
  </tr>
  <tr>
    <th colspan="5">BLOCK FACE INFORMATION <br> (Based On Function 1E Extended)</th>
  </tr>
  <tr>
    <td>Internal Use</td>
    <td>21</td>
    <td>1</td>
    <td>21</td>
    <td></td>
  </tr>
  <tr>
    <td>Continuous Parity Indicator/Duplicate Address Indicator</td>
    <td>1</td>
    <td>22</td>
    <td>22</td>
    <td></td>
  </tr>
  <tr>
    <td>Low House Number of Block Face</td>
    <td>11</td>
    <td>23</td>
    <td>33</td>
    <td>Sort Format</td>
  </tr>
  <tr>
    <td>High House Number of Block Face</td>
    <td>11</td>
    <td>34</td>
    <td>44</td>
    <td>Sort Format</td>
  </tr>
  <tr>
    <td>DCP Preferred LGC</td>
    <td>2</td>
    <td>45</td>
    <td>46</td>
    <td></td>
  </tr>
  <tr>
    <td>Number of Cross Streets at Low Address End</td>
    <td>1</td>
    <td>47</td>
    <td>47</td>
    <td></td>
  </tr>
  <tr>
    <td>List of Cross Streets at Low Address End (Up to 5 B5SCs)</td>
    <td>30</td>
    <td>48</td>
    <td>77</td>
    <td>B5SC - Blank-Filled</td>
  </tr>
  <tr>
    <td>Number of Cross Streets at High Address End </td>
    <td>1</td>
    <td>78</td>
    <td>78</td>
    <td></td>
  </tr>
  <tr>
    <td>List of Cross Streets at High Address End (Up to 5 B5SCs)</td>
    <td>30</td>
    <td>79</td>
    <td>108</td>
    <td>B5SC - Blank-Filled</td>
  </tr>
  <tr>
    <td>LION KEY:</td>
    <td>10</td>
    <td>109</td>
    <td>118</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Borough Code</td>
    <td>1</td>
    <td>109</td>
    <td>109</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Face Code</td>
    <td>4</td>
    <td>110</td>
    <td>113</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Sequence Number</td>
    <td>5</td>
    <td>114</td>
    <td>118</td>
    <td></td>
  </tr>
  <tr>
    <td>Special Address Generated Record Flag</td>
    <td>1</td>
    <td>119</td>
    <td>119</td>
    <td></td>
  </tr>
  <tr>
    <td>Side of Street Indicator</td>
    <td>1</td>
    <td>120</td>
    <td>120</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Length in Feet</td>
    <td>5</td>
    <td>121</td>
    <td>125</td>
    <td></td>
  </tr>
  <tr>
    <td>Spatial X-Y Coordinates of Address</td>
    <td>14</td>
    <td>126</td>
    <td>139</td>
    <td></td>
  </tr>
  <tr>
    <td>Reserved for Possible Z Coordinate</td>
    <td>7</td>
    <td>140</td>
    <td>146</td>
    <td></td>
  </tr>
  <tr>
    <td>Community Development Eligibility Indicator </td>
    <td>1</td>
    <td>147</td>
    <td>147</td>
    <td></td>
  </tr>
  <tr>
    <td>Marble Hill/Rikers Island Alternative Borough Flag</td>
    <td>1</td>
    <td>148</td>
    <td>148</td>
    <td></td>
  </tr>
  <tr>
    <td>DOT Street Light Contractor Area</td>
    <td>1</td>
    <td>149</td>
    <td>149</td>
    <td></td>
  </tr>
  <tr>
    <td>COMMUNITY DISTRICT:</td>
    <td>3</td>
    <td>150</td>
    <td>152</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Community District Borough Code</td>
    <td>1</td>
    <td>150</td>
    <td>150</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Community District Number</td>
    <td>2</td>
    <td>151</td>
    <td>152</td>
    <td></td>
  </tr>
  <tr>
    <td>ZIP Code</td>
    <td>5</td>
    <td>153</td>
    <td>157</td>
    <td></td>
  </tr>
  <tr>
    <td>Election District</td>
    <td>3</td>
    <td>158</td>
    <td>160</td>
    <td></td>
  </tr>
  <tr>
    <td>Assembly District</td>
    <td>2</td>
    <td>161</td>
    <td>162</td>
    <td></td>
  </tr>
  <tr>
    <td>Split Election District Flag</td>
    <td>1</td>
    <td>163</td>
    <td>163</td>
    <td></td>
  </tr>
  <tr>
    <td>Congressional District</td>
    <td>2</td>
    <td>164</td>
    <td>165</td>
    <td></td>
  </tr>
  <tr>
    <td>State Senatorial District</td>
    <td>2</td>
    <td>166</td>
    <td>167</td>
    <td></td>
  </tr>
  <tr>
    <td>Civil Court District</td>
    <td>2</td>
    <td>168</td>
    <td>169</td>
    <td></td>
  </tr>
  <tr>
    <td>City Council District</td>
    <td>2</td>
    <td>170</td>
    <td>171</td>
    <td></td>
  </tr>
  <tr>
    <td>Health Center District</td>
    <td>2</td>
    <td>172</td>
    <td>173</td>
    <td></td>
  </tr>
  <tr>
    <td>Health Area</td>
    <td>4</td>
    <td>174</td>
    <td>177</td>
    <td></td>
  </tr>
  <tr>
    <td>Sanitation District</td>
    <td>3</td>
    <td>178</td>
    <td>180</td>
    <td></td>
  </tr>
  <tr>
    <td>Sanitation Collection Scheduling Section and Subsection</td>
    <td>2</td>
    <td>181</td>
    <td>182</td>
    <td></td>
  </tr>
  <tr>
    <td>Sanitation Regular Collection Schedule</td>
    <td>5</td>
    <td>183</td>
    <td>187</td>
    <td></td>
  </tr>
  <tr>
    <td>Sanitation Recycling Collection Schedule</td>
    <td>3</td>
    <td>188</td>
    <td>190</td>
    <td></td>
  </tr>
  <tr>
    <td>Police Patrol Borough Command</td>
    <td>1</td>
    <td>191</td>
    <td>191</td>
    <td></td>
  </tr>
  <tr>
    <td>Police Precinct</td>
    <td>3</td>
    <td>192</td>
    <td>194</td>
    <td></td>
  </tr>
  <tr>
    <td>Fire Division</td>
    <td>2</td>
    <td>195</td>
    <td>196</td>
    <td></td>
  </tr>
  <tr>
    <td>Fire Battalion</td>
    <td>2</td>
    <td>197</td>
    <td>198</td>
    <td></td>
  </tr>
  <tr>
    <td>Fire Company Type </td>
    <td>1</td>
    <td>199</td>
    <td>199</td>
    <td></td>
  </tr>
  <tr>
    <td>Fire Company Number</td>
    <td>3</td>
    <td>200</td>
    <td>202</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>1</td>
    <td>203</td>
    <td>203</td>
    <td>Was Split Community School District Flag</td>
  </tr>
  <tr>
    <td>Community School District</td>
    <td>2</td>
    <td>204</td>
    <td>205</td>
    <td></td>
  </tr>
  <tr>
    <td>Atomic Polygon</td>
    <td>3</td>
    <td>206</td>
    <td>208</td>
    <td>Was Dynamic Block</td>
  </tr>
  <tr>
    <td>Police Patrol Borough</td>
    <td>2</td>
    <td>209</td>
    <td>210</td>
    <td></td>
  </tr>
  <tr>
    <td>Feature Type Code</td>
    <td>1</td>
    <td>211</td>
    <td>211</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Type Code</td>
    <td>1</td>
    <td>212</td>
    <td>212</td>
    <td></td>
  </tr>
  <tr>
    <td>Alley or Cross Street List Flag</td>
    <td>1</td>
    <td>213</td>
    <td>213</td>
    <td>A - Alley Split X - Cross Street List Modified</td>
    <td></td>
  </tr>
  <tr>
    <td>Coincidence Segment Count</td>
    <td>1</td>
    <td>214</td>
    <td>214</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>3</td>
    <td>215</td>
    <td>217</td>
    <td></td>
  </tr>
  <tr>
    <td>1990 Census Tract</td>
    <td>6</td>
    <td>218</td>
    <td>223</td>
    <td></td>
  </tr>
  <tr>
    <td>2010 Census Tract</td>
    <td>6</td>
    <td>224</td>
    <td>229</td>
    <td></td>
  </tr>
  <tr>
    <td>2010 Census Block</td>
    <td>4</td>
    <td>230</td>
    <td>233</td>
    <td></td>
  </tr>
  <tr>
    <td>2010 Census Block Suffix</td>
    <td>1</td>
    <td>234</td>
    <td>234</td>
    <td>Not Implemented</td>
    <td></td>
  </tr>
  <tr>
    <td>2000 Census Tract</td>
    <td>6</td>
    <td>235</td>
    <td>240</td>
    <td></td>
  </tr>
  <tr>
    <td>2000 Census Block</td>
    <td>4</td>
    <td>241</td>
    <td>244</td>
    <td></td>
  </tr>
  <tr>
    <td>2000 Census Block Suffix</td>
    <td>1</td>
    <td>245</td>
    <td>245</td>
    <td></td>
  </tr>
  <tr>
    <td>Neighborhood Tabulation Area (NTA)</td>
    <td>4</td>
    <td>246</td>
    <td>249</td>
    <td></td>
  </tr>
  <tr>
    <td>DSNY Snow Priority Code</td>
    <td>1</td>
    <td>250</td>
    <td>250</td>
    <td>Dept. of Sanitation</td>
  </tr>
  <tr>
    <td>DSNY Organic Recycling Schedule</td>
    <td>5</td>
    <td>251</td>
    <td>255</td>
    <td>Dept. of Sanitation</td>
  </tr>
  <tr>
    <td>DSNY Bulk Pickup Schedule</td>
    <td>5</td>
    <td>256</td>
    <td>260</td>
    <td>Dept. of Sanitation</td>
  </tr>
  <tr>
    <td>Hurricane Evacuation Zone (HEZ)</td>
    <td>2</td>
    <td>261</td>
    <td>262</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>11</td>
    <td>263</td>
    <td>273</td>
    <td></td>
  </tr>
  <tr>
    <td>Underlying Address Number for NAPs</td>
    <td>11</td>
    <td>274</td>
    <td>284</td>
    <td>Sort Format</td>
  </tr>
  <tr>
    <td>Underlying B7SC</td>
    <td>8</td>
    <td>285</td>
    <td>292</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Identifier</td>
    <td>7</td>
    <td>293</td>
    <td>299</td>
    <td></td>
  </tr>
  <tr>
    <td>Curve Flag</td>
    <td>1</td>
    <td>300</td>
    <td>300</td>
    <td></td>
  </tr>
  <tr>
    <td>List of 4 LGC’s </td>
    <td>8</td>
    <td>301</td>
    <td>308</td>
    <td></td>
  </tr>
  <tr>
    <td>BOE LGC Pointer </td>
    <td>1</td>
    <td>309</td>
    <td>309</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Azimuth </td>
    <td>3</td>
    <td>310</td>
    <td>312</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Orientation</td>
    <td>1</td>
    <td>313</td>
    <td>313</td>
    <td></td>
  </tr>
  <tr>
    <td>SPATIAL COORDINATES OF SEGMENT:</td>
    <td>42</td>
    <td>314</td>
    <td>355</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> X Coordinate, Low Address End</td>
    <td>7</td>
    <td>314</td>
    <td>320</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Y Coordinate, Low Address End</td>
    <td>7</td>
    <td>321</td>
    <td>327</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Z Coordinate, Low Address End</td>
    <td>7</td>
    <td>328</td>
    <td>334</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td class="indentRows"> X Coordinate, High Address End</td>
    <td>7</td>
    <td>335</td>
    <td>341</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Y Coordinate, High Address End</td>
    <td>7</td>
    <td>342</td>
    <td>348</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Z Coordinate, High Address End</td>
    <td>7</td>
    <td>349</td>
    <td>355</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td>SPATIAL COORDINATES OF CENTER OF CURVATURE:</td>
    <td>21</td>
    <td>356</td>
    <td>376</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> X Coordinate </td>
    <td>7</td>
    <td>356</td>
    <td>362</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Y Coordinate </td>
    <td>7</td>
    <td>363</td>
    <td>369</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Z Coordinate </td>
    <td>7</td>
    <td>370</td>
    <td>376</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td>Radius of Circle</td>
    <td>7</td>
    <td>377</td>
    <td>383</td>
    <td></td>
  </tr>
  <tr>
    <td>Secant Location Related to Curve</td>
    <td>1</td>
    <td>384</td>
    <td>384</td>
    <td>L - Left, R - Right</td>
  </tr>
  <tr>
    <td>Angle to From Node – Beta Value</td>
    <td>5</td>
    <td>385</td>
    <td>389</td>
    <td>Beta & Alpha Used to Calculate Coordinates</td>
  </tr>
  <tr>
    <td>Angle to To Node – Alpha Value</td>
    <td>5</td>
    <td>390</td>
    <td>394</td>
    <td></td>
  </tr>
  <tr>
    <td>From LION Node ID</td>
    <td>7</td>
    <td>395</td>
    <td>401</td>
    <td></td>
  </tr>
  <tr>
    <td>To LION Node ID</td>
    <td>7</td>
    <td>402</td>
    <td>408</td>
    <td></td>
  </tr>
  <tr>
    <td>LION Key for Vanity Address</td>
    <td>10</td>
    <td>409</td>
    <td>418</td>
    <td></td>
  </tr>
  <tr>
    <td>Side of Street of Vanity Address</td>
    <td>1</td>
    <td>419</td>
    <td>419</td>
    <td></td>
  </tr>
  <tr>
    <td>Split Low House Number</td>
    <td>11</td>
    <td>420</td>
    <td>430</td>
    <td></td>
  </tr>
  <tr>
    <td>Traffic Direction</td>
    <td>1</td>
    <td>431</td>
    <td>431</td>
    <td></td>
  </tr>
  <tr>
    <td>Turn Restrictions</td>
    <td>10</td>
    <td>432</td>
    <td>441</td>
    <td></td>
  </tr>
  <tr>
    <td>Fraction for Curve Calculation</td>
    <td>3</td>
    <td>442</td>
    <td>444</td>
    <td></td>
  </tr>
  <tr>
    <td>Roadway Type</td>
    <td>2</td>
    <td>445</td>
    <td>446</td>
    <td></td>
  </tr>
  <tr>
    <td>Physical ID</td>
    <td>7</td>
    <td>447</td>
    <td>453</td>
    <td></td>
  </tr>
  <tr>
    <td>Generic ID</td>
    <td>7</td>
    <td>454</td>
    <td>460</td>
    <td></td>
  </tr>
  <tr>
    <td>NYPD ID</td>
    <td>7</td>
    <td>461</td>
    <td>467</td>
    <td></td>
  </tr>
  <tr>
    <td>FDNY ID</td>
    <td>7</td>
    <td>468</td>
    <td>474</td>
    <td></td>
  </tr>
  <tr>
    <td>Bike Lane 2</td>
    <td>2</td>
    <td>475</td>
    <td>476</td>
    <td></td>
  </tr>
  <tr>
    <td>Bike Traffic Direction</td>
    <td>2</td>
    <td>477</td>
    <td>478</td>
    <td></td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>3</td>
    <td>479</td>
    <td>481</td>
    <td>Was Blockface ID See bytes 730-739</td>
  </tr>
  <tr>
    <td>Street Status</td>
    <td>1</td>
    <td>482</td>
    <td>482</td>
    <td></td>
  </tr>
  <tr>
    <td>Street Width</td>
    <td>3</td>
    <td>483</td>
    <td>485</td>
    <td></td>
  </tr>
  <tr>
    <td>Street Width Irregular</td>
    <td>1</td>
    <td>486</td>
    <td>486</td>
    <td></td>
  </tr>
  <tr>
    <td>Bike Lane </td>
    <td>1</td>
    <td>487</td>
    <td>487</td>
    <td>Will be retired. See Bike Lane 2</td>
  </tr>
  <tr>
    <td>Federal Classification Code</td>
    <td>2</td>
    <td>488</td>
    <td>489</td>
    <td></td>
  </tr>
  <tr>
    <td>Right Of Way Type</td>
    <td>1</td>
    <td>490</td>
    <td>490</td>
    <td></td>
  </tr>
  <tr>
    <td>List of Second Set of 5 LGCs </td>
    <td>10</td>
    <td>491</td>
    <td>500</td>
    <td></td>
  </tr>
  <tr>
    <td>Legacy Segment ID</td>
    <td>7</td>
    <td>501</td>
    <td>507</td>
    <td></td>
  </tr>
  <tr>
    <td>From Preferred LGCs First Set of 5</td>
    <td>10</td>
    <td>508</td>
    <td>517</td>
    <td></td>
  </tr>
  <tr>
    <td>To Preferred LGCs First Set of 5</td>
    <td>10</td>
    <td>518</td>
    <td>527</td>
    <td></td>
  </tr>
  <tr>
    <td>From Preferred LGCs Second Set of 5</td>
    <td>10</td>
    <td>528</td>
    <td>537</td>
    <td></td>
  </tr>
  <tr>
    <td>To Preferred LGCs Second Set of 5</td>
    <td>10</td>
    <td>538</td>
    <td>547</td>
    <td></td>
  </tr>
  <tr>
    <td>No Cross Street Calculation Flag</td>
    <td>1</td>
    <td>548</td>
    <td>548</td>
    <td></td>
  </tr>
  <tr>
    <td>Individual Segment Length</td>
    <td>5</td>
    <td>549</td>
    <td>553</td>
    <td></td>
  </tr>
  <tr>
    <td>NTA Name</td>
    <td>75</td>
    <td>554</td>
    <td>628</td>
    <td></td>
  </tr>
  <tr>
    <td>USPS Preferred City Name</td>
    <td>25</td>
    <td>629</td>
    <td>653</td>
    <td></td>
  </tr>
  <tr>
    <td>Latitude</td>
    <td>9</td>
    <td>654</td>
    <td>662</td>
    <td></td>
  </tr>
  <tr>
    <td>Longitude</td>
    <td>11</td>
    <td>663</td>
    <td>673</td>
    <td></td>
  </tr>
  <tr>
  <td>
    From Actual Segment Node ID</td>
  <td>7</td>
  <td>674</td>
  <td>680</td>
  <td></td>
</tr>
<tr>
  <td>
    To Actual Segment Node ID</td>
  <td>7</td>
  <td>681</td>
  <td>687</td>
  <td></td>
</tr>
<tr>
  <td>
    SPATIAL COORDINATES OF ACTUAL SEGMENT:</td>
  <td>42</td>
  <td>688</td>
  <td>729</td>
  <td></td>
</tr>
<tr>
  <td>
    X Coordinate, Low Address End</td>
  <td>7</td>
  <td>688</td>
  <td>694</td>
  <td>Actual From Node</td>
</tr>
<tr>
  <td>
    Y Coordinate, Low Address End</td>
  <td>7</td>
  <td>695</td>
  <td>701</td>
  <td></td>
</tr>
<tr>
  <td>
    Z Coordinate, Low Address End</td>
  <td>7</td>
  <td>702</td>
  <td>708</td>
  <td>Not Implemented</td>
</tr>
<tr>
  <td>
    X Coordinate, High Address End</td>
  <td>7</td>
  <td>709</td>
  <td>715</td>
  <td>Actual To Node</td>
</tr>
<tr>
  <td>
    Y Coordinate, High Address End</td>
  <td>7</td>
  <td>716</td>
  <td>722</td>
  <td></td>
</tr>
<tr>
  <td>
    Z Coordinate, High Address End</td>
  <td>7</td>
  <td>723</td>
  <td>729</td>
  <td>Not Implemented</td>
</tr>
<tr>
  <td>
    Blockface ID</td>
  <td>10</td>
  <td>730</td>
  <td>739</td>
  <td></td>
</tr>
<tr>
  <td>
    Number of Travel Lanes on the Street</td>
  <td>2</td>
  <td>740</td>
  <td>741</td>
  <td></td>
</tr>
<tr>
  <td>
    Number of Parking Lanes on the Street</td>
  <td>2</td>
  <td>742</td>
  <td>743</td>
  <td></td>
</tr>
<tr>
  <td>
    Number of Total Lanes on the Street</td>
  <td>2</td>
  <td>744</td>
  <td>745</td>
  <td></td>
</tr>
<tr>
  <td>
    Street Width Maximum</td>
  <td>3</td>
  <td>746</td>
  <td>748</td>
  <td></td>
</tr>
<tr>
  <td>
    Speed Limit
  </td>
  <td>
    2
  </td>
  <td>
    749
  </td>
  <td>
    750
  </td>
  <td></td>
</tr>

<tr>
  <td>
    PUMA Code
  </td>
    <td>
    5
  </td>
  <td>
    751
  </td>
  <td>
    755
  </td>
  <td></td>
</tr>

<tr>
  <td>
    Police Sector
  </td>
    <td>
    4
  </td>
  <td>
    756
  </td>
  <td>
    759
  </td>
  <td></td>
</tr>
<tr>
  <td>
    Police Service Area
  </td>
    <td>
    1
  </td>
  <td>
    760
  </td>
  <td>
    760
  </td>
  <td></td>
</tr>
<tr>
  <td>
    Filler</td>
  <td>240</td>
  <td>761</td>
  <td>1000</td>
  <td></td>
</tr>
<tr>
  <td>
    Reason Code</td>
  <td>1</td>
  <td>1001</td>
  <td>1001</td>
  <td></td>
</tr>
<tr>
  <td>
    Reason Code Qualifier</td>
  <td>1</td>
  <td>1002</td>
  <td>1002</td>
  <td></td>
</tr>
<tr>
  <td>
    Warning Code</td>
  <td>2</td>
  <td>1003</td>
  <td>1004</td>
  <td></td>
</tr>
<tr>
  <td>
    Return Code</td>
  <td>2</td>
  <td>1005</td>
  <td>1006</td>
  <td></td>
</tr>
<tr>
  <td>
    Number of Cross Streets at Low Address End</td>
  <td>1</td>
  <td>1007</td>
  <td>1007</td>
  <td></td>
</tr>
<tr>
  <td>
    List of Cross Streets at Low Address End (Up to 5 B7SCs)</td>
  <td>40</td>
  <td>1008</td>
  <td>1047</td>
  <td>B7SC - Blank Filled</td>
</tr>
<tr>
  <td>
    No. of Cross Streets at High Address End </td>
  <td>1</td>
  <td>1048</td>
  <td>1048</td>
  <td></td>
</tr>
<tr>
  <td>
    List of Cross Streets at High Address End (Up to 5 B7SCs)</td>
  <td>40</td>
  <td>1049</td>
  <td>1088</td>
  <td>B7SC - Blank Filled</td>
</tr>
<tr>
  <td>
    List of Cross Street Names at Low Address End</td>
  <td>160</td>
  <td>1089</td>
  <td>1248</td>
  <td>5 x 32 = 160 Up to 5 Street Names</td>
</tr>
<tr>
  <td>
    List of Cross Street Names at High Address End</td>
  <td>160</td>
  <td>1249</td>
  <td>1408</td>
  <td>5 x 32 = 160 Up to 5 Street Names</td>
</tr>
<tr>
  <td>
    BOE Preferred B7SC</td>
  <td>8</td>
  <td>1409</td>
  <td>1416</td>
  <td></td>
</tr>
<tr>
  <td>
    BOE Preferred Street Name</td>
  <td>32</td>
  <td>1417</td>
  <td>1448</td>
  <td></td>
</tr>
<tr>
  <td>
    Filler</td>
  <td>52</td>
  <td>1449</td>
  <td>1500</td>
  <td></td>
</tr>
<tr>
  <td colspan="5"><center>PROPERTY LEVEL INFORMATION <br> (Based On Functions 1A, BL, BN Extended)</center></td>
</tr>
<tr>
  <td>
    Internal Use </td>
  <td>21</td>
  <td>1501</td>
  <td>1521</td>
  <td></td>
</tr>
<tr>
  <td>
    Continuous Parity Indicator / Duplicate Address Indicator</td>
  <td>1</td>
  <td>1522</td>
  <td>1522</td>
  <td></td>
</tr>
<tr>
  <td>
    Low House Number of Defining Address Range</td>
  <td>11</td>
  <td>1523</td>
  <td>1533</td>
  <td>Sort Format</td>
</tr>
<tr>
  <td>
    BOROUGH BLOCK LOT (BBL):</td>
  <td>10</td>
  <td>1534</td>
  <td>1543</td>
  <td>Billing BBL if Condo</td>
</tr>
<tr>
  <td class="indentRows">
    Borough Code</td>
  <td>1</td>
  <td>1534</td>
  <td>1534</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    Tax Block</td>
  <td>5</td>
  <td>1535</td>
  <td>1539</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    Tax Lot</td>
  <td>4</td>
  <td>1540</td>
  <td>1543</td>
  <td></td>
</tr>
<tr>
  <td>
    Filler for Tax Lot Version Number</td>
  <td>1</td>
  <td>1544</td>
  <td>1544</td>
  <td>Not Implemented</td>
</tr>
<tr>
  <td>
    RPAD Self-Check Code (SCC) for BBL</td>
  <td>1</td>
  <td>1545</td>
  <td>1545</td>
  <td></td>
</tr>
<tr>
  <td>
    Filler</td>
  <td>1</td>
  <td>1546</td>
  <td>1546</td>
  <td></td>
</tr>
<tr>
  <td>
    RPAD Building Classification Code</td>
  <td>2</td>
  <td>1547</td>
  <td>1548</td>
  <td></td>
</tr>
<tr>
  <td>
    Corner Code</td>
  <td>2</td>
  <td>1549</td>
  <td>1550</td>
  <td></td>
</tr>
<tr>
  <td>
    Number of Existing Structures on Lot</td>
  <td>4</td>
  <td>1551</td>
  <td>1554</td>
  <td></td>
</tr>
<tr>
  <td>
    Number of Street Frontages of Lot</td>
  <td>2</td>
  <td>1555</td>
  <td>1556</td>
  <td></td>
</tr>
<tr>
  <td>
    Interior Lot Flag</td>
  <td>1</td>
  <td>1557</td>
  <td>1557</td>
  <td></td>
</tr>
<tr>
  <td>
    Vacant Lot Flag</td>
  <td>1</td>
  <td>1558</td>
  <td>1558</td>
  <td></td>
</tr>
<tr>
  <td>
    Irregularly-Shaped Lot Flag</td>
  <td>1</td>
  <td>1559</td>
  <td>1559</td>
  <td></td>
</tr>
<tr>
  <td>
    Marble Hill/Rikers Island Alternate Borough Flag</td>
  <td>1</td>
  <td>1560</td>
  <td>1560</td>
  <td></td>
</tr>
<tr>
  <td>
    List of Geographic Identifiers Overflow Flag</td>
  <td>1</td>
  <td>1561</td>
  <td>1561</td>
  <td>When = 'E', there are more than 21 addrs for Fn 1B (based on Fn 1A)</td>
</tr>
<tr>
  <td>
    STROLLING KEY:</td>
  <td>19</td>
  <td>1562</td>
  <td>1580</td>
  <td>Not Implemented</td>
</tr>
<tr>
  <td class="indentRows">
    Borough</td>
  <td>1</td>
  <td>1562</td>
  <td>1562</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    5-Digit Street Code of ON- Street</td>
  <td>5</td>
  <td>1563</td>
  <td>1567</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    Side of Street Indicator</td>
  <td>1</td>
  <td>1568</td>
  <td>1568</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    High House Number</td>
  <td>11</td>
  <td>1569</td>
  <td>1579</td>
  <td>Sort Format</td>
</tr>
<tr>
  <td class="indentRows">
    Filler</td>
  <td>1</td>
  <td>1580</td>
  <td>1580</td>
  <td></td>
</tr>
<tr>
  <td>
    Reserved for Internal Use</td>
  <td>1</td>
  <td>1581</td>
  <td>1581</td>
  <td></td>
</tr>
<tr>
  <td>
    Building Identification Number (BIN) of Input Address or NAP</td>
  <td>7</td>
  <td>1582</td>
  <td>1588</td>
  <td></td>
</tr>
<tr>
  <td>
    Condominium Flag</td>
  <td>1</td>
  <td>1589</td>
  <td>1589</td>
  <td>If condo, = ‘C’</td>
</tr>
<tr>
  <td>
    Filler</td>
  <td>1</td>
  <td>1590</td>
  <td>1590</td>
  <td></td>
</tr>
<tr>
  <td>
    DOF Condominium Identification Number</td>
  <td>4</td>
  <td>1591</td>
  <td>1594</td>
  <td></td>
</tr>
<tr>
  <td>
    Condominium Unit ID Number</td>
  <td>7</td>
  <td>1595</td>
  <td>1601</td>
  <td>Not Implemented</td>
</tr>
<tr>
  <td>
    Condominium Billing BBL</td>
  <td>10</td>
  <td>1602</td>
  <td>1611</td>
  <td></td>
</tr>
<tr>
  <td>
    Filler - Tax Lot Version No. Billing BBL</td>
  <td>1</td>
  <td>1612</td>
  <td>1612</td>
  <td>Not Implemented</td>
</tr>
<tr>
  <td>
    Self-Check Code (SCC) of Billing BBL</td>
  <td>1</td>
  <td>1613</td>
  <td>1613</td>
  <td></td>
</tr>
<tr>
  <td>
    Low BBL of this Building’s Condominium Units</td>
  <td>10</td>
  <td>1614</td>
  <td>1623</td>
  <td></td>
</tr>
<tr>
  <td>
    Filler - Tax Lot Version No. of Low BBL</td>
  <td>1</td>
  <td>1624</td>
  <td>1624</td>
  <td>Not Implemented</td>
</tr>
<tr>
  <td>
    High BBL of this Building’s Condominium Units</td>
  <td>10</td>
  <td>1625</td>
  <td>1634</td>
  <td></td>
</tr>
<tr>
  <td>
    Filler - Tax Log Version No. of High BBL</td>
  <td>1</td>
  <td>1635</td>
  <td>1635</td>
  <td>Not Implemented</td>
</tr>
<tr>
  <td>
    Filler</td>
  <td>15</td>
  <td>1636</td>
  <td>1650</td>
  <td></td>
</tr>
<tr>
  <td>
    Cooperative ID Number</td>
  <td>4</td>
  <td>1651</td>
  <td>1654</td>
  <td></td>
</tr>
<tr>
  <td>
    SBVP (SANBORN MAP IDENTIFIER):</td>
  <td>8</td>
  <td>1655</td>
  <td>1662</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    Sanborn Borough Code </td>
  <td>1</td>
  <td>1655</td>
  <td>1655</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    Volume Number</td>
  <td>2</td>
  <td>1656</td>
  <td>1657</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    Volume Number Suffix</td>
  <td>1</td>
  <td>1658</td>
  <td>1658</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    Page Number </td>
  <td>3</td>
  <td>1659</td>
  <td>1661</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    Page Number Suffix</td>
  <td>1</td>
  <td>1662</td>
  <td>1662</td>
  <td></td>
</tr>
<tr>
  <td>
    DCP Commercial Study Area</td>
  <td>5</td>
  <td>1663</td>
  <td>1667</td>
  <td></td>
</tr>
<tr>
  <td>
    Tax Map Number Section & Volume</td>
  <td>5</td>
  <td>1668</td>
  <td>1672</td>
  <td></td>
</tr>
<tr>
  <td>
    Reserved for Tax Map Page Number</td>
  <td>4</td>
  <td>1673</td>
  <td>1676</td>
  <td>Not Implemented</td>
</tr>
<tr>
  <td>
    Filler</td>
  <td>3</td>
  <td>1677</td>
  <td>1679</td>
  <td></td>
</tr>
<tr>
  <td>
    Latitude</td>
  <td>9</td>
  <td>1680</td>
  <td>1688</td>
  <td></td>
</tr>
<tr>
  <td>
    Longitude</td>
  <td>11</td>
  <td>1689</td>
  <td>1699</td>
  <td></td>
</tr>
<tr>
  <td>
    X-Y Coordinates of Lot Centroid</td>
  <td>14</td>
  <td>1700</td>
  <td>1713</td>
  <td></td>
</tr>
<tr>
  <td>
    Business Improvement District (BID)</td>
  <td>6</td>
  <td>1714</td>
  <td>1719</td>
  <td></td>
</tr>
<tr>
  <td>
    TPAD BIN Status</td>
  <td>1</td>
  <td>1720</td>
  <td>1720</td>
  <td>TPAD Request</td>
</tr>
<tr>
  <td>
    TPAD New BIN</td>
  <td>7</td>
  <td>1721</td>
  <td>1727</td>
  <td>TPAD Request</td>
</tr>
<tr>
  <td>
    TPAD New BIN Status</td>
  <td>1</td>
  <td>1728</td>
  <td>1728</td>
  <td>TPAD Request</td>
</tr>
<tr>
  <td>
    TPAD Conflict Flag</td>
  <td>1</td>
  <td>1729</td>
  <td>1729</td>
  <td>TPAD Request</td>
</tr>
<tr>
  <td>
    DCP Zoning Map
  </td>
  <td>
    3
  </td>
  <td>
    1730
  </td>
  <td>
    1732
  </td>
  <td></td>
</tr>
<tr>
  <td>
    Filler</td>
  <td>6</td>
  <td>1733</td>
  <td>1738</td>
  <td></td>
</tr>
<tr>
  <td>
    Internal Use </td>
  <td>8</td>
  <td>1739</td>
  <td>1746</td>
  <td></td>
</tr>
<tr>
  <td>
    Reason Code</td>
  <td>1</td>
  <td>1747</td>
  <td>1747</td>
  <td></td>
</tr>
<tr>
  <td>
    Reason Code Qualifier</td>
  <td>1</td>
  <td>1748</td>
  <td>1748</td>
  <td></td>
</tr>
<tr>
  <td>
    Warning Code</td>
  <td>2</td>
  <td>1749</td>
  <td>1750</td>
  <td></td>
</tr>
<tr>
  <td>
    Return Code</td>
  <td>2</td>
  <td>1751</td>
  <td>1752</td>
  <td></td>
</tr>
<tr>
  <td>
    Filler</td>
  <td>108</td>
  <td>1753</td>
  <td>1860</td>
  <td></td>
</tr>
<tr>
  <td>
    Number of Entries in List of Geographic Identifiers</td>
  <td>4</td>
  <td>1861</td>
  <td>1864</td>
  <td>Maximum is 21</td>
</tr>
<tr>
  <td>LIST OF GEOGRAPHIC IDENTIFIERS: Variable length list of up to 21 entries; each is 116 bytes long, structured as follows: </td>
  <td>2436</td>
  <td>1865</td>
  <td>4300</td>
  <td>Maximum is 21 entries. 21 x 116 = 2436</td>
</tr>
<tr>
  <td class="indentRows">Low House Number</td>
  <td>16</td>
  <td> (1)</td>
  <td> (16)</td>
  <td>Display format</td>
</tr>
<tr>
  <td class="indentRows">
    High House Number</td>
  <td>16</td>
  <td> (17)</td>
  <td> (32)</td>
  <td>Display format</td>
</tr>
<tr>
  <td class="indentRows">
    Borough Code</td>
  <td>1</td>
  <td> (33)</td>
  <td> (33)</td>
  <td>Start of B7SC</td>
</tr>
<tr>
  <td class="indentRows">
    5-Digit Street Code</td>
  <td>5</td>
  <td> (34)</td>
  <td> (38)</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    DCP-Preferred Local Group Code (LGC)</td>
  <td>2</td>
  <td> (39)</td>
  <td> (40)</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    Building Identification Number</td>
  <td>7</td>
  <td> (41)</td>
  <td> (47)</td>
  <td></td>
</tr>
<tr>
  <td class="indentRows">
    Side of Street Indicator</td>
  <td>1</td>
  <td> (48)</td>
  <td> (48)</td>
  <td>L - Left, R - Right</td>
</tr>
<tr>
<td class="indentRows">Geographic Identifier Entry Type Code</td>
<td>1</td>
<td>(49)</td>
<td>(49)</td>
<td>N - NAP (Simplex)<br>
G - Complex NAP<br>
X - Constituent Entity of
      Complex NAP<br>
B - NAUB<br>
F - Frontage <br>
W - Blank Wall  <br>
Q - Pseudo Address  <br>
T - Tunnel<br>
U - Misc. Structure<br>
V - Vanity Address  <br>
O - Out-of-Sequence
      Address <br>
Blank – Normal</td>
</tr>
<tr>
<td class="indentRows">TPAD BIN Status</td>
<td>1</td>
<td>(50)</td>
<td>(50)</td>
<td>TPAD Request</td>
</tr>
<td class="indentRows">Street Name</td>
<td>32</td>
<td>(51)</td>
<td>(82)</td>
<td></td>
</tr>
<td class="indentRows">Filler</td>
<td>34</td>
<td>(83)</td>
<td>(116)</td>
<td></td>
</tr>
<td>* End of 116-byte entry * </td>
<td colspan="4"></td>
</tr>
<td colspan="4">*** End of Work Area ***  (4,300 bytes)</td>
<td></td>
</tr>
</table>


## <span id="appendix13.9">Work Area 2 (COW) - Function AP</span>

<b>Address Point Information Defined by Address</b>

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <td>FROM</td>
    <td>TO</td>
  </tr>
  <tr>
    <td>
      Internal Use</td>
    <td>21</td>
    <td>1</td>
    <td>21</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Continuous Parity Indicator /Duplicate Address Indicator</td>
    <td>1</td>
    <td>22</td>
    <td>22</td>
  </tr>
  <tr>
    <td>
      Low House Number of Defining Address Range</td>
    <td>11</td>
    <td>23</td>
    <td>33</td>
    <td>Sort Format</td>
  </tr>
  <tr>
    <td>
      BOROUGH BLOCK LOT (BBL):</td>
    <td>10</td>
    <td>34</td>
    <td>43</td>
    <td>Billing BBL if Condo</td>
  </tr>
  <tr>
    <td class="indentRows">
      Borough Code</td>
    <td>1</td>
    <td>34</td>
    <td>34</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">
      Tax Block</td>
    <td>5</td>
    <td>35</td>
    <td>39</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">
      Tax Lot</td>
    <td>4</td>
    <td>40</td>
    <td>43</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Filler</td>
    <td>7</td>
    <td>44</td>
    <td>50</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Number of Existing Structures on Lot</td>
    <td>4</td>
    <td>51</td>
    <td>54</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Filler</td>
    <td>26</td>
    <td>55</td>
    <td>80</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Reserved for Internal Use</td>
    <td>1</td>
    <td>81</td>
    <td>81</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Building Identification Number (BIN) of Input Address or NAP</td>
    <td>7</td>
    <td>82</td>
    <td>88</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Condominium Flag</td>
    <td>1</td>
    <td>89</td>
    <td>89</td>
    <td>If condo, = 'C'</td>
  </tr>
  <tr>
    <td>
      Filler</td>
    <td>1</td>
    <td>90</td>
    <td>90</td>
    <td></td>
  </tr>
  <tr>
    <td>
      DOF Condominium Identification Number</td>
    <td>4</td>
    <td>91</td>
    <td>94</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Filler</td>
    <td>7</td>
    <td>95</td>
    <td>101</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Condominium Billing BBL</td>
    <td>10</td>
    <td>102</td>
    <td>111</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Filler - Tax Lot Version No. for Billing BBL</td>
    <td>1</td>
    <td>112</td>
    <td>112</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td>
      Filler</td>
    <td>1</td>
    <td>113</td>
    <td>113</td>
    <td></td>
  </tr>
  <tr>
    <td>
      LOW BBL OF THIS BUILDING�S CONDOMINIUM UNITS:</td>
    <td>10</td>
    <td>114</td>
    <td>123</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">
      Borough Code</td>
    <td>1</td>
    <td>114</td>
    <td>114</td>
    <td>Condo</td>
  </tr>
  <tr>
    <td class="indentRows">
      Tax Block</td>
    <td>5</td>
    <td>115</td>
    <td>119</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">
      Tax Lot</td>
    <td>4</td>
    <td>120</td>
    <td>123</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Filler for Tax Lot Version No. of Low BBL</td>
    <td>1</td>
    <td>124</td>
    <td>124</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td>
      HIGH BBL OF THIS BUILDING�S CONDOMINIUM UNITS:</td>
    <td>10</td>
    <td>125</td>
    <td>134</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">
      Borough Code</td>
    <td>1</td>
    <td>125</td>
    <td>125</td>
    <td>Condo</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">
      Tax Block</td>
    <td>5</td>
    <td>126</td>
    <td>130</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">
      Tax Lot</td>
    <td>4</td>
    <td>131</td>
    <td>134</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Filler for Tax Lot Version No. of High BBL</td>
    <td>1</td>
    <td>135</td>
    <td>135</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td>
      Filler</td>
    <td>15</td>
    <td>136</td>
    <td>150</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Cooperative ID Number</td>
    <td>4</td>
    <td>151</td>
    <td>154</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Filler</td>
    <td>22</td>
    <td>155</td>
    <td>176</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Filler</td>
    <td>3</td>
    <td>177</td>
    <td>179</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Latitude</td>
    <td>9</td>
    <td>180</td>
    <td>188</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Longitude</td>
    <td>11</td>
    <td>189</td>
    <td>199</td>
    <td></td>
  </tr>
  <tr>
    <td>
      <b>X-Y Coordinates of Address Point</b></td>
    <td>14</td>
    <td>200</td>
    <td>213</td>
    <td></td>
  </tr>
  <tr>
    <td>
      Filler</td>
    <td>16</td>
    <td>214</td>
    <td>229</td>
    <td></td>
  </tr>
  <tr>
    <td>
      <b>Address Point ID</b></td>
    <td>9</td>
    <td>230</td>
    <td>238</td>
    <td></td>
  </tr>
  <tr>
    <td>
      List of 4 LGCs - Internal Use</td>
    <td>8</td>
    <td>239</td>
    <td>246</td>
    <td>Internal Use</td>
  </tr>
  <tr>
    <td>
      Number of Entries in List of Geographic Identifiers</td>
    <td>4</td>
    <td>247</td>
    <td>250</td>
    <td>For Fn AP # is '0001'. Always '0001'</td>
    <td></td>
  </tr>
  <tr>
    <td>
      LIST OF GEOGRAPHIC IDENTIFIERS: For Function AP, the list contains one entry. Variable length list of up to 21 entries, each is 53 bytes long, structured as follows:</td>
    <td>1113</td>
    <td>251</td>
    <td>1363</td>
    <td>For Function AP - there is only 1 entry. (Potential Max of 21) 21x53 = 1,113</td>
  </tr>
  <tr>
    <td class="indentRows">
      Low House Number</td>
    <td> (16)</td>
    <td> (1)</td>
    <td> (16)</td>
    <td>Display format</td>
  </tr>
  <tr>
    <td class="indentRows">
      High House Number</td>
    <td> (16)</td>
    <td> (17)</td>
    <td> (32)</td>
    <td>Display format</td>
  </tr>
  <tr>
    <td class="indentRows">
      Borough Code</td>
    <td> (1)</td>
    <td> (33)</td>
    <td> (33)</td>
    <td>Start of B7SC</td>
  </tr>
  <tr>
    <td class="indentRows">
      5-Digit Street Code</td>
    <td> (5)</td>
    <td> (34)</td>
    <td> (38)</td>
    <td>Part of B7SC</td>
  </tr>
  <tr>
    <td class="indentRows">
      DCP-Preferred Local Group Code (LGC)</td>
    <td> (2)</td>
    <td> (39)</td>
    <td> (40)</td>
    <td>End of B7SC</td>
  </tr>
  <tr>
    <td class="indentRows">
      Building Identification Number (BIN) </td>
    <td> (7)</td>
    <td> (41)</td>
    <td> (47)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">
      Side of Street Indicator</td>
    <td> (1)</td>
    <td> (48)</td>
    <td> (48)</td>
    <td>L - Left, R - Right</td>
  </tr>
  <tr>
    <td class="indentRows">
      Geographic Identifier Entry Type Code</td>
    <td> (1)</td>
    <td> (49)</td>
    <td> (49)</td>
    <td>V - Vanity Address Blank - Normal</td>
  </tr>
  <tr>
    <td>Filler</td>
    <td> (4)</td>
    <td> (50)</td>
    <td> (53)</td>
    <td></td>
  </tr>
  <tr>
    <td> * End of 53-byte entry * </td>
    <td colspan="4"></td>
  </tr>
  <tr>
    <td>
      *** End of Work Area *** (1,363 bytes)</td>
    <td colspan="4"></td>
  </tr>
</table>  

## <span id="appendix13.10">Work Area 2 (COW) - Function AP Extended</span>

<b>Address Point Information Defined by Address</b>  

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">FROM</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
      <th>FROM</th>
      <th>TO</th>
  </tr>
  <tr>
    <td>Same as Regular Work Area 2 – Function AP</td>
    <td>1</td>
    <td>1</td>
    <td>246</td>
    <td></td>
  </tr>
  <tr>
    <td>Reason Code</td>
    <td>1</td>
    <td>247</td>
    <td>247</td>
    <td>Same as Work Area 1</td>
  </tr>
  <tr>
    <td>Reason Code Qualifier</td>
    <td>1</td>
    <td>248</td>
    <td>248</td>
    <td>Same as Work Area 1</td>
  </tr>
  <tr>
    <td>Warning Code</td>
    <td>2</td>
    <td>249</td>
    <td>250</td>
    <td>Not used</td>
  </tr>
  <tr>
    <td>Return Code (GRC)</td>
    <td>2</td>
    <td>251</td>
    <td>252</td>
    <td>Same as Work Area 1</td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>108</td>
    <td>253</td>
    <td>360</td>
    <td></td>
  </tr>
  <tr>
    <td>Number of Entries in List of Geographic Identifiers </td>
    <td>4</td>
    <td>361</td>
    <td>364</td>
    <td>Fn APX # is '0001' Always '0001'</td>
  </tr>
  <tr>
    <td>LIST OF GEOGRAPHIC IDENTIFIERS: For Function APX, the list contains one entry Variable length list of up to 21 entries; there is only 1 entry. each is 116 bytes long, structured as follows:</td>
    <td>2436</td>
    <td>365</td>
    <td>2800</td>
    <td>For Function APX – 21 x 116 = 2,436</td>
  </tr>
  <tr>
    <td class="indentRows"> Low House Number</td>
    <td>(16)</td>
    <td>(1)</td>
    <td>(16)</td>
    <td>Display format</td>
  </tr>
  <tr>
    <td class="indentRows"> High House Number</td>
    <td>(16)</td>
    <td>(17)</td>
    <td>(32)</td>
    <td>Display format</td>
  </tr>
  <tr>
    <td class="indentRows"> Borough Code</td>
    <td>(1)</td>
    <td>(33)</td>
    <td>(33)</td>
    <td>Start of B7SC</td>
  </tr>
  <tr>
    <td class="indentRows"> 5-Digit Street Code</td>
    <td>(5)</td>
    <td>(34)</td>
    <td>(38)</td>
    <td>Part of B7SC</td>
  </tr>
  <tr>
    <td class="indentRows"> DCP-Preferred Local Group Code (LGC)</td>
    <td>(2)</td>
    <td>(39)</td>
    <td>(40)</td>
    <td>End of B7SC</td>
  </tr>
  <tr>
    <td class="indentRows"> Building Identification Number (BIN)</td>
    <td>(7)</td>
    <td>(41)</td>
    <td>(47)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Side of Street Indicator</td>
    <td>(1)</td>
    <td>(48)</td>
    <td>(48)</td>
    <td>L - Left, R - Right</td>
  </tr>
  <tr>
    <td class="indentRows"> Geographic Identifier Entry Type Code</td>
    <td>(1)</td>
    <td>(49)</td>
    <td>(49)</td>
    <td>V - Vanity Address Blank - Normal</td>
  </tr>
  <tr>
    <td class="indentRows"> Filler</td>
    <td>(1)</td>
    <td>(50)</td>
    <td>(50)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Street Name (Principal Street Name)</td>
    <td>(32)</td>
    <td>(51)</td>
    <td>(82)</td>
    <td>Based on B7SC in Address List</td>
  </tr>
  <tr>
    <td> Filler</td>
    <td>(34)</td>
    <td>(83)</td>
    <td>(116)</td>
    <td></td>
  </tr>
  <tr>
    <td>* End of 116-byte entry * </td>
    <td colspan="4"></td>
  </tr>
  <tr>
    <td>*** End of Work Area *** (2,800 bytes)</td>
    <td colspan="4"></td>
  </tr>
</table>

## <span id="appendix13.11">Work Area 2 (COW) - Function 2</span>

<b>Intersection Defined by Two Intersecting Streets</b>   

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <td>FROM</td>
    <td>TO</td>
  </tr>
  <tr>
    <td>Internal Use</td>
    <td>21</td>
    <td>1</td>
    <td>21</td>
    <td></td>
  </tr>
  <tr>
    <td>Intersection Replication Counter</td>
    <td>1</td>
    <td>22</td>
    <td>22</td>
    <td></td>
  </tr>
  <tr>
    <td>DCP-Preferred LGC for Street 1</td>
    <td>2</td>
    <td>23</td>
    <td>24</td>
    <td></td>
  </tr>
  <tr>
    <td>DCP-Preferred LGC for Street 2</td>
    <td>2</td>
    <td>25</td>
    <td>26</td>
    <td></td>
  </tr>
  <tr>
    <td>Number of Intersecting Streets</td>
    <td>1</td>
    <td>27</td>
    <td>27</td>
    <td></td>
  </tr>
  <tr>
    <td>List of Intersecting Streets (Up to five B5SCs, 6 bytes each)</td>
    <td>30</td>
    <td>28</td>
    <td>57</td>
    <td></td>
  </tr>
  <tr>
    <td>Compass Direction for Intersection Key or Counter for Multiple Intersections</td>
    <td>1</td>
    <td>58</td>
    <td>58</td>
    <td></td>
  </tr>
  <tr>
    <td>Atomic Polygon</td>
    <td>3</td>
    <td>59</td>
    <td>61</td>
    <td>Was Dynamic Block</td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>2</td>
    <td>62</td>
    <td>63</td>
    <td></td>
  </tr>
  <tr>
    <td>LION Node Number</td>
    <td>7</td>
    <td>64</td>
    <td>70</td>
    <td></td>
  </tr>
  <tr>
    <td>SPATIAL COORDINATES:</td>
    <td>21</td>
    <td>71</td>
    <td>91</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> X Coordinate</td>
    <td>7</td>
    <td>71</td>
    <td>77</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Y Coordinate</td>
    <td>7</td>
    <td>78</td>
    <td>84</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Reserved for possible Z Coordinate</td>
    <td>7</td>
    <td>85</td>
    <td>91</td>
    <td></td>
  </tr>
  <tr>
    <td>SBVP1 (SANBORN MAP IDENTIFIER):</td>
    <td>8</td>
    <td>92</td>
    <td>99</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Borough Code</td>
    <td>1</td>
    <td>92</td>
    <td>92</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Volume Number</td>
    <td>2</td>
    <td>93</td>
    <td>94</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Volume Number Suffix</td>
    <td>1</td>
    <td>95</td>
    <td>95</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Page Number</td>
    <td>3</td>
    <td>96</td>
    <td>98</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Page Number Suffix</td>
    <td>1</td>
    <td>99</td>
    <td>99</td>
    <td></td>
  </tr>
  <tr>
    <td>SBVP2 (SANBORN MAP IDENTIFIER):</td>
    <td>8</td>
    <td>100</td>
    <td>107</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Borough Code</td>
    <td>1</td>
    <td>100</td>
    <td>100</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Volume Number</td>
    <td>2</td>
    <td>101</td>
    <td>102</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Volume Number Suffix</td>
    <td>1</td>
    <td>103</td>
    <td>103</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Page Number</td>
    <td>3</td>
    <td>104</td>
    <td>106</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Page Number Suffix</td>
    <td>1</td>
    <td>107</td>
    <td>107</td>
    <td></td>
  </tr>
  <tr>
    <td>Marble Hill/Rikers Island Alternative Borough Flag</td>
    <td>1</td>
    <td>108</td>
    <td>108</td>
    <td></td>
  </tr>
  <tr>
    <td>DOT Street Light Contractor Area</td>
    <td>1</td>
    <td>109</td>
    <td>109</td>
    <td></td>
  </tr>
  <tr>
    <td>COMMUNITY DISTRICT:</td>
    <td>3</td>
    <td>110</td>
    <td>112</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Community District Borough Code</td>
    <td>1</td>
    <td>110</td>
    <td>110</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> Community District Number</td>
    <td>2</td>
    <td>111</td>
    <td>112</td>
    <td></td>
  </tr>
  <tr>
    <td>ZIP Code</td>
    <td>5</td>
    <td>113</td>
    <td>117</td>
    <td></td>
  </tr>
  <tr>
    <td>Health Area</td>
    <td>4</td>
    <td>118</td>
    <td>121</td>
    <td></td>
  </tr>
  <tr>
    <td>Police Patrol Borough Command</td>
    <td>1</td>
    <td>122</td>
    <td>122</td>
    <td></td>
  </tr>
  <tr>
    <td>Police Precinct</td>
    <td>3</td>
    <td>123</td>
    <td>125</td>
    <td></td>
  </tr>
  <tr>
    <td>Fire Division</td>
    <td>2</td>
    <td>126</td>
    <td>127</td>
    <td></td>
  </tr>
  <tr>
    <td>Fire Battalion</td>
    <td>2</td>
    <td>128</td>
    <td>129</td>
    <td></td>
  </tr>
  <tr>
    <td>Fire Company Type</td>
    <td>1</td>
    <td>130</td>
    <td>130</td>
    <td></td>
  </tr>
  <tr>
    <td>Fire Company Number</td>
    <td>3</td>
    <td>131</td>
    <td>133</td>
    <td></td>
  </tr>
  <tr>
    <td>Community School District</td>
    <td>2</td>
    <td>134</td>
    <td>135</td>
    <td></td>
  </tr>
  <tr>
    <td>2010 Census Tract</td>
    <td>6</td>
    <td>136</td>
    <td>141</td>
    <td></td>
  </tr>
  <tr>
    <td>1990 Census Tract</td>
    <td>6</td>
    <td>142</td>
    <td>147</td>
    <td></td>
  </tr>
  <tr>
    <td>List of Pairs of Level Codes</td>
    <td>10</td>
    <td>148</td>
    <td>157</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td>Police Patrol Borough</td>
    <td>2</td>
    <td>158</td>
    <td>159</td>
    <td></td>
  </tr>
  <tr>
    <td>Assembly District</td>
    <td>2</td>
    <td>160</td>
    <td>161</td>
    <td></td>
  </tr>
  <tr>
    <td>Congressional District</td>
    <td>2</td>
    <td>162</td>
    <td>163</td>
    <td></td>
  </tr>
  <tr>
    <td>State Senatorial District</td>
    <td>2</td>
    <td>164</td>
    <td>165</td>
    <td></td>
  </tr>
  <tr>
    <td>Civil Court District</td>
    <td>2</td>
    <td>166</td>
    <td>167</td>
    <td></td>
  </tr>
  <tr>
    <td>City Council District</td>
    <td>2</td>
    <td>168</td>
    <td>169</td>
    <td></td>
  </tr>
  <tr>
    <td>CD Eligibility</td>
    <td>1</td>
    <td>170</td>
    <td>170</td>
    <td></td>
  </tr>
  <tr>
    <td>Distance Between Duplicate Intersections</td>
    <td>5</td>
    <td>171</td>
    <td>175</td>
    <td></td>
  </tr>
  <tr>
    <td>2000 Census Tract</td>
    <td>6</td>
    <td>176</td>
    <td>181</td>
    <td></td>
  </tr>
  <tr>
    <td>Health Center District</td>
    <td>2</td>
    <td>182</td>
    <td>183</td>
    <td></td>
  </tr>
  <tr>
    <td>Sanitation District</td>
    <td>3</td>
    <td>184</td>
    <td>186</td>
    <td></td>
  </tr>
  <tr>
    <td>Sanitation Section/Subsection</td>
    <td>2</td>
    <td>187</td>
    <td>188</td>
    <td></td>
  </tr>
  <tr>
    <td>Police Sector</td>
    <td>4</td>
    <td>189</td>
    <td>192</td>
    <td></td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>8</td>
    <td>193</td>
    <td>200</td>
    <td></td>
  </tr>
</table>


## <span id="appendix13.12">Work Area 2 (COW) - Function 2W (Wide)</span>

<b>Intersection Defined by Two Intersecting Streets</b>  

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <td>FROM</td>
    <td>TO</td>
  </tr>
  <tr>
    <td>Same as regular work area 2 for Function 2</td>
    <td>200</td>
    <td>1</td>
    <td>200</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>22</td>
    <td>201</td>
    <td>222</td>
    <td></td>
  </tr>
  <tr>
    <td>LGC List for Street 1</td>
    <td>8</td>
    <td>223</td>
    <td>230</td>
    <td></td>
  </tr>
  <tr>
    <td>LGC List for Street 2</td>
    <td>8</td>
    <td>231</td>
    <td>238</td>
    <td></td>
  </tr>
  <tr>
    <td>Turn Restrictions</td>
    <td>10</td>
    <td>239</td>
    <td>248</td>
    <td></td>
  </tr>
  <tr>
    <td>Preferred LGCs for Intersecting B5SCs</td>
    <td>10</td>
    <td>249</td>
    <td>258</td>
    <td></td>
  </tr>
  <tr>
    <td>True Replication Counter</td>
    <td>2</td>
    <td>259</td>
    <td>260</td>
    <td></td>
  </tr>
  <tr>
    <td>List of Up To 20 7-Byte Nodes</td>
    <td>140</td>
    <td>261</td>
    <td>400</td>
    <td>GRC 03 / Reason B</td>
  </tr>
  <tr>
    <td> B7SCs For The Above 20 Nodes –
     List of intersecting streets (B7SCs) for node list
     (8 byte street code * 4 LGCs * 5 streets * 20
     nodes)  - See table below for detail</td>
    <td>3200</td>
    <td>401</td>
    <td>3600</td>
    <td>GRC 03/ B See detail layout below.</td>
  </tr>
  <tr>
    <td>Reason Code</td>
    <td>1</td>
    <td>3601</td>
    <td>3601</td>
    <td></td>
  </tr>
  <tr>
    <td>Reason Code Qualifier</td>
    <td>1</td>
    <td>3602</td>
    <td>3602</td>
    <td></td>
  </tr>
  <tr>
    <td>Warning Code</td>
    <td>2</td>
    <td>3603</td>
    <td>3604</td>
    <td></td>
  </tr>
  <tr>
    <td>Return Code</td>
    <td>2</td>
    <td>3605</td>
    <td>3606</td>
    <td></td>
  </tr>
  <tr>
    <td>Latitude</td>
    <td>9</td>
    <td>3607</td>
    <td>3615</td>
    <td></td>
  </tr>
  <tr>
    <td>Longitude</td>
    <td>11</td>
    <td>3616</td>
    <td>3626</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>374</td>
    <td>3627</td>
    <td>4000</td>
    <td></td>
  </tr>
</table>  

<b>Detail of List of intersecting streets for node list (bytes 401-3600)</b>

<table>
  <tr>
    <td>LIST OF B7SCS FOR EACH NODE IN NODE LIST
(Up to 20 nodes,
     Up to 5 streets per node,
          Up to 4 LGCs per street,
               8 bytes per B7SC)  
Each node is structured as follows:</td>
    <td>3200</td>
    <td>401</td>
    <td>3600</td>
    <td>GRC 03 /B generates bytes 261-400 &
401-3600 <br> 20x5x4x8=3,200</td>
  </tr>
  <tr>
    <td>NODE 1  (entire node entry repeats 20 times) <br>
          STREET 1 (entire street entry repeats 5 times) <br>
               B7SC for LGC1 <br>
               B7SC for LGC2 <br>
               B7SC for LGC3 <br>
               B7SC for LGC4 <br>
Note: The first 2 streets may have up to four LGCs defined.  As of this release, the remaining 3 streets at each node may have only 1 LGC defined (resulting in 1 B7SC) and the remaining 3 blank.</td>
    <td>(160)<br>
(32)<br>
(8)<br>
(8)<br>
(8)<br>
(8)</td>
    <td>(1)<br>
(1)<br>
(1)<br>
(9)<br>
(17)<br>
(25)
</td>
    <td>(160)<br>
(32)<br>
 (8)<br>
(16)<br>
(24)<br>
(32)
</td>
    <td>Each street has up to 4 B7SCs. (8x4=32 byte)   Each node has up to 5 streets (32x5=160)
Each situation has up to 20 nodes
(160x20=3200)</td>
  </tr>
</table>


## <span id="appendix13.13">Work Area 2 (COW) - Function 3</span>

<b>Street Segment Defined By 'On' and Two Cross Streets</b>

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <td>FROM</td>
    <td>TO</td>
  </tr>
  <tr>
    <td>Internal Use</td>
    <td>21</td>
    <td>1</td>
    <td>21</td>
    <td></td>
  </tr>
  <tr>
    <td>Duplicate Key Flag or Continuous Parity</td>
    <td>1</td>
    <td>22</td>
    <td>22</td>
    <td></td>
  </tr>
  <tr>
    <td>Locational Status of Segment</td>
    <td>1</td>
    <td>23</td>
    <td>23</td>
    <td></td>
  </tr>
  <tr>
    <td>County Boundary Indicator</td>
    <td>1</td>
    <td>24</td>
    <td>24</td>
    <td></td>
  </tr>
  <tr>
    <td>DCP-Preferred LGC for Street 1</td>
    <td>2</td>
    <td>25</td>
    <td>26</td>
    <td>‘On’ Street</td>
  </tr>
  <tr>
    <td>DCP-Preferred LGC for Street 2</td>
    <td>2</td>
    <td>27</td>
    <td>28</td>
    <td>Input Cross Street with Lower B5SC value</td>
  </tr>
  <tr>
    <td>DCP-Preferred LGC for Street 3</td>
    <td>2</td>
    <td>29</td>
    <td>30</td>
    <td>Input Cross Street with Higher B5SC value</td>
  </tr>
  <tr>
    <td>Number of Cross Streets at Low Address End</td>
    <td>1</td>
    <td>31</td>
    <td>31</td>
    <td></td>
  </tr>
  <tr>
    <td>List of Cross Streets at Low Address End (Up to five B5SCs, 6 bytes each)</td>
    <td>30</td>
    <td>32</td>
    <td>61</td>
    <td>Blank Filled</td>
  </tr>
  <tr>
    <td>Number of Cross Streets at High Address End</td>
    <td>1</td>
    <td>62</td>
    <td>62</td>
    <td></td>
  </tr>
  <tr>
    <td>List of Cross Streets at High Address End (Up to five B5SCs, 6 bytes each)</td>
    <td>30</td>
    <td>63</td>
    <td>92</td>
    <td>Blank Filled</td>
  </tr>
  <tr>
    <td>Cross Street Reversal Flag</td>
    <td>1</td>
    <td>93</td>
    <td>93</td>
    <td></td>
  </tr>
  <tr>
    <td>LION KEY</td>
    <td>10</td>
    <td>94</td>
    <td>103</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> LION Borough Code</td>
    <td>1</td>
    <td>94</td>
    <td>94</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> LION Face Code</td>
    <td>4</td>
    <td>95</td>
    <td>98</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> LION Sequence Number</td>
    <td>5</td>
    <td>99</td>
    <td>103</td>
    <td></td>
  </tr>
  <tr>
    <td>Generated Record Flag</td>
    <td>1</td>
    <td>104</td>
    <td>104</td>
    <td></td>
  </tr>
  <tr>
    <td>Length of Segment in Feet</td>
    <td>5</td>
    <td>105</td>
    <td>109</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Azimuth</td>
    <td>3</td>
    <td>110</td>
    <td>112</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Orientation</td>
    <td>1</td>
    <td>113</td>
    <td>113</td>
    <td></td>
  </tr>
  <tr>
    <td>Marble Hill/Rikers Island Alternative Borough Flag</td>
    <td>1</td>
    <td>114</td>
    <td>114</td>
    <td></td>
  </tr>
  <tr>
    <td>From Node</td>
    <td>7</td>
    <td>115</td>
    <td>121</td>
    <td></td>
  </tr>
  <tr>
    <td>To Node</td>
    <td>7</td>
    <td>122</td>
    <td>128</td>
    <td></td>
  </tr>
  <tr>
    <td>DSNY Snow Priority Code</td>
    <td>1</td>
    <td>129</td>
    <td>129</td>
    <td>Dept. of Sanitation</td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>4</td>
    <td>130</td>
    <td>133</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Identifier</td>
    <td>7</td>
    <td>134</td>
    <td>140</td>
    <td></td>
  </tr>
  <tr>
  <td>
  DOT Street Light Contractor Area
  </td>
  <td>
  1
  </td>
  <td>
  141
  </td>
  <td>
  141
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Curve Flag
  </td>
  <td>
  1
  </td>
  <td>
  142
  </td>
  <td>
  142
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Dog Leg Flag
  </td>
  <td>
  1
  </td>
  <td>
  143
  </td>
  <td>
  143
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Feature Type Code
  </td>
  <td>
  1
  </td>
  <td>
  144
  </td>
  <td>
  144
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Segment Type Code
  </td>
  <td>
  1
  </td>
  <td>
  145
  </td>
  <td>
  145
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Coincident Segment Count
  </td>
  <td>
  1
  </td>
  <td>
  146
  </td>
  <td>
  146
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Filler
  </td>
  <td>
  4
  </td>
  <td>
  147
  </td>
  <td>
  150
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td colspan="5" >
  <strong>LEFT SIDE:</strong>
  </td>
  </tr>
  <tr>
  <td>
  COMMUNITY DISTRICT:
  </td>
  <td>
  3
  </td>
  <td>
  151
  </td>
  <td>
  153
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td class="indentRows">
   Community District Borough  Code
  </td>
  <td>
  1
  </td>
  <td>
  151
  </td>
  <td>
  151
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td class="indentRows">
   Community District Number
  </td>
  <td>
  2
  </td>
  <td>
  152
  </td>
  <td>
  153
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Low House Number
  </td>
  <td>
  16
  </td>
  <td>
  154
  </td>
  <td>
  169
  </td>
  <td>
  Display Format
  </td>
  </tr>
  <tr>
  <td>
  High House Number
  </td>
  <td>
  16
  </td>
  <td>
  170
  </td>
  <td>
  185
  </td>
  <td>
  Display Format
  </td>
  </tr>
  <tr>
  <td>
  Future Use
  </td>
  <td>
  32
  </td>
  <td>
  186
  </td>
  <td>
  217
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Community Development Eligibility Indicator
  </td>
  <td>
  1
  </td>
  <td>
  218
  </td>
  <td>
  218
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  ZIP Code
  </td>
  <td>
  5
  </td>
  <td>
  219
  </td>
  <td>
  223
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Health Area
  </td>
  <td>
  4
  </td>
  <td>
  224
  </td>
  <td>
  227
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Police Patrol Borough Command
  </td>
  <td>
  1
  </td>
  <td>
  228
  </td>
  <td>
  228
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Police Precinct
  </td>
  <td>
  3
  </td>
  <td>
  229
  </td>
  <td>
  231
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Fire Division
  </td>
  <td>
  2
  </td>
  <td>
  232
  </td>
  <td>
  233
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Fire Battalion
  </td>
  <td>
  2
  </td>
  <td>
  234
  </td>
  <td>
  235
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Fire Company Type
  </td>
  <td>
  1
  </td>
  <td>
  236
  </td>
  <td>
  236
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Fire Company Number
  </td>
  <td>
  3
  </td>
  <td>
  237
  </td>
  <td>
  239
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Community School District
  </td>
  <td>
  2
  </td>
  <td>
  240
  </td>
  <td>
  241
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Atomic Polygon
  </td>
  <td>
  3
  </td>
  <td>
  242
  </td>
  <td>
  244
  </td>
  <td>
  Was Dynamic Block
  </td>
  </tr>
  <tr>
  <td>
  Election District (ED)
  </td>
  <td>
  3
  </td>
  <td>
  245
  </td>
  <td>
  247
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Assembly District (AD)
  </td>
  <td>
  2
  </td>
  <td>
  248
  </td>
  <td>
  249
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Police Patrol Borough
  </td>
  <td>
  2
  </td>
  <td>
  250
  </td>
  <td>
  251
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Filler
  </td>
  <td>
  1
  </td>
  <td>
  252
  </td>
  <td>
  252
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  Borough Code
  </td>
  <td>
  1
  </td>
  <td>
  253
  </td>
  <td>
  253
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  1990 Census Tract
  </td>
  <td>
  6
  </td>
  <td>
  254
  </td>
  <td>
  259
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  2010 Census Tract
  </td>
  <td>
  6
  </td>
  <td>
  260
  </td>
  <td>
  265
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  2010 Census Block
  </td>
  <td>
  4
  </td>
  <td>
  266
  </td>
  <td>
  269
  </td>
  <td>  </td>
  </tr>
  <tr>
  <td>
  2010 Census Block Suffix
  </td>
  <td>
  1
  </td>
  <td>
  270
  </td>
  <td>
  270
  </td>
  <td>
  <em>Not Implemented</em>
  </td>
  </tr>
  <tr>
  <td>
  2000 Census Tract
  </td>
  <td>
  6
  </td>
  <td>
  271
  </td>
  <td>
  276
  </td>
  <td>  </td>
  </tr>

  <tr>
    <td>
      2000 Census Block Suffix
    </td>
    <td>
      1
    </td>
    <td>
      281
    </td>
    <td>
      281
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Filler
    </td>
    <td>
      7
    </td>
    <td>
      282
    </td>
    <td>
      288
    </td>
    <td>
      Was Blockface ID. See Function 3 Extended
    </td>
  </tr>
  <tr>
    <td>
      Neighborhood Tabulation Area (NTA)
    </td>
    <td>
      4
    </td>
    <td>
      289
    </td>
    <td>
      292
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Filler
    </td>
    <td>
      8
    </td>
    <td>
      293
    </td>
    <td>
      300
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td colspan="5">
      <strong>RIGHT SIDE:</strong>
    </td>
  </tr>
  <tr>
    <td>
      COMMUNITY DISTRICT:
    </td>
    <td>
      3
    </td>
    <td>
      301
    </td>
    <td>
      303
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td class="indentRows">
      Community District Borough Code
    </td>
    <td>
      1
    </td>
    <td>
      301
    </td>
    <td>
      301
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td class="indentRows">
      Community District Number
    </td>
    <td>
      2
    </td>
    <td>
      302
    </td>
    <td>
      303
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Low House Number
    </td>
    <td>
      16
    </td>
    <td>
      304
    </td>
    <td>
      319
    </td>
    <td>
      Display Format
    </td>
  </tr>
  <tr>
    <td>
      High House Number
    </td>
    <td>
      16
    </td>
    <td>
      320
    </td>
    <td>
      335
    </td>
    <td>
      Display Format
    </td>
  </tr>
  <tr>
    <td>
      Future Use
    </td>
    <td>
      32
    </td>
    <td>
      336
    </td>
    <td>
      367
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Community Development Eligibility Indicator
    </td>
    <td>
      1
    </td>
    <td>
      368
    </td>
    <td>
      368
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      ZIP Code
    </td>
    <td>
      5
    </td>
    <td>
      369
    </td>
    <td>
      373
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Health Area
    </td>
    <td>
      4
    </td>
    <td>
      374
    </td>
    <td>
      377
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Police Patrol Borough Command
    </td>
    <td>
      1
    </td>
    <td>
      378
    </td>
    <td>
      378
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Police Precinct
    </td>
    <td>
      3
    </td>
    <td>
      379
    </td>
    <td>
      381
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Fire Division
    </td>
    <td>
      2
    </td>
    <td>
      382
    </td>
    <td>
      383
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Fire Battalion
    </td>
    <td>
      2
    </td>
    <td>
      384
    </td>
    <td>
      385
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Fire Company Type
    </td>
    <td>
      1
    </td>
    <td>
      386
    </td>
    <td>
      386
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Fire Company Number
    </td>
    <td>
      3
    </td>
    <td>
      387
    </td>
    <td>
      389
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Community School District
    </td>
    <td>
      2
    </td>
    <td>
      390
    </td>
    <td>
      391
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Atomic Polygon
    </td>
    <td>
      3
    </td>
    <td>
      392
    </td>
    <td>
      394
    </td>
    <td>
      Was Dynamic Block
    </td>
  </tr>
  <tr>
    <td>
      Election District (ED)
    </td>
    <td>
      3
    </td>
    <td>
      395
    </td>
    <td>
      397
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Assembly District (AD)
    </td>
    <td>
      2
    </td>
    <td>
      398
    </td>
    <td>
      399
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Police Patrol Borough
    </td>
    <td>
      2
    </td>
    <td>
      400
    </td>
    <td>
      401
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Filler
    </td>
    <td>
      1
    </td>
    <td>
      402
    </td>
    <td>
      402
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Borough Code
    </td>
    <td>
      1
    </td>
    <td>
      403
    </td>
    <td>
      403
    </td>
    <td>
      Internal Use
    </td>
  </tr>
  <tr>
    <td>
      1990 Census Tract
    </td>
    <td>
      6
    </td>
    <td>
      404
    </td>
    <td>
      409
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      2010 Census Tract
    </td>
    <td>
      6
    </td>
    <td>
      410
    </td>
    <td>
      415
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      2010 Census Block
    </td>
    <td>
      4
    </td>
    <td>
      416
    </td>
    <td>
      419
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      2010 Census Block Suffix
    </td>
    <td>
      1
    </td>
    <td>
      420
    </td>
    <td>
      420
    </td>
    <td>
      <em>Not Implemented</em>
    </td>
  </tr>
  <tr>
    <td>
      2000 Census Tract
    </td>
    <td>
      6
    </td>
    <td>
      421
    </td>
    <td>
      426
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      2000 Census Block
    </td>
    <td>
      4
    </td>
    <td>
      427
    </td>
    <td>
      430
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      2000 Census Block Suffix
    </td>
    <td>
      1
    </td>
    <td>
      431
    </td>
    <td>
      431
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Filler
    </td>
    <td>
      7
    </td>
    <td>
      432
    </td>
    <td>
      438
    </td>
    <td>
      Was Blockface ID See Function 3 Extended
    </td>
  </tr>
  <tr>
    <td>
      Neighborhood Tabulation Area (NTA)
    </td>
    <td>
      4
    </td>
    <td>
      439
    </td>
    <td>
      442
    </td>
    <td>    </td>
  </tr>
  <tr>
    <td>
      Filler
    </td>
    <td>
      8
    </td>
    <td>
      443
    </td>
    <td>
      450
    </td>
    <td>    </td>
  </tr>
</table>


## <span id="appendix13.14">Work Area 2 (COW) - Function 3 with Auxiliary Segment List</span>
<b>Street Segment Defined By 'On' and Two Cross Streets   (List of Segment IDs)</b>

<table>
	<thead>
		<tr>
			<td rowspan="2">
				<strong>FIELD</strong>
			</td>
			<td rowspan="2">
				<strong>SIZE</strong>
			</td>
			<td colspan="2">
				<strong>POSITION</strong>
			</td>
			<td rowspan="2">
				<strong>COMMENT</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>FROM</strong>
			</td>
			<td>
				<strong>TO</strong>
			</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				Same as Regular Work Area 2 for Function 3
			</td>
			<td>
				450
			</td>
			<td>
				1
			</td>
			<td>
				450
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Filler
			</td>
			<td>
				6
			</td>
			<td>
				451
			</td>
			<td>
				456
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Segment Count
			</td>
			<td>
				4
			</td>
			<td>
				457
			</td>
			<td>
				460
			</td>
			<td>
				Number of Segments
			</td>
		</tr>
		<tr>
			<td>
				Segment IDs
			</td>
			<td>
				490
			</td>
			<td>
				461
			</td>
			<td>
				950
			</td>
			<td>
				Up to 70 Segment IDs 7 bytes each; 7 x 70 = 490
			</td>
		</tr>
	</tbody>
</table>


## <span id="appendix13.15">Work Area 2 (COW) - Function 3 Extended</span>
<b>Street Segment Defined By 'On' and Two Cross Streets</b>

<table>
	<thead>
		<tr>
			<td rowspan="2">
				<strong>FIELD</strong>
			</td>
			<td rowspan="2">
				<strong>SIZE</strong>
			</td>
			<td colspan="2">
				<strong>POSITION</strong>
			</td>
			<td rowspan="2">
				<strong>COMMENT</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>FROM</strong>
			</td>
			<td>
				<strong>TO</strong>
			</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				Same as Regular Work Area 2 Function 3
			</td>
			<td>
				450
			</td>
			<td>
				1
			</td>
			<td>
				450
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				List of 4 LGCs for Street 1
			</td>
			<td>
				8
			</td>
			<td>
				451
			</td>
			<td>
				458
			</td>
			<td>
				&lsquo;On&rsquo; Street
			</td>
		</tr>
		<tr>
			<td>
				List of 4 LGCs for Street 2
			</td>
			<td>
				8
			</td>
			<td>
				459
			</td>
			<td>
				466
			</td>
			<td>
				Input Cross Street with Lower B5SC
			</td>
		</tr>
		<tr>
			<td>
				List of 4 LGCs for Street 3
			</td>
			<td>
				8
			</td>
			<td>
				467
			</td>
			<td>
				474
			</td>
			<td>
				Input Cross Street with Higher B5SC
			</td>
		</tr>
		<tr>
			<td>
				Left Health Center District
			</td>
			<td>
				2
			</td>
			<td>
				475
			</td>
			<td>
				476
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Right Health Center District
			</td>
			<td>
				2
			</td>
			<td>
				477
			</td>
			<td>
				478
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Filler
			</td>
			<td>
				1
			</td>
			<td>
				479
			</td>
			<td>
				479
			</td>
			<td>
				Was Split Comm Schl District Flag
			</td>
		</tr>
		<tr>
			<td>
				Traffic Direction
			</td>
			<td>
				1
			</td>
			<td>
				480
			</td>
			<td>
				480
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Roadway Type
			</td>
			<td>
				2
			</td>
			<td>
				481
			</td>
			<td>
				482
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Physical ID
			</td>
			<td>
				7
			</td>
			<td>
				483
			</td>
			<td>
				489
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Generic ID
			</td>
			<td>
				7
			</td>
			<td>
				490
			</td>
			<td>
				496
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				NYPD ID
			</td>
			<td>
				7
			</td>
			<td>
				497
			</td>
			<td>
				503
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				FDNY ID
			</td>
			<td>
				7
			</td>
			<td>
				504
			</td>
			<td>
				510
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Street Status
			</td>
			<td>
				1
			</td>
			<td>
				511
			</td>
			<td>
				511
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Street Width
			</td>
			<td>
				3
			</td>
			<td>
				512
			</td>
			<td>
				514
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Street Width Irregular
			</td>
			<td>
				1
			</td>
			<td>
				515
			</td>
			<td>
				515
			</td>
			<td>
				<em>Not Implemented</em>
			</td>
		</tr>
		<tr>
			<td>
				Bike Lane
			</td>
			<td>
				1
			</td>
			<td>
				516
			</td>
			<td>
				516
			</td>
			<td>
				Will be retired. See Bike Lane 2
			</td>
		</tr>
		<tr>
			<td>
				Federal Classification Code
			</td>
			<td>
				2
			</td>
			<td>
				517
			</td>
			<td>
				518
			</td>
			<td>
				<em>Not Implemented</em>
			</td>
		</tr>
		<tr>
			<td>
				Right of Way Type
			</td>
			<td>
				1
			</td>
			<td>
				519
			</td>
			<td>
				519
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				List of 5 Additional LGCs for Street 1
			</td>
			<td>
				10
			</td>
			<td>
				520
			</td>
			<td>
				529
			</td>
			<td>
				<em>Not Implemented</em>
			</td>
		</tr>
		<tr>
			<td>
				Legacy ID
			</td>
			<td>
				7
			</td>
			<td>
				530
			</td>
			<td>
				536
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Left NTA Name
			</td>
			<td>
				75
			</td>
			<td>
				537
			</td>
			<td>
				611
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Right NTA Name
			</td>
			<td>
				75
			</td>
			<td>
				612
			</td>
			<td>
				686
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				FROM SPATIAL COORDINATES:
			</td>
			<td>
				14
			</td>
			<td>
				687
			</td>
			<td>
				700
			</td>
			<td>
				From Node
			</td>
		</tr>
		<tr>
			<td class="indentRows">
				From X Coordinate
			</td>
			<td>
				7
			</td>
			<td>
				687
			</td>
			<td>
				693
			</td>
			<td></td>
		</tr>
		<tr>
			<td class="indentRows">
				From Y Coordinate
			</td>
			<td>
				7
			</td>
			<td>
				694
			</td>
			<td>
				700
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				TO SPATIAL COORDINATES:
			</td>
			<td>
				14
			</td>
			<td>
				701
			</td>
			<td>
				714
			</td>
			<td>
				To Node
			</td>
		</tr>
		<tr>
			<td class="indentRows">
				To X Coordinate
			</td>
			<td>
				7
			</td>
			<td>
				701
			</td>
			<td>
				707
			</td>
			<td></td>
		</tr>
		<tr>
			<td class="indentRows">
				To Y Coordinate
			</td>
			<td>
				7
			</td>
			<td>
				708
			</td>
			<td>
				714
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Latitude of From Intersection
			</td>
			<td>
				9
			</td>
			<td>
				715
			</td>
      <td>713</td>
      <td></td>
    </tr>
    <tr>
      <td>Longitude of From Intersection</td>
      <td>11</td>
      <td>724</td>
      <td>734</td>
      <td></td>
    </tr>
    <tr>
      <td>Latitude of To Intersection</td>
      <td>9</td>
      <td>735</td>
      <td>743</td>
      <td></td>
    </tr>
    <tr>
      <td>Longitude of To Intersection</td>
      <td>11</td>
      <td>744</td>
      <td>754</td>
      <td></td>
    </tr>
    <tr>
      <td>Left Blockface ID</td>
      <td>10</td>
      <td>755</td>
      <td>764</td>
      <td></td>
    </tr>
    <tr>
      <td>Right Blockface ID</td>
      <td>10</td>
      <td>765</td>
      <td>774</td>
      <td></td>
    </tr>
    <tr>
      <td>Number of Travel Lanes on the Street</td>
      <td>2</td>
      <td>775</td>
      <td>776</td>
      <td></td>
    </tr>
    <tr>
      <td>Number of Parking Lanes on the Street</td>
      <td>2</td>
      <td>777</td>
      <td>778</td>
      <td></td>
    </tr>
    <tr>
      <td>Number of Total Lanes on the Street</td>
      <td>2</td>
      <td>779</td>
      <td>780</td>
      <td></td>
    </tr>
    <tr>
      <td>Bike Lane 2</td>
      <td>2</td>
      <td>781</td>
      <td>782</td>
      <td></td>
    </tr>
    <tr>
      <td>Street Width Maximum</td>
      <td>3</td>
      <td>783</td>
      <td>785</td>
      <td></td>
    </tr>

    <tr>
      <td>Bike Traffic Direction</td>
      <td>2</td>
      <td>786</td>
      <td>787</td>
      <td></td>
    </tr>
    <tr>
      <td>Speed Limit</td>
      <td>2</td>
      <td>788</td>
      <td>789</td>
      <td></td>
    </tr>
    <tr>
      <td>Left PUMA Code</td>
      <td>5</td>
      <td>790</td>
      <td>794</td>
      <td></td>
    </tr>
    <tr>
      <td>Right PUMA Code</td>
      <td>5</td>
      <td>795</td>
      <td>799</td>
      <td></td>
    </tr>
    <tr>
      <td>Left Police Sector</td>
      <td>4</td>
      <td>800</td>
      <td>803</td>
      <td></td>
    </tr>
    <tr>
      <td>Right Police Sector</td>
      <td>4</td>
      <td>804</td>
      <td>807</td>
      <td></td>
    </tr>
    <tr>
      <td>Filler</td>
      <td>193</td>
      <td>808</td>
      <td>1000</td>
      <td></td>
    </tr>
</tbody>
</table>

## <span id="appendix13.16">Work Area 2 (COW) - Function 3 Extended with Auxiliary Segment List</span>

<b>Street Segment Defined by 'On' and Two Cross Streets</b>

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <td>FROM</td>
    <td>TO</td>
  </tr>
  <tr>
    <td>Same as Work Area 2 for Function 3 Extended</td>
    <td>1000</td>
    <td>1</td>
    <td>1000</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>6</td>
    <td>1001</td>
    <td>1006</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Count</td>
    <td>4</td>
    <td>1007</td>
    <td>1010</td>
    <td>Number of Segments</td>
  </tr>
  <tr>
    <td>Segment IDs</td>
    <td>490</td>
    <td>1011</td>
    <td>1500</td>
    <td>Up to 70 Segment IDs 7 bytes each; 7 x 70 = 490</td>
  </tr>
</table>   


## <span id="appendix13.17">Work Area 2 (COW) - Function 3C</span>
<b>Block Face Defined by 'On' and Two Cross Streets and Compass Direction</b>


<table>
	<thead>
		<tr>
			<td rowspan="2">
				<strong>FIELD</strong>
			</td>
			<td rowspan="2">
				<strong>SIZE</strong>
			</td>
			<td colspan="2">
				<strong>POSITION</strong>
			</td>
			<td rowspan="2">
				<strong>COMMENT</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>FROM</strong>
			</td>
			<td>
				<strong>TO</strong>
			</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				Internal Use
			</td>
			<td>
				21
			</td>
			<td>
				1
			</td>
			<td>
				21
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Duplicate Key Flag or Continuous Parity
			</td>
			<td>
				1
			</td>
			<td>
				22
			</td>
			<td>
				22
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Locational Status of Segment
			</td>
			<td>
				1
			</td>
			<td>
				23
			</td>
			<td>
				23
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				County Boundary Indicator
			</td>
			<td>
				1
			</td>
			<td>
				24
			</td>
			<td>
				24
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				DCP-Preferred LGC for Street 1
			</td>
			<td>
				2
			</td>
			<td>
				25
			</td>
			<td>
				26
			</td>
			<td>
				&lsquo;On&rsquo; Street
			</td>
		</tr>
		<tr>
			<td>
				DCP-Preferred LGC for Street 2
			</td>
			<td>
				2
			</td>
			<td>
				27
			</td>
			<td>
				28
			</td>
			<td>
				Input Cross Street with Lower B5SC value
			</td>
		</tr>
		<tr>
			<td>
				DCP-Preferred LGC for Street 3
			</td>
			<td>
				2
			</td>
			<td>
				29
			</td>
			<td>
				30
			</td>
			<td>
				Input Cross Street with Higher B5SC value
			</td>
		</tr>
		<tr>
			<td>
				No. of Cross Streets at Low Addr End
			</td>
			<td>
				1
			</td>
			<td>
				31
			</td>
			<td>
				31
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				List of Cross Streets at Low Address End (Up to five B5SCs, 6 bytes each)
			</td>
			<td>
				30
			</td>
			<td>
				32
			</td>
			<td>
				61
			</td>
			<td>
				Blank Filled
			</td>
		</tr>
		<tr>
			<td>
				No. of Cross Streets at High Addr End
			</td>
			<td>
				1
			</td>
			<td>
				62
			</td>
			<td>
				62
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				List of Cross Streets at High Address End (Up to five B5SCs, 6 bytes each)
			</td>
			<td>
				30
			</td>
			<td>
				63
			</td>
			<td>
				92
			</td>
			<td>
				Blank Filled
			</td>
		</tr>
		<tr>
			<td>
				Cross Street Reversal Flag
			</td>
			<td>
				1
			</td>
			<td>
				93
			</td>
			<td>
				93
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				LION KEY
			</td>
			<td>
				10
			</td>
			<td>
				94
			</td>
			<td>
				103
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				LION Borough Code
			</td>
			<td>
				1
			</td>
			<td>
				94
			</td>
			<td>
				94
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				LION Face Code
			</td>
			<td>
				4
			</td>
			<td>
				95
			</td>
			<td>
				98
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				LION Sequence Number
			</td>
			<td>
				5
			</td>
			<td>
				99
			</td>
			<td>
				103
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Generated Record Flag
			</td>
			<td>
				1
			</td>
			<td>
				104
			</td>
			<td>
				104
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Length of Segment in Feet
			</td>
			<td>
				5
			</td>
			<td>
				105
			</td>
			<td>
				109
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Segment Azimuth
			</td>
			<td>
				3
			</td>
			<td>
				110
			</td>
			<td>
				112
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Segment Orientation
			</td>
			<td>
				1
			</td>
			<td>
				113
			</td>
			<td>
				113
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Marble Hill/Rikers Island Alternative Borough Flag
			</td>
			<td>
				1
			</td>
			<td>
				114
			</td>
			<td>
				114
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				From Node
			</td>
			<td>
				7
			</td>
			<td>
				115
			</td>
			<td>
				121
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				To Node
			</td>
			<td>
				7
			</td>
			<td>
				122
			</td>
			<td>
				128
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				DSNY Snow Priority Code
			</td>
			<td>
				1
			</td>
			<td>
				129
			</td>
			<td>
				129
			</td>
			<td>
				Dept. of Sanitation
			</td>
		</tr>
		<tr>
			<td>
				Filler
			</td>
			<td>
				4
			</td>
			<td>
				130
			</td>
			<td>
				133
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Segment Identifier
			</td>
			<td>
				7
			</td>
			<td>
				134
			</td>
			<td>
				140
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				DOT Street Light Contractor Area
			</td>
			<td>
				1
			</td>
			<td>
				141
			</td>
			<td>
				141
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				Side-of-Street Indicator
			</td>
			<td>
				1
			</td>
			<td>
				142
			</td>
			<td>
				142
			</td>
			<td></td>
		</tr>
    <tr>
      <td>Curve Flag</td>
      <td>1</td>
      <td>143</td>
      <td>143</td>
      <td></td>
    </tr>
    <tr>
      <td>Feature Type Code</td>
      <td>1</td>
      <td>144</td>
      <td>144</td>
      <td></td>
    </tr>
    <tr>
      <td>Segment Type Code</td>
      <td>1</td>
      <td>145</td>
      <td>145</td>
      <td></td>
    </tr>
    <tr>
      <td>Coincident Segment Count</td>
      <td>1</td>
      <td>146</td>
      <td>146</td>
      <td></td>
    </tr>
    <tr>
      <td>Filler</td>
      <td>4</td>
      <td>147</td>
      <td>150</td>
      <td></td>
    </tr>
    <tr>
      <td>COMMUNITY DISTRICT:</td>
      <td>3</td>
      <td>151</td>
      <td>153</td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">Community District Borough Code</td>
      <td>1</td>
      <td>151</td>
      <td>151</td>
      <td></td>
    </tr>
    <tr>
      <td class="indentRows">Community District Number</td>
      <td>2</td>
      <td>152</td>
      <td>153</td>
      <td></td>
    </tr>
    <tr>
      <td>Low House Number</td>
      <td>16</td>
      <td>154</td>
      <td>169</td>
      <td>Display Format</td>
    </tr>
    <tr>
      <td>High House Number</td>
      <td>16</td>
      <td>170</td>
      <td>185</td>
      <td>Display Format</td>
    </tr>
    <tr>
      <td>Future Use</td>
      <td>32</td>
      <td>186</td>
      <td>217</td>
      <td></td>
    </tr>
    <tr>
      <td>Community Development Eligibility Indicator</td>
      <td>1</td>
      <td>218</td>
      <td>218</td>
      <td></td>
    </tr>
    <tr>
      <td>ZIP Code</td>
      <td>5</td>
      <td>219</td>
      <td>223</td>
      <td></td>
    </tr>
    <tr>
      <td>Health Area</td>
      <td>4</td>
      <td>224</td>
      <td>227</td>
      <td></td>
    </tr>
    <tr>
      <td>Police Patrol Borough Command</td>
      <td>1</td>
      <td>228</td>
      <td>228</td>
      <td></td>
    </tr>
    <tr>
      <td>Police Precinct</td>
      <td>3</td>
      <td>229</td>
      <td>231</td>
      <td></td>
    </tr>
    <tr>
      <td>Fire Division</td>
      <td>2</td>
      <td>232</td>
      <td>233</td>
      <td></td>
    </tr>
    <tr>
      <td>Fire Battalion</td>
      <td>2</td>
      <td>234</td>
      <td>235</td>
      <td></td>
    </tr>
    <tr>
      <td>Fire Company Type</td>
      <td>1</td>
      <td>236</td>
      <td>236</td>
      <td></td>
    </tr>
    <tr>
      <td>Fire Company Number</td>
      <td>3</td>
      <td>237</td>
      <td>239</td>
      <td></td>
    </tr>
    <tr>
      <td>Community School District</td>
      <td>2</td>
      <td>240</td>
      <td>241</td>
      <td></td>
    </tr>
    <tr>
      <td>Atomic Polygon</td>
      <td>3</td>
      <td>242</td>
      <td>244</td>
      <td>Was Dynamic Block</td>
    </tr>
    <tr>
      <td>Election District (ED)</td>
      <td>3</td>
      <td>245</td>
      <td>247</td>
      <td></td>
    </tr>
    <tr>
      <td>Assembly District (AD)</td>
      <td>2</td>
      <td>248</td>
      <td>249</td>
      <td></td>
    </tr>
    <tr>
      <td>Police Patrol Borough</td>
      <td>2</td>
      <td>250</td>
      <td>251</td>
      <td></td>
    </tr>
    <tr>
      <td>Filler</td>
      <td>1</td>
      <td>252</td>
      <td>252</td>
      <td></td>
    </tr>
    <tr>
      <td>Borough Code</td>
      <td>1</td>
      <td>253</td>
      <td>253</td>
      <td>Internal Use</td>
    </tr>
    <tr>
      <td>1990 Census Tract</td>
      <td>6</td>
      <td>254</td>
      <td>259</td>
      <td></td>
    </tr>
    <tr>
      <td>2010 Census Tract</td>
      <td>6</td>
      <td>260</td>
      <td>265</td>
      <td></td>
    </tr>
    <tr>
      <td>2010 Census Block</td>
      <td>4</td>
      <td>266</td>
      <td>269</td>
      <td></td>
    </tr>
    <tr>
      <td>2010 Census Block Suffix</td>
      <td>1</td>
      <td>270</td>
      <td>270</td>
      <td>Not Implemented</td>
    </tr>
    <tr>
      <td>2000 Census Tract</td>
      <td>6</td>
      <td>271</td>
      <td>276</td>
      <td></td>
    </tr>
    <tr>
      <td>2000 Census Block</td>
      <td>4</td>
      <td>277</td>
      <td>280</td>
      <td></td>
    </tr>
    <tr>
      <td>2000 Census Block Suffix</td>
      <td>1</td>
      <td>281</td>
      <td>281</td>
      <td></td>
    </tr>
    <tr>
      <td>Filler</td>
      <td>7</td>
      <td>282</td>
      <td>288</td>
      <td> Was Blockface ID See Function 3C Extended</td>
    </tr>
    <tr>
      <td>Neighborhood Tabulation Area (NTA)</td>
      <td>4</td>
      <td>289</td>
      <td>292</td>
      <td></td>
    </tr>
    <tr>
      <td>Filler</td>
      <td>8</td>
      <td>293</td>
      <td>300</td>
      <td></td>
    </tr>
	</tbody>
</table>


## <span id="appendix13.18">Work Area 2 (COW) - Function 3C with Auxiliary Segment List</span>

<b>Block Face Defined by 'On' and Two Cross Streets and Compass Direction</b>  


<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <td>FROM</td>
    <td>TO</td>
  </tr>
  <tr>
    <th>Same as Regular Work Area 2 for Function 3C</th>
    <th>300</th>
    <th>1</th>
    <th>300</th>
    <th></th>
  </tr>
  <tr>
    <td>Filler</td>
    <td>6</td>
    <td>301</td>
    <td>306</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Count</td>
    <td>4</td>
    <td>307</td>
    <td>310</td>
    <td>Number of Segments</td>
  </tr>
  <tr>
    <td>Segment IDs</td>
    <td>490</td>
    <td>311</td>
    <td>800</td>
    <td> Up to 70 Segment IDs; 7 bytes each 7 x 70 = 490</td>
  </tr>
</table>  


## <span id="appendix13.19">Work Area 2 (COW) - Function 3C Extended </span>

<b>Block Face Defined by 'On' Street, Two Cross Streets and Compass Direction</b>


<table>
  <tr>
      <th rowspan="2">FIELD</th>
      <th rowspan="2">SIZE</th>
      <th colspan="2">POSITION</th>
      <th rowspan="2">COMMENT</th>
    </tr>
    <tr>
      <td>FROM</td>
      <td>TO</td>
    </tr>
  <tr>
    <td>Same as Regular Work Area 2 Function 3C</td>
    <td>300</td>
    <td>1</td>
    <td>300</td>
    <td></td>
  </tr>
  <tr>
    <td>List of 4 LGCs for Street 1 </td>
    <td>8</td>
    <td>301</td>
    <td>308</td>
    <td>‘On’ Street</td>
  </tr>
  <tr>
    <td>List of 4 LGCs for Street 2</td>
    <td>8</td>
    <td>309</td>
    <td>316</td>
    <td>Input Cross Street with Lower B5SC</td>
  </tr>
  <tr>
    <td>List of 4 LGCs for Street 3 </td>
    <td>8</td>
    <td>317</td>
    <td>324</td>
    <td>Input Cross Street with Higher B5SC</td>
  </tr>
  <tr>
    <td>Left Health Center District</td>
    <td>2</td>
    <td>325</td>
    <td>326</td>
    <td></td>
  </tr>
  <tr>
    <td>Right Health Center District</td>
    <td>2</td>
    <td>327</td>
    <td>328</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>1</td>
    <td>329</td>
    <td>329</td>
    <td>Was Split Community School District Flag</td>
  </tr>
  <tr>
    <td>Traffic Direction </td>
    <td>1</td>
    <td>330</td>
    <td>330</td>
    <td></td>
  </tr>
  <tr>
    <td>Roadway Type</td>
    <td>2</td>
    <td>331</td>
    <td>332</td>
    <td></td>
  </tr>
  <tr>
    <td>Physical ID</td>
    <td>7</td>
    <td>333</td>
    <td>339</td>
    <td></td>
  </tr>
  <tr>
    <td>Generic ID</td>
    <td>7</td>
    <td>340</td>
    <td>346</td>
    <td></td>
  </tr>
  <tr>
    <td>NYPD ID</td>
    <td>7</td>
    <td>347</td>
    <td>353</td>
    <td></td>
  </tr>
  <tr>
    <td>FDNY ID</td>
    <td>7</td>
    <td>354</td>
    <td>360</td>
    <td></td>
  </tr>
  <tr>
    <td>Street Status</td>
    <td>1</td>
    <td>361</td>
    <td>361</td>
    <td></td>
  </tr>
  <tr>
    <td>Street Width</td>
    <td>3</td>
    <td>362</td>
    <td>364</td>
    <td></td>
  </tr>
  <tr>
    <td>Street Width Irregular</td>
    <td>1</td>
    <td>365</td>
    <td>365</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td>Bike Lane</td>
    <td>1</td>
    <td>366</td>
    <td>366</td>
    <td>Will be retired See Bike Lane 2</td>
  </tr>
  <tr>
    <td>Federal Classification Code</td>
    <td>2</td>
    <td>367</td>
    <td>368</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td>Right Of Way Type</td>
    <td>1</td>
    <td>369</td>
    <td>369</td>
    <td></td>
  </tr>
  <tr>
    <td>List of 5 Additional LGCs for Street 1 </td>
    <td>10</td>
    <td>370</td>
    <td>379</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td>Legacy ID</td>
    <td>7</td>
    <td>380</td>
    <td>386</td>
    <td></td>
  </tr>
  <tr>
    <td>NTA Name</td>
    <td>75</td>
    <td>387</td>
    <td>461</td>
    <td></td>
  </tr>
  <tr>
    <td>FROM SPATIAL COORDINATES: </td>
    <td>14</td>
    <td>462</td>
    <td>475</td>
    <td>From Node</td>
  </tr>
  <tr>
    <td class="indentRows"> From X Coordinate</td>
    <td>7</td>
    <td>462</td>
    <td>468</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> From Y Coordinate</td>
    <td>7</td>
    <td>469</td>
    <td>475</td>
    <td></td>
  </tr>
  <tr>
    <td>TO SPATIAL COORDINATES:</td>
    <td>14</td>
    <td>476</td>
    <td>489</td>
    <td>To Node</td>
  </tr>
  <tr>
    <td class="indentRows"> To X Coordinate</td>
    <td>7</td>
    <td>476</td>
    <td>482</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows"> To Y Coordinate</td>
    <td>7</td>
    <td>483</td>
    <td>489</td>
    <td></td>
  </tr>
  <tr>
    <td>Latitude of From Intersection</td>
    <td>9</td>
    <td>490</td>
    <td>498</td>
    <td>From Node</td>
  </tr>
  <tr>
    <td>Longitude of From Intersection</td>
    <td>11</td>
    <td>499</td>
    <td>509</td>
    <td></td>
  </tr>
  <tr>
    <td>Latitude of To Intersection</td>
    <td>9</td>
    <td>510</td>
    <td>518</td>
    <td>To Node</td>
  </tr>
  <tr>
    <td>Longitude of To Intersection</td>
    <td>11</td>
    <td>519</td>
    <td>529</td>
    <td></td>
  </tr>
  <tr>
    <td>Blockface ID</td>
    <td>10</td>
    <td>530</td>
    <td>539</td>
    <td></td>
  </tr>
  <tr>
    <td>Number of Travel Lanes on the Street</td>
    <td>2</td>
    <td>540</td>
    <td>541</td>
    <td></td>
  </tr>
  <tr>
    <td>Number of Parking Lanes on the Street</td>
    <td>2</td>
    <td>542</td>
    <td>543</td>
    <td></td>
  </tr>
  <tr>
    <td>Number of Total Lanes on the Street</td>
    <td>2</td>
    <td>544</td>
    <td>545</td>
    <td></td>
  </tr>
  <tr>
    <td>Bike Lane 2</td>
    <td>2</td>
    <td>546</td>
    <td>547</td>
    <td></td>
  </tr>
  <tr>
    <td>Street Width Maximum</td>
    <td>3</td>
    <td>548</td>
    <td>550</td>
    <td></td>
  </tr>
  <tr>
    <td>Bike Traffic Direction</td>
    <td>2</td>
    <td>551</td>
    <td>552</td>
    <td></td>
  </tr>
  <tr>
    <td>Speed Limit</td>
    <td>2</td>
    <td>553</td>
    <td>554</td>
    <td></td>
  </tr>
  <tr>
    <td>PUMA Code</td>
    <td>5</td>
    <td>555</td>
    <td>559</td>
    <td></td>
  </tr>
  <tr>
    <td>Police Sector</td>
    <td>4</td>
    <td>560</td>
    <td>563</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>287</td>
    <td>564</td>
    <td>850</td>
    <td></td>
  </tr>
</table>


## <span id="appendix13.20">Work Area 2 (COW) - Function 3C Extended with Auxiliary Segment List</span>

<b>Street Segment Defined By 'On' Street and Two Cross Streets</b>

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <td>FROM</td>
    <td>TO</td>
  </tr>
  <tr>
    <td>Same as Work Area 2 for Function 3C Extended</td>
    <td>850</td>
    <td>1</td>
    <td>850</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>6</td>
    <td>851</td>
    <td>856</td>
    <td></td>
  </tr>
  <tr>
    <td>Segment Count</td>
    <td>4</td>
    <td>857</td>
    <td>860</td>
    <td>Number of Segments</td>
  </tr>
  <tr>
    <td>Segment IDs</td>
    <td>490</td>
    <td>861</td>
    <td>1350</td>
    <td> Up to 70 Segment IDs 7 bytes each 7 x 70 = 490</td>
  </tr>
</table>



## <span id="appendix13.21">Work Area 2 (COW) - Function 3S</span>

<b>Street Stretch Defined by 'On' Street and Optionally Two Cross Streets</b>  

<table>
  <tr>
    <th rowspan="2">FIELD</th>
    <th rowspan="2">SIZE</th>
    <th colspan="2">POSITION</th>
    <th rowspan="2">COMMENT</th>
  </tr>
  <tr>
    <td>FROM</td>
    <td>TO</td>
  </tr>
  <tr>
    <td>Internal Use</td>
    <td>2</td>
    <td>1</td>
    <td>2</td>
    <td></td>
  </tr>
  <tr>
    <td>Generic/Roadbed Street Name Indicator</td>
    <td>1</td>
    <td>3</td>
    <td>3</td>
    <td>G - Generic R - Roadbed</td>
  </tr>
  <tr>
    <td>Borough Code</td>
    <td>1</td>
    <td>4</td>
    <td>4</td>
    <td></td>
  </tr>
  <tr>
    <td>5-Digit Street Code of 'On' Street</td>
    <td>5</td>
    <td>5</td>
    <td>9</td>
    <td></td>
  </tr>
  <tr>
    <td>LGC</td>
    <td>2</td>
    <td>10</td>
    <td>11</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>10</td>
    <td>12</td>
    <td>21</td>
    <td>Always Blank</td>
  </tr>
  <tr>
    <td>Number of Intersections</td>
    <td>3</td>
    <td>22</td>
    <td>24</td>
    <td>Maximum of 350</td>
  </tr>
  <tr>
    <td>LIST OF INTERSECTIONS:
Variable length list of up to 350 entries;
each is 55 bytes long, structured as follows:</td>
    <td>19250</td>
    <td>25</td>
    <td>19274</td>
    <td>Max. of 350 entries, each 55 bytes long: 350 x 55 = 19,250</td>
  </tr>
  <tr>
    <td class="indentRows">Marble Hill/Rikers Island Flag</td>
    <td>(1)</td>
    <td>(1)</td>
    <td>(1)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">Distance from previous intersection in list</td>
    <td>(5)</td>
    <td>(2)</td>
    <td>(60)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">Gap Flag</td>
    <td> (1)</td>
    <td> (7)</td>
    <td> (7)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">Node Number</td>
    <td> (7)</td>
    <td> (8)</td>
    <td> (14)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">Number of streets at this intersection</td>
    <td> (1)</td>
    <td> (15)</td>
    <td> (15)</td>
    <td></td>
  </tr>
  <tr>
    <td class="indentRows">List of Cross Streets at this Intersection (Up to 5 B7SCs)</td>
    <td> (40)</td>
    <td> (16)</td>
    <td> (55)</td>
    <td>B7SC = B5SC + DCP Preferred LGC</td>
  </tr>
  <tr>
    <td>* End of 55-byte entry * </td>
    <td colspan="4"></td>
  </tr>
  <tr>
    <td>*** End of Work Area *** (19,274 bytes)</td>
    <td colspan="4"></td>
  </tr>
</table>
