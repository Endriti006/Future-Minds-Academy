console.log("Hello World3");

const colorItems = document.querySelectorAll('.color-settings li');


colorItems.forEach(item => {
    item.addEventListener('click', function() {

        colorItems.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');
    });
});

const colorSidebar =document.querySelectorAll('.sidebar-color-settings li');

colorSidebar.forEach(item =>{
    item.addEventListener('click',function(){

colorSidebar.forEach(item =>{


    item.classList.remove('active');
});
this.classList.add('active');

});

});


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


let activeColor = "#e91e63"; 


colorSettings.addEventListener("click", (e) => {
  if(e.target.classList.contains("color-purple")) {
    activeColor = "#9c27b0";
  }
  else if(e.target.classList.contains("color-blue")) {
     activeColor = "#00bcd4";
  }
  else if(e.target.classList.contains("color-green")) {
     activeColor = "#4caf50";
  }
  else if(e.target.classList.contains("color-orange")) {
    activeColor = "#ff9800";
  }
  else if(e.target.classList.contains("color-red")) {
    activeColor = "#f44336"; 
  }
  else if(e.target.classList.contains("color-rose")) {
    activeColor = "#e91e63";
  }
  
  activeItem.style.backgroundColor = activeColor;
});

// Select sidebar and color settings 
const sidebar = document.querySelector(".aside");
const colorSettings1 = document.querySelector(".sidebar-color-settings");

// Update sidebar bg directly on select
colorSettings1.addEventListener("click", (e) => {

    if(e.target.classList.contains("color-black")) {
      sidebar.style.backgroundColor = "rgb(0, 0, 0, 0.7)";
      sidebar.style.backgroundBlendMode = "color"; 
    }
    else if(e.target.classList.contains("color-white")) {
      sidebar.style.backgroundColor = "rgba(200, 200, 200, 0.2)";
      sidebar.style.backgroundBlendMode = "normal";
    }
  
  });