
console.log("Hello World4");

const listing1 = {
    id: 1,
    name: "Cozy 5 Star Apartaments",
    description: "A short description",
    price: 899,
    currency: '$',
    location: {
        city: 'Barcelona',
        country: 'Spain'
    },
    image: 'assets/images/card-1.jpeg'
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
    },
    image: 'assets/images/card-2.jpeg'
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
    },
    image: 'assets/images/card-3.jpeg'
}


const listings = JSON.parse(localStorage.getItem('listings')) || [];

const manageListContainer = document.querySelector('.manage-list-container');

function renderListings() {
    manageListContainer.innerHTML = ''; 
    
    if (listings.length === 0) {
   
        manageListContainer.innerHTML = '<p>No listings available</p>';
        return;
    }

    listings.forEach(listing => {
        const listingContainer = document.createElement('div');
        listingContainer.classList.add('manage-list-item');
        listingContainer.id = 'listing' + listing.id;

        listingContainer.innerHTML = `
            <div class="manage-list-item-animation">
                <img src="${listing.image}" class="manage-list-item-img">
                <div class="manage-list-item-edits">
                    <span class="material-symbols-outlined grey" title="View">preview</span>
                    <span class="material-symbols-outlined grenspan editIcon" id="updateParagraph${listing.id}" title="Edit">edit</span>
                    <span class="material-symbols-outlined red deleteIcon" id="Delete${listing.id}" title="Delete">close</span>
                </div>
            </div>
            <p class="manage-list-item-title">${listing.name}</p>
            <p class="manage-list-item-paragraph">${listing.description}</p>
            <hr>
            <div class="manage-list-item-bottom">
                <p>${listing.currency}${listing.price}/night</p>
                <div class="manage-list-item-bottom-right">
                    <span class="material-symbols-outlined gray" title="Delete">location_on</span>
                    <p>${listing.location.city}, ${listing.location.country}</p>
                </div>
            </div>
        `;

        manageListContainer.appendChild(listingContainer);

        const editIcon = listingContainer.querySelector('.editIcon');
        editIcon.addEventListener('click', function () {
         
        });

        deleteIcon.addEventListener('click', function () {
            let listItem = this.closest('.manage-list-item');
            let cardId = listItem.id.replace('listing', '');
        
            listItem.remove();
        
            let indexToDelete = listings.findIndex(listing => listing.id === parseInt(cardId));
            if (indexToDelete !== -1) {
                listings.splice(indexToDelete, 1);
                localStorage.setItem('listings', JSON.stringify(listings));
        
                if (listings.length === 0) {
                    renderListings();
                }
            }
        });
    });
}
renderListings();
