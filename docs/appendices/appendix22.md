<h2 class="pdfAppendix"><center>APPENDIX 22: GeoX Programming Guide</center></h2>

*This document assumes that the developer is using the 64-bit verion of GeoX which is based on EntireX 8.2.2.*

## GeoX Overview

GeoX classes allow developers to write applications that can make Geosupport calls via an EntireX Broker running on the DoITT mainframe or to a locally running Geosupport Desktop Edition (GDE).  
Most Geosupport calls consist of what we call “two work area calls”.  A work area is a data structure.  These two work areas are Work Area 1 which is used for all calls and a Work Area 2 (which varies depending on the Geosupport function call and options you are using).  
Work Area 1 (Wa1) consists of input fields for the various function parameters and output fields which return standardized versions of the input parameters as well as return codes and return messages.  
Work Area 2 corresponds to the type of Geosupport function you are calling and the options you are using.  For example, if to make a Function 1E (geographic information for an input address) with the "extended mode switch" set to "X", then along with Wa1 you would pass in Wa2f1ex.

## Setup

Install the 64-bit Geosupport Desktop Edition on your PC.  
Navigate to <b>C:\Program Files\Geosupport Desktop Edition\GeoX\Dotnet\misc</b>
Run entirexminiruntime_64.exe (This will install the needed EntireX components)

The supporting files that are needed are:


<table>

<tr><td colspan="2"> Supporting Files</td></tr><tr>
<td rowspan="3">DCP Components</td>
<td>GeoX.dll <i>(This is the primary component.)</i></td></tr>
<tr><td>GeoXClientStub.dll</td></tr>
<tr><td>GeoConns.xml <i>(This is a list of Brokers that GeoX will call)</i></td></tr>


<tr><td rowspan="3">EntireX Components</td>
<td>SoftwareAG.EntireX.NETWrapper.Runtime.dll</td></tr>
<tr><td>broker.dll</td></tr>
<tr><td>erx.dll </td></tr>

<tr><td>EntireX Configuration Files</td>
<td>SoftwareAG.EntireX.NETWrapper.Runtime.xml <i>(This tells the Runtime.dll the location for erx.dll.)</i></td></tr>

</table>


## Using GeoX in a .NET Program

Create your application project.

Add a reference to GeoX.dll to your project.  This should bring in the following:  
* GeoX.dll  
* GeoXClientStub.dll  
* SoftwareAG.EntireX.NETWrapper.Runtime.dll  
* SoftwareAG.EntireX.NETWrapper.Runtime.xml  

To use the GeoX.Net classes without using fully qualified names include the following:

		Imports DCP.Geosupport.DotNet.GeoX			'for Visual Basic .Net
		using DCP.Geosupport.DotNet.GeoX			//for C#

You are now ready to use the GeoX .Net classes in your application.



Important Note on Installing EntireX

When you are ready to distribute your application, you must make sure that GeoX.dll and its supporting components are copied along with your application.   Additionally, the underlying components for EntireX (broker.dll and erx.dll) must be in the application PATH.  You have two options for the underlying EntireX components:  

1. This is the preferred method.  Run entirexminiruntime_64.exe on each computer that you are going to deploy the application to.  If this is going to be run from a server, then the server is the only computer you need to run this on; you do not need to run this on clients’ computers that access the server.  If you are to run as a stand-alone application on individual computers, then you must run this on each computer your application is installed on.   

2. This method is primarily used when the application is accessed from a file server and there are too many users to easily run entirexminiruntime_64.exe on each computer.  Manually copy the EntireX Components (broker.dll and erx.dll) to your application directory.  Then modify SoftwareAG.EntireX.NETWrapper.Runtime.xml to indicate the location of these components.  To do this:

a. Edit SoftwareAG.EntireX.NETWrapper.Runtime.xml  
b. Search for “Runtime.ERX.Location”  
c. Replace the existing location, likely "C:\Program Files\Common Files…"
With “.\” [Do Not Include the Quotes]

## Sample Code for Function 1E

    ****************************************************************************************************
    VB.Net Code Snippet for Extended Work Area 2 Function 1E Call
    ****************************************************************************************************
    Imports DCP.Geosupport.DotNet.GeoX

    Module Module1

    '--create a list of connections to use
    Dim myGeoConns as New GeoConnsCollection("GeoConns.xml")
    '---------------------------------------------------------------------------
    'ASP.Net applications will instead need to add a line similar to this:
    '     Dim myGeoConns as GeoConnCollection
    '     myGeoConns = New GeoConnCollection(Server.MapPath("GeoConns.xml"))
    '---------------------------------------------------------------------------

    '--create your geo object (makes calls to Geosupport
    '--create your Wa1 object (input to Geosupport)
    '--create your Wa2 object (output from Geosupport)
    Dim myGeo As New geo(myGeoConns)
    Dim myWa1 As New Wa1
    Dim myWa2f1ex As New Wa2F1ex

    Sub Main()

       '--initialize your input
       myWa1.Clear

       '--choose the Geosupport function to call (1 returns geographic info for an address)
       myWa1.in_func_code = "1E"

       '--tell Geosupport to use platform independent work areas
       myWa1.in_platform_ind = "C"

       '--set optional processing flags (if any)
       myWa1.in_mode_switch = "X"

       '--set the input data
       myWa1.in_B10sc1.boro = "1"
       myWa1.in_hnd = "22"
       myWa1.in_stname = "Reade Street"

       '--make a call to Geosupport passing in the correct Work Area 2 object
       myGeo.GeoCall(myWa1, myWa2f1ex)

       '--check the return codes from your Geosupport call
       If myWa1.out_grc = "00"
          Console.WriteLine("Successful Geosupport Call")
          Console.WriteLine(myWa2f1ex.Print)
       Else If myWa1.out_grc = "01"
          Console.WriteLine("Successful Geosupport Call with Warning")
          Console.WriteLine(myWa2f1ex.Print)
       Else If mywa1.out_grc = "XX"
          Console.WriteLine("Unable to find Broker or GDE")
          Console.WriteLine(myWa1.Print)
       Else
          Console.WriteLine("Unsuccessful Geosupport Call")
          Console.WriteLine(myWa1.Print)
       End If

    End Sub

    End Module

## Sample Code for Function BL

        ****************************************************************************************************
        VB.Net Code Snippet for Extended Work Area 2 Function BL Call
        ****************************************************************************************************
        Imports DCP.Geosupport.DotNet.GeoX

        Module Module1

        '--create a list of connections to use
        Dim myGeoConns as New GeoConnsCollection("GeoConns.xml")
        '---------------------------------------------------------------------------
        'ASP.Net applications will instead need to add a line similar to this:
        '     Dim myGeoConns as GeoConnCollection
        '     myGeoConns = New GeoConnCollection(Server.MapPath("GeoConns.xml"))
        '---------------------------------------------------------------------------

        '--create your geo object (makes calls to Geosupport
        '--create your Wa1 object (input to Geosupport)
        '--create your Wa2 object (output from Geosupport)
        Dim myGeo As New geo(myGeoConns)
        Dim myWa1 As New Wa1
        Dim myWa2f1ax As New Wa2F1ax

        Sub Main()

           '--initialize your input
           myWa1.Clear

           '--choose the Geosupport function to call (BL returns tax lot info for an BBL)
           myWa1.in_func_code = "BL"

           '--tell Geosupport to use platform independent work areas
           myWa1.in_platform_ind = "C"

           '--set optional processing flags (if any)
           myWa1.in_mode_switch = "X"

           '--set the input data
           myWa1.in_bbl.boro = "1"
           myWa1.in_bbl.block = "00154"
           myWa1.in_bbl.lot = "0023"

           '--make a call to Geosupport passing in the correct Work Area 2 object
           myGeo.GeoCall(myWa1, myWa2f1ax)

           '--check the return codes from your Geosupport call
           If myWa1.out_grc = "00"
              Console.WriteLine("Successful Geosupport Call")
              Console.WriteLine(myWa2f1ax.Print)
           Else If myWa1.out_grc = "01"
              Console.WriteLine("Successful Geosupport Call with Warning")
              Console.WriteLine(myWa2f1ax.Print)
           Else If mywa1.out_grc = "XX"
              Console.WriteLine("Unable to find Broker or GDE")
              Console.WriteLine(myWa1.Print)
           Else
              Console.WriteLine("Unsuccessful Geosupport Call")
              Console.WriteLine(myWa1.Print)
           End If

        End Sub

        End Module



## Selecting the Broker to Use

These classes allow developers to make calls to Geosupport running on the DoITT mainframe or a locally running Geosupport Desktop Edition.  This is done by creating a GeoConnsCollection object that points to a list of Brokers.  One of the benefits of using this collection is that if there is a problem with one of the Brokers, the classes will go to the next Broker in the list.  

The best way create the GeoConnsCollection object is to point it to a GeoConns.xml file that is external to the application.  Below is a sample GeoConns.xml:  

    <?xml version="1.0"?>
    <ArrayOfGeoConn xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <GeoConn>
        <Broker>mvsp.nycnet:4036</Broker>
        <Server>P030A/GEOXSERVER/GEOSUPPORTSERVICE</Server>
      </GeoConn>
      <GeoConn>
        <Broker>mvsp.nycnet:4074</Broker>
        <Server>P030A/GEOXSERVER/GEOSUPPORTSERVICE</Server>
      </GeoConn>
      <GeoConn>
        <Broker>mvsp.nycnet:4055</Broker>
        <Server>T030A/GEOXSERVER/GEOSUPPORTSERVICE</Server>
      </GeoConn>
      <GeoConn>
        <Broker>GDE</Broker>
        <Server></Server>
      </GeoConn>
    </ArrayOfGeoConn>

The first two GeoConn entries  

      <GeoConn>
        <Broker>mvsp.nycnet:4036</Broker>
        <Server>P030A/GEOXSERVER/GEOSUPPORTSERVICE</Server>
      </GeoConn>
and  

      <GeoConn>
        <Broker>mvsp.nycnet:4074</Broker>
        <Server>P030A/GEOXSERVER/GEOSUPPORTSERVICE</Server>
      </GeoConn>  

point to the two production brokers (production Geosupport) on the DoITT mainframe.    

The third entry  

      <GeoConn>
        <Broker>mvsp.nycnet:4055</Broker>
        <Server>T030A/GEOXSERVER/GEOSUPPORTSERVICE</Server>
      </GeoConn>  

points to the test broker (which points to the test version of Geosupport).     

The final entry  

      <GeoConn>
        <Broker>GDE</Broker>
        <Server></Server>
      </GeoConn>  

means that a locally running Geosupport Desktop Edition (GDE) will be called instead of a broker.  GDE must be installed or you will get an execption.  


## Which Functions to Use

Overview of What the Functions Do


| Function     | Input      | Data Returned     |
| :------------- | :------------- | :------------- |
| 1       | address       | Geographic and City Service Information       |
| 1E       | address       | Geographic, City Service Information, and Political Districts        |
| 1A       | address       | Tax Property Level Information, Alternate Addresses for Property       |
| 1B       | address       | Combines 1E (Extended) with 1A (Extended) information       |
| AP       | address       | Address Point ID and Address Point XY coordinates       |
| 1N       | street name       | Normalized Street Name and Street Code       |
| 2       | intersection, node id      | Geographic Information        |
| 3, 3C       | street segment       | Geographic Information       |
| 3S       | street segment       | List of Intersecting Streets and their Node IDs       |
| BL       | BBL       | Same as 1A       |
| BIN       | BIN       | Same as 1A       |
| D, DG, DN       | street code       | Normalized Street Name for input street code       |  


## Which Options to Use

<table>
<tr><th colspan="2">Formatting Properties</th></tr>
<tr><td rowspan="2">in_hn_justification</td><td>When set to “L” House Numbers in Display Format are left-justified</td></tr>
<tr><td>When set to “R” House Numbers in Display Format are right-justified</td></tr>

<tr><td rowspan="4">in_snl</td></tr>
<tr><td>The input street names will be normalized to the indicated length</td></tr>
<tr><td>Valid values are minimum of  4 and a maximum of 32</td></tr>
<tr><td>Some streets may not be able to be normalized to the requested length</td></tr>

<tr><td rowspan="4">in_stname_normalization</td></tr>
<tr><td>When set to blank street names are normalized in sort format</td></tr>
<tr><td>When set to “C” street names are normalized in compact format</td></tr>
<tr><td>When set to “S” street names are normalized in sort format</td></tr>


<tr><th colspan="2">Additional Information Properties (these usually require a different Work Area 2)</th></tr>
<tr><td rowspan="3">in_auxseg_switch</td></tr>
<tr><td>When set to “Y” the list of Segment IDs for a street segment are</td></tr>
<tr><td>Appended to the Work Area 2;  for Functions 3 and 3C only</td></tr>


<tr><td rowspan="4">in_long_wa2_flag</td></tr>
<tr><td>When set to “Y” the long workarea for the function is returned</td></tr>
<tr><td>For Functions 1A and BL a list of BINs for the tax lot are returned instead of a list of alternative addresses; Wa2F1al must be used for these calls.</td></tr>
<tr><td>For Functions 1 and 1E additional information is returned;  Wa2F1w and Wa2F1v must be used for these calls.</td></tr>

<tr><td rowspan="3">in_mode_switch</td></tr>
<tr><td>When set to “X” the extended work area 2 is used for the call</td></tr>
<tr><td>For Functions 1, 1E, 1A, BL, BN, 3, and 3C only; where possible, we recommend that you use this option</td></tr>


<tr><td rowspan="2">in_tpad_switch</td></tr>
<tr><td>When set to “Y” TPAD data is added to the work area 2; for Functions 1A, BL, and BN only</td></tr>


<tr><td rowspan="5">in_xstreet_names_flag</td></tr>
<tr><td>When set to “E” for Functions 1, 1E, 3, and 3C the first 5 elements in Wa1.out_stname_list contain the Street Names for the intersecting streets at the low address end of the segment and the last 5 elements in Wa1.out_stname_list contain the Street Names for the intersecting streets at the high address end of the segment</td></tr>
<tr><td>For Functions 1 and 1E only an additional Geosupport call to Function 1A is made.  If successful the BBL and BIN obtained are returned in Wa1.out_bbl and Wa1.out_bin respectively.</td></tr>
<tr><td>For Function 2 the first 5 elements in Wa1.out_stname_list contain the Street Names for the intersecting streets at the intersection.</td></tr>
<tr><td>When set to space for Functions 1, 1E, 2, 3, and 3c if the Street Names of the list of intersecting streets are needed, then the user must take the street codes from Wa2 and make repeated Function D or DG calls.</td></tr>




<tr><th colspan="2">Other</th></tr>

<tr><td rowspan="5">in_browse_flag</td></tr>
<tr><td>Sets how Geosupport should normalize your input street names when “blank” the output street name is the normalized version of the input street name</td></tr>
<tr><td>When “P” the output street name is the Primary Street Name for the input street</td></tr>
<tr><td>When “F” the output street name is the Principal Street Name for the input street</td></tr>
<tr><td>When “R” the output street name is the DCP Preferred Street Name for the input street </td></tr>





<tr><td rowspan="2">in_real_streets_only </td></tr>
<tr><td>When set to “R” Function 3S will return only intersections consisting of “real streets” and not changes in district boundaries or other items</td></tr>



<tr><td rowspan="2">in_roadbed_request_switch</td></tr>
<tr><td>When set to “R” Function 1 and 1E will return geographic data for the RoadBed street segments instead of for the Generic street segments which is the default</td></tr>

</table>



## Selecting the Proper Work Area 2

<table class="pdfSmallTable">
  <tbody>
    <tr>
      <td rowspan="2">
        <strong>&nbsp;</strong>
        <strong>Function </strong>
      </td>
      <td colspan="4">
        <p style="text-align: center;"><strong>Work Area 1 Options</strong>
      </td>
      <td rowspan="2">
        <strong>&nbsp;</strong>
        <strong>Work Area 2 to use</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>in_auxseg_switch</strong>
      </td>
      <td>
        <strong>in_long_wa2_flag</strong>
      </td>
      <td>
        <strong>in_mode_switch*</strong>
      </td>
      <td>
        <strong>in_tpad_switch</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>1E</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F1E
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        X
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F1EX
      </td>
    </tr>
    <tr>
      <td colspan="6">
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>2</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F2
      </td>
    </tr>
    <tr>
      <td colspan="6">
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>2W</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F2W
      </td>
    </tr>
    <tr>
      <td colspan="6">
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>3</strong>
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F3
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
      <td>
        X
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F3X
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        Y
      </td>
      <td>
        n/a
      </td>
      <td>
        X
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F3XAS
      </td>
    </tr>
    <tr>
      <td colspan="6">
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>3C</strong>
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F3C
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        Y
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F3CAS
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
      <td>
        X
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F3CX
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        Y
      </td>
      <td>
        n/a
      </td>
      <td>
        X
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F3CXAS
      </td>
    </tr>
    <tr>
      <td colspan="6">
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>3S</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2F3S
      </td>
    </tr>
    <tr>
      <td colspan="6">
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>1B</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        WA2F1B
      </td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        Y
      </td>
      <td>
        WA2F1B
      </td>
    </tr>
    <tr>
      <td colspan="6">
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>1A</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        blank
      </td>
      <td>
        blank
      </td>
      <td>
        WA2F1A
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        L
      </td>
      <td>
        blank
      </td>
      <td>
        blank
      </td>
      <td>
        WA2F1AL
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        X
      </td>
      <td>
        blank
      </td>
      <td>
        WA2F1AX
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        L
      </td>
      <td>
        X
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        X
      </td>
      <td>
        Y
      </td>
      <td>
        WA2F1AX
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        L
      </td>
      <td>
        X
      </td>
      <td>
        Y
      </td>
      <td>
        n/a
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        blank
      </td>
      <td>
        Y
      </td>
      <td>
        WA2F1A
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        L
      </td>
      <td>
        blank
      </td>
      <td>
        Y
      </td>
      <td>
        WA2F1AL_TPAD
      </td>
    </tr>
    <tr>
      <td colspan="6">
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>BL</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        blank
      </td>
      <td>
        blank
      </td>
      <td>
        WA2F1A
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        L
      </td>
      <td>
        blank
      </td>
      <td>
        blank
      </td>
      <td>
        WA2F1AL
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        X
      </td>
      <td>
        blank
      </td>
      <td>
        WA2F1AX
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        L
      </td>
      <td>
        X
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        X
      </td>
      <td>
        Y
      </td>
      <td>
        WA2F1AX
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        L
      </td>
      <td>
        X
      </td>
      <td>
        Y
      </td>
      <td>
        n/a
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        blank
      </td>
      <td>
        Y
      </td>
      <td>
        WA2F1A
      </td>
    </tr>
    <tr>
      <td>
        <strong>&nbsp;</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        L
      </td>
      <td>
        blank
      </td>
      <td>
        Y
      </td>
      <td>
        WA2F1AL_TPAD
      </td>
    </tr>
    <tr>
      <td colspan="6">
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        <strong>BN</strong>
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        blank
      </td>
      <td>
        WA2F1A
      </td>
    </tr>
    <tr>
      <td>
        &nbsp;
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        X
      </td>
      <td>
        blank
      </td>
      <td>
        WA2F1AX
      </td>
    </tr>
    <tr>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        &nbsp;
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        Y
      </td>
      <td>
        WA2F1A
      </td>
    </tr>
    <tr>
      <td>
        &nbsp;
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        X
      </td>
      <td>
        Y
      </td>
      <td>
        WA2F1AX
      </td>
    </tr>
    <tr>
      <td colspan="6">&nbsp;</td>
    </tr>
    <tr>
      <td>
        <b>AP</b>
      </td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        blank
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2FAP
      </td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>
        n/a
      </td>
      <td>
        n/a
      </td>
      <td>
        X
      </td>
      <td>
        n/a
      </td>
      <td>
        WA2FAPX
      </td>
    </tr>
  </tbody>
</table>

*We highly recommend that you use the in_mode_switch = “X” option*


## List of Classes and Overview

The Work Area and their Supporting classes all have the following methods:

* default constructor  

* constructor that takes a string as a parameter  

* Clear method that reinitializes the data in the class  

* ToString method that converts the data structure to a string  

* FromString method that converts a string into the data structure  

* Display method that creates a string consisting of the data items separated by a dash  

* Display(Char) method that creates a string consisting of the data items separate by “Char”  

* Print method that creates a string with the data field names and the data values of the class  

* Get/Set Properties for the data fields (with the exception of Work Area 1 input fields, these are usually limited to Get only) for the most part the names are self-explanatory

## Classes

<table width="0">
  <tbody>
    <tr>
      <td width="165">
        <strong>Main GeoX Classes</strong>
      </td>
      <td width="523">
        <strong>Description</strong>
      </td>
    </tr>
    <tr>
      <td width="165">
        Geo
      </td>
      <td width="523">
        Main GeoX object
      </td>
    </tr>
    <tr>
      <td width="165">
        GeoConn
      </td>
      <td width="523">
        Contains information needed to connect to an EntireX Broker or a locally running Geosupport Desktop Edition (GDE)
      </td>
    </tr>
    <tr>
      <td width="165">
        GeoConnCollection
      </td>
      <td width="523">
        Contains a list of GeoConn objects
      </td>
    </tr>
    <tr>
      <td width="165">
        GeoConnsException
      </td>
      <td width="523">
        Information relating to an exception involving a GeoConn object
      </td>
    </tr>
    <tr>
      <td width="165">
        &nbsp;
      </td>
      <td width="523">&nbsp;</td>
    </tr>
    <tr>
      <td width="165">
        <strong>Work Area Classes </strong>
      </td>
      <td width="523">
        <strong>Description</strong>
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa1
      </td>
      <td width="523">
        Input Data, Normalized Input Data, Return Codes
      </td>
    </tr>
    <tr>
      <td width="165">&nbsp;</td>
      <td width="523">&nbsp;</td>
    </tr>
    <tr>
      <td width="165">
        Wa2F1
      </td>
      <td width="523">
        Geographic Information about a Street Segment
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F1w
      </td>
      <td width="523">
        Wa2F1 with additional data
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F1e
      </td>
      <td width="523">
        Wa2F1 with election district information
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F1v
      </td>
      <td width="523">
        Wa2f1e with additional information (same as Wa2f1w with election district information)
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F1ex
      </td>
      <td width="523">
        Wa2F1e with additional information and street names for all street codes
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F1a
      </td>
      <td width="523">
        Tax Lot Information about an input Address, BBL, or BIN along with a list of alternate addresses associated with the tax lot
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F1al
      </td>
      <td width="523">
        Same as Wa2F1a except with a list of BINs associated with the Tax Lot instead of a list of alternate addresses.
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F1al_TPAD
      </td>
      <td width="523">
        Same as Wa2F1al with the addition of the TPAD status for each of the BINs in the BIN List
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F1ax
      </td>
      <td width="523">
        Wa2F1a with additional information and street names for the alternate addresses for the Tax Lot
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F1b
      </td>
      <td width="523">
        Combination of Wa2F1ex and Wa2F1ax for input address
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F2
      </td>
      <td width="523">
        Geographic Information about an Intersection
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F2w
      </td>
      <td width="523">
        Same as Wa2F3x with a list of additional Segment IDs for those street segments that have multiple Segment IDs associated with them
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F3
      </td>
      <td width="523">
        Geographic information about an input street segment (consisting of an on-street and two succeeding cross streets for the on-street
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F3as
      </td>
      <td width="523">
        Same as Wa2F3 with a list of additional Segment IDs for those street segments that have multiple Segment IDs associated with them
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F3x
      </td>
      <td width="523">
        Same as Wa2F3 with additional information and street names for all street codes
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F3xas
      </td>
      <td width="523">
        Same as Wa2F3x with a list of additional Segment IDs for those street segments that have multiple Segment IDs associated with them
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F3c
      </td>
      <td width="523">
        Same information as Wa2F3 but for one side of the segment only
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F3cas
      </td>
      <td width="523">
        Same as Wa2F3c with a list of additional Segment IDs for those street segments that have multiple Segment IDs associated with them
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F3cx
      </td>
      <td width="523">
        Same as Wa2F3c with additional information and street names for all street codes
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F3cxas
      </td>
      <td width="523">
        Same as Wa2F3x with a list of additional Segment IDs for those street segments that have multiple Segment IDs associated with them
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F3s
      </td>
      <td width="523">
        List of Intersection for an input Street Stretch
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2F5
      </td>
      <td width="523">
        Returns a properly formatted Geosupport address key for an input address
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2Fhr
      </td>
      <td width="523">
        Returns the version of Geosupport and the Release Number for the data files
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2Fap
      </td>
      <td width="523">
        Address Point ID and XY Coordinates for input Address
      </td>
    </tr>
    <tr>
      <td width="165">
        Wa2Fapx
      </td>
      <td width="523">
        Same as Wa2Fap with addition of street name in address list
      </td>
    </tr>
    <tr>
      <td width="165">&nbsp;</td>
      <td width="523">&nbsp;</td>
    </tr>
    <tr>
      <td width="165">
        Wa1Aimz
      </td>
      <td width="523">
        Returns a list of Map IDs associated with the Input
      </td>
    </tr>
  </tbody>
</table>


## Supporting Classes for Work Areas

* AddrRange  
* AddrRangeX
* AddrRange_ap
* AddrRange_apx
* B10sc
* B5sc
* B7sc
* BBL
* BIN
* BusArea
* ComDist
* CrossStreetInfo
* DofMap
* FileInfo
* LionKey
* Sanborn
* SegSide
* TPADLongWa2Info
* VsamKey1
