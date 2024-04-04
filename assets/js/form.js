const scriptURL = 'https://script.google.com/macros/s/AKfycbwHyzyaLvGmQnQmb7GuvyysVtzdBs8UY7HbrBBa-Trnpxy-gZ_uwBqrBlKr7EPZhBt-/exec'

const form = document.forms['contact-form']

form.addEventListener('submit',e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Yor form is submitted Successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})