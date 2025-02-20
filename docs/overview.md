##  <div class="pdfPageBreakBefore">Overview of the <i>User Programming Guide</i></div>  

This document, the _Geosupport System User Programming Guide_ (UPG), contains the detailed technical information necessary for users to design and develop their own application programs that access Geosupport, as well as to use GBAT.  (The use of GOAT and the AIMZ transaction requires no programming skills and they are not documented herein.)  The UPG serves as a comprehensive set of technical specifications for the Geosupport System, and can be incorporated into procurement documents issued by city agencies soliciting consulting services for application design and development.

The contents of the UPG are as follows

* [Chapter I](../chapters/chapterI/chapterI/) is a general overview of the system, its purposes, features, means of access and the broad outlines of its architecture.  
* [Chapter II](../chapters/chapterII/chapterII/) is an introduction to the Geosupport API, describing in general terms its components and the user programming required to utilize it.  ([Chapter VIII](../chapters/chapterVIII/chapterVIII/) discusses the usage of the API in greater detail.)  
* [Chapter III](../chapters/chapterIII/chapterIII/) covers street name processing and in particular describes important user-controllable features of Geosupport’s street name standardizing routine.  
* [Chapter IV](../chapters/chapterIV/chapterIV/) discusses Geosupport’s system of numeric street codes, a feature that is relevant principally for applications that must retrieve data from user files by geographic location.

* [Chapters V](../chapters/chapterV/chapterV/) through [VII](;;/chapters/chapterVII/chapterVII/) discuss in detail the types of geographic locations that Geosupport can process and the functions that process them:  
    * [Chapter V](../chapters/chapterV/chapterV/) discusses address and non-addressable place name processing and Functions 1, 1A, 1B, 1E, and AP.  
    * [Chapter VI](../chapters/chapterVI/chapterVI/) discusses tax lot and building processing and Functions 1A &1B (aspects not covered in [Chapter V](../chapters/chapterV/chapterV/)), BL and BN.  
    * [Chapter VII](../chapters/chapterVII/chapterVII/) discusses street configuration processing and Functions 2, 3, 3C and 3S.

* [Chapter VIII](../chapters/chapterVIII/chapterVIII/) describes in detail the application program coding and JCL required to use the  Geosupport API  
* [Chapter IX](../chapters/chapterIX/chapterIX/) discusses GBAT, Geosupport’s standalone batch utility program.  
* [Appendix 1](../appendices/appendix01/) contains summary reference information for each Geosupport function, including a brief description of the function and reference to relevant sections of the UPG.  
* [Appendix 2](../appendices/appendix02/) contains layouts of the Geosupport API Mainframe-Specific Work Areas (MSWs).  Note: MSWs are no longer supported.  
* [Appendix 3](../appendices/appendix03/) is a data item dictionary, containing descriptions of the formats and contents of all of the data items that appear in the work area.  
* [Appendix 4](../appendices/appendix04/) is a comprehensive table of Geosupport Return Codes, Reason Codes and Messages.  
* [Appendix 5](../appendices/appendix05/) contains listings of the MSW Geosupport COPY files for all of the programming languages supported by the Geosupport COPY feature.  (This important feature is discussed in [Chapter VIII](../chapters/chapterVIII/chapterVIII/).) Note: MSWs are no longer supported.
* [Appendix 6](../appendices/appendix06/) describes the procedures that users should follow to report Geosupport System problems and to provide feedback to GSS of rejected input data that the user is unable to resolve.  
* [Appendix 7](../appendices/appendix07/) is a list of the data centers where Geosupport is installed.  
* [Appendix 8](../appendices/appendix08/) contains sample user programs written in various programming languages together with sample JCL.  
* [Appendix 9](../appendices/appendix09/) contains reference tables for setting up GBAT jobs.  
* [Appendix 10](../appendices/appendix10/) contains sample GBAT jobs.  
* [Appendix 11](../appendices/appendix11/) contains a set of guidelines for user application design.  
* [Appendix 12](../appendices/appendix12/) contains a description of Character-Only Work Areas (COWs) and how to use them.  
* [Appendix 13](../appendices/appendix13/) contains layouts of the Character-Only Work Areas (COWs).  
* [Appendix 14](../appendices/appendix14/) contains listings of the COW Geosupport COPY files for all of the programming languages supported by the Geosupport COPY feature. (This important feature is discussed in [Chapter VIII](../chapters/chapterVIII/chapterVIII/).)  
* [Appendix 15](../appendices/appendix15/) describes where the 2010 Census Geography was incorporated into the Version 11.0 Geosupport System.  The appendix includes tables describing the offsets of the data and the field names in the COPYLIBs  
* [Appendix 16](../appendices/appendix16/) contains a description of the history and significance of the Neighborhood Tabulation Areas.  
* [Appendix 17](../appendices/appendix17/) contains additional TPAD information, including error processing and error message handling.  
* The Glossary contains definitions of special terms and acronyms  



Appendices 1 through 5, together with Appendices 13 and 14 (for COW Work Areas), collectively can serve as a quick reference guide for experienced Geosupport users.

Note: Since the geography of New York City is constantly growing and changing, any examples mentioned in this document may, occasionally, function differently from the way they are described.  The examples will, in any case, illustrate the concept being discussed.




## **Summary of Changes and New Features**
The updates listed below indicate changes and new features since the last release of the _User Programming Guide_ (written for Software Version 19.4).  Some of the changes and features are described elsewhere in the UPG; other changes are mentioned only in this summary to make users aware of items such as general improvements or items displayed by GOAT.

Note: Entries in this summary which begin with **‘(COW Only)’** describe changes and features which are available only for applications that use the Character-Only Work Areas (COWs).  Character-Only Work Areas are described in [Appendix 12](../appendices/appendix12/).  To take advantage of the full functionality of Geosupport, applications need to be written using the Character-Only Work Areas (COWs).

**Character-Only Work Areas (COWs)**, as the name implies, contain character fields only.  The original Geosupport work areas were called the **Mainframe-Specific Work Areas (MSWs)**.  

**Reminder: As of January 1, 2020, MSWs are no longer supported.  See the updated MSW announcement below in the Version 20.1 section.**


**Reminder: As of Version 19.3, Geosupport enhancements are supported only in a non-mainframe environment (NMF).   See the mainframe announcement below in the Version 20.1 section.**  As a result of this announcement, entries in this summary often begin with **'(NMF Only)'**. By definition, all non-mainframe environment applications are COW applications.  (MSW applications cannot run in a non-mainframe environment.)


Typically, MSWs contain some fields that are in a format which is unique to IBM mainframes.  COWs were introduced as an essential part of a long-term effort to port the Geosupport System to other platforms, e.g. the Desktop, the Internet (web version of GOAT) , GeoX, .net, and Linux.  For a detailed description of the COWs, see [Appendix 12](../appendices/appendix12/).

Work Area 1 and Work Area 2 are often referred to, in this document, as **WA1** and **WA2**, respectively.

<p>--------------------</p>

## Version 25.1

**CD Eligibility Field Values Updated**

Release 25A includes updated “CD Eligibility” values for census tracts. The values of “Eligible” and 
“Ineligible” are assigned to tracts that meet the U.S. Department of Housing and Urban Development 
(HUD) criteria for whether the addresses and blocks contained therein are eligible to receive Community 
Development Block Grants (CDBGs) from the federal government. For a tract to be eligible, 51% of the 
residents must be low/moderate income persons (less than 80% of the area Median Family Income), and 
50% of its total floor area must be comprised of residential usage. 

Updated income data was provided by HUD and residential usage was calculated by the Department of 
City Planning (DCP) using PLUTO data (24v4). 

There are no programming considerations for retrieving the new CD Eligibility values.


## Version 23.2

**2020 PUMA Field Added** 

The 2020 PUMA field contains the Public Use Microdata Area Code associated with the input location. The 2020 PUMA is related to 2020 Census tract and NTA applications.  The existing field called PUMA Code is based on the 2010 Census geography.  

Available in Functions 1EX, 1B, 3X, 3CX, 3E, 3CE 

**Function 1X, 1EX, 1B (please note - new fields will not be in regular Function 1 Work Area)** 

| Function   | Field Name     | Start | Length |
|:-----------|:---------------|------:|:------:|
| F1EX	     |Puma_2020	      |  783  |  5     |
| F1B	     |Puma_2020	      |  783  |  5     |


**Function 3X, 3E (please note - new fields will not be in regular Function 3 Work Area)** 

| Function   | Field Name      | Start | Length |
|:-----------|:----------------|------:|:------:|
| F3X	     |Left_Puma_2020   |  851  |  5     |
|    	     |Right_Puma_2020  |  856  |  5     |
| F3CX	     |Puma_2020        |  586  |  5     |
| F3E	     |Left_Puma_2020   |  358  |  5     |
|    	     |Right_Puma_2020  |  363  |  5     |
| F3CE	     |Puma_2020        |  358  |  5     |  
  
  
**Available across all Geosupport platforms:**  

- Geosupport Desktop Edition (Windows 32-bit and 64-bit; LINUX) 
- GeoX.Net classes
- Geoservice
- NYCgbat
- New Desktop GBAT (beta)
- GOAT (web version only)


## Version 22.3

**Sanborn Volume and Page Information** 

Please be informed that the Sanborn Volume and Page information returned in functions 1A, 2, BL, and BN of the Geosupport System has been deprecated, as no source data is available to maintain a reliable level of accuracy or currency. For now, the field will continue to exist and be populated with data; however, users are hereby advised of the obsolete nature of this data, and the plan to eliminate this field in a future release. Users that rely on retrieving this information from Geosupport should plan accordingly.

**DSNY Commercial Waste Zones** 

As part of the Department of Sanitation’s (DSNY) comprehensive plan for reforming the private carting industry, it has established Commercial Waste Zones (CWZ). These 20 zones were designed to limit the number of carters that serve the commercial establishments of a geographic area of the city, thereby reducing noise pollution, reducing greenhouse gas emissions, and increasing public safety.
Starting with this release (22.3/22C) Geoupport will be returning the CWZ designations via Function 1E and Function 1E Extended calls. The new field san_commercial_waste_zone will contain 4 characters consisting of the borough initials MN, BX, BK, QN, and SI, a one-digit number, and an optional suffix letter (currently “A” or “B”).  

Available in Functions F1E and F1EX 

| Function   | Field Name                | Start | Length | Notes                                                                              |  
|:-----------|:--------------------------|------:|:------:|------------------------------------------|  
| F1E, F1EX  |san_commercial_waste_zone  |  263  |   4    | in pac.h this is after the hurricane_zone|  

**Available across all Geosupport platforms:**  

- Geosupport Desktop Edition (Windows 32-bit and 64-bit; LINUX) 
- GeoX.Net classes
- Geoservice
- NYCgbat
- New Desktop GBAT (beta)
- GOAT (web version only)


## Version 21.4

**Condo Base BBL** 

Starting with release 21D, Geosupport includes a new field called the Condo Base BBL field that has been added to Work Area 2 for functions 1A, 1AX, BL, BLX, BN, and BNX. This field will only be populated for condos without a Condo Billing BBL; otherwise, the field will contain spaces. 
For Condos, Geosupport returns the Condo Billing BBL as the BBL to use for the condo complex. Early in the condo conversion process DOF often has not provided a Condo Billing BBL so this field will contain all zeroes. In these cases, Geosupport will return all zeroes in the BBL. Geosupport also returns high and low condo unit BBLs but many users do not want to rely on these as a substitute because it can lead to official notices being sent to a condo unit and not the managers of the condo complex. Therefore, we are adding this new Condo Base BBL field to provide users with a BBL that may be used on a temporary basis. 

Available in Functions F1A, F1AX, FBL, FBLX, FBN, FBNX. In pac.h this is after the single byte filler08 that follows the condo_hi_bbl field. 

| Function   | Field Name      | Start | Length | Notes                                                                              |  
|:-----------|:----------------|------:|:------:|------------------------------------------------------------------------------------|  
| F1A, F1AX  |condo_base_bbl   |  136  |  10    | in pac.h this is after the single byte filler08 that follows the condo_hi_bbl field|  

**Available across all Geosupport platforms:**  

- Geosupport Desktop Edition (Windows 32-bit and 64-bit; LINUX) 
- GeoX.Net classes
- Geoservice
- NYCgbat
- New Desktop GBAT (beta)
- GOAT (web version only)


## Version 21.3

**2020 Census Geography** 

This Geosupport Release, v21.3/21C, will include new fields for the 2020 Census geography. The information below is to aid users in planning to implement these changes. Several new fields specifically related to the new 2020 Census geography have been added. An existing field has been renamed to avoid confusion about which Census the values are derived from. The former NTA field based on the 2010 Census geography has been renamed to NTA_2010. 

While these new fields appear in the mainframe version of Geosupport, we will be providing limited support to users who don’t make efforts to port their applications to other platforms. Users are encouraged to use Geosupport Desktop Edition, Geosupport Linux Edition, GeoX classes for .Net, GeoX classes for Java, or Geoservice instead of the mainframe version of Geosupport. 

The new Census 2020 fields will be returned in Geosupport Functions as follows: 

**Function 1X, 1EX, 1B (please note - new fields will not be in regular Function 1 Work Area)**  
  
| Field Name             | Length  | Note                     |
|:-----------------------|:-------:|:-------------------------|
|Census_Tract_2020       | 6 bytes |                          |
|Census_Block_2020       | 4 bytes |                          |
|Census_Block_Suffix_2020| 1 byte  | this field will be blank |
|NTA_2020                | 6 bytes |                          |
|CDTA_2020               | 4 bytes | the CDTA did not exist for the 2010 Census |  

Existing NTA field will be renamed NTA_2010 

**Function 2 (only the Census Tract for 2020 will be in the regular Function 2 Work Area)**  

| Field Name             | Length  | Note                     |
|:-----------------------|:-------:|:-------------------------|
|Census_Tract_2020       | 6 bytes |                          |

**Function 2W (other than Census Tract 2020, the new fields will not be in regular Function 2 Work Area)**  

| Field Name             | Length  | Note                                       |
|:-----------------------|:-------:|:-------------------------------------------|
|Census_Block_2020       | 4 bytes |                                            |
|Census_Block_Suffix_2020| 1 byte  |                                            |
|NTA_2020                | 6 bytes |                                            |
|CDTA_2020               | 4 bytes | the CDTA did not exist for the 2010 Census |  

**Function 3X (please note - new fields will not be in regular Function 3 Work Area)**  

| Field Name                    | Length  | Note                                       |
|:------------------------------|:-------:|:-------------------------------------------|
|Left_Census_Tract_2020         | 6 bytes |                                            |
|Left_Census_Block_2020         | 4 bytes |                                            | 
|Left_Census_Block_Suffix_2020  | 1 byte  |                                            |
|Left_NTA_2020                  | 6 bytes | (2 char boro + 4 digits)                   | 
|Left_CDTA_2020                 | 4 bytes | (2 char boro + 2 digits)                   |
|Right_Census_Tract_2020        | 6 bytes |                                            |
|Right_Census_Block_2020        | 4 bytes |                                            |  
|Right_Census_Block_Suffix_2020 | 1 byte  |                                            |
|Right_NTA_2020                 |6 bytes  | (2 char boro + 4 digits)                   |
|Right_CDTA_2020                | 4 bytes | (2 char boro + 2 digits) [the CDTA did not exist for the 2010 Census] |  

Existing NTA field in Segside will be renamed NTA_2010 

**Function 3E (please note - new fields will not be in regular Function 3 Work Area)**  

SegsideB7sc structure with left and right array entries  

| Field Name                    | Length  | Note                                         |
|:------------------------------|:-------:|:---------------------------------------------|
|Census_Tract_2020              | 6 bytes |                                              |
|Census_Block_2020              | 4 bytes |                                              |
|Census_Block_Suffix_2020       | 1 byte  |                                              |
|NTA_2020                       | 6 bytes |                                              |
|CDTA_2020                      | 4 bytes | [the CDTA did not exist for the 2010 Census] |   

Existing NTA field will be renamed NTA_2010  

**Available across all Geosupport platforms:**  

- Geosupport Desktop Edition (Windows 32-bit and 64-bit; LINUX) 
- GeoX.Net classes
- Geoservice
- NYCgbat
- New Desktop GBAT (beta)
- GOAT (web version only)  


## Version 20.1

<u>**IMPORTANT MAINFRAME ANNOUNCEMENT (Reminder)**</u>  

<b>As of Geosupport Version 19.3, enhancements to Geosupport (such as new fields and new functions) are being made available and supported <u>only</u> for applications running in a non-mainframe environment (NMF)</b>, e.g. Desktop Edition, GeoX, .net, and Linux.  Enhancements to Geosupport will continue to be implemented for non-mainframe environments.  

It is important for users to convert any existing applications to a COW format in a non-mainframe environment.

<u>**IMPORTANT UPDATED MSW ANNOUNCEMENT**</u>  
<u>**MSW IS NO LONGER SUPPORTED**</u>

**As of January 1, 2020, Mainframe-Specific Work Areas (MSWs) are no longer supported.**  Character-Only Work Areas (COWs) will continue to be supported.  As mentioned above, COWs will be enhanced only in a non-mainframe environment.  It is essential for users to convert any existing MSW applications to the COW format in a non-mainframe environment.

User-written application programs and GBAT utilities that use the MSW format may continue to run but no technical support will be available.  **If an MSW issue arises, users can no longer call DCP for resolution.**

To assist users in the conversion to COW format:  
   *  [Appendix 12](../appendices/appendix12/) contains information needed to create COW applications.    
   *  [Appendix 13](../appendices/appendix13/) contains the COW Work Area Layouts.  
   *  [Appendix 14](../appendices/appendix14/) contains the COW copy files.   

Any further issues may be directed via email to: Geosupport_DL@planning.nyc.gov



<!-- * **(COW Only) System Enhancements Implemented**  
<br>
    * **The numeric words ‘ONE’ through ‘NINE’ are now accepted as a house number in the Geosupport house number input field.**   -->

<u>**SYSTEM ENHANCEMENTS IMPLEMENTED IN VERSION 20.1**</u>

**Note: All enhancements (if any) are available and supported in COW non-mainframe environments (NMF) only.**

* **(Web GOAT) Fine tuning and bug fixes were implemented**  

    * <b>GOAT will now accept an ampersand in the street name input for all functions.</b>
<br>
<br>

* **(Geosupport System) Fine tuning and bug fixes were implemented**  

    * <b>For functions 1, 1E and 1B, the count of cross streets in the list of the High-End Cross Streets (a.k.a ‘To Cross Streets’) is now accurate even for Addressable Place Names and Non-Addressable Place Names (NAPs).  (All COW Function 1, 1E and 1B related calls)</b>

<br>
<br>








<p>--------------------</p>


<!-- why does code look bold?.  It is not bold on screen or print -->
