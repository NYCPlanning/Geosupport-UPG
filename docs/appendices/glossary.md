<h2 class="pdfAppendix"><center>Glossary of Term And Acronyms</center></h2>

Citations in brackets are references to sections of the UPG where the given term is defined or is principally discussed.  Phrases in <b>bold typeface</b> have entries in this glossary.

## A

<b><span id="glossary-addressable-place-name">ADDRESSABLE PLACE NAME [[Chapter III.6](/chapters/chapterIII/section06)]</span></b>:  A <b>place name</b> that can be combined with a house number to form an address.  (Contrast with <b>non-addressable place names</b>.)  Geosupport’s <b>address-processing functions</b> accept addressable place names as input data for the specification of an address.  Some Manhattan examples are PENN PLAZA, WASHINGTON SQUARE VILLAGE and NEW YORK PLAZA.

<b>ADDRESS / INTERSECTION TO MAP ZONES (AIMZ) [[Chapter I.1](/chapters/chapterI/section01)]</b>:  A Geosupport CICS utility transaction that allows the user to enter an address, <b>place name</b>, intersection, tax lot identifier, or <b>Building Identification Number</b> and receive back a screen display of a set of map identifiers corresponding to the input location.  The use of AIMZ requires no programming skills and AIMZ is not documented in detail in this <b>UPG</b>.

<b>ADDRESS-PROCESSING FUNCTION [Chapter V]</b>:  Any of the Geosupport <b>functions</b> that accept the input of addresses.  Currently, these are Functions 1, 1A, 1B, 1E and AP.  Except for Function AP, address-processing functions also accept <b>non-addressable place names</b> as input data (typically with no input house numbers specified).  The address-processing functions are a subset of the <b>location-processing functions</b>.

<b>ALIAS [[Chapter IV.2](/chapters/chapterIV/section02)]</b>:  Two street names (or names of non-street geographic features) are aliases of each other if they are alternative names for the same street (or non-street feature) or any portion(s) thereof, or are spelling variants of the same street (or non-street feature) name.  <b>Partial street names</b> are considered spelling variants, and therefore aliases, of the corresponding full street names.  The alias relationship is embodied in the assignment of Geosupport <b>street codes</b>:  two street names are aliases of each other if and only if they have the same borough-and-five-digit <b>street code</b>.  Some examples of aliases in Manhattan:  6 AVENUE, SIXTH AVENUE, and AVENUE OF THE AMERICAS are all aliases of each other.  SEVENTH AVENUE, 7 AVENUE, FASHION AVENUE and ADAM C POWELL JR BOULEVARD are all aliases of each other, even though some of these names are valid for differing portions of the street.

<b>ALIASES (in GBAT) [[Chapter XI.6](/chapters/chapterXI/section06/)]</b>: User-defined street name aliases may be used in GBAT applications to supplement the set of street names that Geosupport recognizes.  GBAT aliases are typically used to handle a consistent misspelling of a street name.  The GBAT aliases are different from the <b>Alia</b>ses described in [Chapter IV.2](/chapters/chapterIV/section02).

<b>AIMZ</b> - see <b> Address / Intersection to Map Zones </b>

<b> AP - </b> AP is the name of Function AP and the acronym of Address Point (AP).  It is also the acronym for Addressable Place Name (AP) and Atomic Polygon (AP).  The acronym’s meaning should be clear by its usage.  It is spelled out as needed.

<b>API - </b>see <b>Geosupport Application Programming Interface</b>

## B

<b>BACKGROUND COMPONENT [[Chapter I.5](/chapters/chapterI/section05)]:</b> The component of the Geosupport System in which GSS updates and validates geographic base files from which new releases of the <b>foreground component</b> files are periodically generated.  The background component software and files are not directly accessed by users.

<b>BBL (‘Borough/Block/Lot’) [[Chapter VI.2](/chapters/chapterIV/section02/)]:</b> A unique identifier for a parcel of real property, or tax lot, in New York City.  The BBL is a 10-byte item formed by concatenating the one-byte borough code, five-byte tax block number and four-bye tax lot number.  The New York City Department of Finance assigns tax block and tax lot numbers.

<b>BEND [[Chapter III.6](/chapters/chapterIII/section06/)]:</b> A <b>pseudo-street name</b> that Geosupport accepts as street name input to specify a bending point of a street.  Geosupport treats a point along a street as a bending point if the angle of the street at that point is not within the range 160-200 degrees, that is, if it is not within 20 degrees of a straight line.

<b>BILLING BBL [Chapter VI.4]:</b> A special <b>BBL</b> assigned by the Department of Finance to each condominium, to enable identification of the condominium in its entirety as distinct from the condominium’s individual units.

<b>BIN -</b> see <b>Building Identification Number</b>

<b>BLOCK FACE (a.k.a. BLOCKFACE) [[Chapter VII.3](/chapters/chapterVII/section03/)]</b> A continuous frontage of a physical city block along one street, encompassing any bending points of the street within that frontage.

<span id="glossary-BIN"><b>BUILDING IDENTIFICATION NUMBER (BIN)</span> [[Chapter VI.3](/chapters/chapterVI/section03)]:</b> A unique, immutable identifier for each building in New York City.  BINs are not to be confused with addresses.  BINs are assigned by the Geographic Systems Section (GSS) at the Department of City Planning.

## C

<b>CHARACTER-ONLY WORK AREA (COW) [[Appendix 12](/appendices/appendix12/), [Appendix 13](/appendices/appendix13) and [Appendix 14](/appendices/appendix14/)]: </b> The Geosupport work areas that have long been in use are called the Mainframe-Specific Work Areas (MSWs).  Most of the MSWs contain one or more packed decimal fields, a data encoding schema unique to IBM mainframes.  An alternative set of Geosupport work areas was introduced in 2002.  It is called the Character-Only Work Areas (COWs) which, as the name implies, contain character fields only.  The COW is an essential part of a long-term effort to port the Geosupport System to other platforms.  <u>From now on, all new applications should be designed to use the COWs only</u>.  We also recommend that <u>all existing applications be converted to use the COWs.</u>  See also Glossary entry for <b>Work Areas</b>.

<b>CCO</b> - See <b>Corporation Council Opinion</b>

<b>CITY LIMIT [[Chapter III.6](/chapters/chapterIII/section06)]:</b> A <b>pseudo-street name</b> that Geosupport accepts as street name input to refer to locations on the Bronx-Westchester County border, the Queens-Nassau County border, the New York-New Jersey border, and the Staten Island-New Jersey border.

<b>CITYWIDE STREET CENTERLINE GEODATABASE</b> - see <b>CSCL</b>

<b>COMPACT FORMAT [[Chapter III.3](/chapters/chapterIII/section03)]:</b> A Geosupport format for <b>normalize</b>d geographic feature names.  The compact format is suitable for display but not for sorting.  Contrast with the <b>sort format</b>, which is suitable for sorting but not for display.

<span id="glossary-complex"><b>COMPLEX [[Chapter III.6](/chapters/chapterIII/section06)]:</b></span> A group of related buildings and/or other geographic features.  The name of a complex is a <b>NAP</b> (Non-Addressable Place Name).  Examples of complexes include housing projects, university and hospital campuses, cultural complexes (such as Lincoln Center) and airports.  Compare to <b>simplex</b> and <b>constituent entity of a complex</b>.

<b>CONSTITUENT ENTITY OF A COMPLEX [[Chapter III.6](/chapters/chapterIII/section06/)]:</b> An individual building or other geographically identifiable feature that is part of a <b>complex</b>.  Examples are the buildings in Lincoln Center and in Stuyvesant Town.

<b>COPY LIBRARY, COPY FILES [[Chapter VIII.4](/chapters/chapterVIII/section04)]:</b> Many programming languages have a facility for accessing external files of source code called COPY files during application program compilation.  COPY files reside in a partitioned data set (PDS) called a COPY library.  The Geosupport System has COPY libraries containing source code layouts of the <b>work areas</b> in Assembler, PL/1, COBOL, C and NATURAL.  The use of the Geosupport COPY libraries by application developers is optional but is strongly recommended.

<b>CORPORATION COUNCIL OPINION (CCO) [Appendix A3]:</b> A Corporation Council Opinion (CCO) is a geographic feature type.  A CCO is an opinion by the City’s Law Department that a street area, not owned by the City, (e.g. a portion of a private street) has been dedicated for public use, consistent with the requirements of General City Law, Section 36(2).  That allows the City to use public funds for various improvements and services, including paving of the roadway and installing sewers.  The request usually relates to planned work by the City’s Department of Transportation, Department of Design and Construction, and Department of Environmental Protection.

<b>COW -</b> See <b>Character-Only Work Area</b>

<b>CSC - </b> See <b>Computer Service Center</b>

<b>CSCL (‘NYC Citywide Street Centerline File’):</b> An object-oriented database describing the features (streets, and non-street features) in NYC.

## D

<b>DAPS</b> - see <b>Duplicate Address Pseudo-Street Name</b>

<b>DEAD END [[Chapter III.6](/chapters/chapterIII/section06)]: A pseudo-street name</b> that Geosupport accepts as street name input to refer to a termination point of a street at which there are no cross streets.

<b>DEPARTMENT OF INFORMATION TECHNOLOGY AND TELECOMMUNICATIONS (DoITT):</b> An agency of the City of New York responsible for city government-wide information technology infrastructure support.  DoITT operates the <b>Computer Service Center.</b>

<b>DISPLAY FUNCTION [[Chapters IV.6](/chapters/chapterIV/section06) and [V.2](/chapters/chatperV/section02)]:</b>  Any of the Geosupport <b>functions</b> that provide data items that can be used to display geographic locations on application screens, reports, mailing labels etc.  Specifically, the display <b>functions</b> provide street names corresponding to input <b>street codes</b>, and provide house numbers in HND format corresponding to input house numbers in <b>HNI</b> (MSW) or <b>HNS</b> (COW) format.  Note that the display <b>function</b>s do not actually display anything themselves; they merely provide data items that are suitable for an application to display.  Currently, the display </b>function</b>s are Functions D, DG and DN.

<b>DoITT - </b>see <b>Department of Information Technology and Telecommunications</b>

<b>DRIVER, GEOSUPPORT [[Chapter II.1](/chapters/chapterII/section01)]:</b> A Geosupport load module that serves as an interface enabling application programs to access Geosupport via <b>API</b> calls.  There are two different drivers, one for batch applications and one for CICS applications.  Application developers must link-edit the appropriate driver into the application program.

<b>DSNY</b> - <b>The City of New York Department of Sanitation</b>

<b><span id="glossary-DAPS">DUPLICATE ADDRESS PSEUDO-STREET NAME (DAPS) [[Chapter V.6](/chapters/chapterV/section06)]:</b> A <b>pseudo-street name</b> accepted as street name input by Geosupport in duplicate address situations.  DAPSs enable applications to specify which instance of a duplicated address the application wishes to process.  As an example, Hillside Avenue exists in both the Bellerose section and the Douglaston section of Queens.  To allow the user to refer to Hillside Avenue in a duplicate address situation two pseudo-street names are accepted by Geosupport, namely HILLSIDE AVENUE BELLEROSE and HILLSIDE AVENUE DOUGLASTON. As an alternative to a DAPS, for Functions 1, 1A, 1B, and 1E,  the user may enter the conventional street name and the ZIP code which identifies the section of the borough, e.g. .ZIP Code 11426 for Bellerose and 11363 for Douglaston.

## F

<b>FOREGROUND COMPONENT [[Chapter I.5](/chapters/chapterI/section05)]:</b> The component of the Geosupport System that is directly accessed by a user application via the <b>API</b>.  The foreground component includes both software and files.

<b>FREE-FORM ADDRESS [[Chapter V.3](/chapters/chapterV/section03)]:</b> An address expressed with the house number and street name stored together in a single field.  (Compare with <b>parsed-form address</b>.)  Geosupport can process free-form addresses in which the house number and street name are passed together in the <b>WA1</b> input street name field (and no value is passed in the separate <b>WA1</b> input house number field).

<b>FRONT-TRUNCATED STREET NAME [[Chapter III.5](/chapters/chapterIII/section05)(E)]:</b> In the borough of Bronx or Manhattan only, a front-truncated street name is one that can be transformed to a valid street name by adding the word EAST or WEST to the front of the street name, for example 14 STREET is a front-truncated street name for EAST 14 STREET and WEST 14 STREET.  Additional criteria are described in Section III.5(E).

<b>FUNCTION [[Chapters I.2](/chapters/chapterI/section02), [I.4](/chapters/chaptersI/chapter04)]:</b> The Geosupport System is organized into more than a dozen distinct functions that can be accessed by the user.  Each function is identified by a one- or two-character function code.


## G

<b>GBAT - </b>See <b>Geosupport Batch Address Translator</b>

<b>GEOCODE [[Chapter I.2](/chapters/chapterI/section02)]:</b> The process of associating higher-level geographic information, such as the police precinct, ZIP code or census tract, with a specific geographic location, such as an address or street intersection.  Geocoding is one of the Geosupport System’s most important services.

<b>GEOGRAPHIC ONLINE ADDRESS TRANSLATOR (GOAT) [[Chapter I.1](/chapters/chapterI/section01)]:</b> The Geosupport System’s principal CICS utility transaction.  GOAT is an inquiry transaction that allows the user to request any Geosupport <b>function</b>, enter input data and receive back a formatted screen display of the corresponding output information provided by that <b>function</b>. The use of GOAT requires no programming skills and it is not documented in detail in this <b>UPG</b>. (The GOAT utility was previously known as the Geosupport Online Address Translator (GOAT)).

<b>GEOGRAPHIC RETRIEVAL CONSISTENCY [[Chapter I.3](/chapters/chapterI/section03)]:</b> Retrieval of information by geographic location in a manner that is independent of how the location is specified.  The ability of an application to retrieve data consistently by geographic location from the application’s own files is a critical design issue for many applications.  One important means of implementing geographic retrieval consistency in an application is to use B5SCs (see the entry for <b>alias</b>) instead of street names in the retrieval key.

<b>GEOSUPPORT APPLICATION PROGRAMMING INTERFACE (API) [[Chapter II.1](/chapters/chapterII/section01)]:</b> The Geosupport facility that enables user-written application programs to interact with Geosupport via standardized program calls.  The API involves the use of a Geosupport <b>driver</b> module and Geosupport <b>work areas</b>.

<b>GEOSUPPORT BATCH ADDRESS TRANSLATOR (GBAT) [[Chapter XI.1](/chapters/chapterXI/section01)]:</b>  The Geosupport System’s batch utility program.

<b>GEOSUPPORT ONLINE ADDRESS TRANSLATOR (GOAT)- see Geographic Online Address Translator(GOAT).</b>

<b>GEOSUPPORT RETURN CODE (GRC) [[Chapter II.2](/chapters/chapterII/section02)]:</b> A two-byte code that is returned in <b>WA1</b> upon completion of every <b>API</b> call to Geosupport, indicating to the calling application the outcome of the call.  (Not to be confused with operating system return codes or condition codes.)  A GRC value of ‘00’ signifies an unconditionally successful call.  A GRC value of ‘01’ signifies a <b>warning</b>.  A GRC value of other than ‘00’ or ‘01’ signifies a <b>reject</b>.  See also the Glossary entries for <b>Reason Code</b> and <b>Message</b>.  See [Appendix 4](/appendices/appendix04) for a comprehensive list of <b>GRCs, Reason Codes</b> and <b>Messages</b>.

<b>GEOSUPPORT SYSTEM ADMINISTRATOR [[Chapter I.1](/chapters/chapterI/section01)]:</b>  A designated staff member (generally a systems programmer) of a computer center where Geosupport is installed on a mainframe, responsible for installing new Geosupport file releases and software versions, and for trouble-shooting system-related Geosupport problems.  Note: the Geosupport System Administrator is not necessarily responsible for providing application-related support to users.

<b>GOAT -</b> <b>see Geographic Online Address Translator</b>

<b>GRC</b> - See <b>Geosupport Return Code</b>

<b>GSS [[Chapter I.1](/chapters/chapterI/section01)]:</b> The Geographic Systems Section of the City of New York Department of City Planning’s Information Technology Division. <b>GSS</b> is the developer and custodian of the Geosupport System.

## H

<b>HND</b> - See <b>House Number in Display Format</b>

<b>HNI</b> - See <b>House Number in Internal Format</b>

<b>HNS</b> - See <b>House Number in Sort Format</b>

<b>HOUSE NUMBER IN DISPLAY FORMAT (HND) [[Chapter V.2](/chapters/chapterV/section02)]:</b> One of Geosupport’s three output normalized house number formats.  The HND is a format suitable for applications to use for display on screens, reports and mailing labels.

<b>HOUSE NUMBER IN INTERNAL FORMAT (HNI) [[Chapter V.2](/chapters/chapterV/section02)]:</b> One of Geosupport’s three output normalized house number formats.  The HNI is not suitable for display, because it is partly in packed decimal form, and it contains a code representing the house number suffix (if any) rather than the suffix itself.  The HNI is used internally in the Geosupport System, and it is not of direct significance to most applications. HNI is valid in MSW only.

<b>HOUSE NUMBER IN SORT FORMAT (HNS) [[Chapter V.2](/chapters/chapterV/section02)]:</b> One of Geosupport’s three output normalized house number formats.  The HNS is not suitable for display, because it has an internal format and contains a code representing the house number suffix (if any) rather than the suffix itself.  The HNS is used internally in the Geosupport System, and it is not of direct significance to most applications.  HNS is valid in COW only.

<b>HPD</b> - Department of Housing Preservation and Development

## I

<b>ID-PROCESSING FUNCTION [[Chapter I.4](/chapters/chapterI/section04)]:</b> Any <b>location-processing function</b> that processes identification codes.  Currently, the ID-processing functions are Function BL, which processes tax lots specified by an input <b>BBL</b>; Function BN, which processes buildings specified by an input <b>BIN</b>; and COW Function 2 which can process an intersection specified by a <b>Node ID</b>.

<b>INPUT FIELD (IN A WORK AREA) [[Chapter II.3](/chapters/chapterII/section03)]:</b> A field into which the user application inserts a value to be passed to Geosupport.  See also <b>output field, WA1</b> and <b>WA2</b>.  WA1 has both input and output fields.  <b>WA2</b> has output fields only.

## L

<b>LDF</b> - see <b>LION Differences File</b>

<b>LGC</b> - See <b>Local Group Code</b>

<b>LION DIFFERENCES FILE (LDF):</b> The LION Differences File (LDF) is a sequential file containing records documenting certain types of changes that have occurred between a particular release of LION and the immediately previous LION release.  A new LDF ‘edition’ is ‘published’ in conjunction with each new production release of LION.  The changes documented in the LDF relate to node changes and segment changes.

<b>LION FILE [[Chapter VII.1](/chapters/chapterVII/section01)]:</b> A predecessor to CSCL, LION is a <b>background component</b> file that is a digital map of New York City.  LION contains a single-line representation of the city’s streets and city limits.  Geosupport’s <b>street configuration</b> processing is based on that representation.

<b>LOCAL GROUP CODE (LGC) [[Chapter IV.5](/chapters/chapterIV/section05)]:</b> The LGC consists of the sixth and seventh digits of the ten-digit street code.  The LGC corresponds to a set of <b>locally valid street names</b> for the given street.

<b>LOCALLY VALID STREET NAME [[Chapter IV.5](/chapters/chapterIV/section05)]:</b> A name of a street that is valid for a particular portion (possibly all) of the street.  The set of street names that are valid for the same portion of a street constitute a ‘local group’ and share the same <b>LGC</b> value.

<b>LOCATION-PROCESSING FUNCTION:</b> Any of the Geosupport <b>function</b>s that accept the input of a geographic location. These can be sub-classified into the <b>address-processing functions</b> (Functions 1, 1A and 1E);  the <b>street-configuration-processing functions</b> (Functions 2, 3, 3C and 3S); and the <b>ID-processing functions</b> (Functions 2, BL and BN).

## M

<b>MAINFRAME-SPECIFIC WORK AREA (MSW (a.k.a. MFS))</b> - See <b>Character-Only Work Area</b>

<b>MESSAGE [[Chapter II.2](/chapters/chapterII/section02)]:</b> A <b>WA1</b> output item returned for all <b>warnings</b> and <b>rejects</b>, consisting of an appropriate explanatory text message.  See [Appendix 4](/appendices/appendix04) for a comprehensive list of <b>GRC</b>s, <b>Reason Codes</b> and <b>Messages</b>.

<b>MFS</b> - See <b>MSW</b>

<b>MSW</b> - See <b>Mainframe-Specific Work Area</b>

## N

<b>NAP</b> - See <b>Non-addressable Place Name</b>

<b>NAUB</b> - See <b>Non-addressable Un-named Building</b>

<b>NODE [[Chapter VII.2](/chapters/chapterVII/section02)]:</b> Either a conventional intersection of a street with another street, or a <b>pseudo-intersection</b> of a street with a <b>pseudo-street or where there is a change in a significant geocode such as zip code or a Police Beat..</b>

<b>NODE ID [[Chapter VII.2](/chapters/chapterVII/section02)]:</b> A unique identifier associated with each node in the Geosupport sytem.  The Node ID is sometimes referred to as the Node Number.

<b>NON-ADDRESSABLE PLACE NAME (NAP) [[Chapter III.6](/chapters/chapterIII/section06)]:</b> A place name that is typically not combined with a house number to form an address.  Examples: CITY HALL, EMPIRE STATE BUILDING, PLAZA HOTEL, LINCOLN CENTER, LA GUARDIA AIRPORT.  A NAP can either be the name of a <b>simplex</b>, a <b>complex</b>, or a <b>constituent entity of a complex</b>.  Geosupport’s <b>address-processing functions</b> accept many NAPs as input data

<b>NON-ADDRESSABLE UN-NAMED BUILDING (NAUB) [[Chapter VI.3](/chapters/chapterVI/section03)]:</b> A building that has neither addresses nor <b>NAP</b>s, and can only be identified by its <b>BIN</b>.  Typical example is a  storage shed on the grounds of an industrial property.

<b>NORMALIZE [[Chapter III.2](/chapters/chapterIII/section02) for street names, [Chapter V.2](/chapters/chapterV/section02) for house numbers]:</b> To produce a version of a data item in a standardized format.  Geosupport normalizes every input geographic feature name into one of two formats selected by the user application, called the <b>compact format</b> and the <b>sort format</b>.  Geosupport also normalizes every input house number.  Geosupport returns output normalized names and house numbers to the calling application in <b>WA1</b>.

## O

<b>OUT-OF-SEQUENCE ADDRESS [[Chapter V.10](/chapters/chapterV/section10)]:</b> An address such that the house number is out of sequence relative to nearby house numbers along the given street.  For an input out-of-sequence address, the output information that Functions 1 and 1E return is based on the street segment where the out-of-sequence address is actually located, including the cross streets and geographic district identifiers.   The Spatial Coordinates returned are those of a point calculated under the assumption that the building entrance is located at the midpoint of the blockface.  A warning is issued for any address on a blockface containing an out-of-sequence address.

<b>OUTPUT FIELD (IN A WORK AREA) [[Chapter II.3](/chapters/chapterII/section03)]:</b> A field into which Geosupport inserts a value to be returned to the calling user application.  See also <b>input field, WA1</b> and <b>WA2</b>.  <b>WA1</b> has both input and output fields. <b>WA2</b> has output fields only.

## P

<b>PARSED-FORM ADDRESS [[Chapter V.3](/chapters/chapterV/section03)]:</b> An address that is expressed with the house number and street (name or code) stored in separate fields.  (Compare to <b>free-form address</b>.)

<b>PARTIAL STREET NAME [[Chapter III.4](/chapters/chapterIII/section04)]:</b> A street name formed from a full normalized street name by deleting one or more entire words from the end of the full street name.  For example, in Manhattan, READE is a partial street name for READE STREET.  Geosupport accepts a partial street name as an input street name when the partial street name unambiguously represents a unique full street name in the specified input borough.  Additional criteria are described in [Chapter III.4](/chapters/chapterIII/section04).

<b>PLACE NAME [[Chapter III.6](/chapters/chapterIII/section06)]:</b> A name of a geographic feature other than a street name or a <b>pseudo-street name</b>.  Examples of place names are the names of building complexes (such as university campuses, housing projects, hospital campuses etc.), individual named buildings (such as CITY HALL, EMPIRE STATE BUILDING, museums, hotels, theaters, stadiums etc.), parks, islands, airports etc.  Geosupport recognizes some New York City place names, and more are being added over time.  There are several types of place names; see Glossary entries for <b>Addressable Place Name, Non-Addressable Place Name, Simplex, Complex and Constituent Entity of a Complex</b>.

<b>PREFERRED STREET NAME [[Chapter IV.5](/chapters/chapterIV/section05)]:</b> If more than one local group of street names is valid at a particular location along a street, <b>GSS</b> designates one of them as the ‘preferred’ local group for that location.  The preferred street name is the <b>principal street name</b> of the preferred local group.

<b>PRIMARY STREET NAME [[Chapter IV.3](/chapters/chapterIV/section03)]:</b> For every street in NYC, that is, for every valid B5SC value, <b>GSS</b> designates one spelling of one name of the street as the primary street name.  Function D can be used to obtain the primary street name for a given B5SC value.

<b>PRIMING WA1 [[Chapter II.3](/chapters/chapterII/section03)]:</b> The part of the API procedure in which the calling application program inserts values into <b>WA1 input fields</b> in preparation for issuing a call to the <b>driver</b>.  Priming WA1 is how an application requests the <b>function</b> to be performed, passes the input geographic data (such as an address) to be processed, and specifies processing options.

<b>PRINCIPAL STREET NAME OF LOCAL GROUP [[Chapter IV.5](/chapters/chapterIV/section05)]:</b> The street name that <b>GSS</b> has designated as the ‘best’ representative from among all the names in a local group.  Function DG can be used to obtain the principal street name for a given B7SC value. <b>PSEUDO-ADDRESS [[Chapter VI.5](/chapters/chapterVI/section05)]:</b> An address unofficially assigned by <b>GSS</b> to a street frontage of a tax lot that has no ‘real’ building addresses, such as a driveway.  Function 1A accepts pseudo-addresses as input.

<b>PSEUDO-INTERSECTION [[Chapter VII.2](/chapters/chapterVII/section02)]:</b> A point along a street specified in terms of a <b>pseudo-street name,</b> i.e., a bend, a dead end or a city limit point.

<b>PSEUDO-STREET NAME [[Chapter III.6](/chapters/chapterIII/section06)]:</b> An ‘unofficial’ street name that Geosupport accepts as street name input for certain geographic situations. <b>DAPS</b>s are pseudo-street names that the <b>address-processing functions</b> accept as input only for the city’s very few cases of duplicate addresses (see [Chapter V.6](/chapters/chapterV/section06)).  DEAD END, CITY LIMIT, BEND and their <b>aliases</b> are pseudo-street names accepted as input by the <b>functions</b> that process <b>street configurations</b> (see [Chapter VII](/chapters/chapterVII/)).

## R

<b>REASON CODE [[Chapter II.2](/chapters/chapterII/section02)]:</b> A one-byte output <b>WA1</b> item that qualifies the reason for a <b>warning</b> or <b>rejection</b> with greater specificity than does the <b>GRC</b> alone.  Non-blank reason codes are returned for all <b>warnings</b> and for selected <b>rejects</b>.  See Appendix 4 for a comprehensive list of <b>GRC</b>s, <b>Reason Codes</b> and <b>Messages</b>.

<b>REJECT, REJECTION [[Chapter II.2](/chapters/chapterII/section02)]:</b> An unsuccessful outcome of an <b>API</b> call to Geosupport, indicated by a <b>GRC</b> value other than ‘00’ or ‘01’, accompanied by an appropriate <b>Message</b>, and for selected rejects, by a <b>Reason Code</b>.

<b>RELEASE (OF GEOSUPPORT FOREGROUND FILES) [[Chapter I.5](/chapters/chapterI/section05)]:</b> Geosupport’s <b>foreground component</b> files are read-only files, and are periodically replaced by updated files.  Every foreground file is identified as belonging to a specific Geosupport release.

<b>RESYNCHRONIZATION OF STREET CODES [[Chapter IV.4](/chapters/chapterIV/section04)]:</b> The updating of Geosupport <b>street codes</b> stored in a user application file to reflect street code assignment changes made in a Geosupport <b>release</b>.

<b>ROADBED [[Chapter V.5](/chapters/chapterV/section05)]:</b> A roadbed is a street segment that is bounded on both sides by a physical separator such as a sidewalk, median barrier or median strip.  Street segments that have painted medians separating travel direction do not form multiple roadbeds.  Well-known examples of streets with multiple roadbeds include Park Avenue in Manhattan, Queens Blvd in Queens and Ocean Parkway in Brooklyn.

## S

<b>SIMILAR NAME [[Chapter III.5](/chapters/chapterIII/section05)]:</b> When an input street name is rejected, Geosupport returns a list of up to ten ‘similar names’ in <b>WA1</b>, as an aid to the application in handling the <b>reject</b>.  A ‘similar name’ is a valid full street name from the specified input borough that Geosupport, in accordance with certain criteria, deems to be similar to the rejected input street name.

<b>SIMPLEX [[Chapter III.6](/chapters/chapterIII/section06)]:</b> A ‘stand-alone’ named geographic feature, that is, a feature that has a <b>NAP</b> and that is not a <b>complex</b> or a <b>constituent entity of a complex.</b>  Examples: Empire State Building, Plaza Hotel, Gramercy Park.

<b>SNC</b> - See <b>Street Name Code</b>

<b>SNL</b> - See <b>Street Name Normalization Length Limit</b>

<b>SORT FORMAT [[Chapter III.3](/chapters/chapterIII/section03)]:</b> A Geosupport format for <b>normalize</b>d geographic feature names.  The sort format is suitable for sorting but not for display. Contrast with the <b>compact format</b>, which is suitable for display but not for sorting.

<b>STREET CODE [[Chapter IV](/chapters/chapterIV/chapterIV)]:</b> In the Geosupport System, a set of numeric street codes is assigned to represent the city’s street names and other geographic feature names.  A borough code combined with a ten-digit street code, or B10SC, corresponds to a specific spelling of a specific street name in the given borough.  Portions of the B10SC also have special significance.  In particular, the first six bytes of the B10SC, the borough-and-five-digit street code (B5SC), encodes the <b>alias</b> relationship between street names.

<b>STREET CONFIGURATION [[Chapter VII.1](/chapters/chapterVII/section01)]:</b> A geographic location specified in terms of a combination of two or three streets.  Street configurations include intersections, street segments, <b>blockfaces</b> and street stretches.

<b>STREET-CONFIGURATION-PROCESSING FUNCTION [[Chapter VII](/chapters/chapterVII/chapterVII)]:</b> Any of the Geosupport <b>location-processing functions</b> that process <b>street configurations</b>.  Currently, these are Function 2, which processes street intersections; Function 3, which processes street segments; Function 3C, which processes <b>blockfaces</b>; and Function 3S, which processes street stretches.

<b>STREET NAME CODE (SNC):</b> The final three digits of the B10SC (Borough and Ten-digit <b>Street Code</b>) are called the Street Name Code (SNC).  Thus, the B10SC consists of the concatenation of the borough code, 5SC, <b>LGC</b> and SNC.  The SNC serves simply to serialize the street names within a local group, so that the full B10SC is unique to a specific spelling of a specific street name.

<b>STREET NAME NORMALIZATION LENGTH LIMIT (SNL) [[Chapter III.2](/chapters/chapterIII/section02)]:</b> A user-specifiable parameter that sets the maximum length in bytes within which Geosupport <b>normalizes</b> input street names. The default value is 32.

## U

<b>UPG</b> - See <b>User Programming Guide</b>

<b>USER PROGRAMMING GUIDE (UPG) [[Chapter I.6](/chapters/chapterI/section06)]:</b> This document.

<b><span id="glossary-vanity-address">VANITY ADDRESS</span> [[Chapters V.9](/chapters/chapterV/section09)]:</b> An address such that the street name refers to a different street than the one on which the referenced building entrance is actually located.  For an input vanity address, the output information that Functions 1 and 1E return is based on the street segment where the vanity address is actually located, including the cross streets, geographic district identifiers and spatial coordinates.  The source for the Spatial Coordinates (a.k.a. X-Y coordinates) returned for Vanity Addresses (and NAPs) is the <b>Citywide Street Centerline file (CSCL)</b>. The CSCL information guarantees that the X-Y coordinates fall within the actual location (e.g. building footprint) of the Vanity Address.  A warning is issued accordingly. The output information that Function 1A returns is based on the building associated with the vanity address.  No warning is issued for Function 1A.

## V

<b>VERSION (OF GEOSUPPORT FOREGROUND SOFTWARE) [[Chapter I.5](/chapters/chapterI/section05)]:</b> Self-explanatory.  Contrast use of the term ‘version’ for Geosupport software and <b>‘release’</b> for Geosupport data files.

<b>VESTIGIAL FEATURE [[Chapter I.5](/chapters/chapterI/section05)]:</b> An element of the Geosupport System, such as a <b>function</b>, a <b>work area</b>, a data item or a JCL statement, that is obsolete and has been superseded by an enhancement.  Vestigial features may continue to be operational but should not be used in new applications, and should be eliminated from existing ones.

## W

<b>WARNING [[Chapter II.2](/chapters/chapterII/section02)]:</b> A conditionally successful completion of an <b>API</b> call to Geosupport.  A warning is signified by a GRC value of ‘01’ and an accompanying <b>Reason Code</b> and <b>Message</b>.  In most cases, it is appropriate for applications to treat warnings in the same way as successful completions.  It is sound practice, however, to examine the Reason Codes and Messages.

<b>WA1, WA2</b> - See <b>Work Areas</b>

<b>WORK AREAS [[Chapter II.1](/chapters/chapterII/section01)]:</b> Standard-layout blocks of data in memory that are shared between Geosupport and an application.  The Geosupport work areas are an essential component of the Geosupport <b>API</b>, and constitute the sole means by which information passes between the application and Geosupport.  Different Geosupport <b>functions</b> use different work area layouts. <b>API</b> calls can involve the passing of either one work area, called <b>Work Area 1 (WA1)</b>, or two work areas, <b>WA1 and Work Area 2 (WA2)</b>.  

<div class="pdfPageBreakAfter"></div>  
