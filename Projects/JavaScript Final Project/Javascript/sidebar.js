console.log("Hello World2");


const pagesExpand = [
    "P Pricing",
    "RTL Support",
    "T Timeline",
    "T Login Page",
    "T Register Page",
    "T Lock Screen Page",
    "LT User Profile"
];


localStorage.setItem("sidebar", JSON.stringify(pagesExpand));

document.addEventListener("DOMContentLoaded", function () {
    const page = localStorage.getItem("sidebar");

    if (page) {
        const pagesExpandS = JSON.parse(page);
        const pagesExpandSee = document.querySelector('.collaps-in');
        const johnDoeListItem = document.getElementById('johnDoelistItems'); 


        pagesExpandS.forEach(sidebar => {
            const listPage = document.createElement('li');
            listPage.textContent = sidebar;
            pagesExpandSee.appendChild(listPage); 
        });




        johnDoeListItem.addEventListener('click', function() {
            if (pagesExpandSee.style.display === 'none') {
                pagesExpandSee.style.display = 'block';
            } else {
                pagesExpandSee.style.display = 'none';
            }
        });
    }
});




