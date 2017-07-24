<h2>VIII.8 JCL for the Execute Step (Batch Applications)</h2>

<u>For user programs being executed in the batch environment, the user must provide seven megabytes of memory for Geosupport, in addition to the memory required for the user program itself.  
</u>

<u>Geosupport Software Files</u>

User programs that are executed in the batch environment also require Geosupport-related DD statements in the JCL for the execute step.  A STEPLIB or JOBLIB DD statement must be provided to make the Geosupport foreground component batch load module library accessible to the application.  As of Version 10.1 of Geosupport, users do this by coding either of the following DD statements:

<table class="borderlessTable" style="width:100%">
  <tr>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>//STEPLIB</td>
    <td>DD</td>
    <td>DSN=A030.GEO.SUPPORT.PDSE.LOADLIB,DISP=SHR</td>
  </tr>

  <tr>
    <td>//</td>
    <td>DD</td>
    <td>DSN=A030.GEO.SUPPORT.LOADLIB,DISP=SHR</td>
  </tr>

  <tr>
  	<td></td>
    <td></td>
    <td>or</td>
  </tr>

  <tr>
  	<td>//JOBLIB</td>
    <td>DD</td>
    <td>DSN=A030.GEO.SUPPORT.PDSE.LOADLIB,DISP=SHR</td>
  </tr>

  <tr>
  	<td>//</td>
    <td>DD</td>
    <td>DSN=A030.GEO.SUPPORT.LOADLIB,DISP=SHR </td>
  </tr>

</table>

(NATURAL users, please see the important note at the end of this section regarding the STEPLIB or JOBLIB DD statement.)  

<u>Geosupport Data Files</u>

As of Version 10.1 of Geosupport, the user no longer has to provide DD statements for the Geosupport data files.  In fact, if these DD statements are provided they are ignored by Geosupport.  The data set names of the Geosupport data files are stored in a module called DSNAMES. If you need to use a non-standard Geosupport data file, please see your systems programmer.


<b><u>Note for NATURAL Users:</u></b>

When using a NATURAL batch execution procedure, care must be taken to insure that the Geosupport load library is concatenated to the two standard NATURAL libraries, rather than overriding them.  Overriding is prevented by coding two DD statements with blank operand fields, followed by the DD statement for the Geosupport load library.  The following JCL is an example (any stepname may be used):

<table class="borderlessTable" style="width:100%">
  <tr>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>//STEPNM</td>
    <td>EXEC</td>
    <td><NATURAL-procname>,REGION=7M</td>
  </tr>

  <tr>
    <td>//STEPLIB</td>
    <td>DD</td>
    <td></td>
  </tr>

  <tr>
  	<td>//</td>
    <td>DD</td>
    <td></td>
  </tr>

  <tr>
  	<td>//JOBLIB</td>
    <td>DD</td>
    <td>DSN=A030.GEO.SUPPORT PDSE LOADLIB,DISP=SHR</td>
  </tr>

  <tr>
  	<td>//</td>
    <td>DD</td>
    <td>DSN=A030.GEO.SUPPORT.LOADLIB,DISP=SHR</td>
  </tr>

</table>
