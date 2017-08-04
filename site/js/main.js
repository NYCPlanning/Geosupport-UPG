/*NOTES
* Chapter I - Chapter XI & Appendices and Glossary are Custom Buttons (pages). Developed by Programming Team Intern
* Home, Overview & About are MkDocs buttons (pages)
*/
var CURRENTINDEX = "newIndex"; //Pass this to getButtonPositionFor function and getButtonPositionFor
var PREVINDEX = "oldIndex"; //Pass this to getButtonPositionFor function and getButtonPositionFor
//Helper Functions
function getButtonPositionFor(str) {
	return parseInt(localStorage.getItem(str));
}
function setButtonPositionFor(str, index) {
	localStorage.setItem(str, index);
}
function resetLocalStorage() {
	if (window.location.pathname === "/") {
		setButtonPositionFor(CURRENTINDEX, 0);
		setButtonPositionFor(PREVINDEX, 0);
	}
}
function getAllButtons() {
	return document.querySelectorAll(".toctree-l1");
}
function getButtonByIndex(index) {
	let allButtons = getAllButtons();
	return allButtons[index];
}
function getCurrentButton() {
	return getButtonByIndex(getButtonPositionFor(CURRENTINDEX));
}
function isCustomButton(button) {
	if (button.lastElementChild.firstElementChild != null) {
		//if greater, then it has the # and therefore it is not a custom button
		if (button.lastElementChild.firstElementChild.firstElementChild.href.indexOf("#") > -1) {
			return false;
		} else {
			return true;
		}
		//the following is not supported in IE
	// 	return !button.lastElementChild.firstElementChild.firstElementChild.href.includes("#")
	// } else {
	// 	return false;
	// }
	}
}
function isLastSubSection() {
	return document.querySelector(".subnav.selectedNavButton").lastChild.previousSibling.classList.contains("current");
}
function isFirstSubSection() {
	return document.querySelector(".toctree-l1.selectedNavButton").lastElementChild.firstElementChild.classList.contains("current") && document.querySelector(".toctree-l1.selectedNavButton").lastElementChild.firstElementChild.classList.contains("hideMe");
}
function getNextButton() {
	return document.querySelector(".rst-current-version").lastElementChild.firstElementChild;
}
function getPreviousButton() {
	return document.querySelector(".rst-current-version").firstElementChild.firstElementChild;
}
function hideButton(button) {
	//add hideMe to subnav of previous button
	button.lastElementChild.classList.add("hideMe");
	//remove selectedNavButton to make hideMe work
	button.lastElementChild.classList.remove("selectedNavButton");
	//remove selectedNavButton from the main li
	button.classList.remove("selectedNavButton");
	//remove the current from the main li
	button.classList.remove("current");
}
function openButton(button) {
	button.classList.add("current");
	button.classList.add("selectedNavButton");
	button.lastElementChild.classList.add("selectedNavButton");
	button.lastElementChild.classList.remove("hideMe");
	//if it is a custom button, it has a chapter title, then hide it from the navbar
	if (isCustomButton(button)) {
		button.lastElementChild.firstElementChild.classList.add("hideMe");
	}
}
function getCustomButtonURL(button) {
	return button.lastElementChild.firstElementChild.firstElementChild.href;
}
function toggleButton(sign) {
	let oldCurrent = getButtonPositionFor(CURRENTINDEX);
	setButtonPositionFor(PREVINDEX, oldCurrent);
	if (sign === "+") {
		var newCurrent = getButtonPositionFor(CURRENTINDEX) + 1;
	} else if (sign === "-") {
		var newCurrent = getButtonPositionFor(CURRENTINDEX) - 1;
	}
	setButtonPositionFor(CURRENTINDEX, newCurrent);
	let oldButton = getButtonByIndex(oldCurrent);
	hideButton(oldButton);
	let newButton = getButtonByIndex(newCurrent);
	openButton(newButton);
}
//OnLogo click, reset, current index and previous index.
function handleOnLogoClick() {
	var logoID = document.getElementById("logoID");
	logoID.onclick = function() {
		setButtonPositionFor(CURRENTINDEX, 0);
		setButtonPositionFor(PREVINDEX, 0);
	}
}

//*****Onclick function and its handlers*******
//Setup previous and current button on click. Called in buttonClicked function
function previousButtonSetup(e) {
	//get the previous button index
	let previousButtonIndex = getButtonPositionFor(CURRENTINDEX);
	let previousButton = getButtonByIndex(previousButtonIndex);
	//if the current button and the previous button are the same, just return. Do Nothing.
	if (previousButton === e.currentTarget) {
		return;
	}
	//store the index of the previus button
	setButtonPositionFor(PREVINDEX, previousButtonIndex);
	hideButton(previousButton);
	return previousButton;
}
function currentButtonSetup(e) {
	//Newly clicked button. Add the classes and find position
	let currentButton = e.currentTarget;
	currentButton.classList.add("selectedNavButton");
	currentButton.classList.add("current");
	//store the currentButton index in local storage
	setButtonPositionFor(CURRENTINDEX, $(".toctree-l1.selectedNavButton.current").index());
	//On button click, refresh the page.
	window.location.href = getCustomButtonURL(currentButton);
	//If both indices are the same, it means the user clicked on a subsection of a chapter. Return.
	if (getButtonPositionFor(PREVINDEX) != getButtonPositionFor(CURRENTINDEX)) {
		return currentButton
	}
	openButton(currentButton);
	return currentButton;
}
function buttonClicked(e) {
	//Hide the previous button
	var p = previousButtonSetup(e);
	//When p is undefined, previous & current buttons are the same. Don't reload.
	if (p != undefined) {
		var c = currentButtonSetup(e)
	}
	//HideTOC Page Numbers on Website
	// Shouldnot be commented
	if (e.currentTarget.innerText==="Table of Contents"){
		hideNumbers();
	}

}
//Give an onclick function to each li (which is each navigation button)
function buttonClickedHandler() {
	let buttons = document.querySelectorAll(".toctree-l1");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = buttonClicked;
	}
}
//onPage reload, do the following
function pageReload() {
	let btn = getCurrentButton();
	openButton(btn);
	if (isCustomButton(btn)) {
    //If the subsection has subsection, remove hideMe to show the subsections
		btn.querySelector(".current").lastElementChild.classList.remove("hideMe");
	}
}
//Next Button Handler Functions Start
function nextButtonHandler() {
	//check the current button, if custom, check if it is the last section, if so, toggle buttons.
	if (isCustomButton(getCurrentButton())) {
		if (isLastSubSection()) {
			toggleButton("+");
		}
	} else {
		//if it is not a custom button, toggle.
		toggleButton("+");
	}
}
//handle both Next buttons on the website: (navigation and page next)
function runNextButtonHandler() {
	//This is the next button at the end of the left navigation
	let nextButton = getNextButton();
	nextButton.onclick = function(e) {
		nextButtonHandler();
	}
	//This is the next button at the end of each page.
	let pageNextButton = document.querySelector("#nextButton");
	//the last page doesn't have the nextButton
	if (pageNextButton != null) {
		pageNextButton.onclick = function() {
			nextButtonHandler();
		}
	}
}
//Previous Button Handler Functions Start
function previousButtonHandler() {
	if (isCustomButton(getCurrentButton())) {
		if (isFirstSubSection()) {
			toggleButton("-");
		}
	} else {
		toggleButton("-");
	}
}
function runPreviousButtonHandler() {
	//This is the previous button at the end of the left navigation
	let previousButton = getPreviousButton();
	if (previousButton.innerText === "« Previous") {
		previousButton.onclick = function() {
			previousButtonHandler();
		}
		//This is the previous button at the end of each page.
		let pagePreviousButton = document.querySelector("#previousButton");
		pagePreviousButton.onclick = function() {
			previousButtonHandler();
		}
	}
}
function externalUser() {
	//check if the user is coming from an external link.
	//if (!isNaN(getButtonPositionFor(CURRENTINDEX)) && !isNaN(getButtonPositionFor(PREVINDEX))) return;
	var all = getAllButtons();
	for (var i = 0; i < all.length; i++) {
		//loop through all the buttons.
		if (all[i].querySelector(".current") != null) {
			//if it is a custom button, then get the first element, which is an a tag
			if (isCustomButton(all[i])) {
				//get the href of the a tag and see if it has the pathname from the URL
				if (all[i].querySelector(".current").firstElementChild.href.indexOf(window.location.pathname,0) > -1) {
					//set the current button to i and previous to 0
					setButtonPositionFor(CURRENTINDEX, i);
					setButtonPositionFor(PREVINDEX, 0);
					return;
				}
			} else {
				//if it is an MKDocs button, get the href, and check
				if (all[i].querySelector(".current").href.indexOf(window.location.pathname,0) > -1) {
					setButtonPositionFor(CURRENTINDEX, i);
					setButtonPositionFor(PREVINDEX, 0);
					return;
				}
			}
		}
	}
}
function resetNavOnSearch() {
	if ((window.location.href.indexOf("search.html"),0) > -1) {
		setButtonPositionFor(CURRENTINDEX, 0);
		setButtonPositionFor(PREVINDEX, 0);
	}
}
function handlePrintPage() {
	window.print();
}
//Sticky Heading

function subNav() {
//debugger
	if (isCustomButton(getCurrentButton())) {
		return document.querySelector(".current").querySelector(".current").querySelector(".current").querySelector(".subnav");
	} else {
		return document.querySelector(".current").querySelector(".current").lastElementChild;
	}
}
// function subnavOnClickHandler(item) {
// 	console.log("The item is: ", this, item);
// }
var allCurrentPositions = {};

function allHashes() {
	var subnav = subNav();
	if (subnav != null) {
		var subnavChildren = subnav.children
		for (var i = 0; i < subnavChildren.length; i++) {
			//subnavChildren[i].onclick = subnavOnClickHandler;
			var hash = subnavChildren[i].firstElementChild.hash;
			var innerArray = [];
			innerArray.push($(hash).offset().top);
			innerArray.push(subnavChildren[i]);
			innerArray.push(i);
			allCurrentPositions[hash] = innerArray;
		}
	}
}
var added;
function stickyNav() {

	for (var hash in allCurrentPositions) {
		if ($(window).scrollTop() === 0) {
			subNav().children[0].classList.remove("btnBack");
		} else if (allCurrentPositions[hash][0] - 80 > $(window).scrollTop()) {
			document.querySelector(hash).classList.remove("sticky");
		} else {
			if (typeof added == 'undefined') {
				document.querySelector(hash).classList.add("sticky");
				//history.pushState(null, null, hash);
			} else {
				var addedHash = added[1].firstElementChild.hash;
				var prevElementIndex = added[2];
				document.querySelector(addedHash).classList.remove("sticky");
				subNav().children[prevElementIndex].classList.remove("btnBack");
				document.querySelector(hash).classList.add("sticky");
				allCurrentPositions[hash][1].classList.add("btnBack");
				//history.pushState(null, null, hash);
			}
			added = allCurrentPositions[hash]
		}

	}
}


document.addEventListener("DOMContentLoaded", function(event) {

	allHashes();
	console.log(allCurrentPositions);

	$(window).scroll(stickyNav);
	stickyNav();

	//when the user searchs, collapse the navigation buttons.
	resetNavOnSearch();

	//User opens the website from an external link such as http://127.0.0.1:8000/chapters/chapterVI/section08/. Should handle styling based on pathname.
	externalUser();

	//When the page loads and pathname is "/", reset local storage.
	resetLocalStorage();

	//On Logo click, reset local storage.
	handleOnLogoClick();

	//Button is clicked
	buttonClickedHandler();

	//Page reloads after button is clicked.
	pageReload();

	//listen to next button onclick
	runNextButtonHandler();

	//listen to previous button onclick
	runPreviousButtonHandler();

});
