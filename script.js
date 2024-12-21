
document.getElementById("submit").addEventListener("click", function (event) {
    // Get all input fields
    const inputs = document.querySelectorAll(".form input");
    let SubmitEvent = document.getElementById("submit");
    let isValid = true;

    // Loop through inputs and check if they are empty
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
            input.style.border = "2px solid red"; 
        } else {
            input.style.border = "";
        }
    });

    if (!isValid) {
        alert("Please fill out all fields before submitting.");
    } else {
        SubmitEvent.style.backgroundColor = "green";
    }

    // Prevent form submission if invalid
    event.preventDefault();
});
