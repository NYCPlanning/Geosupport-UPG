<h2>V.7  Marble Hill/Rikers Island</h2>  

There are two New York City areas, Marble Hill and Rikers Island, that have the following idiosyncrasy:  each is more closely identified geographically with a borough other than the borough to which the area legally belongs.  The former is referred to as the ‘alternative borough’.  

* <u>Marble Hill</u>: The legal borough is Manhattan, and the alternative borough is the Bronx.  Marble Hill is located on the Bronx side (the north side) of a body of water separating Manhattan Island from the Bronx, and it has a land boundary with the Bronx but it is connected to Manhattan Island only by a bridge.  

* <u>Rikers Island</u>: The legal borough is the Bronx, and the alternative borough is Queens.  Rikers Island is physically connected to Queens via a bridge but is not connected to the Bronx.  

Because of their locations, Marble Hill and Rikers Island receive many of their government services from their alternative borough, and therefore they are included in many operational and administrative districts of the alternative borough.  For example, most of Marble Hill is in Bronx Community District (CD) 8, and the remainder of it is in Bronx CD 7.  Marble Hill also has a Bronx ZIP code (10463).  Rikers Island is assigned to Queens CD1.  

In practice, both the legal borough and the alternative borough are used when specifying Marble Hill and Rikers Island locations.  To accommodate this practice, Geosupport’s address-processing and street configuration-processing functions have been designed to accept either the legal borough or the alternative borough as the input borough for Marble Hill and Rikers Island locations.  For example, the Marble Hill address 150 WEST 225 STREET is accepted by the address-processing functions whether Manhattan or the Bronx is specified.  The Rikers Island address 18-99 HAZEN STREET is accepted whether the Bronx or Queens is specified.  

When an application makes a two-work-area call to any of the address-processing or street configuration-processing functions other than Function 3S, and specifies the alternative borough for a Marble Hill or Rikers Island location, Geosupport issues a warning with a Reason Code value of ‘C’ and an appropriate Message.  

Except for the LION Key (viz. Borough Code, Face Code and Sequence Number) the information returned to the application in WA2 is the same regardless of which borough is specified as the input borough.  Note, however, that the output borough name and street code(s) returned to the application in WA1 do depend on which borough is specified as the input borough.  Each street in Marble Hill and Rikers Island has two street codes assigned to it, one for the legal borough and one for the alternative borough.  The street code(s) and borough name that are returned in WA1 correspond to the input borough.
