// console.log("Hola desde JS")
navbar = document.querySelector('.navbar');
window.onscroll = () => {
  if (this.scrollY <= 100) {
    navbar.className = 'navbar fixed-top';
  }
  else {
    navbar.className = 'navbar scroll fixed-top';
  }
};
