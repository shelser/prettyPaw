import gsap from "gsap";

export const menuControl = () => {
  const navigationButton = document.querySelector('.navigation__button');
  const navigationList = document.querySelector('.navigation__list');
  const navigationItems = document.querySelectorAll('.navigation__item');

  let isOpen = false;

  const tl = gsap.timeline({ paused: true });

  tl.fromTo(navigationList, 
    { opacity: 0, display: 'none'}, 
    { opacity: 1, display: 'block' }
  );
  
  navigationItems.forEach((elem, i) => {
    const x = i % 2 ? 500 : -500;
    tl.from(elem, {opacity: 0, x, duration :1}, '-=1')
  })

  

  const openMenu = () => {
    isOpen = !isOpen
    // navigationButton.classList.add('navigation__button_active');
    navigationList.style.display = isOpen ? tl.play() : tl.reverse();
    navigationButton.classList.toggle('navigation__button_active');
  };

  navigationButton.addEventListener('click', () => {
    openMenu();
  })


  const checkScreenSize = (e) => {
    if (e.matches) {
      gsap.set(navigationList, { opacity: 1, display: 'flex' });
      navigationItems.forEach((elem, i) => {
        gsap.set(elem, {opacity: 1, x: 0 })
      })
    } else {
      gsap.set(navigationList, { opacity: 0, display: 'none' });
      navigationItems.forEach((elem, i) => {
        const x = i % 2 ? 500 : -500;
        gsap.set(elem, {opacity: 0, x, duration :1})
      })
    }
  }
  const mediaQuery = window.matchMedia('(min-width: 1280px)');
  mediaQuery.addEventListener('change', checkScreenSize);
  checkScreenSize(mediaQuery);
};