<h2>VIII.2 Review of the Geosupport API</h2>

The Geosupport API consists of the following elements:

* <u>Driver</u>:  A Geosupport program called the driver that serves as an intermediary between the user’s application program and the Geosupport foreground software.  The driver exists in the form of a load module, which the user must link-edit with the application program.  (The link-editing is performed automatically for NATURAL programs.)

* <u>Work Areas</u>:  One or two standard-layout work areas that are used to pass data back and forth between the application program and Geosupport.  The user must include the Geosupport work area(s) in the application program.

* <u>Programming Statements</u>:  Programming statements that the user must code in the application program to utilize the driver and work area(s) to interface with Geosupport.

The work areas and required programming statements are identical in the batch and CICS environments, except that there is a different driver for each environment.  The driver for batch applications is named GBI.  The driver for CICS applications is named GOAIDRV.  The driver serves two purposes:

* It passes execution control from the user's application program to the Geosupport foreground software, which is external to the application program load module.

* It passes the memory address(es) of the work area(s), which are located within the application program, to the Geosupport foreground software, enabling Geosupport to access the work areas.  

The user program must include the required Geosupport work area(s) in its working storage (COBOL, Assembler or C), automatic storage (PL/1) or U size buffer (NATURAL).  When the application program issues a call to the driver, either one or two work areas (more precisely, their memory addresses) are passed as parameters of the call.  The length and layout of Work Area 1 (WA1) are fixed.  The length and layout of Work Area 2 (WA2) are determined by the function and, for functions that have either the long WA2 option or the Mode Switch of ‘X’ – Extended (discussed in [Chapter II.5](../chapterII/section05)), by which option is specified.  The distinction between one-work-area and two-work-area calls is discussed in [Chapter II.4](../chapterII/section04).

For the convenience of users whose application programs are written in COBOL, Assembler, PL/1, C or NATURAL, Geosupport COPY files are maintained.  They contain source code descriptions of all of the work area layouts in each programming language.  The Geosupport COPY files are discussed in detail in [Chapter VIII.4](../section04).  The use of the Geosupport COPY facility is optional but strongly recommended.

In batch applications, the user JCL for the execute step must include JOBLIB or STEPLIB DD statements for the load libraries that contain the Geosupport foreground software.  [Chapter VIII.8](../section08) describes the JCL required for batch execution, and [Appendix 8](../../../appendices/appendix08/) contains examples.

## <span id="chapterVIII.2.1"><u>Important note for CICS applications written in NATURAL:</u></span>

In order for Geosupport’s CICS driver to be able to pass control to the Geosupport foreground software properly, the driver must determine whether the user program is written in NATURAL.  (This is necessary because NATURAL programs make non-standard program calls in the CICS environment.  In a standard call, the address of the parameter list is passed in Register 1.  Programs written in COBOL, Assembler, PL/1 and C generate standard calls.  However, CICS NATURAL programs use Register 1 for a different purpose.  Therefore, for NATURAL programs only, the Geosupport CICS driver uses the Transaction Work Area instead of Register 1 to pass the addresses of the work areas to Geosupport.)  

The Geosupport CICS driver determines whether the calling program is a NATURAL program by examining an internal Geosupport table that contains the transaction-IDs of all applications written in NATURAL.  If the transaction-ID of a CICS NATURAL program is not in that table, the transaction will terminate abnormally when attempting to call Geosupport.  At DoITT, the updating of the Geosupport NATURAL transaction-ID table is the responsibility of DoITT staff.  Therefore, <u>DoITT users developing new CICS applications written in NATURAL must make a request to the appropriate DoITT staff to enter the new transaction-IDs into the Geosupport table</u>.   NATURAL CICS users running at other computer centers should contact the Citywide Geo Application Services group at Geosupport_DL@planning.nyc.gov.
