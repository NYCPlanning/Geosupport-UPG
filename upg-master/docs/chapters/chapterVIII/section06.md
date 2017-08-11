<h2>VIII.6 JCL for the Compile Step</h2>

COBOL, Assembler, PL/1 and C programs that do not reference Geosupport COPY files do not require any Geosupport-related JCL in the compile step.  When compiling a COBOL, Assembler, PL/1 or C program that references Geosupport COPY files, the Geosupport COPY libraries must be made accessible to the compiler, as described below.  NATURAL programs are compiled in the usual way, with no special user action required to access the Geosupport LDAs.  

The Geosupport COPY libraries that support COBOL, Assembler, PL/1 and C are two catalogued files which at DoITT have the DSNs A030.GEO.COPYLIB2 and A030.GEO.COPYLIB.  (At other installations, users should verify these DSNs with the data center’s Geosupport System Administrator.)  The COPY libraries must be concatenated under the DDname SYSLIB in the JCL for the compile step.  <u>Since the two libraries have some member names in common, it is essential to concatenate their DD statements in the proper order as shown below.</u>


Assuming that one of the standard IBM catalogued procedures for compiling is being used, the JCL for SYSLIB should be coded as follows:

<table class="borderlessTable" style="width:100%">
  <tr>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>COBOL:</td>
    <td>//COBOL.SYSLIB</td>
    <td>DD DSN=A030.GEO.COPYLIB2,DISP=SHR</td>
  </tr>

  <tr>
    <td></td>
    <td>//</td>
    <td>DD DSN=A030.GEO.COPYLIB,DISP=SHR</td>
  </tr>

  <tr>
  	<td>ASSEMBLER</td>
    <td>//ASM.SYSLIB</td>
    <td>DD DSN=A030.GEO.COPYLIB2,DISP=SHR</td>
  </tr>

  <tr>
  	<td></td>
    <td>//</td>
    <td>DD DSN=A030.GEO.COPYLIB,DISP=SHR</td>
  </tr>

  <tr>
  	<td></td>
    <td>//</td>
    <td>DD DSN=<\name of user macro library>,DISP=SHR</td>
  </tr>

  <tr>
  	<td></td>
    <td>//</td>
    <td>DD DSN=SYS1.MACLIB,DISP=SHR</td>
  </tr>

  <tr>
  	<td>PL/1:</td>
    <td>//PLI.SYSLIB</td>
    <td>DD DSN=A030.GEO.COPYLIB2,DISP=SHR</td>
  </tr>

  <tr>
  	<td></td>
    <td>//</td>
    <td>DD DSN=A030.GEO.COPYLIB,DISP=SHR</td>
  </tr>

  <tr>
  	<td>IBM/C:</td>
    <td>//COMPILE.SYSLIB</td>
    <td>DD</td>
  </tr>

  <tr>
  	<td></td>
    <td>//</td>
    <td>DD  DSN=A030.GEO.COPYLIB,DISP=SHR</td>
  </tr>

</table>

For Assembler applications, care must be taken to insure that the required Assembler macro libraries are concatenated to SYSLIB, as shown.

For C applications, note that the compiler requires access only to COPYLIB, not to COPYLIB2, and furthermore, care must be taken to insure that COPYLIB is <u>concatenated</u> to the IBM/C header file library, rather than <u>overriding</u> it.  Overriding is prevented by coding one DD statement with a blank operand field followed by the DD statement for the Geosupport COPY library, as shown.

For COBOL applications, in addition to providing the DD statements for SYSLIB, the appropriate compiler option, LIB, must also be in effect.  Since LIB is the default, it does not have to be explicitly specified.

For PL/1 applications being compiled by a compiler other than the IBM Enterprise PL/1 Compiler, in addition to providing the DD statements for SYSLIB, the appropriate compiler option, MACRO or INCLUDE, must also be in effect.  If %INCLUDE is the <u>only</u> kind of preprocessor statement in the program, then the INCLUDE option should be used instead of the MACRO option.  This will make compilation faster.  If other kinds of preprocessor statements are in the program in addition to the %INCLUDE statement(s), then the MACRO option <u>must</u> be used. For example:

<center>// EXEC IBMZC,PARM.PLI=’ MACRO’</center>
<center>or</center>
<center>// EXEC IBMZC,PARM.PLI=’ INCLUDE’</center>

In the IBM Enterprise PL/1 Compiler, the meaning of the INCLUDE compiler option has changed.  As a result, if %INCLUDE is the <u>only</u> kind of preprocessor statement in the program, then <u>no</u> compiler option reflecting that fact should be coded.   If other kinds of preprocessor statements are in the program in addition to the %INCLUDE statement(s), then as is the case with other PL/1 compilers, the MACRO option <u>must</u> be used.  
