<h2>VII.6 Street Stretches: Function 3S</h2>

Function 3S processes street stretches.  An input stretch is specified by an ‘on’ street and (optionally) any two cross streets, using the same WA1 input fields as are used for Function 3.  If the ‘on’ street intersects an input cross street twice, an input compass direction must also be specified to identify which of those two intersections is intended to delimit the stretch.  Input cross streets, but not the ‘on’ street, may be pseudo-streets or intersection names.   If no input cross streets are specified, the delimiting nodes of the input stretch default to the ‘on’ street’s beginning and ending nodes, and the input stretch consists of the entire ‘on’ street.  If the ‘on’ street is a locally-valid name, then only the intersections in that portion of the street, where the name is valid, will appear in the list.  Similarly, if street code input is used, the B7SC will determine the stretch of the locally-valid street.

Function 3S’s WA2 contains a list of all of the input stretch’s ‘intersections’ in sequence between the beginning and ending delimiting nodes of the stretch.  An ‘intersection’ can either be a node (as defined in [Chapter VII.2](../section02/)), or it can be a non-specifiable intersection, that is, a point at which the street intersects only with a geographic feature to which a street code has not been assigned.

WA2 also contains a list counter containing the number of such intersections.  There is space in the list for a maximum of 350 intersections.

* Each entry in the list typically contains the numerically smallest and second smallest PB5SCs for MSW, and up to five B7SCs for COW (the first two B7SCs are typically the numerically smallest and second smallest, of all of the cross streets at the represented intersection, if any).
* Note that to return the most useful information to the user, ‘normal’ streets in numerical order appear first in the list entry, followed by ‘special’ streets, such as Ramps and Exits. Railroads, Shorelines and Borough Boundaries will then appear followed by Named Intersections, CITY LIMITs, DEAD ENDs, and BENDs.  This will occur even if the ‘special’ streets have lower street codes than the ‘normal’ streets.
* To avoid unnecessary listing of BENDs, Function 3S recognizes a BEND only if the angle of the bend is 60 degrees or more.  (Prior to Release 16D, a bend was listed if the angle was 20 degrees or more.)  Also, a bend is not included in the list of cross streets when another real street intersects there as well.
* The ‘on’ street is not included in the list of cross streets at each intersection.
* If there is only one cross street at an intersection, the list entry contains packed zeros in the second cross street field for MSW and blanks in remaining cross street fields for COW.
* List entries representing non-specifiable intersections contain packed zeros in both cross street fields for MSW and blanks in all cross street fields for COW.
* Two streets with different B7SCs but with the same B5SCs may appear in a COW list entry.  This can happen when the Preferred Street Name of a street changes at an intersection.  For example, in Brooklyn, the Preferred Street Name of Livingston Street becomes Aitken Place  when Livingston Street intersects Clinton Street.  The COW list entry for that intersection on Clinton Street will include B7SCs for both Livingston Street (B7SC 3-56530-01) and Aitken Place (B7SC 3-56530-02).
Note: An MSW Function 3S call returns only B5SCs and in this situation the list may include two identical streets codes with the same B5SC.  This, at least, informs the MSW user that there are two street names at that point.  As in the past, we strongly encourage MSW Work Area users to migrate to the COW Work Areas so you can benefit from multiple Geosupport enhancements that are not included in MSW.

Each list entry also contains the distance in feet between the node represented by this list entry and the node represented by the previous list entry.  The maximum value this field can contain is 99,999.  Please note that the distance information is only a rough approximation and cannot be used for applications that require precise distance measurements.  Note, also, that the distance field will always contain zero in the first list entry returned by Function 3S since there is no previous list entry.

There is also a field in each list entry for a <b><u>Gap Flag</u></b>.  A non-blank value in the Gap Flag indicates that one of the following is true:

a. There is some kind of gap in the ‘on’ street between the node represented by this list entry and the node represented by the previous list entry  
b. Multiple segments have been combined to create this entry so that only Real Street intersections are listed.  Intersections with bends and other non-street features are combined to create one entry.

In other words, a non-blank value indicates that either there is no segment of the ‘on’ street connecting those two nodes, or that multiple segments have been combined to represent a ‘single’ segment between the two nodes.  Note that the Gap Flag will always be blank in the first list entry returned by Function 3S since there is no previous list entry.

The Gap Flag is set to ‘G’ when there is a break in a street, such as exists with 7 Avenue between Central Park South (a.k.a. West 59 Street)  and Central Park North (a.k.a. West 110 Street) in Manhattan.  The length returned represents the distance between the end of one string of segments and the start of the next string of segments.  With 7 Avenue in Manhattan, the length of the gap would be the distance from the intersection of 7 Avenue and Central Park South and the intersection of 7 Avenue and Central Park North.

The Gap Flag will be blank even if there is a gap between the first intersection in the list and the preceding intersection in the entire street;  since, from the user’s perspective there is no gap within in the stretch.  An example of this is the partial street stretch of Broadway in Manhattan between East 17 Street and East 20 Street. There is a gap between East 14 Street and East 17 Street, but there will not be any indication of that gap in the list of intersections.  If, on the other hand, the user requested the partial street stretch of Broadway in Manhattan between East 10 Street and East 20 Street, the gap between East 14 Street and East 17 Street will appear in the list.

There are situations (e.g. dogleg and new stretch) where merely indicating that a gap exists is not sufficiently descriptive.

The Gap Flag is also used to indicate that segments have been combined when ‘Real Streets Only’ are requested.

To handle these situations, the Gap Flag has three values in addition to ‘G’.

1. ‘D’ for a Dogleg
2. ‘N’ for a New Stretch.
Note: For entries with the value of ‘N’, the length from the previous node is set to zero.
3. ‘C’ for Combined Segments.  This occurs when the user requests ‘real streets only’ which results in some segments being combined.   See the description of the ‘Real Street Only’ flag below.

<u>Example of <b>Dogleg</b> </u>  
Looking at Elk Street in Manhattan, which exists between Chambers Street and Duane Street, there is a gap at Reade Street.  This is not a real gap, but rather a dogleg.  Gaps of this nature are identified with the letter ‘D’ to indicate the existence of a dogleg.  The length field contains the length of the dogleg. (see Figure VII.6 for example of dogleg.

<u>Examples of <b>New Stretch</b></u>

1. A new stretch may involve situations where there are multiple roadbeds like Ocean Parkway in Brooklyn and Allen Street in Manhattan.  In these cases one roadbed is listed first and then the first segment of each of the other roadbeds is listed as New (‘N’).  The length field which contains the distance from the previous node is set to zero.

2. A new stretch may involve a triangle, which occurs when a road veers off for one or more segments and then comes back.  Examples of this exist in the Bronx involving White Plains Road and Rhinelander Avenue.  In this case, Rhinelander Avenue appears twice in the White Plains Road stretch; once as part of the entire street and once as a “New” one-segment stretch between nodes 0079418 and 0079417.  Another example of a triangle is Queens Boulevard between Yellowstone Boulevard and 70 Road.  On the southern side of Queens Blvd, there is a “spur” of Queens Boulevard between Yellowstone Boulevard and 70 Road separated from the main portion of Queens Boulevard by MacDonald Park.  In any case the length field is set to zero.

3. A new stretch may involve a ‘street’ that has several separate stretches.  In the Bronx, an example of this is the Throgs Neck Expressway which has several separate stretches, some of which have a different name (e.g. Throgs Neck Boulevard), but use the same five-digit street code.  The first segment of each of these separate street stretches is listed as New (‘N’), and the distance from the previous node is set to zero.

<u>Description of **Combined Segments and the “Real Street Only” Flag**</u>  
In the COW there is an input flag in WA1 called the “Real Street Only” flag for users who seek only “real” cross streets along a stretch of a street, and not items defined as “Non-Street Feature” or “Bend”.

If the “Real Street Only” flag is set to **R**, only “Real” street list entries are returned.  This means that “Non-Street Feature” or “Bend” items are not returned.  The length from the previous node to the node with “Non-Street Feature” or “Bend” is added to the next segment and the **Gap Flag** is set to **C**, which indicates that segment lengths have been combined and one or more nodes have been omitted.  There are two exceptions to this situation; namely, if the Gap Flag of the current node is equal to **N or G** which means a new stretch has commenced or if the Gap Flag of the next node is equal to **N or G**.  In this case, a new stretch is starting and adding in the length of the preceding segment does not make sense.  If the “Real Street Only” flag is set to any value other than **R**, all segments are displayed.

<u>Example of **Combined Segments**</u>  
Consider the street stretch in Manhattan on A C Powell Boulevard between West 137 Street and West 140 Street.  A normal function 3S call will result in seven intersections listed, including three non-street feature intersections.  If “Real Street Only” is requested, only four intersections are listed, and the distances between the intersections are adjusted accordingly.

**Additional COW List entry items**  
In the COW, for Function 3S, each list entry also includes a **Marble Hill/Rikers Island flag**, the Node ID of the intersection and a count of the number of streets at the intersection.

Note: In COW work areas, the entries in the list of intersections include B7SCs instead of B5SCs (as had been returned prior to Version 10.6).  Users who are still using MSW work areas will find B5SCs in the list of intersections as in the past.

## <span id="chapterVII.6.1"><u>Locally Valid Street Name or Street Code processing</u></span>  
In Function 3S, if the on-street is a <b><u>locally-valid street name</u></b>, e.g. ‘FASHION AVENUE’ in Manhattan, Geosupport returns only the intersections where the name ‘FASHION AVENUE’ in Manhattan is valid.  In this example, Geosupport will return approximately 16 intersections for ‘FASHION AVENUE’ in Manhattan.

If the user provides street code input instead of street name input, Geosupport uses the B7SC of the input to find the stretch of the locally-valid street.  Of course, if the user supplies only the B5SC the entire street will be searched, which, hopefully, is what the user intended.

In COW work areas, the entries in the list of intersections will include B7SCs instead of the B5SCs as had been returned previously.  Users who are still using MSW work areas will find B5SCs in the list of intersections as in the past.


## <span id="chapterVII.6.2"><u>Roadbed Street Stretches: Function 3S Partial Implementation</u></span>
Function 3S may be used to obtain information about roadbed street stretches via the Roadbed Request Switch (as opposed to only generic street<a href="#section06-10" id="section06-10-10"><sup>10</sup></a>   stretches).  Please be aware that the roadbed processing, which is only partially implemented, may change and is being provided to enable you, the user, to take advantage of this enhancement while in its infancy.

Information about generic street stretches may be obtained for the entire street stretch or for part of a street stretch.  However information about roadbed street stretches may only be obtained for certain types of stretches.  Information about certain parts of a street stretch is not fully functional and will result in a Geosupport Return Code (GRC) of 96.  It is expected to be fully functional in a future release of Geosupport.

It is the user’s responsibility to set the Roadbed Request Switch which is in Work Area 1.

If the Roadbed Request Switch is set to **R**, then a roadbed street stretch will be returned to the user.  A blank in the Roadbed Request Switch will result in a generic street stretch being returned to the user.  Any other value will result in a Geosupport Return Code (GRC) of 65.

If a user supplies a generic name for a multi-roadbed street and the Roadbed Request Switch indicates that generic processing is desired (i.e. value of the switch is ‘blank’), the output will be virtually the same as prior to implementation of the Roadbed Request Switch.  An example of this would be Park Row in Manhattan.

If a user supplies a generic name for a multi-roadbed street and the Roadbed Request Switch indicates that roadbed processing is desired (i.e. value of the switch is ‘R’), the output may or may not be what was provided in the past.  If the generic name supplied represents an undivided street, the generic and roadbed processing will produce the same output and it is possible to request part of the street stretch.  If the generic name supplied represents a multi-roadbed street either in part or in full, then the entire stretch may be requested.  Also, a street stretch that begins and ends with an undivided portion of the street may be requested.  If only part of the street involves a multi-roadbed, then the undivided portion may be requested in part.  For example, 58 Avenue in Queens is undivided in part.  Consequently you may ask for roadbed processing from, say, 211 Street to 219 Street.  If you ask for roadbed processing from, say, 214 Street to 218 Street, you will receive GRC 96 indicating that this functionality is under construction.  If the entire stretch is requested with roadbed processing, the output will be different than what the output is for generic processing.  The output starts with Rust Street and continues supplying the cross streets until about 213 Street where 58 Avenue becomes a multi-roadbed street.  All of the intersecting streets on one roadbed are presented until about 219 Street, where 58 Avenue becomes undivided.  The output then returns to earlier segments where 58 Avenue branched off as well as the segments for the other roadbed between 211 Street and 219 Street.

If a user supplies a street name that is defined as a roadbed name, but does not set the Roadbed Request Switch to indicate that roadbed processing is requested, then a GRC of 57 with the associated error message of “INPUT INCLUDES ROADBED NAME, BUT ROADBED REQUEST SWITCH IS OFF” will be returned to the user.

If a user supplies a street name that is defined as a roadbed name and sets the Roadbed Request Switch to indicate that roadbed processing is requested, then only those streets within the two cross streets that intersect the specified roadbed will be returned in the output.  For example if you request the stretch for Park Avenue Northbound Roadbed and set the Roadbed Request Switch to indicate that roadbed processing is requested, then the output will include the streets that cross the northbound roadbed.

## <span id="chapterVII.6.3"><u>Coincident Segments: Function 3S Processing</u></span>
Coincident segment processing (where one road is above another road) has become more consistent as of Release 16C.  Coincident segments (streets, subways, railroads) were sometimes being listed as cross streets in releases prior to 16C.  As of Release 16C, the B7SCs of segments coincident with the ‘on’ street are no longer listed as cross streets at both the ‘from’ node and ‘to’ node unless the coincident segment diverges at either the ‘from’ node or the ‘to’ node of the ‘on’ street. The new rules for coincident segments are as follows:

i.  At a point where one of the two coincident segments’ stretch ends, the coincident segment will not be listed as a cross street.  
ii.  At a point where one of the two coincident segments diverges (no longer coincident), the divergent segment will be listed as a cross street.  
iii. At a point where two divergent segments become coincident, the incoming divergent segment will be listed as a cross street.  
iv. At a point where a coincident segment stretch ends and a new coincidence begins with another ‘on street.  The continuing and terminated segments will be listed as cross streets.  

<p>_________________________</p>
<a href="#section06-10-10"><sup id="section06-10">10</sup></a> Generic streets are single line representations of streets that have multiple roadbeds, such as Queens Boulevard in Queens, the Grand Concourse in the Bronx, Broadway (in the Upper West Side) in Manhattan and Ocean Parkway in Brooklyn.
