<h2>III.8 Selection of Output Street Names (COW only)</h2>

For COW Function calls, the Browse Flag allows users to request the return of <b>primary</b> or <b>principal</b> output street names and street codes (for Functions 1, 1A, 1B, 1E, 1N, 2, 3, 3C and AP).  The Browse Flag also allows users to request the return of <b>preferred</b> output street names and street codes (for Functions 1, 1A, 1B. 1E, 2, 3, 3C and AP).

Setting the Browse Flag to <b>P</b> will cause the output street name(s) and code(s) that are returned to the user to be the <b>primary</b> name of the input street names or codes.

Setting the flag to <b>F</b> will cause the <b>principal</b> name and street code of the input street name to be returned to the user.

For Functions 1, 1A, 1B, 1E, 2, 3, 3C and AP  when the Geosupport call involves two work areas, the Browse Flag may also be set to <b>R</b>.  Setting the flag to <b>R</b> will cause the <b>preferred</b> name and street code of the input street name to be returned to the user.  For all of these functions except Functions 1E, the principal Department of City Planning (DCP) preferred street name and code will be returned in the output section of Work Area 1.  For Function 1E, the principal Board of Elections (BOE) preferred street name and code will be returned to the user. If the user supplies a value of <b>R</b> for Function 1N, it is rejected with a GRC of 79.  Preferred Street Names are described in more detail in [Chapter IV.6](../../chapterIV/section06).

Below is a sample where the Browse Flag causes Geosupport to return different street names.
The example is in Manhattan, in the portion of 7 AVENUE (north of Central Park) where ADAM C POWELL BOULEVARD is the Principal Street Name.  
The input address is:   2019    A C POWELL BLVD

|Function     | Browse | Output |
|:-------------   |:-------------   |:-------------  |
| | Flag    | Street Name       |  
|1 (or 1A or 1B) | Blank   | A C POWELL BOULEVARD       |  
|1 (or 1A or 1B) | P  | 7 AVENUE       |  
|1 (or 1A or 1B) | F  | ADAM CLAYTON POWELL JR BOULEVARD       |  
|1 (or 1A or 1B) | R | ADAM CLAYTON POWELL JR BOULEVARD       |  
|1E | BLANK | A C POWELL BOULEVARD      |  
|1E | P | 7 AVENUE      |  
|1E | F | ADAM CLAYTON POWELL JR BOULEVARD      |
|1E | R | 7 AVENUE      |

Note that the Board of Elections (Function 1E) prefers a different street name from the Department of City Planning.

The Selection of Output Street Names feature is available only with the Character-Only Work Areas (COWs).  For more information on Primary (P) and Principal (F) street names, please refer to [Chapters IV.5](../../chapterIV/section05) and [IV.6](../../chapterIV/section06).
