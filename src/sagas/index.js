import {
	fetchTrending,
	fetchTrendingSuccess,
	fetchTrendingFail,
	fetchRandom,
	fetchRandomFail,
	fetchRandomSuccess,
	fetchSearch,
	fetchSearchSuccess,
	fetchSearchFail,
} from '../actions';
import {takeLatest, fork, call, put, select} from 'redux-saga/effects';
import {trendingGif, apiKey, randomGif, searchGif} from '../api';
import {
	getSearchPhrase,
	getTrendingOffsetGifs,
	getRatingRandomGif,
	getRatingTrendingGifs,
} from '../reducers';

function* onFetchTrending() {
	try {
		const offsetGifs = yield select(getTrendingOffsetGifs);
		const ratingGifs = yield select(getRatingTrendingGifs);
		const gif = yield call(
			trendingGif,
			apiKey,
			offsetGifs,
			ratingGifs.toUpperCase()
		);
		yield put(
			fetchTrendingSuccess(
				gif.data,
				gif.pagination.total_count,
				gif.pagination.count
			)
		);
	} catch (error) {
		yield put(fetchTrendingFail(error));
	}
}

function* onFetchRandom() {
	try {
		const ratingGif = yield select(getRatingRandomGif);
		const gif = yield call(randomGif, apiKey, ratingGif.toUpperCase());
		yield put(fetchRandomSuccess(gif.data));
	} catch (error) {
		yield put(fetchRandomFail(error));
	}
}

function* onFetchSearch() {
	try {
		const searchPhrase = yield select(getSearchPhrase);
		const gif = yield call(searchGif, apiKey, searchPhrase);
		yield put(fetchSearchSuccess(gif.data));
	} catch (error) {
		yield put(fetchSearchFail(error));
	}
}

function* onFetchTrendingWatch() {
	yield takeLatest(fetchTrending, onFetchTrending);
}

function* onFetchRandomWatch() {
	yield takeLatest(fetchRandom, onFetchRandom);
}

function* onFeatchSearchWatch() {
	yield takeLatest(fetchSearch, onFetchSearch);
}

export default function*() {
	yield fork(onFetchTrendingWatch);
	yield fork(onFetchRandomWatch);
	yield fork(onFeatchSearchWatch);
}
