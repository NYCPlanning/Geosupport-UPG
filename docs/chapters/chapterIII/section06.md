<h2>III.6 Unconventional Geographic Feature Names</h2>

In addition to conventional street names, Geosupport recognizes the following other types of geographic names:  the names of ‘paper streets’; the names of some non-street features; addressable and non-addressable place names;  pseudo-street names;  and intersection names.  ‘Recognizing’ a name means that a street code has been assigned to that name and Geosupport accepts the name as valid input.  The various types of unconventional names are discussed below, and there are further details on their processing in subsequent chapters.  

## <u>Paper Streets</u>

A paper street is a street that is legally ‘mapped’ (designated as a street on the official City Map) but that does not exist physically.  The city ‘maps’ paper streets with the intention of constructing them, but there is no certainty that a particular paper street will be built.  Indeed, some paper streets have been mapped and then eventually de-mapped without ever having been built.

Geosupport recognizes the <u>names</u> of paper streets, but it does not recognize <u>geographic locations</u> (addresses, intersections etc.) along a paper street.  In addition to streets that are paper streets in their entirety, there are some streets that have both portions that exist physically and portions that exist only ‘on paper’; for such a street, Geosupport recognizes geographic locations only within the portion that exists physically.

## <u>Non-Street Features</u>

In the category of non-street features, as of this writing, Geosupport recognizes only the names of some railroad tracks and shorelines.  Eventually, Geosupport will be enhanced to recognize the names of other non-street geographic features in New York City, including all railroad tracks and shorelines.  Non-street features do not have addresses, but names of non-street features that are recognizable to Geosupport can serve as street name input to describe geographic locations other than addresses, such as intersections, street segments and street stretches.

## <u>Addressable Place Names</u>

Addressable place names are the names of ‘places’, generally major individual buildings or building complexes, that can be combined with address numbers to form valid New York City addresses.  Such places are not streets but their names serve the same role as do ordinary street names in forming addresses that Geosupport will recognize.  An example in Manhattan that Geosupport recognizes is PENN PLAZA, a cluster of commercial buildings in the vicinity of Pennsylvania Station.  For example, 1 PENN PLAZA, 2 PENN PLAZA and 7 PENN PLAZA are all valid Manhattan addresses, recognized by the U.S. Postal Service and by Geosupport’s address processing functions.  Other examples of addressable place names recognized by Geosupport are:  in Manhattan, NEW YORK PLAZA, WASHINGTON SQUARE VILLAGE, GOVERNORS ISLAND and CONFUCIUS PLAZA;  in Brooklyn, ALBEE SQUARE, METROTECH and FORT HAMILTON MANOR.   

## <u>Non-Addressable Place Names (NAPs)</u>

Non-Addressable Place names (NAPs) are names of buildings or other geographic features that typically are not combined with an address number to form a valid address.  See discussion of <u>Support of Non-Addressable Place Names (NAPs) with Address Numbers</u> below)   Note that a building that has a NAP may or may not also have a conventional street address;  it is the place <u>name</u> that is non-addressable, not necessarily the place itself.  For example, the EMPIRE STATE BUILDING can be identified both by its name, which is a NAP, and by its conventional street address (i.e. 350 Fifth Avenue).  CITY HALL in Manhattan and YANKEE STADIUM in the Bronx are examples of NAPs referring to buildings that do not have conventional street addresses.

Typical geographic features that have NAPs include named buildings, stadiums, arenas, hospitals, housing projects, military complexes, museums, universities, theaters, airports, parks, zoos, marinas and islands.  Geographic features that have NAPs are classified as either simplexes, complexes or constituent entities of a complex.

* A <u>simplex</u> is a “stand-alone” named geographic feature, that is, a feature that has a NAP and is not a complex or a constituent entity of a complex.  Examples in Manhattan: EMPIRE STATE BUILDING, CARNEGIE HALL, BRYANT PARK

* A <u>complex</u> is a group of related geographically identifiable features at one site.  A geographically identifiable feature is a feature that has an address, a NAP and/or a Building Identification Number (BIN).  (BINs are discussed in detail in [Chapter VI.3](/chapters/chapterVI/section03).)  Examples of Manhattan complexes: LINCOLN CENTER, JEFFERSON HOUSES, CITY COLLEGE.

* A <u>constituent entity of a complex</u> is a building or other geographically identifiable feature that is part of a complex.  A constituent entity may be identified by a NAP or by a conventional street address.  Examples in Manhattan: AVERY FISHER HALL (a constituent entity of LINCOLN CENTER identified by NAP); CITY COLL SHEPARD HALL (a constituent entity of CITY COLLEGE identified by NAP); 259 CONVENT AVE (a conventional street address which identifies CITY COLL SHEPARD HALL).

NAPs are accepted as input data by Function 1N and by the address-processing functions (Functions 1, 1A, 1B and 1E, but not Function AP.). <i>Currently, these functions accept a limited set of NAPs (including only some of the examples in this section).  Additional NAPs are being added over time.</i> Support of NAPs that have address numbers is described below.  For further details on NAPs, see [Chapter IV.7](/chapters/chapterIV/section07).

## <u>Support of Non-Addressable Place Names (NAPs) with address numbers</u>

<b><u>Warning: </b></u> <b>	Some users may need to modify their input NAP data to get expected results (see below).</b>

There are some Non-Addressable Place Names (NAPs) in New York City that either actually have addresses associated with them – often in a location that differs from the NAP itself  – or are commonly treated as addressable.  An example in Manhattan is the NAP called ‘<b>Bryant Park</b>’.  A building exists near Bryant Park with its own NAP of One Bryant Park which is often treated by users as if it had the address ‘<b>1 Bryant Park</b>’.  Another example, in Brooklyn, is the NAP called ‘<b>Grand Army Plaza</b>’.  A cooperative now exists near Grand Army Plaza, and its address is ‘<b>1 Grand Army Plaza</b>’.  Geosupport supports as input the special case of a NAP that has an address number.  (Releases of Geosupport prior to Version 13.2 ignored any address number that was entered as input with a NAP.)

In order to support this type of address (i.e. a NAP with an address number), Geosupport does not automatically ignore an address number that is submitted as input with a NAP.  Geosupport ignores the input address number only if the address does not exist.  In general, this does not affect the user’s output since users typically do not enter an address number with a NAP.  Note, however, if a user submits an address number (by accident or intentionally), the resulting output may be different from submitting the NAP without the address number, because, for example, ‘<b>1 Bryant Park</b>’ will be recognized as a specific building, not as the park called ‘<b>Bryant Park</b>’.  The results will be identical to a NAP without an address number if the address number submitted does not exist.  For example, ‘<b>34 Bryant Park</b>’ does not exist; the address number (viz. ‘34’) will be ignored in that situation and the information for ‘<b>Bryant Park</b>’ will be returned.  Geosupport issues a warning to users that the input address number is ignored.(Though this will not be apparent in GBAT if the option to treat warning messages as rejects is not selected).

<b><i>Note to users who enter a ‘dummy’ address number with a NAP intentionally:
 It may be necessary for these users to modify their input data</b></i>.  These users typically run applications that do not allow the data to have a blank address number, even for a NAP.  The input is submitted with a ‘dummy’ address number.  To ensure that Geosupport returns information about the NAP (and not a specific building that is now being supported), the users should <b><i>use ‘9999’ as the dummy address number</b></i>.  In all probability, the ‘9999’ address will not exist.  When the ‘9999’ address does not exist, Geosupport will ignore the ‘9999’ and treat it as blanks.  Geosupport will then give results as if the NAP was entered without the address number.

## <u>Pseudo-Street Names</u>

Pseudo-street names are special ‘invented’ names that in certain circumstances Geosupport accepts as valid input street names, as described in [Chapters V.2](/chapters/chapterV/section02), [VII.2](/chapters/chapterVII/section02) and [VII.3](/chapters/chapterVII/section03).  Three sets of pseudo-street names are:  

> DEAD END and its aliases DEADEND, DEAD END STREET, CUL DE SAC and CULDESAC

> CITY LIMIT and its aliases CITY LIMITS and CITY LINE

> BEND and its alias BENDING POINT

DEAD END and BEND, and their aliases, are valid in all five boroughs.  CITY LIMIT and its aliases are valid in all boroughs except Brooklyn.  These pseudo-street names may not be used to specify addresses, but they may be used to specify street intersections, and to specify the cross streets (but not the ‘on’ street) in other types of street configurations.

## <u>Duplicate Address Pseudo-Street Names (DAPSs):</u>
Another type of pseudo-street name that Geosupport recognizes, for certain addresses only, is Duplicate Address Pseudo-Street Names (DAPSs).  DAPSs are used with Geosupport’s duplicate address processing feature (discussed in detail in [Chapter V.6](/chapters/chapterV/section06)).  New York City has a small number of duplicate addresses, which are not data errors in Geosupport files, but are situations where an address is valid in reality at two different locations on the same street.  DAPSs provide a means for a user to specify unambiguously a particular instance of a duplicate address.  The user may also provide ZIP Code input to enable Geosupport to recognize which duplicate street name should be used.

An example of a street that has duplicate addresses is Hillside Avenue in Queens.  A portion of Hillside Avenue in the Bellerose neighborhood has some of the same addresses as does another portion of Hillside Avenue in the Douglaston neighborhood.  To make it possible to process these addresses, the DAPSs HILLSIDE AVENUE BELLEROSE and HILLSIDE AVENUE DOUGLASTON have been created.  Similar DAPSs have been created for each city street that has duplicate addresses.  In general, DAPSs are formed by augmenting the conventional name of the street with a neighborhood name.  

An example of using ZIP Code input in a duplicate address situation follows.  If 239-02 Hillside Avenue in Queens, with a ZIP Code set to 11426 is provided as input to Function 1, 1A, 1B, 1E or AP, Geosupport will determine that Hillside Avenue Bellerose should be used.  If the ZIP Code provided had been 11363, Geosupport would determine that Hillside Avenue Douglaston should be used.  This processing will occur even if the borough code has been provided as well.

Geosupport accepts DAPSs as valid input only for certain addresses on streets that have duplicate addresses, as explained in [Chapter V.6](/chapters/chapterV/section06).  

If a DAPS is supplied as input to a Function 2, 3, 3C or 3S call, the associated neighborhood name (a.k.a. town name in Queens) will be stripped off to provide a valid street name for these calls.  A warning message (Reason Code W) will be issued.  For example, if the input to a Function 2 call is “Hillside Avenue Douglaston”, the word “Douglaston” will be removed and the street name “Hillside Avenue” will be used.

## <u>Intersection Names</u>

Certain street intersections in New York City have intersection names which can serve as an alternative way to identify such locations in addition to the conventional means of reference using the names of two intersecting streets.  For example, ISAAC STERN PLACE is an intersection name for the intersection of West 57 Street and 7 Avenue in Manhattan.  On the other hand, TIMES SQUARE is not an intersection name, because it refers to an area encompassing several intersections rather than a single street intersection.  Official intersection names are designated by the City Council, and informal intersection names develop over time through local customary usage.

Geosupport accepts the input of a limited set of intersection names.  Intersection names may not be used to specify addresses (Functions 1, 1A, 1B, 1E, or AP), but they may be used to specify street intersections (Function 2), and to specify a cross street (but not the ‘on’ street) in other types of street configurations (Functions 3, 3C or 3S).
