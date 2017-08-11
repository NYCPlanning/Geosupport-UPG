<h2>V.9  Vanity Addresses</h2>  

Vanity addresses are a type of geographically ‘dislocated’ address in which the street name is that of a different street from the one on which the building entrance is actually located.  Developers sometimes use such addresses in the belief that a prestigious street name enhances the market value of a property.  

1049 FIFTH AVENUE in Manhattan is an example of a vanity address.  Although this is ostensibly a Fifth Avenue address, the building entrance to which this address is assigned is actually located on the south side of East 86th Street between Fifth and Madison Avenues.  (In this case, the building has no frontages at all on the named street, although that is not a prerequisite to being a vanity address.)  

Functions 1 and 1E process vanity addresses as follows.  

  * A warning with Reason Code ’V’ is issued, along with a message that indicates the ‘true’ street name (the name of the street on which the building entrance is actually located).  

  * The output data returned, including cross streets and geographic district identifiers, pertain to the true blockface.  For example, the information returned for 1049 FIFTH AVENUE corresponds to the blockface on the right (south) side of East 86th Street between Fifth and Madison Avenues, not to a blockface of Fifth Avenue.  In particular, East 86th Street is not returned as a cross street, since it is the true ‘on’ street; and Fifth Avenue is returned as the cross street at the low-address end of the segment.   

  * The source for the Spatial Coordinates (a.k.a. X-Y coordinates) returned for Vanity Addresses (and NAPs) is the **Citywide Street Centerline file (CSCL).** The CSCL information guarantees that the X-Y coordinates fall within the actual location (e.g. building footprint) of the Vanity Address.  

  Function 1A processes vanity addresses as follows:

  * A warning with Reason Code ‘V’ is <u>not</u> issued.  

  * The output data returned pertain to the actual building associated with the vanity address.  

  * In the list of geographic identifiers at least two entries will appear: one (type V entry) for the vanity address and one for the real street (a.k.a. true street or underlying street).  The second entry will be either a regular address entry with house numbers and street information or a type R entry indicating the street that the entrance to the vanity address is on.  

  <br/>
