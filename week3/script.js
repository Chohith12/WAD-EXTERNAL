function validateForm() {

    // Getting input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value;

    // Name Validation
    if (name == "") {
        alert("Name cannot be empty");
        return false;
    }

    // Email Validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Enter valid email address");
        return false;
    }

    // Password Validation
    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return false;
    }

    // Confirm Password Validation
    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Phone Number Validation
    let phonePattern = /^[0-9]{10}$/;

    if (!phone.match(phonePattern)) {
        alert("Enter valid 10 digit mobile number");
        return false;
    }

    alert("Registration Successful");

    return true;
}