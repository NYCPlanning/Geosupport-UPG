<h2>IV.8 Street Code Input Feature</h2>  

For most functions involving street input, applications have the option to pass the input streets to Geosupport in the form of either street names or street codes.  The exceptions are Function 1N and the display functions.  Function 1N requires input streets to be passed in the form of street names, since that function’s sole purpose is to normalize input street names and provide their street codes.  The display functions require input streets to be passed in the form of street codes, since those functions are designed to provide street names corresponding to input street codes.  

The street code input feature is useful in an application that stores street codes but not street names in an application file (presumably to save disk storage space), since it enables the application to process records from that file directly through a Geosupport location-processing function, without first having to call a display function to obtain street names.  

Applications can provide input street codes to any of the functions that can accept them in any of the following forms (the field names used below are the same as those used in the WA1 layouts in [Appendix 2](../../../appendices/appendix02/) for MSWs and [Appendix 13](../../../appendices/appendix13/) for COWs.):  

* PB5SCs (MSW only), passed in as many as necessary of the WA1 input fields PB5SC-1, PB5SC-2 and PB5SC-3.  

* B5SCs, passed left-justified and space-filled in as many as necessary of the WA1 input fields B10SC-1, B10SC-2 and B10SC-3.  

• B7SCs, passed left-justified and space-filled in as many as necessary of the WA1 input fields B10SC-1, B10SC-2 and B10SC-3.  

•	B10SCs, passed in as many as necessary of the WA1 input fields B10SC-1, B10SC-2 and B10SC-3.

For functions that involve multiple input streets, the input streets specified in a call must all be in the same form, either all street names, or all PB5SCs (MSW only), or all B5SCs, or all B7SCs, or all B10SCs.  Note that the first byte of all input street code fields is a borough code.  When input streets are specified using street code input, the contents of the separate WA1 input borough code field (MSW only) is ignored.  

Local street name validation ([see Chapter IV.5](../../section05/)) is not performed when the street input is in the form of five-digit street codes, but it is performed with seven-digit and ten-digit street code input.  

## <span id="chapterIV.8.1"><u>Functions 1, 1A, 1B, 1E, and AP and Street Code Input</u></span>  

When a user supplies a borough and 5-digit street code as input to Functions 1, 1A, 1B and AP, Geosupport returns the DCP-preferred street name and its corresponding B10SC.  For Function 1E, Geosupport returns the BOE-preferred street name and its corresponding B10SC.  Primary street names are not returned, because primary street names do not always apply to the entire street stretch, and may produce an error when used as input for a subsequent call for that location.  Preferred street names are also often the more widely used name and therefore a better choice.  

The street names returned by Functions 1, 1A, 1B, AP  and Function 1E are usually the same.  An example where the street names are not the same is for Functions 1 and 1A calls for address numbers (e.g. 2019) on 7 Avenue in Manhattan north of West 110th Street.  If the user supplies the B5SC of 110610, the street name ADAM C. POWELL BOULEVARD, the DCP-preferred name, will be returned.  Since ADAM C. POWELL BOULEVARD is the street name most commonly used in this location, it is a better choice than the primary street name (7 AVENUE).  However, Function 1E will return 7 AVENUE since this is the BOE-preferred street name.  

The technique of returning the preferred street name instead of the primary street name helps to insure that if the street name is used as input to Geosupport with the address number, it will be a successful call.  

## <span id="chapterIV.8.2"><u>NAPs and Street Code Input</u></span>  

With respect to a NAP of a simplex, as with conventional street input, the user has the option to specify the input datum either in the form of the name (in this case, the NAP) or its B5SC.  However, <u>five-digit street code input is prohibited for a NAP of a complex or a constituent entity of a complex</u>  (it is rejected with a GRC value of ‘07’); instead, 7-digit or 10-digit street code input (B7SC or B10SC) is accepted.  The reason for this restriction is that different entities of the same complex may be located within different blockfaces, tax lots, census blocks, administrative or political districts etc., so that the B5SC may not be specific enough to enable Geosupport to determine the proper set of output data to return.
