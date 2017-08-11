<h2>V.14 ‘No Cross Street’ Segment Processing</h2>

When there are no cross streets at the end of a segment, Functions 1, 1E and B return the cross streets from preceding or subsequent segments.  The High and Low Addresses at those cross streets are also returned.  In Function 1 and 1E <u>Extended</u> and Function 1B, the Node ID and X-Y coordinates (spatial coordinates) at those cross streets are returned as well.  

If the user wishes to see the original values of the Node ID and X-Y coordinates of the original segment (which may have no cross street) those values appear in special ‘segment’ fields in Functions 1/1E <u>Extended</u> and Function 1B.Work Area 2.  
