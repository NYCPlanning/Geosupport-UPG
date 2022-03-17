<h2>I.4 The Geosupport Function Suite</h2>

This section contains a brief introduction to the Geosupport function suite.  Each Geosupport function is identified by a one- or two-character <u>function code</u>.  The function suite consists of <u>location-processing functions</u> (Functions 1, 1A, 1B, 1E, 2, 3, 3C, 3S, AP<a id="section04-1-1" href="#section04-1"><sup>1</sup></a>,BL and BN), <u>display functions</u> (Functions D, DG and DN) and <u>miscellaneous functions</u> (Functions 1N, BB and BF).  Table I-2 lists the currently implemented functions.  Note that Functions 1B and AP are COW<a href="#section04-2" id="section04-2-2"><sup>2</sup></a> functions only.

Each location-processing function processes input geographic locations of a particular type.  For each type of location, there is an appropriate set of data items that collectively define such locations.  Table I-1 lists the various types of geographic locations, the data items required to specify them, and examples.  The location-processing functions can be sub-classified into <u>address-processing functions</u>, <u>street-configuration-processing functions</u> and <u>ID-processing functions</u>:

* The address-processing functions are Functions 1, 1A, 1B, 1E and AP.  There are also Extended versions of four of the functions, viz. Function 1 Extended, Function 1A Extended, Function 1E Extended, Function AP Extended .  Function 1B is a combination of Function 1E Extended and Function 1A Extended.  Except for Function AP, the address-processing functions process conventional addresses,  Addressable Place Names (APs) and Non-Addressable Place Names (NAPs).  Function AP processes conventional addresses only.  

* The street-configuration-processing functions are Functions 2, 3, 3C and 3S.  There are also Extended versions of two of the functions, viz. Function 3 Extended and Function 3C Extended.  All these street-configuration-processing functions process geographic locations that are defined in terms of one, two or three streets, such as street intersections, intersection names, blockfaces and street stretches.  Note that Function 2 is also an ID-processing function (see below).

* The ID-processing functions are Functions BL, BN, and COW Function 2.  There are also Extended versions of these functions, viz. Function BL Extended and Function BN Extended and the Wide version of Function 2, viz. Function 2W.  These functions process locations defined in terms of identifying numbers, namely, tax lot identifiers in the case of Function BL, Building Identification Numbers (BINs) in the case of Function BN and Node ID in the case of Function 2.  Tax lot identifiers and BINs are discussed in detail in Chapter VI.  Node IDs are discussed in Chapter VII.  Note that Function 2 is also a street-configuration-processing function (see above).


<u>In general, anything that applies to a basic Geosupport Function will also apply to the Extended Version (and the Enhanced Version) of that function and other variations (e.g. Long Work Area or Auxiliary Segments) as well.</u>  For example, anything that is true of Function 1 will also be true of Function 1 Extended.  In our discussion of the various functions, for simplicity, we will often refer only to the basic function, but the information will apply also to the Extended function and other variations.


The address-processing functions differ from each other with respect to the output data that they provide and the nature of the validation processing that they perform.  In general, the type of validation processing a Geosupport function performs is related to the geographic level of the output data.  Thus the processing for Functions 1, 1E (and the 1E portion of Function 1B, see below), validates only whether the input address falls within an address range for an entire blockface, but it does not validate whether the input address is itself specifically valid.  Function AP and Function 1A (and the Function 1A portion of Function 1B, see below), on the other hand, do validate whether the input address is (or could be) a valid address for a specific building.  The return of a Building Identification Number (BIN) from Function AP and Function 1A will verify the existence of a building at the given address.


There are some users of Geosupport who process addresses by making two Geosupport calls (one call to Function 1 or 1E and another call to Function 1A).  In response to requests by users, Function 1B was developed in order to allow users to retrieve blockface information (which is available with Function 1 or 1E) and Property Level information (which is available with Function 1A) in one Geosupport call. Function 1B combines Function 1E Extended with Function 1A Extended. The input requires borough (or ZIP code), address number if needed, and street name or street code. Function 1B retrieves the tax lot and building information from the PAD (Property Address Directory; data is at the property parcel level) file based on the input (Function 1A-type processing). The blockface and political data are then retrieved from the GRID (Geographic Reference Integrated Dictionary; data is at the centerline level) and the Election files (Function 1E-type processing) for the address set by the building level information


The display functions do not themselves directly ‘display’ anything, but they provide street names and/or address numbers in formats suitable for applications to display on screens, reports, mailing labels etc.


In Table I-1, the word ‘street’ refers to either a street name or a street code.  In the examples in Table I-1, street names rather than street codes are used.  (Note:  the examples are formatted for reader comprehension, and would not be accepted by Geosupport as shown.  Specifically, they contain borough names rather than the borough codes that Geosupport requires, and they contain English words and phrases such as ‘intersection of’ and ‘between’ that Geosupport does not recognize.)


## <p class = "section_header underlineMe center">Table I-1: Types of Geographic Locations Processed</p>

|<u>Types of Locations</u>     | <u>Input Items Required to Specify Location, <br>*Example*<u>|
|:-------------   |:-------------   |  
|Address       | Borough (or ZIP code) + address number + street: <br>*Bronx, 307 East Tremont Avenue*       |  
|Non-Addressable Place Name    | Borough (or ZIP code) + place name: <br>*Manhattan, Carnegie Hall*    |  
|Addressable Place Name    | Borough (or ZIP code) + address number + place name: <br>*Manhattan, 2 Penn Plaza*        |  
|Street Intersection  | Borough + two intersecting streets: <br>*Brooklyn, intersection of Flatbush Avenue and Atlantic Avenue *<br>OR (if a pair of streets has two points of intersection), Borough + two intersecting streets + compass direction: <br>*Queens, east intersection of Alderton Street and Cromwell Crescent* <br>OR Borough + Intersection Name: <br> *Manhattan, Isaac Stern Place* <br>OR Node ID: <br>*0015376 (intersection of Broadway and Reade St, Manhattan)* |
|Street Segment |Borough + ‘on’ street + two consecutive cross streets:<br> *Manhattan, Broadway between W 38th St and W 39th St* |
|Blockface  |Borough + street segment + compass direction specifying side of street:<br>*Manhattan, east side of Broadway between W 38th St and W 39th St*  |
|Street Stretch |Borough + ‘on’ street + any two cross streets: <br>*Manhattan, Broadway between W 38th St and W 54th St* <br>OR (if either or both of the cross streets has two points of intersection with the ‘on’ street), Borough + ‘on’ street + two intersecting streets + compass direction(s):<br>*Queens, Alderton Street between East intersection with Cromwell Crescent and intersection with 63rd Drive* <br>OR Borough + ‘on’ street: <br> *Manhattan, Broadway* |
|Tax Lot  |Borough + tax block + tax lot:<br>*Staten Island, Block 247 Lot 16*  |
|Building  |Building Identification Number (BIN):<br>*5006708*  |


Table I-2 below lists all of the current Geosupport functions, indicating for each function the type of input geographic location processed, the geographic level of the output data, and a sample of output data items.  The table does not include normalized street names, street codes and normalized address numbers among the sample output items listed; those items are always returned when the input involves street names and address numbers.  Certain terms not defined until later have been included in Table I-2 for completeness.


## <p class = "section_header underlineMe center">Table I-2:  List of Geosupport Functions</p>
|<u>Function</u>|  <u>Type of Input</u> | <u>Description of Output</u> | <u>Sample Output Items</u> |
|:------------- |:------------- |:------------- |:------------- |
| 1 | Address or Non-Addressable Place Name |Blockface-related data |Cross streets, ZIP code, census tract and block, community district, police precinct, school district, health area, spatial coordinates; COW Only: NTA, Police Patrol Borough; COW Extended Only: PUMA Code|
|1A |Address or Non-Addressable Place Name |Property-related data |Tax block and lot identifiers, list of all buildings, addresses and street frontages of property, condo flag, spatial coords. |
|1B (COW Only) |Address or Non-Addressable Place Name |Combined Property and Blockface related data |See Function 1E below and Function 1A above  (COW Only) |
|1E |Address or Non-Addressable Place Name |Blockface-related data |Same as Function 1 + political districts: Election, State Assembly and Senate, City Council, Congressional and Municipal Court Districts |
|1N |Street Name or Place Name |Normalized name,  street code | |
|2 |Street Intersection or Named Intersection or Node ID |Intersection-related data |Additional streets at intersection (other than input streets), census tract, community district, spatial coordinates COW Only: Some Political Geography |
|3 |Street Segment |Segment-related data + data related to left and right blockfaces |Cross streets, left and right ZIP code, left and right census tract and block, left and right community district, node ID  |
|3C |Blockface  |Blockface-related data |Cross streets, ZIP code, census tract and block, community district, node ID |
|3S |Street Stretch |Street stretch-related data order along the stretch, approximate  |Number of and list of intersections in distance in feet between intersections |
|AP (COW only) |Address  |Property-related data of CSCL Address Point |BBL, BIN, Spatial coordinates of CSCL Address Point, Address Point ID |
|BB, BF |Character String |See right-hand column |Set of ten normalized street names in alphabetical order |
|BL |Tax Lot |Property-related data Same as Function 1A | |
|BN |Building |Property- and building-related data |Tax block and lot identifiers, list of all addresses of building, condo flag, spatial coordinates |
|D |5-Digit Street Code |Normalized ‘primary’ name of street | |
|DG |7-Digit Street Code |Normalized ‘principal’ name of local group | |
|DN |10-Digit Street Code |Normalized street name | |
|HR |None –  CICS GOAT   |Geosupport Data Set Information |Creation date, Geosupport release cycle, number of records |
|N* |Street Name |Normalized street name |Name is normalized without a borough, therefore no consideration of validity. |


As a mnemonic aid, Geosupport function codes have been chosen to be as descriptive as possible.  For functions involving street input, the first character of the function code is numeric and indicates the number of input streets.  (There is one exception, Function AP, which is described below).  Thus, Functions 1, 1A, 1B and 1E process addresses and non-addressable place names, which are specified by a single input street or place; Function 2 processes intersections, which generally are specified by two input streets, a single intersection name, or a node ID.  Functions 3, 3C and 3S process street segments, block faces and street stretches, respectively, all of which involve three input streets (an ‘on’ street and two cross streets), or, optionally, just an ‘on ‘street for Function 3S.  The second character of the function code, if any, is often descriptive as well:  the letter ‘C’ signifies that the function involves compass direction input; the letter ‘S ’signifies street stretch input.  Function AP is the one exception to the pattern described above: Function AP is a mnemonic for ‘Address Point’ and has one street address as input.  The function codes of functions that do not involve street address input are abbreviations of descriptive terms for the functions:  BB and BF are abbreviations for ‘browse backward’ and ‘browse forward’, BL for ‘block/lot’, BN for ‘building number’, and D, DG and DN for ‘display’, ‘display group’ and ‘display name’.



----
<a href="#section04-1-1"><sup id="section04-1">1</sup></a> Note that ‘AP’ is the acronym for the function AP (Address Point).  It is also the acronym for Addressable Place Name and Atomic Polygon.  The acronym’s meaning should be clear by its usage.  It will be spelled out as needed.  
<a href="#section04-2-2"><sup id="section04-2">2</sup></a> Character-Only Work Area (COW).  [See Appendix 12](../appendices/appendix12/).
