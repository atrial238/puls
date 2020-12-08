function header (){

	const nav = document.querySelector('.header__nav-mob'),
			burger = document.querySelector('.burger-menu'),
			menu = document.querySelector('.header__nav-mob'),
			scrollWidth = `${window.innerWidth - document.documentElement.clientWidth}px`;

	let headerHieght  = document.querySelector('.header').offsetHeight;

	nav.style.top = `${headerHieght - 5}px`;

	window.addEventListener('resize', () => {
		headerHieght  = document.querySelector('.header').offsetHeight;
		nav.style.top = `${headerHieght - 5}px`;
	});
	
	burger.addEventListener('click', () => {
		
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		window.document.body.classList.toggle('_lock');
		
		if(window.document.body.classList.contains('_lock')){
		
			window.document.body.style.marginRight = scrollWidth;
		}else{
			window.document.body.style.marginRight = '';
		}
		
	});
	
	burger.addEventListener('Touch', (e) => {
		e.preventDefault();   
	})
}
export default header;