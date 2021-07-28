const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click',()=>{
        // Toggle Nav
        nav.classList.toggle('nav-active');

    // Animate Nav-links
        navLinks.forEach((link, index) => {
            // console.log(index);
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    // Burger Animation
    burger.classList.toggle('toggle');
    });
}

navSlide()


// Cleaner Code Tip: call functions in here:
// const navScript = ()=>{
//     navSlide();
// }



