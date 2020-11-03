let blueColor = document.querySelector('.blue').addEventListener('click', function blueColor () {
      document.querySelector('body').style.backgroundColor = '#0392BF'
})
    pinkColor = document.querySelector('.pink').addEventListener('click', 
   function pinkColor () {
   document.querySelector('body').style.backgroundColor = '#ED48BA'
})
    yellowColor = document.querySelector('.yellow').addEventListener('click', function yellowColor() {
       document.querySelector('body').style.backgroundColor = '#FBEC06'
    })
    greyColor = document.querySelector('.grey').addEventListener('click', function greyColor() {
       document.querySelector('body').style.backgroundColor = '#B3D4E0'
    })
    colorSection = document.getElementById('color-section');
    allColours = colorSection.getElementsByClassName('color')
    for (let i = 0; i < allColours.length; i++) {
      allColours[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });

    }

    