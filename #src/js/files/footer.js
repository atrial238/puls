function footer() {

	const footer = document.querySelector('.footer'),
			footerMbile = document.querySelector('.footer-mobile');

	function changefooter() {

		if(window.innerWidth > 767.98) {
			footerMbile.style.display = 'none';
			footer.style.display = 'block';
			
		}else{
			footerMbile.style.display = 'block';
			footer.style.display = 'none';
		}
	}

	window.addEventListener('resize', ()=> changefooter());
	changefooter();
}
export default footer; 