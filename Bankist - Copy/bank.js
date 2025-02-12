
window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 600) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };
  const content = document.querySelector(".content");
  const svg = document.querySelector(".svg");
  const head = document.querySelector(".head");
  const para = document.querySelector(".para");
  const button1 = document.querySelector(".button1");
  const button2 = document.querySelector(".button2");
  const button3 = document.querySelector(".button3");
  const buttons = document.querySelectorAll(".butons");
  button1.onclick = () => {
    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    svg.src = "./upload-minimalistic-svgrepo-com.svg";
    head.innerHTML = "Tranfser money to anyone, instantly! No fees, no BS.";
    para.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    svg.style.cssText = "background-color: #ffcd0331 !important;";
  };
  button2.onclick = () => {
    button2.classList.add("active");
    button1.classList.remove("active");
    button3.classList.remove("active");
    svg.src = "./home-svgrepo-com.svg";
    head.innerHTML =
      "Buy a home or make your dreams come true, with instant loans.";
    para.innerHTML =
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    svg.style.cssText = "background-color: #5ec5763a !important;";
  };
  button3.onclick = () => {
    button3.classList.add("active");
    button2.classList.remove("active");
    button1.classList.remove("active");
    svg.src = "./profile-close-round-1344-svgrepo-com.svg";
    head.innerHTML =
      "No longer need your account? No problem! Close it instantly.";
    para.innerHTML =
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    svg.style.cssText = "background-color: #ff58602d !important;";
  };
  
  let currentCard = 1;
  
  function slideCards(direction) {
    currentCard += direction;
  
    if (currentCard > 3) {
      currentCard = 1;
    } else if (currentCard < 1) {
      currentCard = 3;
    }
  }
  //   var cards = document.querySelectorAll(".card");
  //   cards.forEach((card, index) => {
  //     card.style.transform = translateX(${(index - currentCard + 1) * -100}%);
  //   });
  // }
//   let currentIndex = 0;
// const totalItems = document.querySelectorAll('.carou').length;

// function showSlide(index) {
//     const container = document.querySelector('.corousell-container');
//     const slideWidth = document.querySelector('.carou').clientWidth;

//     container.style.transform = `translateX(-${index * slideWidth}px)`;
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % totalItems;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//     showSlide(currentIndex);
// }


  
  
  
  const modal = document.querySelector(".modal");
  const cancel = document.querySelector(".cancel");
  cancel.onclick = function () {
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
  };
  const account = document.querySelectorAll(".account");
  account.forEach(act=>{
  
    act.onclick = function () {
      modal.style.opacity = 1;
      modal.style.zIndex = 1;
    };
  })
  

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.card').length;
  const slideWidth = document.querySelector('.card').clientWidth;

  function updateSlider() {
      document.querySelectorAll('.card').forEach(card=>{
        console.log(currentIndex)
        card.style.transform = `translateX(${-currentIndex * 100}%)`;
      })
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
  }

  function prevSlide() {
      currentIndex = (currentIndex  + totalSlides) % totalSlides;
      updateSlider();
  }


  // document.querySelectorAll('.card').forEach((card,index)=>{
  //   card.style.transform = `translateX(${index * 100}%)`;
  // })
  