<h2>IV.3 Five-Digit and Ten-Digit Street Codes</h2>  

To each normalized spelling of a full street name within a borough, a ten-digit number called the <u> ten-digit street code (10SC)</u> is assigned.Partial street names ([see Chapter III.4](../../chapterIII/section04/)) are assigned the same 10SC values as the full streets names from which they were generated.  

A 10SC value is meaningful only within a borough, and is generally preceded by a borough code to form an eleven-digit item called the <u>borough and ten-digit street code (B10SC)</u>.If two street names in different boroughs happen to have the same 10SC value, that does not signify any relationship between those streets. <u>**Streets in two different boroughs are always considered to be different streets**</u>, even if the two streets have the same name, and even if they form a single physically continuous street running across the borough boundary.  For example, Atlantic Avenue crosses the Brooklyn-Queens border.  Geosupport treats the Brooklyn and Queens portions of Atlantic Avenue as two different streets, each with its own B10SC value (‘31343001010’ and ‘42889001010’, respectively).  

The first five digits of the 10SC are called the five-digit street code (5SC).  The 5SC has a fundamental significance: <u>**the 5SC values of two street names in a borough are identical if and only if those names are aliases for the same street** </u>. Positions six through ten of the 10SC are discussed in [Chapter IV.5](../../section05/).  

Like the 10SC, the 5SC is meaningful only when accompanied by a borough code;  when concatenated, the borough code and 5SC form a six-byte item called the  <u>borough and five-digit street code (B5SC)</u>. The B5SC simply consists of the first six bytes of the B10SC. For MSWs only, Geosupport sometimes represents the B5SC as a four-byte packed decimal item, referred to as the <u>packed borough and five-digit street code (PB5SC)</u>.  

Conceptually, a B10SC value represents a particular (normalized) spelling of a particular name for a street within a borough, while a B5SC value represents the street itself and is shared by all the street’s aliases.  Consider the following examples of Manhattan street names, grouped by street, i.e. by five-digit street code. (Note:  ‘1’ is the borough code for Manhattan.)  

|<u>(Normalized) Street Name</u>   | <u>B10SC</u> =  | <u>B</u> +  | <u>5SC</u> +  |<u>Remainder of 10SC</u>|  
|:-----   | :-----:  |:-----:   |:-----:   |:-----:   |  
|5 AVENUE  | 11041001010  | 1  | 10410  | 01010|  
|FIFTH AVENUE|11041001010|1|10410|01020|  
|MUSEUM MILE|11041001020|1|10410|02010|  
|6 AVENUE|11051001010|1|10510|01010|  
|SIXTH AVENUE|11051001040|1|10510|01040|  
|AVENUE OF THE AMERICAS|11051001030|1|10510|01030|  
|7 AVENUE|11061004010|1|10610|04010|  
|SEVENTH AVENUE|11061004020|1|10610|04020|  
|FASHION AVENUE|11061002010|1|10610|02010|  
|POWELL BOULEVARD|11061001080|1|10610|01080|  
|A C POWELL BOULEVARD|11061001010|1|10610|01010|  
|7 AVENUE SOUTH|11071001010|1|10710|01010|  
|SEVENTH AVENUE SOUTH|11071001020|1|10710|01020|  
|EAST 21 STREET|11741001010|1|17410|01010|  
|EAST 21|11741001010|1|17410|01010|  
|WEST 21 STREET|13419001010|1|34190|01010|  
|WEST 21|13419001010|1|34190|01010|  

The above example illustrates several aspects of street code assignment.  Notice that alias names of the same street have the same B5SC value.  Notice that EAST 21 STREET and WEST 21 STREET have different B5SC values, which amounts to treating them as names of two different streets (as indeed they must be treated, since they have address numbers in common).  Similarly, 7 AVENUE and 7 AVENUE SOUTH are treated as two different streets.  Notice that partial street names have the same B10SC’s as the full names from which they were generated, such as EAST 21 and EAST 21 STREET.  

By using B5SC’s in the retrieval key instead of street names, applications can achieve consistent retrieval or matching of application data by types of locations involving streets.  We outline below how an application might be designed for consistent retrieval or matching by address, which requires a retrieval key consisting of a B5SC and a normalized address number (discussed in [Chapter V.2](../../chapterV/section02/)).  When the type of location being retrieved involves more than one street, such as intersections, the key would be designed to contain a B5SC field for each street.  

• <u>At record creation time</u>: During the initial creation of a record in the application file, the application calls Geosupport to obtain the B5SC corresponding to the input street name, as well as the normalized form of the input address number.  The application uses these items to form a geographic retrieval key, which it stores in the new application record.  Two files that contain such a key can be matched directly on the key, resulting in a match that will be consistent, i.e. independent of the use of street name aliases.  

• <u>At retrieval time</u>:  When retrieving data from the application file by address, the application again calls Geosupport, obtaining the B5SC and normalized address number corresponding to the input street name and address number.  The application formats these items into a search key, and reads the application file using this key.  The use of the B5SC in the key instead of the street name allows the retrieval to be consistent, i.e. independent of which alias for the street is passed as input.  

Geosupport has three <u>display functions</u>, Functions D, DG and DN, which can be used to obtain street names for display in application screens, reports, mailing labels etc.  These functions process five-, seven- and ten-digit street code input, respectively . (Note: seven-digit street codes are discussed in [Chapter IV.5](../../section05/)).  [Chapter IV.6](../../section06/) discusses the display functions.
