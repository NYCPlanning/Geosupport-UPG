<h2>IX.5  The Input Control File (DDNAME=CARDIN)</h2>

This mandatory input file contains encoded information that controls the GBAT execution, including the Geosupport function being requested, processing options, and the positions of input fields in the input data records.  The control file must be provided as a fixed-length file with an LRECL of 80.  Users often provide the control file as an in stream file embedded in the JCL.

<u>Control File Syntactic Rules</u>  The information in the control file is coded in the form of <u>control entries</u>, which must conform to the following syntactic rules:

* Control entries may be coded in any order.

* Each record in the control file may contain one or more control entries.  If more than one control entry is coded within the same record, those entries must be separated from each other by at least one blank, and they may be separated by any number of blanks.

* A control entry must not span two records.

* No blanks are permitted within a control entry.

* A control entry consists of a keyword, followed by an equals sign, followed by either a single variable value or a pair of variable values separated by a comma, depending on the keyword, as follows:

 * Keywords other than those specifying the location of a field within the input data records require one variable, and are of the form KEYWORD=V, where V is a variable value specified by the user.  For example, the control entry RECTYPE=1E specifies that Function 1E is to be executed during this GBAT run;  ‘RECTYPE’ is the keyword in this control entry, and ‘1E’ is the variable value.

 * Most keywords that specify the locations of input data fields require two variables.  Such a control entry is of the form KEYWORD=S,L where S and L specify the starting position and length of the input field, respectively.  The two variable values must be separated by a comma.  For example, the control entry ONSTREET=58,32 specifies that the input street name field starts in position 58 of the input data record and is 32 bytes long.

 * For keywords that specify the locations of input fields for data items of invariant length, coding the length variable is usually optional.  For example, a BIN is always a seven-byte item; therefore, if an input BIN field starts in, say, position 29, the control entry specifying that field may be coded as either BIN=29 or BIN=29,7.  However, a BBL is always a ten-byte item, but must be explicitly coded as such.  See Table A9-2 for default information.

 Many of the control entries are optional.  GBAT assigns predetermined default values to the variables of all relevant optional control entries that the user has not coded.  The default values are suitable for most applications.  GBAT issues messages in SYSPRINT informing the user of all such default assignments.

<u>Control File Validation Processing</u>  GBAT validates the control file for syntax and, to a certain extent, for content, as described below.  GBAT issues an error message in SYSPRINT for each control file error encountered.  After completing the validation of the control file, if there have been any errors, GBAT terminates abnormally without processing the input data file and exits with a Condition Code of either 12 or 14 as described in [Chapter IX.3](../section03/).  Certain conditions encountered during control file validation cause warning messages to be issued, but are otherwise ignored and do not cause GBAT to terminate abnormally.

 The control file validations include verifying that all of the control entries that are mandatory for the specified Geosupport function have indeed been coded;  that the variable values that have been coded in each control entry are valid values for the given keyword;  and that the starting position and length that have been specified for each input data field are consistent with the input data file’s record length (that is, they do not in combination specify positions beyond the end of the input data record).  To do so, GBAT opens the input data file and obtains its LRECL from its Data Set Control Block (DSCB).  In the case of a variable length file, the LRECL in the DSCB is the maximum allowable LRECL of the file, as specified by the user when the file was catalogued.  Therefore, for a variable length input data file, GBAT can validate only that the starting positions and lengths of input fields coded in the control file are consistent with the longest possible input data file record.  <u>For a variable length file, it is the user’s responsibility to insure that all starting positions and lengths specified in the control file are valid for the shortest actual input data file record.</u>  If they are not, unpredictable results may ensue.

 If the control file contains more than one control entry for the same keyword, the last such control entry is effective and the others are ignored.  However, no warning messages are issued indicating the presence of such duplicate keyword entries.

 [Appendix 9](../../../appendices/appendix09/) contains three reference tables that document the full set of control entries.  These tables are indispensable references for setting up control files.  Tables A9-1 and A9-2 are organized by keyword, and Table A9-3 is organized by Geosupport function.  Table A9-1 lists all the control entries along with narrative descriptions of their formats, purposes and usages, and for most of the control entries, citations to sections of the UPG where pertinent topics are discussed in detail.  Table A9-2 indicates, for every control entry, the permissible values and the default values of its variables, and the functions for which that control entry may be used.  Table A9-3 indicates, for every function, which control entries and combinations of control entries are permissible, mandatory and optional.  See also the sample GBAT jobs in [Appendix 10](../../../appendices/appendix10/) for examples of control files.

 An expeditious approach for creating a new GBAT control file is first to ascertain from Table A9-3 which control entries are mandatory and optional for the function to be executed.  Tables A9-1 and A9-2 can then be consulted to review those of the control entries with which the user is unfamiliar.
