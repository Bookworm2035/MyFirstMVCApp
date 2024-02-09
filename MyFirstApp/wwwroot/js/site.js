// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
function calculateTotal() {
    // Get the entered hours and convert it to a number
    var hours = parseFloat($("#hours").val());

    // Check if the entered value is a positive number
    if (hours >= 0) {
        // Get the charge per hour
        var chargePerHour = parseFloat($("#chargePerHour").val().replace("$", ""));

        // Calculate the total
        var total = hours * chargePerHour;

        // Display the total in the output box
        $("#total").val("$" + total.toFixed(2)); // Corrected this line
    } else {
        // If the entered value is not a positive number, show an error message
        alert("Please enter a positive number of hours.");
    }
}

// Write your JavaScript code.
