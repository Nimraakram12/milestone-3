var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var qualificationElement = document.getElementById('qualification');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && qualificationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var qualification = qualificationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeOutput = "\n       <h1>Resume Preview</h1>\n       <p><strong>Name: </strong>".concat(name_1, "</p>\n       <p><strong>Email: </strong>").concat(email, "</p>\n       <p><strong>Phone Number:</strong>").concat(phone, "</p>\n\n       <h2> Qualification:</h2>\n       <p>").concat(qualification, "</p>\n\n       <h2>Experience:</h2>\n       <p>").concat(experience, "</p>\n                            \n       <h2>Skills:</h2>\n       <p>").concat(skills, "</p>\n       ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more outputelements are missing');
    }
});
