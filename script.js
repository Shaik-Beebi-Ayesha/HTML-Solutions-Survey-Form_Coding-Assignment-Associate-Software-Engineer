function submitForm() {
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderCheckboxes = document.getElementsByName('gender');
    const selectedGender = Array.from(genderCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
        .join(", ");
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if(firstName && lastName && dob && country && selectedGender && profession && email && mobile){
        const popupContent = `
        <p><strong>First Name : </strong> ${firstName}</p>
        <p><strong>Last Name : </strong> ${lastName}</p>
        <p><strong>Date of Birth : </strong> ${dob}</p>
        <p><strong>Country : </strong> ${country}</p>
        <p><strong>Gender : </strong> ${selectedGender}</p>
        <p><strong>Profession : </strong> ${profession}</p>
        <p><strong>Email : </strong> ${email}</p>
        <p><strong>Mobile Number : </strong> ${mobile}</p>

    `;
        document.getElementById('popup-content').innerHTML = popupContent;
        document.getElementById('popup').style.display = 'block';
        document.querySelector('.top-container').style.display='none';
    }
    else{
        window.alert("Please Fill all details");
    }
    
    
}
function resetForm() {
    document.getElementById('survey-form').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.querySelector('.top-container').style.display='block';
    resetForm();
}