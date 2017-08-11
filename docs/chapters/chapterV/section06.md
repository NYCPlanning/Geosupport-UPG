<h2>V.6 Duplicate Addresses</h2>  

New York City has a small number of <u>duplicate addresses</u>, which are not data errors in Geosupport files, but real duplicates in the assignment of house numbers to buildings or in the allocation of administrative address ranges to blockfaces.  Some duplicate addresses were created when formerly independent towns were consolidated into one of the city’s boroughs.  Other duplicates involve situations in which a developer or other entity has given the same name to a private street that the city has given to a public street in the same borough.  When two streets in the same borough have the same name, Geosupport treats them as portions of a single street, regardless of how far apart they are geographically.  

Geosupport’s address-processing functions, Functions 1, 1A, 1B and 1E, when called using two work areas, have a special feature to process duplicate addresses.  This feature involves the use of <u>Duplicate Address Pseudo-Street Names (DAPSs)</u>, described in [Chapter III.6](/chapters/chapterIII/section06/).  DAPSs are assigned to every street that has duplicate addresses, providing a means for users to specify unambiguously a particular instance of such an address.  The user may alternatively specify the unique ZIP Code for the address.  [See Chapter III.6](/chapters/chapterIII/section06/) for more detail.  

Whether a given input address is processed as a duplicate address depends on the function.  Functions 1 and 1E behave identically with respect to duplicate address processing, both in the set of addresses they consider to be duplicates, and in the way addresses are processed.  However, Function 1A differs from Functions 11E in both of these respects.  

Note, that **Function 1B** is a combination of Function 1A Extended and Function 1E Extended.  

Function 1B first calls Function 1A Extended to process the input address.  During its processing, Function 1A Extended may modify the input address, (e.g. if it assumes a range).  Function 1B then calls Function 1E Extended with the input  address as it was modified by Function 1A Extended.  Separate error messages are issued by the Function 1A Extended and the Function 1E Extended processing.  Both messages are returned to the user.  

There are two cases of <u>duplicate address situations</u>:  
* <u>Case 1:  Overlap of Administrative Address Ranges Allocated to Two Blockfaces:</u> The same administrative address range (discussed in [Chapter V.4](/chapters/chapterV/section04/)) or portion thereof is allocated to two different blockfaces on the same street in the same borough.  That is, an administrative address range allocated to one blockface along a street contains, coincides with, or otherwise overlaps with, that allocated to another blockface along the same street.  Any input address that is within such an overlap is processed as a duplicate address by Functions 1 and 1E.  

* <u>Case 2:  Duplication of an Address or Address Range Assigned to Two Buildings:</u> The same address or range of addresses is assigned to two different buildings on the same street in the same borough.  Any such input address is processed as a duplicate address by Function 1A.  

In general, an address that is an instance of Case 2 is also an instance of Case 1, but the reverse is not necessarily true.  That is, almost all addresses that are processed as duplicates by Function 1A are also processed as duplicates by Functions 1/1E, but there are many addresses that are processed as duplicates by Functions 1/1E but are not processed as duplicates by Function 1A.  

Hillside Avenue in Queens has addresses that exemplify both of the above cases.  A Case 1 example is the following:  There is a blockface of Hillside Avenue in the Bellerose neighborhood of Queens to which the administrative address range 239-02 to 239-10 is allocated.  There is another blockface of Hillside Avenue, in the Douglaston neighborhood of Queens, to which the administrative address range 239-02 to 239-20 is allocated.  Since the Bellerose range is entirely contained within the Douglaston range, Functions 1 and 1E process every house number in the Bellerose range (all the even house numbers on Hillside Avenue from 239-02 to 239-10) as a duplicate address.  

Despite the administrative address range duplication, not every individual even house number on Hillside Avenue between 239-02 and 239-10 is a valid actual building address in both Bellerose and Douglaston, i.e., is an instance of Case 2.  <u>Function 1A does not process an address as a duplicate unless it is assigned to two different buildings, even if Functions 1 and 1E process that address as a duplicate</u>  

Function 1A faces three possibilities when processing an address that Functions 1/1E consider to be a duplicate, as illustrated by the following Hillside Avenue examples:  

* 239-02 Hillside Avenue is assigned to buildings in both Bellerose and Douglaston.  Therefore, this address is processed as a duplicate address by Function 1A, as well as by Functions 1/1E.  

* 239-06 Hillside Avenue is assigned to only one building, in Bellerose.  Therefore, this address is processed normally, not as a duplicate address, by Function 1A, even though it is processed as a duplicate address by Functions 1/1E.  

* There are no buildings to which 239-04 Hillside Avenue is assigned.  Therefore, this address is rejected as entirely invalid by Function 1A, even though it is processed as a duplicate address by Functions 1/1E.  

<u>Processing of a duplicate address.</u> When an address-processing function considers an input address to be a duplicate, it processes that address as follows.  

* <u>If the street in the input address is specified using the conventional street name (and no ZIP code is specified or an invalid ZIP code is specified), the call is rejected</u> with a Geosupport Return Code of ‘75’.  The accompanying Message informs the user that the function considers this input address to be a duplicate address, and indicates the two DAPSs that could be used to specify this address unambiguously.  For example, 239-02 Hillside Avenue is considered a duplicate address by all of the address-processing functions, so all of them would reject the input 239-02 HILLSIDE AVENUE and would return a GRC of ‘75’ and the Message:  

      DUPLICATE ADDRESS-USE HILLSIDE AVENUE BELLEROSE OR HILLSIDE AVENUE DOUGLASTON   

* <u>If the user specifies the input address using one of the DAPSs instead of the conventional street name, it is accepted</u>. For example, 239-02 HILLSIDE AVENUE BELLEROSE is accepted by all of the address-processing functions, as is 239-02 HILLSIDE AVENUE DOUGLASTON.  These functions return output information that is specific to the blockface (Functions 1/1E) or the tax lot and building (Function 1A) pinpointed by the DAPS.  

* <u>If the user specifies the input address using the conventional street name and a valid ZIP code then it is accepted</u>. For example, 239-02 HILLSIDE AVENUE with ZIP code 11426 (in Bellerose) is accepted by all of the address-processing functions, as is 239-02 HILLSIDE AVENUE with ZIP code 11363 (in Douglaston).  These functions use the corresponding DAPS information for the output street name and street code.  These functions return output information that is specific to the blockface (Functions 1/1E, 1B) and/or the tax lot and building (Function 1A, 1B) pinpointed by the DAPS.  

To summarize, <u>for an address that the function being called considers to be a duplicate, the conventional street name, without a ZIP code, is rejected;  only a DAPS or a conventional street name, with a ZIP code, is accepted as an input street name for such addresses.</u>  

<u>Processing of a non-duplicate address on a street that has DAPSs.</u> Now suppose that a particular address-processing function considers a given input address to be a valid <u>non</u>-duplicate. If the street does not have DAPSs (i.e., if the street does not have any addresses that are considered to be duplicates by any of the address-processing functions), then the processing does not involve the duplicate address processing feature.  If the street does have DAPSs, then the address is processed as follows.  

* <u>If the address is specified using the conventional street name</u>, it is accepted.  For example,  239-20 Hillside Avenue is considered a non-duplicate address by all of the address-processing functions.  Therefore, they all accept 239-20 HILLSIDE AVENUE as input.  239-06 Hillside Avenue is considered a non-duplicate address by Function 1A (it is valid for one building only, which happens to be in Bellerose), but it is considered a duplicate address by Functions 1/1E.  Therefore, Function 1A accepts 239-06 HILLSIDE AVENUE as input, but Functions 1/1E reject this as a duplicate address for which DAPS input, or a ZIP code, is required.  

* <u>If the address is specified using DAPSs</u>, the processing depends on the function:  

    * Functions 1/1E reject the address.  For example, Functions 1/1E reject 239-20 HILLSIDE AVENUE BELLEROSE, as well as 239-20 HILLSIDE AVENUE DOUGLASTON.  Functions 1/1E treat DAPSs as valid only for addresses they consider to be duplicates, and reject DAPSs for addresses that these functions do not consider to be duplicates.  

    * Function 1A’s processing depends on whether Functions 1/1E consider the address to be a duplicate:  

        * If Functions 1/1E consider the address to be a non-duplicate, Function 1A rejects the address.  For example, Function 1A rejects the input 239-20 HILLSIDE AVENUE BELLEROSE, as well as 239-20 HILLSIDE AVENUE DOUGLASTON.  

        * If Functions 1/1E consider the address to be a duplicate, Function 1A accepts the address when it is specified using the DAPS corresponding to the neighborhood where the address is valid, and rejects the address when it is specified using the other DAPS.  For example, as mentioned above, 239-06 Hillside Avenue is valid only for a building in Bellerose.  Therefore, Function 1A accepts 239-06 HILLSIDE AVENUE BELLEROSE, but it rejects 239-06 HILLSIDE AVENUE DOUGLASTON.  Note that this contrasts with the behavior of Functions 1/1E, which reject both DAPSs when they consider an address to be a non-duplicate.  

We now summarize the duplicate address processing feature.  Functions 1 and 1E behave identically with respect to duplicate address processing:  they consider the same addresses to be duplicates, and they process all addresses in exactly the same way, both those they consider to be duplicates and those they do not.  However, Functions 1/1E differ from Function 1A in certain respects.  

* Functions 1/1E differ from Function 1A in which addresses they consider to be duplicates.  Almost all addresses that Function 1A considers to be duplicates are also considered duplicates by Functions 1/1E.  However, there are many addresses that Functions 1/1E consider to be duplicates that Function 1A does not.  

* If an address-processing function considers an input address to be a duplicate, the function rejects the conventional street name, and accepts DAPSs, or conventional street names with ZIP codes.  

* If an address-processing function considers an input address to be a valid non-duplicate, it accepts the conventional street name.  

* If an address-processing function considers an input address to be a valid non-duplicate, and the street is specified using a DAPS, the action taken depends on the function.  Functions 1/1E reject both DAPSs, regardless of whether Function 1A considers the address to be a duplicate.  Function 1A’s action depends on whether Functions 1/1E consider the address to be a duplicate.  If Functions 1/1E consider the address to be a non-duplicate, Function 1A rejects both DAPSs.  If Functions 1/1E consider the address to be a duplicate, Function 1A accepts the DAPS that corresponds to the location where the input address is a valid address of a building, and rejects the other DAPS.  

* As mentioned earlier, Function 1B is a combination of Function 1A Extended and Function 1E Extended.  Function 1B first performs Function 1A Extended processing of  the input address.    Function 1B then performs Function 1E Extended processing of the input  address (as it was modified by Function 1A Extended).  Separate error messages are issued by the Function 1A Extended and the Function 1E Extended processing.  Both messages are returned to the user.  

    * If Function 1A Extended accepts the input, e.g. 239-06 Hillside Avenue, but Function 1E Extended does not, then  the Function 1A portion of the Function 1B Work Area 2 will contain valid output, but the Function 1E Extended portion will show an error message rejecting the input (GRC 75) and no valid output will appear in the Function 1E Extended portion.

<br/>
