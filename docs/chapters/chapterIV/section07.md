<h2>IV.7 Street Codes and Non-Addressable Place Names</h2>  

This section discusses the manner in which street codes are assigned to Non-Addressable Place names (NAPs).  Every NAP is a name of a simplex, a complex or a constituent entity of a complex ([see Chapter III.6](../../chapterIII/section06/)).  By definition, every simplex and every complex has a NAP.  A constituent entity of a complex may or may not have a NAP, and may or may not have one or more addresses.  (A building that has neither an address nor a NAP is called a Non-Addressable Un-named Building (NAUB).  NAUBs can be identified only by their Building Identification Numbers (BINs).  NAUBs and BINs are discussed in detail in Chapter VI.)  

Like conventional street names, some NAPs have aliases (alternative names and spelling variants).  For example, CABRINI MEDICAL CENTER and CABRINI MED CENTER are spelling variants of the same name;  AVERY FISHER HALL and PHILHARMONIC HALL are alternative names of the same geographic feature.  As with conventional street names, the B10SC values assigned to NAP aliases have the same B5SC value.  

In the case of a complex and its constituent entities, the assignment of street codes is analogous to the methodology used for streets.  In general (the exceptional case is described below), the names of the entire complex and the names of its constituent entities are all treated as aliases of each other (that is, their B10SCs have the same B5SC value), since they are all names of the same geographic feature (the entire complex) or parts thereof (the constituent entities of the complex).  Within the umbrella of this B5SC value, the NAPs that are valid for each portion of the complex, namely, either the entire complex or a particular constituent entity, are assigned to a different local group.  Thus, the entire complex has its own distinct B7SC value, and each constituent entity has its own distinct B7SC value.  

The following NAPs associated with Manhattan’s Lincoln Center complex illustrate the assignment of street codes to NAPs associated with a complex.  

|<u>NAP</u>|  <u>B</u> | <u>10SC</u> |
|:-----|-----: |:----- |  
|LINCOLN CENTER | 1|25006 01 010 |  
|LINCOLN CTR FOR THE PERFRMG ARTS|1 |25006 01 030 |  
|NY STATE THEATER |1 | 25006 02 020|  
|NEW YORK STATE THEATER|1 |25006 02 040 |  
|N Y STATE THEATER |1 |25006 02 060 |  
|AVERY FISHER HALL| 1|25006 03 010 |
|PHILHARMONIC HALL| 1|25006 03 030|  

All of the NAPs associated with Lincoln Center (of which only a sample is listed above) have the same B5SC value, 125006.  Within this B5SC value, the LGC value 01 is assigned to the NAPs of the complex as a whole, LINCOLN CENTER and LINCOLN CTR FOR THE PERFRMG ARTS (and other variants not listed).  The LGC value 02 is assigned to NY STATE THEATER and variants thereof, and so on.  An application can use the B5SC value, 125006, as the retrieval key to retrieve all the records in an application file for the NAPs associated with Lincoln Center, both records for the complex as a whole and records for its constituent entities.  If only the records for the complex as a whole are to be retrieved, the application would use the B7SC value 12500601.  If only the records for the New York State Theater are to be retrieved, the application would use the B7SC value 12500602, and so on.  (Note that none of these retrievals would retrieve any records stored by address, since the street name or addressable place name in an address would have a different B5SC value than the one assigned to the NAPs.)
