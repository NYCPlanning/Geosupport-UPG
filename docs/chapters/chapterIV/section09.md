<h2>IV.9 Summary of Street Codes</h2>  

This section recapitulates the discussion of street codes.  A B5SC value represents a New York City street (or a pseudo-street, non-street feature, place name or intersection name) and is assigned to all of the street’s aliases, that is, to all of the names by which that street, or any part of it, is known to Geosupport.  Therefore, the B5SC is a suitable item to use as an access key for street-related geographic retrieval, since then retrieval will be consistent with respect to street name aliases.  That is, retrieval will succeed regardless of which alias is used at the time of record creation and which is used at retrieval time.  

A B10SC value represents a particular spelling of a particular name for a street (along with all of that name’s partial street names, if any).  Two B10SC values are identical in their first six bytes (the B5SC values) if and only if the street names to which those B10SC values correspond are aliases (names for the same street).  Since B10SC values correspond uniquely to a single spelling of a single name for a street, they can be used to automatically resynchronize the B5SCs stored in an application file to reflect street code assignment changes made in new Geosupport releases.  Such resynchronization is essential, and is the user’s responsibility.  A Street Name/Street Code Change Bulletin and a Geosupport file called the Street Code Change File (SCCF) are made available in each new Geosupport release to facilitate user-developed procedures for street code resynchronization.  If an application file contains stored B10SCs, the SCCF can be used to develop a fully automated street code resynchronization procedure that directly accesses only those records in the application file containing B10SC values that must be updated, and that updates those B10SCs;  this is the optimal resynchronization method.  If street names and B5SCs are stored in the file, but not B10SCs, then the B5SCs can be resynchronized by using Function 1N and processing every record in the file.  If only B5SCs are stored in the file, then the change bulletin must be used, and records containing B5SCs involved in changes must be individually researched.  

Some streets in the city have certain names that are only locally valid, that is, valid only for a portion of the street.  The set of all names for a given street is partitioned into ’local street name groups’ corresponding to portions of the street where various street names are valid.  Two names for a street are in the same local group if and only if they are valid for exactly the same portion of the street.  Each local group is assigned a Local Group Code (LGC) value, which is a number from ‘01’ to ‘99’ that labels the group relative to all of the local groups for that street.  The B5SC value and LGC value are concatenated to form the B7SC value, which is assigned to every name belonging to the corresponding local group, and only to those names.  Each local group has a single member designated as the principal street name for that group.  Each portion of a street has one local group designated as the preferred local group for that portion.  The principal name of the preferred local group is called the preferred street name for that portion of the street.  The preferred street name is obtainable for any specific location on a street.  For example, for an address, the preferred street name is obtained by calling Function 1 to obtain both the B5SC and the preferred LGC, concatenating these to form a B7SC, and using the latter as input to a call to Function DG.  For an intersection, street segment or blockface, Function 2, 3 or 3C is called, respectively, instead of Function 1.  

The B5SC, B7SC and B10SC can be viewed as forming a hierarchy in which the greater the length of the item, the  more the more restricted the set of street names represented.  The B5SC represents all the names for the street.  The B7SC represents all the names that are valid for a particular portion (possibly all) of the street.  The B10SC represents a particular name (and any unambiguous partial street names generated from it).  

The methodology that is used to assign street codes to the Non-addressable Place Names (NAPs) of a complex and its constituent entities is analogous to the methodology used with street names.  The B5SC represents all the NAPs of both the complex as a whole and all of its constituent entities.  A distinct B7SC represents all the NAPs that are valid for a particular portion (possibly all) of the complex, that is, all the NAPs that are valid either for the complex as a whole or for a particular constituent entity.  A distinct B10SC represents each individual normalized spelling of a specific NAP (and any unambiguous partial names generated from it).  

For the reader’s convenience, two reference tables summarizing street codes are below.  Table IV-1 is a summary of the various street code items used by Geosupport, conventional abbreviations for them, and their lengths in bytes.  The abbreviations listed in Table IV-1 are used throughout the remainder of the UPG.  In these abbreviations, ‘B’ represents the standard Geosupport one-byte Borough Code, as described in [Appendix 3](/appendices/appendix03/), and ‘P’ means that the item is packed.  (Note: Packed applies to MSW only.)  Table IV-2 is a summary of the three main types of street code items, indicating the display function that accepts each as input, and what street name that display function returns as output.  Table IV-2 is written to describe the assignment of street codes to street names, but it applies analogously as well to the NAPs of a complex and its constituent entities.  

## <span id="chapterIV.9.1"><p class = "section_header underlineMe center">Table IV-1: Notation for Street Code Items</p></span>   

|<u>Item Abbreviation</u>|  <u>Item Name</u> | <u>Length (Bytes)</u> |
| :----- | :----- | :-----: |   
|5SC |Five-digit Street Code | 5|   
|P5SC (MSW only)   |Packed Five‑digit Street Code |3 |   
|B5SC |Borough and Five‑digit Street Code    |6 |    
|PB5SC (MSW only) |Packed Borough and Five‑digit Street Code  | 4|   
|7SC |Seven‑digit Street Code |7 |    
|B7SC |Borough and Seven‑digit Street Code | 8|    
|10SC   |Ten‑digit Street Code | 10|    
|B10SC |Borough and Ten‑digit Street Code |11 |    
|LGC |Local Group Code (6th and 7th digits of 10SC) |2 |    
|SNC |Street Name Code (8th, 9th and 10th digits of 10SC) | 3|   

5SC + LGC = 7SC  
B5SC + LGC = B7SC  
B5SC + LGC + SNC = B7SC + SNC = B10SC  

## <span id="chapterIV.9.2"><p class = "section_header underlineMe center">Table IV-2: Summary of Street Code Items</p></span>    


| Type of  Street Code | Geography  Represented | Corresponding Street Name(s) | Applicable Display Function and Its Output Datum |
| :------------- | :------------- | :------------- | :------------- |
| B5SC |A street for all or any portion of the given street |All names valid |D - returns primary name|
|B7SC|The portion (possibly all) of a street where a group of names is valid |All the names in the given local street name group | DG - returns principal name of local group|
|B10SC |The portion (possibly all) of a street where a specific name is valid |One spelling of one name (and any unambiguous partial names generated from it) | DN - returns the unique name to which the given B10SC corresponds |
