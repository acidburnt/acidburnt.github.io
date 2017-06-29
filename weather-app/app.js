const API_KEY = '3628e32ef46a41a89c3155008172906';
const apiURL = `https://api.apixu.com/v1/current.json?key=${ API_KEY }&q=`;

function getWeather() {
	const input = document.getElementById( 'city' ).value.trim();
	const output = document.getElementById( 'user-output' );

	fetch( apiURL + input )
	.then( response => {
		if ( response.status !== 200 ) {
			const view =
			'<h1>Oops, could not find this city</h1>\n<p>Try to input something else</p>';
			output.innerHTML = view;
			return console.log( 'Bad request, status code: ', response.status );
		}
		return response.json();
	} )
	.then( data => {
		console.log( data );
		const view =
		`<h1>${ data.location.name }, ${ data.location.country }</h1>
		<span><img src="${ data.current.condition.icon }" alt="${ data.current.condition.text }" /></span>
		<p>Temperature: ${ data.current.temp_c } &#8451</p>
		<p>Wind: ${ data.current.wind_kph } km/h, ${ data.current.wind_dir }</p>
		<p>Humidity: ${ data.current.humidity } %</p>`;
		output.innerHTML = view;
	} );
}
const button = document.getElementById( 'button' );
button.addEventListener( 'click', getWeather, false );
