document.addEventListener("DOMContentLoaded", function(event){

  var elements = document.getElementsByClassName("toctree-l2")

  for (var i=0;i<elements.length;i++) {

      elements[i].onclick = function() {
        debugger;

        var id = this.firstElementChild.text.split(" ")[0]
        if (document.getElementsByClassName("currentSection")[0] != null) {
          var previous = document.getElementsByClassName("currentSection")[0];
          previous.classList.remove('currentSection');
          previous.classList.add('notCurrent');
        }
        document.getElementById(id).classList.remove('notCurrent');
        document.getElementById(id).classList.add('currentSection');

        if (document.getElementsByClassName("chapterTitle")[0] != null) {
          var elem = document.getElementsByClassName("chapterTitle")[0];
          elem.parentNode.removeChild(elem);
          var elem = document.getElementsByClassName("chapterTitle")[0];
          elem.parentNode.removeChild(elem);
        }
      }
  }


  var buttons = document.getElementsByClassName("caption-text");

  for (var i=0;i<buttons.length;i++) {
    buttons[i].onclick = function(e) {
      e.preventDefault;
      debugger;
    }
  }

  // var userLocation = window.location.href.split("chapters/")[1].split("/")[0]
  // var btn = chapterButtons[0].textContent.replace(/\s/g, '');
  //    for (var i =0;i<chapterButtons.length;i++) {
  //       if ((chapterButtons[i]).textContent = btn) {
  //         document.getElementById("dynamicNav").style.display = "block";
  //         document.getElementById("dynamicNav").classList.remove("dynamicNav");
  //       }
  //    }



 //  var next_button = document.getElementById("nextButton");
 //  next_button.onclick = function() {
 //   //debugger;
 // }


   var chapterButtons = document.getElementsByClassName("caption-text")
  for (var i =0;i<chapterButtons.length;i++) {
    //debugger;
    chapterButtons[i].onclick = function() {

      // document.getElementById("dynamicNav").style.display = "block";
      // document.getElementById("dynamicNav").classList.remove("dynamicNav");
    }
  }
  document.getElementsByClassName("icon-home")[0].text = ""
});
