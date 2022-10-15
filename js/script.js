//* toggle menu
 let menu = document.querySelector('.menu-icon');
 let sideBar = document.querySelector('.side-bar');
 let main = document.querySelector('main');
 let categories = document.querySelector('.categories');

 menu.addEventListener('click', ()=>{
  // menu.style.backgroundColor = 'red'
  sideBar.classList.toggle('collapse-side-bar')
  main.classList.toggle('grow-main')
  categories.classList.toggle('grow-categories')
 })

 //* on screen width
 window.addEventListener('resize', ()=>{
   // console.log()
   if(innerWidth <= 1314){
      menu.click();
    }
 })
