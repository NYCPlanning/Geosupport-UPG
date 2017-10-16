<h2>VII.1  Introduction</h2>

This chapter discusses various types of geographic locations known collectively as ‘street configurations’, and the Geosupport functions that process them.  Street configurations are locations that are specified in terms of a combination of either two or three streets or a node ID (aka node number) .<a href="#section01-9" id="section01-9-9"><sup>9</sup></a>

* The <u>two-street configurations</u> are street intersections, which are specified in terms of a pair of intersecting streets, or in terms of a single intersection name, or in terms of a node ID.  

* The <u>three-street configurations</u> are locations that are specified in terms of an ‘on’ street between two cross streets.  There are three types of three-street configurations:  street segments, blockfaces, and street stretches.  					

Table VII-1 lists the types of street configurations that Geosupport can process, the data items required to specify each type, the functions that process them, and the sections of this chapter in which they are discussed.  The [final Chapter](/chapters/chapterVII/section08/) in this chapter describes borough boundary processing, a special feature of all the street configuration functions except Function 3S.

<b><u>Table VII-1:  Street Configuration Types and the Functions that Process Them</u></b>


| Street Configuration Type | Specified By | Function | Section |
|:------------- | :-------------| :-------------| :-------------|
| Intersections | <p> ● 2 intersecting streets and, if the 2 streets intersect twice, a compass direction specifying which intersection to process, -or-</p>  <p> ● one intersection name –or-</p>  <p> ● **(COW Only)** one node ID (required if streets intersect more than twice)</p>  | 2 or 2W | VII.2 |
| Street Segments (and related configurations) | ● ‘On’ street and 2 consecutive (or ‘nearly’ consecutive) cross streets | 3 | VII.3 & VII.4 |
| Blockfaces|  ● ‘On’ street, 2 consecutive cross streets, and compass direction specifying side of street | 3C | VII.3 & VII.5 |
| Street Stretches | ● ‘On’ street and (optionally) any 2 cross streets and, if the ‘on’ street intersects a cross street twice, a compass direction specifying which intersection to process | 3S | VII.3 & VII.6 |



> Applications pass input streets to the street configuration functions in the appropriate WA1 input fields, either in the form of street names or in the form of street codes.  In the case of two-street configurations, the order of the two input streets is immaterial;  either input street may be passed in either WA1 input street field.  In the case of three-street configurations, the ‘on’ street must be passed in the WA1 input ‘on’ street field;  the two cross streets may be passed in either order in the two WA1 input cross street fields.  

> For any of the street configuration functions, input street names may be pseudo-street names or intersection names, except for the ‘on’ street in a three-street configuration.  Place names may not serve as input street names.  (For a discussion of non-street features, pseudo-street names, place names and intersection names, [see Chapter III.6.](/chapters/chapterIII/section06/))  <u>In the remainder of this chapter, the term ‘street’ refers to a street name or street code that conforms to the above criteria.</u>


Geosupport processes street configurations based on a simplified model of the city’s geography embodied in a digital map of New York City called CSCL (Citywide Street Centerline).  The CSCL is a single-line map, that is, it represents streets and other linear geographic features, including railroad lines and shorelines, as single lines with no thickness, and it represents intersections as single points with no area or internal detail.  In reality, of course, intersections occupy areas of various sizes and shapes, as reflected in a more realistic type of map known as a double-line map.  The distinction between a single-line map and a double-line map is illustrated in Figure VII-1.  The Department of City Planning extracts a version of the CSCL known as LION which may be more familiar to Geosupport Users and is available for download or for view on DCP’s website:  



[http://www1.nyc.gov/site/planning/data-maps/open-data.page#lion](http://www1.nyc.gov/site/planning/data-maps/open-data.page#lion)

![FigureVII-1 <>](/img/figureVII-1.png "Figure VII-1")
<div class="img_tagline"> Figure VII-1: Single Line and Double-Line Maps Contrasted </div>





<p>_________________________</p>
<a href="#section01-9-9"><sup id="section01-9">9</sup></a> Node ID is described in [Chapter VII.2](/chapters/chapterVII/section02/).  The phrase ‘node number’ may occasionally appear in Geosupport documentation and in copy books.
