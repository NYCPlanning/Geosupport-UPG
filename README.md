
<h1><center>User Programming Guide</center></h1>

This document, the _Geosupport System User Programming Guide_ (UPG), contains the detailed technical information necessary 
for users to design and develop their own application programs that access applications like Geosupport, GBAT and GOAT.  

# How to use:

## 1.Install MkDocs : 
In order to manually install MkDocs you'll need Python installed on your system, as well as the Python package manager, pip.
You can check if you have these already installed from the command line:

```
$ python --version
Python 2.7.2
$ pip --version
pip 1.5.2  
```
If Python is not installed in your machine, you can download Python for windows from: https://www.python.org/downloads/windows/

MkDocs supports Python versions 2.6, 2.7, 3.3, 3.4, 3.5 and pypy.

Install the mkdocs package using pip:
```
pip install mkdocs
```
MkDocs User Guide can be explored at: http://www.mkdocs.org/user-guide/writing-your-docs/   

## 2. Clone repository :
```
git clone https://github.com/ns5001/DCPmanual.git 
```
## 3. Install Node.js :
Install Node.js from: https://nodejs.org/en/download/

Node.js is required to inorder to SAVE the UPG Document in PDF form and/or print PDF.
 Steps to create PDF:
 * Switch your directory to 'docs' folder. You need to be within the 'docs' folder of mkdocs project(/docs).
 * Run following command from your terminal:
  ```
  npm install
  node convert.js
  ```
 * Once PDF is generated you will get following message on the terminal : <b>Created upg.pdf </b>
 * Generated PDF document will be available at project's docs/upg.pdf location.

## 4. How to build the application and run it:
command to build the application
```
mkdocs build
```

Command to run the application
```
mkdocs serve
```
## 5. How to deploy:
You can deploy the modified or newly added files from github repository using following command from command line interface
```
mkdocs gh-deploy
```

## 6. UPG website Link :
https://nycplanning.github.io/Geosupport-UPG/



