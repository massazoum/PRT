const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const menuOptions = document.querySelectorAll('.menu li');

toggle.addEventListener('click', () => {
  body.classList.toggle('open');
});

menuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    body.classList.remove('open');
  });
});

let typed =new Typed(".typing",{
 strings:['Full-stack developer','Remote professional','Micronaute','Traveler'],
 typeSpeed:100,
 backSpeed:60,
 loop:true,
})

// get form elements
const form = document.querySelector('.form0');
const emailInput = form.querySelector('.inp-email');
const submitBtn = form.querySelector('.submit0');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (emailInput.value === emailInput.value.toLowerCase()) {
    form.submit();
  } else {
    const errorMsg = document.querySelector('.error-message');
    errorMsg.textContent = 'Email should be in lowercase.';
    errorMsg.style.color = '#FF4136';
    submitBtn.insertAdjacentElement('afterend', errorMsg);
  }
});

AOS.init({
  duration: 1000,
  once: false,
});


