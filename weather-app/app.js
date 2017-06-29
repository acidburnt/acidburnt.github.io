const endpoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=olsztyn';
const API_KEY = 'a42ce931346be3e6e07a4b15350af4bc';
const darkskyURL = `https://api.darksky.net/forecast/${ API_KEY }/` ;

const options = {
	method: 'GET',
	 mode: 'cors',
	 cache: 'default'
};

let coords;

fetch( endpoint )
.then( response => response.json() )
.then( data => {
	const location = data.results[ 0 ].geometry.location;
	coords = {
		lat: location.lat,
		lng: location.lng
	};
} )
.catch( err => {
	console.log( err );
} );
function printLink() {
	console.log( `${ darkskyURL }${ coords.lat },${ coords.lng }` );
	return `${ darkskyURL }${ coords.lat },${ coords.lng }`;
}
function getWeather() {
	fetch( `${ darkskyURL }${ coords.lat },${ coords.lng }`, options )
	.then( response => response.json() )
	.then( data => console.log( data ) );
}
