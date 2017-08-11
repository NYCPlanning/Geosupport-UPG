<h2> X.1 What is GBAT?  </h2>
GBAT Desktop Edition is Geosupport Desktop Edition’s batch utility application and may be executed on any 32-bit Windows platform. GBAT Desktop Edition (referred to as GBAT in this document) can frequently satisfy your batch Geosupport processing needs and eliminate the necessity of your writing your own application program.

GBAT accepts as input and provides as output either text files or most databases that are supported by Microsoft’s ODBC (Open Database Connectivity), such as Access<a href="#section01-2" id="section01-2-2"><sup>2</sup></a>  

Execution of GBAT is controlled by control files that you create via a user friendly, full featured graphical interface. Once you have created these control files, they may be used repeatedly.  

If you are using a database for input and/or output, you must have a fairly thorough knowledge of how to use that database. This document does not discuss how to use any database. For information on the database that you are using, refer to either the vendor documentation on the database or to Microsoft documentation.  

GBAT produces two types of output text files or databases. One set of output consists of the successful output and the second consists of the records that resulted in an error condition.  

<h3><u>NOTE FOR DATABASE USERS:</u></h3>  
GBAT returns empty input fields as Zero Length Strings in the output, even if they were originally NULL. This phenomenon has been observed using Access and is presumed to exist using other databases as well. We hope to fix this in a future release of GBAT Desktop Edition.  

----
<a href="#section01-2-2"><sup id="section01-2">2</sup></a>GBAT has been successfully tested with Access, dBASE, Excel, MS SQL Server and FoxPro. GBAT has not been successfully tested with Paradox.
