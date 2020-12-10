
function footer() {

	const footer = document.querySelector('.footer'),
			footerMbile = document.querySelector('.footer-mobile'),
			scriptelem = document.querySelector('#scriptMap'),
			attributeSrc = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD3QtL2IP05dPUR8aqsAIcooTjiyO8ay3w';
	
	function changefooter() {

		if(window.innerWidth > 767.98) {
			footerMbile.style.display = 'none';
			footer.style.display = 'block';
			scriptelem.setAttribute('src', attributeSrc);
		}else{
			scriptelem.setAttribute('src', '');
			footerMbile.style.display = 'block';
			footer.style.display = 'none';
		}
	}

	window.addEventListener('resize', ()=> changefooter());
	changefooter();
}
export default footer; 