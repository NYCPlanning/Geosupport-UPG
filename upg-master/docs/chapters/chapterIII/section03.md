<h2>III.3 Street Name Sorting and Normalization Format Options</h2>

Many applications display addresses or other types of geographic locations in their reports and online screens, including normalized street names obtained from Geosupport.  Applications often sort their data by geographic location for display.  However, street names that contain numeric characters do not sort appropriately when they have been normalized in the ‘conventional’ fashion.  To solve this problem, Geosupport is able, at the user’s option, to normalize street names either into the conventional format, which is called the <u>compact format</u>, or into a format that is more suitable for sorting, called the <u>sort format</u>.  The compact and sort formats differ only for street names that contain numeric characters.  Such a street name contains, in the sort format, a number of ‘alignment’ blanks in front of the numeric digits in the street name, which serve to align the numeric digits for proper sorting.  In the compact format, no alignment blanks are present.  The presence or absence of the alignment blanks is the sole difference between a name that contains numeric characters normalized in the sort format and the same name normalized in the compact format.  We illustrate by displaying, side by side, two sorted lists of a sample of Manhattan street names normalized in the two formats:


|<b>SORTED LIST IN COMPACT FORMAT</b>     | <b>SORTED LIST IN SORT FORMAT</b>|
| :-------------   | :-------------   |  
|EAST HOUSTON STREET       | 5 AVENUE       |  
|EAST 10 STREET    | EAST    1 STREET    |  
|EAST 102 STREET    | EAST    2 STREET        |  
|EAST 129 STREET  | EAST    3 STREET |
|EAST 13 STREET |EAST    9 STREET |
|EAST 167 STREET  |EAST   10 STREET  |
|EAST 2 STREET |EAST   13 STREET |
|EAST 20 STREET  |EAST   20 STREET  |
|EAST 201 STREET  |EAST  79 STREET  |
|EAST 3 STREET  |EAST  102 STREET  |
|EAST 79 STREET  |EAST  129 STREET  |
|EAST 9 STREET  |EAST  167 STREET  |
|FULTON STREET  |EAST  201 STREET  |
|10 AVENUE  |EAST HOUSTON STREET  |
|5 AVENUE  |FULTON STREET  |

As this example illustrates, in the compact format, normalized street names do not sort appropriately.  For example, EAST 10 STREET sorts in front of EAST 9 STREET, and 10 AVENUE sorts in front of 5 Avenue. In contrast, in the sort format, the presence of the alignment blanks causes street names containing numeric characters to sort appropriately.  Notice that <u>the presence of the alignment blanks in the sort format, and their absence in the compact format, causes a change to the sort order of numeric street names not only relative to each other, but also relative to non-numeric street names.</u>  For example, in the compact format, FULTON STREET sorts in front of street names that begin with a numeric character, such as 10 AVENUE, while in the sort format it sorts behind them.  Similarly, in the compact format, EAST HOUSTON STREET sorts in front of the street names that start with the word EAST followed by a numeric word, while in the sort format, it sorts behind those street names.

Note that for purposes of this discussion, all samples of sort output assume the EBCDIC collating sequence.

<u>The sort format should always be used for street names that are to be sorted.</u>  However, the sort format is not as well-suited for display purposes as the compact format, since the alignment blanks give the sort format an awkward appearance.  In applications that must display data sorted by geographic location, sorting should be done using street names in the sort format, while street names should be displayed in the compact format.  (This would, of course, necessitate the application making a second call to Geosupport for each name, to obtain the alternative format.  Function 1N could be used for that purpose.)

<u>The sort format is the default format</u>.  That is, Geosupport will normalize input street names into the sort format unless the user program specifically requests the compact format by placing a ‘C’ in the Street Name Normalization Format Flag field in WA1.  Note that every Geosupport API call is an independent event:  Geosupport does not ‘remember’ previous calls.  Therefore, if repeated calls are being made within a single execution of an application program, and the user wishes all the input street names to be normalized into the compact format, a ‘C’ must be present in the flag during each call.

We now give a precise description of the sort format.  First, note that New York City street names have numeric characters (the digits ‘0’ through ‘9’) in at most one word.  If a street name has such a ‘numeric word’, that word consists only of a one-, two- or three-digit number, possibly followed by an ordinal suffix.  (If there is an ordinal suffix, it is deleted during normalizing in either format.)  

For street names that do not have a numeric word, the compact and sort formats are identical.  For a street name that does have a numeric word, the two formats differ only in the fact that alignment blanks are present in the sort format and absent in the compact format.  In forming the sort format, the normalizer inserts the required number of alignment blanks in front of the numeric characters, to form a <u>four-byte field</u> within which the numeric characters are right-justified and blank-filled.  (The rationale for using four bytes for the normalized numeric word is explained below.)  Thus, when normalizing street names that have a numeric word into the sort format, the normalizer inserts three blanks in front of a one-digit number, two blanks in front of a two-digit number and one blank in front of a  three-digit number.  The inserted alignment blanks are additional to the single word-separating blank between the numeric word and the preceding word in the street name, if any.  

We illustrate with an example, using the dash character to represent blanks for clarity.  The street name EAST--129 STREET is in sort format.  The first blank between EAST and 129 (represented by the leftmost dash) is the word-separating blank always present (in either format) between any two consecutive words.  The second blank is the alignment blank inserted only in the sort format to right-justify the three-digit number ‘129’ within the four-byte field for the numeric word.  EAST-129 STREET is the same street name in compact format;  it has the single word-separating blank between the two words, but no blank inserted for alignment.

|<b>Actual Sort Format With 4-Byte Numeric Word Field</b>     | <b>Hypothetical Sort Format <br>With 3-Byte Numeric Word Field</b>|
|:-------------   |:-------------   |  
|EAST ---7 STREET       | EAST --7 STREET       |  
|EAST --23 STREET    | EAST -23 STREET    |  
|EAST -129 STREET    | EAST HOUSTON STREET         |  
|EAST -203 STREET  | EAST 129 STREET |
|EAST HOUSTON STREET |EAST 203 STREET |

In this example, all of the street names are identical in their first five positions, with the fifth position being a word-separating blank.  In the four-byte list, all the numeric names have a blank in the sixth position (the first position of the four-byte numeric field), and therefore have sorted ahead of the one non-numeric name, which has an ‘H’ in that position.  In the three-byte list, the numeric names containing fewer than three digits have a blank in the sixth position, the non-numeric name has an ‘H’ there, and the numeric names containing three digits have a numeric character (a ‘1’ or a ‘2’) in the sixth position.  Since the sort sequence of these characters is blank, ‘H’, ‘1’, ‘2’, the result of sorting with a three-byte numeric field is the undesirable separation of the numeric names by the non-numeric name.
