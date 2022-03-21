<h2>IX.7  The Output File of Accepted Records (DDNAME=OUTFILE)</h2>

 This optional output file contains a record corresponding to each input data record accepted by Geosupport.  The user can specify whether OUTFILE is to be created, and if so, how its records are to be constituted, using the GEOCODE control entry.  (The GEOUNIT control entry also plays a role in determining how the OUTFILE records are constituted.  GEOUNIT is discussed later in this section.)  The user can specify whether warnings are to be treated as accepted records or as rejects using the REJECTWARNINGS control entry.  These control entries are discussed in detail below.  

 <u>Controlling the Creation and Contents of OUTFILE with GEOCODE (and GEOUNIT)  </u>
 GBAT creates either two or three output files, depending on the (coded or default) value in effect for the GEOCODE control entry.  If GEOCODE=VAL is explicitly coded (it is never the default), only ERRFILE and SYSPRINT are created.  If the value in effect for GEOCODE is other than VAL, then OUTFILE, the file of accepted records, is also created.  When GEOCODE=YES or ALL, then ERRFIL2 or ERRFIL3 may also be created.  

 The purpose of the option GEOCODE=VAL is to enable the user to validate the input data file while avoiding the execution-time overhead that would be incurred to create OUTFILE.  The user can execute GBAT repeatedly with GEOCODE=VAL, each time correcting as many rejected input data records as possible, until the rejection rate is acceptable to the user.  At that point, a final execution with GEOCODE=NO, YES or ALL can be run to obtain OUTFILE.

 In all cases in which OUTFILE is created, its records are formed by appending data obtained from Geosupport to exact copies of the accepted input data records.  The length and layout of the appended Geosupport data depend on the function requested and on the GEOCODE option that is in effect (and, for COW Functions 1, 1E, 1A and 1B, the GEOUNIT option that is in effect) as described below.

 <u>For GEOCODE=NO</u>, the appended items consist generally of output items from Work Area 1 appropriate to the given function.   For MSW format, [Table A9-4](../../../appendices/appendix09/#appendix09-tblA9-4) in Appendix 9 lists, by function, the precise layout of the data appended for GEOCODE=NO. For the COW format, see [Table A12-2](../../../appendices/appendix12/#appendix12-tblA12-2) in Appendix 12.  

 <u>For GEOUNIT=YES (which is a COW only option)</u>, the additional appended items consist of one output item from COW Work Area 1 appropriate to the Unit input for Functions 1, 1E, 1A and 1B.  [Table A12-2A](../../../appendices/appendix12/#appendix12-tblA12-2A) in Appendix 12 shows the format of the appended data.

 In general terms, the items that are appended <u>for GEOCODE=NO (and GEOUNIT=YES)</u> are as follows:  


* For functions involving street names, the appended information includes normalized street name(s) and Geosupport street code(s).  All normalized street names are provided as 32 byte items, blank filled on the right as necessary.  All MSW street codes are provided as ten digit street codes without a borough code (10SCs); all COW street codes are provided as eleven digit street codes with a borough code (B10SCs).

* For functions involving house numbers, normalized house numbers are appended.  For Functions 1, 1A, 1E, and 1B each normalized house number is returned as follows: the normalized House Number in Display format (HND) which will be either a 12 byte item in MSW format or a 16-byte item in COW format.  Also, for MSW format only, the normalized House Number is returned in a special format for the Department of Housing Preservation and Development (HNHPD), an 8 byte item.  For Functions D, DG and DN, the HNHPD is not returned.

* In addition, for COW Functions 1, 1E, 1A and 1B, if <u>GEOUNIT=YES</u> is in effect, the 14-byte Normalized Display Format Unit Output field is also appended.  [Table A12-2A](../../../appendices/appendix12/#appendix12-tblA12-2A) in Appendix 12 shows the format of the appended data

* For Function BL, the 10-byte BBL in standard format is appended.  (The standard BBL consists of the borough code, the 5-byte tax block and the 4-byte tax lot.)

* For Function BN, the 7-byte BIN is appended.

<u>For GEOCODE=YES</u>, each OUTFILE record is formed by appending to a copy of the input record the entire Work Area 2.  (See [Appendix 2](../../../appendices/appendix02/) and [Appendix 13](../../../appendices/appendix13/) for Geosupport work area layouts, MSW and COW respectively.)  GEOCODE=YES is invalid for functions that do not have a WA2.  For functions that have the long WA2 option, the long WA2 is appended only if the user has explicitly specified LONGWA2=YES in the GBAT control file; if the user specifies LONGWA2=NO, or does not specify a LONGWA2 control entry, then the regular WA2 is appended.  Similarly for COW functions that have the Extended Mode option (MODE=X) and/or the Auxiliary Segment option (AUXSEG=YES) the larger WA2 will be appended only if the option is specifically requested.

<u>For GEOCODE=ALL</u>, each OUTFILE record is formed by concatenating an exact copy of the input record, followed by the data appended for the given function when GEOCODE=NO is specified (as listed in Table A9-4 in [Appendix 9](../../../appendices/appendix09/#appendix09-tblA9-4) for MSW and [Table A12-2](../../../appendices/appendix12/#appendix12-tblA12-2)  in Appendix 12 for COW), followed by the data appended when <u>GEOCODE=YES</u> is specified.  Note, for COW Functions 1, 1E, 1A and 1B when GEOUNIT=YES is specified, the GEOUNIT=YES data appears between the GEOCODE=NO data and the GEOCODE=YES data.  GEOCODE=ALL is invalid for functions that do not have a WA2.

For MSW, [Table A9-5](../../../appendices/appendix09/#appendix09-tblA9-5) in Appendix 9 lists the length of the appended data by function and GEOCODE value.  For COW, see [Table A12-3](../../../appendices/appendix12/#a12-3) in Appendix 12.  When setting up the JCL, the user must specify the LRECL parameter in the OUTFILE DD statement to equal the sum of the LRECL of the input data file and the length of the appended data as indicated in Table A9-5 for MSW, and Table A12-3 for COW.

<u>Controlling the Treatment of Warnings with REJECTWARNINGS</u>  
Every input data record that produces a Geosupport Return Code (GRC) of ‘00’ is treated as an accepted record;  that is, the following actions are taken:

* If OUTFILE is being created, GBAT writes a corresponding output record into OUTFILE.

* Regardless of whether or not OUTFILE is being created, the record contributes to the count of accepted records that appears in the SYSPRINT report of run statistics (see [Chapter IX.9](../section09/))

* If the record is within the scope of the MAXREJECTS triggering set (see [Chapter IX.3](../section03/)), it precludes a MAXREJECTS abnormal termination.  

Every input data record that produces a GRC of greater than ‘01’ is treated as a reject;  that is, the following actions are taken:

* GBAT writes a corresponding output record into ERRFILE (and ERRFIL2 and ERRFIL3 as needed), the output file of rejected records.

* The record contributes to the count of rejected records that appears in the SYSPRINT report of run statistics (see [Chapter IX.9](../section09/))

* Unless the record is rejected for an invalid borough code, it is counted as a rejected record for the purpose of determining whether a MAXREJECTS abnormal termination is to be triggered.  

At the user’s discretion, input data records that produce warnings (GRC = ‘01’) either can all be treated as accepted records or they can all be treated as rejects.  This choice is specified using the optional REJECTWARNINGS control entry, as follows:

* If REJECTWARNINGS=YES is specified, only the GRC ‘00’ records are treated as accepted records;  GRC ‘01’ records are treated as rejects.

* If REJECTWARNINGS=NO is specified, then the GRC ‘01’ records as well as the GRC ‘00’ records are treated as accepted records.

* (Default) If no REJECTWARNINGS control entry is supplied, then the default value is NO;  that is, the GRC ‘01’ records as well as the GRC ‘00’ records are treated as accepted records.  

<br />
