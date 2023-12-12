// two pages that will be shown to the user, depending on whether the URL has a fragment (i.e. something following the # sign)
const entryPage = document.querySelector('.entry-page')
const revealPage = document.querySelector('.reveal-page')

// elements selected on the entry page (no fragment)
const input = document.querySelector('#message-input')
const btn = document.querySelector('.btn')
const linkInput = document.querySelector('#link-input')

// elements selected on the reveal page (yes fragment)
const revealMessage = document.querySelector('#revealed-message')

if (!`(${window.location}`.includes('#')) {
  // URL includes no fragment
  revealPage.style.display = 'none'

  // only encode the message when the button is clicked
  btn.addEventListener('click', event => {
    event.preventDefault()
    const secretMessage = btoa(input.value)
    linkInput.value = `${window.location}#${secretMessage}`
    linkInput.select()
  })
} else {
  // URL includes fragment
  entryPage.style.display = 'none'
  const url = window.location.href
  const secretMessage = url.split('#')[1]
  const plainMessage = atob(secretMessage)

  console.log(plainMessage)

  revealMessage.innerHTML = `Your secret message is "${plainMessage}" <br>`
}