<h2 class="pdfAppendix"><center>APPENDIX 10: SAMPLE GBAT JOBS</center></h2>  


This appendix contains printouts of two sample GBAT jobs, referred to as Sample Job 1 and Sample Job 2.  Sample Job 1 executes Function 1A.  Sample Job 2 executes Function 2.  

For each sample job, this appendix contains a description of the control file, followed by listings of the job-stream input and the job output.  The job-stream input listing contains the JCL, the in-stream control file, the in-stream data input file, and for Sample Job 2 only, the in-stream ALIASES input file.  An ALIASES file is not used in Sample Job 1.  The job output listing contains the system job-stream output, the GBAT output report of messages and run statistics, and the output file of GBAT rejects.  

GSS developed and ran the sample jobs on the DoITT/Computer Service Center mainframe.  Some variations from the JCL shown herein may be necessary for users running on other computers.  In addition, the JCL shown has been modified to remove account-specific references.  

Please note that the GBAT samples are not guaranteed to run exactly as shown in this appendix.  The samples are here as an aid in developing GBAT runs.  

Note: The GBAT samples are MSW format samples.  To run using the COW format, add the GBAT control entry WORKAREA=COW to the in-stream control files and update the LRECL of the OUTFILE DD card appropriately.


## <span id="appendix10.1">SAMPLE GBAT JOB #1  </span>

<h4>SAMPLE GBAT JOB 1:  DESCRIPTION </h4>  

The control file for Sample GBAT Job 1 is as follows:  

      BORO=9,1   RECTYPE=1A    ONSTREET=15,20    1ABLVERSION=S
       TITLE=THIS IS GBAT CONTROL FILE EXAMPLE 1;  

In this example, the user has chosen to code several control entries in a single control record, followed by a second control record containing a heading for the SYSPRINT output file.  In the first control record, the order in which the control entries are coded, their precise positioning within the control record and the amount of spacing between them are immaterial.

The control file in this example contains the following control entries.  (See [Table A9-1](../appendix09/#table-a9-1-gbat-control-entry-descriptions-by-keyword) for Control Entry Descriptions)  

  * BORO specifies that the input borough code field is in position 9 of the INFILE records and is one byte long.  

  * RECTYPE specifies Function 1A.  

  * ONSTREET specifies that the input street name field starts in position 15 of the INFILE records and is 20 bytes long.

  * 1ABLVERSION specifies that the standard version of Function 1A is to be executed.  This control entry is required with the MSW format.  The Legacy version of Function 1A is no longer supported.  

  * TITLE specifies a title for the SYSPRINT output report.  Notice that the text of the title is terminated with a semicolon character, as required.  (The semicolon does not appear in the actual report.)  

The user has chosen not to code the following control entries, the default values for which are therefore in effect: (See [Table A9-2](../appendix09/#table-a9-2-summary-of-gbat-control-entries-by-keyword) for Control Entry default values.)

  * Since the control entry VSAM has not been coded, GBAT will assume that the user input data file is a sequential file.  Consequently, GBAT will access the input data file via the DDname INFILE, and the corresponding DD statement in the JCL must be coded accordingly.  

	 * Since the control entry GEOCODE has not been coded, and Function 1A is being executed, the default value of YES is in effect.  This causes GBAT to issue a two‑work‑area call and to append Work Area 2 for Function 1A to the successfully processed INFILE records in forming the OUTFILE records.  

   * Since the control entry ALIASES has not been coded, the default value of NO is in effect.  Therefore, GBAT will not use temporary user-defined aliases when processing input street names;  if an ALIASES DD statement has been included in the JCL, it will be ignored.

   * Since the control entries MANHATTAN, BRONX etc. have not been coded, GBAT will assume that the input borough code field contains the default borough code values, which are the standard Geosupport borough codes (‘1’ for Manhattan, ‘2’ for the Bronx, etc.).  

   * Since HNI (or HNS for COW) has not been coded, GBAT will assume that input house numbers are not necessarily normalized and are in display format rather than in the HNI (or HNS for COW) format.  

   * Since HOUSENUM has not been coded, GBAT will assume that the input street name field specified by ONSTREET contains a free‑form address (a house number followed by a street name).  Note that since in this GBAT run input addresses are free-form, partial street names (see [Chapter III.4](../../chapters/chapterIII/section04)) will be rejected.

   * Since COMPACT has not been coded, GBAT will return normalized street names in a format suitable for sorting, rather than in the compact format.  

   * Since REJECTWARNINGS has not been coded, the default value of NO is in effect, so warnings will be treated as successfully processed records:  they will be written to OUTFILE, they will be counted as successfully processed records in the SYSPRINT report, and they will not be counted as rejects towards the MAXREJECTS termination limit.  

   * Since MAXREJECTS has not been coded, the default value of ‘200’ is in effect, so that GBAT will terminate with an MVS Return Code of ‘20’ if the first 200 INFILE records all result in rejects for any reason other than an invalid borough code.					

   * Since the SNL control entry has not been coded, GBAT will assume the default value of SNL=32 when normalizing street names.  

   * Since LONGWA2=YES has not been coded, GBAT will return the regular WA2 for Function 1A.  

   * Since the WORKAREA control entry has not been coded, GBAT will assume the default value of MSW (Mainframe Specific Work Area).  

<h4> SAMPLE GBAT JOB 1:  JOB-STREAM INPUT </h4>  

            //EXAMPLE1 JOB YOUR-JOB-CARD-INFORMATION
            //*
            //*
            //*******************************************************************
            //************     THIS JOB IS GBAT MSW EXAMPLE 1     ***************
            //*******************************************************************
            //*********   THIS STEP INVOKES THE STANDARD CATALOGUED      ********
            //*********   PROCEDURE FOR GBAT EXECUTION, CALLED GBAT2     ********
            //*******************************************************************
            //S1 EXEC GBAT2
            //*******************************************************************
            //*********   CARDIN IS THE USER-PROVIDED CONTROL FILE       ********
            //*******************************************************************
            //CARDIN DD *
            BORO=9,1  RECTYPE=1A ONSTREET=15,20 1ABLVERSION=S
            TITLE=THIS IS GBAT CONTROL FILE MSW EXAMPLE 1;
            /*
            //*******************************************************************
            //*********   INFILE IS THE USER-PROVIDED INPUT DATA.          ******
            //*********   IN THIS EXAMPLE, IT IS PROVIDED AS INSTREAM DATA.******
            //*******************************************************************
            //INFILE DD *
                  1     100 GARAGE CENTRE ST
                  1     22  READE ST
                  1     36  READE ST
                  1     60  READE             ** PARTIAL STREET NAMES NOT ALLOWED
                  1     12  ELK               ** IN FREE-FORM ADDRESSES
                  1     12  ELK ST
                  1     310   BWY
                  1     99 W 3 ST
                  2     709 E 165 ST
                  2     187C  EDGEWATER PK
                  4     229-16 87 AVE
                  2     1475  LONGFELLOW AV
                  1     2053 ADAM POWELL BL
                  1     310   1 AVE
                  /*
            //*******************************************************************
            //*********   OUTFILE IS THE UT FILE OF SUCCESSFULLY     ********
            //*********   PROCESSED INFILE RECORDS.                      ********
            //*******************************************************************
            //OUTFILE DD DSN=&&OUT1A,DISP=(NEW,PASS),
            //        UNIT=SYSDA,SPACE=(TRK,(80,20),RLSE),
            //        DCB=(RECFM=FB,LRECL=1019)
            //*******************************************************************
            //*** ERRFILE IS THE OUTPUT FILE OF REJECTED INFILE RECORDS.      ***
            //*********   INFILE RECORDS.                                ********
            //ERRFILE DD SYSOUT=A,DCB=(RECFM=FB,LRECL=84)
            //*******************************************************************
            //*** AS OF GEOSUPPORT VERSION 10.0, DD STATEMENTS FOR GEOSUPPORT ***
            //*** DATA FILES (E.G. GRID, PAD, ETC) ARE NO LONGER NEEDED       ***
            //*** AND ARE IGNORED.  GEOSUPPORT IS TAILORED TO USE STANDARD    ***
            //*** GEOSUPPORT DATA SET NAMES.                                  ***
            //*** TO USE NON-STANDARD FILES, SEE YOUR SYSTEMS PROGRAMMER.     ***
            //*******************************************************************
            //


<h4>SAMPLE GBAT JOB 1:  OUTPUT</h4>  

            J E S 2  J O B  L O G  --  S Y S T E M  M V S P  --  N O D E  C S C B A T C H
            10.29.19 JOB17476 ---- FRIDAY,    DD MMMM YYYY ----
            10.29.19 JOB17476  IRR010I  USERID YOURUID  IS ASSIGNED TO THIS JOB.
            10.29.19 JOB17476  ICH70001I YOURUID  LAST ACCESS AT 10:27:49 ON FRIDAY, MMMM DD, YYYY
            10.29.19 JOB17476  $HASP373 EXAMPLE1 STARTED - INIT 84   - CLASS X - SYS MVSP
            10.29.19 JOB17476  IEF403I EXAMPLE1 - STARTED - TIME=10.29.19
            10.29.19 JOB17476  +GBI SUCCESSFULLY LOADED GBIDRV
            10.29.20 JOB17476  +GBIDRV (VERSION VV.V) INVOKED
            10.29.20 JOB17476  +GEO (VERSION VV.V) INVOKED
            10.29.20 JOB17476  +snd NNN  OPENED SUCCESSFULLY
            10.29.20 JOB17476  +PAD NNN  'B030.GEO.COW.BLDGS.CITY' OPENED SUCCESSFULLY
            10.29.20 JOB17476  -                                                --TIMINGS (MINS.)--            ----PAGING COUNTS---
            10.29.20 JOB17476  -JOBNAME  STEPNAME PROCSTEP    RC   EXCP   CONN    TCB    SRB  CLOCK   SERV  PG  PAGE  SWAP   VIO
            10.29.20 JOB17476  -EXAMPLE1 S1       GBAT2       00    787    142    .00    .00     .0   1198   0     0     0     0     
            10.29.20 JOB17476  IEF404I EXAMPLE1 - ENDED - TIME=10.29.20
            10.29.20 JOB17476  -EXAMPLE1 ENDED.  NAME-YOURUID              TOTAL TCB CPU TIME=   .00  TOTAL ELAPSED TIME=    .0
            10.29.20 JOB17476  $HASP395 EXAMPLE1 ENDED

            ------ JES2 JOB STATISTICS ------

            DD MMMM YYYY JOB EXECUTION DATE

                   60 CARDS READ

                  208 SYSOUT PRINT RECORDS

                    0 SYSOUT PUNCH RECORDS

                   15 SYSOUT SPOOL KBYTES


                 0.01 MINUTES EXECUTION TIME
        
                 1 //EXAMPLE1 JOB YOUR-JOB-CARD-INFORMATION
                   //*
                   //*
                   //*******************************************************************
                   //************     THIS JOB IS GBAT MSW EXAMPLE 1     ***************
                   //*******************************************************************
                   //*******************************************************************
                   //*********   THIS STEP INVOKES THE STANDARD CATALOGUED      ********
                   //*********   PROCEDURE FOR GBAT EXECUTION, CALLED GBAT2     ********
                   //*******************************************************************
                 3 //S1 EXEC GBAT2
                 4 XXGBAT2 PROC                                                            00000100
                   XX**                          /* IN CSC.TEST.PROCLIB * /                 00000200
                   XX**                          /* MODIFIED 06/30/06  BY MEB   * /         00000315
                   XX**                          /* ADDED SUPPORT.PDSE.LOADLIB  * /         00000415
                   XX**                          /* REMOVED DD CARDS            * /         00000515
                   XX**                          /* MODIFIED 05/11/06  BY MEB   * /         00000615
                   XX**                          /* ADDED GRID1R FILE           * /         00000715
                   XX**                          /* MODIFIED 07/25/05  BY MEB   * /         00000815
                   XX**                          /* PEDFILE BECOMES DUMMY FILE  * /         00000915
                   XX**                          /* MODIFIED 03/26/02  BY MEB   * /         00001015
                   XX**                                                                    00001115
                   XX**** WARNING: DO NOT OVERRIDE THE REGION PARAMETER  **************    00001215
                   XX**                                                                    00001315
                 5 XXGBAT2 EXEC PGM=GBATIO2,REGION=9M,PARM='ISASIZE(40K)'                  00001415
                   XX*                                                                     00001516
                   XX****************************************************************/     00001616
                   XX*                                                              * /     00001716
                   XX*   AS OF GEOSUPPORT VERSION 10.0,                             * /     00001816
                   XX*   THE STEPLIB (OR JOBLIB) OF THE GEOSUPPORT EXECUTION STEP   * /     00001916
                   XX*   MUST INCLUDE THE FOLLOWING TWO CONCATENATED DATASETS:      * /     00002016
                   XX*               A030.GEO.SUPPORT.PDSE.LOADLIB                  * /     00002116
                   XX*               A030.GEO.SUPPORT.LOADLIB                       * /     00002216
                   XX*                                                              * /     00002316
                   XX****************************************************************/     00002416
                   XX*                                                                     00002516
                   XX*                                                                     00002616
                 6 XXSTEPLIB DD DSN=A030.GEO.SUPPORT.PDSE.LOADLIB,DISP=SHR                 00002716
                 7 XX        DD DSN=A030.GEO.SUPPORT.LOADLIB,DISP=SHR                      00002816
                   XX*                                                                     00002916
                   XX*                                                                     00003016
                   XX****************************************************************/     00003116
                   XX*                                                              * /     00003216
                   XX*   AS OF GEOSUPPORT VERSION 10.0,                             * /     00003316
                   XX*   DD STATEMENTS FOR GEOSUPPORT DATA FILES (E.G. GRID, PAD    * /     00003416
                   XX*   ETC) ARE NO LONGER NEEDED AND ARE IGNORED.  GEOSUPPORT     * /     00003516
                   XX*   IS TAILORED TO USE STANDARD GEOSUPPORT DATA SET NAMES.     * /     00003616
                   XX*   TO USE NON-STANDARD FILES, SEE YOUR SYSTEMS PROGRAMMER.    * /     00003716
                   XX*                                                              * /     00003816
                   XX****************************************************************/     00003916
                   XX*                                                              * /     00004016
                   XX*                                                              * /     00004116
                 8 XXSYSPRINT DD SYSOUT=A,DCB=(LRECL=133,RECFM=FBA,BLKSIZE=1330)           00004216
                   XX** SYSPRINT FILE CONTAINS RUN STATISTICS AND MESSAGES                 00004316
                 9 XXSYSTERM  DD SYSOUT=A,DCB=(LRECL=133,RECFM=FBA,BLKSIZE=1330)           00004416
                   XX** SYSTERM FILE CONTAINS SYSTEM WARNINGS AND ERRORS                   00004516
                10 //CARDIN DD *
                   X/CARDIN DD DDNAME=CARDIN                                               00004616
                   XX** CARDIN IS THE FILE OF GBAT CONTROL RECORDS                         00004716
                11 //INFILE DD *
                   X/INFILE DD DDNAME=INFILE                                               00004816
                   XX** INFILE CONTAINS THE USERS DATA INPUT RECORDS                       00004916
                12 //OUTFILE DD DSN=&&OUT1A,DISP=(NEW,PASS),
                   //        UNIT=SYSDA,SPACE=(TRK,(80,20),RLSE),
                   //        DCB=(RECFM=FB,LRECL=1019)
                   X/OUTFILE DD DDNAME=OUTFILE                                             00005016
                   XX** OUTFILE CONTAINS THE VALID OUTPUT RECORDS                          00005116
                13 //ERRFILE DD SYSOUT=A,DCB=(RECFM=FB,LRECL=84)
                   X/ERRFILE DD DDNAME=ERRFILE                                             00005216
                   XX** ERRFILE CONTAINS THE REJECTS                                       00005316
                14 XXALIASES  DD DUMMY                                                     00005416
                   XX** ALIASES IS THE OPTIONAL INPUT FILE OF USER-DEFINED ST NAME ALIASES 00006015
                   //*******************************************************************
                   //*********   CARDIN IS THE USER-PROVIDED CONTROL FILE       ********
                   //*******************************************************************
                   //*******************************************************************
                   //*********   INFILE IS THE USER-PROVIDED INPUT DATA.          ******
                   //*********   IN THIS EXAMPLE, IT IS PROVIDED AS INSTREAM DATA.******
                   //*******************************************************************
                   //*******************************************************************
                   //*********   OUTFILE IS THE OUTPUT FILE OF SUCCESSFULLY     ********
                   //*********   PROCESSED INFILE RECORDS.                      ********
                   //*******************************************************************
                   //*******************************************************************
                   //*********   ERRFILE IS THE OUTPUT FILE OF REJECTED         ********
                   //*********   INFILE RECORDS.                                ********
                   //*******************************************************************
                  //*******************************************************************
                   //*********   AS OF GEOSUPPORT VERSION 10.0,                 ********
                   //*********   DD STATEMENTS FOR GEOSUPPORT DATA FILES (E.G.  ********
                   //*********   GRID, PAD, TABFILE ETC) ARE NO LONGER NEEDED   ********
                   //*********   AND ARE IGNORED.  GEOSUPPORT IS TAILORED TO    ********
                   //*********   USE STANDARD GEOSUPPORT DATA SET NAMES.        ********
                   //*********   TO USE NON-STANDARD FILES, PLEASE SEE YOUR     ********
                   //*********   SYSTEMS PROGRAMMER.                            ********
                   //*******************************************************************
                   //*******************************************************************
                   STMT NO. MESSAGE
                3 IEFC001I PROCEDURE GBAT2 WAS EXPANDED USING PRIVATE LIBRARY CSC.TEST.PROCLIB
                ICH70001I YOURUID  LAST ACCESS AT 10:27:49 ON FRIDAY, MMMM DD, YYYY
                IEF236I ALLOC. FOR EXAMPLE1 GBAT2 S1
                IGD103I SMS ALLOCATED TO DDNAME STEPLIB
                IGD103I SMS ALLOCATED TO DDNAME
                IEF237I JES2 ALLOCATED TO SYSPRINT
                IEF237I JES2 ALLOCATED TO SYSTERM
                IEF237I JES2 ALLOCATED TO CARDIN
                IEF237I JES2 ALLOCATED TO INFILE
                IGD101I SMS ALLOCATED TO DDNAME (OUTFILE )
                  DSN (SYS06195.T102919.RA000.EXAMPLE1.OUT1A.H01   )
                  STORCLAS (PRIMARY) MGMTCLAS (        ) DATACLAS (        )
                  VOL SER NOS= SMST01
                IEF237I JES2 ALLOCATED TO ERRFILE
                IEF237I DMY  ALLOCATED TO ALIASES
                GBI SUCCESSFULLY LOADED GBIDRV
                GBIDRV (VERSION VV.V) INVOKED
                GEO (VERSION VV.V) INVOKED
                snd NNN  OPENED SUCCESSFULLY
                IGD103I SMS ALLOCATED TO DDNAME SYS00001
                PAD NNN  'B030.GEO.COW.BLDGS.CITY' OPENED SUCCESSFULLY
                IEF142I EXAMPLE1 GBAT2 S1 - STEP WAS EXECUTED - COND CODE 0000
                IGD104I A030.GEO.SUPPORT.PDSE.LOADLIB                RETAINED,  DDNAME=STEPLIB
                IGD104I A030.GEO.SUPPORT.LOADLIB                     RETAINED,  DDNAME=
                IEF285I   YOURUID.EXAMPLE1.JOB17476.D0000103.?         SYSOUT
                IEF285I   YOURUID.EXAMPLE1.JOB17476.D0000104.?         SYSOUT
                IEF285I   YOURUID.EXAMPLE1.JOB17476.D0000101.?         SYSIN
                IEF285I   YOURUID.EXAMPLE1.JOB17476.D0000102.?         SYSIN
                IEF285I   YOURUID.EXAMPLE1.JOB17476.D0000105.?         SYSOUT
                IGD104I B030.GEO.COW.BLDGS.CITY                      RETAINED,  DDNAME=SYS00001
                IEF373I STEP/GBAT2   /START 2006195.1029
                IEF374I STEP/GBAT2   /STOP  2006195.1029 CPU    0MIN 00.06SEC SRB    0MIN 00.00SEC VIRT   928K SYS   308K EXT    8768K SYS   11284K
                IEF237I E001 ALLOCATED TO SYS00002
                IEF285I   SYS06195.T102920.RA000.EXAMPLE1.R0170302     KEPT
                IEF285I   VOL SER NOS= SMST01.
                IGD105I SYS06195.T102919.RA000.EXAMPLE1.OUT1A.H01    DELETED,   DDNAME=OUTFILE
                IEF375I  JOB/EXAMPLE1/START 2006195.1029
                IEF376I  JOB/EXAMPLE1/STOP  2006195.1029 CPU    0MIN 00.06SEC SRB    0MIN 00.00SEC
        
                ************************************************************************
                *****  NOTE:  THIS IS PART OF THE SYSPRINT OUTPUT
                ************************************************************************
                0USER CONTROL CARDS:

                BORO=9,1  RECTYPE=1A ONSTREET=15,20 1ABLVERSION=S
                TITLE=THIS IS GBAT CONTROL FILE MSW EXAMPLE 1;

                WARNING: CONTROL ENTRIES FOR BOROUGH CODES ARE MISSING - ASSUMED VALUES FOLLOW.
                WARNING: GEOCODE IS MISSING. A DEFAULT VALUE OF YES IS IN EFFECT.
                WARNING: HNI IS MISSING OR UNDEFINED. A DEFAULT VALUE OF NO  IS IN EFFECT.
                WARNING: SNL IS MISSING. A DEFAULT VALUE OF 32 IS IN EFFECT.
                WARNING: MAXREJECTS IS MISSING. A DEFAULT VALUE OF 200 IS IN EFFECT.
                WARNING: REJECTWARNINGS IS MISSING. A DEFAULT VALUE OF NO IS IN EFFECT.
                WARNING: ALIASES IS MISSING. A DEFAULT VALUE OF NO IS IN EFFECT.

                PARAMETERS BEING USED:
                BOROUGH STARTS IN               9               FOR A LENGTH OF                 1
                STREET 1 STARTS IN             15               FOR A LENGTH OF                20
                NORMALIZED STREET LENGTH:                              32
                THE VALUE OF 1ABLVERSION IS:                    S
                RECORD TYPE SPECIFIED: FUNCTION 1A
                THE VALUE OF GEOCODE IS:                        YES
                THE VALUE OF ALIASES IS:                        NO
                THE VALUE OF HNI IS:    NO
                BOROUGH CODE FOR MANHATTAN IS:                  1
                BOROUGH CODE FOR THE BRONX IS:                  2
                BOROUGH CODE FOR BROOKLYN IS:                   3
                BOROUGH CODE FOR QUEENS IS:                     4
                BOROUGH CODE FOR STATEN ISLAND IS:              5
        
                ************************************************************************
                *****  NOTE:  THIS IS PART OF THE SYSPRINT OUTPUT
                ************************************************************************

                ***********************    STATISTICS  *********************************

                THIS IS GBAT CONTROL FILE MSW EXAMPLE 1                                                                         MM/DD/YY

                                                    GEOSUPPORT BATCH ADDRESS TRANSLATOR

                                           MANHATTAN          BRONX       BROOKLYN         QUEENS     STATEN IS.           TOTAL

                INPUT RECORDS               10                  3              0              1            0               14(* )

                ACCEPTED RECORDS            8                   2              0              1            0               11

                REJECTED RECORDS:

                28 - A PARTIAL STREET NAME MAY NOT BE USED IN A
                FREE-FORM ADDRESS:          2                   0              0              0            0                 2

                42 - ADDRESS NUMBER OUT OF RANGE         
                                            0                   1              0              0            0                 1

                TOTAL REJECTED RECORDS EXCEPT CODES 17 AND 99:
                                            2                   1              0              0            0                 3

                17+99 - BLANK AND INVALID BOROUGH CODES                                                                      0

                TOTAL REJECTED RECORDS                                                                                       3

                (* ) NOTE  - THIS TOTAL INCLUDES RECORDS WITH INVALID BOROUGH CODES
        
                ***********************************************************************************************************
                *****  NOTE:  THIS IS A PRINTOUT OF ERRFILE.  THE FIRST FOUR BYTES CONSIST OF THE TWO-BYTE GEOSUPPORT RETURN CODE (GRC)
                *****      FOLLOWED BY A DASH ('-'), FOLLOWED BY A ONE-BYTE REASON CODE, IF ANY.  IN THIS EXAMPLE, THERE ARE 3 REJECTED
                *****      RECORDS. TWO HAVE A GRC VALUE OF '28' AND NO REASON CODE VALUE. THE THIRD REJECT HAS A GRC VALUE OF '42' AND
                *****      NO REASON CODE VALUE. REFER TO THE GBAT STATISTICS REPORT OR TO [APPENDIX 4](../appendix04) FOR THE MESSAGES CORRESPONDING TO
                *****      THE OCCURRING GRC'S.  AFTER THE FIRST FOUR BYTES, THE REST OF THE ERRFILE RECORD CONSISTS OF A COPY OF THE
                *****      REJECTED INFILE RECORD.
                ***********************************************************************************************************

                28-         1     60  READE             ** PARTIAL STREET NAMES NOT ALLOWED
                28-         1     12  ELK               ** IN FREE-FORM ADDRESSES
                42-         2     709 E 165 ST  


## <span id="appendix10.2">SAMPLE GBAT JOB #2 </span>
<h4> SAMPLE GBAT JOB 2:  DESCRIPTION </h4>  

The control file for Sample GBAT Job 2 is as follows:  

  ALIASES=YES <br>
  TITLE=THIS IS GBAT CONTROL FILE EXAMPLE 2; <br>
  RECTYPE=2 <br>
  BORO=5,2 <br>
  MANHATTAN=MN <br>
  BRONX=BX <br>
  BROOKLYN=BK <br>
  QUEENS=QN <br>
  STATEN=SI <br>
  ONSTREET=8,25 <br>
  CROSS1=33,25 <br>
  GEOCODE=ALL <br>
  COMPASS=65,1 <br>
  COMPACT=YES <br>
  REJECTWARNINGS=YES <br>
  MAXREJECTS=75 <br>  

  In this example, the user has chosen to code each control entry in a separate control record.  The user has chosen to align the control entries vertically for aesthetic reasons, although the positioning of each control entry within its control record and the order in which the control entries is codes are immaterial.

The control file in this example contains the following control entries.  (See [Table A9-1](../appendix09/#table-a9-1-gbat-control-entry-descriptions-by-keyword) for Control Entry Descriptions.)

* Since ALIASES=YES has been coded, the user must provide an ALIASES file in the required format (described in [Chapter XI  .6](../../chapters/chapterXI/section06)), and must provide a DD statement in the JCL referring to that file.  GBAT will validate the user’s ALIASES file, and will then use the valid street name aliases it contains when processing INFILE.  Any invalid aliases will be ignored when processing INFILE, but will be reported in SYSPRINT.  

* The TITLE control entry specifies a title for the SYSPRINT output report.  Notice that the text of the title is terminated with a semicolon character, as required.  (The semicolon does not appear in the actual report.)

* The control entry RECTYPE specifies Function 2.  

* The control entry BORO specifies that the input borough code field is in position 5 of the INFILE records and is two bytes long.  The input borough code values in this example are not the standard Geosupport borough codes, but are specified as user-defined two-character alphabetic borough codes, ‘MN’, ‘BX’, etc., as shown.

* Function 2 requires two input street fields, which in this example are in the form of street names rather than street codes. These fields are specified using the control entries ONSTREET and CROSS1, which state that these fields begin in positions 8 and 33 of the INFILE records, and that each field is 25 bytes long.  

* GEOCODE=ALL has been specified, so GBAT will issue a two‑work‑area call to Function 2 and will form the OUTFILE records by appending the normalized street names and street codes, as well as Work Area 2, to the successfully processed INFILE records.  

* The control entry COMPASS specifies an INFILE field for an input compass direction.  (Function 2 requires an input compass direction for intersections that are specified in terms of a pair of streets that intersect twice (see [Chapter VII.2](../../chapters/chapterVII/section02)).  If INFILE contains no such intersections, the control entry COMPASS is not required.)

* COMPACT=YES has been specified, directing GBAT to return all normalized street names in the compact format, which is suitable for display but not for use in sorting.  

* REJECTWARNINGS=YES directs GBAT to treat warnings as rejects:  they will be written to ERRFILE instead of OUTFILE, they will be counted as errors in the SYSPRINT report, and they will count towards the MAXREJECTS termination limit.  

* Since MAXREJECTS=75 has been coded, GBAT will terminate with an MVS Return Code of ‘20’ if the first 75 INFILE records all result in rejects or warnings for any reason other than an invalid borough code.  

The user has chosen not to code the following control entries, the default values for which are therefore in effect: (See [Table A9-2](../appendix09/#table-a9-2-summary-of-gbat-control-entries-by-keyword) for Control Entry default values.)  

* Since the control entry VSAM has not been coded, GBAT will assume that the user input data file is a sequential file.  Consequently, GBAT will access the input data file via the DDname INFILE, and the corresponding DD statement in the JCL must be coded accordingly.  

* Since the SNL control entry has not been coded, GBAT will assume the default value of SNL=32 when normalizing street names.

* Since the WORKAREA control entry has not been coded, GBAT will assume the default value of MSW (Mainframe Specific Work Area).

<h4>SAMPLE GBAT JOB 2:  JOB-STREAM INPUT </h4>  

    //EXAMPLE2 JOB YOUR-JOB-CARD-INFORMATION
    //*
    //*
    //*******************************************************************
    //************     THIS JOB IS GBAT MSW EXAMPLE 2     ***************
    //*******************************************************************
    //*******************************************************************
    //*********   THIS STEP INVOKES THE STANDARD CATALOGUED     *********
    //*********   PROCEDURE FOR GBAT EXECUTION, CALLED GBAT2    *********
    //*******************************************************************
    //S1 EXEC GBAT2
    //*******************************************************************
    //*********   CARDIN IS THE USER-PROVIDED CONTROL FILE       ********
    //*******************************************************************
    //CARDIN DD *
    ALIASES=YES
    TITLE=THIS IS GBAT CONTROL FILE MSW EXAMPLE 2;
    BORO=5,2
    RECTYPE=2
    MANHATTAN=MN
    BRONX=BX
    BROOKLYN=BK
    QUEENS=QN
    STATEN=SI
    ONSTREET=8,25
    CROSS1=33,25
    GEOCODE=ALL
    COMPASS=65,1
    COMPACT=YES
    REJECTWARNINGS=YES
    MAXREJECTS=75
    /*
    //*******************************************************************
    //*********   INFILE IS THE USER-PROVIDED INPUT DATA.          ******
    //*********   IN THIS EXAMPLE, IT IS PROVIDED AS INSTREAM DATA.******
    //*******************************************************************
    //INFILE DD *
      MN READE ST                 BROADWAY
      MN REED ST                  BROADWAY
      MN CANAL ST                 ALLEN ST                        E
      MN CANEL ST                 ALLEN ST                        E
      MN CANAL ST                 ALEN ST                         E
      MN CANEL ST                 ALEN ST                         S
      BK ASSEMBLY RD              GEE AV
      BK ASEMBLY RD               GEE AV
      BK ASSEMBLY RD              GE AV
      BK ASEMBLY RD               GE AV
      MN MAIN ST                  RIVER RD                        S
      MN MAN ST                   RIVER RD                        S
      MN MAIN ST                  RIVE RD                         S
      MN MAN ST                   RIVE RD
      SI HAVEN ESPLN              SILVER LAKE RD
      SI HAVEN ESPLN              SILVER LAKE RD                  N
      QN 116 ST                   CURZON RD                       S
      BX MARINE ST                CITY ISLAND AV                  N
      BX MARINE ST                CITY ISLAND AV
      BX PAULDING AV              SACKET AV                       N
      BK FLATBUSH AV              BEVERLEY RD                     S
      QN QUEENS BL                64 ST                           S
      QN ALDERTON ST              CROMWELL CR                     E
      QN BURDEN CR                84 DR                           N
      BX SHERIF S BYRD PL         JESUP AV
      BX FR MARTIN DOLAN PL       GLEBE AV
    /*
    //*******************************************************************
    //*********   OUTFILE IS THE OUTPUT FILE OF SUCCESSFULLY     ********
    //*********   PROCESSED INFILE RECORDS.                      ********
    //*******************************************************************
    //OUTFILE DD DSN=&&OUT,DISP=(NEW,PASS),UNIT=SYSDA,
    //        SPACE=(TRK,(80,20),RLSE),
    //        DCB=(RECFM=FM,LRECL=364)
    //*******************************************************************
    //*********   ERRFILE IS THE OUTPUT FILE OF REJECTED         ********
    //*********   INFILE RECORDS.                                ********
    //*******************************************************************
    //ERRFILE DD SYSOUT=A,DCB=(RECFM=FB,LRECL=84)
    //*******************************************************************
    //*********   ALIASES IS THE OPTIONAL FILE OF USER-PROVIDED  ********
    //*********   TEMPORARY STREET NAME ALIASES.                 ********
    //*******************************************************************
    //ALIASES DD *
      1REED ST                         READE ST
      1E ST                            ELK ST
      1CANEL ST                        CANAL ST
      1ALEN ST                         ALLEN ST
      3ASEMBLY RD                      ASSEMBLY RD
      3GE AV                           GEE AV
      1MAN ST                          MAIN ST
      1DUANE ST                        DUANE ST
      1RIVE RD                         RIVER RD
      1RIV RD                          RIVAR RD
      1FASHION AVE                     7 AVE
    /*
    //*******************************************************************
    //*********   AS OF GEOSUPPORT VERSION 10.0,                 ********
    //*********   DD STATEMENTS FOR GEOSUPPORT DATA FILES (E.G.  ********
    //*********   GRID, PAD, TABFILE ETC) ARE NO LONGER NEEDED   ********
    //*********   AND ARE IGNORED.  GEOSUPPORT IS TAILORED TO    ********
    //*********   USE STANDARD GEOSUPPORT DATA SET NAMES.        ********
    //*********   TO USE NON-STANDARD FILES, PLEASE SEE YOUR     ********
    //*********   SYSTEMS PROGRAMMER.                            ********
    //*******************************************************************
    //  

<h4> SAMPLE GBAT JOB 2:  OUTPUT </h4>  

    J E S 2  J O B  L O G  --  S Y S T E M  M V S P  --  N O D E  C S C B A T C H       0
    10.31.18 JOB17538 ---- FRIDAY,    DD MMMM YYYY ----
    10.31.18 JOB17538  IRR010I  USERID YOURUID  IS ASSIGNED TO THIS JOB.
    10.31.18 JOB17538  ICH70001I YOURUID  LAST ACCESS AT 10:30:31 ON FRIDAY, MMMM DD, YYYY
    10.31.18 JOB17538  $HASP373 EXAMPLE2 STARTED - INIT 84   - CLASS X - SYS MVSP
    10.31.18 JOB17538  IEF403I EXAMPLE2 - STARTED - TIME=10.31.18
    10.31.18 JOB17538  +GBI SUCCESSFULLY LOADED GBIDRV
    10.31.18 JOB17538  +GBIDRV (VERSION VV.V) INVOKED
    10.31.18 JOB17538  +GEO (VERSION VV.V) INVOKED
    10.31.18 JOB17538  +snd NNN  OPENED SUCCESSFULLY
    10.31.19 JOB17538  +GRID2 NNN  'B030.GEO.COW.GRID2' OPENED SUCCESSFULLY
    10.31.19 JOB17538  -                                                --TIMINGS (MINS.)--            ----PAGING COUNTS---
    10.31.19 JOB17538  -JOBNAME  STEPNAME PROCSTEP    RC   EXCP   CONN    TCB    SRB  CLOCK   SERV  PG  PAGE  SWAP   VIO SWAPS
    10.31.19 JOB17538  -EXAMPLE2 S1       GBAT2       00   1142    180    .00    .00     .0   1264   0     0     0     0     0
    10.31.19 JOB17538  IEF404I EXAMPLE2 - ENDED - TIME=10.31.19
    10.31.19 JOB17538  -EXAMPLE2 ENDED.  NAME-YOURUID              TOTAL TCB CPU TIME=   .00  TOTAL ELAPSED TIME=    .0
    10.31.19 JOB17538  $HASP395 EXAMPLE2 ENDED
    0------ JES2 JOB STATISTICS ------
    -  DD MMMM YYYY JOB EXECUTION DATE
    -          102 CARDS READ
    -          242 SYSOUT PRINT RECORDS
    -            0 SYSOUT PUNCH RECORDS
    -           17 SYSOUT SPOOL KBYTES
    -         0.01 MINUTES EXECUTION TIME
         1 //EXAMPLE2 JOB YOUR-JOB-CARD-INFORMATION
           //*
           //*
           //*******************************************************************
           //************     THIS JOB IS MSW GBAT EXAMPLE 2     ***************
           //*******************************************************************
           //*******************************************************************
           //*********   THIS STEP INVOKES THE STANDARD CATALOGUED     *********
           //*********   PROCEDURE FOR GBAT EXECUTION, CALLED GBAT2    *********
           //*******************************************************************
         3 //S1 EXEC GBAT2
         4 XXGBAT2 PROC                                                            00000100
           XX**                          /* IN CSC.TEST.PROCLIB * /                 00000200
           XX**                          /* MODIFIED 06/30/06  BY MEB   * /         00000315
           XX**                          /* ADDED SUPPORT.PDSE.LOADLIB  * /         00000415
           XX**                          /* REMOVED DD CARDS            * /         00000515
           XX**                          /* MODIFIED 05/11/06  BY MEB   * /         00000615
           XX**                          /* ADDED GRID1R FILE           * /         00000715
           XX**                          /* MODIFIED 07/25/05  BY MEB   * /         00000815
           XX**                          /* PEDFILE BECOMES DUMMY FILE  * /         00000915
           XX**                          /* MODIFIED 03/26/02  BY MEB   * /         00001015
           XX**                                                                    00001115
           XX**** WARNING: DO NOT OVERRIDE THE REGION PARAMETER  **************    00001215
           XX**                                                                    00001315
         5 XXGBAT2 EXEC PGM=GBATIO2,REGION=9M,PARM='ISASIZE(40K)'                  00001415
           XX*                                                                     00001516
           XX****************************************************************/     00001616
           XX*                                                              * /     00001716
           XX*   AS OF GEOSUPPORT VERSION 10.0,                             * /     00001816
           XX*   THE STEPLIB (OR JOBLIB) OF THE GEOSUPPORT EXECUTION STEP   * /     00001916
           XX*   MUST INCLUDE THE FOLLOWING TWO CONCATENATED DATASETS:      * /     00002016
           XX*               A030.GEO.SUPPORT.PDSE.LOADLIB                  * /     00002116
           XX*               A030.GEO.SUPPORT.LOADLIB                       * /     00002216
           XX*                                                              * /     00002316
           XX****************************************************************/     00002416
           XX*                                                                     00002516
           XX*                                                                     00002616
         6 XXSTEPLIB DD DSN=A030.GEO.SUPPORT.PDSE.LOADLIB,DISP=SHR                 00002716
         7 XX        DD DSN=A030.GEO.SUPPORT.LOADLIB,DISP=SHR                      00002816
           XX*                                                                     00002916
           XX*                                                                     00003016
           XX****************************************************************/     00003116
           XX*                                                              * /     00003216
           XX*   AS OF GEOSUPPORT VERSION 10.0,                             * /     00003316
           XX*   DD STATEMENTS FOR GEOSUPPORT DATA FILES (E.G. GRID, PAD    * /     00003416
           XX*   ETC) ARE NO LONGER NEEDED AND ARE IGNORED.  GEOSUPPORT     * /     00003516
           XX*   IS TAILORED TO USE STANDARD GEOSUPPORT DATA SET NAMES.     * /     00003616
           XX*   TO USE NON-STANDARD FILES, SEE YOUR SYSTEMS PROGRAMMER.    * /     00003716
           XX*                                                              * /     00003816
           XX****************************************************************/     00003916
           XX*                                                              * /     00004016
           XX*                                                              * /     00004116
         8 XXSYSPRINT DD SYSOUT=A,DCB=(LRECL=133,RECFM=FBA,BLKSIZE=1330)           00004216
           XX** SYSPRINT FILE CONTAINS RUN STATISTICS AND MESSAGES                 00004316
         9 XXSYSTERM  DD SYSOUT=A,DCB=(LRECL=133,RECFM=FBA,BLKSIZE=1330)           00004416
           XX** SYSTERM FILE CONTAINS SYSTEM WARNINGS AND ERRORS                   00004516
        10 //CARDIN DD *
           X/CARDIN DD DDNAME=CARDIN                                               00004616
           XX** CARDIN IS THE FILE OF GBAT CONTROL RECORDS                         00004716
        11 //INFILE DD *
           X/INFILE DD DDNAME=INFILE                                               00004816
           XX** INFILE CONTAINS THE USERS DATA INPUT RECORDS                       00004916
        12 //OUTFILE DD DSN=&&OUT,DISP=(NEW,PASS),UNIT=SYSDA,
           //        SPACE=(TRK,(80,20),RLSE),
           //        DCB=(RECFM=FM,LRECL=364)
           X/OUTFILE DD DDNAME=OUTFILE                                             00005016
           XX** OUTFILE CONTAINS THE VALID OUTPUT RECORDS                          00005116
        13 //ERRFILE DD SYSOUT=A,DCB=(RECFM=FB,LRECL=84)
           X/ERRFILE DD DDNAME=ERRFILE                                             00005216
           XX** ERRFILE CONTAINS THE REJECTS                                       00005316
        14 //ALIASES DD *
           X/ALIASES  DD DUMMY                                                     00005416
           XX** ALIASES IS THE OPTIONAL INPUT FILE OF USER-DEFINED ST NAME ALIASES 00006015
           //*******************************************************************
           //*********   CARDIN IS THE USER-PROVIDED CONTROL FILE       ********
           //*******************************************************************
           //*******************************************************************
           //*********   INFILE IS THE USER-PROVIDED INPUT DATA.          ******
           //*********   IN THIS EXAMPLE, IT IS PROVIDED AS INSTREAM DATA.******
           //*******************************************************************
           //*******************************************************************
           //*********   OUTFILE IS THE OUTPUT FILE OF SUCCESSFULLY     ********
           //*********   PROCESSED INFILE RECORDS.                      ********
           //*******************************************************************
           //*******************************************************************
           //*********   ERRFILE IS THE OUTPUT FILE OF REJECTED         ********
           //*********   INFILE RECORDS.                                ********
           //*******************************************************************
           //*******************************************************************
           //*********   ALIASES IS THE OPTIONAL FILE OF USER-PROVIDED  ********
           //*********   TEMPORARY STREET NAME ALIASES.                 ********
           //*******************************************************************
           //*******************************************************************
           //*********   AS OF GEOSUPPORT VERSION 10.0,                 ********
           //*********   DD STATEMENTS FOR GEOSUPPORT DATA FILES (E.G.  ********
           //*********   GRID, PAD, TABFILE ETC) ARE NO LONGER NEEDED   ********
           //*********   AND ARE IGNORED.  GEOSUPPORT IS TAILORED TO    ********
           //*********   USE STANDARD GEOSUPPORT DATA SET NAMES.        ********
           //*********   TO USE NON-STANDARD FILES, PLEASE SEE YOUR     ********
           //*********   SYSTEMS PROGRAMMER.                            ********
           //*******************************************************************

     STMT NO. MESSAGE
         3 IEFC001I PROCEDURE GBAT2 WAS EXPANDED USING PRIVATE LIBRARY CSC.TEST.PROCLIB
    ICH70001I YOURUID  LAST ACCESS AT 10:30:31 ON FRIDAY, MMMM DD, YYYY
    IEF236I ALLOC. FOR EXAMPLE2 GBAT2 S1
    IGD103I SMS ALLOCATED TO DDNAME STEPLIB
    IGD103I SMS ALLOCATED TO DDNAME
    IEF237I JES2 ALLOCATED TO SYSPRINT
    IEF237I JES2 ALLOCATED TO SYSTERM
    IEF237I JES2 ALLOCATED TO CARDIN
    IEF237I JES2 ALLOCATED TO INFILE
    IGD101I SMS ALLOCATED TO DDNAME (OUTFILE )
         DSN (SYS06195.T103118.RA000.EXAMPLE2.OUT.H01     )
         STORCLAS (PRIMARY) MGMTCLAS (        ) DATACLAS (        )
         VOL SER NOS= SMST07
    IEF237I JES2 ALLOCATED TO ERRFILE
    IEF237I JES2 ALLOCATED TO ALIASES
    GBI SUCCESSFULLY LOADED GBIDRV
    GBIDRV (VERSION VV.V) INVOKED
    GEO (VERSION VV.V) INVOKED
    snd NNN  OPENED SUCCESSFULLY
    IGD103I SMS ALLOCATED TO DDNAME SYS00001
    GRID2 NNN  'B030.GEO.COW.GRID2' OPENED SUCCESSFULLY
    IEF142I EXAMPLE2 GBAT2 S1 - STEP WAS EXECUTED - COND CODE 0000
    IGD104I A030.GEO.SUPPORT.PDSE.LOADLIB                RETAINED,  DDNAME=STEPLIB
    IGD104I A030.GEO.SUPPORT.LOADLIB                     RETAINED,  DDNAME=
    IEF285I   YOURUID.EXAMPLE2.JOB17538.D0000104.?         SYSOUT
    IEF285I   YOURUID.EXAMPLE2.JOB17538.D0000105.?         SYSOUT
    IEF285I   YOURUID.EXAMPLE2.JOB17538.D0000101.?         SYSIN
    IEF285I   YOURUID.EXAMPLE2.JOB17538.D0000102.?         SYSIN
    IEF285I   YOURUID.EXAMPLE2.JOB17538.D0000106.?         SYSOUT
    IEF285I   YOURUID.EXAMPLE2.JOB17538.D0000103.?         SYSIN
    IGD104I B030.GEO.COW.GRID2                           RETAINED,  DDNAME=SYS00001
    IEF373I STEP/GBAT2   /START 2006195.1031
    IEF374I STEP/GBAT2   /STOP  2006195.1031 CPU    0MIN 00.06SEC SRB    0MIN 00.00SEC VIRT  1020K SYS   300K EXT    8748K SYS   11384K
    IEF237I E901 ALLOCATED TO SYS00002
    IEF285I   SYS06195.T103119.RA000.EXAMPLE2.R0170325     KEPT
    IEF285I   VOL SER NOS= SMST07.
    IGD105I SYS06195.T103118.RA000.EXAMPLE2.OUT.H01      DELETED,   DDNAME=OUTFILE
    IEF375I  JOB/EXAMPLE2/START 2006195.1031
    IEF376I  JOB/EXAMPLE2/STOP  2006195.1031 CPU    0MIN 00.06SEC SRB    0MIN 00.00SEC  
    ********************************************************************************************************************************
    ***** NOTE:  THIS IS PART OF THE SYSPRINT OUTPUT
    ********************************************************************************************************************************
    0USER CONTROL CARDS:

      ALIASES=YES
      TITLE=THIS IS GBAT CONTROL FILE MSW EXAMPLE 2;
      BORO=5,2
      RECTYPE=2
      MANHATTAN=MN
      BRONX=BX
      BROOKLYN=BK
      QUEENS=QN
      STATEN=SI
      ONSTREET=8,25
      CROSS1=33,25
      GEOCODE=ALL
      COMPASS=65,1
      COMPACT=YES
      REJECTWARNINGS=YES
      MAXREJECTS=75

    WARNING: SNL IS MISSING. A DEFAULT VALUE OF 32 IS IN EFFECT.

    PARAMETERS BEING USED:
    BOROUGH STARTS IN               5               FOR A LENGTH OF                 2
    STREET 1 STARTS IN              8               FOR A LENGTH OF                25
    STREET 2 STARTS IN             33               FOR A LENGTH OF                25
    NORMALIZED STREET LENGTH:                              32
    COMPASS STARTS IN              65               FOR A LENGTH OF                 1
    COMPACT OPTION   WAS SPECIFIED
    RECORD TYPE SPECIFIED: FUNCTION 2
    THE VALUE OF GEOCODE IS:                        ALL
    WARNINGS ARE TREATED AS REJECTS
    MAXIMUM NUMBER OF REJECTS ALLOWED IS                        75
    THE VALUE OF ALIASES IS:                        YES
    BOROUGH CODE FOR MANHATTAN IS:                  MN
    BOROUGH CODE FOR THE BRONX IS:                  BX
    BOROUGH CODE FOR BROOKLYN IS:                   BK
    BOROUGH CODE FOR QUEENS IS:                     QN
    BOROUGH CODE FOR STATEN ISLAND IS:              SI
    ERROR: ALIASES INPUT RECORD NUMBER 0008 HAS BEEN REJECTED.
    ALIAS STREET NAME AND STREET NAME RECOGNIZED BY GEOSUPPORT ARE INDENTICAL - DUANE ST                        .

    ERROR: ALIASES INPUT RECORD NUMBER 0010 HAS BEEN REJECTED:
    RETURN CODE = EE FOR STNAME RIVAR RD                        .
    ERROR: ALIASES INPUT RECORD NUMBER 0011 HAS BEEN REJECTED.
    FASHION AVE                     AND 7 AVE                           HAVE DIFFERENT 7 DIGIT STCODES (11061002 AND 11061004).

    NOTE:  ALIAS TABLE HAS ERRORS AND ALIASES=YES HAS BEEN SPECIFIED-PROCESSING CONTINUED.

     ********************************************************************************************************************************
     ***** NOTE:  THIS IS PART OF THE SYSPRINT OUTPUT
     ********************************************************************************************************************************
     0****************************************************    STATISTICS  ************************************************************
     0 THIS IS GBAT CONTROL FILE MSW EXAMPLE 2                                                                     MM/DD/YY
     0                                            GEOSUPPORT BATCH ADDRESS TRANSLATOR
     0                                             MANHATTAN       BRONX    BROOKLYN      QUEENS  STATEN IS.    BOROUGH        TOTAL
                                                                                                                 BOUNDARY
     0INPUT RECORDS                                       10           5           5           4           2           0          26(* )
     0ACCEPTED RECORDS                                     8           4           5           2           0           0          19
     0REJECTED RECORDS:
     0  01 - WARNING MESSAGES                              0           0           0           1           0           0           1
     0  02 - THESE STREETS INTERSECT TWICE-COMPASS
        DIRECTION REQUIRED:                                1           1           0           0           0           0           2
     0  03 - THESE STREETS INTERSECT MORE THAN
        TWICE-CANNOT BE PROCESSED:                         0           0           0           1           2           0           3
     0  40 - COMPASS DIRECTION VALUE IS INVALID FOR THIS
        INPUT LOCATION:                                    1           0           0           0           0           0           1
     0TOTAL REJECTED RECORDS EXCEPT CODES 17 AND 99:
                                                           2           1           0           2           2           0           7
     0  17+99 - BLANK AND INVALID BOROUGH CODES                                                                                    0
     0TOTAL REJECTED RECORDS                                                                                                       7
     0  (* ) NOTE  - THIS TOTAL INCLUDES RECORDS WITH INVALID BOROUGH CODES
     1********************************************************************************************************************************
     ***** NOTE:  THIS IS A PRINTOUT OF ERRFILE.  THE FIRST FOUR BYTES CONSIST OF THE TWO-BYTE GEOSUPPORT RETURN CODE (GRC),
     *****        FOLLOWED BY A DASH ('-'), FOLLOWED BY A ONE-BYTE REASON CODE, IF ANY.  IN THIS EXAMPLE, THERE ARE SEVEN REJECTED
     *****        RECORDS.  TWO HAVE A GRC VALUE OF '02' AND NO REASON CODE VALUE.  TWO HAVE A GRC VALUE OF '03' AND A REASON CODE
     *****        VALUE OF '3'.  ONE HAS A GRC VALUE OF '01' (WARNING) AND A REASON CODE VALUE OF 'H', ETC.  REFER TO THE GBAT
     *****        STATISTICS REPORT OR TO [APPENDIX 4](../appendix04) FOR THE MESSAGES CORRESPONDING TO THE OCCURRING GRC'S AND REASON CODES.  AFTER
     *****        THE FIRST FOUR BYTES, THE REST OF THE ERRFILE RECORD CONSISTS OF A COPY OF THE REJECTED INFILE RECORD.
     ********************************************************************************************************************************

     40-     MN CANEL ST                 ALEN ST                         S
     02-     MN MAN ST                   RIVE RD
     03-3    SI HAVEN ESPLN              SILVER LAKE RD
     03-3    SI HAVEN ESPLN              SILVER LAKE RD                  N
     01-H    QN 116 ST                   CURZON RD                       S
     02-     BX MARINE ST                CITY ISLAND AV
     03-4    QN QUEENS BL                64 ST                           S   
