function menuActive() {
	const burger =document.querySelector('.burger-menu'),
			menu = document.querySelector('.header-menu-mobile');

			burger.addEventListener('click', () => {
				
				burger.classList.toggle('_active');
				menu.classList.toggle('_active');
				window.document.body.classList.toggle('_lock');
				
			});
}
export default menuActive;
