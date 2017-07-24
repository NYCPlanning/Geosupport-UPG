<h2>IX.4  The Input Data File (DDNAME=INFILE or INVSAM)</h2>

This mandatory input file contains the user geographic data to be processed by GBAT.  In order for GBAT to be able to process a data file, it must satisfy the following requirements:

* The file must be either a sequential file or a VSAM file accessed sequentially.  The DDname INFILE is used for sequential files; INVSAM is used for VSAM files. The file can have either fixed or variable length records, but the maximum permissible record length is 32,000 bytes.  

* The file must be geographically homogeneous; that is, all of its records must contain the same type of geographic location to be processed.  Heterogeneous files, such as a file in which some records contain addresses and others contain intersections, cannot be processed by GBAT.  This restriction follows from the fact that, during one execution, GBAT calls the same Geosupport function to process every input record.  

* Each data item that serves as an input item must occupy the same field position(s) within every INFILE (INVSAM) record.  These field positions are specified in the control file.  

<br/>
