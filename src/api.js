const baseSetting = {
	method: 'GET',
	mode: 'cors',
};

export const apiKey = `8wFOjFeeDC8is30VqlkwqBV9ofwT9ljn`;

export const trendingGif = (apiKey, offsetGifs, ratingGif) =>
	fetch(
		`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&offset=${offsetGifs}&rating=${ratingGif}`,
		baseSetting
	).then(response => response.json());

export const randomGif = (apiKey, ratingGif) =>
	fetch(
		`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=${ratingGif}`,
		baseSetting
	).then(response => response.json());

export const searchGif = (apiKey, phrase) =>
	fetch(
		`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${phrase}&limit=25&offset=0&rating=G&lang=en
	`,
		baseSetting
	).then(response => response.json());
