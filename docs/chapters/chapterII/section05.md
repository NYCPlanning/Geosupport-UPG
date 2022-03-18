<h2> II.5 Coding Geosupport API Calls </h2>  

The languages discussed in this section are C/C++ and Visual Basic/VBA. In general, the
discussion assumes that the defaults were chosen during installation of Geosupport Desktop
Edition.  

This section describes the source code statements that the user must code in C/C++ and Visual
Basic/VBA application programs to call the DLL. Also described are the statements required to
declare the DLL.  

As discussed in [Chapter II.4](../section04/), typically, the DLL can be called either with one or with two calling
parameters. The first parameter passes the address of Work Area 1 to the DLL. If the
application program is making a two-work-area call, the second parameter passes the address of
Work Area 2 to the DLL.  

The programming statements to declare and call the DLL are shown below.  
<u>Declaring the DLL </u>  

In a C/C++ program, the DLL is declared by including the <span class="customPre"> NYCgeo.h </span> header file that is distributed with Geosupport Desktop Edition, as shown below:  

      #include "NYCgeo.h"  

In a Visual Basic/VBA program, the DLL must be declared to have two calling parameters for
two-work-area calls and also two calling parameters for one-work area calls. This will not affect
the processing. Examples of declaring NYCgeo for a two-work-area call (function 1E) and a
one-work-area call (function D) appear below:

    Declare Sub wgF1E Lib "NYCgeo.dll" Alias "NYCgeo" (x As C_WA1, y As C_WA2_F1E)  
    Declare Sub wgFD Lib "NYCgeo.dll" Alias "NYCgeo" (x As C_WA1, Optional y = NOTHING)  

<u>Calling the DLL </u>
If ‘WA1’ and ‘WA2’ are the names that the user has given to the work areas within the application program source code, the statement calling the DLL would be coded as follows:

<table class= "borderlessTable">
  <tr>
   <th><u>Language</u> </th>
   <th><u> One-Work-Area Call</u> </th>
   <th><u>Two-Work-Area Call</u></th>
  </tr>
  <tr>
    <td> C/C++ </td>
    <td><span class="customPre">NYCgeo(&WA1);</span></td>
    <td><span class="customPre">NYCgeo(&WA1,&WA2);<span></td>
  </tr>
  <tr>
    <td>Visual Basic/VBA</td>
    <td><span class="customPre">wgFD wa1</span></td>
    <td><span class="customPre">wgF1E wa1, wa2</span></td>
  </tr>
</table>  
