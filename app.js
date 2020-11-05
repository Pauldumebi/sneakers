let pinkButton = document.querySelector('.submitBtn')
    blueColor = document.querySelector('.blue').addEventListener('click', function blueColor () {
      // To change the background colour to blue when clicked
      document.querySelector('body').style.backgroundColor = '#0392BF'
   })
    pinkColor = document.querySelector('.pink').addEventListener('click', 
    function pinkColor () {
      // To change the background colour to pink when clicked
      document.querySelector('body').style.backgroundColor = '#ED48BA';
   })
    yellowColor = document.querySelector('.yellow').addEventListener('click', function yellowColor() {
      // To change the background colour to yellow when clicked
      document.querySelector('body').style.backgroundColor = '#FBEC06'
   })
    greyColor = document.querySelector('.grey').addEventListener('click', function greyColor() {
      // To change the background colour to grey when clicked
      document.querySelector('body').style.backgroundColor = '#B3D4E0'
   })

// Adding the active class to selected buttons
colorSection = document.getElementById('color-section');
allColours = colorSection.getElementsByClassName('color')
for (let i = 0; i < allColours.length; i++) {
   allColours[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active");
   current[0].className = current[0].className.replace(" active", "");
   this.className += " active";   
   })
}
// allColours = document.getElementsByClassName('color')
// for (let i = 0; i < allColours.length; i++) {
//    if (allColours[3] = 'clicked') {
//       pinkButton.classList.add('pink-active')
//    }  else {
//       pinkButton.classList.remove('pink-active')
//    }
// };


    