const entryPage = document.querySelector('.entry-page')
const revealPage= document.querySelector('.reveal-page')

const input = document.querySelector('#message-input')
const btn = document.querySelector('.btn')
const linkInput = document.querySelector('#link-input')

const revealMessage = document.querySelector('#revealed-message')

if (!`(${window.location}`.includes('#')) {
// URL includes no query string

  revealPage.style.display = 'none';
   btn.addEventListener('click', event => {
    event.preventDefault()
    const secretMessage = btoa(input.value)
    linkInput.value = 
    `${window.location}#${secretMessage}`
    linkInput.select()
  })
} else {
  
  entryPage.style.display = 'none';
  const url = window.location.href;
  const secretMessage = url.split('#')[1];
  const plainMessage = atob(secretMessage);

  console.log(plainMessage);

  revealMessage.innerHTML = `Your secret message is "${plainMessage}" <br>`;
}