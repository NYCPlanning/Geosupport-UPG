<h2>IV.4 Resynchronization of Street Codes Stored in User Files</h2>  

When designing an application in which street codes, either B5SCs or Bl0SCs, are stored in an application file, the user must consider the important issue of resynchronizing those street codes with respect to new Geosupport releases.  This issue arises because it is sometimes necessary for the GSS staff to change the B5SC value (and therefore also the Bl0SC value) that is assigned to a street name.  This would be necessary if they determine that two street names that currently have different B5SC values (signifying that they are names of two different streets) are in reality aliases for the same street and therefore must be made to have the same B5SC value.  Conversely, the GSS staff might determine that two names that currently have the same B5SC value are actually names of two different streets, and therefore must be made to have different B5SC values.  Both of these types of problems can be rectified only if the B5SC value, and therefore the B10SC value, assigned to one or more street names is changed.  

Whenever a new Geosupport release is implemented that includes any changes to street codes assigned to street names, it is essential for users to make the corresponding changes to all occurrences of those street codes stored in application files.  This street code ‘resynchronization’ should be timed to be as simultaneous as possible with the implementation of the new Geosupport release.  User failure to resynchronize the street codes stored in an application file for each new Geosupport release could have serious negative consequences for the application.  Geographic searches in the application file in which the street code is used as part of the retrieval key might fail to retrieve some application records or might retrieve inappropriate ones.  Matching of records within an application file or between files by geographic location could fail, or could result in an erroneous match.  Also, the display functions D, DG and DN could return inappropriate street names for some street code values.  

Prior to the implementation of each new Geosupport release, a Street Name/Street Code Change Bulletin is sent to known Geosupport users<a href="#section04-3" id="section04-3-3"><sup>3</sup></a> listing the street code changes being made in the new release.  Also, as part of each release, a Geosupport file called the Street Code Change File (SCCF) is created and made accessible to users.  If an application file contains B10SCs, the user can utilize the SCCF to develop an automated batch resynchronization procedure.  Of course, when the stored B10SCs are updated, that also updates the B5SCs that comprise the first six bytes of the B10SCs.  (If for some reason there is a separate B5SC field in the application file in addition to a B10SC field, the B5SC field must be overlaid with the new value using the first six bytes of the new B10SC value.)  Resynchronizing stored B10SCs using the SCCF is the optimal resynchronization method. <u>Users are strongly urged, when designing new applications in which street codes are to be stored in application files, to design those files so they contain B10SCs, either in addition to or instead of street names, and to write a batch street code resynchronization program that uses the SCCF</u>.  

In existing applications in which B10SCs are not currently stored in the application file, we recommend that the file be enhanced to contain B10SCs, enabling a resynchronization procedure that uses the SCCF to be developed.  If the file currently contains street names, B10SCs can be inserted into it easily using Function 1N (discussed in [Chapter III.2](../../chapterIII/section02/)).  If only B5SCs are currently stored in the file, not street names, a more difficult one-time effort would be required to insert B10SCs into the file;  the methodology for doing this would be similar to the resynchronization procedure using B5SCs described below.  For application files that do not currently contain B10SCs and cannot be enhanced to contain them, the SCCF cannot be used to resynchronize the B5SCs, and other resynchronization methods must be used.  

The various methods for resynchronization are discussed below.<u>It is the user’s responsibility to develop a street code resynchronization procedure for each application file in which street codes are stored, and to run that procedure as soon as possible after each new Geosupport release is placed into production</u>.  

## <span id="chapterIV.4.1"><u>Resynchronization procedure using B5SCs</u></span>

When only B5SCs are stored in the application file, not the original input street names nor B10SCs, it is not possible to develop a fully automated procedure to resynchronize those B5SCs.  Instead, records in the application file that are affected by street code changes (as listed in the Street Name/Street Code Change Bulletin) must be found and individually examined and updated.  This is because of the inherent ambiguity of a B5SC value, which can be associated with more than one street name. Specifically, it is possible that two or more street names that had the same B5SC value prior to the new Geosupport release no longer have the same value in the new release.  When this occurs, the user cannot resynchronize the old B5SC value mechanically, but must determine, for each occurrence of the old B5SC value in the application file, which street name that occurrence represents in order to determine what the new B5SC value should be for that occurrence.  In order to make that determination, the user would have to individually research each record containing such a B5SC value, using any information that could help to pinpoint the location and thus to determine whether the B5SC value should be changed and what the new value should be.  Such information as an address, cross streets, a ZIP code, a community district or other district identifier, or tax block and tax lot identifiers could be helpful for this purpose.  Because this procedure is not automatic, it is the least desirable method.  

## <span id="chapterIV.4.2"><u>Resynchronization procedure using street names</u></span>

If the application file contains the original input street names in addition to B5SCs, then the user can develop a fully automated batch procedure for resynchronizing the B5SCs, albeit a less than optimal one, as follows.  The user can write a batch program that calls Function 1N to obtain, for each original input street name, the B5SC value currently (in the new Geosupport release) assigned to that name.  The program would process every record in the application file, automatically replacing the B5SC value already stored in each record with the current B5SC value obtained from Function 1N.  The program would have to provide for handling any Function 1N rejects, that is, street names that are no longer valid in the new Geosupport release.  

## <span id="chapterIV.4.3"><u>Resynchronization procedure using B10SCs</u></span>

Using stored street names to resynchronize B5SCs is preferable to using just the B5SCs themselves, because the former method can be automated while the latter cannot.  Nevertheless, the former method is highly inefficient, because it necessitates processing every record in the application file, even though in each Geosupport release only a tiny portion (if any) of the city’s street names have street code assignment changes.  

Storing B10SCs in the application file, and using the SCCF to resynchronize them, is the optimal approach to street code resynchronization.  The ambiguity intrinsic to B5SCs does not exist for B10SCs.  Since every B10SC value is assigned to a single street name only, stored B10SCs can be resynchronized by automatically replacing every occurrence of each changed B10SC value with the proper new value, with no research required to determine the latter.  

GSS creates a new release of the SCCF as part of each new Geosupport release.  The following DD statement gives users batch access to the SCCF:  

  //ANYDDNM  DD  DSN=A030.STREET.SCCF,DISP=SHR  

The SCCF is a sequential file with 80-byte records.  The SCCF has a single header record containing file identification information, followed by a set of data records.  The layouts of the header and data records are as follows:  

<p class = "section_header underlineMe center">Street Code Change File (SCCF) Record Layouts</p>  


<p class = "section_header underlineMe center"> SCCF Header Record  </p>  

|<u>Field</u>   | <u>Size</u>  | <u>Positions</u>  | <u>Comments</u> |  
|:------  | -----:  |-----:   |:-----  |  
|Header constant  | 42  | 1 - 42  | **Literal constant:**  ‘GEOSUPPORT SYSTEM FOREGROUND HEADER RECORD’ |  
|DDNAME of File   | 8  | 43 - 50  | **Literal constant:**  ‘SCCF ’ |
|Geosupport Release Identifier  | 4  | 51 - 54  | e.g. ‘15B **‘ (4th byte is generally blank) ** |
|Date of File Creation  | 6  | 55 - 60  | yymmdd format|
|Filler  | 20  | 61 - 80  |  |  


 <div class="tableCenter">  

<p class="section_header underlineMe">SCCF Data Records </p>  

|<u>Field</u>   | <u>Size</u>  | <u>Positions</u>  |
|:------  | -----:  |-----:   |  
|Old B10SC  | 11  | 1 - 11  |     
|Filler   | 5  | 12 - 16  |  
|New B10SC  | 11  | 17 - 27  |  
|Filler  | 5  | 28 - 32  |  
|Borough Code  | 1  | 33  |  
|Filler  | 1  | 34  |
|Street Name  | 32  | 35 - 66  |  
|Filler  | 14  | 67 - 80  |  

</div>  
<br/>  
(The fields Borough Code and Street Name are in the SCCF records for informational purposes only and are not needed for synchronization.)  

In an application file containing stored B10SCs, the first six bytes of the B10SC field (or fields, if the geographic location represented in the record involves more than one street, such as records for intersections) constitute the B5SC field, which could be defined as part of a key for consistent geographic retrieval;  therefore, a separate B5SC field would not be needed for that purpose.  The full B10SC field could also itself be defined as a direct access key, for use by the resynchronization program.  

The resynchronization program would read the SCCF sequentially.  For each SCCF record, the program would read the application file directly using the old B10SC value in the SCCF record as the search key.  All occurrences of this B10SC value found in the application file would be replaced by the new B10SC value from the SCCF record.  (Note:  most application files contain multiple records for the same street.  Hence, if the application file is a VSAM file, in most applications, the B10SC field(s) must be defined as an alternate key(s), not as the primary key, since several records could have the same key values.  In addition, since the resynchronization program modifies a key value, the UPGRADE option should be specified in the DEFINE ALTERNATE INDEX component of the  IDCAMS control file.  Similar considerations might apply for other types of direct access files.)  

## <span id="chapterIV.4.4"><u>Summary of Street Code Resynchronization</u> </span>

The resynchronization of street codes stored in an application file is an important issue for application design.  If the application must retrieve records by geographic location, it is necessary to use B5SCs in the retrieval key in order to make the retrieval geographically consistent, and therefore B5SCs must be stored in the application file.  Since the street codes that are assigned to some street names can be changed in new Geosupport releases, these stored B5SCs (and/or stored B10SCs, if any) must be synchronized to reflect these changes.  However, as we have seen, the synchronization of B5SCs cannot be fully automated unless either the originally entered street names or the B10SCs corresponding to those names are stored in the record.  

Resynchronization using street names is inefficient, since every street name in the application file would have to be processed.  The best alternative to achieve resynchronization efficiency is to store B10SCs in the application file.  In that case, the first six bytes of the B10SC field, which is the B5SC, could be defined as part of a geographic retrieval key.  For resynchronization, the full B10SC could be used in conjunction with the Street Code Change File (SCCF).  The user could develop a highly efficient procedure in which only those application records containing B10SC values that are in SCCF records, i.e., that have been changed in the new Geosupport release, would be accessed and updated.  

In view of the above considerations, the following design guidelines are strongly recommended with respect to resynchronizing street codes stored in application files:  

• When an application is being designed in which there will be a file to which consistent street-related geographic access is required, then the file should be designed to contain B10SCs obtained from Geosupport.  

• Application programs that access the file geographically should be written to use the first six bytes of the B10SC field, which constitute the B5SC, in the geographic retrieval key.  In existing application files that contain B5SCs but not B10SCs, the B5SC field should be enhanced into a B10SC field.  The B5SC portion of the B10SC should continue to be used for geographic retrieval.  The entire B10SC field should be defined as a direct access key, to support efficient automated street code resynchronization.  

•	The user should develop a batch procedure to resynchronize the B10SCs stored in the file, using the SCCF.  An optimal procedure would access directly those records in the application file that contain B10SCs for which there are changes in the new Geosupport release (i.e., for which SCCF records exist).  The user should run this procedure routinely whenever a new Geosupport release is implemented.  


<p>____________________________<p>

<a href="#section04-3-3"><sup id="section04-3">3</sup></a> To be added to this list, please send a request to GSS_Feedback.nyc.gov
