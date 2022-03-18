<h2>VI.10  Function AP (COW Only)</h2>

Emergency Management and the Department of Health and Mental Hygiene have a need to geocode addresses to their corresponding CSCL address points.  By geocoding to a CSCL address point, the user application will presumably geocode to a ‘real’ posted address – not an address that might be part of an administrative range for a building.  The Functions AP and AP Extended <sup><a href="#section10.6" id="section10.6-6">6</a></sup> (a.k.a. APX) return the desired information.  

Function AP processes input addresses.  When Function AP is called using two work areas, it returns information in WA2 related to Address Point,  tax lot and the building identified by the input data.  Work Area 2 contains the Address Point ID and X, Y coordinates of the Address Point.  It also contains some property information such as the BBL and BIN of the input address.  Note that the Work Area 2 contains information related only to the input address, not to any other addresses or buildings on the lot.  

The Work Area 2 layouts for Functions AP and AP Extended are very similar to those of Functions 1A and 1A Extended.  Only those fields deemed necessary for the AP function are returned with AP and AP Extended.  Fields that are not needed are filler.  The field names in the copylibs are typically very similar to each other except for the prefixes.   

Since the AP function is requesting the address point of only one address, Geosupport returns only one address in the Work Area 2 address list.

See the Function AP work area layouts in [Appendix 13 (COW)](../../../appendices/appendix13/).   

See [Chapter V](../chapterV/chapterV/) for a general discussion of Geosupport address processing, much of which is applicable to Function AP.  

<b><u>Function AP Extended Work Area 2 (Mode Switch set to ‘X’).</u></b>  The first 246 bytes of the Extended Work Area 2 for Function AP, up to the “Number of Entries in List of Geographic Identifiers” field, are the same as with regular COW Work Area 2. Aside from adding some filler and the Function AP Reason Code, Warning Code, and GRC fields (which are identical to the WA1 fields) to the work area for Function AP Extended, the only change is in the address list. The street codes in the address list are B7SCs instead of B5SCs.  **The Principal Street Name (based on the B7SC in the address list) is added to each element in the address list for the user’s convenience.**

<p>_________________________</p>
<a href="#section10.6-6"><sup><span id="section10.6">6</span></sup></a> Function AP Extended is also known as Function APX.  It is invoked by calling Function AP with the Mode Switch set to X.
