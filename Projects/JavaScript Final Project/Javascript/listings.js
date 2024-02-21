
let defaultListings = [
    {
        id: 1,
        image: 'assets/images/card-1.jpeg',
        name: 'Cozy 5 Stars Apartment',
        description: 'A short description',
        price: 899,
        currency: '$',
        location: {
            city: 'Barcelona',
            country: 'Spain'
        }
    },
    {
        id: 2,
        image: 'assets/images/card-2.jpeg',
        name: 'Office Studio',
        description: 'A short description',
        price: 1119,
        currency: '$',
        location: {
            city: 'London',
            country: 'UK'
        }
    },
    {
        id: 3,
        image: 'assets/images/card-3.jpeg',
        name: 'Beautiful Castle',
        description: 'A short description',
        price: 459,
        currency: '$',
        location: {
            city: 'Milan',
            country: 'Italy'
        }
    },
];

let listing;

if (localStorage.getItem('listings')) {
    listing = JSON.parse(localStorage.getItem('listings'));
    if (listing.length === 0)
        listing = defaultListings;
} else {
    listing = defaultListings;
    localStorage.setItem('listings', JSON.stringify(listing));
}

let manageListContainer = document.getElementById('manage-list');
console.log(defaultListings);

listing.forEach(item => {
    let listItem = document.createElement('div');
    listItem.classList.add('manage-list-item');
    listItem.innerHTML = `
            <div class="manage-list-item-animation">
                <img src="${item.image}" class="manage-list-item-img">
                <div class="manage-list-item-edits">
                    <span class="material-symbols-outlined grey" title="View">preview</span>
                    <span class="material-symbols-outlined grenspan editIcon" id="updateParagraph${item.id}" title="Edit">edit</span>
                    <span class="material-symbols-outlined red deleteIcon" id="Delete${item.id}" title="Delete">close</span>
                </div>
            </div>
            <p class="manage-list-item-title" contenteditable="false">${item.name}</p>
            <p class="manage-list-item-paragraph" contenteditable="false">${item.description}</p>
            <hr>
            <div class="manage-list-item-bottom">
                <p class="manage-list-item-price" contenteditable="false">${item.currency}${item.price}/night</p>
                <div class="manage-list-item-bottom-right">
                    <span class="material-symbols-outlined gray-span" title="Delete">location_on</span>
                    <p class="manage-list-item-location" contenteditable="false">${item.location.city}, ${item.location.country}</p>
                </div>
            </div>
        `;

    manageListContainer.appendChild(listItem);

    let editBtn = listItem.querySelector('.editIcon');
    editBtn.addEventListener('click', () => {
        if (editBtn.textContent === 'edit') {
            editBtn.textContent = 'save';
            listItem.querySelectorAll('[contenteditable="false"]').forEach(element => {
                element.contentEditable = true;
            });
        } else {
            editBtn.textContent = 'edit';
            listItem.querySelectorAll('[contenteditable="true"]').forEach(element => {
                element.contentEditable = false;
            });
            

            item.name = listItem.querySelector('.manage-list-item-title').textContent;
            item.description = listItem.querySelector('.manage-list-item-paragraph').textContent;
            item.price = parseInt(listItem.querySelector('.manage-list-item-price').textContent);
            item.location.city = listItem.querySelector('.manage-list-item-location').textContent.split(',')[0];
            item.location.country = listItem.querySelector('.manage-list-item-location').textContent.split(',')[1];
            
            updateLocalStorage(listing);
        }
    });



    listItem.querySelector('.deleteIcon').addEventListener('click', () => {
        let itemId = item.id;
        removeItemFromLocalStorage(itemId);
        manageListContainer.removeChild(listItem);
        listing = listing.filter(listingItem => listingItem.id !== itemId);
        updateLocalStorage(listing);
    });
});

function removeItemFromLocalStorage(id) {
    let storedListing = JSON.parse(localStorage.getItem('listings'));
    let updatedListing = storedListing.filter(item => item.id !== id);
    localStorage.setItem('listings', JSON.stringify(updatedListing));
}

function updateLocalStorage(listing) {
    localStorage.setItem('listings', JSON.stringify(listing));
}