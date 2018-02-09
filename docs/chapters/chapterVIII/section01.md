<h2>VIII.1 Introduction</h2>

The Geosupport System’s Application Programming Interface (API), the mechanism by which a user-written batch or CICS application program interfaces with the Geosupport System, was described in broad terms in Chapter II.  The present chapter describes in detail, for the programming languages most widely used to develop applications on city mainframes, the statements that the user must code in an application program to access Geosupport via the API.  The languages covered are COBOL, Assembler (i.e., any dialect of IBM mainframe assembler language), PL/1, C (supported on the mainframe at the Department of Information Technology and Communications (DoITT) by the IBM/C compiler) and NATURAL (a proprietary programming language used with the ADABAS database management system).  An important optional user programming aid, the Geosupport COPY facility, is also discussed.  The Geosupport-related JCL that the user must code to compile, link and (for batch applications) execute an application program is also described.

<b><u>Notes for non-DoITT mainframe users:</b></u>

* All JCL documented in this chapter is valid for the DoITT mainframe.  <u>Variations from this JCL are possible at other data centers where Geosupport is installed</u>, for a variety of reasons.  For example, the DSNs of the Geosupport files may differ from those at DoITT to conform to local file naming standards.  Variations from DoITT may also be caused by software environment differences, such as the version of the operating system that is running.  In addition, certain software products mentioned in this chapter, such as IBM/C or ADABAS, that are installed at DoITT may be unavailable at other data centers.  Non-DoITT users should refer any Geosupport-related JCL questions or problems to their data center’s Geosupport System Administrator (the system programmer at the data center who is responsible for installing new Geosupport releases).

* Non-DoITT users should also be aware that certain Geosupport files and functions that are available at DoITT may not currently be installed at their data center.  Specifically, a foreground file named PAD, which is accessed only by Functions 1A, BL and BN, is relatively large and therefore is not installed at some data centers at which there are no current applications that require Functions 1A, BL or BN.  <u>At those data centers, Functions 1A, BL and BN are not available for use</u>.  If future applications at those data centers require Functions 1A, BL and/or BN, the PAD file can then be installed, thereby activating those functions.