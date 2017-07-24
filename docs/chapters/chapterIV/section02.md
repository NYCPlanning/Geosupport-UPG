<h2>IV.2 Street Name Relationships:  Aliases and Locally Valid Street Names</h2>  

GSS assigns street codes in a way that encodes certain information about street names.  Specifically, a portion of the street code signifies whether an <u>alias</u> relationship exists between two street names;  and a portion of the street code signifies whether a street name is only <u>locally valid</u>. These aspects of street code assignment can have implications for application design.  

Two normalized street names are called <u>aliases</u> of each other if they are either alternative names of the same street (such as SIXTH AVENUE and AVENUE OF THE AMERICAS in Manhattan) or any portion thereof, or are spelling variants of the same street name (such as SIXTH AVENUE and 6 AVENUE, or MAC DOUGAL STREET, MACDOUGAL STREET and MCDOUGAL STREET ).  

Geosupport is designed to recognize all commonly accepted street name aliases, and through the structure of its street code assignments, to identify whether two street names are aliases for the same street.  

<u>Locally valid street names</u> are street names that are only valid ‘locally’, that is, for a portion of a street.  Almost all streets that have locally valid street names also have at least one name that is valid for the entire street.  An example is Seventh Avenue in Manhattan, which has the following names:  

• The names 7 AVENUE and SEVENTH AVENUE are valid for the entire street.  

• POWELL BOULEVARD and various aliases (ADAM CLAYTON POWELL JR BOULEVARD,  A C POWELL BOULEVARD etc.) are valid only for the portion of the street north of Central Park.  

• FASHION AVENUE is valid only for a portion of the street in the Garment District.  

• SAINT VINCENTS SQUARE and ST VINCENTS SQUARE are valid only for a small stretch of the street in the vicinity of the former Saint Vincent’s Hospital.  

All of the above names are aliases of each other, since they are all names for the same street or a portion thereof.  The names in the first set are valid for the entire length of the street;  the other names are only valid locally.  Notice that two street names can be considered aliases of each other even if there are no locations at which both names are valid.  For example, FASHION AVENUE and SAINT VINCENTS SQUARE are aliases, even though there is no location where both names are valid.
