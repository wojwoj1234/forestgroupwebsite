const contactLink = document.querySelector('.contact-link')
const username = document.querySelector('#name')
const email = document.querySelector('#email')
const title = document.querySelector('#title')
const message = document.querySelector('#message')
const sendBtn = document.querySelector('.contact__form-btn')
const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('.popup__btn')

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			el.classList.add('error')
		} else {
			el.classList.remove('error')
		}
	})
}

const checkLength = (input, min, max) => {
	if (input.value.length < min) {
		input.classList.add('error')
		input.value = ''
		input.setAttribute('placeholder', `${input.previousElementSibling.innerText} składa się z min. ${min} znaków.`)
	}

	if (input.value.length > max) {
		input.classList.add('error')
		input.value = ''
		input.setAttribute('placeholder', `${input.previousElementSibling.innerText} składa się z max. ${max} znaków.`)
	}
	if (input.value.length >= min && input.value.length <= max && input.classList.contains('error')) {
		input.classList.remove('error')
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		email.classList.remove('error')
	} else {
		email.value = ''
		email.setAttribute('placeholder', 'E-mail jest niepoprawny')
		email.classList.add('error')
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('input')
	let errorCount = 0
	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add('show-popup')
	}
}

const closePopup = () => {
	popup.classList.remove('show-popup')
	username.value = ''
	email.value = ''
	title.value = ''
	message.value = ''
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([username, email, title, message])
	checkLength(username, 3, 30)
	checkMail(email)
	checkLength(title, 5, 100)
	checkLength(message, 30, 2000)
	checkErrors()
})

popupBtn.addEventListener('click', closePopup)

contactLink.classList.add('active')
