<h2>II.2 Geosupport Return Codes and Reject Handling</h2>

Geosupport has an elaborate apparatus to support application problem-handling.  There are three output fields in Work Area 1 that are used to inform calling applications of the outcome of each call to Geosupport.  These fields are the <u> Geosupport Return Code </u> (GRC), the <u> Reason Code </u> and the <u> Message. </u>  A comprehensive list of GRCs, Reason Codes and Messages is contained in [Appendix 4](../../../appendices/appendix04/).

The GRC is a two-byte character item into which Geosupport inserts a value before returning control to the calling application, as follows.

* A GRC value of ‘00’ indicates <u>unconditionally successful completion</u>.

* A GRC value of ‘01’ indicates a <u>warning</u> condition.

* A GRC value other than ‘00’ or ‘01’ signifies unsuccessful completion, or <u>rejection</u>, caused by either a system error or a user error.


Since Function 1B is a combination of two functions, viz. Functions 1A Extended and 1E Extended, <u>a second set of GRC, Reason Code and Message field is defined in Work Area 1</u>.  This second set contains the GRC, Reason Code and Message for the Function 1A Extended portion of the Function 1B call. The original GRC, Reason Code and Message fields in Work Area 1 contain the GRC, Reason Code and Message from the Function 1E Extended portion of the Function 1B call.  (It is entirely possible that Geosupport will find one set of information and not find the other.  There can be an error code and message in the new GRC and Message fields indicating PAD data (Function 1A) has not been found, and a 00 or 01 GRC in the original Return Code field indicating Blockface (Function 1E) information has been found, or just the opposite.)

<u>Warnings</u> are conditionally successful completions.  They alert the user to unusual aspects of the input or output data, or signify that Geosupport made an assumption about or modification to the input data.  For example, Functions 1A, 1B and 1E issue a warning to alert the user that a required hyphen is missing from an input house number and that Geosupport has inserted the missing hyphen into the output normalized house number.

There are situations where user input data may result in multiple warning messages.  In some cases, the warnings may be combined into a single message; however in other situations, it is not possible to combine the messages.  When that happens, Geosupport attempts to select the warning message that would be most important.  Based upon user feedback, the relative importance of the warning messages may be  updated.

It is advisable for application designers to review the possible warnings that can be elicited by the functions their application will be calling (delineated in [Appendix 4](../../../appendices/appendix04/)), and to determine whether there are types of warnings for which it would be appropriate to provide special handling routines.  In some applications, it may be appropriate simply to display the messages that accompany warning returns, and otherwise to process warnings in the same fashion as unconditionally successful completions.  

For all unconditionally successful completions, Geosupport returns values in the work area(s) for the full set of output data items that the given Geosupport function is designed to provide.  (But see the note of caution regarding the return of values in work area output fields in [Chapter II.4.](../section04))  In the case of a warning, certain output fields may be ‘empty’ (blank, all zeros or otherwise devoid of information), depending on the nature of the warning.  In the case of a rejection, almost all output fields are returned empty, but there will be values in the GRC and Message field.  

Rejects can be caused either by a system error or a user error.

* <u>System errors</u> are problems that are not attributable to the user program or to the user input data, and therefore are beyond the user’s control.  Typical system errors are hardware errors, operating system errors and Geosupport software errors or data errors.

* <u>User errors</u> can occur when the user’s program makes a call to Geosupport improperly, such as passing an invalid number of work areas; or when Geosupport considers the user’s input data to be geographically or otherwise invalid, such as an invalid function code, an empty input field for which a value is mandatory, an invalid borough code, an invalid address.  

For all warnings and rejects, the Message field contains an appropriate message.  In addition, for all warnings and for some rejects, a value is returned in the Reason Code field, specifying more precisely the reason for the warning or rejection.

The user program should be designed so that, immediately upon receiving execution control back after a call to Geosupport, it examines the GRC (and the Reason Code, when relevant) to determine the outcome of the call, and takes appropriate action.  <u>(Note:  the textual content of Geosupport messages is subject to revision without notice.  Therefore, application developers should program rejection processing based on the value of the GRC and Reason Code rather than on the Message.</u>  Note also, that, in very rare instances a GRC may be retired and reused for a new message.  If and when this happens, the Geosupport users will be notified of the change in advance so that appropriate adjustments can be made.)  

In batch applications, appropriate actions for processing a warning or reject might include printing out the GRC, Reason Code and Message and/or writing the record to a reject file.  In interactive applications, appropriate actions might include displaying the GRC, Reason Code and Message on the screen, and (for user errors, not system errors) giving the data entry operator an opportunity to correct the error and resubmit.
