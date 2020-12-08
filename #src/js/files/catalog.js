function catalog () {

	const btnCard1 = document.querySelectorAll('.catalog-item__link'),
			btnCard2 = document.querySelectorAll('.catalog-item__back');
			
	btnCard1.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			btn.parentElement.parentElement.classList.add('catalog-item__wrapper_active');
		});
	});

	btnCard2.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			btn.parentElement.parentElement.classList.remove('catalog-item__wrapper_active');
			
		});
	});

}
export default catalog;