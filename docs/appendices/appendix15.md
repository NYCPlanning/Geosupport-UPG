<h2 class="pdfAppendix"><center>APPENDIX 15:  2010 CENSUS GEOGRAPHY – FUNCTIONS 1, 1E, 2, 3, and 3C</center></h2>

This appendix is based on the Geosupport System Technical Bulletin 11-01 for Geosupport Version 11.0.  If you need a copy of the Bulletin, please be in touch with the GSS Manager of Geographic Research.  Contact information is available in [Appendix 6](../appendix06/): Geosupport Feedback Procedures.

<b>As of Geosupport Software Version 11.0 / Release 11A, Geosupport returns the new 2010 Census geography (e.g. census tract and census block).  As of Software Version 11.4 / Release 12B, health areas are based on 2010 Census geography.  Note that other tract based district information (e.g. community development eligibility) will still be based on the 2000 Census geography until further notice.</b>  


<b>User Programming Considerations for 2010 Census Geography</b>

* New 2010 Census data replaces 2000 Census data
* Census 2000 data has been moved to a new location and renamed
* There is no need to do any modifications to get 2010 Census information from GBAT or programs that use offsets, since the 2010 Census information replaces the 2000 information.
* Modification is needed to get 2000 Census information from GBAT or programs that use offsets, since the 2000 information has been moved to a new location.
    * See the tables of Census Data Offsets below.
* At some point, users must modify and recompile programs that access Census information, accessing the new 2010 or 2000 Census field names
    * See the new field names in the appropriate copy files
* If users do not recompile and Census data is processed, they will get the 2010 data.  Note: If you do not recompile and you are accessing Census information via the field names in the copy books, the next time you try to recompile you will get a compile error since the existing Census field names no longer exist.  You will have to indicate at that point whether you want Census 2010 or Census 2000 by modifying the field names in the programs
* <b>MSW Users:  For Function 1/1E</b>, the 2000 Census information has been moved to Long Work Area 2, as there was no room for it in the regular Work Area 2.  Census 2010 information is in the regular Work Area 2.


Every 10 years, in conjunction with the decennial census of the population, the U.S. Census Bureau defines a new set of census geography (census tract and census block boundary lines and identifiers) throughout the nation.  The Geosupport System has been providing 1990 census tract and 2000 census tract, census block and census block suffix fields.  This data will continue to be included in the output information returned from Functions 1, 1B, 1E, 2, 3 and 3C.   

DCP/GSS received the 2010 census geography from the Census Bureau and now includes this information since File Release 11A, Geosupport Software Version 11.0.  The 1990 census information will continue to be returned in the same work area fields that have been used in previous releases.

<b>However, as of Release 11A, Version 11.0, the 2010 Census information for both COW and MSW outputs is now returned in the same positions that previously held the 2000 Census information, and the 2000 Census information has been moved to positions previously defined as filler.  Also, the field names (in the Copy Books) of the 2000 Census information fields have been changed</b>

This was done so that users who want the most current Census information will not have to immediately recompile their programs and change their GBAT jobs to get the 2010 Census information.  However, <b>whenever users recompile their programs, they will have to update the field names for the 2010 Census information, and, if they want the 2000 Census information, they will have to update the field names for that as well.</b>  The name changes were done purposely in order to force users who recompile programs that use the copylibs and look at Census information to change their programs and make decisions whether they want to continue receiving Census 2000 data and/or update their programs to receive Census 2010 data  


<b>CENSUS DATA OFFSETS – Table 1 (COW) and Table 2 (MSW)</b>

<b>TABLE 1 - Offsets for the 2010 and 2000 Census data for COW Work Area 2</b>  

<table>
<tr>
<th>Functions (COW)</th>
<th>Data Item</th>
<th>WA2 Position Prior to Release 11A</th>
<th>WA2 Position as of 11A</th>
</tr>
<tr>
<td rowspan="6">COW Fns 1, 1E and 1B </td>
<td>2010 Census Tract</td>
<td>Not Provided</td>
<td>224-229</td>
</tr>
<tr>
<td>2010 Census Block</td>
<td>Not Provided</td>
<td>230-233</td>
</tr>
<tr>
<td>2010 Census Block</td>
<td>Not Provided</td>
<td>230-233</td>
</tr>
<tr>
<td>2010 Census Filler</td>
<td>Not Provided</td>
<td>234</td>
</tr>
<tr>
<td>2000 Census Tract</td>
<td>224-229</td>
<td>235-240</td>
</tr>
<tr>
<td>2000 Census Block Suffix</td>
<td>234</td>
<td>245</td>
</tr>
<tr>
<td rowspan="2">COW Fn 2</td>
<td>2010 Census Tract</td>
<td>Not Provided</td>
<td>136-141</td>
</tr>
<tr>
<td>2000 Census Tract</td>
<td>136-141</td>
<td>176-181</td>
</tr>
<tr>
<td rowspan="12">COW Fn 3</td>
<td>2010 Left Census Tract</td>
<td>Not Provided</td>
<td>260-265</td>
</tr>
<tr>
<td>2010 Left Census Block</td>
<td>Not Provided</td>
<td>266-269</td>
</tr>
<tr>
<td>2010 Left Census Filler</td>
<td>Not Provided</td>
<td>270-270</td>
</tr>
<tr>
<td>2010 Right Census Tract</td>
<td>Not Provided</td>
<td>410-415</td>
</tr>
<tr>
<td>2010 Right Census Block</td>
<td>Not Provided</td>
<td>416-419</td>
</tr>
<tr>
<td>2010 Right Census Filler</td>
<td>Not Provided</td>
<td>420</td>
</tr>
<tr>
<td>2000 Left Census Tract</td>
<td>260-265</td>
<td>271-276</td>
</tr>
<tr>
<td>2000 Left Census Block</td>
<td>266-269</td>
<td>277-280</td>
</tr>
<tr>
<td>2000 Left Census Block Suffix</td>
<td>270-270</td>
<td>281-281</td>
</tr>
<tr>
<td>2000 Right Census Tract</td>
<td>410-415</td>
<td>421-426</td>
</tr>
<tr>
<td>2000 Right Census Block</td>
<td>416-419</td>
<td>427-430</td>
</tr>
<tr>
<td>2000 Right Census Block Suffix</td>
<td>420-420</td>
<td>431-431</td>
</tr>
<tr>
<td rowspan="6">COW Fn 3C</td>
<td>2010 Census Tract</td>
<td>Not Provided</td>
<td>260-265</td>
</tr>
<tr>
<td>2010 Census Block</td>
<td>Not Provided</td>
<td>266-269</td>
</tr>
<tr>
<td>2010 Census Filler</td>
<td>Not Provided</td>
<td>270-270</td>
</tr>
<tr>
<td>2000 Census Tract</td>
<td>260-265</td>
<td>271-276</td>
</tr>
<tr>
<td>2000 Census Block</td>
<td>266-269</td>
<td>277-280</td>
</tr>
<tr>
<td>2000 Census Block Suffix</td>
<td>270</td>
<td>281</td>
</tr>
</table>

<b>TABLE 2 - Offsets for the 2010 and 2000 Census data for MSW Work Area 2</b>

<table>
<tr>
<th>Functions (MSW)</th>
<th>Data Item</th>
<th>WA2 Position Prior to Release 11A</th>
<th>WA2 Position as of Release 11A</th>
</tr>
<tr>
<td rowspan="6">MSW Fns 1 and 1E</td>
<td>2010 Census Tract</td>
<td>Not Provided</td>
<td>91-96</td>
</tr>
<tr>
<td>2010 Census Block</td>
<td>Not Provided</td>
<td>97-100</td>
</tr>
<tr>
<td>2010 Census Filler</td>
<td>Not Provided</td>
<td>101-101</td>
</tr>
<tr>
<td>2000 Census Tract</td>
<td>91-96</td>
<td>222-227 <br>  
Available only with Long Work Area 2</td>
</tr>
<tr>
<td>2000 Census Block</td>
<td>97-100</td>
<td>228-231<br>    
Available only with Long Work Area 2</td>
</tr>
<tr>
<td>2000 Census Block Suffix</td>
<td>101-101</td>
<td>232 -232 <br>        
 Available only with Long Work  Area 2</td>
</tr>
<tr>
<td rowspan="2">MSW Fn 2</td>
<td>2010 Census Tract</td>
<td>Not Provided</td>
<td>87-92</td>
</tr>
<tr>
<td>2000 Census Tract</td>
<td>87-92</td>
<td>168-173</td>
</tr>
<tr>
<td rowspan="12">MSW Fn 3</td>
<td>2010 Left Census Tract</td>
<td>Not Provided</td>
<td>243-248 <br>      
Available only with Long Work Area 2</td>
</tr>
<tr>
<td>2010 Left Census Block</td>
<td>Not Provided</td>
<td>249-252 <br>      
Available only with Long Work Area 2</td>
</tr>
<tr>
<td>2010 Left Census Filler</td>
<td>Not Provided</td>
<td>253 - 253 <br>   
Available only with Long Work Area 2</td>
</tr>
<tr>
<td>2010 Right Census Tract</td>
<td>Not Provided</td>
<td>254-259 <br>     
Available only with  Long Work Area 2</td>
</tr>
<tr>
<td>2010 Right Census Block</td>
<td>Not Provided</td>
<td>260-263<br>      
Available only with Long Work Area 2</td>
</tr>
<tr>
<td>2010 Right Census Filler</td>
<td>Not Provided</td>
<td>264-264<br>      
Available only with Long Work Area 2</td>
</tr>
<tr>
<td>2000 Left Census Tract</td>
<td>243-248 <br>     
Available only with Long Work Area 2</td>
<td>279-284 <br>     
Available only with Long Work Area 2 </td>
</tr>
<tr>
<td>2000 Left Census Block</td>
<td>249-252 <br>     
Available only with Long Work Area 2</td>
<td>285-288<br>
Available only with Long Work Area 2</td>
</tr>
<tr>
<td>2000 Left Census Block Suffix</td>
<td>253-253 <br>     
Available only with  Long Work Area 2</td>
<td>289-289 <br>     
Available only with Long Work Area 2</td>
</tr>
<tr>
<td>2000 Right Census Tract</td>
<td>254-259 <br>     
Available only with Long Work Area 2</td>
<td>290-295 <br>     
Available only with  Long Work Area 2</td>
</tr>
<tr>
<td>2000 Right Census Block</td>
<td>260-263 <br>     
Available only with Long Work Area 2</td>
<td>296-299 <br>      
Available only with Long Work Area 2</td>
</tr>
<tr>
<td>2000 Right Census Block Suffix</td>
<td>264-264 <br>     
Available only with Long Work Area 2</td>
<td>300-300 <br>      
Available only with Long Work Area2</td>
</tr>
</table>
