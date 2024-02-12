

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



// JavaScript

const aside = document.getElementById('aside');
const collapseBtn = document.getElementById('collapse-btn');

collapseBtn.addEventListener('click', () => {
  aside.classList.toggle('collapsed');
  
});