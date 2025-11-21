document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".tab-btn");
    const tabs = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            // remove active classes
            buttons.forEach(btn => btn.classList.remove("active"));
            tabs.forEach(tab => tab.classList.remove("active"));

            // add active class to clicked button
            button.classList.add("active");

            // show matching tab
            const id = button.getAttribute("data-tab");
            document.getElementById(id).classList.add("active");
        });
    });

});