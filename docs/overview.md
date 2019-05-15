##  <div class="pdfPageBreakBefore">Overview of the <i>User Programming Guide</i></div>  

This document, the _Geosupport System User Programming Guide_ (UPG), contains the detailed technical information necessary for users to design and develop their own application programs that access Geosupport, as well as to use GBAT.  (The use of GOAT and the AIMZ transaction requires no programming skills and they are not documented herein.)  The UPG serves as a comprehensive set of technical specifications for the Geosupport System, and can be incorporated into procurement documents issued by city agencies soliciting consulting services for application design and development.

The contents of the UPG are as follows

* [Chapter I](/chapters/chapterI/chapterI/) is a general overview of the system, its purposes, features, means of access and the broad outlines of its architecture.  
* [Chapter II](/chapters/chapterII/chapterII/) is an introduction to the Geosupport API, describing in general terms its components and the user programming required to utilize it.  ([Chapter VIII](/chapters/chapterVIII/chapterVIII/) discusses the usage of the API in greater detail.)  
* [Chapter III](/chapters/chapterIII/chapterIII/) covers street name processing and in particular describes important user-controllable features of Geosupport’s street name standardizing routine.  
* [Chapter IV](/chapters/chapterIV/chapterIV/) discusses Geosupport’s system of numeric street codes, a feature that is relevant principally for applications that must retrieve data from user files by geographic location.

* [Chapters V](/chapters/chapterV/chapterV/) through [VII](/chapters/chapterVII/chapterVII/) discuss in detail the types of geographic locations that Geosupport can process and the functions that process them:  
    * [Chapter V](/chapters/chapterV/chapterV/) discusses address and non-addressable place name processing and Functions 1, 1A, 1B, 1E, and AP.  
    * [Chapter VI](/chapters/chapterVI/chapterVI/) discusses tax lot and building processing and Functions 1A &1B (aspects not covered in [Chapter V](/chapters/chapterV/chapterV/)), BL and BN.  
    * [Chapter VII](/chapters/chapterVII/chapterVII/) discusses street configuration processing and Functions 2, 3, 3C and 3S.

* [Chapter VIII](/chapters/chapterVIII/chapterVIII/) describes in detail the application program coding and JCL required to use the  Geosupport API  
* [Chapter IX](/chapters/chapterIX/chapterIX/) discusses GBAT, Geosupport’s standalone batch utility program.  
* [Appendix 1](/appendices/appendix01/) contains summary reference information for each Geosupport function, including a brief description of the function and reference to relevant sections of the UPG.  
* [Appendix 2](/appendices/appendix02/) contains layouts of the Geosupport API Mainframe-Specific Work Areas (MSWs).  
* [Appendix 3](/appendices/appendix03/) is a data item dictionary, containing descriptions of the formats and contents of all of the data items that appear in the work area.  
* [Appendix 4](/appendices/appendix04/) is a comprehensive table of Geosupport Return Codes, Reason Codes and Messages.  
* [Appendix 5](/appendices/appendix05/) contains listings of the MSW Geosupport COPY files for all of the programming languages supported by the Geosupport COPY feature.  (This important feature is discussed in [Chapter VIII](/chapters/chapterVIII/chapterVIII/).)  
* [Appendix 6](/appendices/appendix06/) describes the procedures that users should follow to report Geosupport System problems and to provide feedback to GSS of rejected input data that the user is unable to resolve.  
* [Appendix 7](/appendices/appendix07/) is a list of the data centers where Geosupport is installed.  
* [Appendix 8](/appendices/appendix08/) contains sample user programs written in various programming languages together with sample JCL.  
* [Appendix 9](/appendices/appendix09/) contains reference tables for setting up GBAT jobs.  
* [Appendix 10](/appendices/appendix10/) contains sample GBAT jobs.  
* [Appendix 11](/appendices/appendix11/) contains a set of guidelines for user application design.  
* [Appendix 12](/appendices/appendix12/) contains a description of Character-Only Work Areas (COWs) and how to use them.  
* [Appendix 13](/appendices/appendix13/) contains layouts of the Character-Only Work Areas (COWs).  
* [Appendix 14](/appendices/appendix14/) contains listings of the COW Geosupport COPY files for all of the programming languages supported by the Geosupport COPY feature. (This important feature is discussed in [Chapter VIII](/chapters/chapterVIII/chapterVIII/).)  
* [Appendix 15](/appendices/appendix15/) describes where the 2010 Census Geography was incorporated into the Version 11.0 Geosupport System.  The appendix includes tables describing the offsets of the data and the field names in the COPYLIBs  
* [Appendix 16](/appendices/appendix16/) contains a description of the history and significance of the Neighborhood Tabulation Areas.  
* [Appendix 17](/appendices/appendix17/) contains additional TPAD information, including error processing and error message handling.  
* The Glossary contains definitions of special terms and acronyms  



Appendices 1 through 5, together with Appendices 13 and 14 (for COW Work Areas), collectively can serve as a quick reference guide for experienced Geosupport users.

Note: Since the geography of New York City is constantly growing and changing, any examples mentioned in this document may, occasionally, function differently from the way they are described.  The examples will, in any case, illustrate the concept being discussed.




## **Summary of Changes and New Features**
The updates listed below indicate changes and new features since the last release of the _User Programming Guide_ (written for Software Version 19.1).  Some of the changes and features are described elsewhere in the UPG; other changes are mentioned only in this summary to make users aware of items such as general improvements or items displayed by GOAT.

Note: Entries in this summary which begin with **‘(COW Only)’** describe changes and features which are available only for applications that use the Character-Only Work Areas (COWs).  Character-Only Work Areas are described in [Appendix 12](/appendices/appendix12/).  To take advantage of the full functionality of Geosupport, applications need to be written using the Character-Only Work Areas (COWs).

**Character-Only Work Areas (COWs)**, as the name implies, contain character fields only.  The Geosupport work areas that have long been in use are called the **Mainframe-Specific Work Areas (MSWs)**.  

**Note: As of January 1, 2020, MSWs will no longer be supported.  See announcement below in the Version 19.2 section.**

Typically, MSWs contain some fields that are in a format which is unique to IBM mainframes.  COWs were introduced as an essential part of a long-term effort to port the Geosupport System to other platforms, e.g. the Desktop, the Internet (web version of GOAT) and as a Microsoft Office VSTO add-in (GeoExcel).  For a detailed description of the COWs, see [Appendix 12](/appendices/appendix12/).

Work Area 1 and Work Area 2 are often referred to, in this document, as **WA1** and **WA2**, respectively.


<p>--------------------</p>

## Version 19.2

<u>**IMPORTANT DATA ANNOUNCEMENT**</u>  

<b>RPAD Self-Check Codes (RPAD SCCs) are being phased out.</b>  As of Geosupport Release 19C (on or about August 2019), the RPAD SCC fields will all contain blank values.  In Release 19B the RPAD SCC for some BBLs may also be affected.  More detail can be found in the RPAD SCC entry in [Appendix 3](/appendices/appendix03/).

<u>**IMPORTANT MAINFRAME-SPECIFIC WORK AREA (MSW) ANNOUNCEMENT**</u>  

To provide our users with the best care and most current product, **as of January 1, 2020, Mainframe-Specific Work Areas (MSWs) will no longer be supported.**  Character-Only Work Areas (COWs) will continue to be supported and enhanced.  It is therefore very important that users convert their MSW applications to the COW format.

User-written application programs and GBAT utilities that use the MSW format will continue to run at this time.  Note, however, that no technical support will be available for any issues that arise after January 1, 2020.

To assist users in the conversion process:  
   *  a. [Appendix 12](/appendices/appendix12/) contains information needed to create COW applications.    
   *  b. [Appendix 13](/appendices/appendix13/) contains the COW Work Area Layouts.  
   *  c. [Appendix 14](/appendices/appendix14/) contains the COW copy files.   

Any further issues may be directed via email to: GSS_Software@planning.nyc.gov



<!-- * **(COW Only) System Enhancements Implemented**  
<br>
    * **The numeric words ‘ONE’ through ‘NINE’ are now accepted as a house number in the Geosupport house number input field.**   -->

<u>**SYSTEM ENHANCEMENTS IMPLEMENTED IN VERSION 19.2**</u>

* **(COW Only) Two new fields are returned by Geosupport**  

    * <b>Police Sector</b>  
  (Functions 1/1E Extended, 1B, 2, 2W,3 Extended, 3C Extended)

    * <b>Police Service Area</b>  
  (Functions 1/1E Extended, 1B)  
    The new fields are described in  [Appendix 3](/appendices/appendix03/).  
<br>

* **(COW and MSW)  CD Eligibility Values have been updated.**

    Release 19B includes updated “CD Eligibility” values for census tracts.  The values of “Eligible” and “Ineligible” are assigned to tracts that meet the U.S. Department of Housing and Urban Development (HUD) criteria for whether the addresses and blocks contained therein are eligible to receive Community Development Block Grants (CDBGs) from the federal government.  For a tract to be eligible, 51.0% of the residents must be low/moderate income persons (less than 80% of the area Median Family Income), and 50% of its total floor area must be comprised of residential usage.

    Updated income data was provided by HUD and residential usage was calculated by the Department of City Planning (DCP) using PLUTO data (18v2.1).  

    There are no programming considerations for retrieving the new CD Eligibility values.


<!-- why does code look bold?.  It is not bold on screen or print -->

<br>


<p>--------------------</p>


<!-- why does code look bold?.  It is not bold on screen or print -->
