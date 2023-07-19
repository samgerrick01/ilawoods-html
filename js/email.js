function sendEmail() {
  const name = document.getElementById("name-res").value;
  const date = document.getElementById("date-res").value;
  const email = document.getElementById("email-res").value;

  var templateParams = {
    name: name,
    email: email,
    date: date,
  };

  emailjs.send("service_z17tgc8", "template_b8t2i37", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
