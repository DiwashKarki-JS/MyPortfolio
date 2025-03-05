$(".menu").click(function () {
  $(".show_menu").addClass("visible");
  $(".overlay_close").addClass("active");
});
$(".menu_close").click(function () {
  $(".show_menu").removeClass("visible");
  $(".overlay_close").removeClass("active");
});
$(".overlay_close").click(function () {
  $(".show_menu").removeClass("visible");
  $(".overlay_close").removeClass("active");
});

// FORM
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("Message").value;

    // EmailJS template parameters
    let templateParams = {
      from_name: userName,
      from_email: userEmail,
      message: userMessage,
    };

    // Send email using EmailJS
    emailjs.send("service_96i3bgn", "template_ddhe7xp", templateParams).then(
      function (response) {
        alert("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("Failed to send email. Please try again.");
        console.log("FAILED...", error);
      }
    );
  });
});

// Initialize EmailJS
(function () {
  emailjs.init("DCPRTznv_HTPIjFkP"); // Replace with your EmailJS public key
})();
