<h2>VIII.3 Coding API Calls</h2>

This section describes the source code statements that the user must code in the application program to call the driver.  Also described, for PL/1 and C applications, are the statements required to declare the driver as an external entry point.  Such a declaration is not required for COBOL, Assembler and NATURAL.  

For all programming languages, the driver can be called either with one or with two calling parameters.  The first parameter passes the address of Work Area 1 to the driver.  If the application program is making a two-work-area call, the second parameter passes the address of Work Area 2 to the driver.

The programming statements to declare and call the driver are shown below in the form that must be coded for batch application programs.  For CICS programs, the user must code these statements in the same way, but with the name of the CICS driver, GOAIDRV, in place of the batch driver, GBI.

In a (batch) PL/1 program, the driver must be declared as an external entry point as follows:

> DCL GBI EXTERNAL ENTRY OPTION (ASM,INTER);

In a (batch) IBM/C program, the driver should be declared as follows:

> \#pragma linkage (GBI,OS)
> long GBI(void \*,... );

If ‘WA1’ and WA2 are the names that the user has given to the work areas within the application program source code, the statement calling the driver would be coded as follows in a (batch) application program:  


|<b>Language</b>     | <b>One-Work-Area Call </b>| <b>Two-Work-Area Call</b> |
|:-------------  |:------------- |:------------- |
|COBOL      | CALL ‘GBI’ USING WA1.    | CALL ‘GBI’ USING WA1, WA2.  |
|Assembler    | CALL GBI,WA1,VL    | CALL GBI,(WA1,WA2),VL  |
|PL/1   | CALL GBI (WA1);  |  CALL GBI (WA1, WA2); |  
|IBM/C  | GBI(&WA1); | GBI(&WA1,&WA2); |
|NATURAL |CALL ‘GBI’ USING WA1 | CALL ‘GBI’ USING WA1 WA2 |
