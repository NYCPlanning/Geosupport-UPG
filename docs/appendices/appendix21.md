<h2 class="pdfAppendix"><center>APPENDIX 21: Geosupport Desktop Edition: Quick Start Instructions</center></h2>

<br>  
<p> *Minimum system requirements:*  PC running Windows 95 or higher 800 megabytes of available harddisk space CD-Rom drive</p>  

<h3> Step 1.	Start Install Program </h3>  

  * Download the Geosupport Desktop Edition Application and Extract the application from the compressed(zippped) folder.   

  * Run the setup file from the downloaded application, double click setup> Run  

  * If Install Program does not start up, click Start > Run > downloads\gde_17b\setup > OK.  

<h3> Step 2. Respond to Install Options </h3>  

  * The only question you need to answer is where you want the Geosupport Desktop Edition directory to reside. The default is *‘harddrive:\Program Files\’*. You may change this if you want. Also your computer’s default program directory might not be ‘Program Files’. This will result in the Geosupport Desktop Editon directory residing in a directory other than *‘harddrive:\Program Files\’*.  

  * After the Install Program has completed, re-start your computer. You are now ready to use Geosupport Desktop Edition.  

<h3> Step 3. Verify that Installation was Successful </h3>  

  * Using Windows Explorer, navigate to the directory where Geosupport Desktop Editon programs were installed (*(‘harddrive:\Program Files\Geosupport Desktop Edition\Bin’* is the default).  

  * Double click on ‘Goat.exe’.  

  * Select ‘1’ from the toolbar. Enter ‘22’ in the House Number box. Enter ‘Reade Street’ in the Street Name box. Click on the Manhattan radio button for the Borough. Press the OK button. If Geosupport Desktop Edition was successfully installed, then you should see data displayed in the window.  

*<h5> Congratulations on Successfully Installing Geosupport Desktop Edition </h5>*  

User documentation can be found in C:\Program Files\Geosupport Desktop Editon\Doc  

  * If you are interested in more information on how to use Goat, go to Chapter III: GOAT in the <u>Geosupport Desktop Edition User Programming Guide</u>.  

  * If you are interested in geocoding an existing PC database, go to Chapter IV: GBAT in the <u>Geosupport Desktop Edition User Programming Guide</u>.  

  * If you are interested in writing your own programs see [Chapter II](../../chapters/chapterII/chapterII): Geosupport Desktop Edition API in the <u>Geosupport Desktop Edition User Programming Guide</u>.  

View C:\Program Files\Geosupport Desktop Edition\readme.txt for additional items.  


##  <span id="appendix21.1">Geosupport System General Overview</span>

<h2> FOREWORD  </h2>

The Geosupport System is a data processing system originally designed to run on IBM mainframes to support many of the geographic processing needs common to New York City agencies. Geosupport was developed and is maintained and enhanced by the staff of the Geographic Systems  (GSS) of the Department of City Planning’s Information Technology Division. Geosupport is highly customized for New York City’s geography and is widely recognized to be far superior to any other existing system for processing New York City geographic locations. Currently, Geosupport is used as a component of computer applications in more than thirty New York City agencies. The Geosupport Desktop Edition<sup>™</sup> can be readily incorporated into users’ Windows<sup>®</sup> based applications that require the processing of geographic data.  

This General Overview serves as an introduction to the Geosupport System. It is intended for a general audience, and describes the goals, objectives and capabilities of the system. Other GSS documents contain information for technical managers, software designers, programmers and analysts, particularly the Geosupport System User Programming Guide (UPG) and the Geosupport Desktop Edition<sup>™</sup> UPG Supplement.  

Geosupport is continually enhanced to provide users with new features. When a new system release is implemented, technical bulletins are distributed to users explaining changes and new features.  

To receive further information about Geosupport Desktop Edition, please email: <a href="mailto:GSS_Feedback@planning.nyc.gov">GSS_Feedback@planning.nyc.gov</a>


## <span id="appendix21.2">I Goals And Objectives of The Geosupport System </span>

The computer applications that automate many municipal operations, such as collecting taxes, installing and repairing public infrastructure, processing citizen complaints, issuing permits, and providing social services, have similar geographic processing needs and require similar geographic information in order to be performed effectively and efficiently. Many non-governmental organizations also use geographic information for analysis and planning. Some of these common geographic processing functions are as follows:  

  * Identify and validate (confirm the existence of) various types of geographic locations, such as street names, addresses, inters and property identifiers (tax block and tax lot numbers).  

  * Recognize variations when there is more than one way to describe the same location, such as street name spelling variants, alternative street names, three-way inters, multiple addresses for a property.  

  * Obtain geographic information associated with the input location. Such information includes geographic areas, such as zip codes, community districts, census tracts, school districts, police precincts, city council districts, or application-specific districts, such as contractor areas or inspection zones. Other geographic information that applications may need include alternative addresses for a property, the cross streets adjacent to an address, the approximate distance between inters, and many others.  

  * Retrieve data from a user file by geographic location. Such retrieval should be <u>consistent</u>, that is, when a location can be specified in more than one way, retrieval should succeed no matter how the location is specified.  

The Geosupport System is designed to support user computer applications by providing the above types of geographic processing functionality.  

Usage of the Geosupport System has three main benefits:  
<ol>
<li><u>Geosupport centralizes geographic processing</u> among user operations, thus eliminating duplication of effort. Without a centralized system, users would have to develop and maintain their own geographic data files and geographic processing software. Centralization enables many users to benefit from the resources developed by the Department of City Planning’s highly-trained staff of programmers with expertise in the specialized field of geographic processing software, and researchers with expertise in map and aerial photography interpretation.</li>  

<li>Geosupport <u>fosters geographic data compatibility</u> among users’ computer applications, resulting in improved efficiency and effectiveness. For example, Geosupport can enhance revenue collection by enabling a city agency that has issued fines to obtain the property identifiers (tax block and tax lot numbers) when an address of the property is known. The user can then retrieve the property owner’s mailing address from a file maintained by the Department of Finance. Similarly, activities such as inspections, information gathering and enforcement can be coordinated or consolidated more easily when files are geographically compatible.</li>  

<li>Geosupport <u>improves the operational efficiency</u> of user applications. This is done by the following means:  
<ol type="a"><li>Geosupport provides <u>immediate (online) verification</u> of location data (addresses, inters, etc) which lessens or eliminates tedious research to verify the data. This feature is useful for trapping errors when data entry staff record information provided by the general public or field staff.</li>  

<li>Geosupport allows users to  <u>specify an input location in different ways</u>. As a result, users do not have to be trained to record locations in a rigid format. For example, Geosupport recognizes that “6<sup>th</sup> Ave”, “Sixth Avenue” and “Avenue of the Americas” all refer to the same street in Manhattan. A different type of example is the three-way inter of Chambers Street, Hudson Street and West Broadway in Manhattan: Geosupport recognizes any pair of these streets as a valid input specification for this inter.</li>  

<li>Geosupport enables applications to  <u>retrieve data from user files consistently by location</u>. ‘Consistency’ in this context means that, for locations that can be specified in more than one way, retrieval succeeds even if the location is specified differently at inquiry time from the way that it was originally entered. Applications can use this feature to <u>identify and consolidate all of the transactions for a given location</u>. One of the most important ways in which Geosupport enables consistent geographic retrieval of user data is through its system of numeric street codes representing the city’s street names. Two different names or spellings of the same street are assigned the same five-digit street code. When designing an application, the user can exploit this design feature to achieve data retrieval from the user’s application files that is independent of street name spelling variations. It is important to note that, if street codes are stored in a user file, the user must update those street codes to synchronize with street code changes reflected in each new Geosupport release (see  IV-B).</li>

<li>Geosupport enables users to group <u>information by proximity</u>. For example, Geosupport can be used to geocode a list of potential customers to manageable geographic locations such as zip codes, enabling companies to efficiently allocate field sales staff. This reduces travel time, making service delivery more efficient.</li>  

<li>Geosupport allows users to <u>determine in which New York City administrative or political district a given location is contained</u>. This is useful when a user must determine which contractor, inspector, service center, etc., is responsible for servicing or processing a given location.</li>  

<li>Geosupport aids in <u>performance analysis</u> reviews performed by internal management. Statistics of activities and performance rates by district can be produced from individual cases. This can be done by using Geosupport to code each location to a community district or other area. This statistical information can be used, for example, to monitor and evaluate the performance work crews, to reallocate resources, or to plan for new field offices.</li>  

<li>Geosupport enables <u>graphic visualization</u> of geographically-related user data by facilitating computer mapping. While Geosupport does not itself produce maps, its geocoding functionality and, in particular, its provision of spatial (xy) coordinates can be used in conjunction with separate computer mapping software and City Planning’s LION street center line file or Tax Block or Lot files to enable data to be displayed cartographically.</li></ol></li>  
</ol>

## <span id="appendix21.3">II System requirements, Availability And Enhancements  </span>

The Geosupport System is easy to use, and is easily incorporated into a user’s own computer application. The way that this is accomplished is outlined in Chapter III and discussed in detail in the technical documentation. Users usually develop their own computer application using their own resources. User-written programs communicate directly with Geosupport via its Application Programming Interface (API), which is a simple, standardized and well-documented programming procedure. Geosupport performs the geographic processing <u>only</u>; all other processing is done by the user application, which has its own input and output files, screen formats and/or printed reports. A major advantage of this approach is that users have total control of their own applications, and develop them in their conventional data processing environment, using their normal programming language. This contrasts with many geographic processing packages which require users to develop their applications within the specialized environment of that package, often using a specialized, proprietary programming language.  

As an alternative to developing an application that accesses Geosupport via its API, users can run one of the Geosupport utility programs, GOAT or GBAT, which require no user programming. The API and the utility programs are further discussed in Chapter III.  

Geosupport Desktop Edition<sup>™</sup> is available to the general public through a licensing agreement. Geosupport can be installed on any Windows<sup>®</sup> based personal computer <sup>1</sup>.Geosupport Desktop Edition<sup>™</sup> users can write their applications, both online and batch, in any programming language that permits a standard Dynamic Link Library (DLL) call. Currently, Microsoft<sup>®</sup> Visual C+, Borland® C and Visual Basic for Applications (VBA) have been successfully tested.  




## <span id="appendix21.4">III Accessing Geosupport: The Application Programming Interface And Utility Programs  </span>

The Geosupport System is available in both batch and online environments. Within each of these environments, Geosupport may be accessed either through user-written programs or via Geosupport utility programs. The two methods of access are described below.  

  1.User-written programs communicate with Geosupport via its <u>Application Programming Interface</u> (API). Using the API, the user program supplies geographic locations to Geosupport for processing. Geosupport determines if a user location is valid, and if so, returns geographic information about the location to the user program. (For a partial list of data items provided, see [Appendix I](../appendix01/) When the user data are unrecognizable or invalid, Geosupport returns codes and messages to the user program that specify the nature of the problem. By virtue of the API mechanism, the user’s programming efforts can be concentrated on the specific needs of the application, such as screen design and database updating, and the geographic processing can be left to Geosupport.  

  The Geosupport API is easy for programmers to use. Geosupport technical documents describe how to program user applications to interact with Geosupport via the API.  

  2.Geosupport contains two general purpose <u>utility programs</u> that perform many common geographic processing functions. While not specifically tailored to the needs of any one user, these utility programs allow many users to use Geosupport while minimizing or eliminating their own programming efforts. The utility programs are called GOAT and GBAT and are described below. The API, GOAT and GBAT provide basically the same set of information. A partial list of the information that they provide is in [Appendix I](../appendix01/).  

  a. <u>GOAT</u>:  
        Geosupport’s online utility program is called the Geosupport Online Address Translator (GOAT). GOAT enables users to enter a geographic location on a computer screen, and if the location is valid, to immediately receive a display of a set of geographic information about that location. If the user’s location is rejected as invalid, an error message is displayed to indicate the specific reason for the rejection.  

  b. <u>GBAT</u>:  
        GBAT (Geosupport Batch Address Translator) is the Geosupport batch utility program. GBAT allows users to process large files containing geographic locations. It validates these locations and writes out an output file containing a set of geographic information for each valid input location.  

The Geosupport utility programs cannot, by themselves, satisfy every need of every application. For example, GOAT does not allow users to design their own screens or update their own files. Those types of functions can only be done by user-written programs accessing Geosupport via the API. Nevertheless, the Geosupport utility programs are powerful tools, particularly when used in conjunction with user-written programs.  



## <span id="appendix21.5">IV Geosupport Update Cycles And User Feedback  </span>

  1.** Updates Cycles **  

  The Geosupport System is updated continually. Updated information becomes accessible to users when new releases of Geosupport are released for user access several times a year. New Geosupport releases reflect changes in the city’s geography (new street names, new inters, new addresses, changes to various district boundaries, tax lot mergers and subdivisions, etc.), as well as correction of Geosupport data errors. Software enhancements and corrections are also implemented from time to time. Geosupport technical bulletins explaining new software features are distributed as needed.  

  2.** Resynchronizing User Files to Reflect New Geosupport Releases **  

  Applications are often designed so that items obtained from Geosupport are stored in user files. Some online applications use such items as ‘keys’ to retrieve data from the user’s own files by geographic location. (For example, as mentioned in Chapter I, five-digit street codes are often stored and used as retrieval keys in order to make geographic retrieval independent of street name spellings.) In designing applications that store Geosupport-provided data items in user files, the user must consider the issue of updating or “resynchronizing” those stored items to reflect data changes reflected in new Geosupport releases, particularly when the application is using those items as retrieval keys. In cases where such resynchronization is necessary, it is the user’s responsibility to set up a resynchronization procedure and to run it in conjunction with the deployment of each new Geosupport release.    

  3.** User Feedback **  

  The users of Geosupport are a crucial resource for providing feedback to GSS on changes required to the Geosupport geographic data and software. Although we cannot respond to individual user feedback, all reported problems are logged and appropriate action is taken. If in the course of reviewing user feedback it is determined that clarification is needed, users may be contacted directly. Feedback procedures are described below.  

  ** Geographic Feedback **

  Geosupport may reject a user-supplied geographic location as invalid. For example, Geosupport appropriately rejects the inter of Second Avenue and Third Avenue in Manhattan as a non-existent inter. Moreover, Geosupport geographic files may contain an error or may not be up to date, causing Geosupport to reject a valid location.  

  For rejected items that the user considers valid, a reject feedback procedure exists. The user can submit such data for review to GSS’s Data Management Unit by filling out and submitting a Geosupport System User Feedback Form (see [Appendix VI](../appendix06/)). Printouts, sketch maps or other material documenting the rejects should be attached to the form when available.  

  Based on its research of user feedback, the GSS staff updates or corrects Geosupport files as appropriate. The corrections are reflected in the Geosupport System in a future Geosupport release. Before submitting rejected data to GSS, users should screen their data for misspellings, data entry errors or other obvious mistakes.  

  The GSS Data Management Unit utilizes a variety of resources, including maps, aerial photographs, public utility address listings, site plans and administrative records to conduct its geographic research. GSS uses Geographic Information System (GIS) technology, which allows the GSS Data Management staff to display, update and generate key Geosupport geographic data using interactive computer mapping. (Note, however, that as accessed by users, Geosupport is a conventional computer application that does not provide the user with maps or other graphic output. Users who have their own computer mapping or GIS software can prepare their data for input to that software by using Geosupport’s geocoding capabilities.)  

  In addition to receiving user feedback, GSS receives information about changes in city geography from a variety of sources. The Department of City Planning has City Charter-mandated responsibility for mapping new streets and street closures. New names for existing streets are obtained from the City Council; new addresses from the Borough Presidents’ offices; tax block and tax lot changes from the Department of Finance; changes in election district boundaries from the Board of Elections; changes in Police Precinct boundaries from the Police Department, etc.  
