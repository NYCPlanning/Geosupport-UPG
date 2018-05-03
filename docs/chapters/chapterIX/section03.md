<h2>IX.3 GBAT Processing and Programmed Abnormal Terminations</h2>  

Before GBAT begins processing the input data file, it first validates the control file and, if appropriate, the alias file.  The entire control file is validated for syntax and content, as described in [Section XI.5](/chapters/chapterXI/section05/).  Regardless of the outcome of that validation, if the function being executed accepts street name input, and the user has provided an alias file, and the user has specified either ALIASES=VAL or ALIASES=YES in the control file, then the contents of the entire alias file are also validated, as described in [Section XI.6](/chapters/chapterXI/section06/).  For each error encountered during these validations, GBAT issues an appropriate error message but continues the validation processing.  Informational and warning messages may also be issued during the control file and alias file validation processing.  

After the control file and alias file validation processing is completed, GBAT determines whether to terminate abnormally or to commence processing the input data file.  GBAT terminates abnormally at this point if there has been at least one control file error or, when an alias file has been provided, if there has been at least one alias file error and ALIASES=VAL has been specified.  (In contrast, when ALIASES=YES is specified, the alias file is validated and error messages are issued as appropriate, but alias file errors do not cause GBAT to terminate abnormally.)  Conditions that cause GBAT to issue informational or warning messages do not trigger abnormal termination.  

The Condition Codes issued for programmed abnormal terminations triggered by control file and alias file errors are as follows:  

 * <u>Condition Code 12:</u> only the control file had errors (or both the control file and the alias file had errors, but ALIASES=YES was specified, so that any alias file errors do not affect the manner in which GBAT terminates).  

 * <u>Condition Code 13:</u> only the alias file had errors, and ALIASES=VAL was specified.  

 * <u>Condition Code 14:</u> both files had errors, and ALIASES=VAL was specified.  

When no alias file is provided, Condition Code 12 can occur, but not Condition Codes 13 and 14.  

If the control file and alias file validation processing is completed normally, GBAT processes the input data file and writes data to the output files.  Specifically, GBAT reads each record from the input data file, and uses the geographic information obtained there from as the input data for a standard API call to the Geosupport System.  If the information is accepted by Geosupport, GBAT writes a record into the output file of accepted data (unless the user has chosen not to create this optional file).  If the information is rejected by Geosupport, GBAT writes a record into the output file of rejected data.  Both types of output records consist of exact copies of the input data record together with data that GBAT has obtained from Geosupport.  At the completion of execution, GBAT writes out a small report (usually less than one page long) of summary run statistics.  

  * <u>Condition Code 15:</u>  
  GBAT sets the Condition Code to 15 when GBAT execution is terminated because of a record length error for the following files: ERRFILE (COW and MSW), ERRFIL2 (COW only), ERRFIL3 (COW only), ERRFIL4 (COW only) and ERRFIL5 (COW only).  

If  there is a record length error for other files, e.g. OUTFILE, GBAT may ABEND with U4038.  In addition to the ABEND, other messages are generated, e.g. <span class="customPre">IBM0122S ONCODE=22 The RECORD condition was raised because the length of the record variable was greater than the record length (ONFILE = OUTFILE)</span>   

 * <u>Condition Code 20:</u>  
 In the course of processing the input data file, a condition called a MAXREJECTS violation, discussed in detail below, may arise.  If so, GBAT ceases processing the input data, writes out the report of run statistics reflecting the processing that has occurred up to that point, and terminates abnormally with Condition Code 20.  Otherwise, GBAT continues processing until all input data records have been processed, writes out the report of run statistics, and then terminates normally with Condition Code 00.  


 <u>The MAXREJECTS Feature:</u>  When coding the control file, if the user specifies incorrect record positions for an input data field, it is likely that Geosupport will reject most or all of the input data records.  An optional control entry called MAXREJECTS is designed to prevent GBAT, to the extent possible, from wastefully processing an input data file in its entirety when incorrect record positions have been specified in the control file for an input field.  The MAXREJECTS feature does this by causing execution to terminate abnormally with Condition Code 20 if a certain number of records at the beginning of the input data file are all rejected by Geosupport for any reason other than an invalid borough code.  (The latter exception is designed to prevent a MAXREJECTS termination from occurring inappropriately when a user file has records that intentionally contain blank or otherwise invalid borough codes because those records represent locations outside of New York City.)


The MAXREJECTS control entry is used to specify the number of consecutive rejected records at the beginning of the input data file (ignoring any records rejected for an invalid borough code) that are to trigger a MAXREJECTS termination.  For example, the control entry MAXREJECTS=50 directs GBAT to terminate abnormally with Condition Code 20 if every one of the first 50 input data records that are not rejected because of an invalid borough code is rejected for any other reason.

At the user’s discretion, warnings can be treated as if they were rejects for the purpose of triggering a MAXREJECTS abnormal termination;  see the discussion of the REJECTWARNINGS control entry in [Section XI.7](/chapters/chapterXI/section07/).

The MAXREJECTS control entry is optional.  If the user does not code a MAXREJECTS control entry, then the value in effect defaults to MAXREJECTS=200.  If the user codes MAXREJECTS=NOMAX, the MAXREJECTS feature is turned off;  that is, the entire input data file is processed, regardless of how many records at the beginning of the file are rejected.

Coding incorrect input field specifications in the control file tends to make a MAXREJECTS termination likely, but it does not guarantee it.  That is because some input data records may contain values in the incorrectly specified field positions that, purely by coincidence, are valid for the intended data item.  If there happened to be such a record near the beginning of the input data file, and that record happened to be accepted by Geosupport, that would preclude a MAXREJECTS termination.  Conversely, a MAXREJECTS termination can occur even when there are no control file errors.  That is because Geosupport may reject all of the input data records that are within the scope of the MAXREJECTS triggering set simply because those particular records happen to contain geographically invalid data.

Note that the completion of a GBAT execution with Condition Code 00 does not by itself signify that no input data records were rejected by Geosupport.  It signifies only that no errors were found in the control file nor (if ALIASES=VAL was coded) in the alias file;  that a MAXREJECTS violation did not occur;  and therefore that all input data records were processed (but not necessarily accepted) by Geosupport.
