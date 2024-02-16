
var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "Backend Developer",
        "Coder",
      "Problem Solver",
      "Mern-Stack Developer"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});
  
let button = document.getElementById('btn++');
button.addEventListener('click', function () {
    alert('Thank you for your interest! Please fill out the form to get in touch.');
});



document.getElementById("readMoreButton").addEventListener("click", function() {
  var additionalContent = document.getElementById("additionalContent");
  if (additionalContent.style.display === "none") {
      additionalContent.style.display = "block";
    document.getElementById("readMoreButton").innerText = "Read Less"
    document.getElementById("additionalContent").style.fontFamily = "Arial, sans-serif";
    document.getElementById("additionalContent").style.fontSize = "17px";
    document.getElementById("additionalContent").style.fontWeight = "500";
    document.getElementById("additionalContent").style.fontStyle = "italic";
    document.getElementById("additionalContent5").style.lineHeight = "1.6";
  } else {
      additionalContent.style.display = "none";
      document.getElementById("readMoreButton").innerText = "Read More";
  }
});


let button1 = document.getElementById('readMore2');
button1.addEventListener('click', function () {
  var additionalContent = document.getElementById("additionalContent2");
    if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
      document.getElementById("readMore2").innerText = "Read Less"
      document.getElementById("additionalContent2").style.fontFamily = "Arial, sans-serif";
      document.getElementById("additionalContent2").style.fontSize = "17px";
      document.getElementById("additionalContent2").style.fontWeight = "500";
      document.getElementById("additionalContent2").style.fontStyle = "italic";
      document.getElementById("additionalContent5").style.lineHeight = "1.6";
    } else {
        additionalContent.style.display = "none";
        document.getElementById("readMore2").innerText = "Read More";
    }
});
let button2 = document.getElementById('readMore3');
button2.addEventListener('click', function () {
  var additionalContent = document.getElementById("additionalContent3");
    if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
      document.getElementById("readMore3").innerText = "Read Less"
      document.getElementById("additionalContent3").style.fontFamily = "Arial, sans-serif";
      document.getElementById("additionalContent3").style.fontSize = "17px";
      document.getElementById("additionalContent3").style.fontWeight = "500";
      document.getElementById("additionalContent3").style.fontStyle = "italic";
      document.getElementById("additionalContent5").style.lineHeight = "1.6";
    } else {
        additionalContent.style.display = "none";
        document.getElementById("readMore3").innerText = "Read More";
    }
});

let button3 = document.getElementById("btn4").addEventListener("click", function () {
  var additionalContent = document.getElementById("additionalContent4");
  if (additionalContent.style.display === "none") {
      additionalContent.style.display = "block";
    document.getElementById("btn4").innerText = "Read Less"
    document.getElementById("additionalContent4").style.fontFamily = "Arial, sans-serif";
    document.getElementById("additionalContent4").style.fontSize = "17px";
    document.getElementById("additionalContent4").style.fontWeight = "500";
    document.getElementById("additionalContent4").style.fontStyle = "italic";
    document.getElementById("additionalContent5").style.lineHeight = "1.6";
  } else {
      additionalContent.style.display = "none";
      document.getElementById("btn4").innerText = "Read More";
  }
})


let button4 = document.getElementById("btn5").addEventListener("click", function () {
    var additionalContent = document.getElementById("additionalContent5");
    if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
      document.getElementById("btn5").innerText = "Read Less"
      document.getElementById("additionalContent5").style.fontFamily = "Arial, sans-serif";
      document.getElementById("additionalContent5").style.fontSize = "17px";
      document.getElementById("additionalContent5").style.fontWeight = "500";
      document.getElementById("additionalContent5").style.fontStyle = "italic";
      document.getElementById("additionalContent5").style.lineHeight = "1.6";
    } else {
        additionalContent.style.display = "none";
        document.getElementById("btn5").innerText = "Read More";
    }
})




let button5 = document.getElementById("btn6").addEventListener("click", function () {
  var additionalContent = document.getElementById("additionalContent6");
  if (additionalContent.style.display === "none") {
      additionalContent.style.display = "block";
    document.getElementById("btn6").innerText = "Read Less"
    document.getElementById("additionalContent6").style.fontFamily = "Arial, sans-serif";
    document.getElementById("additionalContent6").style.fontSize = "17px";
    document.getElementById("additionalContent6").style.fontWeight = "500";
    document.getElementById("additionalContent6").style.fontStyle = "italic";
    document.getElementById("additionalContent6").style.lineHeight = "1.6";
  } else {
      additionalContent.style.display = "none";
      document.getElementById("btn6").innerText = "Read More";
  }
})


// let form = document.getElementById("form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   //collecting formData
//   let formData = new FormData(event.target)
// })