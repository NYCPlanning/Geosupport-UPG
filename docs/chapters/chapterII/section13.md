<h2>II.13 The Enhanced Work Area 2 Option - via Mode Switch (NMF Only)</h2>

A new Mode Switch Option, 'E' (Enhanced), has been implemented for the non-mainframe environment (NMF)., e.g. Desktop Edition, GeoX, .net, and Linux.

To enable more processing of B7SCs and to return additional information from Geosupport in the B7SC format, an Enhanced version of Work Area 2 has been defined for Functions 3 and 3C.  Users may request the Enhanced Work Area 2 by setting the Mode Switch in Work Area 1 to ‘E’.  This option is available only for COW Functions in a non-mainframe environment.

The Enhanced version of the Work Area 2 includes all the information that is returned in the Extended Work Area 2.  The layouts have been reorganized and some fields e.g. the street codes for the cross streets at the high and low ends of the segment, are now returned as B7SCs, instead of B5SCs.  The B7SC street codes that are returned by the Enhanced functions typically reflect  the Principal Street and thus give the user the best name for the location being requested.  

Users in the non-mainframe environment may request an Enhanced Work Area 2 for Functions 3 and 3C.

The Mode Switch is a one-byte field, in column 330 of the COW Work Area 1. The only valid values for the Mode Switch are “X” for Extended, "E" for Enhanced, and blank.  The Enhanced Mode can be requested when the Auxiliary Segments are also requested.  

Note that when the Mode Switch is set to ‘E” for Functions 3 and 3C, the functions may be referred to as Function 3 Enhanced and 3C Enhanced, respectively.  The functions may also be referred to as 3E and 3CE respectively.
