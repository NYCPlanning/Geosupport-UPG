<h2>VIII.7 JCL for the Compile Step</h2>

In both batch and CICS applications, the Geosupport driver must be link-edited into the user program.  For applications written in NATURAL, this is done automatically with no special user action required.  For non-NATURAL applications, either batch or CICS, users must link-edit their programs as explained below.

When link-editing a non-NATURAL application, the user must provide in the JCL for the linkage editor step a DD statement for the Geosupport load library containing the driver, as well as an INCLUDE statement in the SYSIN file specifying the driver.  The DD statement should be coded as follows (“YOURDDN” may be replaced by any DDname):

<center>//YOURDDN   DD   DSN=A030.GEO.SUPPORT.LOADLIB,DISP=SHR</center>

For batch programs, the INCLUDE statement in the SYSIN file should be coded as follows:

<center>//LKED.SYSIN DD  \*</center>
<center>•</center>
<center>•</center>
<center>INCLUDE YOURDDN(GBI)</center>
<center>•</center>
<center>•</center>
<center>/\*</center>

For CICS programs, the INCLUDE statement should be coded as follows:

<center>//LKED.SYSIN DD  \*</center>
<center>•</center>
<center>•</center>
<center>INCLUDE YOURDDN(GOAIDRV)</center>
<center>•</center>
<center>•</center>
<center>/\*</center>
