function sendMail(){
    let params={
        name:document.getElementById("name").value,
        phone:document.getElementById("phone").value,
        email:document.getElementById("email").value,
        date:document.getElementById("date").value,
        time:document.getElementById("time").value,
    }


    emailjs.send("service_c4z771e","template_w2jm7lo",params).then(alert("Email Sent! Waiting For Confirmation"))
}