<h2>VIII.4 The Geosupport Copy Files</h2>
This section describes an optional feature of Geosupport, its COPY files.  The Geosupport COPY files contain source code layouts of the Geosupport API work areas in the COBOL, Assembler, PL/1, C and NATURAL programming languages.  The use of the Geosupport COPY files can greatly facilitate user programming and is strongly recommended for all applications.  The Geosupport COPY files are contained in the Geosupport COPY libraries, which are described below.

In this section, basic concepts of COPY files are explained, and the organization of the Geosupport COPY libraries is described.  In [Chapter VIII.5](../section05), the specific source code statements that users must code in their programs to utilize the Geosupport COPY files are described.  [Chapter VIII.6](../section06) describes the JCL required to compile a program that utilizes the Geosupport COPY files.

## <span id="chapterVIII.4.1"><center><u>Overview of COPY Files in General</u></center></span>

Many programming languages, including COBOL, Assembler, PL/1, C and NATURAL, have a facility for referring, within the source code of a program, to external files (generically referred to as ‘COPY files’ in this document) containing source code to be inserted into the program at compile time. (C ‘COPY files’ are usually called header files; NATURAL ‘COPY files’ are called Local Data Areas (LDAs).)  Each programming language has a declarative command (‘COPY’ in COBOL and Assembler, ‘%INCLUDE’ in PL/1, ‘#include’ in C, ‘LOCAL USING’ in NATURAL) for referring to such external COPY files.  During program compilation, when the compiler encounters such a command, it dynamically retrieves the source code stored in the named COPY file and processes that source code as if it were an integral part of the program source code.  The source code retrieved at compile time from the COPY file serves as input to the compiler only;  it is not inserted permanently into the user’s program source code file.  Only the declarative statement that refers to the COPY file is permanently present in the program source code.  <u>Note</u>:  declarative statements referencing external source code COPY files are not to be confused with external program calls.  Declarative statements are directives to the compiler, and are processed at source code compilation time;  program calls are executable statements, performed at application execution time.

For COBOL, Assembler, PL/1 and C, COPY files must reside as members of a Partitioned Data Set (PDS) called a COPY library, which must be made accessible to the compiler by coding a SYSLIB DD statement in the JCL for the compile step.  In addition, for COBOL and PL/1, an appropriate compiler option must be specified.  For NATURAL, COPY files are called Local Data Areas (LDAs) and reside in the system library in each ADABAS database.  The Database Administrator (DBA) must modify each NATURAL application’s security profile to make the LDAs accessible to the application.

An ideal situation in which to use COPY files is when numerous programs in an application must all describe the same data structure(s).  Using this technique, a source code description of each data structure is stored centrally in a COPY library.  All programs requiring one or more of the data structures need only contain declarative statement(s) referring to the appropriate member file(s) in the COPY library.  This approach insures that all the programs define the given storage layout in exactly the same way, using the same data item names, data types and data lengths.  This facilitates application-wide maintenance and debugging.  Changes to a data structure need only be made centrally in the COPY file, rather than separately and redundantly in each program.

Of course, the source code in a program that references a COPY file must be written so that it is compatible with the source code in that COPY file.  In particular, for fields that are defined in the COPY file and referred to in the program, the program must use the same data names and must assume the same data types and lengths as does the COPY file.

## <span id="chapterVIII.4.1"><center><u>The Geosupport COPY Libraries</u></center></span>

There are two Geosupport COPY libraries that collectively contain COBOL, Assembler, PL/1 and  C source code COPY files for all of the Geosupport API work area layouts.  Geosupport also has a set of NATURAL LDAs for the work area layouts.  The use of these facilities can greatly facilitate user application programming.  Among the potential productivity benefits are the following:

* Elimination of the need for application programmers to key into their programs lengthy source code descriptions of the Geosupport work area layouts line by line.

* Standardization of Geosupport data item names among the programs in an application, facilitating troubleshooting and the reassignment of programming staff to programs written by others.

* Standardization of the descriptions (data types and lengths) of Geosupport data items in an application, fostering accuracy and compatibility among programs and files.

* Simplification of the updating of programs to reflect changes to Geosupport work area layouts.  Each time a program that references the Geosupport COPY libraries is recompiled, the latest versions of the work area layouts are automatically retrieved.

The Geosupport COPY libraries supporting COBOL, Assembler, PL/1 and C applications are two catalogued Partitioned Data Sets (PDSs) named A030.GEO.COPYLIB2 and A030.GEO.COPYLIB.

For NATURAL applications at DoITT, <sup>the</sup> DoITT Database Administration staff is responsible for installing the Geosupport LDAs in the system library (CSCLIB) for each ADABAS database and for making the LDAs accessible to each application that needs such access by updating the application’s profile.  <u>It is the user’s responsibility to communicate with the appropriate DoITT staff to request such installation and profile updating.</u>

The Geosupport COPY libraries contain a complete set of COPY files for the Geosupport API work areas in COBOL, Assembler, PL/1, C and NATURAL.  Each COPY file contains source code descriptions of one or more of the work areas in one of the supported programming languages, as explained below.  The Geosupport COPY libraries support both batch and CICS applications.

The MSW Work Area 2s of Functions 1, and 1E, (regular WA2), 2, 3 and 3C all have the same length, 200 bytes.  For each of the supported programming languages except C, the layouts of these work areas are stored together in a single COPY file, coded as redefinitions of the same memory area.  (In the COBOL files, this is done using REDEFINES.  In the Assembler files, it is done using an ORG to reset the Location Counter.  In the PL/1 files, it is done using BASED.  In the NATURAL LDAs, it is done using REDEFINE.)  Except for C, each of the remaining work area layouts has its own COPY file.  For C, there is a single COPY file (called a ‘header file’ in C terminology) containing the layouts of all of the work areas, including WA1.

The COW Work Area 2s are handled in a similar fashion, though they may not all have the same length.

Tables VIII-1 and VIII-2, below, list all of the MSW and COW COPY files respectively for COBOL, Assembler, PL/1, NATURAL and C. The tables indicate the work areas for which each file contains layouts, the lengths of those work areas in bytes, and the name of each file by programming language. [Appendix 5](../../../appendices/appendix05/) and [Appendix 14](../../../appendices/appendix14/) contain printouts of the MSW and COW COPY files respectively.


**Important Note: As of January 1, 2020, Mainframe-Specific Work Areas (MSWs) will no longer be supported.  It is therefore essential that users convert their MSW applications to th COW format.**  See [Appendix 12](../../../appendices/appendix12/)

<center><b>Table VIII-1: MSW COPY Files for COBOL, Assembler, PL/1, C and NATURAL</b></center>

<table class="pdfSmallTable">
<tr>
  <th></th>
  <th></th>
  <th></th>
  <th colspan="5"><center>- - - - - - - - - - COPY File Name - - - - - - - - </center></th>
</tr>
<tr>

  <th><u>MSW<br>WORK<br>AREA</u></th>
  <th><u>FUNCTION(S)</u></th>
  <th><u>LENGTH<br>(bytes)</u></th>
  <th><u>COBOL</u></th>
  <th><u>ASSEMBLER</u></th>
  <th><u>PL/1</u></th>
  <th><u>C</u></th>
  <th><u>NATURAL</u></th>

</tr>

<tr>
  <td>WA1</td>
  <td>All</td>
  <td>884</td>
  <td>W1COB</td>
  <td>W1BAL</td>
  <td>W1PL1</td>
  <td>WAC</td>
  <td>GEOLW1</td>
</tr>

<tr>
  <td>WA2</td>
  <td>1 (regular WA2), 1E (regular WA2), 2, 3 (regular WA2), 3C</td>
  <td>200</td>
  <td>W2COB</td>
  <td>W2BAL</td>
  <td>W2PL1</td>
  <td>WAC</td>
  <td>GEOLW2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>1 (long WA2), 1E (long WA2), 3 (long WA2)</td>
  <td>300</td>
  <td>W2COBL</td>
  <td>W2BALL</td>
  <td>W2PL1L</td>
  <td>WAC</td>
  <td>GEOLW2L</td>
</tr>

<tr>
  <td>WA2</td>
  <td>1A&BL (regular WA2), BN (\*)</td>
  <td>939</td>
  <td>W2COB1A</td>
  <td>W2BAL1A</td>
  <td>W2PL11A</td>
  <td>WAC</td>
  <td>GEOLW2LA</td>
</tr>

 <tr>
  <td>WA2</td>
  <td>1A&BL (long WA2)  (\**)</td>
  <td>17,683</td>
  <td>W2COB1AL</td>
  <td>W2BAL1AL</td>
  <td>W2PL11AL</td>
  <td>WAC</td>
  <td>GEOLW2LAL</td>
</tr>

<tr>
  <td>WA2</td>
  <td>3S</td>
  <td>4,224</td>
  <td>W2COB3S</td>
  <td>W2BAL3S</td>
  <td>W2PL13S</td>
  <td>WAC</td>
  <td>GEOLW23S</td>
</tr>

</table>  


The COW COPY Files Table (Table VIII-2) appears on the following page.


<table>
<tr>
  <th></th>
  <th></th>
  <th></th>
  <th colspan="5"><center>- - - - - - - - - - COPY File Name - - - - - - - - </center></th>
</tr>
<tr>

  <th><u>MSW<br>WORK<br>AREA</u></th>
  <th><u>FUNCTION(S)</u></th>
  <th><u>LENGTH<br>(bytes)</u></th>
  <th><u>COBOL</u></th>
  <th><u>ASSEMBLER</u></th>
  <th><u>PL/1</u></th>
  <th><u>C</u></th>
  <th><u>NATURAL</u></th>

</tr>

<tr>
  <td>WA1</td>
  <td>All</td>
  <td>1,200</td>
  <td>P1COB</td>
  <td>P1BAL</td>
  <td>P1PL1</td>
  <td>PAC</td>
  <td>GEOLP1</td>
</tr>

<tr>
  <td>WA2</td>
  <td>1 & 1E (Regular WA2), 3C (Regular WA2)</td>
  <td>300</td>
  <td>P2COB</td>
  <td>P2BAL</td>
  <td>P2PL1</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>2</td>
  <td>200</td>
  <td>P2COB</td>
  <td>P2BALL</td>
  <td>P2PL1L</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>2W</td>
  <td>4000</td>
  <td>P2COB</td>
  <td>P2BAL</td>
  <td>P2PL1</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

 <tr>
  <td>WA2</td>
  <td>3 (Regular WA2)</td>
  <td>450</td>
  <td>P2COB</td>
  <td>P2BAL</td>
  <td>P2PL1</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>3 (WA2 with AUXSEG option)</td>
  <td>950</td>
  <td>P2COB</td>
  <td>P2BAL</td>
  <td>P2PL1</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>3C (WA2 with AUXSEG option)</td>
  <td>800</td>
  <td>P2COB</td>
  <td>P2BAL</td>
  <td>P2PL1</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>3C (WA2 with AUXSEG option)</td>
  <td>800</td>
  <td>P2COB</td>
  <td>P2BAL</td>
  <td>P2PL1</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>3 (Extended WA2)</td>
  <td>1,000</td>
  <td>P2COB</td>
  <td>P2BAL</td>
  <td>P2PL1</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>3C (Extended WA2)</td>
  <td>850</td>
  <td>P2COB</td>
  <td>P2BAL</td>
  <td>P2PL1</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>3 (Extended WA2 w/AUXSEG)</td>
  <td>1,500</td>
  <td>P2COB</td>
  <td>P2BAL</td>
  <td>P2PL1</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>3C (Extended WA2 w/AUXSEG)</td>
  <td>1,350</td>
  <td>P2COB</td>
  <td>P2BAL</td>
  <td>P2PL1</td>
  <td>PAC</td>
  <td>GEOLP2</td>
</tr>

<tr>
  <td>WA2</td>
  <td>1A & BL (Regular WA2), BN (\*)</td>
  <td>1,363</td>
  <td>P2COB1A</td>
  <td>P2BAL1A</td>
  <td>P2PL11A</td>
  <td>PAC</td>
  <td>GEOLP21A</td>
</tr>

<tr>
  <td>WA2</td>
  <td>1A & BL (Long WA2)  (\**) 1A & BL (TPAD Long WA2) (\***) </td>
  <td>17,750</td>
  <td>P2COB1AL</td>
  <td>P2BAL1A</td>
  <td>P2PL11AL</td>
  <td>PAC</td>
  <td>GEOLP2AL</td>
</tr>

<tr>
  <td>WA2</td>
  <td>1A & BL & BN (Extended WA2) (****) </td>
  <td>2,800</td>
  <td>P2COB1AL</td>
  <td>P2BAL1A</td>
  <td>P2PL11AL</td>
  <td>PAC</td>
  <td>GEOLP2AL</td>
</tr>

<tr>
  <td>WA2</td>
  <td>1 & 1E (Extended WA2)</td>
  <td>1,500</td>
  <td>P2COB1AL</td>
  <td>P2BAL1A</td>
  <td>P2PL11AL</td>
  <td>PAC</td>
  <td>GEOLP2AL</td>
</tr>

<tr>
  <td>WA2</td>
  <td>1B</td>
  <td>4,300</td>
  <td>P2COB1AL</td>
  <td>P2BAL1A</td>
  <td>P2PL11AL</td>
  <td>PAC</td>
  <td>GEOLP2AL</td>
</tr>

<tr>
  <td>WA2</td>
  <td>3S</td>
  <td>19,274</td>
  <td>P2COB3S</td>
  <td>P2BAL3S</td>
  <td>P2PL13S</td>
  <td>PAC</td>
  <td>GEOLP23S</td>
</tr>

<tr>
  <td>WA2</td>
  <td>AP</td>
  <td>1,363</td>
  <td>P2COBAP</td>
  <td>P2BALAP</td>
  <td>P2PL1AP</td>
  <td>PAC</td>
  <td>GEOL2AP</td>
</tr>

<tr>
  <td>WA2</td>
  <td>AP (Extended WA2)</td>
  <td>2,800</td>
  <td>P2COBAP</td>
  <td>P2BALAP</td>
  <td>P2PL1AP</td>
  <td>PAC</td>
  <td>GEOL2APX</td>
</tr>

</table>

(\*)       Functions 1A, BL and BN share a single regular WA2 layout.
(\**)     Functions 1A and BL share a single long WA2 layout.  (Function BN has no long WA2 option.).
(\***)   Functions 1A and BL share a single TPAD long WA2 layout.  (Function BN has no TPAD long WA2 option.).
(\****) Functions 1A, BL and BN share a single extended WA2 layout.
