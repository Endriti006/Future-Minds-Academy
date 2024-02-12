
console.log("Hello World4");

const listing1 = {
    id: 1,
    name: "Cozy 5 Start Apartaments",
    description: "A short description",
    price: 899,
    currency: '$',
    location: {
        city: 'Barcelona',
        country: 'Spain'
    }
}

const listing2 = {
    id: 2,
    name: "Office Studio",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nam!",
    price: 1119,
    currency: '$',
    location: {
        city: 'London',
        country: 'UK'
    }
}

const listing3 = {
    id: 3,
    name: "Beautiful Castle",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptatibus sapiente odio cupiditate? Ipsam ad quia repellendus dolor, deleniti unde.",
    price: 459,
    currency: '$',
    location: {
        city: 'Milan',
        country: 'Italy'
    }
}

localStorage.setItem(listing1.id, JSON.stringify(listing1));
localStorage.setItem(listing2.id, JSON.stringify(listing2));
localStorage.setItem(listing3.id, JSON.stringify(listing3));

const listingElement = document.getElementById('listing1');
listingElement.querySelector('.manage-list-item-title').textContent = listing1.name;
listingElement.querySelector('.manage-list-item-paragraph').textContent = listing1.description;
listingElement.querySelector('.manage-list-item-bottom p').textContent = `${listing1.currency}${listing1.price}/night`;
listingElement.querySelector('.manage-list-item-bottom-right p').textContent = `${listing1.location.city}, ${listing1.location.country}`;

const deleteSpanListing1 = document.querySelector('#Delete1');
deleteSpanListing1.addEventListener('click', function () {
    const listItem = deleteSpanListing1.closest('.manage-list-item');
    listItem.remove();
});

document.addEventListener('DOMContentLoaded', function() {
    const editSpan1 = document.getElementById('updateParagraph1');

    editSpan1.addEventListener('click', function(){
        const paragraphs = document.querySelectorAll('#listing1 p');

        paragraphs.forEach(function(paragraph) {
            paragraph.contentEditable = true;
            paragraph.focus();
        });
    });

    
    const listing1 = document.getElementById('listing1');
    listing1.addEventListener('blur', function(event) {
        if (event.target.tagName === 'p') {
            event.target.contentEditable = false;
        }
    }, true); 
});






const listingElement2 = document.getElementById('listing2');
listingElement2.querySelector('.manage-list-item-title').textContent = listing2.name;
listingElement.querySelector('.manage-list-item-paragraph').textContent = listing2.description;
listingElement.querySelector('.manage-list-item-bottom p').textContent = `${listing2.currency}${listing2.price}/night`;
listingElement.querySelector('.manage-list-item-bottom-right p').textContent = `${listing2.location.city}, ${listing2.location.country}`;

const deleteSpanListing2 = document.querySelector('#Delete2');
deleteSpanListing2.addEventListener('click', function () {
    const listItem2 = deleteSpanListing2.closest('.manage-list-item');
    listItem2.remove();
});

document.addEventListener('DOMContentLoaded', function() {
    const editSpan2 = document.getElementById('updateParagraph2');

    editSpan2.addEventListener('click', function(){
        const paragraphs2 = document.querySelectorAll('#listing2 p');

        paragraphs2.forEach(function(paragraph) {
            paragraph.contentEditable = true;
            paragraph.focus();
        });
    });

    const listing2 = document.getElementById('listing2');
    listing2.addEventListener('blur', function(event) {
        if (event.target.tagName === 'p') {
            event.target.contentEditable = false;
        }
    }, true);
});




const listingElement3 = document.getElementById('listing3');
listingElement2.querySelector('.manage-list-item-title').textContent = listing3.name;
listingElement.querySelector('.manage-list-item-paragraph').textContent = listing3.description;
listingElement.querySelector('.manage-list-item-bottom p').textContent = `${listing3.currency}${listing3.price}/night`;
listingElement.querySelector('.manage-list-item-bottom-right p').textContent = `${listing3.location.city}, ${listing3.location.country}`;

const deleteSpanListing3 = document.querySelector('#Delete3')
deleteSpanListing3.addEventListener('click', function () {
    const listItem3 = deleteSpanListing3.closest('.manage-list-item');
    listItem3.remove();
});

document.addEventListener('DOMContentLoaded', function() {
    const editSpan3 = document.getElementById('updateParagraph3');

    editSpan3.addEventListener('click', function(){
        const paragraphs3 = document.querySelectorAll('#listing3 p');

        paragraphs3.forEach(function(paragraph) {
            paragraph.contentEditable = true;
            paragraph.focus();
        });
    });

    const listing3 = document.getElementById('listing3');
    listing3.addEventListener('blur', function(event) {
        if (event.target.tagName === 'p') {
            event.target.contentEditable = false;
        }
    }, true);
});

