

const colorItems = document.querySelectorAll('.color-settings li');


colorItems.forEach(item => {
  item.addEventListener('click', function () {

    colorItems.forEach(item => {
      item.classList.remove('active');
    });

    this.classList.add('active');
  });
});

const colorSidebar = document.querySelectorAll('.sidebar-color-settings li');

colorSidebar.forEach(item => {
  item.addEventListener('click', function () {

    colorSidebar.forEach(item => {

      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});

//the change of filter color
const settingsIcon = document.getElementById('settings-icon');
const settingBox = document.getElementById('setting-box');


settingsIcon.addEventListener('click', () => {
  settingBox.classList.toggle('show');
});


document.addEventListener('click', (e) => {
  if (!settingBox.contains(e.target) && !settingsIcon.contains(e.target)) {
    settingBox.classList.remove('show');
  }
});

const colorSettings = document.querySelector(".color-settings");
const activeItem = document.querySelector(".listItems.active");


let activeColor = localStorage.getItem('activeColor') || "#e91e63";

activeItem.style.backgroundColor = activeColor;

colorSettings.addEventListener("click", (e) => {
  if (e.target.classList.contains("color-purple")) {
    activeColor = "#9c27b0";
  }
  else if (e.target.classList.contains("color-blue")) {
    activeColor = "#00bcd4";
  }
  else if (e.target.classList.contains("color-green")) {
    activeColor = "#4caf50";
  }
  else if (e.target.classList.contains("color-orange")) {
    activeColor = "#ff9800";
  }
  else if (e.target.classList.contains("color-red")) {
    activeColor = "#f44336";
  }
  else if (e.target.classList.contains("color-rose")) {
    activeColor = "#e91e63";
  }

  localStorage.setItem('activeColor', activeColor);

  activeItem.style.backgroundColor = activeColor;
});

window.addEventListener('load', () => {
  const storedColor = localStorage.getItem('activeColor');
  if (storedColor) {
    activeItem.style.backgroundColor = storedColor;
  }
});


//To change the background image
const images = document.querySelectorAll('.SidebarBackgroundImage img');
const aside = document.querySelector('.aside');


function saveImageToLocalStorage(imageSrc) {
    localStorage.setItem('selectedBackgroundImage', imageSrc);
}


function getSelectedImageFromLocalStorage() {
    return localStorage.getItem('selectedBackgroundImage');
}


function setBackgroundImage(imageSrc) {
    aside.style.backgroundImage = `url(${imageSrc})`;
}


images.forEach(image => {
    image.addEventListener('click', () => {
        const selectedImageSrc = image.src;
        setBackgroundImage(selectedImageSrc);
        saveImageToLocalStorage(selectedImageSrc);
    });
});


window.addEventListener('load', () => {
    const lastSelectedImageSrc = getSelectedImageFromLocalStorage();
    if (lastSelectedImageSrc) {
        setBackgroundImage(lastSelectedImageSrc);
    }
});


//aside change background color 
const colorSettings1 = document.querySelector(".sidebar-color-settings");


let sidebarColor = localStorage.getItem('sidebarColor') || "rgba(200, 200, 200, 0.2)"; // Default color if not set

aside.style.backgroundColor = sidebarColor;
aside.style.backgroundBlendMode = sidebarColor === "rgba(200, 200, 200, 0.2)" ? "normal" : "color"; // Changed sidebar to aside

colorSettings1.addEventListener("click", (e) => {
  if (e.target.classList.contains("color-black")) {
    sidebarColor = "rgb(0, 0, 0, 0.7)";
    aside.style.backgroundColor = sidebarColor;
    aside.style.backgroundBlendMode = "color";
  } else if (e.target.classList.contains("color-white")) {
    sidebarColor = "rgba(200, 200, 200, 0.2)";
    aside.style.backgroundColor = sidebarColor;
    aside.style.backgroundBlendMode = "normal";
  }


  localStorage.setItem('sidebarColor', sidebarColor);
});


window.addEventListener('load', () => {
  const storedSidebarColor = localStorage.getItem('sidebarColor');
  if (storedSidebarColor) {
    aside.style.backgroundColor = storedSidebarColor;
    aside.style.backgroundBlendMode = storedSidebarColor === "rgba(200, 200, 200, 0.2)" ? "normal" : "color"; // Changed sidebar to aside
  }
});
