function cts() {
	var x = document.querySelector(".cts-info .collapse");
	var y = document.getElementById("one");
	var z = document.querySelector(".cts-img");
	if (x.style.height == "0px") {
		x.style.height = "auto";
		y.style.transform = "rotate(90deg)";
		x.style.opacity = "1.0";
		z.style.bottom = "198px";
	}
	else {
		x.style.height = "0px";
		y.style.transform = "rotate(0deg)";
		x.style.opacity = "0.0";
		z.style.bottom = "120px";
	}
}

function cts2() {
	var x = document.querySelector(".cts-info .collapse1");
	var y = document.getElementById("two");
	if (x.style.height == "0px") {
		x.style.height = "auto";
		y.style.transform = "rotate(90deg)";
		x.style.opacity = "1.0";
	}
	else {
		x.style.height = "0px";
		y.style.transform = "rotate(0deg)";
		x.style.opacity = "0.0";
	}
}

function codingal() {
	var x = document.querySelector(".codingal-info .collapse2");
	var y = document.getElementById("three");
	if (x.style.height == "0px") {
		x.style.height = "auto";
		y.style.transform = "rotate(90deg)";
		x.style.opacity = "1.0";
	}
	else {
		x.style.height = "0px";
		y.style.transform = "rotate(0deg)";
		x.style.opacity = "0.0";
	}
}

function genc() {
	var x = document.querySelector(".genc-info .collapse3");
	var y = document.getElementById("four");
	if (x.style.height == "0px") {
		x.style.height = "auto";
		y.style.transform = "rotate(90deg)";
		x.style.opacity = "1.0";
	}
	else {
		x.style.height = "0px";
		y.style.transform = "rotate(0deg)";
		x.style.opacity = "0.0";
	}
}

function highradius() {
	var x = document.querySelector(".highradius-info .collapse4");
	var y = document.getElementById("five");
	if (x.style.height == "0px") {
		x.style.height = "auto";
		y.style.transform = "rotate(90deg)";
		x.style.opacity = "1.0";
	}
	else {
		x.style.height = "0px";
		y.style.transform = "rotate(0deg)";
		x.style.opacity = "0.0";
	}
}

function drdo() {
	var x = document.querySelector(".drdo-info .collapse5");
	var y = document.getElementById("six");
	if (x.style.height == "0px") {
		x.style.height = "auto";
		y.style.transform = "rotate(90deg)";
		x.style.opacity = "1.0";
	}
	else {
		x.style.height = "0px";
		y.style.transform = "rotate(0deg)";
		x.style.opacity = "0.0";
	}
}

const observer1 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			document.getElementById("experience").classList.add("animate");
		}
	})
})
observer1.observe(document.getElementById("experience"));

const observer2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			document.getElementById("skills").classList.add("animate");
		}
	})
})
observer2.observe(document.getElementById("skills"));

const observer3 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			document.getElementById("education").classList.add("animate");
		}
	})
})
observer3.observe(document.getElementById("education"));

const observer4 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			document.querySelector(".secmain").classList.add("animate");
		}
	})
})
observer4.observe(document.querySelector(".secmain"));