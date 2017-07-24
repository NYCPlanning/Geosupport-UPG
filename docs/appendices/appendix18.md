<h2 class="pdfAppendix"><center>APPENDIX 17: GEOEXCEL, A GEOCODING SOLUTION FOR EXCEL</center></h2>


<div class=center>Updated: 5/22/2016</div>  
<br>  

<h5><u>Features</u></h5>  

GeoExcel incorporates many of the familiar interface elements of GBAT while adding new features to improve productivity and the overall user experience.   GeoExcel is designed to be a comprehensive tool for performing geocoding tasks and offers the flexibility to fit into different user scenarios.  

<h5><u>Requirements</u></h5>  

  * Latest 64 bit Geosupport desktop edition  

  * Microsoft Excel 2013  

  * Windows 7 or above   

  * Internet connection (desired)  

<h5><u>Installation</u></h5>  

NOTE:  GeoExcel is a Microsoft Office 2013 VSTO add-in.   Installation requires Admin access to the computer on which it is installed.  

  1. Unzip file folder  

  2. Double click “setup.exe”  

  3. Follow the instructions to complete installation (administrator privileges required)  

<h5><u>Getting Started</u></h5>  

If installation was successful, you will see a new tab when you open Excel 2013 that says “Geosupport”.
Here is where you will find the ribbon controls for GeoExcel.  

![GeoExcel Ribbon Controls <>](/img/geoExcel1.png "GeoExcel Ribbon Controls")  

<b>Figure 1:</b>  

<u>Setting up the input</u>  

  1. Select the Geosupport function that you want to execute.  

  2. Data can be provided to GeoExcel in two ways using the input data selection screen:  

![Data Selection Screen <>](/img/geoExcel2.png "Data Selection Screen")  

<b>Figure 2:</b>  

If “Data exists in input sheet” option is selected, GeoExcel assumes that the data is preloaded in the Excel spreadsheet.  GeoExcel then expects the user to provide the column names where the input data resides.  GeoExcel collects this information using the following screen which comes up when the user presses “Ok”.  

![Data columns Screen <>](/img/geoExcel3.png "Data columns Screen")  

<b>Figure 3:</b>  

On this screen, enter the columns where the input data resides.  For Example with the selection of Function 1A, we need to provide GeoExcel with Borough information.  If this information is in Column A, simply type “A” in the text box next to the label “Select the column with Borough information”.  Once all the column information is provided, press “Process Data”.  

The other way to provide input data to GeoExcel is directly entering the data into the Excel spreadsheet using a pre-formatted template.  If the user wishes to use this option, then select “Load the Geosupport default template for data entry” in Figure 1.  

This option loads a template in Excel which enables data entry.  It should be noted that the template formatting is limited to a single row and is provided only as a reference for the user.  However, the user can enter as many rows as required.  

![Pre-formatted Template <>](/img/geoExcel4.png "Pre-formatted Template")  

<b>Figure 4:</b>  

Once data entry has been completed in the template, simply press the Submit button.  
GeoExcel displays the Geocoded output in the “Func – XX Output” tab and the errors in “Func–XX Errors” tab.  

GeoExcel does not modify the original data as entered by the user.  

![Geocoded output <>](/img/geoExcel5.png "Geocoded output")  

<b><u>Usage Tips:</u></b>  

  1. Use the Excel spreadsheet only for one Function at a time.  If additional functions are needed, please close Excel and open a new instance of the application.  

  2. Only one instance of Excel should be running at any time.  

  3. The Borough Code can be spelled out or it can be coded as “1” for Manhattan, similar to GBAT tool.  

  4. If you see a “ROT Issue” message, click on a window (other than Excel) and come back to the Excel application and resubmit.  This is a known issue with Microsoft Office where Windows doesn’t recognize the running instance of Excel.  

  5. GeoExcel is configured to utilize a local geocoding service in the event of a blackout or outage situation  

  6. Refer to the latest UPG file included with the installation package to understand full Geosupport functionality as well as the GRC codes/messages that are returned.  

If you have any questions or suggestions for improving the tool, please let us know.  Send an email to: <a href="mailto:GSS_Software@planning.nyc.gov">GSS_Software@planning.nyc.gov</a>  

</div>
