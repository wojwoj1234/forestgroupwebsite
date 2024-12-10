const hamburgerBtn = document.querySelector('.hamburger-btn')
const hamburgerIcon = document.querySelector('.hamburger-btn__icon')
const mobileNav = document.querySelector('.nav-mobile')
const mobileNavLinks = document.querySelectorAll('.nav-mobile__menu-link')
const footerYear = document.querySelector('.current-year')

const handleMobileNav = () => {
	if (mobileNav.classList.contains('nav-mobile--active')) {
		mobileNav.classList.add('nav-mobile--inactive')
		hamburgerIcon.setAttribute('src', './dist/img/icons/menu.svg')
		setTimeout(() => {
			mobileNav.classList.remove('nav-mobile--active')
		}, 700)
	} else {
		mobileNav.classList.toggle('nav-mobile--active')
		mobileNav.classList.remove('nav-mobile--inactive')
		hamburgerIcon.setAttribute(
			'src',
			mobileNav.classList.contains('nav-mobile--active') ? './dist/img/icons/x.svg' : './dist/img/icons/menu.svg'
		)
		mobileNavLinks.forEach(link => {
			link.addEventListener('click', () => {
				mobileNav.classList.add('nav-mobile--inactive')
				hamburgerIcon.setAttribute('src', './dist/img/icons/menu.svg')
				setTimeout(() => {
					mobileNav.classList.remove('nav-mobile--active')
				}, 700)
			})
		})
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
hamburgerBtn.addEventListener('click', handleMobileNav)
