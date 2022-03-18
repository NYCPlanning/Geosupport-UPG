<h2>VI.3  Buildings and Building Identification Numbers (BINs)</h2>

Many city agencies must maintain and process building-related data rather than, or in addition to, tax lot-related data.  These two levels of processing are distinct, since a single tax lot can contain more than one building or no buildings.  

A critical issue for building-level processing is to be able to identify buildings <u>consistently</u>.  Neither addresses nor BBLs are suitable to serve as consistent identifiers for buildings.  Some shortcomings of using addresses as building identifiers are as follows:  

* Many buildings have more than one address.
* Some buildings have no addresses.
* The same address can identify both an existing building and a demolished one.
* New York City has a small number of instances in which two different existing buildings have the same address (see [Chapter V.6](../../chapterV/section06/)).  

Some shortcomings of using BBLs as building identifiers are as follows:  

* Some tax lots contain more than one building.  
* The relationship of buildings to tax lots is volatile, since tax lots are often subdivided and merged over time.  

In order to provide a unique, immutable, citywide standard for building identification that can support consistent building-level processing, GSS has developed a set of <u>Building Identification Numbers (BINs)</u> that are assigned to every known building in the city.  (BINs are distinct from, and should not be confused with, house numbers.)  A BIN is a seven‑byte numeric item, the first digit of which is the borough code.  If a BIN field in a Geosupport work area is ‘empty’ (devoid of information), it contains the borough code followed by all zeros (in contrast to most Geosupport fields, which contain all blanks when ‘empty’).  These are often referred to as zero BINs or ‘million’ BINs (e.g. 1000000, 2000000, etc.).  

By using BINs as the building identifier, city agencies can process and match building-related data easily and in a consistent manner.  Indeed, there are buildings that do not have either an address or a Non-Addressable Place Name (NAP) and can be identified only by their BIN.  In this document, such buildings are called <u>Non-Addressable Un-named Buildings (NAUBs)</u>.  Typical examples of NAUBs are some storage sheds on industrial lots and some comfort stations in parks.  

The proliferation of the use of BINs among city agencies facilitates matching data by building across applications and across agencies.  The Department of Buildings, which is particularly involved with building-level processing, uses BINs to identify buildings in its major computer applications.  

The BIN that is assigned to a building is never changed (except to correct assignment errors);  it remains assigned to that building permanently, even if the building is subsequently demolished or its BBL changes as a result of a tax lot merger or apportionment.  If a building is demolished, and a new building is subsequently built and given the same address as that of the demolished building, GSS assigns to the new building a new BIN, different from that of the demolished building.  In this case, the same address ambiguously identifies two distinct buildings (the new one and the demolished one), but each building is unambiguously identified by its own unique BIN.  <u>However, only the ‘active’ BIN for an address is returned in the Geosupport System at one time, unless the user sets the TPAD request switch in which case a Transitional BIN may also be returned for a given address (see [Chapter VI.11](../chapterVI/section11/) for more information).</u>  That is, only one BIN per address is accepted as Function BN input and returned as Function 1A, 1B and BL output.  Generally, the active BIN of an address is the BIN assigned to the most recent building at the given address.  Function BN also accepts as input the BINs assigned to buildings that have no addresses, such as NAUBs.
