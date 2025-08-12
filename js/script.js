const ButtonEye = document.querySelector('.eye')
const PasswordInput = document.querySelector('.password')

ButtonEye.addEventListener('click', () => {
  if (PasswordInput.type === 'password') {
    PasswordInput.type = 'text'
    ButtonEye.classList.replace('bx-eye-slash', 'bx-eye')
    // console.log(ButtonEye)
  } else {
    PasswordInput.type = 'password'
    ButtonEye.classList.replace('bx-eye', 'bx-eye-slash')
    // console.log(ButtonEye)
  }
})
