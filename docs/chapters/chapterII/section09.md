<h2>II.9 Sample Programs with Descriptions  </h2>

This section contains:  

  * A fully described sample C/C++ program
  * A fully described sample Visual Basic program  

Please note that the sample programs are not guaranteed to work and are provided as
programming aides.  

## <span id="chapterII.9.1">II.9.1 C/C++ Sample Program with Description   </span>

*This section walks you through writing a C/C++ program that makes Geosupport Desktop
Edition calls. It assumes that you are familiar with your Integrated Development Environment
(IDE) and that you know how to code in C/C++. The complete program used here can be found
at the end of this section in Listing II.8. Please note: The program in this section represents just
one of many styles of coding in C/C++. It may be used as an example. It is not guaranteed.*  

There are six basic steps to making Geosupport Desktop Edition calls from a C/C++ program:  
  1. Set up your environment.<br>
  2. Include needed header files and other variable definitions.<br>
  3. Prepare Work Area 1.<br>
  4. Call NYCgeo.<br>
  5. Check the Geosupport Return Code.<br>
  6. Access the data in Work Area 1 and Work Area 2. <br>
  optional step - convert house numbers in sort format or street codes with a function D call.<br>


That's it. If you follow this list, in no time you should be writing C/C++ programs that take
advantage of the power of Geosupport.  

<h5>Set Up Your Environment </h5>  

To begin, you need to tell your Integrated Development Environment (IDE) where to find several
important Geosupport files. These can be found in Listing II.1 below. Your IDE should have a
Setup Menu for changing project options. Navigate to this menu in your IDE and add Line 1 or
Line 2 in Listing II.1 to the existing settings. Now add lines 3 and 4 in Listing II.1 to the settings
for Include (or Header) File Locations.  

<b>Listing II.1 Library and Header Files Needed by Geosupport Desktop Edition</b>  

    1: harddrive:\Program Files\Geosupport Desktop Edition\Include\BC++ Library\NYCgeo.lib   
    or <br>
    2: harddrive:\Program Files\Geosupport Desktop Edition\Include\MSVC Library\NYCgeo.lib  
    3: harddrive:\Program Files\Geosupport Desktop Edition\Include\ NYCgeo.h  
    4: harddrive:\Program Files\Geosupport Desktop Edition\Include\pac.h


<h5> Include Header Files </h5>  

In C/C++, you need to include a function prototype in order to successfully call a function. Line2 in Listing II.2 below shows you how to include the Geosupport Desktop Edition prototype in your program.  

Geosupport uses several "work areas" to return data to the user. For your convenience we have included the layouts for these work areas in a header file "pac.h" (line 4 in Listing II.2). We strongly recommend that you use these layouts.  

Lines 8 and 9 below are useful variables we recommend you use. These are the lengths of the work areas that you will be using. LEN_WA1 is particularly useful as you will see later.  

The unions (lines 11 through 20 in Listing II.2) of the work area structures with character arrays are useful in several ways for making your calls. First, the structure (e.g."wa1" in line 11) makes it easy for you to access the individual fields in the work areas. Second, the character array (e.g."wa1c" in line 12) allows you to easily initialize Work Area 1. The second Work Area 1 (lines 18 through 20) was set up to enable you to make another Geosupport call (e.g. function D } without losing the Work Area 1 output data from your original function call.  

<b>Listing II.2 Include Header Files and Set Up Variables</b>  

    1: // function prototype for NYCgeo
    2: #include "NYCgeo.h"
    3: // header file of workarea layouts
    4: #include "pac.h"
    5: #include <string.h>
    6: #include <iostream.h>
    7: // lengths of workareas
    8: size_t const LEN_WA1 = sizeof(C_WA1);
    9: size_t const LEN_WA2F1 = sizeof(C_WA2_F1);
    10: // convenient way to handle workareas
    11: union { C_WA1 wa1;
    12: char wa1c[LEN_WA1];
    13: } w1;
    14: union { C_WA2_F1 wa21;
    15: char wa21c[LEN_WA2F1];
    16: } w21;
    17: // this second WA1 is for Function D calls
    18: union { C_WA1 wa1fd;
    19: char wa1fdc[LEN_WA1];
    20: } w1fd;  




<h5>Set Up Work Area 1 for Function Call </h5>  

There are two steps that must precede every call to Geosupport..
  1. Work Area 1 must be initialized to spaces (see line 4 in Listing II.3 below).  
  2. The "platform indicator" field must be set to <C' (see line 5 in Listing II.3 below).  

Other than the two steps above, there is only one other field that must contain a value on every call. That is the "function code" field. The remaining fields and their values that are set up will vary with the function call you want to make. Line 9 in Listing II.3 below shows you how to indicate you want to make a Function 1E call. Function 1E requires as input a borough code, a street name or street code, and a house number (see lines 10 through 12 in Listing II.3).  

In addition to the required fields, there are optional fields that can be filled. Line 13 in Listing II.3 indicates that you want the Street Name normalized to a length of 32 characters.  

<b>Listing II.3 Set Up Work Area 1 for Function Call</b>  

    1) ////////////////////////////////////////////////////////////////////
    2) // these two lines of code must be executed for every NYCgeo call
    3) ////////////////////////////////////////////////////////////////////
    4) memset(w1.wa1c, ' ', LEN_WA1);
    5) w1.wa1.input.platform_ind = 'C';
    6) ////////////////////////////////////////////////////////////////////
    7) // select the function you wish to call
    8) ////////////////////////////////////////////////////////////////////
    9) memcpy(w1.wa1.input.func_code, "1E", 2);
    10) memcpy(w1.wa1.input.sti, in_boro_str, 1);
    11) memcpy(w1.wa1.input.sti[0].Street_name, in_stname_str, 32);
    12) memcpy(w1.wa1.input.hse_nbr_disp, in_housenum_str, 16);
    13) memcpy(w1.wa1.input.snl, "32", 2);


<h5> Call NYCgeo </h5>  
Now that we have set up Work Area 1 for the desired function we can now look at how to make the call. Earlier we set up unions of the structures of work areas with character arrays (see lines 11 through 16 in Listing II.2 above). The parameters to the NYCgeo call must be pointers to characters. The references w1.wa1c and w21.wa21c are just such pointers. Line 1 in Listing II.4 below shows the code to make the Geosupport call.  

<b>Listing II.4 Call NYCgeo </b>  

    (A) NYCgeo(w1.wa1c, w21.wa21c);  

<h5> Check the Geosupport Return Code </h5>  
After you've made the Geosupport call, you need to check the Geosupport Return Code (GRC) in the Output section of Work Area 1 (lines 2 and 3 in Listing II.5 below). A return code of <00' indicates a successful call and a value of <01' indicates a successful call but there is a warning message you should check. Any other Geosupport Return Code value indicates that an error has taken place; you will want to have special processing to handle these situations. For a complete listing of the warning and error codes see "Geosupport Return Codes, Reason Codes and Messages" in Appendix 4 of this guide.  

<b>Listing II.5 Check the Return Code</b>  

    1: // the function completed successfully
    2: if ((memcmp(w1.wa1.output.ret_code, "00", 2) == 0) |
    3: (memcmp(w1.wa1.output.ret_code, "01", 2) == 0))
    4: {
    5: // add code to process data returned (and warning, if ret_code == 01)
    6: }
    7: // there was an error in the function call
    8: else
    9: {
    10: // add code to process errors
    11: }  

<h5>Access the Data from the Work Areas</h5>
Listing II.6 below gives several examples of accessing data in the work areas after a successful Geosupport Function 1E call. Remember that earlier we included the Work Area 2 structure in a union with a character array. That is the reason for the "w21" qualifier before each of the fields in lines 1 through 8 in Listing II.6). The "w1" qualifier in lines 9 through 12 in Listing II.6 reflects the union we created for Work Area 1.  

<b>Listing II.6 Access Data from Work Areas</b>  

    1: // these fields are returned for both function 1 and 1E calls
    2: memcpy(convstr, w21.wa21.zip_code, sizeof w21.wa21.zip_code);
    3: convstr[sizeof w21.wa21.zip_code] = '\0';
    4: printf("zip code = %s\n", convstr);
    ....
    5: // these fields are returned for function 1E calls only
    6: memcpy(convstr, w21.wa21.ad, sizeof w21.wa21.ad);
    7: convstr[sizeof w21.wa21.ad] = '\0';
    8: printf("Assembly District = %s\n", convstr);
    ....
    9: // display grc message
    10: memcpy(convstr, w1.wa1.output.msg, sizeof w1.wa1.output.msg);
    11: convstr[80] = '\0';
    12: printf(" : %s\n", convstr);  

<h5>Convert House Numbers in Sort Format and Street Codes </h5>  
Geosupport functions (e.g. function 1E) often return house numbers in sort format and street codes. To convert house numbers in sort format to house numbers in display format, or to convert street codes to street names, make a function D call. Function D calls (see Listing II.7 below) follow the same procedure as the other functions with one exception, only Work Area 1 is passed as a parameter (see line 9 in Listing II.7 below). Also note: We've used a second copy of Work Area1 (see lines 18 through 20 in Listing II.2 above) so that the data in Work Area1 from the original function 1E call is not lost.  

<b> Listing II.7 Convert House numbers in Sort Format with Function D call </b>  

    1: // set up workarea 1 defined for function D calls
    2: memset(w1fd.wa1fdc, ' ', LEN_WA1);
    3: w1fd.wa1fd.input.platform_ind = 'C';
    4: memcpy(w1fd.wa1fd.input.func_code, "D ", 2);
    5: memcpy(w1fd.wa1fd.input.hse_nbr_hns, w21.wa21.hi_hse_nbr,
    6: sizeof w21.wa21.hi_hse_nbr);
    7: memcpy(w1fd.wa1fd.input.sti, w1.wa1.output.sto, 1);
    8: // make 1 work area call
    9: NYCgeo(w1fd.wa1fdc);
    10: // function D completed successfully
    11: if ((memcmp(w1fd.wa1fd.output.ret_code, "00", 2) == 0) |
    12: (memcmp(w1fd.wa1fd.output.ret_code, "01", 2) == 0))
    13: {
    14: ////////////////////////////////////////////////////////////////////
    15: // prepare output fields from function D call
    16: ////////////////////////////////////////////////////////////////////
    17: memcpy(convstr, w1fd.wa1fd.output.hse_nbr_disp,
    18: sizeof w1fd.wa1fd.output.hse_nbr_disp);
    19: convstr[sizeof w1fd.wa1fd.output.hse_nbr_disp] = '\0';
    20: printf("High House Number of Block Face = %s", convstr)
    21: }  

You've now seen how to write a C/C++program that makes Geosupport Desktop Edition calls. Of course, your style of coding may be different and your processing will probably be more involved. Nevertheless, if you follow these few simple steps you can easily harness the power of Geosupport in your C/C++programs.  
Listing II.8 below contains the complete program used in this section.  

<b>Listing II.8 Complete C/C++ Sample Program</b>  

    //////////////////////////////////////////////////////////////////////////////
    // C sample program demonstrating how to use Geosupport Desktop Edition
    // to make a function 1E call
    //////////////////////////////////////////////////////////////////////////////
    // function prototype for NYCgeo
    #include "NYCgeo.h"
    // header file of workarea layouts
    #include "pac.h"
    #include <string.h>
    #include <iostream.h>
    // lengths of workareas
    size_t const LEN_WA1 = sizeof(C_WA1);
    size_t const LEN_WA2F1 = sizeof(C_WA2_F1);
    // convenient way to handle workareas
    union { C_WA1 wa1;
    char wa1c[LEN_WA1];
    } w1;
    union { C_WA2_F1 wa21;
      char wa21c[LEN_WA2F1];
    } w21;
    // this second WA1 is for Function D calls
    union { C_WA1 wa1fd;
    char wa1fdc[LEN_WA1];
    } w1fd;
    char *convstr;
    convstr = (char*) malloc(81);  

    ////////////////////////////////////////////////////////////////////////////
    // input fields initialized to sample values
    ////////////////////////////////////////////////////////////////////////////
    char in_boro_str[2] = '1';
    char in_stname_str[32] = 'reade st';
    char in_housenum_str[16] = '22';
    char in_stcode_str[11] = '1061002010';
    void main()
    {
    /////////////////////////////////////////////////////////////////////////
    // get input data from user
    /////////////////////////////////////////////////////////////////////////
    printf("Input a Boro Code:");
    gets(in_boro_str);
    printf("Input a House Number:");
    gets(in_housenum_str);
    printf("Input a Street Name:");
    gets(in_stname_str);
    /////////////////////////////////////////////////////////////////////////
    // set up workarea 1
    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    // these two lines of code must be executed for every NYCgeo call
    /////////////////////////////////////////////////////////////////////////
    memset(w1.wa1c, ' ', LEN_WA1);
    w1.wa1.input.platform_ind = 'C';
    /////////////////////////////////////////////////////////////////////////
    // select the function you wish to call
    /////////////////////////////////////////////////////////////////////////
    memcpy(w1.wa1.input.func_code, "1E", 2);
    memcpy(w1.wa1.input.sti, in_boro_str, 1);
    memcpy(w1.wa1.input.sti[0].Street_name, in_stname_str, 32);
    // can use street code instead of street name
    // memcpy(w1.wa1.input.sti[0].SC10, in_stcode_str, 5);
    memcpy(w1.wa1.input.hse_nbr_disp, in_housenum_str, 16);
    memcpy(w1.wa1.input.snl, "32", 2);
    NYCgeo(w1.wa1c, w21.wa21c);
    ////////////////////////////////////////////////////////////////////////
    // check the return code: if successful, process data
    // if not successful, display error message
    ////////////////////////////////////////////////////////////////////////
    // the function completed successfully
    if ((memcmp(w1.wa1.output.ret_code, "00", 2) == 0) |
    (memcmp(w1.wa1.output.ret_code, "01", 2) == 0))
    {
      // these fields are returned for both function 1 and 1E calls
      memcpy(convstr, w21.wa21.zip_code, sizeof w21.wa21.zip_code);
      convstr[sizeof w21.wa21.zip_code] = '\0';
      printf("zip code = %s\n", convstr);
      memcpy(convstr, w21.wa21.lo_hse_nbr, sizeof w21.wa21.lo_hse_nbr);
      convstr[sizeof w21.wa21.lo_hse_nbr] = '\0';
      printf("low house number = %s\n", convstr);
      memcpy(convstr, w21.wa21.hi_hse_nbr, sizeof w21.wa21.hi_hse_nbr);
      convstr[sizeof w21.wa21.hi_hse_nbr] = '\0';
      printf("high house number = %s\n", convstr);
      memcpy(convstr, w21.wa21.coord[0], sizeof w21.wa21.coord[0]);
      convstr[sizeof w21.wa21.coord[0]] = '\0';
      printf("X coordinate = %s\n", convstr);
      memcpy(convstr, w21.wa21.coord[1], sizeof w21.wa21.coord[1]);
      convstr[sizeof w21.wa21.coord[1]] = '\0';
      printf("Y coordinate = %s\n", convstr);
      // these fields are returned for function 1E calls only
      memcpy(convstr, w21.wa21.ad, sizeof w21.wa21.ad);
      convstr[sizeof w21.wa21.ad] = '\0';
      printf("Assembly District = %s\n", convstr);
      memcpy(convstr, w21.wa21.ed, sizeof w21.wa21.ed);
      convstr[sizeof w21.wa21.ed] = '\0';
      printf("Election District = %s\n", convstr);
      //////////////////////////////////////////////////////////////////////
      // function D, a 1 workarea call to Geosupport, converts
      // housenumbers in sort format to housenumbers in display format and
      // street codes to street names
      //////////////////////////////////////////////////////////////////////
      // set up workarea 1 defined for function D calls
      memset(w1fd.wa1fdc, ' ', LEN_WA1);
      w1fd.wa1fd.input.platform_ind = 'C';
      memcpy(w1fd.wa1fd.input.func_code, "D ", 2);
      memcpy(w1fd.wa1fd.input.hse_nbr_hns, w21.wa21.hi_hse_nbr,
        sizeof w21.wa21.hi_hse_nbr);
      memcpy(w1fd.wa1fd.input.lohse_nbr_hns, w21.wa21.lo_hse_nbr,
        sizeof w21.wa21.lo_hse_nbr);
      memcpy(w1fd.wa1fd.input.sti, w1.wa1.output.sto, 1);
      memcpy(w1fd.wa1fd.input.sti[0].SC10, w1.wa1.output.sto[0].SC10, 5);
      // make 1 work area call
      NYCgeo(w1fd.wa1fdc);
      // function D completed successfully
      if ((memcmp(w1fd.wa1fd.output.ret_code, "00", 2) == 0) |
      (memcmp(w1fd.wa1fd.output.ret_code, "01", 2) == 0))
      {
        ////////////////////////////////////////////////////////////////////
        // prepare output fields from function D call
        ////////////////////////////////////////////////////////////////////
        memcpy(convstr, w1fd.wa1fd.output.lo_hse_nbr_disp,
          sizeof w1fd.wa1fd.output.lo_hse_nbr_disp);
        convstr[sizeof w1fd.wa1fd.output.lo_hse_nbr_disp] = '\0';
        printf("Low House Number of Block Face = %s", convstr);
        memcpy(convstr, w1fd.wa1fd.output.hi_hse_nbr_disp,
          sizeof w1fd.wa1fd.output.hi_hse_nbr_disp);
        convstr[sizeof w1fd.wa1fd.output.hi_hse_nbr_disp] = '\0';
        printf("High House Number of Block Face = %s", convstr);
        memcpy(convstr, w1fd.wa1fd.output.sto[0].Street_name,
          sizeof w1fd.wa1fd.output.sto[0].Street_name);
        convstr[sizeof w1fd.wa1fd.output.sto[0].Street_name] = '\0';
        printf("Street Name from Function D = %s", convstr);
      }
      // there was an error in the function D call
      else
      {
        // display grc of function D call
        memcpy(convstr, w1fd.wa1fd.output.ret_code,
          sizeof w1fd.wa1fd.output.ret_code);
        convstr[sizeof w1fd.wa1fd.output.ret_code] = '\0';
        printf("Error on Function D call: %s\n", convstr);
        // display grc message of function D call
        memcpy(convstr, w1fd.wa1fd.output.msg, sizeof w1fd.wa1fd.output.msg);
        convstr[80] = '\0';
        printf(" : %s\n", convstr);
      }
    }
    // there was an error in the function 1E call
    else
    {
      // display grc
      memcpy(convstr, w1.wa1.output.ret_code, sizeof w1.wa1.output.ret_code);
      convstr[sizeof w1.wa1.output.ret_code] = '\0';
      printf("Error on Function 1E call: %s\n", convstr);
      // display grc message
      memcpy(convstr, w1.wa1.output.msg, sizeof w1.wa1.output.msg);
      convstr[80] = '\0';
      printf(" : %s\n", convstr);
    }
    free (convstr);
    } // end of main  

## <span id="chapterII.9.2"> II.9.2 Visual Basic (VB/VBA) Sample Program with Description </span>

*This section walks you through writing a Visual Basic (VB) or Visual Basic for Applications (VBA) program that makes Geosupport Desktop Edition calls. It assumes that you are familiar with your Integrated Development Environment (IDE) and that you know how to code in VB or VBA. This sample program is based on a simple form that provides input fields and output fields to display the returned data. The code is attached to a command button and responds to a "click" event. Please note: The program in this section represents just one of many styles of coding in Visual Basic. It may be used as a sample. It is not guaranteed.*  

There are six basic steps to making Geosupport Desktop Edition calls from a VB/VBA program:  
  1. declare the work area variable definitions.  
  2. declare the NYCgeo procedure.  
  3. prepare Work Area 1.  
  4. call NYCgeo.  
  5. check the Geosupport return code  
  6. access the data in Work Area 1 and Work Area 2  
  optional step - convert house numbers in sort format or street codes with a function D call.  

  That's it. If you follow this list, in no time you should be writing VB programs that take
advantage of the power of Geosupport.  

<h5>Declare the Work Area Variables </h5>  
VB/VBA users may use the tyepdef file found in <br>
<span class="customPre"> c:\program files\Geosupport Desktop Edition\include\vbwadef.bas </span> <br>
or they may choose to code their own typedefs using the character-only Work Area descriptions that can be found in [Appendix 2](/appendices/appendix02/) as the guide. It is recommended that you use the supplied typedef file.

The sample program in Listing II.16 does not use the typedef file, vbwadef.bas, but does create similar typedefs for Work Area 1 and Work Area 2 for Functions 1/1E. If the users choose to create their own typedefs, particular attention should be paid to setting up Work Area 1 as this is used in every function call. Listing II.9 shows a few examples of how to set up Work Area 1 as well as a second Work Area 1 to be used in making Function D calls (see Line 33 in Listing II.9).  

If this code is part of a VBA application and is attached to a Form, you may have to declare the variables and types as Private. Because the code in Listing II.16 at the end is attached to a Form, the variables and types are declared as Private.  

<b>Listing II.9 Declare the Work Area Variables </b>  

    1: Type STREET
    2: boro As String * 1
    3: sc10 As String * 10
    4: Street_name As String * 32
    5: End Type
    6: Type INPUT_DEF
    7: func_code As String * 2
    8: house_num As String * 16
    9: house_num_sort As String * 11
    10: lo_house_num As String * 16
    11: lo_house_num_sort As String * 11
    12: sti(1 To 3) As STREET
    13: filler01 As String * 175
    14: End Type
    15: Type OUTPUT_DEF
    16: boro_name As String * 9
    17: house_num As String * 16
    18: house_num_sort As String * 11
    19: sto(1 To 3) As STREET
    20: filler02 As String * 11
    21: lo_house_num As String * 16
    22: lo_house_num_sort As String * 11
    23: filler05 As String * 154
    24: ret_code As String * 2
    25: msg As String * 80
    26: filler03 As String * 402
    27: End Type
    28: Type C_WA1
    29: input1 As INPUT_DEF
    30: output1 As OUTPUT_DEF
    31: End Type
    32: vbwa1 As C_WA1
    33: fdwa1 As C_WA1  

<h5> Declare the NYCgeo Procedure </h5>  

Listing II.10 below shows one example of how you can declare a Sub procedure to call Geosupport Desktop Edition. If "NYCgeo.dll" is not in your Windows system directory (usually c:\winnt\system) or not in your include path, then you should give its fully qualified path name (e.g. "c:\myproj\files\NYCgeo.dll"). You may use whatever naming convention you wish for your Sub procedures, but the Alias must always be "NYCgeo".  

Line 2 in Listing II.10 shows how to declare a Sub procedure to call Geosupport Desktop Edition for a one-work-area call. The first parameter is Work Area 1 but the second parameter must be defined as "Optional". Setting its default value to "Nothing" is not required but a safe programming technique.  

<b>Listing II.10 Declare the NYCgeo Procedure</b>  

```
1: Declare Sub wgF1E Lib "NYCgeo.dll" Alias "NYCgeo" (x As C_WA1, _y As C_WA2_F1E)  
2: Declare Sub wgFD Lib "NYCgeo.dll" Alias "NYCgeo" (x As C_WA1, _Optional y = Nothing)  
```

<h5>Prepare Work Area 1 </h5>  

There are two steps that must precede every call to Geosupport. First, Work Area 1 must be initialized to spaces (see lines 1 - 7 in Listing II.11 below). Second, the "platform indicator" field must be set to 'C' (see line 8 in Listing II.11 below).  

Other than the two steps above, there is only one other field that must contain a value on every call. That is the "function code" field. The remaining fields and their values that are set up will vary with the function call you want to make. Line 9 in Listing II.11 below shows you how to indicate you want to make a Function 1E call. Function 1E requires as input a borough code, a house number, and a street name or street code (see lines 10 through 12 in Listing II.11).  

<b>Listing II.11 Prepare Work Area </b>  
```
1: vbwa1.input1.house_num = " "
2: vbwa1.input1.house_num_sort = " "
3: vbwa1.input1.lo_house_num = " "
4: vbwa1.input1.lo_house_num_sort = " "
5: vbwa1.input1.sti(1).boro = " "
6: vbwa1.input1.sti(1).sc10 = " "
7: vbwa1.input1.sti(1).Street_name = " "
8: vbwa1.input1.platform_ind = "C"
9: vbwa1.input1.func_code = "1E"
10: vbwa1.input1.sti(1).boro = Form_Geodlg.txtboro
11: vbwa1.input1.house_num = Form_Geodlg.txthousenumber
12: vbwa1.input1.sti(1).Street_name = Form_Geodlg.txtstreetname
```  

<h5>Call NYCgeo</h5>  

Now that we have set up Work Area 1 for the desired function we can now look at how to make the call. Line 1 in Listing II.12 below shows the code to make the Geosupport Desktop Edition call.  

<b>Listing II.12 Call NYCgeo</b>  
```
1: wgF1E vbwa1, vbwa21e
```  

<h5> Check the Return Code </h5>  
After you've made the Geosupport call, you need to check the Return Code in the Output section of Work Area 1 (Listing II.13 below). A return code of <00' indicates a successful call and a value of <01' indicates a successful call but there is a warning message you should check. Any other Return Code value indicates that an error has taken place; you will want to have special processing to handle these situations. For a complete listing of the Warning and Error codes see "Geosupport Return Codes, Reason Codes, and Messages" in [Appendix 4](/appendices/appendix04/) of this guide.  

<b>Listing II.13 Check the Return Code </b>  
```
1:If vbwa1.output1.ret_code = "00" Then
2: 'code to process successful call goes here
3: Else
4: If vbwa1.output1.ret_code = "01" Then
5: 'code to process a successful call with a warning goes here
6: Else
7: 'code to process an unsuccessful call goes here
8: End
```  

<h5>Access the Data from the Work Areas </h5>  

Listing II.14 below gives several examples of accessing data in the work areas after a successful Geosupport Function 1E call. Of course, you may not want to display the data at this point. You may want to write the data to a file or do some other processing.  

<b>Listing II.14 Access the Data from the Work Areas </b>  
```
1: Form_Geodlg.txtB10SC = vbwa1.output1.sto(1).boro +
2: vbwa1.output1.sto(1).sc10
3: Form_Geodlg.txtzipcode = vbwa21e.zip_code
4: Form_Geodlg.txtlhns = vbwa21e.lo_house_num_sort
5: Form_Geodlg.txtlb5sc = vbwa21e.lo_xsts.B5SC_low1(1)
6: Form_Geodlg.txthhns = vbwa21e.hi_house_num_sort
7: Form_Geodlg.txthb5sc = vbwa21e.hi_xsts.B5SC_high
1(1)
```  

<h5>Convert House Numbers in Sort Format and Street Codes </h5>  
To convert house numbers in sort format to house numbers in display format or street codes to street names make a function D call. Function D calls (see Listing II.15 below) follow the same procedure as the other functions with one exception, only Work Area 1 is passed as a parameter (see line 16 in Listing II.15 below). Also note: We've used a second copy of Work Area 1 (see Line 33 in Listing II.9 above) so that the data in Work Area 1 from the original function 1E call is not lost.  

<b>Listing II.15 Convert House numbers in Sort Format with Function D call </b>
```
1: // initialize work area 1 defined for Function D calls
2: fdwa1.input1.house_num = " "
3: fdwa1.input1.house_num_sort = " "
4: fdwa1.input1.lo_house_num = " "
5: fdwa1.input1.lo_house_num_sort = " "
6: fdwa1.input1.sti(1).boro = " "
7: fdwa1.input1.sti(1).sc10 = " "
8: fdwa1.input1.sti(1).Street_name = " "
9: // set up work area 1 defined for function D calls
10: fdwa1.input1.platform_ind = "C"
11: fdwa1.input1.func_code = "D "
12: fdwa1.input1.sti(1).boro = vbwa1.output1.sto(1).boro
13: fdwa1.input1.house_num_sort = vbwa21e.hi_house_num_sort
14: fdwa1.input1.lo_house_num_sort = vbwa21e.lo_house_num_sort
15: // make 1 work area function D call
16: wgFD fdwa1
17: // check the return code and access the converted house numbers
18: If vbwa1.output1.ret_code = "00" Or vbwa1.output1.ret_code = "01" Then
19: Form_Geodlg.txthhnd = fdwa1.output1.house_num
20: Form_Geodlg.txtlhnd = fdwa1.output1.lo_house_num
21: End If  
```  

You've now seen how to make Geosupport calls from your VB or VBA program. Of course, your style of coding may be different and your processing will probably be more involved. But if you follow these few simple steps you can easily harness the power of Geosupport Desktop Edition in your VB or VBA programs.
Listing II.16 below contains a VBA sample application with the complete variable declarations for Work Area 1 and Work Area 2 for Function 1E.  

<b>Listing II.16 Work Area 1 and Work Area 2 for Function 1E Variable Declarations with Sample Code </b>  

```
Option Explicit
'*****************************************************************************
'Some situations may requires these to be declared as Private
'*****************************************************************************
'define data types
Private Type STREET
  boro As String * 1
  sc10 As String * 10
  Street_name As String * 32
End Type

Private Type BBL
  boro As String * 1
  block As String * 5
  lot As String * 4
End Type

'typedef for input area of work area 1
Private Type INPUT_DEF
  func_code As String * 2
  house_num As String * 16
  house_num_sort As String * 11
  lo_house_num As String * 16
  lo_house_num_sort As String * 11
  sti(1 To 3) As STREET
  bbli As BBL
  filler01 As String * 1
  bin As String * 7
  compass_direction As String * 1
  compass_direction2 As String * 1
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

'typedef for output area of work area 1
Private Type OUTPUT_DEF
  boro_name As String * 9
  house_num As String * 16
  house_num_sort As String * 11
  sto(1 To 3) As STREET
  bblo As BBL
  filler05 As String * 1
  lo_house_num As String * 16
  lo_house_num_sort As String * 11
  bin As String * 7
  attr_byte(1 to 3) As String * 1
  filler06 As String * 139
  reason_code As String * 1
  filler07 As String * 1
  warn_code As String * 2
  ret_code As String * 2  
  msg As String * 80
  nbr_names As String * 2
  B7SC(1 to 10) As String * 8
  st_names(1 to 10) As String * 32
End Type

'typedef for work area 1
Private Type C_WA1
  input1 As INPUT_DEF
  output1 As OUTPUT_DEF
End Type

'typedefs used in work area 2
Private Type St_list
  nbr_sts As String * 1
  B5SC(1 To 5) As String * 6
End Type

Private Type St_list_high1
  nbr_sts_high1 As String * 1
  B5SC_high1(1 To 5) As String * 6  
End Type  

Private Type St_list_low1
  nbr_sts_low1 As String * 1
  B5SC_low1(1 To 5) As String * 6
End Type

'typedef for work area 2 for function 1
  Private Type C_WA2_F1E  
  filler08 As String * 21  
  cont_parity_ind As String * 1  
  lo_house_num_sort As String * 11  
  hi_house_num_sort As String * 11  
  lgc As String * 2  
  lo_xsts As St_list_low1  
  hi_xsts As St_list_high1  
  lion_key As String * 10  
  sagr_flag As String * 1  
  sos_ind As String * 1  
  seg_len As String * 5  
  Xcoord As String * 7  
  Ycoord As String * 7  
  Zcoord As String * 7  
  iaei As String * 1  
  mh_ri_flag As String * 1  
  DOT_slca As String * 1  
  com_dist As String * 3  
  zip_code As String * 5  
  ed As String * 3  
  ad As String * 2  
  sped_flag As String * 1  
  congress_dist As String * 2  
  state_sen_dist As String * 2  
  civil_court as String * 2  
  city_council As String * 2  
  health_cent As String * 2  
  health_area As String * 4  
  sanit_dist As String * 3  
  sanit_sub_sect As String * 2  
  sanit_reg_pick_up As String * 5   
  police_boro_com As String * 1  
  police_pct As String * 3  
  fire_div As String * 2  
  fire_bat As String * 2  
  fire_co_type As String * 1  
  fire_co As String * 3     
  scsd_flag As String * 1    
  com_schl_dist As String * 3    
  dynam_block As String * 3  
  filler02 As String * 9  
  cen_tract_90 As String * 6  
  cen_tract_00 As String * 6  
  cen_blk_00 As String * 4  
  filler04 As String * 51  
  true_B7SC As String * 8  
  seg_id As String * 7  
  curve_flag As String * 1  
End Type  

'define variables  
  Private vbwa1 As C_WA1    
  Private fdwa1 As C_WA1    
  Private vbwa21e As C_WA2_F1E     

'define NYCgeo function  
  Private Declare Sub wgF1E Lib "NYCgeo.dll" Alias "NYCgeo" (x As C_WA1, _y As C_WA2_F1E)  
  Private Declare Sub wgFD Lib "NYCgeo.dll" Alias "NYCgeo" (x As C_WA1, _Optional y = Nothing)  

'*******************************************************************************
Private Sub Call_wgF1E_Click()  
  'setup work area 1  
  'need better way to initialize wa1 to spaces   
  vbwa1.input1.house_num = " "  
  vbwa1.input1.house_num_sort = " "  
  vbwa1.input1.lo_house_num = " "   
  vbwa1.input1.lo_house_num_sort = " "  
  vbwa1.input1.sti(1).boro = " "  
  vbwa1.input1.sti(1).sc10 = " "  
  vbwa1.input1.sti(1).Street_name = " "  
  vbwa1.input1.platform_ind = "C"  
  vbwa1.input1.func_code = "1E"  
  vbwa1.input1.sti(1).boro = Form_Geodlg.txtboro  
  vbwa1.input1.house_num = Form_Geodlg.txthousenumber  
  vbwa1.input1.sti(1).Street_name = Form_Geodlg.txtstreetname  

  'call geosupport  
  wgF1E vbwa1, vbwa21e  

  'check the return code and process output  
  'this program assumes the existence of a form called Geodlg  
  If vbwa1.output1.ret_code = "00" Or vbwa1.output1.ret_code = "01" Then  
    Form_Geodlg.txtB10SC = vbwa1.output1.sto(1).boro + vbwa1.output1.sto(1).sc10  
    Form_Geodlg.txtzipcode = vbwa21e.zip_code  
    Form_Geodlg.txtlhns = vbwa21e.lo_house_num_sort    
    Form_Geodlg.txtlb5sc = vbwa21e.lo_xsts.B5SC_low1(1)     
    Form_Geodlg.txthhns = vbwa21e.hi_house_num_sort  
    Form_Geodlg.txthb5sc = vbwa21e.hi_xsts.B5SC_high1(1)    

    'func d call to convert house numbers in sort format to    
    'setup work area 1  
    fdwa1.input1.house_num = " "  
    fdwa1.input1.house_num_sort = " "  
    fdwa1.input1.lo_house_num = " "  
    fdwa1.input1.lo_house_num_sort = " "  
    fdwa1.input1.sti(1).boro = " "  
    fdwa1.input1.sti(1).sc10 = " "  
    fdwa1.input1.sti(1).Street_name = " "  

    fdwa1.input1.platform_ind = "C"  
    fdwa1.input1.func_code = "D "  
    fdwa1.input1.sti(1).boro = vbwa1.output1.sto(1).boro  
    fdwa1.input1.house_num_sort = vbwa21e.hi_house_num_sort  
    fdwa1.input1.lo_house_num_sort = vbwa21e.lo_house_num_sort wgFD fdwa1  

    If vbwa1.output1.ret_code = "00" Or vbwa1.output1.ret_code = "01" Then  
      Form_Geodlg.txthhnd = fdwa1.output1.house_num  
      Form_Geodlg.txtlhnd = fdwa1.output1.lo_house_num  
    End If  
    Else  
      Form_Geodlg.txtGRC = vbwa1.output1.ret_code  
      Form_Geodlg.txtmessage = vbwa1.output1.msg  
      End If  
End Sub  
```
