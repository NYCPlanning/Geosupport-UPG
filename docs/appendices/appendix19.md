<h2 class="pdfAppendix"><center>APPENDIX 19: WORK AREA LAYOUTS (COWs)</center></h2>  

## <span id="appendix19.1">Character-Only Work Areas</span>  
(as of Geosupport System Software Version 9.7.0)  

This appendix contains layouts of all of the work areas used with the Geosupport System’s API. These layouts are current as of the Geosupport software version indicated above. The layouts are in the Character-Only Work Area format<a href="#appendix19-4" id="appendix19-4-4"><sup>4</sup></a>  

Some Geosupport functions can only be called using one work area, Work Area 1 (WA1). Other functions can be called using two work areas, WA1 and Work Area 2 (WA2). WA1 contains both input fields (fields used to pass data from the application to Geosupport) and output fields (fields used to pass data from Geosupport to the application). WA1 is organized so that all the input fields occur first, followed by all the output fields. WA2 contains output fields only.  

All functions use the same WA1 layout, but the set of WA1 fields that are used depends on the function. In the layout of WA1 in this appendix, the column labeled ‘Functions’ indicates which functions use each field.  

The functions that can be called using two work areas use various WA2 layouts of various lengths. In some cases, several functions share a single WA2 layout. For functions 1A and BL, the user has a choice of two WA2 layouts, a ‘regular’ WA2 and a ‘long’ WA2.  

The following is a list of all of the Geosupport work areas, indicating the length of each in bytes. Functions that are listed together share a single Work Area 2 layout.  

<table class="borderlessTable">
<tr align="left">
<th><u>Work Area</u></th>
<th><u>Length</u></th>
</tr>
<tr>
<td>WA1, all functions</td>
<td>1200</td>
</tr>
<tr>
<td>WA2, Function 1</td>
<td>300</td>
</tr>
<tr>
<td>Regular WA2, Functions 1A, BL, BN</td>
<td>1,363</td>
</tr>
<tr>
<td>Long WA2, Functions 1A and BL</td>
<td>17,750 </td>
</tr>
<tr>
<td>WA2, Function 1E</td>
<td>300</td>
</tr>
<tr>
<td>WA2, Function 2</td>
<td>200</td>
</tr>
<tr>
<td>WA2, Function 3</td>
<td>450</td>
</tr>
<tr>
<td>WA2, Function 3C</td>
<td>300</td>
</tr>
<tr>
<td>WA2, Function 3S</td>
<td>19,274</td>
</tr>
</table>  

[Appendix 3](/appendices/appendix03/) consists of a data item dictionary describing the fields that occur in the work areas.  

## <span id="appendix19.2">Work Area 1 (COW) - All Functions </span>

<table class="borderlessTable">
<tr align="left">
<th><u>Field</u></th>
<th><u>Size</u></th>
<th colspan="2"><u>Position</u></th>
<th><u>Functions</u><a href="#appendix19-5" id="appendix19-5-5"><sup>5</sup></a></th>
</tr>

<tr>
<td> <i>INPUT FIELDS:</i> </td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td> Geosupport Function Code </td>
<td>2</td>
<td>1</td>
<td>2</td>
<td>All</td>
</tr>
<tr>
<td> House Number - Display Format (HND) </td>
<td>16</td>
<td>3</td>
<td>18</td>
<td>1, 1A, 1E</td>
</tr>
<tr>
<td> House Number - Sort Format (HNS) </td>
<td>11</td>
<td>19</td>
<td>29</td>
<td>1, 1A, 1E, D <sup>* </sup></td>
</tr>
<tr>
<td> Low House Number - Display Format (HND) </td>
<td>16</td>
<td>30</td>
<td>45</td>
<td>Internal Use</td>
</tr>
<tr>
<td> Low House Number - Sort Format (HNS) </td>
<td>2</td>
<td>1</td>
<td>2</td>
<td>All</td>
</tr>
<tr>
<td> Geosupport Function Code </td>
<td>11</td>
<td>46</td>
<td>56</td>
<td>D<sup>* </sup>, Internal Use</td>
</tr>
<tr>
<td> Borough Code-1 </td>
<td>1</td>
<td>57</td>
<td>57</td>
<td>All but BL & BN</td>
</tr>
<tr>
<td> 10SC <a href="#appendix19-6" id="appendix19-6-6"><sup>6</sup></a>-1 </td>
<td>10</td>
<td>58</td>
<td>67</td>
<td>All but BL & BN</td>
</tr>
<tr>
<td> Street Name-1 </td>
<td>32</td>
<td>68</td>
<td>99</td>
<td>All but BL,BN & D <sup>* <sup></td>
</tr>
<tr>
<td> Borough Code<a href="appendix19-7" id=appendix19-7-7><sup>7</sup></a>-2 </td>
<td>1</td>
<td>100</td>
<td>100</td>
<td>All but 1<sup>* </sup> & B<sup>* </sup></td>
</tr>
<tr>
<td> 10SC-2 </td>
<td>10</td>
<td>101</td>
<td>110</td>
<td>All but 1<sup>* </sup> & B<sup>* </sup></td>
</tr>
<tr>
<td> Street Name-2 </td>
<td>32</td>
<td>111</td>
<td>142</td>
<td>All but 1<sup>* </sup> & B<sup>* </sup></td>
</tr>
<tr>
<td> Borough Code-3 </td>
<td>1</td>
<td>143</td>
<td>143</td>
<td>D<sup>* </sup>, 3<sup>* </sup></td>
</tr>
<tr>
<td> 10SC-3 </td>
<td>10</td>
<td>144</td>
<td>153</td>
<td>D<sup>* </sup>, 3<sup>* </sup></td>
</tr>
<tr>
<td> Street Name-3 </td>
<td>32</td>
<td>154</td>
<td>185</td>
<td>D<sup>* </sup>, 3<sup>* </sup></td>
</tr>
<tr>
<td> BOROUGH BLOCK LOT (BBL) </td>
<td>11</td>
<td>186</td>
<td>196</td>
<td>BL</td>
</tr>
<tr>
<td class="indent">Borough Code </td>
<td>1</td>
<td>186</td>
<td>186</td>
<td>BL</td>
</tr>
<tr>
<td class="indent"> Tax Block </td>
<td>5</td>
<td>187</td>
<td>191</td>
<td>BL</td>
</tr>
<tr>
<td class="indent"> Tax Lot </td>
<td>4</td>
<td>192</td>
<td>195</td>
<td>BL</td>
</tr>
<tr>
<td class="indent"> Filler for Tax Lot Version Number </td>
<td>1</td>
<td>196</td>
<td>196</td>
<td><i>Not Implemented</i> </td>
</tr>  
<tr>
<td> Building Identification Number (BIN) </td>
<td>7</td>
<td>197</td>
<td>203</td>
<td>BN</td>
</tr>
<tr>
<td> Compass Direction </td>
<td>1</td>
<td>204</td>
<td>204</td>
<td>2, 3C, 3S</td>
</tr>
<tr>
<td> Compass Direction for 2<sup>nd</sup> Intersection </td>
<td>1</td>
<td>205</td>
<td>205</td>
<td>3S</td>
</tr>
<tr>
<td> Filler </td>
<td>7</td>
<td>206</td>
<td>212</td>
<td></td>
</tr>
<tr>
<td> Work Area Format Indicator<a href="appendix19-8" id="appendix19-8-8"><sup>8</sup></a></td>
<td>1</td>
<td>213</td>
<td>213</td>
<td>All</td>
</tr>
<tr>
<td> Filler </td>
<td>101</td>
<td>214</td>
<td>314</td>
<td></td>
</tr>
<tr>
<td> Long Work Area 2 Flag<a href="appendix19-9" id="appendix19-9-9"><sup>9</sup></a></td>
<td>1</td>
<td>315</td>
<td>315</td>
<td>1A, BL</td>
</tr>
<tr>
<td> House Number Justification Flag<a href="appendix19-10" id="appendix19-10-10"><sup>10</sup></a> </td>
<td>1</td>
<td>316</td>
<td>316</td>
<td><i>Not Implemented</i></td>
</tr>
<tr>
<td> House Number Normalization Length<a href="appendix19-11" id="appendix19-11-11"><sup>11</sup></a> </td>
<td>2</td>
<td>317</td>
<td>318</td>
<td><i>Not Implemented</i></td>
</tr>
<tr>
<td> House Number Normalization Override Flag </td>
<td>1</td>
<td>319</td>
<td>319</td>
<td>Internal Use</td>
</tr>
<tr>
<td> Street Name Normalization Length Limit </td>
<td>2</td>
<td>320</td>
<td>321</td>
<td>All</td>
</tr>
<tr>
<td> Street Name Normalization Format Flag<a href="appendix19-12" id="appendix19-12-12"><sup>12</sup></a> </td>
<td>1</td>
<td>322</td>
<td>322</td>
<td>All</td>
</tr>
<tr>
<td> Cross Street Names Flag<a href="appendix19-13" id="appendix19-13-13"><sup>13</sup></a></td>
<td>1</td>
<td>323</td>
<td>323</td>
<td>1, 1E, 2, 3, 3C</td>
</tr>
<tr>
<td> Filler </td>
<td>37</td>
<td>324</td>
<td>360</td>
<td></td>
</tr>
<tr>
<td> <b><i>OUTPUT Fields:</i></b> </td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> First Borough Name </td>
<td>9</td>
<td>361</td>
<td>369</td>
<td>All but D<sup>* </sup></td>
</tr>
<tr>
<td> First Borough Name </td>
<td>9</td>
<td>361</td>
<td>369</td>
<td>All but D<sup>* </sup></td>
</tr>
<tr>
<td> House Number - Sort Format </td>
<td>11</td>
<td>386</td>
<td>396</td>
<td>1, 1A, 1E</td>
</tr>
<tr>
<td> B10SC - First Borough and Street Code </td>
<td>11</td>
<td>397</td>
<td>407</td>
<td>1<sup>* </sup>, 2, 3<sup>* </sup></td>
</tr>
<tr>
<td> First Street Name Normalized </td>
<td>32</td>
<td>408</td>
<td>439</td>
<td>All but B<sup>* </sup></td>
</tr>
<tr>
<td> B10SC - Second Borough and Street Code </td>
<td>11</td>
<td>440</td>
<td>450</td>
<td>2,3<sup>* </sup></td>
</tr>
<tr>
<td> Second Street Name Normalized </td>
<td>32</td>
<td>451</td>
<td>482</td>
<td>2,3<sup>* </sup>,D<sup>* </sup></td>
</tr>
<tr>
<td> B10SC - Third Borough and Street Code </td>
<td>11</td>
<td>483</td>
<td>583</td>
<td>3<sup>* </sup></td>
</tr>
<tr>
<td> Third Street Name Normalized </td>
<td>32</td>
<td>494</td>
<td>525</td>
<td>3<sup>* </sup>,D<sup>* </sup></td>
</tr>
<tr> </tr>
<tr>
<td> BOROUGH BLOCK LOT (BBL) </td>
<td>10</td>
<td>526</td>
<td>535</td>
<td>BL</td>
</tr>
<tr>
<td class="indent"> Borough Code </td>
<td>1</td>
<td>526</td>
<td>526</td>
<td>BL</td>
</tr>
<tr>
<td class="indent"> Tax Block </td>
<td>5</td>
<td>527</td>
<td>535</td>
<td>BL</td>
</tr>
<tr>
<td class="indent"> Tax Lot </td>
<td>4</td>
<td>532</td>
<td>535</td>
<td>BL</td>
</tr>
<tr>
<td> Filler for Tax Lot Version Number </td>
<td>1</td>
<td>536</td>
<td>536</td>
<td><i>Not Implemented</i> </td>
</tr>
<tr><td></td></tr>
<tr>
<td> Low House Number - Display Format </td>
<td>16</td>
<td>537</td>
<td>552</td>
<td>Internal Use</td>
</tr>
<tr>
<td> Low House Number - Sort Format </td>
<td>11</td>
<td>553</td>
<td>563</td>
<td>Internal Use</td>
</tr>
<tr><td></td></tr>
<tr>
<td> Building Identification Number </td>
<td>7</td>
<td>564</td>
<td>570</td>
<td>1, 1E, BN</td>
</tr>
<tr>
<td> Attribute Bytes - Internal Use Only </td>
<td>3</td>
<td>571</td>
<td>573</td>
<td>Internal Use</td>
</tr>
<tr>
<td> Filler </td>
<td>132</td>
<td>574</td>
<td>705</td>
<td></td>
</tr>
<tr>
<td> NIN<a href="appendix19-14" id="appendix19-14-14"><sup>14</sup></a> </td>
<td>6</td>
<td>706</td>
<td>711</td>
<td><i>Not Implemented</i> </td>
</tr>
<tr>
<td> Street Attribute Indicator </td>
<td>1</td>
<td>712</td>
<td>712</td>
<td>Internal Use</td>
</tr>
<tr>
<td> Reason Code</td>
<td>1</td>
<td>713</td>
<td>713</td>
<td>All</td>
</tr>
<tr>
<td> Reason Code Qualifier </td>
<td>1</td>
<td>714</td>
<td>714</td>
<td><i>Not Implemented</i></td>
</tr>
<tr>
<td> Filler </td>
<td>2</td>
<td>715</td>
<td>716</td>
<td></td>
</tr>
<tr>
<td> Geosupport Return Code </td>
<td>2</td>
<td>717</td>
<td>718</td>
<td>All</td>
</tr>
<tr>
<td> Message </td>
<td>80</td>
<td>719</td>
<td>798</td>
<td>All</td>
</tr>
<tr>
<td> Number of Street Codes and Names in List (up to 10) </td>
<td>2</td>
<td>799</td>
<td>800</td>
<td>1<sup>* </sup>,2,3<sup>* </sup></td>
</tr>
<tr>
<td> 10 B7SC's </td>
<td>80</td>
<td>801</td>
<td>880</td>
<td>1<sup>* </sup>,2,3<sup>* </sup></td>
</tr>
<tr>
<td> List of Street Names(10 Street Name Fields, 32 Bytes Each) </td>
<td>320</td>
<td>881</td>
<td>660</td>
<td>1<sup>* </sup>,2,3<sup>* </sup></td>
</tr>
</table>  


1<sup>\* </sup> = 1, 1A, 1E, 1N   
3<sup>\* </sup> = 3, 3C, 3S  
B<sup>\* </sup> = BL, BN  
D<sup>\* </sup> = D, DG, DN  




## <span id="appendix19.3">Work Area 2 (COW) - Functions 1 and 1E  </span>

<h6>Blockface Defined by Address Range Along a Street</h6>  

<table class="borderlessTable">
  <tr align="left">
    <th><u> Field </u></th>
    <th><u> Size </u></th>
    <th colspan="2"><u> Position </u></th>
    <th><u> Comments </u></th>
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
    <td>Low House Number of Block face-Sort Format</td>
    <td>11</td>
    <td>23</td>
    <td>33</td>
    <td></td>
  </tr>
  <tr>
    <td>High House Number of Block face-Sort Format</td>
    <td>11</td>
    <td>34</td>
    <td>44</td>
    <td></td>
  </tr>
  <tr>
    <td>DCP Preferred LGC<a href="appendix19-15" id="appendix19-15-15"><sup>15</sup></a></td>
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
    <td>Number of Cross Streets at High Address End</td>
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
    <td>LION KEY</td>
    <td>10</td>
    <td>109</td>
    <td>118</td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Borough Code</td>
    <td>1</td>
    <td>109</td>
    <td>109</td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Face Code</td>
    <td>4</td>
    <td>110</td>
    <td>113</td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Sequence Number</td>
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
    <td>Spatial Coordinates of Address:</td>
    <td colspan=4></td>

  </tr>
  <tr>
    <td class="indent">X Coordinate</td>
    <td>7</td>
    <td>126</td>
    <td>132</td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Y Coordinate</td>
    <td>7</td>
    <td>133</td>
    <td>139</td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Reserved for Possible Z Coordinate</td>
    <td>7</td>
    <td>140</td>
    <td>146</td>
    <td></td>
  </tr>
  <tr>
    <td>Interim Assistance Eligibility Indicator <br> Also known as Community Development Eligibility Indicator</td>
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
    <td>Community District:</td>
    <td>3</td>
    <td>150</td>
    <td>152</td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Community District Borough Code</td>
    <td>1</td>
    <td>150</td>
    <td>150</td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Community District Number</td>
    <td>2</td>
    <td>151</td>
    <td>152</td>
    <td></td>
  </tr>
  <tr>
    <td>Zip Code</td>
    <td>14</td>
    <td>158</td>
    <td>171</td>
    <td></td>
  </tr>
  <tr>
    <td>Function 1E Items</td>
    <td>14</td>
    <td>158</td>
    <td>171</td>
    <td><b>Use ONLY for Function 1E</b>
</td>
  </tr>
  <tr>
    <td class="indent">Election District</td>
    <td>3</td>
    <td>158</td>
    <td>160</td>
    <td>Invalid for Fn 1</td>
  </tr>
  <tr>
    <td class="indent">Assembly District</td>
    <td>2</td>
    <td>161</td>
    <td>162</td>
    <td>Invalid for Fn 1</td>
  </tr>
  <tr>
    <td class="indent">Split Election District Flag</td>
    <td>1</td>
    <td>163</td>
    <td>163</td>
    <td>Invalid for Fn 1</td>
  </tr>
  <tr>
    <td class="indent">Congressional District</td>
    <td>2</td>
    <td>164</td>
    <td>165</td>
    <td>Invalid for Fn 1</td>
  </tr>
  <tr>
    <td class="indent">State Senatorial District</td>
    <td>2</td>
    <td>166</td>
    <td>167</td>
    <td>Invalid for Fn 1</td>
  </tr>
  <tr>
    <td class="indent">Civil Court District</td>
    <td>2</td>
    <td>168</td>
    <td>169</td>
    <td>Invalid for Fn 1</td>
  </tr>
  <tr>
    <td class="indent">City Council District</td>
    <td>2</td>
    <td>170</td>
    <td>171</td>
    <td>Invalid for Fn 1</td>
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
    <td>Fire Company Type</td>
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
    <td>Split Community School District Flag</td>
    <td>1</td>
    <td>203</td>
    <td>203</td>
    <td></td>
  </tr>
  <tr>
    <td>Community School District</td>
    <td>2</td>
    <td>204</td>
    <td>205</td>
    <td></td>
  </tr>
  <tr>
    <td>Dynamic Block</td>
    <td>3</td>
    <td>206</td>
    <td>208</td>
    <td></td>
  </tr>
  <tr>
    <td>Instructional Region</td>
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
    <td>Filler</td>
    <td>6</td>
    <td>212</td>
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
    <td>2000 Census Tract</td>
    <td>6</td>
    <td>224</td>
    <td>229</td>
    <td></td>
  </tr>
  <tr>
    <td>2000 Census Block</td>
    <td>4</td>
    <td>230</td>
    <td>233</td>
    <td></td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>51</td>
    <td>234</td>
    <td>284</td>
    <td></td>
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
</table>  


## <span id="appendix19.4">Work Area 2 (COW) - Functions 1A, BL and BN </span>

<h6>Property Defined by Address, BBL, or BIN</h6>  

<table class="borderlessTable">
  <tr align="left">
    <th><u>Field</u></th>
    <th><u>Size</u></th>
    <th colspan="2"><u> Position</u></th>
    <th><u>Comment</u></th>
  </tr>

  <tr>
    <td> Internal Use</td>
    <td> 21</td>
    <td> 1</td>
    <td> 21</td>
    <td> </td>
  </tr>
  <tr>
    <td>Continuous Parity Indicator /Duplicate Address Indicator </td>
    <td>1</td>
    <td>22</td>
    <td>22</td>
    <td> </td>
  </tr>
  <tr>
    <td class="indent">Low House Number of Defining Address Range  </td>
    <td>11</td>
    <td>23</td>
    <td>33</td>
    <td> Sort Format</td>
  </tr>
  <tr>
    <td>Borough-Tax Block-Tax Lot (BBL): </td>
    <td>10 </td>
    <td>34</td>
    <td>44</td>
    <td>Billing BBL if Condo </td>
  </tr>
  <tr>
    <td class="indent">Borough Code </td>
    <td>10</td>
    <td>34</td>
    <td>44</td>
    <td> </td>
  </tr>
  <tr>
    <td class="indent">Tax Block </td>
    <td>5</td>
    <td>35</td>
    <td>39</td>
    <td> </td>
  </tr>
  <tr>
    <td class="indent">Tax Lot </td>
    <td>4</td>
    <td>40</td>
    <td>43</td>
    <td> </td>
  </tr>
  <tr>
    <td>Filler for Tax Lot Version Number</td>
    <td>1</td>
    <td>44</td>
    <td>44</td>
    <td><i>Not Implemented</i></td>
  </tr>
  <tr>
    <td>RPAD Self-Check Code (SCC) for BBL </td>
    <td>1</td>
    <td>45</td>
    <td>45</td>
    <td> </td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>1</td>
    <td>46</td>
    <td>46</td>
    <td> </td>
  </tr>
  <tr>
    <td>RPAD Building Classification Code</td>
    <td>2</td>
    <td>47</td>
    <td>48</td>
    <td></td>
  </tr>
  <tr>
    <td>Corner Code</td>
    <td>2</td>
    <td>49</td>
    <td>50</td>
    <td> </td>
  </tr>
  <tr>
    <td>Number of Existing Structures on Lot</td>
    <td>4</td>
    <td>51 </td>
    <td>54</td>
    <td> </td>
  </tr>
  <tr>
    <td>Number of Street Frontages of Lot</td>
    <td>2</td>
    <td>55</td>
    <td>56</td>
    <td> </td>
  </tr>
  <tr>
    <td>Interior Lot Flag</td>
    <td>1</td>
    <td>57</td>
    <td>57</td>
    <td> </td>
  </tr>
  <tr>
    <td>Vacant Lot Flag</td>
    <td>1</td>
    <td>58</td>
    <td>58</td>
    <td> </td>
  </tr>
  <tr>
    <td>Irregularly-Shaped Lot Flag</td>
    <td>1</td>
    <td>59</td>
    <td>59</td>
    <td></td>
  </tr>
  <tr>
    <td>Marble Hill/Rikers Island Alternate Borough Flag</td>
    <td>1</td>
    <td>60</td>
    <td>60</td>
    <td> </td>
  </tr>
  <tr>
    <td>List of Geographic Identifiers Overflow Flag</td>
    <td>1</td>
    <td>61</td>
    <td>61</td>
    <td>When = 'E', there are more than 21 addresses for Fns 1A and BL.</td>
  </tr>
  <tr>
    <td>STROLLING KEY:</td>
    <td>19</td>
    <td>62</td>
    <td>80</td>
    <td><i>Not Implemented</i></td>
  </tr>
  <tr>
    <td class=indent>Borough</td>
    <td>1 </td>
    <td>62 </td>
    <td>62 </td>
    <td> </td>
  </tr>
  <tr>
    <td class=indent>5-Digit Street Code of ‘ON’ Street </td>
    <td>5</td>
    <td>63</td>
    <td>67</td>
    <td> </td>
  </tr>
  <tr>
    <td class=indent>Side of Street Indicator </td>
    <td>1 </td>
    <td>68 </td>
    <td>68 </td>
    <td> </td>
  </tr>
  <tr>
    <td class=indent>High House Number </td>
    <td>11 </td>
    <td>69 </td>
    <td>79 </td>
    <td>Sort Format </td>
  </tr>
  <tr>
    <td class=indent>Filler </td>
    <td> 1</td>
    <td>80 </td>
    <td>80 </td>
    <td> </td>
  </tr>
  <tr>
    <td>Reserved for Internal Use </td>
    <td>1 </td>
    <td>81 </td>
    <td>81 </td>
    <td> </td>
  </tr>
  <tr>
    <td>Building Identification Number (BIN) of Input Address or NAP </td>
    <td>1 </td>
    <td>82 </td>
    <td>88 </td>
    <td> </td>
  </tr>
  <tr>
    <td>Condominium Flag </td>
    <td>1 </td>
    <td>89 </td>
    <td>89 </td>
    <td>If condo, Flag = C </td>
  </tr>
  <tr>
    <td>Filler </td>
    <td>1 </td>
    <td>90 </td>
    <td>90 </td>
    <td> </td>
  </tr>
  <tr>
    <td>DOF Condominium Identification Number</td>
    <td>4</td>
    <td>91</td>
    <td>94</td>
    <td> </td>
  </tr>
  <tr>
    <td>Condominium Unit ID Number</td>
    <td>7</td>
    <td>95</td>
    <td>101</td>
    <td><i>Not Implemented</i> </td>
  </tr>
  <tr>
    <td>Condominium Billing BBL</td>
    <td>10</td>
    <td>102</td>
    <td>111</td>
    <td> </td>
  </tr>
  <tr>
    <td>Tax Lot Version Number for Billing BBL</td>
    <td>1</td>
    <td>112</td>
    <td>112</td>
    <td><i>Not Implemented</i></td>
  </tr>
  <tr>
    <td>Self-Check Code (SCC) of Billing BBL</td>
    <td>1</td>
    <td>113</td>
    <td>113</td>
    <td> </td>
  </tr>
  <tr>
    <td>Low BBL of this Building’s Condominium Units</td>
    <td>10</td>
    <td>114</td>
    <td>123</td>
    <td> </td>
  </tr>
  <tr>
    <td>Tax Lot Version Number of Low BBL</td>
    <td>1</td>
    <td>124</td>
    <td>124</td>
    <td><i>Not Implemented</i></td>
  </tr>
  <tr>
    <td>High BBL of this Building’s Condominium Units</td>
    <td>10</td>
    <td>125</td>
    <td>134</td>
    <td><i>Not Implemented</i></td>
  </tr>
  <tr>
    <td>Tax Log Version Number of High BBL</td>
    <td>1</td>
    <td>135</td>
    <td>135</td>
    <td> </td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>15</td>
    <td>136</td>
    <td>150</td>
    <td> </td>
  </tr>
  <tr>
    <td>Cooperative ID Number</td>
    <td>4</td>
    <td>151</td>
    <td>154</td>
    <td> </td>
  </tr>
  <tr>
    <td>SBVP (Sanborn Map Identifier):</td>
    <td>8</td>
    <td>155</td>
    <td>162</td>
    <td> </td>
  </tr>
  <tr>
    <td class="indent">Sanborn Borough Code</td>
    <td>1</td>
    <td>155</td>
    <td>155</td>
    <td> </td>
  </tr>
  <tr>
    <td class="indent">Volume Number</td>
    <td>2</td>
    <td>156</td>
    <td>157</td>
    <td> </td>
  </tr>
  <tr>
    <td class="indent">Volume Number Suffix</td>
    <td>1</td>
    <td>158</td>
    <td>158</td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Page Number</td>
    <td>3</td>
    <td>159</td>
    <td>161</td>
    <td> </td>
  </tr>
  <tr>
    <td class="indent">Page Number Suffix</td>
    <td>1</td>
    <td>162</td>
    <td>162</td>
    <td> </td>
  </tr>
  <tr>
    <td>DCP Commercial Study Area</td>
    <td>5</td>
    <td>163</td>
    <td>167</td>
    <td> </td>
  </tr>
  <tr>
    <td>Tax Map Number Section & Volume</td>
    <td>5</td>
    <td>168</td>
    <td>172</td>
    <td> </td>
  </tr>
  <tr>
    <td>Reserved for Tax Map Page Number</td>
    <td>4</td>
    <td>173</td>
    <td>176</td>
    <td><i>Not Implemented</i></td>
  </tr>
  <tr>
    <td>Multiple BBL Flag</td>
    <td>1</td>
    <td>177</td>
    <td>177</td>
    <td rowspan="3">These fields will be used with Multiple Entity NAPs </td>
  </tr>
  <tr>
    <td>Next BBL</td>
    <td>11</td>
    <td>178</td>
    <td>188</td>
  </tr>
  <tr>
    <td>Previous BBL</td>
    <td>11</td>
    <td>189</td>
    <td>199</td>
  </tr>
  <tr>
    <td>Spatial Coordinates of Internal Label Point:</td>
    <td colspan="4"></td>
  </tr>
  <tr>
    <td class="indent">X Coordinate</td>
    <td>7</td>
    <td>200</td>
    <td>206</td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Y Coordinate</td>
    <td>7</td>
    <td>207</td>
    <td>213</td>
    <td> </td>
  </tr>
  <tr>
    <td>Filler</td>
    <td>25</td>
    <td>214</td>
    <td>238</td>
    <td> </td>
  </tr>
  <tr>
    <td>Internal Use</td>
    <td>8</td>
    <td>239 </td>
    <td>246</td>
    <td> </td>
  </tr>
  <tr>
    <td>Number of Entries in List of Geographic Identifiers </td>
    <td>4</td>
    <td>247</td>
    <td>250</td>
    <td> </td>
  </tr>
  <tr>
    <td>List of Geographic Identifiers:</td>
    <td>1,113</td>
    <td>251</td>
    <td>1,363</td>
    <td> </td>
  </tr>
  <tr>
    <td class="indent">Variable length list of 53-byte entries as follows:</td>
    <td colspan="4>"</td>
  </tr>
  <tr>
    <td class="indent">Low House Number</td>
    <td>16</td>
    <td></td>
    <td></td>
    <td>Display format(HND)</td>
  </tr>
  <tr>
    <td class="indent">High House Number</td>
    <td>16</td>
    <td></td>
    <td></td>
    <td>Display format(HND)</td>
  </tr>
  <tr>
    <td class="indent">Borough Code</td>
    <td>1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">5-Digit Street Code</td>
    <td>5</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">DCP-Preferred Local Group Code (LGC)</td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Building Identification Number</td>
    <td>7</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Side of Street Indicator</td>
    <td>1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="indent">Geographic Identifier</td>
    <td>1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td>L - Left, R - Right <br>
      N - NAP <br>
      G - Generic NAP <br>
      X - Part of Generic NAP<br>
      B - NAUB <br>
      F - Frontage <br>
      W - Blank Wall <br>  
      Q - PseudoAddress <br>
      V - Vanity Address <br>
      R - Real Street <br>
      O - Out-of-Sequence Address <br>
      Blank - Normal Filler      
      </td>
  <tr>  
</table>  

## <span id="appendix19.5">Long Work Area 2 (COW) - Functions 1A and BL</span>  

<h6>Property Defined by Address or BBL</h6>  

<table class="borderlessTable">
<tr align="left">
  <th><u>Field</u></th>
  <th><u>Size</u></th>
  <th colspan="2"><u> Position</u></th>
  <th><u>Comment</u></th>
</tr>

<tr>
  <td> Same as Regular Work Area 2 - Functions 1A/BL</td>
  <td> 246</td>
  <td> 1</td>
  <td> 246</td>
  <td> </td>
</tr>
<tr>
  <td> Number of Buildings on Tax Lot</td>
  <td> 4</td>
  <td> 247</td>
  <td> 250</td>
  <td> </td>
</tr>  
<tr>
  <td> List of Buildings on Tax Lot</td>
  <td> 17,500</td>
  <td> 251</td>
  <td> 17,750</td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Variable length list of up to 2,500 entries,<br>
   each entry is a 7-byte BIN</td>
  <td> 7</td>
  <td> </td>
  <td> </td>
  <td> </td>
</tr>
</table>  

## <span id="appendix19.6">Work Area 2 (COW) - Function 2 </span>
<h6>Intersection Defined by Two Intersecting Streets</h6>  

<table class="borderlessTable">
<tr align="left">
  <th><u>Field</u></th>
  <th><u>Size</u></th>
  <th colspan="2"><u> Position</u></th>
  <th><u>Comment</u></th>
</tr>

<tr>
  <td> Internal Use</td>
  <td> 21</td>
  <td> 1</td>
  <td> 21</td>
  <td> </td>
</tr>
<tr>
  <td> Intersection Replication Counter</td>
  <td> 1</td>
  <td> 22</td>
  <td> 22</td>
  <td> </td>
</tr>
<tr>
  <td> DCP-Preferred LGC for Street 1</td>
  <td> 2</td>
  <td> 23</td>
  <td> 24</td>
  <td> </td>
</tr>
<tr>
  <td> DCP-Preferred LGC for Street 2</td>
  <td> 2</td>
  <td> 25</td>
  <td> 26</td>
  <td> </td>
</tr>
<tr>
  <td> Number of Intersecting Streets</td>
  <td> 1</td>
  <td> 27</td>
  <td> 27</td>
  <td> </td>
</tr>
<tr>
  <td> List of Intersecting Streets <br>
  (Up to five B5SCs, 6 bytes each)</td>
  <td> 30</td>
  <td> 28</td>
  <td> 57</td>
  <td> </td>
</tr>
<tr>
  <td> Compass Direction for Intersection Key or <br>
  Counter for Multiple Intersections</td>
  <td> 1</td>
  <td> 58</td>
  <td> 58</td>
  <td> </td>
</tr>
<tr>
  <td> FillerL</td>
  <td> 5</td>
  <td> 59</td>
  <td> 63</td>
  <td> </td>
</tr>
<tr>
  <td>LION Node Number</td>
  <td> 7</td>
  <td> 64</td>
  <td> 70</td>
  <td> </td>
</tr>
<tr>
  <td> Spatial Coordinates:</td>
  <td> 21</td>
  <td> </td>
  <td> </td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> X Coordinate</td>
  <td> 7</td>
  <td> 71</td>
  <td> 77</td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Y Coordinate</td>
  <td> 7</td>
  <td> 78</td>
  <td> 84</td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Filler</td>
  <td> 7</td>
  <td> 85</td>
  <td> 91</td>
  <td> </td>
</tr>
<tr>
  <td> SBVP1 (Sanborn Map Identifier):</td>
  <td> 8</td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td class="indent"> Borough Code</td>
  <td> 1</td>
  <td> 92</td>
  <td> 92</td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Volume Number</td>
  <td> 2</td>
  <td> 93</td>
  <td> 94</td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Volume Number Suffix</td>
  <td> 1</td>
  <td> 95</td>
  <td> 95</td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Page Number</td>
  <td> 3</td>
  <td> 96</td>
  <td> 98</td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Page Number Suffix</td>
  <td> 1</td>
  <td> 99</td>
  <td> 99</td>
  <td> </td>
</tr>
<tr>
  <td> SBVP2 (Sanborn Map Identifier):</td>
  <td> 8</td>
  <td> </td>
  <td> </td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Borough Code</td>
  <td> 1</td>
  <td> 100</td>
  <td> 100</td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Volume Number</td>
  <td> 2</td>
  <td> 101</td>
  <td> 102</td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Volume Number Suffix</td>
  <td> 1</td>
  <td> 103</td>
  <td> 103</td>
  <td> </td>
</tr>
<tr>
  <td class="indent">Page Number</td>
  <td> 3</td>
  <td> 104</td>
  <td> 106</td>
  <td> </td>
</tr>
<tr>
  <td class="indent">Page Number Suffix</td>
  <td> 1</td>
  <td> 107</td>
  <td> 107</td>
  <td> </td>
</tr>
<tr>
  <td> Marble Hill/Rikers Island Alternative Borough Flag</td>
  <td> 1</td>
  <td> 108</td>
  <td> 108</td>
  <td> </td>
</tr>
<tr>
  <td> DOT Street Light Contractor Area</td>
  <td> 1</td>
  <td> 109</td>
  <td> 109</td>
  <td> </td>
</tr>
<tr>
  <td> Community District:</td>
  <td> 3</td>
  <td> </td>
  <td> </td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Community District Borough Code</td>
  <td> 1</td>
  <td> 110</td>
  <td> 110</td>
  <td> </td>
</tr>
<tr>
  <td class="indent"> Community District Number</td>
  <td> 2</td>
  <td> 111</td>
  <td> 112</td>
  <td> </td>
</tr>
<tr>
  <td> Zip Code</td>
  <td> 5</td>
  <td> 113</td>
  <td> 117</td>
  <td> </td>
</tr>
<tr>
  <td> Health Area</td>
  <td> 4</td>
  <td> 118</td>
  <td> 121</td>
  <td> </td>
</tr>
<tr>
  <td> Police Patrol Borough Command</td>
  <td> 1</td>
  <td> 122</td>
  <td> 122</td>
  <td> </td>
</tr>
<tr>
  <td> Fire Division</td>
  <td> 2</td>
  <td> 126</td>
  <td> 127</td>
  <td> </td>
</tr>
<tr>
  <td> Fire Battalion</td>
  <td> 2</td>
  <td> 128</td>
  <td> 129</td>
  <td> </td>
</tr>
<tr>
  <td> Fire Company Type</td>
  <td> 1</td>
  <td> 130</td>
  <td> 130</td>
  <td> </td>
</tr>
<tr>
  <td> Fire Company Number</td>
  <td> 3</td>
  <td> 131</td>
  <td> 133</td>
  <td> </td>
</tr>
<tr>
  <td> Community School District</td>
  <td> 2</td>
  <td> 134</td>
  <td> 135</td>
  <td> </td>
</tr>
<tr>
  <td> 2000 Census Tract</td>
  <td> 6</td>
  <td> 136</td>
  <td> 141</td>
  <td> </td>
</tr>
<tr>
  <td> 1990 Census Tract</td>
  <td> 6</td>
  <td> 142</td>
  <td> 147</td>
  <td> </td>
</tr>
<tr>
  <td> List of Pairs of Level Codes</td>
  <td> 10</td>
  <td> 148</td>
  <td> 157</td>
  <td><i> Not Implemented</i> </td>
</tr>
<tr>
  <td> Instructional Region</td>
  <td> 2</td>
  <td> 158</td>
  <td> 159</td>
  <td> </td>
</tr>
<tr>
  <td> Filler</td>
  <td> 41</td>
  <td> 160</td>
  <td> 200</td>
  <td> </td>
</tr>
</table>  

## <span id="appendix19.7">Work Area 2 (COW) - Function 3</span>  
<h6>Street Segment Defined by 'ON' Street and Two Cross Streets</h6>  

<table class="borderlessTable">
<tr align="left">
  <th><u>Field</u></th>
  <th><u>Size</u></th>
  <th colspan="2"><u> Position</u></th>
  <th><u>Comment</u></th>
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
  <td></td>
</tr>
<tr>
  <td>DCP-Preferred LGC for Street 2</td>
  <td>2</td>
  <td>27</td>
  <td>28</td>
  <td></td>
</tr>
<tr>
  <td>DCP-Preferred LGC for Street 3</td>
  <td>29</td>
  <td>30</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>Number of Cross Streets at Low Address End</td>
  <td>1</td>
  <td>31</td>
  <td>31</td>
  <td></td>
</tr>
<tr>
  <td>List of Cross Streets at Low Address End <br>
  (Up to five B5SCs, 6 bytes each)</td>
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
  <td>List of Cross Streets at High Address End <br>
  (Up to five B5SCs, 6 bytes each)</td>
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
  <td class="indent">LION Borough Code</td>
  <td>1</td>
  <td>94</td>
  <td>94</td>
  <td></td>
</tr>
<tr>
  <td class="indent">LION Face Code</td>
  <td>4</td>
  <td>95</td>
  <td>98</td>
  <td></td>
</tr>
<tr>
  <td class="indent">LION Sequence Number</td>
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
  <td>Filler</td>
  <td>19</td>
  <td>115</td>
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
  <td>DOT Street Light Contractor Area</td>
  <td>1</td>
  <td>141</td>
  <td>141</td>
  <td></td>
</tr>
<tr>
  <td>Curve Flag</td>
  <td>1</td>
  <td>142</td>
  <td>142</td>
  <td></td>
</tr>
<tr>
  <td>Dog Leg Flag</td>
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
  <td>Filler</td>
  <td>6</td>
  <td>145</td>
  <td>150</td>
  <td></td>
</tr>
<tr>
  <td><b>LEFT SIDE:</b></td>
</tr>
<tr>
  <td>Community District:</td>
  <td>3</td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td class="indent">Community District Borough Code</td>
  <td>1</td>
  <td>151</td>
  <td>151</td>
  <td></td>
</tr>
<tr>
  <td class="indent">Community District Number</td>
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
  <td>Reserved for Geosupport Use</td>
  <td>32</td>
  <td>186</td>
  <td>217</td>
  <td></td>
</tr>
<tr>
  <td>Interim Assistance Eligibility Indicator</td>
  <td>1</td>
  <td>218</td>
  <td>218</td>
  <td></td>
</tr>
<tr>
  <td>Zip Code</td>
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
  <td>Dynamic Block</td>
  <td>3</td>
  <td>242</td>
  <td>244</td>
  <td></td>
</tr>
<tr>
  <td>Instructional Region</td>
  <td>2</td>
  <td>245</td>
  <td>246</td>
  <td></td>
</tr>
<tr>
  <td>Filler</td>
  <td>7</td>
  <td>247</td>
  <td>253</td>
  <td></td>
</tr>
<tr>
  <td>1990 Census Tract</td>
  <td>6</td>
  <td>252</td>
  <td>259</td>
  <td></td>
</tr>
<tr>
  <td>2000 Census Tract</td>
  <td>6</td>
  <td>260</td>
  <td>265</td>
  <td></td>
</tr>
<tr>
  <td>2000 Census Block</td>
  <td>4</td>
  <td>266</td>
  <td>269</td>
  <td></td>
</tr>
<tr>
  <td>Filler</td>
  <td>4</td>
  <td>374</td>
  <td>377</td>
  <td></td>
</tr>
<tr><td></td></tr>
<tr>
  <td><b>RIGHT SIDE:<b></td>
</tr>
<tr>
  <td>Community District:</td>
  <td>3</td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td class="indent">Community District Borough Code</td>
  <td>1</td>
  <td>301</td>
  <td>301</td>
  <td></td>
</tr>
<tr>
  <td class="indent">Community District Number</td>
  <td>2</td>
  <td>302</td>
  <td>303</td>
  <td></td>
</tr>
<tr>
  <td>Low House Number</td>
  <td>16</td>
  <td>304</td>
  <td>319</td>
  <td>Display Format</td>
</tr>
<tr>
  <td>High House Number</td>
  <td>16</td>
  <td>320</td>
  <td>335</td>
  <td>Display Format</td>
</tr>
<tr>
  <td>Reserved for Geosupport Use</td>
  <td>32</td>
  <td>336</td>
  <td>367</td>
  <td></td>
</tr>
<tr>
  <td>Interim Assistance Eligibility Indicator</td>
  <td>1</td>
  <td>368</td>
  <td>368</td>
  <td></td>
</tr>
<tr>
  <td>Zip Code</td>
  <td>5</td>
  <td>369</td>
  <td>373</td>
  <td></td>
</tr>
<tr>
  <td>Health Area</td>
  <td>4</td>
  <td>374</td>
  <td>377</td>
  <td></td>
</tr>
<tr>
  <td>Police Patrol Borough Command</td>
  <td>1</td>
  <td>378</td>
  <td>378</td>
  <td></td>
</tr>
<tr>
  <td>Police Precinct</td>
  <td>1</td>
  <td>379</td>
  <td>380</td>
  <td></td>
</tr>
<tr>
  <td>Fire Division</td>
  <td>2</td>
  <td>382</td>
  <td>383</td>
  <td></td>
</tr>
<tr>
  <td>Fire Battalion</td>
  <td>2</td>
  <td>384</td>
  <td>385</td>
  <td></td>
</tr>
<tr>
  <td>Fire Company Type</td>
  <td>1</td>
  <td>386</td>
  <td>386</td>
  <td></td>
</tr>
<tr>
  <td>Fire Company Number</td>
  <td>3</td>
  <td>387</td>
  <td>389</td>
  <td></td>
</tr>
<tr>
  <td>Community School District</td>
  <td>2</td>
  <td>390</td>
  <td>391</td>
  <td></td>
</tr>
<tr>
  <td>Dynamic Block</td>
  <td>3</td>
  <td>392</td>
  <td>394</td>
  <td></td>
</tr>
<tr>
  <td>Instructional Region</td>
  <td>2</td>
  <td>395</td>
  <td>396</td>
  <td></td>
</tr>
<tr>
  <td>Filler</td>
  <td>7</td>
  <td>397</td>
  <td>403</td>
  <td></td>
</tr>
<tr>
  <td>1990 Census Tract</td>
  <td>6</td>
  <td>404</td>
  <td>409</td>
  <td></td>
</tr>
<tr>
  <td>2000 Census Tract</td>
  <td>6</td>
  <td>410</td>
  <td>415</td>
  <td></td>
</tr>
<tr>
  <td>2000 Census Block</td>
  <td>4</td>
  <td>416</td>
  <td>419</td>
  <td></td>
</tr>
<tr>
  <td>Filler</td>
  <td>31</td>
  <td>420</td>
  <td>450</td>
  <td></td>
</tr>
</table>  


## <span id="appendix19.8">Work Area 2 (COW) - Function 3C  </span>
<h6>Blockface Defined by 'ON' Street, Two Cross Streets and Compass Direction</h6>  

<table class="borderlessTable">
<tr align="left">
  <th><u>Field</u></th>
  <th><u>Size</u></th>
  <th colspan="2"><u> Position</u></th>
  <th><u>Comment</u></th>
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
  <td></td>
</tr>
<tr>
  <td>DCP-Preferred LGC for Street 2</td>
  <td>2</td>
  <td>27</td>
  <td>28</td>
  <td></td>
</tr>
<tr>
  <td>DCP-Preferred LGC for Street 3</td>
  <td>2</td>
  <td>29</td>
  <td>30</td>
  <td></td>
</tr>
<tr>
  <td>Number of Cross Streets at Low Address End</td>
  <td>1</td>
  <td>31</td>
  <td>31</td>
  <td></td>
</tr>
<tr>
  <td>List of Cross Streets at Low Address End<br>
  (Up to five B5SCs, 6 bytes each)</td>
  <td>30</td>
  <td>32</td>
  <td>60</td>
  <td></td>
</tr>
<tr>
  <td>Number of Cross Streets at High Address End</td>
  <td>1</td>
  <td>62</td>
  <td>62</td>
  <td></td>
</tr>
<tr>
  <td>List of Cross Streets at High Address End <br>
  (Up to five B5SCs, 6 bytes each)</td>
  <td>30</td>
  <td>63</td>
  <td>92</td>
  <td></td>
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
  <td class="indent">LION Borough Code</td>
  <td>1</td>
  <td>94</td>
  <td>94</td>
  <td></td>
</tr>
<tr>
  <td class="indent">LION Face Code</td>
  <td>4</td>
  <td>95</td>
  <td>98</td>
  <td></td>
</tr>
<tr>
  <td class="indent">LION Sequence Number</td>
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
  <td>Filler</td>
  <td>19</td>
  <td>155</td>
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
  <td>DOT Street Light Contractor Area</td>
  <td>1</td>
  <td>141</td>
  <td>141</td>
  <td></td>
</tr>
<tr>
  <td>Side of Street Indicator</td>
  <td>1</td>
  <td>142</td>
  <td>142</td>
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
  <td>Filler</td>
  <td>6</td>
  <td>145</td>
  <td>150</td>
  <td></td>
</tr>
<tr>
  <td>Community District:</td>
  <td>3</td>
</tr>
<tr>
  <td class="indent">Community District Borough Code</td>
  <td>1</td>
  <td>151</td>
  <td>151</td>
  <td></td>
</tr>
<tr>
  <td class="indent">Community District Number</td>
  <td>2</td>
  <td>152</td>
  <td>153</td>
  <td></td>
</tr>
<tr>
  <td>Low House Number of Block Face</td>
  <td>16</td>
  <td>154</td>
  <td>169</td>
  <td>Display Format</td>
</tr>
<tr>
  <td>High House Number of Block Face</td>
  <td>16</td>
  <td>170</td>
  <td>185</td>
  <td>Display Format</td>
</tr>
<tr>
  <td>Alternate Low House Number</td>
  <td>16</td>
  <td>186</td>
  <td>201</td>
  <td>Supplied for Continuous</td>
</tr>
<tr>
  <td>Alternate High House Number</td>
  <td>16</td>
  <td>202</td>
  <td>217</td>
  <td>Parity - Display Format</td>
</tr>
<tr>
  <td>Interim Assistance Eligibility Indicator</td>
  <td>1</td>
  <td>218</td>
  <td>218</td>
  <td></td>
</tr>
<tr>
  <td>Zip Code</td>
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
  <td>Dynamic Block</td>
  <td>3</td>
  <td>242</td>
  <td>244</td>
  <td></td>
</tr>
<tr>
  <td>Instructional Region</td>
  <td>2</td>
  <td>245</td>
  <td>246</td>
  <td></td>
</tr>
<tr>
  <td>Filler</td>
  <td>7</td>
  <td>247</td>
  <td>253</td>
  <td></td>
</tr>
<tr>
  <td>1990 Census Tract</td>
  <td>6</td>
  <td>254</td>
  <td>259</td>
  <td></td>
</tr>
<tr>
  <td>2000 Census Tract</td>
  <td>6</td>
  <td>260</td>
  <td>265</td>
  <td></td>
</tr>
<tr>
  <td>2000 Census Block</td>
  <td>4</td>
  <td>266</td>
  <td>269</td>
  <td></td>
</tr>
<tr>
  <td>Filler</td>
  <td>31</td>
  <td>270</td>
  <td>300</td>
  <td></td>
</tr>
</table>  


## <span id="appendix19.9">Work Area 2 (COW) - Function 3S </span>
<h6>Street Stretch Defined by 'ON' Street and Optionally Two Cross Streets </h6>  

<table class="borderlessTable">
<tr align="left">
<th><u>Field</u></th>
<th><u>Size</u></th>
<th colspan="2"><u>Position</u></th>
<th><u>Comment</u></th>
</tr>

<tr>
<td>Internal Use</td>
<td>2</td>
<td>1</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>Primary/Secondary Street Name Indicator</td>
<td>1</td>
<td>3</td>
<td>3</td>
<td>P=Primary <br>
S = Secondary<a href="appendix19-16" id="appendix19-16-16"><sup>16</sup></a></td>
</tr>
<tr>
<td>Borough Code</td>
<td>1</td>
<td>4</td>
<td>4</td>
<td></td>
</tr>
<tr>
<td>5-Digit Street Code of 'on' Street</td>
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
<td>Blank if P in position 3</td>
</tr>
<tr>
<td>Filler</td>
<td>10</td>
<td>12</td>
<td>21</td>
<td>Always Blank</td>
</tr>
<tr>
<td>NUMBER OF INTERSECTIONS </td>
<td>3</td>
<td>22</td>
<td>24</td>
<td></td>
</tr>
<tr>
<td>LIST OF UP TO 350 Intersections <br>
Each List Entry is 55 bytes in length, structured as follows:</td>
<td>19,250</td>
<td>25</td>
<td>19,274</td>
<td></td>
</tr>
<tr>
<td class="indent">Marble Hill/Rikers Island Flag</td>
<td>1</td>
</tr>
<tr>
<td class="indent">Distance from previous intersection in list</td>
<td>5</td>
</tr>
<tr>
<td class="indent">Gap Flag</td>
<td>1</td>
</tr>
<tr>
<td class="indent"> Node Number</td>
<td>7</td>
</tr>
<tr>
<td class="indent">Number of streets at this intersection</td>
<td>1</td>
</tr>
<tr>
<td class="indent">B7SC of a street at this intersection (up to 5)</td>
<td>40</td>
<td></td>
<td></td>
<td>DCP Preferred LGC </td>
</tr>
</table>  




    /*******************************************/*
    typedef struct {
      char boro; /* Borough Code char SC10[10]; /*
    }
    /*******************************************/*


<p>_____________________________</p>

<a href="#appendix19-4-4"><sup id="appendix19-4">4</sup></a> Geosupport Desktop Edition supports the Character-Only Work Area format. The mainframe version of Geosupport supports both the Character-Only format (COW) and the Mainframe Specific format (MFS).  

<a href="#appendix19-5-5"><sup id="appendix19-5">5</sup></a> An asterisk in the second position of a function code is used as a shorthand notation to represent all function codes having the indicated value in the first position, as follows:  

<a href="#appendix19-6-6"><sup id="appendix19-6">6</sup></a> The user may supply either a 5-Digit, 7-Digit or 10-Digit Street code in this field. The contents are to be left-justified and blank-filled.  

<a href="#appendix19-7-7"><sup id="appendix19-7">7</sup></a> The second and third borough codes are only required if they differ from the first.  

<a href="#appendix19-8-8"><sup id="appendix19-8">8</sup></a> When the Work Area Format Indicator (a.k.a. the Platform Indicator) is set to C, Character-Only formats of the work areas (i.e., the formats documented herein) are used. A blank in this indicator means that the mainframe compatible work areas, known as MFS, are used.  

<a href="#appendix19-9-9"><sup id="appendix19-9">9</sup></a> The Long Work Area 2 Flag is set to L to request the Long Work Area 2. At present it may only be set to L for Functions 1A and BL and means that a list of BINS will be returned in Work Area 2 to the user in place of the list of addresses.  

<a href="#appendix19-10-10"><sup id="appendix19-10">10</sup></a> If the house number is to be right justified, the House Number Justification Flag is set to R and if the house number is to be left justified, the House Number Justification Flag is set to L or left blank.  

<a href="#appendix19-11-11"><sup id="appendix19-11">11</sup></a> The House Number Normalization Length field is used to achieve compatibility between the MainFrame Specific (MFS) work areas and the COWs. In the COWs, the House Number is permitted to be 16 characters, but, in the MFS, it is limited to 12 characters. It is not anticipated that users will make use of this field.  

<a href="#appendix19-12-12"><sup id="appendix19-12">12</sup></a> If the Street Name Normalization Format Flag is set to S or blank, then the street name is returned in sort format. If it is set to C, then the street name is returned in compact format.  

<a href="#appendix19-13-13"><sup id="appendix19-13">13</sup></a> The Cross Street Names Flag (a.k.a Expanded Format Flag), if set to E, will return the street names in the List of Street Names in the output section of Work Area 1. BBL and BIN are also returned where possible.  

<a href="#appendix19-14-14"><sup id="appendix19-14">14</sup></a> NAP Identification Number  

<a href="#appendix19-15-15"><sup id="appendix19-15">15</sup></a> For Function 1E, the Board of Elections preferred LGC is provided.

<a href="#appendix19-16-16"><sup id="appendix19-16">16</sup></a> The functionality which creates the street stretches based upon the different LGCs has not been implemented.  
