//ChatGPT, I fixed most of the mistakes to display plans, modal and object.
const plans = [
    {
        id: 1,
        name: "Basic",
        type: "Personal",
        price: 49,
        description: "Perfect for blogs and personal websites.",
        services: [
            "Monthly updates",
            "Weekly backup",
            "Security check"
        ]
    },

    {
        id: 2,
        name: "Business",
        type: "Business",
        price: 99,
        description: "Ideal for small business websites.",
        services: [
            "Weekly updates",
            "Daily backups",
            "SEO monitoring",
            "Priority support"
        ]
    },

    {
        id: 3,
        name: "Premium",
        type: "E-commerce",
        price: 199,
        description: "Complete maintenance for online stores.",
        services: [
            "Unlimited updates",
            "24/7 monitoring",
            "Performance optimization",
            "Daily backups",
            "Priority support"
        ]
    }
];

//display plans
const container = document.querySelector("#plansContainer");

function displayPlans(planArray) {

    container.innerHTML = "";

    planArray.forEach(plan => {

        const card = document.createElement("article");

        card.classList.add("card");

        card.innerHTML = `
            <h2>${plan.name}</h2>
            <p>${plan.type}</p>
            <h3>$${plan.price}/month</h3>

            <button class="details-btn"
                data-id="${plan.id}">
                View Details
            </button>
        `;

        container.appendChild(card);

    });

    addButtonEvents();
}

displayPlans(plans);

//search funcion
const search = document.querySelector("#search");

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filtered = plans.filter(plan =>
        plan.name.toLowerCase().includes(value)
    );

    displayPlans(filtered);

});

//filter by type
const typeFilter = document.querySelector("#typeFilter");

typeFilter.addEventListener("change", () => {

    const value = typeFilter.value;

    if (value === "All") {

        displayPlans(plans);

    } else {

        const filtered = plans.filter(plan =>
            plan.type === value
        );

        displayPlans(filtered);
    }

});

//filter bt price
const priceFilter = document.querySelector("#priceFilter");

priceFilter.addEventListener("change", () => {

    let filtered = [];

    if (priceFilter.value === "All") {

        filtered = plans;

    } else if (priceFilter.value === "50") {

        filtered = plans.filter(plan => plan.price < 50);

    } else if (priceFilter.value === "100") {

        filtered = plans.filter(plan =>
            plan.price >= 50 && plan.price <= 100
        );

    } else {

        filtered = plans.filter(plan =>
            plan.price > 100
        );

    }

    displayPlans(filtered);

});

//modal
const modal = document.querySelector("#modal");

const modalTitle = document.querySelector("#modalTitle");

const modalDescription = document.querySelector("#modalDescription");

const modalServices = document.querySelector("#modalServices");

const modalPrice = document.querySelector("#modalPrice");

function addButtonEvents() {

    const buttons = document.querySelectorAll(".details-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const selected = plans.find(plan => plan.id === id);

            modalTitle.textContent = selected.name;

            modalDescription.textContent = selected.description;

            modalPrice.textContent =
                "$" + selected.price + "/month";

            modalServices.innerHTML = "";

            selected.services.forEach(service => {

                const li = document.createElement("li");

                li.textContent = service;

                modalServices.appendChild(li);

            });

            modal.classList.remove("hidden");

        });

    });

}
//close modal
document.querySelector("#closeModal")
.addEventListener("click", () => {

    modal.classList.add("hidden");

});
