document.addEventListener("DOMContentLoaded", () => {
    // FAQ functionality
    const faqBoxes = document.querySelectorAll(".faqbox");

    const faqAnswers = [
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.",
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop or streaming device for one fixed monthly fee. Plans and prices may vary.",
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more.",
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on any internet-connected device that offers the Netflix app."
    ];

    faqBoxes.forEach((box, index) => {
        // Create the answer element
        const answer = document.createElement("div");
        answer.classList.add("faq-answer");
        answer.textContent = faqAnswers[index];

        // Hide the answer initially
        answer.style.display = "none";

        // Insert the answer after its FAQ box
        box.insertAdjacentElement("afterend", answer);

        // Make the FAQ clickable
        box.style.cursor = "pointer";
        box.setAttribute("role", "button");
        box.setAttribute("tabindex", "0");
        box.setAttribute("aria-expanded", "false");

        const toggleAnswer = () => {
            const isOpen = answer.style.display === "block";

            // Close all other answers
            document.querySelectorAll(".faq-answer").forEach((item) => {
                item.style.display = "none";
            });

            faqBoxes.forEach((item) => {
                item.setAttribute("aria-expanded", "false");
            });

            // Open the selected answer
            if (!isOpen) {
                answer.style.display = "block";
                box.setAttribute("aria-expanded", "true");
            }
        };

        box.addEventListener("click", toggleAnswer);

        // Support keyboard interaction
        box.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleAnswer();
            }
        });
    });

    // Email validation and Get Started button
    const emailInput = document.querySelector(
        '.hero-buttons input[type="text"]'
    );

    const getStartedButton = document.querySelector(".btn-red");

    getStartedButton.addEventListener("click", () => {
        const email = emailInput.value.trim();

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            alert("Please enter your email address.");
            emailInput.focus();
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        // Demo behavior: no real account is created
        alert(
            "Email accepted: " + email +
            "\nConnect this button to your signup page to continue."
        );
    });

    // Allow Enter to submit the email
    emailInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            getStartedButton.click();
        }
    });

    // Sign In button
    const signInButton = document.querySelector(".btn-red-sm");

    signInButton.addEventListener("click", () => {
        alert(
            "Sign In clicked!\nConnect this button to your login page."
        );
    });

    // Language button demo
    const languageButton = document.querySelector(
        "nav .btn:not(.btn-red-sm)"
    );

    languageButton.addEventListener("click", () => {
        alert(
            "Language selection clicked!\n" +
            "You can add a language dropdown here."
        );
    });
});