var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemenu = document.getElementById("sidemenu");
        function openmenu(){
            sidemenu.style.right = "0";
        }

        function closemenu(){
            sidemenu.style.right = "-200px";
        }



// Paste your deployed Web App URL here

// =====================================
// GOOGLE APPS SCRIPT CONTACT FORM
// =====================================

const scriptURL = "https://script.google.com/macros/s/AKfycbyyfotqy0r3NVctXbGsJ-M63nWtiugS9BG-6pZH9Jm73qFDMkXwLY0Ir0qvA9JZHi_q_Q/exec";

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const formStatus = document.getElementById("form-status");

if (contactForm) {

    contactForm.addEventListener("submit", async function(e) {

        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        try {

            const formData = new FormData(contactForm);

            await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                body: new URLSearchParams(formData)
            });

            formStatus.textContent = "Your message has been submitted!";
            formStatus.style.color = "#4bacec";

            contactForm.reset();

        } catch (error) {

            console.error(error);

            formStatus.textContent = "Message failed. Please try again.";
            formStatus.style.color = "red";

        } finally {

            submitBtn.disabled = false;
            submitBtn.textContent = "Submit";

        }

    });

}