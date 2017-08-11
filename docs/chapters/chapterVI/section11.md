<h2>VI.11  Transitional Property Address Directory (TPAD) Building Identification Number (BIN) and status information for Functions 1A, 1B, BL and BN (COW Only)</h2>

(Note: For more information about the TPAD feature, including error processing, be sure to see [Appendix 17](/appendices/appendix17/).)

<b><u>The TPAD File:</u></b>  The TPAD (Transitional Property Address Directory) file, allows users to get some up‐to‐date property related information. Geosupport has four functions (1A, 1B, BL and BN) that access the Property Address Directory (PAD) file. The PAD file contains property level information and is updated on a quarterly<sup><a href="#section10.7" id="section10.7-7">7</a></sup> basis. In order for users to get more up‐to‐date information regarding the status of new building construction and/or demolition, the Department of City Planning (DCP) has created the TPAD file.

The TPAD file is updated <u>daily</u> with new information received from the Department of Buildings (DOB) regarding job filings for new buildings (NB).  DOB uses the BIN-On-Demand system to obtain a new BIN at the time that an applicant pre-files an application on an address not currently in Geosupport.  The newly assigned BINs are included in  the TPAD file.  In addition, changes in status of both NB and demolition (DM) jobs are updated <u>weekly</u>.


<b><u>Invoking the TPAD functionality:</u></b>  To invoke TPAD processing, Geosupport users set the TPAD request switch in Work Area 1.  When this switch is set to ‘Y’ for a 1A, 1B, BL or BN call, Geosupport will read the TPAD file along with the PAD file, thereby being able to return more up‐to‐date information to users.

The TPAD Switch is located in position 329 of the COW Work Area 1. If the switch is set to ‘N’ or blank, then no TPAD processing is performed.  If the TPAD Switch is set to “Y”, then the following TPAD information will be returned to the user for Functions 1A, 1B, BL, and BN:

<u>Work Area 2 Fixed Portion</u>
Status of DM Job for BIN of the Input Address
New BIN for NB Job for Input Address or BBL
Status of NB Job
Conflict Flag

<u>Work Area 2 Address List</u>
Status of Job for this BIN in the Address List

TPAD Status Values are as follows:

|**TPAD Status Value**    | **Associated Job Type** | **Description** |
|:------------- | :-------------| :------------- |
| space | n/a | No activity for this address|
| 0 | NB | New BIN issued (for DOB);  NB Job application not yet filed|
| 1 | NB | NB Job application filed and paid for|
| 2 | NB | NB Job signed off [temporary or final Certificate of Occupancy (T/CO or C/O) issued] |
| 3 | NB | New BIN issued (for HPD<sup><a href="#section10.8" id="section10.8-8">8</a></sup>); NB Job application not yet filed|
| 5 | DM | DM Job application filed and paid for|
| 6 | DM | DM Job signed off (building demolished)|


When the TPAD Switch is set ‘on’, Geosupport will always return a value in the TPAD Conflict Flag in Work Area 2.  On occasion, when there are conflicts between the data in the PAD and the TPAD record, the Conflict Flag in Work Area 2 will be set to a value greater than ‘1’.  The possible values of the Conflict Flag are described in the table below.  See [Appendix 17](/appendices/appendix17/) for a detailed description of the contents of the Geosupport Return Code, Reason Code, Reason Code Qualifier, and Error Message, when TPAD processing is requested.




| **TPAD Conflict Flag Value** | **Meaning (and associated TPAD Warning Message)** |
| :------------- | :------------- |
| 0 | TPAD data found, no conflicts with PAD data (no warning message returned) |
| 1 | PAD found, no TPAD data found (no warning message returned)|
| 2 | TPAD BBL used, no existing PAD BBL|
| 3 | TPAD BBL used, PAD pseudo‐address on different BBL than TPAD NB BIN|
| 4 | TPAD BBL used, existing PAD BIN of Input Address on different BBL than TPAD NB BIN|
| 5 | (Not implemented)|
| 6 | TPAD BBL used, existing PAD BIN of Input Address with DM‐5 on different BBL than TPAD NB BIN|
| 7 | TPAD BBL used, existing PAD BIN of Input Address with DM‐6 on different BBL than TPAD NB BIN|
| 8 | PAD BBL used, TPAD NB BIN with NB‐0 on different BBL than PAD BIN|
| 9 | PAD BBL used, TPAD NB BIN with NB‐1 on different BBL than PAD BIN|
| A | PAD BBL used, TPAD NB BIN with NB‐2 on different BBL than PAD BIN|
| B | PAD BBL used, TPAD NB BIN with NB‐3 on different BBL than PAD BIN|
| C | TPAD data found, TPAD address overlaps PAD address|
| D | Address Found in TPAD, not found in PAD|
| E | BIN found in TPAD, not found in PAD|


In mainframe GOAT (CICS), the TPAD information can be retrieved by entering a ‘Y’ in the ‘TPADData’ or ‘TPAD’ field on the 1A, 1B, BL and BN screens.

The mainframe GBAT control card for TPAD processing is TPADDATA, with values of ‘YES’ or ‘NO’.

<u>Interpreting the TPAD data</u>
Because of the transitional nature of the data that can be returned by requesting the TPAD data, interpreting the data can sometimes be confusing. This section will describe how the transitional information is returned and try to reduce some of this confusion. The user should note, however, some situations will be inherently confusing and will require additional Geosupport function calls to clarify the situation.


<b><u>Geosupport Processing when TPAD Information IS NOT requested:</u></b>

The **BIN of Input Address** field will contain the BIN of a building that existed at the time of the Geosupport release.

The relationship of the **BIN of Input Address field** to the input for Geosupport 1A, 1B, BL and BN calls is as follows:

* 1A and 1B: The content of the BIN of Input Address field will be the BIN associated with the input address (if any).

* BL: For most BBLs the content of the BIN of Input Address field will be the single BIN associated with the input BBL. For those BBLs that have multiple associated BINs, this will be one of the BINs. There is no way of determining which BIN it will be.

* BN: The content will always be the input BIN.

<b><u>Geosupport Processing when TPAD Information IS requested:</u></b>

The goal of the Transitional PAD Data (TPAD) enhancements is to supplement the above information with data maintained in the Transitional PAD file. To accomplish this, Geosupport first makes a regular 1A, 1B, BL, or BN call. It then reads the Transitional PAD file for additional information. Three new fields (not including the TPAD Request Switch and Conflict Flag) have been added to WA2 to reflect this TPAD information.  The new fields are:

1. The **TPAD BIN of Input Address Status** field will hold the status for the **BIN of Input Address** field.
2. The **TPAD New BIN** field will contain the BIN that has recently been issued for potential new construction.
3. The **TPAD New BIN Status** field will hold the status for the **TPAD New BIN** field.


| <b>TPAD Status For BIN of Input Address</b> | <b>Interpretation</b> |
| :------------- | :------------- |
| Space | Building exists, there is no demolition pending |
| 0 | This status will not be used here |
| 1 | This status will not be used here |
| 2 | Building previously did not exist, but new building issued Certificate of Occupancy (C/O) after last PAD release |
| 5 | Building exists; a DM permit has been paid for |
| 6 | Building previously existed; DM was signed off after last PAD release |


<b>TPAD Status for New BIN</b>

| **Value** | **Associated Job** | **Type Description** |
| :------------- | :------------- | :------------- |
| Blank | | No activity for this address |
| 0 |  NB | New BIN issued (for DOB); application not yet filed |
| 1 | NB | NB Job application filed and paid for |
| 2 | NB | NB Job signed off [temporary or final Certificate of Occupancy (T/CO or C/O) issued]|
| 3 | NB | New BIN issued (for HPD); application not yet filed |
| 5 | DM | DM Job application filed and paid for |
| 6 | DM | DM Job signed off (building demolished)|



<b><u>Address List TPAD Enhancements</u></b>

For regular 1A, 1B, BL, and BN calls, the Address List contains alternate addresses associated with the BBL for 1A, 1B, and BL calls and with the BIN for BN calls. Each entry represents an address range and the BIN (if any) associated with this address. For TPAD enhancements we have done two things. We added a TPAD status field for each address entry. And, we have changed the order of the display of Addresses in the list. We list the BIN of Input Address first, followed by New BINs, if any, followed by Demolitions, followed by the rest of the addresses in the PAD record. For Long Work Area 2 requests, we have added a new field for each BIN, the TPAD Status field. Only 2187 BINs will be displayed in the Long Work Area 2 for TPAD requests.


<b><u>Address List entries with BIN that existed at the time of the Geosupport Release</u></b>

| <b><u>TPAD Status For Existing BIN</u></b> | <b><u>Interpretation</u></b> |
| :------------- | :------------- |
| Space | Building exists, there is no demolition pending |
| 0 | This status is not used here |
| 1 | This status is  not used here |
| 2 | This status is  not used here |
| 5 | Building exists; a DM permit has been paid for|
| 6 | Building previously existed; DM was signed off after last PAD release |


<b><u>Address List entries with TPAD New BIN contain a newly assigned BIN for the input address.</u></b>

| <b><u>TPAD Status For New BIN</u></b> | Interpretation |
| :------------- | :------------- |
| Space | This status will not be used here |
| 0 | A New BIN has been assigned to the address, but its purpose is unknown |
| 1 | A New BIN has been assigned and a New Building Job has been paid for at DOB|
| 2 | A New BIN has been assigned and the building has been given a T/CO or C/O by DOB|
| 5 | This status is not used here |
| 6 | This status is not used here |


The field names of the various TPAD‐related fields in COW Work Area 1 and Work Area 2 are available in [Appendix 13](/appendices/appendix13/).

<p>_________________________</p>
<a href="#section10.7-7"><sup><span id="section10.7">7</span></sup></a> As of Release 17A, those users who are on the DoITT mainframe typically will have PAD data that is updated weekly via the UPAD (Update PAD) file.  Other users, e.g. Desktop users, will have PAD data that is updated quarterly.  If desired, those users can make arrangements for more frequent updates.  
<a href="#section10.7-8"><sup><span id="section10.8">8</span></sup></a> HPD - Department of Housing Preservation and Development
