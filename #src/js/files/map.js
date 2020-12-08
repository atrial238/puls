function initMap(){



		const location = {lat: 55.769175811146, lng:37.646116233880576},

		options =  {
			center: location,
			zoom: 15,
			title: "Click to zoom",
		},

		locationMarks = [ [55.768533794282945, 37.64702818486996] ],

		urlMarks = 'img/icons/mapMark.png',

		map = new google.maps.Map(document.getElementById('map'), options),

		googleMaps = document.querySelector('#map'),

		contentInfoWindow = document.querySelector('.footer__info'),

		closeIcon = document.querySelector('.footer__close'),

		infowindow = new google.maps.InfoWindow({
		content: contentInfoWindow,
		});

		let mouseOverMap = false;

		locationMarks.forEach(locationMark => {

		const marker = new google.maps.Marker(
		{
			position: new google.maps.LatLng(locationMark[0], locationMark[1]),
			map: map,
			title: "Click to zoom",
			icon: {
				url: urlMarks
			}
		}
		);

		marker.addListener("click", () =>infowindow.open(map, marker));

		closeIcon.addEventListener("click", () => infowindow.close());

		infowindow.open(map, marker);

		marker.addListener("click", () => {

			let currentZoom = map.getZoom(),
				targetZoom = 15;
				
			let idIntervalZoom = setInterval( () => {

				if(currentZoom < targetZoom){
					map.setCenter({lat: 55.769175811146, lng:37.646116233880576});
					map.setZoom(++currentZoom);
				}else{
					clearInterval(idIntervalZoom);
				}

			}, 80);
		});
	
		});

		googleMaps.addEventListener('mouseover', () => {
		mouseOverMap = true;

		});

		googleMaps.addEventListener('mouseleave', () => {
		mouseOverMap = false;

		});

		document.addEventListener('keydown', (e) => {

		if(e.key == 'Control' && mouseOverMap) {
			infowindow.close();
		}

		});
	
}
	
export default initMap;



