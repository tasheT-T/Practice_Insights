
document.getElementById("submit").addEventListener("click", function (event) {
    // Get all input fields
    const inputs = document.querySelectorAll(".form input");
    let SubmitEvent = document.getElementById("submit");
    let isValid = true;
    let errorMessage = '';

    // Loop through inputs and check if they are empty
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
            input.style.border = "2px solid red"; 
            errorMessage = 'Please fill out all fields before submitting.';
        } else if (isNaN(input.value)) {
            isValid = false;
            input.style.border = "2px solid red";
            errorMessage = 'Please enter valid numbers.';
        } else {
            input.style.border = "";
        }
    });

    if (!isValid) {
        alert(errorMessage);
    } else {
        SubmitEvent.style.backgroundColor = "green";
    }

    // Prevent form submission if invalid
    event.preventDefault();
});
