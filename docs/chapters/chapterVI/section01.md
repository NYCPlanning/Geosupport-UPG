<h2>VI.1  Introduction</h2>

New York City has approximately one million parcels of privately and publicly owned real property, called tax lots,   containing more than 800,000 buildings.  This chapter describes the Geosupport functions that process tax lots and buildings, Functions 1A, BL and BN.  It also describes the Geosupport function that provides the Address Point information for addresses in New York City, Function AP.

Two data items discussed in detail in this chapter, the Borough-Block-and-Lot (BBL) and the Building Identification Number (BIN), serve as unique identifiers for tax lots and buildings, respectively.  (Addresses are non-unique building identifiers, since many buildings have more than one address.)  Function 1A accepts address input, Function BL accepts BBL input, and Function BN accepts BIN input.

Address Point IDs which relate to a ‘real’ posted address, and BBL and BIN information can be retrieved via Function AP.  Function AP accepts address input.  For more information on Function AP and Address Points, see [Chapter VI.10](../chapterVI/section10/).

Functions 1A, 1B, BL, and BN return property information that is updated on a weekly basis.  (Prior to Version 17.1/Release 17A, the property information was updated on a quarterly basis.  For Function 1B, only the property level data will be updated weekly<sup><a href="#section1.4">4</a></sup>.)  COW users may request more up-to-date information relating to new buildings and demolitions via the TPAD Request Flag for Functions 1A, 1B, BL and BN.  (Note that TPAD information is not available for Function AP.  Also, for Function AP, the property information continues to be updated on a quarterly basis.)  For more information on the TPAD feature see [Chapter VI.11](../chapterVI/section11/) which discusses TPAD<sup><a href="#section1.5">5</a></sup> BIN and Status Information (COW only).  See also [Appendix 17](/appendices/appendix17/) which discusses TPAD error processing and work area field names.


<p>_________________________</p>
<sup><span id="section1.4">4</span></sup> The weekly updates are typically available to users on the DoITT mainframe.  For other users, discuss availability with the Geosupport Staff.  
<sup><span id="section1.5">5</span></sup> TPAD – Transitional Property Address Directory
