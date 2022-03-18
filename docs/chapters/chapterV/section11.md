<h2>V.11 ZIP Code as Input Instead of Borough Code</h2>  

For Functions 1, 1A, 1B, and 1E, the user may supply the five-digit ZIP code in place of the borough code.  Geosupport will determine the borough based on the ZIP code.  If both a ZIP code and a borough code are supplied, the borough code will be used and, in general, the ZIP code will be ignored.  

Please note that the ZIP code is not validated.  It is mainly used to determine the borough.  For example, if you supply a ZIP code that is valid for the borough, but not for that particular location, the specified function will execute successfully.  In addition, the ZIP code returned in Work Area 2 may be different than the ZIP code you have supplied.  

In general the ZIP codes returned in Work Area 2 are usually accurate for residential areas since these ZIP codes are validated by the Board of Elections.  If you believe that the ZIP code returned by Geosupport is incorrect, please forward the address in question with the ZIP code you believe is correct to GSS_Feedback@planning.nyc.gov. See [Appendix 6](../../../appendices/appendix06/) for more information.
