const aboutUsSection = document.querySelector('.about-us')
const offersSection = document.querySelector('.offers')
const aboutUsLink = document.querySelector('.about-us-link')
const offersLink = document.querySelector('.offers-link')
const homeLink = document.querySelector('.home-link')
const contactLink = document.querySelector('.contact-link')

const handleScrollSpy = () => {
	let top = window.scrollY + 7 * parseFloat(getComputedStyle(document.documentElement).fontSize)
	const aboutUsTop = aboutUsSection.offsetTop
	const offersTop = offersSection.offsetTop

	if (top > 0 && top < aboutUsTop) {
		homeLink.classList.add('active')
		aboutUsLink.classList.remove('active')
		offersLink.classList.remove('active')
		contactLink.classList.remove('active')
	} else if (top >= aboutUsTop && top < offersTop) {
		homeLink.classList.remove('active')
		aboutUsLink.classList.add('active')
		offersLink.classList.remove('active')
		contactLink.classList.remove('active')
	} else if (top >= offersTop) {
		homeLink.classList.remove('active')
		aboutUsLink.classList.remove('active')
		offersLink.classList.add('active')
		contactLink.classList.remove('active')
	} else {
		homeLink.classList.remove('active')
		aboutUsLink.classList.remove('active')
		offersLink.classList.remove('active')
		contactLink.classList.add('active')
	}
}

window.addEventListener('scroll', handleScrollSpy)
