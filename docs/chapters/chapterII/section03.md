<h2>II.3 Geosupport API User Programming Procedure</h2>

A field in a Geosupport API work area into which the user program inserts a value to be passed to Geosupport is referred to as an <u>input field</u> of the work area (because it is an input datum to Geosupport).  A field in a work area into which Geosupport inserts a value to be returned to the user program is called an output field.  WA1 contains both input and <u>output fields</u>.  WA2 contains output fields only.

The loading of values into WA1 input fields by the user program prior to issuing the call to the driver is referred to as <u>priming</u> WA1.  The function being requested, determines which WA1 input fields must be primed, which are optional, and which are not used.  One WA1 input field that is mandatory for all calls is the field for the function code.  Combinations of other WA1 input fields, such as those for borough code, address number, street name and street code fields, collectively serve to specify a geographic location to be processed.  Still other WA1 input fields are for specifying processing options, such as parameters that control how street names are normalized;  most of those fields have default values and are optional.

<u>It is essential that the user program clear WA1 to blanks before priming it, in order to eliminate any ‘stray’ data inadvertently lingering from a previous call</u>.  Various fields in the WA1 output area are initialized to blanks to help avoid extraneous data.  If the call involves two work areas, however, WA2 need not be cleared by the user program before calling the driver, because Geosupport clears WA2 automatically.

After clearing WA1 to blanks, the user program primes WA1, and then issues a standard subroutine call to the driver, passing the work area(s) (more precisely, their memory addresses) as parameters of the call.  (Note that a standard subroutine call is used to call the driver even in the CICS environment, rather than a CICS LINK.)  The driver, in turn, passes execution control to Geosupport (more precisely, to the foreground component of Geosupport), which is external to the user program load module.

When Geosupport completes its processing for the given call, control is returned to the driver, which in turn returns control back to the user program.  The user program can issue any number of calls to Geosupport during a single execution.  Each call is an independent event, which Geosupport processes based entirely on the contents of WA1 passed in that call;  Geosupport does not ‘remember’ previous calls.

The procedure that a user program would follow to call Geosupport via the API can be summarized as follows:

1. Clear WA1 to blanks

2. Prime WA1.  That is, move values to the appropriate input fields in WA1.  The function code is always required;  other required and optional input fields depend on the function, and are listed in [Appendix 1](../../../appendices/appendix01/).

3. Issue a standard subroutine call to the driver, passing as calling parameter(s) either WA1 only or both WA1 and WA2.  The required calling statements are described in [Chapter VIII.3](../../chapterVII/section03) and [VIII.5](../../chapterVIII/section05).  The distinction between one- and two-work-area calls is discussed in [Chapter II.4](../section04).

4. Upon return of control to the user program, examine the GRC (and the Reason Code, if appropriate) in WA1, and take appropriate action.  A list of the GRCs and Reason Codes that can be produced by each function is in [Appendix 4](../../../appendices/appendix04/).
	a. For Function 1B, examine both sets of GRC (and Reason Code, if appropriate) in WA1.

<br/>
