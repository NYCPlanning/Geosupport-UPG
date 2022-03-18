<h2>IV.6 Functions D, DG and DN;  Primary, Principal and Preferred Street Names</h2>  

This section discusses Functions D, DG and DN.  These functions are referred to as the Geosupport ‘display functions’ because, although they do not actually display anything themselves, they return street names that applications can use to format geographic locations for display on reports, screens, mailing labels, work orders for field work, etc.  Functions D, DG and DN process input five-, seven- and ten-digit street codes (accompanied by borough codes), respectively.  (The display functions can also be used to obtain address numbers in display format.  This is discussed in [Chapter V.2](../../chapterV/section02/))  

The selection of street names for display is a significant consideration for any street that has more than one local street name group.  Given a specific location (i.e., an address, intersection, street segment or blockface) on a street, applications can use a simple procedure involving a call to Function DG to obtain a street name that is considered ‘optimal’ to display for that location, called the ‘preferred street name’.  Functions D and DN return street names that are of more specialized and limited use.  

The display functions do not have a Work Area 2, and are accessed via one-work-area calls only.  (If a second work area is mistakenly supplied, it is ignored.)  Work Area 1 contains fields for the input street codes and for the output street names.  The street names that the display functions return are full street names (never partial street names), normalized in accordance with the SNL and Street Name Normalization Format Flag values that are in effect for the given call.  

## <span id="chapterIV.6.1"><u>Input Data</u>  

For the convenience of applications, each of the display functions can process up to three input street codes in a single call.  If there are multiple input street codes, they are processed independently of each other and are not treated as though they were specifying a geographic location such as an intersection.  (Similarly, if there is both an input street code and an input address number, they are not treated as though they were specifying an address.)  In particular, a successful call to a display function does not imply the validation of the input data as a geographic location.  Furthermore, the output street names returned by the display functions are not by themselves customized to be location-specific.  Function DG must be used in conjunction with a call to another function to obtain a location-customized preferred street name.  

For Function D, there are two different sets of fields in Work Area 1 that applications can use to pass input street code values, as follows.  

• For MSW calls, if the input street codes are in the form of PB5SCs, the 4-byte input fields that are labeled PB5SC-1, PB5SC-2 and PB5SC-3 in the Work Area 1 layout in [Appendix 2](../../../appendices/appendix02/) are used.  

•	For MSW or COW calls, if the input street codes are in the form of B5SCs, the 11-byte input fields labeled B10SC-1, B10SC-2 and B10SC-3 are used.  The input B5SC values, which are 6 bytes long, must be passed in these fields left-justified, and the contents of these fields beyond the first six bytes are ignored.  

If an MSW application passes values to Function D in both sets of input street code fields (presumably inadvertently), the PB5SC fields are processed, and the B10SC fields are ignored.  

For Function DG and DN, only the fields B10SC-1, B10SC-2 and B10SC-3 are used.  In the case of Function DG, input 8-byte B7SC values must be passed in these fields left-justified, and the contents of these fields beyond the first eight bytes are ignored.  

In a call to any of the display functions, Geosupport will process all three of the input street code fields, even if some of the fields are blank.  If a street code field is blank, Geosupport will simply skip it and process the next field.  For example. if B10SC-1 is blank, but B10SC-2 and B10SC-3 are not blank, they will be processed.  The output street names will appear in the corresponding street names fields, viz. Street Name-2 and Street Name-3.  Similarly, if B10SC-1 is not blank but B10SC-2 is blank, B10SC-3 will still be processed and the output street names will appear in Street Name-1 and Street Name-3.  An error message is generated only if all the input street code fields are blank.  Similar conditions hold for the PB5SC fields.  

## <span id="chapterIV.6.2"><u>Output Data</u></span>    

The output street names that the display functions return are as follows:  

• <u>Function D</u> is used to obtain, for an input B5SC value, or PB5SC value (MSW only), the <u>primary street name</u>  for the given street.  The primary street name is one alias, that is, one spelling of one street name, that GSS has designated, from among all the aliases for the street, as ‘best’ representing the street as a whole.  (<u>Note</u>: The designation of primary street names has no ‘official’ status, and of necessity sometimes involves an element of arbitrariness.) The primary street name is not customized to be the ‘best’ name for any particular location along the street;  it is simply the street name deemed most suitable to display if a single street name must be used to represent the entire street.  Most applications do not require the services of Function D.  However, some applications may, for example, have a requirement to display a consistent street name for all locations that are on the same street, so that it will be clear to users that all the displayed locations do refer to the same street.  When possible, GSS designates as primary a street name that is valid for the entire length of the street.  However, it is important to note that there are a few streets that do not have any such names.  On such streets, there are locations where the street’s primary street name is invalid.  An example exists in Queens.  103 Street and William Clarke Place share the same B5SC viz.419690, and 103 Street is the primary street name.  However, 700 William Clarke Place is a valid address and 700 103 Street is invalid because 103 Street is not valid at that location.

• <u>Function DG</u> is used to obtain, for an input B7SC value, the <u>principal street name</u> of the corresponding local street name group.  This is a street name belonging to the given local street name group that GSS has designated as ‘best’ representing that group of street names, that is, the name that has been deemed to have the most ‘standard’ spelling.  (As with primary street names, the designation of principal street names has no ‘official’ status, and of necessity sometimes involves an element of arbitrariness.)  The most important use of Function DG is to retrieve preferred street names, as discussed below.  

• <u>Function DG</u> is used to obtain, for an input B10SC value, the full street name spelling to which that B10SC value uniquely corresponds.  Function DN is useful mainly in certain atypical applications that store ten-digit street codes in an application file, but do not store the input street names from which the street codes were originally obtained, and the application has a requirement (for legal purposes, for example) to display those originally-entered street names.  Such applications can use Function DN to obtain the original name from the corresponding stored B10SC value (although the name will be provided in normalized form.)   Application designers can obviate the need to make Function DN calls by retaining in the application file either the original input street name or that name in normalized form.  

The display functions return one output street name for each valid input street code.  For each input street code that is invalid, the display functions return all question marks (the character ‘?’) in the corresponding output street name field.  In addition, if at least one input street code is invalid, the GRC value ‘64’ is issued along with an appropriate Message.  

## <span id="chapterIV.6.3"><u>Preferred Street Names</u></span>  

As explained above, the primary street name is not necessarily the ‘best’ name to use to express any particular location along a street.  Furthermore, although each principal street name is the ‘best’ representative of its local group of street names, there may be more than one local group valid at a particular location.  

COW applications can retrieve preferred street names easily. Given a specific address, street intersection, street segment or blockface along a street, <u>COW applications </u> can use Function 1, 1A, 1B, 2, 3 or 3C, respectively, with the Work Area 1 Browse Flag set to ‘R’ to obtain the DCP-preferred street name(s) specific to that location.  For a description of the Browse Flag, see [<u>Section III.8  Selection of Output Street Names (COW only)</u>](../../chapterIII/section08/).  

Note:  In support of the unique requirements of the New York City Board of Elections’ voter registration application, COW Function 1E with Browse Flag set to ‘R’ will return the BOE-preferred street.  For most addresses, the DCP-preferred LGC and the BOE-preferred LGC are identical.  

MSW application may also obtain preferred street names corresponding to the input.  Given a specific address, street intersection, street segment or blockface along a street, MSW applications can use Function 1, 1A, 1B, 2, 3 or 3C, respectively, in conjunction with Function DG, to obtain the DCP preferred street name specific to that location, as follows:  

1. Issue a two-work-area call to the appropriate location-processing function (Function 1, 2, 3 or 3C), to obtain an item called the ‘DCP-preferred LGC’, which all of these functions return in WA2.  The DCP-preferred LGC represents the blockface-specific local street name group that GSS has designated from among those local groups that are valid for the given blockface as being the ‘best’ group of street names to display for that blockface.  (Note:  In support of unique requirements of the New York City Board of Elections’ voter registration application, Function 1E returns an item called the BOE-preferred LGC in place of the DCP-preferred LGC.  For most addresses, the DCP-preferred LGC and the BOE-preferred LGC are identical.)  

2. Concatenate the DCP-preferred LGC to the B5SC to form a B7SC.  

3. Call Function DG with the above B7SC as input to obtain the preferred street name. <u>The principal street name of the DCP-preferred local group is the preferred street name for the given location</u>.  

For example, suppose the original user input address to an application is 2019 SEVENTH AVENUE in Manhattan.  This address is within the portion of the street north of Central Park, where two local groups are valid:  local group 1 (LGC = ‘01’), which consists of the name POWELL BOULEVARD and its spelling variants, and local group 4 (LGC = ‘04’), which consists of the names 7 AVENUE and SEVENTH AVENUE. GSS has designated local group 1 as the DCP-preferred LGC for the portion of the street north of Central Park, and has also designated ADAM C POWELL BOULEVARD as the principal name of this local group.  

A COW application obtains the preferred street name for the address 2019 SEVENTH AVENUE in Manhattan by issuing a Function 1 call with the Work Area 1 Browse Flag set to ‘R’.  Geosupport returns the DCP-preferred street name, ADAM CLAYTON POWELL JR BOULEVARD.  The associated B10SC, 11061001100, will also be returned.  (Function 1E will return 7 AVENUE and 11061004010 correspondingly, since BOE chose 7 Avenue as the preferred street name.).  

An MSW application can obtain the preferred street name for the address 2019 SEVENTH AVENUE in Manhattan, by performing the procedure outlined above, as follows:  

• Function 1 is called with the input address 2019 SEVENTH AVENUE.  Function 1 returns in WA1 the B10SC value of the input street name, SEVENTH AVENUE, namely, the value ‘11061004020’.  The first six positions, ‘110610’, constitute the street’s B5SC value.  Function 1 also returns, in WA2, the DCP-preferred LGC value for this address, which is ‘01’.  

•	The application concatenates the B5SC value with the DCP-preferred LGC value, forming the B7SC value ‘11061001’.  

• The application calls Function DG using this B7SC value as input, obtaining ADAM C POWELL BOULEVARD as the preferred street name corresponding to the address 2019 SEVENTH AVENUE.  The application may now display the address as 2019 ADAM C POWELL BOULEVARD.  

In summary, the MSW application began with the address 2019 SEVENTH AVENUE, and by following the outlined procedure, in which first Function 1 and then Function DG was called, the application formed the ‘preferred’ address 2109 ADAM C POWELL BOULEVARD for display.  

If either the COW or MSW application had started with the address 375 SEVENTH AVENUE, which is located south of Central Park, then either procedure would have resulted in the address 375 7 AVENUE, since 7 AVENUE is the principal name of the DCP-preferred local group for all locations on Seventh Avenue south of Central Park.  

** Please note: ** There is a new switch defined in COW Work Area 1 that will allow a user to call Geosupport and get a new, extended Work Area 2 for various functions.  Functions 1, 1E, 1A, 3, 3C, BL and BN have extended work areas.  These extended Work Areas contain Street Names of cross streets, etc. in addition to Street Codes. Users will rarely have to make separate D, DG, or DN calls (as explained above) to get the street names.
