

let dropdownItems = document.querySelectorAll('.listItems');


dropdownItems.forEach(item => {

    let sublist = item.nextElementSibling;
    let arrow = item.querySelector('.arrow')


    if (sublist && sublist.classList.contains('sublist')) {

        item.addEventListener('click', () => {
            sublist.style.display = sublist.style.display === 'block' ? 'none' : 'block';
            sublist.classList.toggle('active');
            item.classList.toggle('active');
        });
    }
});



const aside = document.getElementById('aside');
const collapseBtn = document.getElementById('collapse-btn');

collapseBtn.addEventListener('click', () => {
    aside.classList.toggle('collapsed');
    const collapseIcon = document.getElementById('collapse-btn');

    if (aside.classList.contains('collapsed')) {
        collapseIcon.innerHTML = 'view_headline';
        collapseIcon.title = 'Profile';
    } else {
        collapseIcon.innerHTML = 'more_vert';
        collapseIcon.title = 'See More';
    }
});