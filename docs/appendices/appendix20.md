<h2 class="pdfAppendix"><center>APPENDIX 20: GEOSUPPORT HEADER AND TYPEDEF FILES<center></h2>  

This appendix contains listings of a Geosupport Header file for C/C++ and a Geosupport Typedef file for Visual Basic. It is strongly recommended that you use the supplied files, because in the future they will be modified to reflect any changes to the various work areas.  

The distributed filenames are:  
<table>
<tr>
  <td>C/C++ Header file</td>
  <td>pac.h</td>
</tr>
<tr>
  <td>Visual Basic Typedef file</td>
  <td>vbwadef.bas</td>
</tr>
</table>  

You may use different names in your environment.  

## <span id="appendix20.1">C/C++ HEADER File</span>  

    #ifndef GEOSUPPORT
    char test;    
    # define GEOSUPPORT  
    ifdef __ cplusplus  
    extern "C" {
    #endif
    /*********************************************************************/
    /*                                                                  * /
    /*      GeoSupport System C-Language Header F                       * /
    /*       for Platform-Independent Work Area                         * /
    /*                                                                  * /
    /*         Last Updated: 15 December 2003                           * /
    /*                                                                  * /
    /*********************************************************************/  


    /*********************************************************************/
    /*                                                                  * /
    /* Group Items Used in Platform-Independent Work Area 1             * /
    /*                                                                  * /
    /*********************************************************************/  

    typedef struct {  char boro;               /* Borough Code         * /
                      char SC10[10];           /* 10 Digit Street Code * /
                      char Street_name[32];    /* Street Name          * /
                    }  STREET;  

    typedef union { char bbl[10];              /* Borough-Block-Lot    * /
                    struct { char boro;       /* Borough               * /
                             char block[5];   /* Tax Block             * /
                             char lot[4];     /* Tax Lot               * /
                           } cas;
                  }BBL;  

    typedef struct {
                    char func_code[2];       /* Function Code           * /
                    char hse_nbr_disp[16];   /* House nbr in Disp form  * /
                    char hse_nbr_hns[11];    /* House nbr in Sort form  * /
                    char lohse_nbr_disp[16]; /* Lo House nbr in Disp form*/
                    char ohse_nbr_hns[11];   /* Lo House nbr in Sort form*/
                    STREET sti[3];           /* Street Information      * /
                    BBL bbli;                /* Borough-Block-Lot       * /
                    char filler01;           /* Filler-Tax Lot Version #* /
                    char bld_id[7];          /* Building Id Number (BIN) * /
                    char comp_direction;     /* Compass Direction        * /
                    char comp_direction2;    /* Compass Direction-Fn 3S  * /
                    char filler02[7];        /* Future Use               * /
                    char platform_ind;       /* Must be equal to 'C'     * /
                    char filler03[101];      /* Future Use               * /
                      /* Flags that influence processing  * /  
                    char long_WA_flag;       /* Long Work Area 2 Flag    * /
                    char hse_nbr_justify;    /* Hse Nbr Justification Flg* /  
                    char hnl[2];             /* Hse Nbr Normalization len* /
                    char hse_nbr_over_flag;  /* Reserved for GSS Use     * /
                    char snl[2];             /* Street Name Norm Length  * /
                    char st_name_norm;       /* Street Name Normalization* /
                                             /* Format Flag              * /
                    char expanded_format;    /* Expanded Format Flag     * /
                    char filler04[37];       /* Future Use               * /
                  } INWA1;

    typedef struct{
                    char boro_name[9];       /* Boro Name of First Street* /
                    char hse_nbr_disp[16];   /* House nbr in Normalized  * /
                                             /* Display form             * /
                    char hse_nbr_hns[11];    /* House number in Sort Form* /
                    STREET sto[3];           /* Street Information       * /
                    BBL bblo;                /* Boro(len=1), Block(len=5 * /
                                             /* and Lot (len=4)-Normalizd* /
                    char filler05;           /* Filler-Tax Lot Version # * /
                    char lo_hse_nbr_disp[16];/* low Hse nbr - display    * /
                    char lo_hse_nbr_hns[11]; /* low Hse nbr - sort form  * /
                    char bin[7];             /* Building Id Number       * /
                    char attrbytes[3];       /* NAP Identification Number* /
                    char filler07[132];      /* Future Use               * /
                    char nap_id_nbr[6];      /* NAP Id Nbr - Not Impl.   * /
                    char int_use1;           /* Internal Use Only        * /
                    char reason_code;        /* Reason Code              * /
                    char filler08;           /* Future Use               * /
                    char warn_code[2];       /* Warning Ret. Code-NotImpl* /
                    char ret_code[2];        /* GeoSupport Return Code   * /
                    char msg[80];            /* GeoSupport Message       * /
                    char nbr_names[2];       /* Nbr of Sreet Names       * /
                    char B_7SC[10][8];       /* 10 Boro+7-digit st codes * /
                    char st_names[10][32];   /* Up to 10 Street Names    * /
                  }OUTWA1;

      /*********************************************************************/
      /*                  Platform-Independent Work Area 1                * /
      /*                                                                  * /     
      /*                                                                  * /
      /*********************************************************************/

      typedef struct { INWA1 input;
                       INWA1 output;
                     }C_WA1;  

      /*********************************************************************/
      /*       Group Items Used in Platform-Independent Work Area 2's     * /
      /*                                                                  * /     
      /*                                                                  * /
      /*********************************************************************/  

      typedef struct {                         /* LION KEY                * /
                      char lion_boro;          /* LION Borough Code       * /
                                               /* Differs from GeoSupport * /
                                               /* Borough Code            * /
                      char face[4];            /* Face Code               * /
                      char seq[5];             /* Sequence Number         * /
                    }LION;

      typedef struct {
                      char nbr_sts;             /* Number of Streets      * /
                      char B5SC[5][6];          /* Boro+5 Street Code     * /
                    }St_list;  

      typedef struct {
                      char lo_hse_nbr[16];      /* Low House Nbr-Disply form* /
                      char hi_hse_nbr[16];      /* Hi House Nbr-Display form* /
                      char B5SC[6];             /* Boro & 5 digit Str Code  * /
                      char lgc[2];              /* DCP Preferred Street LGC * /
                      char bld_id[7];           /* BIN of address range     * /
                      char sos_ind;             /* Side of Street Indicator * /
                      char adr_type;            /* Address type - P=NAP,    * /
                                                /* B=NAB, Blank=Normal      * /
                      char filler01[4];         /* Future Use               * /
                    }ADDR_RANGE;

      typedef struct{
                    char sanborn_boro;          /* Sanborn Borough Code      * /
                    char sanborn_vol[3];        /* Sanborn Volume            * /
                    char sanborn_page[4];       /* Sanborn Page              * /
                    }SANBORN;

      typedef struct {
                      char com_dist[3];         /* Community District        * /
                      char lo_hse_nbr[16];      /* Low House Nbr-Disply form * /
                      char hi_hse_nbr[16];      /* Hi House Nbr-Display form * /
                      char filler01[32];        /* Future Use                * /
                      char iaei;                /* Interim Ass'tance Elig    * /
                                                /* Indicator                 * /
                      char zip_code[5];         /* Zip code for Street seg   * /
                      char health_area[4];      /* Health Area               * /
                      char police_boro_com;     /* Police Patrl Boro Command * /
                      char police_pre[3];       /* Police Precinct           * /
                      char fire_divisn[2]       /* Fire Division             * /
                      char fire_bat[2];         /* Fire Battalion            * /
                      char fire_co_type;        /* Fire Company Number       * /
                      char com_schl_dist[2];    /* Community School District * /
                      char dynam_blk[3];        /* Dynamic Block             * /
                      char instruc_div[2];      /* Instructional Division    * /
                      char filler02[7];         /* Future Use                * /
                      char cen_tract_90[6];     /* 1990 Census Tract         * /
                      char cen_tract_00[6];     /* 2000 Census Tract         * /
                      char cen_blk_00[4];       /* 2000 Census Block         * /
                      char filler03[1 ];        /* Possible Census Blk Suff  * /
                      char filler04[30];        /* Future Use                * /
                      }SEGSIDE;

    typedef struct {
                    char mh_ri_flag;            /* Marble Hill/Rikers Island * /
                                                /* Alternative Boro flag     * /
                    char len[5];                /* Len in ft from prev node  * /
                    char gap_flag;              /* Gap Flag                  * /
                    char node_nbr[7];           /* Node Number of Intersect  * /
                    char nbr_streets;           /* Nbr streets intersecting  * /
                                                /* Lowest B7SC at Intersect  * /
                                                /* is first and 2nd Lowest   * /
                                                /* B7SC is next. Remaining   * /
                                                /* B7SC's in no particular   * /
                                                /* order                     * /
                  }CROSS_STRS;  

    /**************************************************************************/
    /*        Platform-Independent Work Area 2 for Function 1                * /
    /*                                                                       * /
    /*                                                                       * /
    /**************************************************************************/

    typedef struct {
                    char filler01[21];  
                    cont_parity_ind;            /* Continuous Parity Ind.    * /
                                                /* or Duplicate Address Ind. * /
                    char lo_hse_nbr[11];        /* Lo House nbr in Sort form * /
                    char hi_hse_nbr[11];        /* Hi House Nbr in Sort form * /
                    char lgc[2];                /* DCP or BOE Preferred LGC  * /
                    St_list st[2];              /* 1=Low and 2=High          * /
                                                /* Nbr of cross streets at   * /
                                                /* low house nbr end of st   * /
                                                /* B5SCs of lo end cross st  * /
                    LION key;                   /* LION Key - 10 Characters  * /
                    char sagr_flag;             /* Special Address Generated * /
                                                /* Record flag               * /
                    char sos_ind;               /* Side of Street Indicator  * /
                    char seg_len[5];            /* Segment Length in Feet    * /
                    char coord[3][7];           /* 1 = X coordinate,         * /
                                                /* 2 = Y coordinate,         * /
                                                /* 3 = Z coordinate, Not Imp * /
                    char iaei;                  /* Interim Ass'tance Elig    * /
                                                /* Indicator                 * /
                    char mh_ri_flag;            /* Marble Hill/Rikers Island * /
                                                /* Alternative Borough flag  * /
                    char DOT_slcaz              /* DOT St Lght Contractr Are * /
                    char com_dist[3];           /* Community District        * /
                                                /* Position 0 contains the   * /
                                                /* CD Boro Code & Pos 1 & 2, * /
                                                /* the district number       * /
                    char zip_code[5];           /* Zip code for st seg       * /

                    /*      Following seven fields             * /
                    /*      used for Function 1E only          * /

                    char ed[3];                 /* Election District         * /
                    char ad[2];                 /* Assembly District         * /
                    char sped_flag;             /* Split Elect District Flag * /
                    char congress_dist[2];      /* Congressional District    * /
                    char state_sen_dist[2];     /* State Senatorial District * /
                    char civil_court[2];        /* Civil Court District      * /
                    char city_council[2];       /* City Council District     * /
                    char health_cent[2];        /* Health Center District    * /
                    char health_area[4];        /* Health Area               * /
                    char sanit_dist[3];         /* Sanitation District       * /
                    char sanit_sub_sect[2];     /* Sanit Collect Scheduling  * /
                                                /* Section and Subsection    * /
                    char sanit_reg_pick_up[5];  /* Regular Pick up           * /
                    char sanit_recycle[3];      /* sanit_recycle[3];         * /
                    char police_boro_com;       /* Police Patrol Boro Commnd * /
                    char police_pre[3];         /* Police Precinct           * /
                    char fire_divisn[2];        /* Fire Division             * /
                    char fire_bat[2];           /* Fire Battalion            * /
                    char fire_co_type;          /* Fire Company Type         * /
                    char fire_co_nbr[3];        /* Fire Company Number       * /
                    char scsd_flag;             /* Split Com School District * /
                                                /* flag                      * /
                    char com_schl_dist[2];      /* Community School District * /
                    char dynam_blk[3];          /* Dynamic Block             * /
                    char instruc_div[2];        /* Instructional Division    * /
                    char feature_type;          /* Feature Type Code         * /
                    char filler02[6];           /* Future Use                * /
                    char cen_tract_90[6];       /* 1990 Census Tract         * /
                    char cen_tract_00[6];       /* 2000 Census Tract         * /
                    char cen_blk_00[4];         /* 2000 Census Block         * /
                    char filler03[01];          /* Possible Census Blk Suff  * /
                    char filler04[50];          /* Future Use                * /
                    char true_b7sc[8];          /* True Boro 7 Street Code   * /
                    char seg_id[7];             /* Segment Identifier        * /
                    char curv_flag;             /* Curve Flag                * /
                  } C_WA2_F1;

        /**********************************************************************/
        /*       Platform-Independent Work Area 2 for Function 1A            * /
        /*                                                                   * /
        /*                                                                   * /
        /**********************************************************************/

        typedef struct {
                        char filler01[21];
                        char cont_parity_ind;   /* Continuous Parity Ind     * /
                                                /* or Duplicate Address Ind  * /
                        char lo_hse_nbr[11];    /* Low House Number-Sort Frm * /
                        BBL bbl;                /* Borough-Block-Lot         * /
                        char filler02;          /* Reserved for Tax Lot Ver# * /
                        char RPAD_scc;          /* RPAD Self_Check Code(SCC) * /
                        char filler03;
                        char RPAD_lucc[2];      /* RPAD Land Use Class. Code * /
                        char corner[2];         /* Corner Code               * /
                        char nbr_blds[4];       /* Nbr of buildings on lot   * /
                        char nbr_str[2];        /* Nbr Street Frontages      * /
                        char inter_flag;        /* Interior Lot Flag         * /
                        char vacant_flag;       /* Vacant Lot Flag           * /
                        char irreg_flag;        /* Irregularly-Shaped Lot Fl * /
                        char mh_ri_flag;        /* Marble Hill/Rikers Island * /
                        char adr_range_overflow;/* Addr Rnge Lst Ovrflow Flg * /
                        char stroll_key[18];    /* Strolling key             * /
                        char filler04;          
                        char res_internal_use;  /* Reserved for Internal Use * /
                        char bld_id[7];         /* Building Ident. Number    * /
                                                /* (BIN) of Input Address of * /
                                                /* Existing Building, If any * /
                        char condo_flag;        /* Condominium Flag          * /
                        char filler05;          /* Future Use                * /
                        char condo_id[4];       /* RPAD Condo Id Number      * /
                        char condo_unit_id[7];  /* Condo Unit Id Nbr-Not Impl* /
                        BBL condo_bill_bbl;     /* Condo Billing BBL         * /
                        char filler06;          /* Reserved for Tax Lot Ver  * /
                        char condo_scc;         /* Self-Check Code           * /
                        BBL  condo_lo_bbl;      /* Low BBL of Condo          * /
                        char filler07;          /* Reserved for Tax Lot Ver  * /
                        BBL  condo_hi_bbl;      /* High BBL of Condo         * /
                        char filler08;          /* Reserved for Tax Lot Ver  * /
                        char filler09[15];
                        char co_op_nbr[4];      /* Co-op Number              * /
                        SANBORN San;            /* Sanborn Information       * /
                        char business_area[5];  /* Business Area             * /
                        char tax_map_nbr[5];    /* Tax Map Nbr-Sect and Vol  * /
                        char filler10[4 ];      /* Tax Map Nbr Page Not Impl * /
                        char filler11[23];
                        char coord[2][7];       /* 1 = X coordinate-Annotat  * /
                                                /* 2 = Y coordinate-Annotat  * /
                        char filler12[25];
                        char int_use[8];        /* Internal Use              * /
                        char nbr_addr[4];       /* Nbr of Addr Ranges or Nbr * /
                                                /* of BINs in List           * /

                        union {
                              ADDR_RANGE addr_range[21];    /* List of Addr  * /
                              char bin_list[2500][7];       /* Ranges or BINs* /
                            }bar;
                          } C_WA2_F1A;


        /**********************************************************************/
        /*                                                                   * /
        /*         Platform-Independent Work Area 2 for Function 2           * /
        /**********************************************************************/            

        typedef struct {
                        char filler01[21];
                        char rep_cnt;           /* Intersection Replication  * /
                        char lgc[2][2];         /* Preferred LGCs            * /
                        St_list inter;          /* Number of Intersecting St * /
                                                /* B5SCs of Intersection St  * /
                        char Dup_comp;          /* Duplicate compass Directn * /
                        char filler02[5 ];      
                        char LION_node_nbr[7 ]; /* LION Node Number          * /
                        char coord[3][7];       /* 1 = X coordinate,         * /
                                                /* 2 = Y coordinate,         * /
                                                /* 3 = Z coordinate, Not Imp * /
                        SANBORN San[2];         /* Sanborn Information       * /
                        char mh_ri_flag;        /* Marble Hill/Rikers Island * /
                        char DOT_slca;          /* DOT St Lght Contractr  Are* /
                        char com_dist[3];       /* Community District        * /
                        char zip_code[5];       /* Zip code for st segment   * /
                        char health_area[4];    /* Health Area               * /
                        char police_boro_com;   /* Police Patrol Boro Commnd * /
                        char police_pre[3];     /* Police Precinct           * /
                        char fire_sector[2];    /* Fire Sector               * /
                        char fire_bat[2];       /* Fire Battalion            * /
                        char fire_co_type;      /* Fire Company Type         * /
                        char fire_co_nbr[3];    /* Fire Company Number       * /
                        char com_schl_dist[2];  /* Community School District * /
                        char cen_tract_00[6];   /* 2000 Census Tract         * /
                        char cen_tract_90[6];   /* 1990 Census Tract         * /
                        char level_codes [10];  /* Level codes               * /
                        char instruc_div [2];   /* Instructional Division    * /
                        char filler03[41];  
                       } C_WA2_F2;

          /********************************************************************/
          /*                                                                 * /
          /*        Platform-Independent Work Area 2 for Function 3          * /
          /*                                                                 * /
          /********************************************************************/

          typedef struct {
                          char filler01[21];    
                          char dup_key_flag     /* Duplicate Key Flag or     * /
                                                /* Continuous Parity Flag    * /
                          char loc_stat_seg;    /* Locational Status of Seg  * /
                          char cnty_bnd_ind;    /* County Boundary Indicat   * /
                          char lgc[3][2];       /* Preferred LGCs            * /
                          St_list st[2];        /* 1=Low and 2=High          * /
                                                /* Nbr of cross sts at low   * /
                                                /* house nbr end of street   * /
                                                /* B5SCs of lo end X sts     * /
                          char x_street_reversal_flag;/* X St Reversal Flag  * /
                          LION key;             /* LION Key                  * /
                          char genr_flag;       /* Generated Record Flag     * /
                          char seg_len[5];      /* Segment Length in Feet    * /
                          char seg_azm[3];      /* Segment Azimuth           * /
                          char seg_orient;      /* Segment Orientation       * /
                          char mh_ri_flag;      /* Marble Hill/Rikers Island * /
                                                /* Alternative Boro flag     * /
                          char filler02[19];    /* Future use                * /
                          char seg_id[7];       /* Segment Identifier        * /
                          char DOT_slca;        /* DOT St Lght Contractr Are * /
                          char curve_flag;      /* Curve Flag                * /
                          char dog_leg;         /* Dog leg flag              * /
                          char feature_type;    /* Feature Type Code         * /
                          char filler03[6];     
                          SEGSIDE side[2];      /* 1 = Left Side of street   * /
                                                /* 2 = Right Side of street  * /
                        } C_WA2_F3;  

        /**********************************************************************/
        /*        Platform-Independent Work Area 2 for Function 3C           * /
        /*                                                                   * /
        /*                                                                   * /
        /**********************************************************************/  

        typedef struct {
                        char filler01[21];    
                        char dup_key_flag;      /* Duplicate Key Flag or     * /
                                                /* Continuous Parity Flag    * /
                        char loc_stat_seg;      /* Locational Status of Seg  * /
                        char cnty_bnd_ind;      /* County Boundary Indicat   * /
                        char lgc[3][2];         /* Preferred LGCs            * /
                        St_list st[2];          /* 1=Low and 2=High          * /
                                                /* Nbr of cross sts at low   * /
                                                /* house nbr end of street   * /
                                                /* B5SCs of lo end Cross sts * /
                        char x_street_reversal_flag /* X St Reversal Flag    * /
                        LION key;               /* LION key                  * /
                        char genr_flag;         /* Generated Record Flag     * /
                        char seg_len[5];        /* Segment Length in Feet    * /
                        char seg_azm[3];        /* Segment Azimuth           * /
                        char seg_orient;        /* Segment Orientation       * /
                        char mh_ri_flag;        /* Marble Hill/Rikers Island * /
                                                /* Alternative Boro flag     * /
                        char filler02[19];      /* Future use                * /
                        char seg_id  [7];       /* Segment Identifier        * /
                        char DOT_slca;          /* DOT St Lght Contractr Are * /
                        char sos_ind;           /* Side of Street Indicator  * /
                        char curve_flag;        /* Curve Flag                * /
                        char feature_type;      /* Feature Type Code         * /
                        char filler03[6];          
                        SEGSIDE req;            /* Geographic Information for* /
                                                /* Requested Side of segment * /
                        } C_WA2_F3C;    

        /**********************************************************************/
        /*        Platform-Independent Work Area 2 for Function 3S           * /
        /*                                                                   * /
        /*                                                                   * /
        /**********************************************************************/    

        typedef struct {
                        char filler01[21];
                        char nbr_x_str[3];      /* Nbr of Cross sts in list  * /
                        CROSS_STRS cross_strs[350]; /* Cross Street structure* /
                        } C_WA2_F3S;

        #ifdef __ cplusplus
        #endif
        #endif

## <span id="appendix20.2">VISUAL BASIC TYPEDEF File</span>  

    Option Explicit  

    '*****************************************************************  

    '*** geosupport for windows work area type defs for visual basic  

    '*****************************************************************
    '*** Types must be declared as Private within Form Modules
    '*****************************************************************
    '*****************************************************************
    '*** typedefs used in workareas
    '*****************************************************************

    STREET_type
      boro As String * 1  
      sc10 As String * 10
      street_name As String * 32
    End Type  

    Type BBL_type
     boro As String * 1
     block As String * 5
     lot As String * 4
    End Type

    Type ADDR_RANGE_type
     lo_housenum As String * 16
     hi_housenum As String * 16
     B5SC As String * 6
     lgc As String * 2
     bin As String * 7
     sos_ind As String * 1
     addr_type As String * 1
     filler01 As String * 4
    End Type

    '*****************************************************************
    '*** typedef for input area of workarea 1
    '*****************************************************************
    Type INPUT_DEF
      func_code As String * 2
      housenum As String * 16
      housenum_sort As String * 11
      lo_housenum As String * 16
      lo_housenum_sort As String * 11
      sti(1 To 3) As STREET_type
      bbli As BBL_type
      filler01 As String * 1
      bin As String * 7
      compass As String * 1
      compass2 As String * 1
      filler02 As String * 7
      platform_ind As String * 1
      filler03 As String * 101
      long_WA2_flag As String * 1
     filler04 As String * 4
     snl As String * 2
     st_name_norm As String * 1
     expanded_format As String * 1
     filler05 As String * 37
    End Type  

    '*****************************************************************
    '*** typedef for output area of workarea 1
    '*****************************************************************
    Type OUTPUT_DEF
      boro_name As String * 9
      housenum As String * 16
      housenum_sort As String * 11
      sto(1 To 3) As STREET_type
      bblo As BBL_type
      filler05 As String * 1
      lo_housenum As String * 16
      lo_housenum_sort As String * 11
      bin As String * 7
      street_attr(1 To 3) As String * 1
      filler06 As String * 139
      reason_code As String * 1
      filler07 As String * 1
      warning_code As String * 2
      return_code As String * 2
      error_msg As String * 80
      similar_stnames_cnt As String * 2
      similar_B7SC(1 To 10) As String * 8
      similar_stnames(1 To 10) As String * 32
    End Type

    '*****************************************************************
    '*** typedef for workarea 1
    '*****************************************************************
    Type C_WA1
      input1 As INPUT_DEF
      output1 As OUTPUT_DEF
    End Type

    '*****************************************************************
    '*** typedefs used in workarea 2
    '*****************************************************************
    Type ST_LIST_type
      street_cnt As String * 1
      B5SC(1 To 5) As String * 6
    End Type

    Type LION_type
      boro As String * 1
      face As String * 4
      seq As String * 5
    End Type

    Type SANBORN_type
      boro As String * 1
      vol As String * 3
      page As String * 4
    End Type

    Type DOF_MAP_type
      boro As String * 1
      secvol As String * 4
      page As String * 4
    End Type

    Type SEGSIDE_type
      com_dist As String * 3
      lo_housenum As String * 16
      hi_housenum As String * 16
      filler01 As String * 32
      iaei As String * 1
      zip_code As String * 5
      health_area As String * 4
      police_boro_com As String * 1
      police_pct As String * 3
      fire_div As String * 2
      fire_bat As String * 2
      fire_co_type As String * 1
      fire_co_num As String * 3
      school_dist As String * 2
      dynamic_block As String * 3
      instruct_div As String * 2
      filler02 As String * 7
      cen_tract_1990 As String * 6
      cen_tract_2000 As String * 6
      cen_block_2000 As String * 4
      filler_03 As String * 31
    End Type

    Type CROSS_STRS_type
      mh_ri_flag As String * 1
      street_len As String * 5
      gap_flag As String * 1
      node_nbr As String * 7
      street_cnt As String * 1
      B7SC(1 To 5) As String * 8
    End Type


    '*****************************************************************
    '*** typedef for workarea 2 for function 1/1E
    '*****************************************************************

    Type C_WA2_F1E
      fillera As String * 21
      cont_parity_dup_addr_ind As String * 1
      lo_housenum_sort As String * 11
      hi_housenum_sort As String * 11
      DCP_pref_lgc As String * 2
      lo_x_sts As ST_LIST_type
      hi_x_sts As ST_LIST_type
      lion_key As LION_type
      spec_addr_flag As String * 1
      sos_ind As String * 1
      segment_len As String * 5
      spatial_xyz_coord(1 To 3) As String * 7
      res_GSS As String * 1
      mh_ri_flag As String * 1
      DOT_st_light_cont_area As String * 1
      com_dist As String * 3
      zip_code As String * 5
      ED As String * 3
      AD As String * 2
      split_ED As String * 1
      CD As String * 2
      SD As String * 2
      MC As String * 2
      CO As String * 2
      health_center_dist As String * 2
      health_area As String * 4
      san_dist As String * 3
      san_sched As String * 2
      san_reg As String * 5
      san_recycle As String * 3
      police_boro_com As String * 1
      police_pct As String * 3
      fire_div As String * 2
      fire_bat As String * 2
      fire_co_type As String * 1
      fire_co_num As String * 3
      split_school_dist_flag As String * 1
      school_dist As String * 2
      dynamic_block As String * 3
      instruct_div As String * 2
      feature_type As String * 1
      filler_80ct As String * 6
      census_tract_1990 As String * 6
      census_tract_2000 As String * 6
      census_block_2000 As String * 4
      filler_left As String * 51
      real_b7sc As String * 8
      segment_id As String * 7
      curve_flag As String * 1
    End Type


    '*****************************************************************
    '*** typedef for workarea 2 for function 1A
    '*****************************************************************

    Type C_WA2_F1A
      filler01 As String * 21
      cont_parity_ind As String * 1
      lo_housenum_sort As String * 11
      bbl As BBL_type
      filler02 As String * 1
      RPAD_scc As String * 1
      filler03 As String * 1
      RPAD_bldg_class As String * 2
      corner As String * 2
      num_of_bldgs As String * 4
      num_of_structures As String * 2
      interior_flag As String * 1
      vacant_flag As String * 1
      irreg_flag As String * 1
      mh_ri_flag As String * 1
      addr_range_overflow As String * 1
      stroll_key As String * 19
      res_internal_use As String * 1
      bin As String * 7
      condo_flag As String * 1
      filler05 As String * 1
      condo_id As String * 4
      filler05b As String * 7
      condo_bill_bbl As BBL_type
      filler06 As String * 1
      condo_bill_scc As String * 1
      condo_lo_bbl As BBL_type
      filler07 As String * 1
      condo_hi_bbl As BBL_type
      filler08 As String * 1
      filler09 As String * 15
      coop_num As String * 4
      Sanborn As SANBORN_type
      business_area As String * 5
      DOF_map AS DOF_MAP_type
      reserved_dcp As String * 23
      x_coord As String * 7
      y_coord As String * 7
      filler10 As String * 25
      int_use As String * 8
      numaddr As String * 4
      addr_range As ADDR_RANGE_type
    End Type

    '*****************************************************************
    '*** typedef for workarea 2 for function 1A long
    '*****************************************************************
    Type C_WA2_F1AL
      filler01 As String * 21
      cont_parity_ind As String * 1
      bbl As BBL_type
      filler02 As String * 1
      RPAD_scc As String * 1
      filler03 As String * 1
      RPAD_bldg_class As String * 2
      corner As String * 2
      num_of_bldgs As String * 4
      num_of_structures As String * 2
      interior_flag As String * 1
      vacant_flag As String * 1
      irreg_flag As String * 1
      mh_ri_flag As String * 1
      addr_range_overflow As String * 1
      stroll_key As String * 19
      res_internal_use As String * 1
      bin As String * 7
      condo_flag As String * 1
      filler05 As String * 1
      condo_id As String * 4
      filler05b As String * 7
      condo_bill_bbl As BBL_type
      filler06 As String * 1
      condo_bill_scc As String * 1
      condo_lo_bbl As BBL_type
      filler07 As String * 1
      condo_hi_bbl As BBL_type
      filler08 As String * 1
      filler09 As String * 15
      coop_num As String * 4
      Sanborn As SANBORN_type
      business_area As String * 5
      DOF_map AS DOF_MAP_type
      filler10 As String * 62
      int_use As String * 8
      num_of_bins As String * 4
      bin_list(1 To 2500) As String * 7
    End Type


    '*****************************************************************
    '*** typedef for workarea 2 for function 2
    '*****************************************************************

    Type C_WA2_F2
      filler01 As String * 21
      dup_intersect_cnt As String * 1
      DCP_pref_lgc(1 To 2) As String * 2
      intersect_str As ST_LIST_type
      compass As String * 1
      filler02 As String * 5
      lion_node_num As String * 7
      spatial_xyz_coord(1 To 3) As String * 7
      Sanborn(1 To 2) As SANBORN_type
      mh_ri_flag As String * 1
      DOT_slca As String * 1
      com_dist As String * 3
      zip_code As String * 5
      health_area As String * 4
      police_boro_com As String * 1
      police_pct As String * 3
      fire_div As String * 2
      fire_bat As String * 2
      fire_co_type As String * 1
      fire_co_num As String * 3
      school_dist As String * 2
      census_tract_2000 As String * 6
      census_tract_1990 As String * 6
      level_codes (1 to 5, 1 to 2) As String * 1
      instruct_div As String * 2
      filler03 As String * 41
    End Type


    '*****************************************************************
    '*** typedef for workarea 2 for function 3
    '*****************************************************************
    Type C_WA2_F3
      filler01 As String * 21
      dup_key_flag As String * 1
      loc_status As String * 1
      county_boundary_ind As String * 1
      DCP_pref_lgc(1 To 3) As String * 2
      lo_x_st As ST_LIST_type
      hi_x_st As ST_LIST_type
      x_street_reversal_flag As String * 1
      lion_key As LION_type
      generated_rec_flag As String * 1
      segment_len As String * 5
      segment_azm As String * 3
      segment_orient As String * 1
      mh_ri_flag As String * 1
      filler02 As String * 19
      segment_id As String * 7
      DOT_slca As String * 1
      curve_flag As String * 1
      dog_leg As String * 1
      feature_type As String * 1
      filler03 As String * 6
      side_info(1 To 2) As SEGSIDE_type
    End Type


    '*****************************************************************
    '*** typedef for workarea 2 for function 3C
    '*****************************************************************
    Type C_WA2_F3C
      filler01 As String * 21
      dup_key_flag As String * 1
      loc_status As String * 1
      county_boundary_ind As String * 1
      DCP_pref_lgc(1 To 3) As String * 2
      lo_x_st As ST_LIST_type
      hi_x_st As ST_LIST_type
      x_street_reversal_flag As String * 1
      lion_key As LION_type
      generated_rec_flag As String * 1
      segment_len As String * 5
      segment_azm As String * 3
      segment_orient As String * 1
      mh_ri_flag As String * 1
      filler02 As String * 19
      segment_id As String * 7
      DOT_slca As String * 1
      sos_ind As String * 1
      curve_flag As String * 1
      feature_type As String * 1
      filler03 As String * 6
      side_info As SEGSIDE_type
    End Type


    '*****************************************************************
    '*** typedef for workarea 2 for function 3S
    '*****************************************************************

    Type C_WA2_F3S
      filler01 As String * 21
      intersect_num As String * 3
      x_sts(1 To 350) As CROSS_STRS_type
    End Type
