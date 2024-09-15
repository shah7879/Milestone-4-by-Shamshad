// Get reffrences to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var reumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information<h3>\n    <p><b>Name:</b><span contenteditable= \"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable= \"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable= \"true\">").concat(phone, "</span></p>\n    \n   <h3>education</h3>\n   <p <span contenteditable= \"true\">").concat(education, "\n   \n    <h3>experience</h3>\n   <p span contenteditable= \"true\">").concat(experience, "</p>\n   \n    <h3>skills</h3>\n   <p <span contenteditable= \"true\">").concat(skills, "</p>\n   ");
    // Display generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = reumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
