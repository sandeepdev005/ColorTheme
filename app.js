const menu = document.querySelector('#mobile-menu')
const menuLink =  document.querySelector('.navbar_menu')

const mobileMenu = ()=>{
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);


const highLightMenu = () =>{
    const ele = document.querySelector('.highlight');
    const homeMenu = document.querySelector("#home_page");
    const aboutMenu = document.querySelector("#about_page");
    const serviceMenu = document.querySelector("#services_page");

    let scrollPos =  scrollY;


    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight')
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        serviceMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
      }


      if((ele && window.innerWidth <960 && scrollPos < 600 ) || ele){
            ele.classList.remove('highlight');
      }

}

window.addEventListener('scroll',highLightMenu);
window.addEventListener('click',highLightMenu);


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 468 && menuBars) {
      menu.classList.toggle('is-active');
      menuLink.classList.remove('active');
    }
  };

window.addEventListener('scroll',hideMobileMenu);
window.addEventListener('click',hideMobileMenu);