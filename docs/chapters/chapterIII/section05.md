<h2>III.5 The Similar Names Feature</h2>

Geosupport has a ‘similar names’ feature that applications can utilize when handling Geosupport rejection of input street names.  The feature consists of returning to the application a list of up to ten valid street names from the specified input borough that Geosupport deems to be ‘similar’ to the rejected input street name.  Similar names are always full (not partial) street names, normalized in sort format.  Applications can be designed to display the similar names whenever there are any, to aid the data entry operator in correcting rejected input names.

Whenever an input street name is rejected, if there is at least one valid full street name in the specified input borough that Geosupport deems to be similar to the rejected name, Geosupport takes the following actions:

* A list of the similar names, up to a maximum of ten, is returned in the List of Street Names field in WA1.

* The Geosupport Return Code value is ‘EE’.  The Reason Code value is a number from 1 to 9 or the letter ‘A’, indicating the number of similar names that are in the List of Street Names.  (The value ‘A’ indicates that there are 10 similar names.)

* An appropriate message is returned in the WA1 Message field.

* The number of similar names that are in the list is returned in the WA1 field Number of Street Names in List.

If there is exactly one similar name, the message explicitly indicates that name.  For example, if the input is the invalid Manhattan name DUFFEY SQUARE, there is a single similar name, DUFFY SQUARE.  The message in this case would be:

<center>‘DUFFEY SQUARE’ NOT RECOGNIZED. IS IT ‘DUFFY SQUARE’?</center>

If there is more than one similar name, then the message indicates the number of similar names but does not contain the similar names themselves.  For example, the invalid Staten Island name ABBNER ROAD has three similar names.  The message in this case would be:

<center>‘ABBNER ROAD’ NOT RECOGNIZED. THERE ARE 003 SIMILAR NAMES.</center>

To utilize the similar names feature, the user might program the application as follows.

* Whenever a call to Geosupport generates the GRC value ‘EE’, indicating rejection of an input street name and the existence of similar names, the application displays the Geosupport message (and/or the application’s own message) and the similar names.  (When there is exactly one similar name, the Geosupport message already contains the similar name.)  

* The application then offers the data entry operator an opportunity to correct the input name, either by selecting one of the similar names (for example, by allowing the operator to use the cursor and the Enter key to make the selection) or by keying in a new name.  If the operator has selected a similar name, the application moves it to the WA1 input street name field, overlaying the original input name, while leaving the rest of the WA1 input fields unmodified.  The application then issues a second Geosupport call.  

Designing the application to allow the operator to select a similar name from the list lessens the need for the operator to handle street name rejects by key-entering new street name spellings, thus increasing the operator’s productivity and eliminating the possibility of new key-stroke errors.

<u>Applications should never be designed to replace a rejected input name with a Geosupport-provided similar name in an automatic fashion, even when there is exactly one similar name</u>.  The similar names that Geosupport provides are merely possibilities for the intended input street name, and it may well be that none of them is the intended input street name.  Human judgment should always be exercised when deciding whether to use a similar name.

To optimize the contents of the similar names list that is returned to the user’s application, Geosupport takes the following steps:

* Geosupport only returns names that could be used in the specified function call.  For example, since Non-Addressable Place Names, Addressable Place Names and Business Improvement Districts (BID) are not valid for Functions 2, 3, 3C and 3S, they will not be included in the similar names list for those functions.

* Also, roadbed street names are valid only when the Roadbed Request Switch is turned on.  Roadbed street names will therefore not be included in the similar names list unless the Roadbed Request Switch is on.  For example, in Brooklyn, if the input street name is ‘OCEAN PARTKAY’ and the Roadbed Request Switch is on, names such as OCEAN PARKWAY NORTHBOUND ROADBED will be included in the similar names list; however, if the Roadbed Request Switch is off, the roadbed street name will not be included.

* The similar names list will include only one spelling variation per locally valid street name (or 7-digit street code).  For example, in Manhattan, if the input street name is ‘ADAM’, the similar names list will include only ‘ADAM C POWELL BOULEVARD’ and not the four other valid variations of that street name.  The spelling variation selected is the first one encountered based upon sort sequence, which means it may or may not be the principal street name.

Although users need not be concerned with the criteria that Geosupport uses to generate similar names, the general criteria are listed here.  A valid full street name is deemed ‘similar’ to an invalid input street name if it is in the specified input borough and any of the following conditions holds:

(A)	The valid full street name is at least as long as the input street name, and the two names are identical for the length of the input street name.  

<center>For example, in Manhattan, the valid full street names YORK AVENUE and YORK STREET would be deemed similar to the invalid name YORK.  (YORK is invalid because it is an ambiguous partial street name.)</center>

or

(B)	There are no valid full street names in the specified borough that satisfy criterion (A), and the input street name begins with a compass direction word (NORTH, SOUTH, EAST or WEST) followed by a blank, and the input street name and the given valid full street name are identical up to and including the first three bytes following that blank.

> For example, in Manhattan, consider the invalid input name EAST HOUSTIN STREET, which is 12 bytes long.  For this name, there are no valid full Manhattan street names that satisfy criterion (A).  That is, there are no valid full Manhattan street names that are longer than 12 bytes such that the first 12 bytes consist of the character string EAST HOUSTIN STREET.  However, this input name begins with a compass direction word, EAST, and there is a valid full street name, EAST HOUSTON STREET, that is identical to EAST HOUSTIN STREET through the third byte following the blank after the word EAST (i.e., they are identical in their first eight bytes, consisting of the string ‘EAST HOU’).  Therefore, by criterion (B), EAST HOUSTON STREET is deemed similar to EAST HOUSTIN STREET.

or

(C)	There are no valid full street names in the specified borough that satisfy criterion (A) or criterion
>(B), and at least the initial three bytes of the input street name and the given valid full street name are identical.  The overall process is to keep looking for a match while dropping off characters from the end of the input street name.  The streets must match on at least the first three bytes of the input street name to be considered a similar name for this criterion.  The actual algorithm is somewhat complex and a complete description of it is beyond the scope of this document.

>As an example, in Manhattan, if the input street name is BROADWAY TERRACH, then BROADWAY TERRACE will appear first in the list of similar names.  Other street names beginning with BROADWAY will also appear in the list.  Since BROADWAY TERRACE matches the most letters in the input street name, it appears first.  The algorithm will typically insert the name with more matches at the beginning of the list.  

>As another example, in Staten Island, each of the valid street names ABBEY ROAD, ABBOTT STREET and ABBY PLACE will be deemed similar to ABBNER ROAD since they all begin with the same three bytes, namely, ABB.

or

(D)	The input street name contains numeric characters, and the input street name is identical to the valid street name up to and including the first numeric word.


>For example, in Manhattan, the valid street name 8 AVENUE is deemed similar to the invalid name 8 PLACE.  In Brooklyn, the valid street names BRIGHTON 6 COURT and BRIGHTON 6 STREET are both deemed similar to the invalid name BRIGHTON 6 AVENUE.

or

(E)	In the boroughs of the Bronx and Manhattan only, the input street name is a <u>front-truncated street name</u>.  A front-truncated street name is one for which all of the following are true:

>(E1) The input street name can be transformed into the valid street name by adding the word EAST or WEST to the front of the input street name.

>(E2) The input street name has at least two words.

>(E3) The first word of the input street name is not END, RIVER, SIDE, ST or STREET.

>(E4) The last word of the input street name is not EXTENSION.

>The set of criteria in (E) is designed to reflect the common practice to specify street names of Bronx and Manhattan streets that begin with the word EAST or WEST without that first word.  These street names are referred to as front-truncated street names.  For example, the intersection of Broadway and West 42 Street in Manhattan is often expressed informally as “the intersection of Broadway and 42 Street”;  pursuant to criteria (E), Geosupport generates EAST 42 STREET and WEST 42 STREET as similar names for the invalid Manhattan street name 42 STREET.  Similarly, EAST HOUSTON STREET and WEST HOUSTON STREET are generated as similar names for the invalid Manhattan street name HOUSTON STREET.  Criteria (E2) through (E4) filter out certain special cases where it is not customary to drop the first word EAST or WEST.  For example, Criterion (E2) prevents the invalid Bronx input street name AVENUE from generating as similar names the valid Bronx street names EAST AVENUE and WEST AVENUE;  Criterion (E3) prevents the invalid Manhattan street names END AVENUE, RIVER DRIVE and SIDE HIGHWAY from generating as similar names EAST END AVENUE and WEST END AVENUE, EAST RIVER DRIVE, and WEST SIDE HIGHWAY, respectively.

>Note that, if the input street name is the invalid Manhattan name 7 STREET, then 7 AVENUE and 7 AVENUE SOUTH are similar names by virtue of criterion (D), and EAST 7 STREET is a similar name by virtue of (E), but WEST 7 STREET is not a similar name, since it is not itself a valid Manhattan street name.

The similar names are returned in the List of Street Names sorted in alphabetical order, except that any front-truncated street names (i.e. similar names that satisfy criteria (E)) are listed first.
