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

// add event listener to the form submission
form.addEventListener('submit', (event) => {
  // prevent default form submission behavior
  event.preventDefault();

  // check if email is in lowercase
  if (emailInput.value === emailInput.value.toLowerCase()) {
    // email is in lowercase, submit the form
    form.submit();
  } else {
    // email is not in lowercase, show error message
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


