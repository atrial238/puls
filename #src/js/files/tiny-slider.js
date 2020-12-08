import tns from '../libs/tiny-slider';

function slider () {

	let slider = tns({
		container: '.carousel__inner',
		items: 1,
		slideBy: 1,
		center: true,
		mouseDrag: true,
		prevButton: '.carousel__btn-prev',
		nextButton: '.carousel__btn-next',
	 });
}

export {slider};