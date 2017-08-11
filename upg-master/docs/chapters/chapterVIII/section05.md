<h2>VIII.5 Coding API Calls When Using Geosupport COPY Files</h2>

This section describes the source code statements that COBOL, Assembler, PL/1, C and NATURAL users must code in application programs that use Geosupport COPY files.  The required statements consist of declarative statements to reference the COPY files (using the file names in Table VIII-1) and statements calling the driver.  


In [Chapter VIII.3](/chapters/chapterVIII/section03/), the forms of calls to the driver were given using arbitrary data names for the work areas.  In programs that do not use Geosupport COPY files, those names are user-selectable.  In the present section, the forms of the driver calls are given again, this time with the specific data names that are required for compatibility with the COPY files.  COBOL and C are the only supported languages that permit COPY file users to select their own names for the work areas (but not for the fields within the work areas).  Prior to each call to the driver, the program must prime Work Area 1 with the input data to be processed by Geosupport, as described in [Chapter II.3](/chapters/chapterII/section03/).

In [Chapter VIII.3](../chapterVIII/section03), the forms of calls to the driver were given using arbitrary data names for the work areas.  In programs that do not use Geosupport COPY files, those names are user-selectable.  In the present section, the forms of the driver calls are given again, this time with the specific data names that are required for compatibility with the COPY files.  COBOL and C are the only supported languages that permit COPY file users to select their own names for the work areas (but not for the fields within the work areas).  Prior to each call to the driver, the program must prime Work Area 1 with the input data to be processed by Geosupport, as described in [Chapter II.3](../chapterII/section03).

The declarative statements referencing COPY files cause the compiler to process the source code contained therein as if it were present within the application program’s own source code at the point in the program where the declarative statement is located.  Application programs need only reference those Geosupport COPY files that are required for the Geosupport function(s) the program actually calls, although referencing other COPY files does no harm.

## <span id="chapterVIII.5.1"><center><u>COBOL Source Code Statements</u></center></span>

To reference Geosupport MSW COPY files, COBOL programs must contain the appropriate one (or more) of the following statements in WORKING-STORAGE:

> 01 ANY-NAME-FOR-WA1. COPY W1COB.	WA1, all functions
> 01 ANY-NAME-FOR-WA2. COPY W2COB.	WA2, Functions 1 & 1E & 3 (regular WA2), 2, 3C

> 01 ANY-NAME-FOR-WA2-L. COPY W2COBL.	WA2, Functions 1& 1E & 3 (long WA2)

> 01 ANY-NAME-FOR-WA2-1A. COPY W2COB1A.	WA2, Functions 1A & BL (regular WA2), BN

> 01 ANY-NAME-FOR-WA2-1AL. COPY W2COB1AL.	WA2, Functions 1A & BL (long WA2)

> 01 ANY-NAME-FOR-WA2-3S. COPY W2COB3S.	WA2, Function 3S

For COBOL programs that will be executed in the <b>batch environment</b> and that use Geosupport COPY files, API calls are coded as follows:

> One-work-area calls, all functions:
>   CALL ‘GBI’ USING ANY-NAME-FOR-WA1.

> Two-work-area calls, Functions 1 & 1E & 3 (regular WA2), 2, 3C:
>   CALL ‘GBI’ USING ANY-NAME-FOR-WA1 ANY-NAME-FOR-WA2.

> Two-work-area calls, Functions 1 & 1E & 3 (long WA2):
>   CALL ‘GBI’ USING ANY-NAME-FOR-WA1 ANY-NAME-FOR-WA2-L.

> Two-work-area calls, Functions 1A & BL (regular WA2), BN:
>   CALL ‘GBI' USING ANY-NAME-FOR-WA1 ANY-NAME-FOR-WA2-1A.


> Two-work-area calls, Functions 1A & BL (long WA2):
>    CALL ‘GBI’ USING ANY-NAME-FOR-WA1 ANY-NAME-FOR-WA2-1AL.


> Two-work-area calls, Function 3S:
>     CALL ‘GBI’ USING ANY-NAME-FOR-WA1 ANY-NAME-FOR-WA2-3S.

<b>CICS programs</b> issue calls as above but with GOAIDRV in place of GBI.

To reference Geosupport <b>COW COPY files</b> include the appropriate COPY files whose names begin with P1 and P2 instead of W1 and W2, e.g. P1COB instead of W1COB.  Note that in the COW format, there is no long WA2 for Functions 1, 1E, and 3.  Note, also, that there are additional function options in the COW format.  

\* To choose the appropriate COW COPY file, see Table VIII-2.*

## <span id="chapterVIII.5.2"><center><u>Assembler Source Code Statements</u></center></span>

To reference Geosupport <b>MSW COPY files</b>, Assembler programs must contain the appropriate one (or more) of the following statements:

<div class="sourceCodeStatements">

          COPY W1BAL                      WA1, all functions <br>
          COPY W2BAL                      WA2, Functions 1 & 1E & 3 (regular WA2), 2, 3C <br>
          COPY W2BALL                     WA2, Functions 1 & 1E & 3 (long WA2) <br>
          COPY W2BAL1A                  WA2, Functions 1A & BL (regular WA2), BN <br>
          COPY W2BAL1AL                WA2, Functions 1A & BL (long WA2) <br>
          COPY W2BAL3S                  WA2, Function 3S

</div>

For Assembler programs that will be executed in the <b>batch environment</b> and that use Geosupport COPY files, API calls are coded as follows:


<div class="sourceCodeStatements">

         CALL GBI,W1BAL,VL                             One-work-area calls, all functions <br>
         CALL GBI,(W1BAL,W2BAL),VL            Two-work-area calls, Functions 1 & 1E & 3 <br> (regular WA2), 2, 3C <br>
         CALL GBI,(W1BAL,W2BALL),VL          Two-work-area calls, Functions 1 & 1E & 3 <br> (long WA2) <br>
         CALL GBI,(W1BAL,W2BAL1A),VL        Two-work-area calls, Functions 1A & BL <br> (regular WA2), BN <br>
         CALL GBI,(W1BAL,W2BAL1AL),VL       Two-work-area calls, Functions 1A & BL <br> (long WA2) <br>
         CALL GBI,(W1BAL,W2BAL3S),VL        Two-work-area calls, Function 3S <br>

</div>

<b>CICS programs</b> issue calls as above but with GOAIDRV in place of GBI.

To reference Geosupport <b>COW COPY files</b> include the appropriate COPY files whose names begin with P1 and P2 instead of W1 and W2, e.g. P1BAL instead of W1BAL.  Note that in the COW format, there is no long WA2 for Functions 1, 1E, and 3.  Note, also, that there are additional function options in the COW format.

\* To choose the appropriate COW COPY file, see Table VIII-2. *

## <span id="chapterVIII.5.3"><center><u>PL/1 Source Code Statements</u></center></span>

To reference Geosupport <b>MSW COPY files</b>, PL/1 programs must contain the appropriate one(s) of the following statements:

<div class="sourceCodeStatements">

         %INCLUDE W1PL1;	                   WA1, all functions <br>
         %INCLUDE W2PL1;                       WA2, Functions 1 & 1E & 3 (regular WA2), 2, 3C <br>
         %INCLUDE W2PL1L;	                  WA2, Functions 1 & 1E & 3 (long WA2) <br>
         %INCLUDE W2PL11A;               	WA2, Functions 1A & BL (regular WA2), BN <br>
         %INCLUDE W2PL11AL;	               WA2, Functions 1A & BL (long WA2) <br>
         %INCLUDE W2PL13S;	                WA2, Function 3S <br>

</div>

For PL/1 programs that will be executed in the <b>batch environment</b> and that use Geosupport COPY files, API calls are coded as follows:

<div class="sourceCodeStatements">

         CALL GBI (W1PL1);	                       One-work-area calls, all functions <br>
         CALL GBI (W1PL1,W2PL1);	        Two-work-area calls, Functions 1 & 1E, 2, 3 <br>(regular WA2), 3C <br>
         CALL GBI (W1PL1,W2PL1L);	       Two-work-area calls, Functions 1 & 1E & 3 <br>(long WA2) <br>
         CALL GBI (W1PL1,W2PL11A);	      Two-work-area calls, Functions 1A & BL <br>(regular WA2), BN <br>
         CALL GBI (W1PL1,W2PL11AL);	    Two-work-area calls, Functions 1A & BL <br>(long WA2) <br>
         CALL GBI (W1PL1,W2PL13S);	      Two-work-area calls, Function 3S <br>

</div>

<b>CICS programs</b> issue calls as above but with GOAIDRV in place of GBI.  

(Note: for either a batch or a CICS PL/1 program, the appropriate Geosupport driver (GBI or GOAIDRV respectively) must be declared as an external entry point.  See Section VIII.3.)

To reference the Geosupport <b>COW COPY files</b> include the appropriate copy files whose names begin with P1 and P2 instead of W1 and W2, e.g. P1PL1 instead of W1PL1.  Note that in the COW format, there is no long WA2 for Functions 1, 1E, and 3.  Note, also, that there are additional function options in the COW format.

/* To choose the appropriate COW COPY file, see Table VIII-2. *

## <span id="chapterVIII.5.4"><center><u>IBM/C Source Code Statements</u></center></span>

To reference the Geosupport <b>MSW COPY file</b> IBM/C programs must contain the following statement:

> \#include <wac.h>

In the following C source code examples, the letter ‘L’ appears in upper case to facilitate distinguishing it from the numeric character ‘1’.

<div class="sourceCodeStatements">

         C_WA1 anyname_wa1;                                  WA1, all functions <br>
         C_WA2_F1 anyname_wa2_f1;                      WA2, Functions 1 & 1E (regular WA2) <br>
         C_WA2_F1 anyname_wa2_f1L;                    WA2, Functions 1 & 1E (long WA2) <br>
         C_WA2_F1A anyname_wa2_f1a;                 WA2, Functions 1A & BL (regular WA2), BN <br>
         C_WA2_F1AL anyname_wa2_f1aL;             WA2, Functions 1A & BL (long WA2) <br>
         C_WA2_F2 anyname_wa2_f2;                      WA2, Function 2 <br>
         C_WA2_F3 anyname_wa2_f3;                      WA2, Function 3 (regular WA2) <br>
         C_WA2_F3L anyname_wa2_f3L;                 WA2, Function 3 (long WA2) <br>
         C_WA2_F3C anyname_wa2_f3c;                 WA2, Function 3C <br>
         C_WA2_F3S anyname_wa2_f3s;                 WA2, Function 3S <br>

</div>

For C programs that will be executed in the <b>batch environment</b> and that use the Geosupport COPY file, API calls are coded as follows:

<div class="sourceCodeStatements">

         C_WA1 anyname_wa1;	                                 WA1, all functions <br>
         C_WA2_F1 anyname_wa2_f1;	                   WA2, Functions 1 & 1E (regular WA2) <br>
         C_WA2_F1 anyname_wa2_f1L;	                  WA2, Functions 1 & 1E (long WA2) <br>
         C_WA2_F1A anyname_wa2_f1a;	                WA2, Functions 1A & BL (regular WA2), BN <br>
         C_WA2_F1AL anyname_wa2_f1aL;             WA2, Functions 1A & BL (long WA2) <br>
         C_WA2_F2 anyname_wa2_f2;	                    WA2, Function 2 <br>
         C_WA2_F3 anyname_wa2_f3;	                    WA2, Function 3 (regular WA2) <br>
         C_WA2_F3L anyname_wa2_f3L;	                  WA2, Function 3 (long WA2) <br>
         C_WA2_F3C anyname_wa2_f3c;	                  WA2, Function 3C <br>
         C_WA2_F3S anyname_wa2_f3s;	                  WA2, Function 3S <br>

</div>


<div class="sourceCodeStatements">

    GBI (&anyname_wa1);	                                               One-work-area calls, all functions. <br>
    GBI (&anyname_wa1,&anyname_wa2_f1);	            Two-work-area calls, Functions 1 & 1E <br>  (regular WA2) <br>
    GBI (&anyname_wa1,&anyname_wa2_f1L);	       Two-work-area calls, Functions 1 & 1E <br>  (long WA2) <br>
    GBI (&anyname_wa1,&anyname_wa2_f1a);	       Two-work-area calls, Functions 1A & BL <br>  (regular WA2), BN <br>
    GBI (&anyname_wa1,&anyname_wa2_f1aL);	      Two-work-area calls, Functions 1A & BL <br>  (long WA2) <br>
    GBI (&anyname_wa1,&anyname_wa2_f2);	            Two-work-area calls, Function 2 <br>
    GBI (&anyname_wa1,&anyname_wa2_f3);	            Two-work-area calls, Function 3 <br>  (regular WA2) <br>
    GBI (&anyname_wa1,&anyname_wa2_f3L);	       Two-work-area calls, Function 3 <br>  (long WA2) <br>
    GBI (&anyname_wa1,&anyname_wa2_f3c);	       Two-work-area calls, Function 3C <br>
    GBI (&anyname_wa1,&anyname_wa2_f3s);	       Two-work-area calls, Function 3S <br>

</div>

<b>CICS</b> programs issue calls as above but with GOAIDRV in place of GBI.  

(Note:  for either a batch or a CICS C program, the Geosupport driver (GBI or GOAIDRV respectively) must be declared as an external entry point. ([See Section VIII.3](/chapters/chapterVIII/section03/).)

To reference the Geosupport <b>COW COPY files</b> include the PAC COPY file instead of the WAC COPY file. Note that in the COW format, there is no long WA2 for Functions 1, 1E, and 3.  Note, also, that there are additional function options in the COW format.

## <span id="chapterVIII.5.5"><center><u>NATURAL Source Code Statements</u></center></span>

<b><u>NATURAL Source Code Statements</b></u>
NATURAL programs reference Geosupport MSW LDAs by containing one or more of the following statements in DEFINE DATA:

<div class="sourceCodeStatements">

         LOCAL USING GEOLW1	                WA1, all functions <br>
         LOCAL USING GEOLW2	                WA2, Functions 1 & 1E & 3 (regular WA2), 2, 3C <br>
         LOCAL USING GEOLW2L	           WA2, Functions 1 & 1E & 3 (long WA2) <br>
         LOCAL USING GEOLW21A	         WA2, Functions 1A & BL (regular WA2), BN <br>
         LOCAL USING GEOLW2AL	         WA2, Functions 1A & BL (long WA2) <br>
         LOCAL USING GEOLW23S	         WA2, Function 3S <br>

</div>

For NATURAL MSW programs that will be executed in the <b>batch environment</b> and that use the Geosupport COPY files (LDAs), API calls are issued as follows:

<div class="sourceCodeStatements">

         CALL ‘GBI’ USING W1NAT	                      One-work-area calls, all functions <br>
         CALL ‘GBI’ USING W1NAT W2NAT	     Two-work-area calls, Functions 1 & 1E & 3 <br> (regular WA2), 2, 3C  <br>
         CALL ‘GBI’ USING W1NAT W2NATL	     Two-work-area calls, Functions 1 & 1E & 3 <br> (longWA2)  <br>
         CALL ‘GBI’ USING W1NAT W2NAT1A	   Two-work-area calls, Functions 1A & BL <br> (regular WA2), BN <br>
         CALL ‘GBI’ USING W1NAT W2NATAL	   Two-work-area calls, Functions 1A & BL <br> (long WA2) <br>
         CALL ‘GBI’ USING W1NAT W2NAT3S	   Two-work-area calls, Functions 3S <br>

</div>

<b>CICS NATURAL</b> programs issue calls as above but with GOAIDRV in place of GBI.

<b><u>Natural COW</u></b>
NATURAL programs reference Geosupport COW LDAs by containing one or more of the following statements in DEFINE DATA:

<div class="sourceCodeStatements">

         LOCAL USING GEOLP1	              WA1, all functions <br>
         LOCAL USING GEOLP2	              WA2, Functions 1 & 1E & 3C <br>
         LOCAL USING GEOLP2	              WA2, Function 2 <br>
         LOCAL USING GEOLP2	              WA2, Function 3 <br>
         LOCAL USING GEOLP21A	       WA2, Functions 1A & BL (regular WA2), BN <br>
         LOCAL USING GEOLP2AL	       WA2, Functions 1A & BL (long WA2) <br>
         LOCAL USING GEOLP23S	       WA2, Function 3S <br>
         LOCAL USING GEOL2AP	         WA2, Function AP <br>
         LOCAL USING GEOL2APX	       WA2, Function AP Extended <br>

</div>

For NATURAL COW programs that will be executed in the <b>batch environment</b> and that use the Geosupport COPY files (LDAs), some samples of API calls follow:

<div class="sourceCodeStatements">

         CALL ‘GBI’ USING P1NAT	                       One-work-area calls, all functions <br>
         CALL ‘GBI’ USING P1NAT P2NAT	       Two-work-area calls, Functions 1 & 1E & 3C <br>
         CALL ‘GBI’ USING P1NAT P2NAT2	       Two-work-area calls, Function 2 <br>
         CALL ‘GBI’ USING P1NAT P2NAT3	       Two-work-area calls, Function 3 <br>
         CALL ‘GBI’ USING P1NAT P2NAT1A       Two-work-area calls, Fns 1A & BL (regular WA2), BN <br>
         CALL ‘GBI’ USING P1NAT P2NAT1AL	 Two-work-area calls, Functions 1A & BL (long WA2) <br>
         CALL ‘GBI’ USING P1NAT P2NAT3S	      Two-work-area calls, Functions 3S <br>
         CALL ‘GBI’ USING P1NAT P2NATAP	      Two-work-area calls, Functions AP <br>
         CALL ‘GBI’ USING P1NAT P2NATAPX	  Two-work-area calls, Functions AP Extended <br>

</div>

Note that there are additional function options in the COW format.

\* To choose the appropriate COW COPY file (P2NATxxx), see Table VIII-2. *

CICS NATURAL programs issue calls as above but with GOAIDRV in place of GBI.
