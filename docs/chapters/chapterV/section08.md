<h2>V.8 Special Ruby Street Processing</h2>  

The address processing functions have a special feature to handle an anomaly involving a stretch of a street that lies along the Brooklyn‑Queens border.  On the Brooklyn side, this street is called Ruby Street; on the Queens side of the same physical street, it is called 75 Street.  Many residents of the Brooklyn side of this street customarily specify Brooklyn as the borough but they specify the Queens street name, 75 Street, rather than the ‘legal’ Brooklyn street name, Ruby Street.  A further complication is that there is a different Brooklyn street (in Bay Ridge, far from the Queens border) that is also called 75 Street.  Geosupport handles these anomalies automatically, as follows:  

When an address-processing function is called, and Brooklyn is specified as the input borough, and 75 STREET is specified as the input street name,  Geosupport is able to determine from the input house number (assuming it is a valid house number) whether the address is on 75 Street in Bay Ridge or is actually on Ruby Street.  If it is in Bay Ridge, it is processed normally.  If the address is on Ruby Street, then Geosupport takes the following actions:  

* The street name RUBY STREET and the street code for Ruby Street are returned in WA1 instead of the normalized input street name, 75 STREET, and the latter’s Brooklyn street code.  

* WA2 is returned with a full complement of data.  

* Geosupport issues a warning with a Reason Code value of either ‘6’ or ‘7’.  (Reason Code ‘6’ indicates simply that the output street name and street code differ from the corresponding input values.  Reason Code ‘7’ indicates in addition that the input and output house numbers differ from each other in some way, as per [Chapter V.2](/chapters/chapterV/section02/).  See [Appendix 4](/appendices/appendix04/).)  

</br>
