// Singularity Text
let ball = document.querySelector("#singularity");
function singularityTXT() {
	let singularityTXT = "TAP THE SINGULARITY.";
	setTimeout(() => {
		if (document.querySelector("#singularityTXT").innerHTML == "") {
			for (let m = 0; m < singularityTXT.length; m++) {
				setTimeout(() => {
					document.querySelector("#singularityTXT").innerHTML +=
						singularityTXT[m];
				}, m * 60); 
			}
			ball.style.width = "8vh";
			ball.style.height = "8vh";
		}
	}, 1500);
}

// Singularity Pulsating
let pulsation = 0;
function singularityExpand() {
	let pulseArr = [10, 25, 50, 80, 130];
	ball.style.width = `${pulseArr[pulsation]}vw`;
	ball.style.height = `${pulseArr[pulsation]}vw`;
	pulsation += 1;
	if (pulsation == 5) {
		ball.style.borderRadius = "0%";
		ball.style.borderWidth = "0vh";
		setTimeout(() => {
			document.querySelector("#profileBG").style.transform =
				"translate(0vw, 2vh)";
		}, 1000);
	}
}

// MainTXT Typewriting
function mainTypewrite(title, id) {
	for (let m = 0; m < title.length; m++) {
		setTimeout(() => {
			document.querySelector(id).innerHTML += title[m];
		}, m * 120); 
	}
}

// User Profile
let userName = "";
let userColor = "";
let mainBG = document.querySelector("#mainBG");
function profileBtn() {
	let colorInput = document.querySelector("#colorInput").value;
	if (document.querySelector("#nameInput").value != "" && (colorInput == "blue" || colorInput == "yellow" || colorInput == "green")) {
		if (colorInput == "yellow") {userColor = "rgb(214, 218, 146)"}
		else if (colorInput == "green") {userColor = "rgb(173, 232, 160)"}
		else {userColor = "rgb(168, 222, 234)"}
		userName = document.querySelector("#nameInput").value;
		let capital = userName[0].toUpperCase();
		userName = capital + userName.slice(1)
		setTimeout(() => {
			document.querySelector("#profileForm").style.transform = "translate(-150vw, 2vh)";
			setTimeout(() => {
				document.querySelector("#profileBG").style.backgroundColor = "rgb(25, 25, 25)";

				// Line Scrolling
				setTimeout(() => {
					mainBG.style.display = "flex";
					mainTypewrite(" critical exploration", "#CE");
					mainBG.style.overflowY = "scroll";
					document.querySelectorAll(".varName").forEach(varName => {varName.innerHTML = userName; varName.style.color = userColor;})
					document.querySelectorAll(".line:nth-child(even)").forEach(line => {line.style.color = userColor;})
				}, 3500); 
			}, 1000); 
		}, 1000); 
	}
}

// Dialogue Transitions
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("show", entry.isIntersecting);
	})
}, {threshold: 1})

const lines = document.querySelectorAll(".line")
lines.forEach(line => {observer.observe(line);})