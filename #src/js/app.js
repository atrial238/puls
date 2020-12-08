
import ibg from './files/imageToBackground';
import testWebp from './files/isSupportWebp';
import initMap from './files/map';
import tabs from './files/tabs';
import {slider} from './files/tiny-slider';
import modals from './files/modal';
import catalog from './files/catalog';
import align from './files/alignTitle';
import forms from './files/form';
import maskForNumberPhone from './files/maskForNumberPhone';
import {smoothScrolling} from './files/scrolling';
import footer from './files/footer';



window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	ibg();
	testWebp();
	initMap();
	tabs();
	slider();
	modals('.btn-consultation', '#consultation', '.overlay', '#consultation .modal__close');
	modals('.btn-order', '#order', '.overlay', '#order .modal__close');
	catalog();
	align('.catalog-item__subtitle');
	forms();
	maskForNumberPhone('[name = phone]');
	smoothScrolling('.link');
	footer();

});