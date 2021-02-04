console.log('It works')

$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('CLicked button')

    let email = $('.email').val()
    let subject = $('.subject').val()
    let message = $('.message').val()
    // Um in der div Box den Status anzugeben
    var statusElm = $('.status')
    statusElm.empty()


    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</di>')
    }
   
    if (subject.length >= 2 ) {
      statusElm.append('<div>Subject is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Subject is not valid</di>')
    } 

    if (message.length >= 10) {
      statusElm.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Message is not valid</di>')
    }


  })
})
    
