//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const qualificationElement = document.getElementById('qualification') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    
    if (nameElement && emailElement && phoneElement && qualificationElement && experienceElement && skillsElement){
       const name = nameElement.value;
       const email = emailElement.value;
       const phone = phoneElement.value;
       const qualification = qualificationElement.value;
       const experience = experienceElement.value;
       const skills = skillsElement.value;

       //create resume output
       const resumeOutput=`
       <h1>Resume Preview</h1>
       <p><strong>Name: </strong>${name}</p>
       <p><strong>Email: </strong>${email}</p>
       <p><strong>Phone Number:</strong>${phone}</p>

       <h2> Qualification:</h2>
       <p>${qualification}</p>

       <h2>Experience:</h2>
       <p>${experience}</p>
                            
       <h2>Skills:</h2>
       <p>${skills}</p>
       `;
       const resumeOutputElement = document.getElementById('resumeOutput');
       if(resumeOutputElement){
           resumeOutputElement.innerHTML = resumeOutput
       }else{
           console.error('the resume output elements are missing')
       } 
   }   else{
           console.error('one or more outputelements are missing')
       }
   
});