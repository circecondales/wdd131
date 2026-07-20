// Footer Year

document.querySelector("#year").textContent =
new Date().getFullYear();


// Contact Form

const form = document.querySelector("#contactForm");

const message = document.querySelector("#formMessage");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name =
    document.querySelector("#name").value.trim();

    const email =
    document.querySelector("#email").value.trim();

    const plan =
    document.querySelector("#plan").value;

    const text =
    document.querySelector("#message").value.trim();

    if(name === "" || email === "" || text === ""){

        message.textContent =
        "Please complete all required fields.";

        message.className = "error";

        return;

    }

    if(plan === ""){

        message.textContent =
        "Please select a maintenance plan.";

        message.className = "error";

        return;

    }

    message.textContent =
    `Thank you ${name}! Your request has been sent successfully.`;

    message.className = "success";

    form.reset();

});
