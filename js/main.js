const header = document.querySelector('.header');

header.classList.toggle('header--active', scrollY > 0);

window.addEventListener('scroll', e => {
	header.classList.toggle('header--active', scrollY > 0);
});
