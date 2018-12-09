import {combineReducers} from 'redux';
import {trending} from './trending/trending';
import {random} from './random/random';
import {search} from './search/search';

export default combineReducers({trending, random, search});

// Trending
export const getTrendingIsFetching = state => state.trending.isFetching;

export const getTrendingFail = state => state.trending.error;

export const getTrendingData = state => state.trending.data;

export const getTrendingOffsetGifs = state => state.trending.offsetGifs;

export const getRatingTrendingGifs = state => state.trending.ratingGifs;

export const getDataTotalCount = state => state.trending.dataTotalCount;

export const getFetchedDataCount = state => state.trending.fetchedDataCount;

// Random
export const getRandomIsFetching = state => state.random.isFetching;

export const getRandomFail = state => state.random.error;

export const getRandomData = state => state.random.data;

export const getRatingRandomGif = state => state.random.ratingGif;

// Search
export const getSearchIsFetching = state => state.search.isFetching;

export const getSearchFail = state => state.search.error;

export const getSearchData = state => state.search.data;

export const getSearchPhrase = state => state.search.searchPhrase;
