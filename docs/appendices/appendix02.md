<h2 class="pdfAppendix"><center>APPENDIX 2: MAINFRAME-SPECIFIC WORK AREA LAYOUTS(MSW)</center></h2>
<h6><center>(as of Geosupport System Software Version 19.4 - Layouts unchanged since 15.3)</center></h6>

<!--<h3><center>IMPORTANT MSW ANNOUNCEMENT"</center><h3>-->
<!---<h3><center>SUPPORT FOR MSW WORK AREAS IS ENDING AS OF JANUARY 1, 2020</center></h3>-->


## <span id="apppendix02.01"><center>IMPORTANT MSW / COW ANNOUNCEMENT</center></span>
## <span id="apppendix02.02"><center>SUPPORT FOR MSW WORK AREAS ENDED ON JANUARY 1, 2020</center></span>

**As of January 1, 2020, Mainframe-Specific Work Areas (MSWs) are no longer supported.**    **Also, as of Version 19.3, <u>COW Work Areas are no longer enhanced in the mainframe environment</u>.**  It is therefore <u>important for users to convert all existing MSW applications to the COW format in a non-mainframe environment</u>.  

User-written application programs and GBAT utilities that use the MSW format may continue to run but no technical support will be available.  **If an MSW issue arises, users can no longer call DCP for resolution.**

To assist users in the conversion to COW format:  

   *  [Appendix 12](../appendix12/) contains information needed to create COW applications.    
   *  [Appendix 13](../appendix13/) contains the COW Work Area Layouts.  
   *  [Appendix 14](../appendix14/) contains the COW copy files.   

Any further issues may be directed via email to: Geosupport_DL@planning.nyc.gov


## <span id="apppendix02.03">Appendix 2 Begins</span>

This appendix contains layouts of all of the work MSW areas used with the Geosupport System’s API.  As of January 1, 2020, these layouts are no longer supported.  

Some Geosupport functions can only be called using one work area, Work Area 1 (WA1). Other functions can be called using two work areas, WA1 and Work Area 2 (WA2).  For a discussion of one-work-area and two-work-area calls, [see Chapter II.4](../../chapters/chapterII/section04/).  WA1 contains both input fields (fields used to pass data from the application to Geosupport) and output fields (fields used to pass data from Geosupport to the application).  WA1 is organized so that the input fields occur first, followed by a filler, followed by the output fields.  WA2 contains output fields only.

All functions use the same WA1 layout, but the set of WA1 fields that are used depends on the function.  In the layout of WA1 in this appendix, the column labeled ‘Functions’ indicates which functions use each field.

The functions that can be called using two work areas use various WA2 layouts of various lengths.  In some cases, several functions share a single WA2 layout.  For some functions, the user has a choice of two WA2 layouts, a ‘regular’ WA2 and a ‘long’ WA2.  For a discussion of the long WA2 option, [see Chapter II.5](../../chapters/chapterII/section05/).

The following is a list of all of the Geosupport MSW work areas, indicating the length of each in bytes.  Functions that are listed together share a single Work Area 2 layout.  [Appendix 3](../appendix03/) consists of a data item dictionary describing the fields that occur in the work area.  

| Mainframe-Specific Work Area (MSW)    | Length     |
| :------------- | :------------- |
| WA1, all functions       | 884       |  
| Regular WA2, Function 1       | 200       |
| Long WA2, Function 1      | 300       |
| Regular WA2, Functions 1A, BL, BN      | 939       |
| Long WA2, Functions 1A and BL      | 17,683       |
| Regular WA2, Function 1E      | 200       |
| Long WA2, Function 1E      | 300       |
| WA2, Function 2      | 200       |
| Regular WA2, Function 3      | 200       |
| Long WA2, Function 3      | 300       |
| WA2, Function 3C      | 200       |
| WA2, Function 3S      | 4,224       |

## <span id="appendix02.1">Work Area 1 (MSW) - All Functions</span>
<table>
  <tr>
    <th>Field</th>
    <th>Size</th>
    <th>Position</th>
    <th>Functions</th>
  </tr>
  <tr>
    <td>INPUT FIELDS:</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Geosupport Function Code</td>
    <td>2</td>
    <td>1-2</td>
    <td>All</td>
  </tr>
  <tr>
    <td>Borough Code-1<a href="#appendix02-13" id="appendix02-13-13"><sup>13</sup></a></td>
    <td>1</td>
    <td>3</td>
    <td>All but BL, BN, D\*</td>
  </tr>
  <tr>
    <td>House Number</td>
    <td>12</td>
    <td>4-15</td>
    <td>1, 1A, 1E</td>
  </tr>

  <tr>
    <td>House Nr. in Internal Format (HNI)</td>
    <td>6</td>
    <td>16-21</td>
    <td>1, 1A, 1E, D</td>
  </tr>

  <tr>
    <td>Street Name-1</td>
    <td>32</td>
    <td>22-53</td>
    <td>All but BL, BN, D* </td>
  </tr>

  <tr>
    <td>Street Name-2</td>
    <td>32</td>
    <td>54‑85</td>
    <td>2, 3\* </td>
  </tr>

  <tr>
    <td>Street Name-3</td>
    <td>32</td>
    <td>86-117</td>
    <td>3\* </td>
  </tr>
  <tr>
    <td>Compass Direction</td>
    <td>1</td>
    <td>118</td>
    <td>2, 3C, 3S </td>
  </tr>
  <tr>
    <td>Compass Direction for 2<sup>nd</sup> Intersection</td>
    <td>1</td>
    <td>119</td>
    <td>3S</td>
  </tr>
   <tr>
    <td>PB5SC-1</td>
    <td>4</td>
    <td>120‑123</td>
    <td>1, 1A, 1E, 2, 3*, D</td>
  </tr>
   <tr>
    <td>PB5SC-2</td>
    <td>4</td>
    <td>124-127</td>
    <td>2, 3*, D</td>
  </tr>
   <tr>
    <td>PB5SC-3</td>
    <td>4</td>
    <td>128-131</td>
    <td>3*, D</td>
  </tr>
   <tr>
    <td>Roadbed Request Switch</td>
    <td>1</td>
    <td>132</td>
    <td>1, 1E, 3S</td>
  </tr>
   <tr>
    <td>Borough Code-2</td>
    <td>1</td>
    <td>133</td>
    <td>2, 3, 3C</td>
  </tr>
   <tr>
    <td>Borough Code-3</td>
    <td>1</td>
    <td>134</td>
    <td>3, 3C</td>
  </tr>
   <tr>
    <td>Street Name Normalization</td>
    <td>2</td>
    <td>135‑136</td>
    <td>All but B*</td>
  </tr>
   <tr>
    <td>Length Limit (SNL)</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
   <tr>
    <td>B10SC-1 (includes B5SC-1 and B7SC-1)</td>
    <td>11</td>
    <td>137-147</td>
    <td>1, 1A, 1E, 2, 3\*, D\*</td>
  </tr>
   <tr>
    <td>B10SC-2 (includes B5SC-2 and B7SC-2)</td>
    <td>11</td>
    <td>148-158</td>
    <td>2, 3\*, D\*</td>
  </tr>
   <tr>
    <td>B10SC-3 (includes B5SC-3 and B7SC-3)</td>
    <td>11</td>
    <td>159‑169</td>
    <td>3\*, D\*</td>
  </tr>
   <tr>
    <td>ZIP Code</td>
    <td>5</td>
    <td>170‑174</td>
    <td>1, 1A, 1E</td>
  </tr>  
   <tr>
    <td>Borough‑Block‑and‑Lot (BBL):</td>
    <td>10</td>
    <td>175‑184</td>
    <td></td>
  </tr>  
  <tr>
    <td>Borough</td>
    <td>1</td>
    <td>175</td>
    <td>BL</td>
  </tr>
  <tr>
    <td>Tax Block</td>
    <td>5</td>
    <td>176-180</td>
    <td>BL</td>
  </tr>
  <tr>
    <td>Tax Lot</td>
    <td>4</td>
    <td>181-184</td>
    <td>BL</td>
  </tr>   
  <tr>
    <td>Filler</td>
    <td>1</td>
    <td>185</td>
    <td></td>
  </tr>
  <tr>
    <td>Building Identification Number (BIN)</td>
    <td>7</td>
    <td>186‑192</td>
    <td>BN</td>
  </tr>
  <tr>
    <td>Street Name Normalization Format Flag</td>
    <td>1</td>
    <td>193</td>
    <td>All but  B*</td>
  </tr>
  <tr>
    <td>Long Work Area 2 Flag</td>
    <td>1</td>
    <td>194</td>
    <td>1, 1A, 1E, 3, BL</td>
  </tr>
  <tr>
    <td>Filler - Reserved for Geosupport Use</td>
    <td>12</td>
    <td>195-206</td>
    <td></td>
  </tr>
  <tr>
    <td>HNI-2</td>
    <td>6</td>
    <td>207-212</td>
    <td>D\*</td>
  </tr>
  <tr>
    <td>Work Area Format Indicator</td>
    <td>1</td>
    <td>213</td>
    <td>All</td>
  </tr>
   <tr>
    <td>1ABL Version Switch</td>
    <td>1</td>
    <td>214</td>
    <td>1A, BL </td>
  </tr>
   <tr>
    <td>Cross Street Names Flag</td>
    <td>1</td>
    <td>215</td>
    <td>1, 1E, 2, 3, 3C</td>
  </tr>
   <tr>
    <td>Filler</td>
    <td>4</td>
    <td>216-219</td>
    <td></td>
  </tr>
</table>  

<br>

<table>
  <tr>
    <th>Work Area 1 (MSW) - All Functions</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>Field</td>
    <td>Size</td>
    <td>Position</td>
    <td>Functions</td>
  </tr>
  <tr>
    <td>OUTPUT FIELDS:</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>HND-2</td>
    <td>12</td>
    <td>220-231</td>
    <td>D\*</td>
  </tr>
  <tr>
    <td>Borough Name </td>
    <td>9</td>
    <td>232‑240</td>
    <td>All but D*</td>
  </tr>
  <tr>
    <td>Street Name-1Normalized</td>
    <td>32</td>
    <td>241‑272</td>
    <td>All but B\*</td>
  </tr>
  <tr>
    <td>Street Name-2Normalized</td>
    <td>32</td>
    <td>273‑304</td>
    <td>2, 3\*, D\*</td>
  </tr>
  <tr>
    <td>Street Name-3Normalized</td>
    <td>32</td>
    <td>305‑336</td>
    <td>3\*, D\*</td>
  </tr>
  <tr>
    <td>HND</td>
    <td>12</td>
    <td>337‑348</td>
    <td>1, 1A, 1E, D\*</td>
  </tr>
   <tr>
    <td>HNI</td>
    <td>6</td>
    <td>349‑354</td>
    <td>1, 1A, 1E</td>
  </tr>
   <tr>
    <td>Filler</td>
    <td>7</td>
    <td>355‑361</td>
    <td></td>
  </tr>
   <tr>
    <td>PB5SC-1</td>
    <td>4</td>
    <td>362‑365</td>
    <td>1\*, 2, 3\*, D\*</td>
  </tr>
   <tr>
    <td>Filler</td>
    <td>2</td>
    <td>366‑367</td>
    <td></td>
  </tr>
   <tr>
    <td>PB5SC-2</td>
    <td>4</td>
    <td>368‑371</td>
    <td>2, 3\*, D\*</td>
  </tr>
   <tr>
    <td>Filler</td>
    <td>2</td>
    <td>372‑373</td>
    <td></td>
  </tr>
   <tr>
    <td>PB5SC-3</td>
    <td>4</td>
    <td>374‑377</td>
    <td>3\*, D\*</td>
  </tr>
   <tr>
    <td>Attribute Bytes</td>
    <td>3</td>
    <td>378‑380</td>
    <td></td>
  </tr>
   <tr>
    <td>Up to ten PB5SCs</td>
    <td>40</td>
    <td>381‑420</td>
    <td>BB, BF</td>
  </tr>
   <tr>
    <td>B10SC-1</td>
    <td>11</td>
    <td>421‑431</td>
    <td>1\*, 2, 3\*, D\*</td>
  </tr>
   <tr>
    <td>B10SC-2</td>
    <td>11</td>
    <td>432‑442</td>
    <td>2, 3\*, D\*</td>
  </tr>
   <tr>
    <td>B10SC-3</td>
    <td>11</td>
    <td>443‑453</td>
    <td>3\*, D\*</td>
  </tr>
   <tr>
    <td>Filler</td>
    <td>5</td>
    <td>454‑458</td>
    <td></td>
  </tr>
   <tr>
    <td>BBL Normalized</td>
    <td>10</td>
    <td>459‑468</td>
    <td>BL</td>
  </tr>
   <tr>
    <td>Reserved</td>
    <td>8</td>
    <td>469-476</td>
    <td></td>
  </tr>
   <tr>
    <td>Street Attribute Indicator</td>
    <td>1</td>
    <td>477</td>
    <td>1\*</td>
  </tr>
    <tr>
    <td>Reason Code</td>
    <td>1</td>
    <td>478</td>
    <td>All</td>
  </tr>
    <tr>
    <td>Filler - Reserved for Geosupport Use</td>
    <td>2</td>
    <td>479‑480 </td>
    <td></td>
  </tr>
    <tr>
    <td>Geosupport Return Code</td>
    <td>2</td>
    <td>481‑482</td>
    <td>All</td>
  </tr>
    <tr>
    <td>Geosupport Message</td>
    <td>80</td>
    <td>483‑562</td>
    <td>All</td>
  </tr>
    <tr>
    <td>Number of Street Names in List (packed)</td>
    <td>2</td>
    <td>563‑564</td>
    <td>1*, 2, 3*, BB, BF</td>
  </tr>
     <tr>
    <td>List of Street Names: (10 Street Name Fields, 32 Bytes Each)</td>
    <td>320</td>
    <td>565‑884</td>
    <td>1*, 2, 3*, BB, BF</td>
  </tr>
</table>

<b><u>\*NOTE:</u></b>  
An asterisk in the second position of a function code is used as a shorthand notation to represent all function codes having the indicated value in the first position, as follows:

1\* = 1 , 1A, 1E, 1N  
3\* = 3, 3C, 3S  
B\* = BB, BF, BL, BN  
D\* = D, DG, DN  

## <span id="appendix02.2">Regular Work Area 2 (MSW) Layout for Function 1 </span>

<table>
  <tr>
    <th>Field</th>
    <th>Size</th>
    <th>Position</th>
  </tr>
  <tr>
    <td>Filler</td>
    <td>22</td>
    <td>1-22</td>
  </tr>
  <tr>
    <td>Low House Number of Blockface</td>
    <td>6</td>
    <td>23-28</td>
  </tr>
   <tr>
    <td>High House Number of Blockface</td>
    <td>6</td>
    <td>29-34 </td>
  </tr>
   <tr>
    <td>Alley/Cross Streets Flag</td>
    <td>1</td>
    <td>35</td>
  </tr>
   <tr>
    <td>Number of Cross Streets at Low Address End</td>
    <td>1</td>
    <td>36</td>
  </tr>
   <tr>
    <td>List of Cross Streets at Low Address End (up to 5 PB5SCs)</td>
    <td>20</td>
    <td>37-56</td>
  </tr>
   <tr>
    <td>Number of Cross Streets at High Address End</td>
    <td>1</td>
    <td>57</td>
  </tr>
   <tr>
    <td>List of Cross Streets at High Address End (up to 5 PB5SCs)</td>
    <td>20</td>
    <td>58-77</td>
  </tr>
   <tr>
    <td>Community District:</td>
    <td>3</td>
    <td>78-80</td>
  </tr>
   <tr>
    <td>Community District Borough Code</td>
    <td>1</td>
    <td>78</td>
  </tr>
   <tr>
    <td>Community District Number</td>
    <td>2</td>
    <td>79-80</td>
  </tr>
   <tr>
    <td>ZIP Code</td>
    <td>5</td>
    <td>81-85</td>
  </tr>
   <tr>
    <td>DOT Street Light Contractor Area</td>
    <td>1</td>
    <td>86</td>
  </tr>
   <tr>
    <td>Health Center District</td>
    <td>2</td>
    <td>87-88</td>
  </tr>
   <tr>
    <td>Side of Street Indicator</td>
    <td>1</td>
    <td>89</td>
  </tr>
   <tr>
    <td>Continuous Parity Indicator</td>
    <td>1</td>
    <td>90</td>
  </tr>
   <tr>
    <td>2010 Census Tract</td>
    <td>6</td>
    <td>91-96</td>
  </tr>
   <tr>
    <td>2010 Census Block</td>
    <td>4</td>
    <td>97-100</td>
  </tr>
   <tr>
    <td>2010 Census Block Suffix (Not Implemented)</td>
    <td>1</td>
    <td>101-101</td>
  </tr>
   <tr>
    <td>Filler</td>
    <td>1</td>
    <td>102-102</td>
  </tr>
   <tr>
    <td>Filler</td>
    <td>2</td>
    <td>103-104</td>
  </tr>
   <tr>
    <td>Health Area</td>
    <td>4</td>
    <td>105-108</td>
  </tr>
   <tr>
    <td>Sanitation Recycling Collection Schedule</td>
    <td>3</td>
    <td>109-111</td>
  </tr>
   <tr>
    <td>Feature Type Code</td>
    <td>1</td>
    <td>112</td>
  </tr>
   <tr>
    <td>Interim Assistance Eligibility Indicator (IAEI)</td>
    <td>1</td>
    <td>113</td>
  </tr>
    <tr>
    <td>Curve Flag</td>
    <td>1</td>
    <td>114</td>
  </tr>
   <tr>
    <td>Police Patrol Borough Command</td>
    <td>1</td>
    <td>115</td>
  </tr>
   <tr>
    <td>Police Precinct</td>
    <td>3</td>
    <td>116-118</td>
  </tr>
    <tr>
    <td>School District</td>
    <td>2</td>
    <td>119-120</td>
  </tr>
    <tr>
    <td>Filler to Preserve Layout Consistency with WA2 for Function 1E</td>
    <td>14</td>
    <td>121-134</td>
  </tr>
    <tr>
    <td>Coincident Segment Count</td>
    <td>1</td>
    <td>135</td>
  </tr>
    <tr>
    <td>Segment Type Code</td>
    <td>1</td>
    <td>136</td>
  </tr>
    <tr>
    <td>Sanitation District</td>
    <td>3</td>
    <td>137-139</td>
  </tr>
    <tr>
    <td>Sanitation Collection Scheduling Section and Subsection</td>
    <td>2</td>
    <td>140-141</td>
  </tr>
   <tr>
    <td>Fire Division</td>
    <td>2</td>
    <td>142-143</td>
  </tr>
    <tr>
    <td>Fire Battalion</td>
    <td>2</td>
    <td>144-145</td>
  </tr>
    <tr>
    <td>Fire Company Type </td>
    <td>1</td>
    <td>146</td>
  </tr>
    <tr>
    <td>Fire Company Number</td>
    <td>3</td>
    <td>147-149</td>
  </tr>
    <tr>
    <td>Special Address Generated Record Flag</td>
    <td>1</td>
    <td>150</td>
  </tr>
    <tr>
    <td>Reserved for Internal Geosupport Use</td>
    <td>1</td>
    <td>151</td>
  </tr>
    <tr>
    <td>Filler (was Split Community School District Flag)</td>
    <td>1</td>
    <td>152</td>
  </tr>
   <tr>
    <td>DCP-Preferred LGC</td>
    <td>2</td>
    <td>153-154</td>
  </tr>
  <tr>
    <td>Face Code</td>
    <td>4</td>
    <td>155-158</td>
  </tr>
   <tr>
    <td>Sequence Number</td>
    <td>5</td>
    <td>159-163</td>
  </tr>
   <tr>
    <td>1990 Census Tract</td>
    <td>6</td>
    <td>164-169</td>
  </tr>
   <tr>
    <td>Filler</td>
    <td>4</td>
    <td>170-173</td>
  </tr>
    <tr>
    <td>Dynamic Block / Atomic Polygon</td>
    <td>3</td>
    <td>174-176</td>
  </tr>
    <tr>
    <td>X Coordinate</td>
    <td>7</td>
    <td>177-183</td>
  </tr>
    <tr>
    <td>Y Coordinate</td>
    <td>7</td>
    <td>184-190</td>
  </tr>
    <tr>
    <td>Segment Length in Feet</td>
    <td>5</td>
    <td>191-195</td>
  </tr>
     <tr>
    <td>Sanitation Regular Collection Schedule</td>
    <td>5</td>
    <td>196-200</td>
  </tr>
</table>  

## <span id="appendix02.3">Long Work Area 2 (MSW) Layout for Function 1</span>

<table>
  <tr>
    <th>Field</th>
    <th>Size</th>
    <th>Position</th>
  </tr>
  <tr>
    <td>Same as corresponding position in Function 1's regular WA2</td>
    <td>200</td>
    <td>1-200</td>
  </tr>
  <tr>
    <td>Segment-ID</td>
    <td>7</td>
    <td>201-207</td>
  </tr>
  <tr>
    <td>Underlying B7SC of True Street</td>
    <td>8</td>
    <td>208-215</td>
  </tr>
  <tr>
    <td>Underlying HNI on True Street</td>
    <td>6</td>
    <td>216-221</td>
  </tr>
   <tr>
    <td>2000 Census Tract</td>
    <td>6</td>
    <td>222-227</td>
  </tr>
    <tr>
    <td>2000 Census Block</td>
    <td>4</td>
    <td>228-231</td>
  </tr>
    <tr>
    <td>2000 Census Block Suffix (Not Implemented)</td>
    <td>1</td>
    <td>232-232</td>
  </tr>
    <tr>
    <td>Filler</td>
    <td>68</td>
    <td>233-300</td>
  </tr>
</table>

## <span id="appendix02.4">Regular Work Area 2 (MSW) Layout for Functions 1A, BL, BN</span>


<table>
  <tr>
    <th>Field</th>
    <th>Size</th>
    <th>Position</th>
  </tr>
  <tr>
    <td>Filler</td>
    <td>28</td>
    <td>1-28</td>
  </tr>
  <tr>
    <td>Borough-Tax Block-Tax Lot (BBL):</td>
    <td>10</td>
    <td>29-38</td>
  </tr>
  <tr>
  	<td class="indent">Borough Code</td>
    <td>1</td>
    <td>29</td>
  </tr>
  <tr>
  	<td class="indent">Tax Block</td>
    <td>5</td>
    <td>30-34</td>
  </tr>
  <tr>
  	<td class="indent">Tax Lot</td>
    <td>4</td>
    <td>35-38</td>
  </tr>
  <tr>
  	<td>Tax Lot Version Number [not implemented]</td>
    <td>1</td>
    <td>39</td>
  </tr>
  <tr>
  	<td>RPAD Self-Check Code (SCC) for BBL</td>
    <td>1</td>
    <td>40</td>
  </tr>
  <tr>
  	<td>Filler</td>
    <td>1</td>
    <td>41</td>
  </tr>
  <tr>
  	<td>RPAD Building Classification Code</td>
    <td>2</td>
    <td>42-43</td>
  </tr>
  <tr>
  	<td>Corner Code</td>
    <td>2</td>
    <td>44-45</td>
  </tr>
  <tr>
  	<td>Filler (reserved)</td>
    <td>2</td>
    <td>46-47</td>
  </tr>
  <tr>
  	<td>Number of Street Frontages of Lot</td>
    <td>2</td>
    <td>48-49</td>
  </tr>
  <tr>
  	<td>Interior Lot Flag</td>
    <td>1</td>
    <td>50</td>
  </tr>
  <tr>
  	<td>Vacant Lot Flag</td>
    <td>1</td>
    <td>51</td>
  </tr>
  <tr>
  	<td>Irregularly-Shaped Lot Flag</td>
    <td>1</td>
    <td>52</td>
  </tr>
  <tr>
  	<td>Alternative Borough Flag</td>
    <td>1</td>
    <td>53</td>
  </tr>
  <tr>
  	<td>Filler</td>
    <td>1</td>
    <td>54</td>
  </tr>
  <tr>
  	<td>Strolling Key</td>
    <td>13</td>
    <td>55-67</td>
  </tr>
  <tr>
  	<td>List of Geographic Identifiers Overflow Flag</td>
    <td>1</td>
    <td>68</td>
  </tr>
  <tr>
  	<td>Reserved for Internal Geosupport Use</td>
    <td>1</td>
    <td>69</td>
  </tr>
  <tr>
  	<td>Building Identification Number (BIN) of Input Address or NAP</td>
    <td>7</td>
    <td>70-76</td>
  </tr>
  <tr>
  	<td>Condominium Flag</td>
    <td>1</td>
    <td>77</td>
  </tr>
  <tr>
  	<td>Condominium Identification Number</td>
    <td>4</td>
    <td>78-81</td>
  </tr>
  <tr>
  	<td>Low BBL of this Building’s Condominium Units</td>
    <td>10</td>
    <td>82-91</td>
  </tr>
  <tr>
  	<td>Filler</td>
    <td>1</td>
    <td>92</td>
  </tr>
  <tr>
  	<td>Condominium Billing BBL</td>
    <td>10</td>
    <td>93-102</td>
  </tr>
  <tr>
  	<td>Filler</td>
    <td>1</td>
    <td>103</td>
  </tr>
  <tr>
  	<td>Condominium Billing BBL SCC</td>
    <td>1</td>
    <td>104</td>
  </tr>
  <tr>
  	<td>High BBL of this Building’s Condominium Units</td>
    <td>10</td>
    <td>105-114</td>
  </tr>
  <tr>
  	<td>Filler</td>
    <td>1</td>
    <td>115</td>
  </tr>
  <tr>
  	<td>SBVP (Sanborn Map Identifiers):</td>
    <td>8</td>
    <td>116-123</td>
  </tr>
  <tr>
  	<td class="indent">Sanborn Borough Code</td>
    <td>1</td>
    <td>116-123</td>
  </tr>
  <tr>
  	<td class="indent">Sanborn Volume and Volume Suffix</td>
    <td>3</td>
    <td>117-119</td>
  </tr>
  <tr>
  	<td class="indent">Sanborn Page and Page Suffix</td>
    <td>4</td>
    <td>120-123</td>
  </tr>
  <tr>
  	<td>Filler     (was DCP Commercial Area)</td>
    <td>5</td>
    <td>124-128</td>
  </tr>

  <tr>
  	<td>Cooperative Identification Number</td>
    <td>4</td>
    <td>129-132</td>
  </tr>

  <tr>
  	<td>Filler</td>
    <td>4</td>
    <td>133-136</td>
  </tr>

  <tr>
  	<td>Number of Existing Buildings on Lot</td>
    <td>4</td>
    <td>137-140</td>
  </tr>

  <tr>
  	<td>Tax Map Identifiers:</td>
    <td>9</td>
    <td>141-149</td>
  </tr>

  <tr>
  	<td class="indent">Borough Code:</td>
    <td>1</td>
    <td>141</td>
  </tr>

  <tr>
  	<td class="indent">Tax Map Section</td>
    <td>2</td>
    <td>142-143</td>
  </tr>

  <tr>
  	<td class="indent">Tax Map Volume</td>
    <td>2</td>
    <td>144-145</td>
  </tr>

  <tr>
  	<td class="indent">Tax Map Page [not yet implemented]</td>
    <td>4</td>
    <td>146-149</td>
  </tr>

  <tr>
  	<td>X Coordinate of Internal Label Point</td>
    <td>7</td>
    <td>150-156</td>
  </tr>

  <tr>
  	<td>Y Coordinate of Internal Label Point</td>
    <td>7</td>
    <td>157-163</td>
  </tr>

  <tr>
    <td>Business Improvement District (BID)</td>
    <td>6</td>
    <td>164-169</td>
  </tr>

  <tr>
   <td>Filler</td>
    <td>12</td>
    <td>170-181</td>
  </tr>

  <tr>
   <td>Number of Entries in List of Geographic Identifiers</td>
    <td>2</td>
    <td>182-183</td>
  </tr>

  <tr>
   <td>List of Geographic Identifiers, up to 21 entries - each entry consisting of 36 bytes as follows:</td>
    <td>756</td>
    <td rowspan="13" class="topVerticalTD">184-939</td>
  </tr>

  <tr>
   <td class="indent">Low House Number</td>
    <td>6</td>

  </tr>

  <tr>
   <td class="indent">Filler</td>
    <td>3</td>

  </tr>

  <tr>
   <td class="indent">High House Number</td>
    <td>6</td>

  </tr>

  <tr>
   <td class="indent">Filler</td>
    <td>3</td>

  </tr>

  <tr>
   <td class="indent">B5SC:</td>
    <td>1</td>

  </tr>

  <tr>
   <td class="indent-extra">Borough Code</td>


  </tr>

  <tr>
   <td class="indent-extra">5-Digit Street Code</td>
    <td>5</td>

  </tr>

  <tr>
   <td class="indent">DCP-Preferred LGC</td>
    <td>2</td>

  </tr>

  <tr>
   <td class="indent">BIN</td>
    <td>7</td>

  </tr>

  <tr>
   <td class="indent">Geographic Identifier Type Code</td>
    <td>1</td>
  </tr>

  <tr>
   <td class="indent">Filler</td>
    <td>1</td>

  </tr>

  <tr>
   <td class="indent">Side of Street Indicator</td>
    <td>1</td>

  </tr>

</table>  

<!-- ************************* -->

## <span id="appendix02.5">Long Work Area 2 (MSW) Layout for Functions 1A and BL</span>
<table>

  <tr>
    <th>Field</th>
    <th>Size</th>
    <th>Position</th>
  </tr>

  <tr>
    <td>Filler</td>
    <td>28</td>
    <td>1-28</td>
  </tr>

  <tr>
  	<td>Borough-Tax Block-Tax Lot (BBL):</td>
    <td>10</td>
    <td>29-38</td>
  </tr>

  <tr>
  	<td class="indent">Borough Code</td>
    <td>1</td>
    <td>29</td>
  </tr>

  <tr>
  	<td class="indent">Tax Block</td>
    <td>5</td>
    <td>30-34</td>
  </tr>

  <tr>
  	<td class="indent">Tax Lot</td>
    <td>4</td>
    <td>35-38</td>
  </tr>

  <tr>
  	<td>Filler</td>
    <td>3</td>
    <td></td>
  </tr>

  <tr>
  	<td>Tax Lot Version Number [not implemented]</td>
    <td>1</td>
    <td>39</td>
  </tr>

  <tr>
  	<td>RPAD Self-Check Code (SCC) for BBL</td>
    <td>1</td>
    <td>40</td>
  </tr>

  <tr>
  	<td>Filler</td>
    <td>1</td>
    <td>41</td>
  </tr>

  <tr>
  	<td>RPAD Building Classification Code</td>
    <td>2</td>
    <td>42-43</td>
  </tr>

  <tr>
  	<td>Corner Code</td>
    <td>2</td>
    <td>44-45</td>
  </tr>

  <tr>
  	<td>Filler (reserved)</td>
    <td>2</td>
    <td>46-47</td>
  </tr>

  <tr>
  	<td>Number of Street Frontages of Lot</td>
    <td>2</td>
    <td>48-49</td>
  </tr>

  <tr>
  	<td>Interior Lot Flag</td>
    <td>1</td>
    <td>50</td>
  </tr>

  <tr>
  	<td>Vacant Lot Flag</td>
    <td>1</td>
    <td>51</td>
  </tr>

  <tr>
  	<td>Irregularly-Shaped Lot Flag</td>
    <td>1</td>
    <td>52</td>
  </tr>

  <tr>
  	<td>Alternative Borough Flag</td>
    <td>1</td>
    <td>53</td>
  </tr>

  <tr>
  	<td>Filler</td>
    <td>15</td>
    <td>54-68</td>
  </tr>

  <tr>
  	<td>Reserved for Internal Geosupport Use</td>
    <td>1</td>
    <td>69</td>
  </tr>

  <tr>
  	<td>Building Identification Number (BIN) of Input Address or NAP</td>
    <td>7</td>
    <td>70-76</td>
  </tr>

  <tr>
  	<td>Condominium Flag</td>
    <td>1</td>
    <td>77</td>
  </tr>

  <tr>
  	<td>Condominium Identification Number</td>
    <td>4</td>
    <td>78-81</td>
  </tr>

  <tr>
  	<td>Low BBL of this Building’s Condominium Units</td>
    <td>10</td>
    <td>82-91</td>
  </tr>

  <tr>
  	<td>Filler</td>
    <td>1</td>
    <td>92</td>
  </tr>

  <tr>
    <td>Condominium Billing BBL</td>
    <td>10</td>
    <td>93-102</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>1</td>
    <td>103-102</td>
  </tr>

  <tr>
    <td>Condominium Billing BBL SCC</td>
    <td>1</td>
    <td>104</td>
  </tr>

  <tr>
    <td>High BBL of this Building’s Condominium Units</td>
    <td>10</td>
    <td>105-114</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>1</td>
    <td>115</td>
  </tr>

  <tr>
    <td>SBVP (Sanborn Map Identifiers):</td>
    <td>8</td>
    <td>116-123</td>
  </tr>

  <tr>
    <td class="indent">Sanborn Borough Code</td>
    <td>1</td>
    <td>116</td>
  </tr>

  <tr>
    <td class="indent">Sanborn Volume and Volume Suffix</td>
    <td>3</td>
    <td>117-119</td>
  </tr>

  <tr>
    <td class="indent"> Sanborn Page and Page Suffix</td>
    <td>4</td>
    <td>120-123</td>
  </tr>

  <tr>
    <td>Filler     (was DCP Commercial Area)</td>
    <td>5</td>
    <td>124-128</td>
  </tr>

  <tr>
    <td>Cooperative Identification Number</td>
    <td>4</td>
    <td>129-132</td>
  </tr>

  <tr>
    <td>Cooperative Identification Number</td>
    <td>4</td>
    <td>129-132</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>4</td>
    <td>133-136</td>
  </tr>

  <tr>
    <td>Number of Existing Buildings on Lot</td>
    <td>4</td>
    <td>137-140</td>
  </tr>

  <tr>
    <td>Tax Map Identifiers:</td>
    <td>9</td>
    <td>141-149</td>
  </tr>

  <tr>
    <td class="indent">Borough Code</td>
    <td>1</td>
    <td>141</td>
  </tr>

  <tr>
    <td class="indent">Tax Map Section</td>
    <td>2</td>
    <td>142-143</td>
  </tr>

  <tr>
    <td class="indent">Tax Map Volume</td>
    <td>2</td>
    <td>144-145</td>
  </tr>

  <tr>
    <td class="indent">Tax Map Page [not yet implemented]</td>
    <td>4</td>
    <td>146-149</td>
  </tr>

  <tr>
    <td>X Coordinate of Internal Label Point</td>
    <td>7</td>
    <td>150-156</td>
  </tr>

  <tr>
    <td>Y Coordinate of Internal Label Point</td>
    <td>7</td>
    <td>157-163</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>16</td>
    <td>164-179</td>
  </tr>

  <tr>
    <td>Number of Buildings on Tax Lot (Maximum = 2,500)</td>
    <td>4</td>
    <td>180-183</td>
  </tr>

  <tr>
    <td>List of Buildings on Tax Lot (each represented by a 7-Byte BIN)</td>
    <td>17,500</td>
    <td>184-17,683</td>
  </tr>

</table>

## <span id="appendix02.6">Regular Work Area 2 (MSW) Layout for Function 1E</span>

<table>

  <tr>
    <th>Field</th>
    <th>Size</th>
    <th>Positions</th>
  </tr>

  <tr>
    <td>Filler</td>
    <td>22</td>
    <td>1-22</td>
  </tr>

  <tr>
    <td>Low House Number of Blockface</td>
    <td>6</td>
    <td>23-28</td>
  </tr>

  <tr>
    <td>High House Number of Blockface </td>
    <td>6</td>
    <td>29-34</td>
  </tr>

  <tr>
    <td>Alley/Cross Streets Flag  </td>
    <td>1</td>
    <td>35</td>
  </tr>

  <tr>
    <td>Number of Cross Streets at Low Address End</td>
    <td>1</td>
    <td>36</td>
  </tr>

  <tr>
    <td>List of Cross Streets at Low Address End (up to 5 PB5SCs)</td>
    <td>20</td>
    <td>37-56</td>
  </tr>

  <tr>
    <td>Number of Cross Streets at High Address End</td>
    <td>1</td>
    <td>57</td>
  </tr>

  <tr>
    <td>List of Cross Streets at High Address End (up to 5 PB5SCs)</td>
    <td>20</td>
    <td>58-77</td>
  </tr>

  <tr>
    <td>Community District</td>
    <td>3</td>
    <td>78-80</td>
  </tr>

  <tr>
    <td class="indent">Community District Borough Code</td>
    <td>1</td>
    <td>78</td>
  </tr>

  <tr>
    <td class="indent">Community District Number</td>
    <td>2</td>
    <td>79-80</td>
  </tr>

  <tr>
    <td>Community District Number</td>
    <td>2</td>
    <td>79-80</td>
  </tr>

  <tr>
    <td>ZIP Code</td>
    <td>5</td>
    <td>81-85</td>
  </tr>

  <tr>
    <td>DOT Street Light Contractor Area</td>
    <td>1</td>
    <td>86</td>
  </tr>

  <tr>
    <td>Health Center District</td>
    <td>2</td>
    <td>87-88</td>
  </tr>

  <tr>
    <td>Side of Street Indicator</td>
    <td>1</td>
    <td>89</td>
  </tr>

  <tr>
    <td>Continuous Parity Indicator</td>
    <td>1</td>
    <td>90</td>
  </tr>

  <tr>
    <td>2010 Census Tract</td>
    <td>6</td>
    <td>91-96</td>
  </tr>

  <tr>
    <td>2010 Census Block</td>
    <td>4</td>
    <td>97-100</td>
  </tr>

  <tr>
    <td>2010 Census Block Suffix</td>
    <td>1</td>
    <td>101-101</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>1</td>
    <td>102-102</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>1</td>
    <td>103-104</td>
  </tr>

  <tr>
    <td>Health Area</td>
    <td>4</td>
    <td>105-108</td>
  </tr>

  <tr>
    <td>Sanitation Recycling Collection Schedule</td>
    <td>3</td>
    <td>109-111</td>
  </tr>

  <tr>
    <td>Feature Type Code</td>
    <td>1</td>
    <td>112</td>
  </tr>

  <tr>
    <td>Interim Assistance Eligibility Indicator (IAEI)</td>
    <td>1</td>
    <td>113</td>
  </tr>

  <tr>
    <td>Curve Flag</td>
    <td>1</td>
    <td>114</td>
  </tr>

  <tr>
    <td>Police Patrol Borough Command</td>
    <td>1</td>
    <td>115</td>
  </tr>

  <tr>
    <td>Police Precinct</td>
    <td>3</td>
    <td>116-118</td>
  </tr>

  <tr>
    <td>School District</td>
    <td>2</td>
    <td>119-120</td>
  </tr>

  <tr>
    <td>Election District</td>
    <td>3</td>
    <td>121-123</td>
  </tr>

  <tr>
    <td>Assembly District</td>
    <td>2</td>
    <td>124-125</td>
  </tr>

  <tr>
    <td>Split Election District Flag</td>
    <td>1</td>
    <td>126</td>
  </tr>

  <tr>
    <td>Congressional District</td>
    <td>2</td>
    <td>127-128</td>
  </tr>

  <tr>
    <td>State Senatorial District</td>
    <td>2</td>
    <td>129-130</td>
  </tr>

  <tr>
    <td>Civil Court District</td>
    <td>2</td>
    <td>131-132</td>
  </tr>

  <tr>
    <td>City Council District</td>
    <td>2</td>
    <td>133-134</td>
  </tr>

  <tr>
    <td>Coincident Segment Count </td>
    <td>1</td>
    <td>135</td>
  </tr>

  <tr>
    <td>Segment Type Code</td>
    <td>1</td>
    <td>136</td>
  </tr>

  <tr>
    <td>Sanitation District</td>
    <td>3</td>
    <td>137-139</td>
  </tr>

  <tr>
    <td>Sanitation Collection Scheduling Section and Subsection</td>
    <td>2</td>
    <td>140-141</td>
  </tr>

  <tr>
    <td>Fire Division</td>
    <td>2</td>
    <td>142-143</td>
  </tr>

  <tr>
    <td>Fire Battalion</td>
    <td>2</td>
    <td>144-145</td>
  </tr>

  <tr>
    <td>Fire Company Type</td>
    <td>1</td>
    <td>146</td>
  </tr>

  <tr>
    <td>Fire Company Number</td>
    <td>3</td>
    <td>147-149</td>
  </tr>

  <tr>
    <td>Special Address Generated Record Flag</td>
    <td>1</td>
    <td>150</td>
  </tr>

  <tr>
    <td>Reserved for Internal Geosupport Use</td>
    <td>1</td>
    <td>151</td>
  </tr>

  <tr>
    <td>Filler (was Split Community School District Flag)</td>
    <td>1</td>
    <td>152</td>
  </tr>

  <tr>
    <td>Board of Elections-Preferred LGC</td>
    <td>2</td>
    <td>153-154</td>
  </tr>

  <tr>
    <td>Face Code (was known as LION Face Code)</td>
    <td>4</td>
    <td>155-158</td>
  </tr>

  <tr>
    <td>Sequence Number (was known as LION Sequence Number)</td>
    <td>5</td>
    <td>159-163</td>
  </tr>

  <tr>
    <td>1990 Census Tract</td>
    <td>6</td>
    <td>164-169</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>4</td>
    <td>170-173</td>
  </tr>

  <tr>
    <td>Atomic Polygon (Previously known as Dynamic Block)</td>
    <td>3</td>
    <td>174-176</td>
  </tr>

  <tr>
    <td>X Coordinate</td>
    <td>7</td>
    <td>177-183</td>
  </tr>

  <tr>
    <td>Y Coordinate</td>
    <td>7</td>
    <td>184-190</td>
  </tr>

  <tr>
    <td>Segment Length in Feet</td>
    <td>5</td>
    <td>191-195</td>
  </tr>

  <tr>
    <td>Sanitation Regular Collection Schedule</td>
    <td>5</td>
    <td>196-200</td>
  </tr>


</table>

## <span id="appendix02.7">Long Work Area 2 (MSW) Layout for Function 1E</span>

<table>

  <tr>
    <th>Field</th>
    <th>Size</th>
    <th>Positions</th>
  </tr>

  <tr>
    <td>Same as corresponding positions in Function 1E's regular WA2</td>
    <td>200</td>
    <td>1-200</td>
  </tr>

  <tr>
    <td>Segment-ID (was known as LION Segment-ID)</td>
    <td>7</td>
    <td>201-207</td>
  </tr>

  <tr>
    <td>Underlying B7SC of True Street</td>
    <td>8</td>
    <td>208-215</td>
  </tr>

  <tr>
    <td>Underlying HNI on True Street</td>
    <td>6</td>
    <td>216-221</td>
  </tr>

  <tr>
    <td>2000 Census Tract</td>
    <td>6</td>
    <td>222-227</td>
  </tr>

  <tr>
    <td>2000 Census Block</td>
    <td>4</td>
    <td>228-231</td>
  </tr>

  <tr>
    <td>2000 Census Block Filler / Suffix</td>
    <td>1</td>
    <td>232-232</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>68</td>
    <td>233-300</td>
  </tr>


</table>


## <span id="appendix02.8">Work Area 2 (MSW) Layout for Function 2</span>

<table>

  <tr>
    <th>Field</th>
    <th>Size</th>
    <th>Positions</th>
  </tr>

  <tr>
    <td>Filler</td>
    <td>31</td>
    <td>1‑31</td>
  </tr>

  <tr>
    <td>DCP-Preferred LGC for Street 1</td>
    <td>2</td>
    <td>32-33</td>
  </tr>

  <tr>
    <td>DCP-Preferred LGC for Street 2</td>
    <td>2</td>
    <td>34-35</td>
  </tr>

  <tr>
    <td>Number of Intersecting Streets</td>
    <td>1</td>
    <td>36</td>
  </tr>

  <tr>
    <td>List of Intersecting Streets (up to five PB5SCs, 4 bytes each)</td>
    <td>20</td>
    <td>37‑56</td>
  </tr>

  <tr>
    <td>Compass Direction for Intersection Key</td>
    <td>1</td>
    <td>57</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>10</td>
    <td>58‑67</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>2</td>
    <td>68‑69</td>
  </tr>

  <tr>
    <td>Fire Division</td>
    <td>2</td>
    <td>70-71</td>
  </tr>

  <tr>
    <td>Fire Battalion</td>
    <td>2</td>
    <td>72-73</td>
  </tr>

  <tr>
    <td>Fire Company Type</td>
    <td>1</td>
    <td>74</td>
  </tr>

  <tr>
    <td>Fire Company Number</td>
    <td>3</td>
    <td>75-77</td>
  </tr>

  <tr>
    <td>Community District</td>
    <td>3</td>
    <td>78‑80</td>
  </tr>

  <tr>
    <td>Community District Borough Code</td>
    <td>1</td>
    <td>78</td>
  </tr>

  <tr>
    <td>Community District Number</td>
    <td>2</td>
    <td>79-80</td>
  </tr>

  <tr>
    <td>ZIP Code</td>
    <td>5</td>
    <td>81-85</td>
  </tr>

  <tr>
    <td>DOT Street Light Contractor Area</td>
    <td>1</td>
    <td>86</td>
  </tr>

  <tr>
    <td>2010 Census Tract</td>
    <td>6</td>
    <td>87‑92</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>3</td>
    <td>93‑95</td>
  </tr>

  <tr>
    <td>Health Area</td>
    <td>4</td>
    <td>96‑99</td>
  </tr>

  <tr>
    <td>Health Area</td>
    <td>4</td>
    <td>96‑99</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>9</td>
    <td>100-108</td>
  </tr>

  <tr>
    <td>Node Number (was known as LION Node Number)</td>
    <td>7</td>
    <td>109‑115</td>
  </tr>

  <tr>
    <td>X Coordinate</td>
    <td>7</td>
    <td>116-122</td>
  </tr>

  <tr>
    <td>Y Coordinate</td>
    <td>7</td>
    <td>123‑129</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>4</td>
    <td>130‑133</td>
  </tr>

  <tr>
    <td>Police Patrol Borough Command</td>
    <td>1</td>
    <td>134</td>
  </tr>

  <tr>
    <td>Police Precinct</td>
    <td>3</td>
    <td>135‑137</td>
  </tr>

  <tr>
    <td>School District (was known as Community School District)</td>
    <td>2</td>
    <td>138‑139</td>
  </tr>

  <tr>
    <td>Reserved for Internal Geosupport Use</td>
    <td>1</td>
    <td>140</td>
  </tr>

  <tr>
    <td>1990 Census Tract</td>
    <td>6</td>
    <td>141‑146</td>
  </tr>

  <tr>
    <td>SBVP1 (Sanborn Map Identifiers):</td>
    <td>8</td>
    <td>147-154</td>
  </tr>

  <tr>
    <td>Sanborn Borough Code</td>
    <td>1</td>
    <td>147</td>
  </tr>

  <tr>
    <td>Sanborn Volume and Volume Suffix</td>
    <td>3</td>
    <td>148-150</td>
  </tr>

  <tr>
    <td>Sanborn Page and Page Suffix</td>
    <td>4</td>
    <td>151-154</td>
  </tr>

  <tr>
    <td>SBVP2 (Sanborn Map Identifiers for Second Map, if any)</td>
    <td>8</td>
    <td>155-162</td>
  </tr>

  <tr>
    <td>Sanborn Borough Code</td>
    <td>1</td>
    <td>155</td>
  </tr>

  <tr>
    <td>Sanborn Volume and Volume Suffix</td>
    <td>3</td>
    <td>156-158</td>
  </tr>

  <tr>
    <td>Sanborn Page and Page Suffix</td>
    <td>4</td>
    <td>159-162</td>
  </tr>

  <tr>
    <td>Sanborn Page and Page Suffix</td>
    <td>4</td>
    <td>159-162</td>
  </tr>

  <tr>
    <td>Distance Between Duplicate Intersections</td>
    <td>5</td>
    <td>163‑167</td>
  </tr>

  <tr>
    <td>2000 Census Tract</td>
    <td>6</td>
    <td>168-173</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>27</td>
    <td>174-200</td>
  </tr>

</table>

## <span id="appendix02.9">Work Area 2 (MSW) Layout for Function 3</span>

<table>
  <tr>
    <th>Field</th>
    <th>Size</th>
    <th>Positions</th>
  </tr>

  <tr>
    <td>Filler</td>
    <td>22</td>
    <td>1‑22</td>
  </tr>

  <tr>
    <td>Curve Flag</td>
    <td>1</td>
    <td>23</td>
  </tr>

  <tr>
    <td>Locational Status</td>
    <td>1</td>
    <td>24</td>
  </tr>

  <tr>
    <td>County Boundary Indicator</td>
    <td>1</td>
    <td>25</td>
  </tr>

  <tr>
    <td>Coincident Segment Count</td>
    <td>1</td>
    <td>26</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>3</td>
    <td>27-29</td>
  </tr>

  <tr>
    <td>DCP-Preferred LGC for Street 1</td>
    <td>2</td>
    <td>30-31</td>
  </tr>

  <tr>
    <td>DCP-Preferred LGC for Street 2</td>
    <td>2</td>
    <td>32-33</td>
  </tr>

  <tr>
    <td>DCP-Preferred LGC for Street 3</td>
    <td>2</td>
    <td>34-35</td>
  </tr>

  <tr>
    <td>DCP-Preferred LGC for Street 3</td>
    <td>2</td>
    <td>34-35</td>
  </tr>

  <tr>
    <td>Number of Cross Streets at Low Address End</td>
    <td>1</td>
    <td>36</td>
  </tr>

  <tr>
    <td>List of Cross Streets at Low Address End (up to five PB5SCs)</td>
    <td>20</td>
    <td>37‑56</td>
  </tr>

  <tr>
    <td>Number of Cross Streets at High Address End</td>
    <td>1</td>
    <td>57</td>
  </tr>

  <tr>
    <td>List of Cross Streets at High Address End (up to five PB5SCs)</td>
    <td>20</td>
    <td>58‑77</td>
  </tr>

  <tr>
    <td>DOT Street Light Contractor Area</td>
    <td>1</td>
    <td>78</td>
  </tr>

  <tr>
    <td>Cross Street Reversal Flag</td>
    <td>1</td>
    <td>79</td>
  </tr>

  <tr>
    <td>Left Community District</td>
    <td>3</td>
    <td>80‑82</td>
  </tr>

  <tr>
    <td>Left Community District Borough Code</td>
    <td>1</td>
    <td>80</td>
  </tr>

  <tr>
    <td>Left Community District Number</td>
    <td>2</td>
    <td>81-82</td>
  </tr>

  <tr>
    <td>Right Community District</td>
    <td>3</td>
    <td>83‑85</td>
  </tr>

  <tr>
    <td>Right Community District Borough Code</td>
    <td>1</td>
    <td>83</td>
  </tr>

  <tr>
    <td>Right Community District Number</td>
    <td>2</td>
    <td>84-85</td>
  </tr>

  <tr>
    <td>Left ZIP Code</td>
    <td>5</td>
    <td>86‑90</td>
  </tr>

  <tr>
    <td>Right ZIP Code</td>
    <td>5</td>
    <td>91‑95</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>18</td>
    <td>96‑113</td>
  </tr>

  <tr>
    <td>Left Health Area</td>
    <td>4</td>
    <td>114‑117</td>
  </tr>

  <tr>
    <td>Right Health Area</td>
    <td>4</td>
    <td>118‑121</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>2</td>
    <td>122-123</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>2</td>
    <td>124-125</td>
  </tr>

  <tr>
    <td>Left Low House Number</td>
    <td>7</td>
    <td>126‑132</td>
  </tr>

  <tr>
    <td>Left High House Number</td>
    <td>7</td>
    <td>133‑139</td>
  </tr>

  <tr>
    <td>Right Low House Number</td>
    <td>7</td>
    <td>140‑146</td>
  </tr>

  <tr>
    <td>Right High House Number</td>
    <td>7</td>
    <td>147‑153</td>
  </tr>

  <tr>
    <td>Continuous Parity Indicator</td>
    <td>1</td>
    <td>154</td>
  </tr>

  <tr>
    <td>Face Code (was known as LION Face Code)</td>
    <td>4</td>
    <td>155-158</td>
  </tr>

  <tr>
    <td>Sequence Number (was known as LION Sequence Number)</td>
    <td>5</td>
    <td>159‑163</td>
  </tr>

  <tr>
    <td>Generated Record Flag</td>
    <td>1</td>
    <td>164</td>
  </tr>

  <tr>
    <td>Segment Length in Feet (Packed)</td>
    <td>3</td>
    <td>165-167</td>
  </tr>

  <tr>
    <td>Segment Azimuth</td>
    <td>3</td>
    <td>168‑170</td>
  </tr>

  <tr>
    <td>Segment Orientation</td>
    <td>1</td>
    <td>171</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>2</td>
    <td>172‑173</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>2</td>
    <td>174-175</td>
  </tr>

  <tr>
    <td>Left Interim Assistance Eligibility Indicator</td>
    <td>1</td>
    <td>176</td>
  </tr>

  <tr>
    <td>Right Interim Assistance Eligibility Indicator</td>
    <td>1</td>
    <td>177</td>
  </tr>

  <tr>
    <td>Dogleg Flag</td>
    <td>1</td>
    <td>178</td>
  </tr>

  <tr>
    <td>Feature Type Code</td>
    <td>1</td>
    <td>179</td>
  </tr>

  <tr>
    <td>Left Police Patrol Borough Command</td>
    <td>1</td>
    <td>180</td>
  </tr>

  <tr>
    <td>Left Police Precinct</td>
    <td>3</td>
    <td>181‑183</td>
  </tr>

  <tr>
    <td>Right Police Patrol Borough Command</td>
    <td>1</td>
    <td>184</td>
  </tr>

  <tr>
    <td>Right Police Precinct</td>
    <td>3</td>
    <td>185‑187</td>
  </tr>

  <tr>
    <td>Left School District (was known as Left Community School…)</td>
    <td>2</td>
    <td>188‑189</td>
  </tr>

  <tr>
    <td>Right School District (was known as Right Community School…)</td>
    <td>2</td>
    <td>190‑191</td>
  </tr>

  <tr>
    <td>Reserved for Internal Geosupport Use</td>
    <td>1</td>
    <td>192</td>
  </tr>

  <tr>
    <td>Segment-ID (was known an LION Segment-ID)</td>
    <td>7</td>
    <td>193-199</td>
  </tr>

  <tr>
    <td>Segment Type code</td>
    <td>1</td>
    <td>200</td>
  </tr>

</table>

## <span id="appendix02.10">Long Work Area 2 (MSW) Layout for Function 3</span>

<table>

  <tr>
    <th>Field</th>
    <th>Size</th>
    <th>Positions</th>
  </tr>

  <tr>
    <td>Same as corresponding positions in Function 3's regular WA2</td>
    <td>200</td>
    <td>1-200</td>
  </tr>

  <tr>
    <td>Left 1990 Census Tract</td>
    <td>6</td>
    <td>201‑206</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>4</td>
    <td>207‑210</td>
  </tr>

  <tr>
    <td>Left Atomic Polygon (Previously known as Dynamic Block)</td>
    <td>3</td>
    <td>211‑213</td>
  </tr>

  <tr>
    <td>Right 1990 Census Tract</td>
    <td>6</td>
    <td>214‑219</td>
  </tr>

  <tr>
    <td>Filler</td>
    <td>4</td>
    <td>220‑223</td>
  </tr>

  <tr>
    <td>Right Atomic Polygon (Previously known as Dynamic Block)</td>
    <td>3</td>
    <td>224‑226</td>
  </tr>

  <tr>
    <td>Left Fire Division</td>
    <td>2</td>
    <td>227-228</td>
  </tr>

  <tr>
    <td>Left Fire Battalion</td>
    <td>2</td>
    <td>229-230</td>
  </tr>

  <tr>
    <td>Left Fire Company Type</td>
    <td>1</td>
    <td>231</td>
  </tr>

  <tr>
    <td>Left Fire Company Number</td>
    <td>3</td>
    <td>232-234</td>
  </tr>

  <tr>
    <td>Right Fire Division</td>
    <td>2</td>
    <td>235-236</td>
  </tr>

  <tr>
    <td>Right Fire Battalion</td>
    <td>2</td>
    <td>237-238</td>
  </tr>

  <tr>
    <td>Right Fire Company Type</td>
    <td>1</td>
    <td>239-239</td>
  </tr>

  <tr>
    <td>Right Fire Company Number</td>
    <td>3</td>
    <td>240-242</td>
  </tr>

  <tr>
    <td>Left 2010 Census Tract</td>
    <td>6</td>
    <td>243-248</td>
  </tr>

  <tr>
    <td>Left 2010 Census Block</td>
    <td>4</td>
    <td>249-252</td>
  </tr>

  <tr>
    <td>Left 2010 Census Block Suffix / Filler</td>
    <td>1</td>
    <td>253</td>
  </tr>

  <tr>
    <td>Right 2010 Census Tract</td>
    <td>6</td>
    <td>254-259</td>
  </tr>

  <tr>
    <td>Right 2010 Census Block</td>
    <td>4</td>
    <td>260-263</td>
  </tr>

  <tr>
    <td>Right 2010 Census Block Suffix / Filler</td>
    <td>1</td>
    <td>264</td>
  </tr>

  <tr>
    <td>From Node</td>
    <td>7</td>
    <td>265-271</td>
  </tr>

  <tr>
    <td>To Node</td>
    <td>7</td>
    <td>272-278</td>
  </tr>

  <tr>
    <td>Left 2000 Census Tract</td>
    <td>6</td>
    <td>279-284</td>
  </tr>

  <tr>
    <td>Left 2000 Census Block Suffix</td>
    <td>1</td>
    <td>289</td>
  </tr>

  <tr>
    <td>Right 2000 Census Tract</td>
    <td>6</td>
    <td>290-295</td>
  </tr>

  <tr>
    <td>Right 2000 Census Block</td>
    <td>4</td>
    <td>296-299</td>
  </tr>

  <tr>
    <td>Right 2000 Census Block Suffix</td>
    <td>1</td>
    <td>300</td>
  </tr>

</table>

## <span id="appendix02.11">Work Area 2 (MSW) Layout for Function 3C</span>

<table>
<tr>
  <th>Field</th>
  <th>Size</th>
  <th>Positions</th>
</tr>
<tr>
  <td>Filler</td>
  <td>21</td>
  <td>1-21</td>
</tr>
<tr>
  <td>Curve Flag</td>
  <td>1</td>
  <td>22</td>
</tr>
<tr>
  <td>Segment Type Code</td>
  <td>1</td>
  <td>23</td>
</tr>
<tr>
  <td>Locational Status</td>
  <td>1</td>
  <td>24</td>
</tr>
<tr>
  <td>County Boundary Indicator</td>
  <td>1</td>
  <td>25</td>
</tr>
<tr>
  <td>Coincident Segment Count</td>
  <td>1</td>
  <td>26</td>
</tr>
<tr>
  <td>Filler</td>
  <td>3</td>
  <td>27-29</td>
</tr>
<tr>
  <td>DCP-Preferred LGC for Street 1</td>
  <td>2</td>
  <td>30-31</td>
</tr>
<tr>
  <td>DCP-Preferred LGC for Street 2</td>
  <td>2</td>
  <td>32-33</td>
</tr>
<tr>
  <td>DCP-Preferred LGC for Street 3</td>
  <td>2</td>
  <td>34-35</td>
</tr>
<tr>
  <td>Number of Cross Streets at Low Address End</td>
  <td>1</td>
  <td>36</td>
</tr>
<tr>
  <td>Number of Cross Streets at Low Address End</td>
  <td>1</td>
  <td>36</td>
</tr>
<tr>
  <td>List of Cross Streets at Low Address End (up to 5 PB5SCs)</td>
  <td>20</td>
  <td>37‑56</td>
</tr>
<tr>
  <td>Number of Cross Streets at High Address End</td>
  <td>1</td>
  <td>57</td>
</tr>
<tr>
  <td>List of Cross Streets at High Address End (up to 5 PB5SCs)</td>
  <td>20</td>
  <td>58‑77</td>
</tr>
<tr>
  <td>Community District</td>
  <td>20</td>
  <td>78‑80</td>
</tr>
<tr>
  <td>Community District Borough Code</td>
  <td>1</td>
  <td>78</td>
</tr>
<tr>
  <td>Community District Number</td>
  <td>2</td>
  <td>79-80</td>
</tr>
<tr>
  <td>ZIP Code</td>
  <td>5</td>
  <td>81-85</td>
</tr>
<tr>
  <td>DOT Street Light Contractor Area</td>
  <td>1</td>
  <td>86</td>
</tr>
<tr>
  <td>2000 Census Tract</td>
  <td>6</td>
  <td>87‑92</td>
</tr>
<tr>
  <td>Filler</td>
  <td>1</td>
  <td>93</td>
</tr>
<tr>
  <td>2010 Census Tract</td>
  <td>6</td>
  <td>94‑99</td>
</tr>
<tr>
  <td>2010 Census Block</td>
  <td>4</td>
  <td>100‑103</td>
</tr>
<tr>
  <td>2010 Census Block Suffix (Future Use)</td>
  <td>1</td>
  <td>104</td>
</tr>
<tr>
  <td>Health Area</td>
  <td>4</td>
  <td>105‑108</td>
</tr>
<tr>
  <td>Cross Street Reversal Flag</td>
  <td>1</td>
  <td>109</td>
</tr>
<tr>
  <td>Side of Street Indicator</td>
  <td>1</td>
  <td>110</td>
</tr>
<tr>
  <td>Fire Division</td>
  <td>2</td>
  <td>111-112</td>
</tr>
<tr>
  <td>Fire Battalion</td>
  <td>2</td>
  <td>113-114</td>
</tr>
<tr>
  <td>Fire Company Type</td>
  <td>1</td>
  <td>115</td>
</tr>
<tr>
  <td>Fire Company Number</td>
  <td>3</td>
  <td>116-118</td>
</tr>
<tr>
  <td>Segment-ID (was known as LION Segment-ID)</td>
  <td>7</td>
  <td>119‑125</td>
</tr>
<tr>
  <td>Low House Number of Blockface</td>
  <td>7</td>
  <td>126‑132</td>
</tr>
<tr>
  <td>High House Number of Blockface</td>
  <td>7</td>
  <td>133‑139</td>
</tr>
<tr>
  <td>Alternate Low House Number</td>
  <td>7</td>
  <td>140‑146</td>
</tr>
<tr>
  <td>Alternate High House Number</td>
  <td>7</td>
  <td>147‑153</td>
</tr>
<tr>
  <td>Continuous Parity Indicator</td>
  <td>1</td>
  <td>154</td>
</tr>
<tr>
  <td>Face Code (was known as LION Face Code)</td>
  <td>4</td>
  <td>155-158</td>
</tr>
<tr>
  <td>Sequence Number (was known as LION Sequence Number)</td>
  <td>5</td>
  <td>159‑163</td>
</tr>
<tr>
  <td>Generated Record Flag</td>
  <td>1</td>
  <td>164</td>
</tr>
<tr>
  <td>Generated Record Flag</td>
  <td>1</td>
  <td>164</td>
</tr>
<tr>
  <td>Segment Length in Feet (Packed)</td>
  <td>3</td>
  <td>165‑167</td>
</tr>
<tr>
  <td>Segment Azimuth</td>
  <td>3</td>
  <td>168‑170</td>
</tr>
<tr>
  <td>Segment Orientation</td>
  <td>1</td>
  <td>171</td>
</tr>
<tr>
  <td>Filler</td>
  <td>2</td>
  <td>172‑173</td>
</tr>
<tr>
  <td>Interim Assistance Eligibility Indicator (IAEI)</td>
  <td>1</td>
  <td>174</td>
</tr>
<tr>
  <td>Feature Type Code</td>
  <td>1</td>
  <td>175</td>
</tr>
<tr>
  <td>Police Patrol Borough Command</td>
  <td>1</td>
  <td>176</td>
</tr>
<tr>
  <td>Police Precinct</td>
  <td>3</td>
  <td>177‑179</td>
</tr>
<tr>
  <td>School District (was known as Community School District)</td>
  <td>2</td>
  <td>180‑181</td>
</tr>
<tr>
  <td>Reserved for Internal Geosupport Use</td>
  <td>1</td>
  <td>182</td>
</tr>
<tr>
  <td>1990 Census Tract</td>
  <td>6</td>
  <td>183‑188</td>
</tr>
<tr>
  <td>Filler</td>
  <td>4</td>
  <td>189‑192</td>
</tr>
<tr>
  <td>Atomic Polygon (Previously known as Dynamic Block)</td>
  <td>3</td>
  <td>193‑195</td>
</tr>
<tr>
  <td>2000 Census Block</td>
  <td>4</td>
  <td>196‑199</td>
</tr>
<tr>
  <td>2000 Census Block Suffix Filler</td>
  <td>1</td>
  <td>200</td>
</tr>
</table>

## <span id="appendix02.12">Work Area 2 (MSW) Layout for Function 3S</span>

<table>
<tr>
  <th>Field</th>
  <th>Size</th>
  <th>Positions</th>
</tr>
<tr>
  <td>Filler</td>
  <td>21</td>
  <td>1-21</td>
</tr>
<tr>
  <td>Number of Cross Streets in Stretch (Maximum = 350)</td>
  <td>3</td>
  <td>22‑24</td>
</tr>
<tr>
  <td>List of Cross Streets in Stretch, each list entry 12 bytes as follows:</td>
  <td>4200</td>
  <td>25‑4224</td>
</tr>
<tr>
  <td class="indent">Smallest PB5SC at Intersection</td>
  <td>4</td>
  <td></td>
</tr>
<tr>
  <td class="indent">Second smallest PB5SC at Intersection</td>
  <td>4</td>
  <td></td>
</tr>
<tr>
  <td class="indent">Distance from Predecessor in Feet</td>
  <td>3</td>
  <td></td>
</tr>
<tr>
  <td class="indent">Gap Flag</td>
  <td>1</td>
  <td></td>
</tr>
</table>

<p>_________________________</p>
<a href="#appendix02-13-13"><sup id="appendix02-13">13</sup></a> Borough Code values are:   '1'=Manhattan, '2'=Bronx, '3'=Brooklyn, '4'=Queens, "5"=Staten Island
