<h2>IX.6  The Input Alias File (DDNAME=ALIASES)</h2>

For all Geosupport functions that accept street name input, GBAT users have the option to provide a set of user-defined street name aliases (alternative street names and street name spelling variants) in an input alias file.  These aliases supplement the set of street names that Geosupport recognizes of its own accord.  It is important to note that the user’s aliases <u>supplement</u> Geosupport’s street names; they do not <u>supersede</u> them.  Also, the aliases in an alias file supplement the Geosupport names only <u>temporarily</u>, that is, only during a GBAT execution in which that particular alias file is provided;  GBAT does not ‘remember’ any user-defined aliases that have been supplied in prior GBAT executions.

The alias feature is intended to enable users to customize GBAT execution for a particular data file.  This feature is particularly useful for processing a data file that contains a few street names that are misspelled in a consistent manner in many records.  By providing just a few entries in an alias file to identify those misspellings with corresponding ‘correct’ (Geosupport-recognized) spellings, the user may greatly improve the ‘hit’ rate without having to modify the data file itself.  This could be beneficial, for example, if the data file being processed was obtained from an outside source and the user has no software at hand to modify the contents of the file to correct street name misspellings.

To use the alias feature, a control entry containing the keyword ALIASES must be coded as follows:

* ALIASES=VAL directs GBAT to validate the alias file (as described below), and then to process the input data file <u>only</u> if the alias file had no invalid records.  If so, then during the processing of the input data file, the user-defined aliases supplement the set of street names that Geosupport recognizes. Records that result in warnings are not considered invalid in this context, and do not prevent the processing of the input data file.  

* ALIASES=YES directs GBAT to validate the alias file, and then to process the input data file <u>regardless</u> of whether there were any invalid alias records.  During the processing of the input data file, the user-defined aliases that are in the valid alias records supplement the set of street names that Geosupport recognizes, while those in invalid alias records are not used.

If no ALIASES control entry is coded, or if ALIASES=NO is specified, then GBAT performs no alias file processing, even if an ALIASES DD statement appears in the JCL.

If ALIASES=VAL or ALIASES=YES is specified, except for the circumstance discussed in the next paragraph, the user must add a DD statement to the JCL of the GBAT execution step containing the DDname ALIASES, referencing the file that the user wishes to use as the alias file during this GBAT execution.  

If ALIASES=VAL or ALIASES=YES is specified, but the function being executed does not accept street name input, then a warning message is issued during control file validation, and the ALIASES control entry, as well as the ALIASES DD statement in the JCL (if any), are otherwise ignored;  in particular, no alias file validating is performed in this circumstance.

The alias file must be a sequential file.  Although it is expected that most alias files will have at most a few dozen records, GBAT is designed to accommodate alias files of up to 5,000 records. The alias file must have a record length of 80 and must conform to the following layout:


<p>Record Layout of Alias File</p>

| Field | Size | Positions | Comments |  
| :------------- | :------------- | :------------- | :------------- |
| Borough Code | 1 | 1 | Standard Geosupport borough codes |
| User’s Alias Street Name | 32 | 34-65 | Need not be in normalized format |
| Filler | 15 | 66-80 | Blanks |

<u>Alias File Validation Processing</u>  GBAT validates each record in the alias file, and writes an appropriate message to SYSPRINT for each error or warning condition encountered.  A basis of the validation processing is that the alias street name is supposed to be a name that is not already recognized by Geosupport, whereas the street name in the field labeled ‘Street Name Recognized by Geosupport’ is supposed to be recognized.  The alias file validation processing is as follows:

* ‘Normal’ case:  if the alias name is not recognized, and the putative Geosupport-recognized name is in fact recognized, the alias file record is <u>valid</u>.

* Error:  If the alias name and the putative Geosupport-recognized name are identical, the alias record is <u>invalid</u>.  This condition tends to indicate that the user inadvertently entered the alias name incorrectly when creating this record.

* Warning:  If the two names are different, and they are both recognized by Geosupport, and they have the same seven-digit street code (B7SC), then the alias record is superfluous but harmless.  A <u>warning</u> message is issued, and the alias name is used.  

* Error:  If both names are recognized, but they have different B7SC values, the alias record is <u>invalid.</u>

* Error:  If the putative Geosupport-recognized name is not in fact recognized, the alias record is <u>invalid</u>.

Note:  GBAT does not check whether there is more than one record in the alias file containing the same alias name.  If there is more than one, only the first valid record (if any) is used during the processing of the input data file;  the other records containing that alias name are validated but are otherwise ignored.  It is the user’s responsibility to insure that the alias file does not have multiple records containing the same alias name.  GBAT issues no warning message indicating the existence of such records.
