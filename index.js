const welcomePage = document.querySelector('.row')
const input = document.querySelector('#message-input')
const btn = document.querySelector('.btn')
const linkInput = document.querySelector('#link-input')

if (!`(${window.location}`.includes('#')) {
  btn.addEventListener('click', event => {
    event.preventDefault()

    const secretMessage = btoa(input.value)
    linkInput.value = `${window.location}#${secretMessage}`
    linkInput.select()
  })
} else {
  
  welcomePage.style.display = 'none'

}