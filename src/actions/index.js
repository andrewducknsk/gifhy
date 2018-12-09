import {createActions} from 'redux-actions';

const actionCreator = createActions({
	APP: {
		TRENDING: {
			REQUEST: undefined,
			SUCCESS: [
				data => ({data}),
				(data, dataTotalCount, fetchedDataCount) => ({
					dataTotalCount,
					fetchedDataCount,
				}),
			],
			FAIL: undefined,
			OFFSET: undefined,
			RATING: undefined,
		},
		RANDOM: {
			REQUEST: undefined,
			SUCCESS: undefined,
			FAIL: undefined,
			RATING: undefined,
			DELETE: undefined,
			DELETE_ALL: undefined,
		},
		SEARCH: {
			REQUEST: undefined,
			SUCCESS: undefined,
			FAIL: undefined,
			PHRASE: undefined,
		},
	},
});

// Trending
export const fetchTrending = actionCreator.app.trending.request;

export const fetchTrendingSuccess = actionCreator.app.trending.success;

export const fetchTrendingFail = actionCreator.app.trending.fail;

export const setTrendingOffsetGifs = actionCreator.app.trending.offset;

export const setRatingTrendingGifs = actionCreator.app.trending.rating;

// Random
export const fetchRandom = actionCreator.app.random.request;

export const fetchRandomSuccess = actionCreator.app.random.success;

export const fetchRandomFail = actionCreator.app.random.fail;

export const deleteGif = actionCreator.app.random.delete;

export const deleteAllGif = actionCreator.app.random.deleteAll;

export const setRatingRandomGif = actionCreator.app.random.rating;

// Search
export const fetchSearch = actionCreator.app.search.request;

export const fetchSearchSuccess = actionCreator.app.search.success;

export const fetchSearchFail = actionCreator.app.search.fail;

export const setSearchPhrase = actionCreator.app.search.phrase;
