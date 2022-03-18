<h2>II.7 Coding API Calls When Using Geosupport C/C++ Header Files  </h2>

This section describes the source code statements that users must code in application programs
that use the Geosupport header file. The required statements consist of a declarative statement to
reference the header file and statements calling the DLL.  

In [Chapter II.5](../../chapterII/section05), the forms of calls to the DLL were given using arbitrary data names for the work
areas. In programs that do not use the Geosupport header file, those names are user-selectable.
In the present section, the forms of the DLL calls are given again, this time with the specific data
names that are required for compatibility with the header file. The C/C++ languages permit
header file users to select their own names for the work areas (but not for the fields within the
work areas). Prior to each call to the DLL, the program must prime Work Area 1 with the input
data to be processed by Geosupport, as described in [Chapter II.3](../../chapterII/section03).  

## <span id="chapterII.7.1"> II.7.1 C/C++ Source Code Statement  </span>

To reference the Geosupport C/C++ header file which contains the work area layouts, the C/C++
program must contain the following statement:  
```
    #include "pac.h"  
```
The work area layouts must be declared using the typedefs in the Geosupport header file. For
example:  

<table class="borderlessTable">
  <tr>
    <td>C_WA1 anyname_wa1; </td>
    <td>WA1, all functions</td>
  <tr>
  <tr>
    <td>C_WA2_F1 anyname_wa2_f1;</td>
    <td>WA2, Functions 1 & 1E</td>
  <tr>
  <tr>
    <td>C_WA2_F1A anyname_wa2_f1a;</td>
    <td>WA2, Functions 1A & BL (regular & long WA2), BN</td>
  <tr>
  <tr>
    <td>C_WA2_F2 anyname_wa2_f2; </td>
    <td>WA2, Function 2</td>
  <tr>
  <tr>
    <td>C_WA2_F2 anyname_wa2_f3; </td>
    <td>WA2, Function 3</td>
  <tr>
  <tr>
    <td>C_WA2_F3C anyname_wa2_f3c; </td>
    <td>WA2, Function 3C</td>
  <tr>
  <tr>
    <td>C_WA2_F3S anyname_wa2_f3s;</td>
    <td>WA2, Function 3S</td>
  <tr>
</table>  

For C/C++ programs that use the Geosupport header file, API calls may be coded as follows:  

<table class="borderlessTable">
<tr>
  <td>NYCgeo (&anyname_wa1); </td>
  <td>One-work-area calls, all functions.</td>
<tr>
<tr>
  <td>NYCgeo (&anyname_wa1,&anyname_wa2_f1); </td>
  <td>Two-work-area calls, Functions 1 & 1E</td>
<tr>
<tr>
  <td>NYCgeo (&anyname_wa1,&anyname_wa2_f1a);</td>
  <td>Two-work-area calls, Functions 1A & BL (regular & long WA2), BN</td>
<tr>
<tr>
  <td>NYCgeo (&anyname_wa1,&anyname_wa2_f2);</td>
  <td>Two-work-area calls, Function 2</td>
<tr>
<tr>
  <td>NYCgeo (&anyname_wa1,&anyname_wa2_f3);</td>
  <td>Two-work-area calls, Function 3</td>
<tr>
<tr>
  <td>NYCgeo (&anyname_wa1,&anyname_wa2_f3c);</td>
  <td>Two-work-area calls, Function 3C</td>
<tr>
<tr>
  <td>NYCgeo (&anyname_wa1,&anyname_wa2_f3s);</td>
  <td>Two-work-area calls, Function 3S</td>
<tr>
</table>

An alternative method of calling NYCgeo from C/C++ appears in the sample program. Please
see [Chapter II.9](../../chapterII/section09).  
