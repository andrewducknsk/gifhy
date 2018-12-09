import {handleActions} from 'redux-actions';
import {
	fetchTrendingSuccess,
	fetchTrending,
	fetchTrendingFail,
	setTrendingOffsetGifs,
	setRatingTrendingGifs,
} from '../../actions';

export const trending = handleActions(
	{
		[setRatingTrendingGifs]: (state, action) => ({
			...state,
			ratingGifs: action.payload,
		}),
		[setTrendingOffsetGifs]: (state, action) => ({
			...state,
			offsetGifs: action.payload,
		}),
		[fetchTrending]: state => ({
			...state,
			data: [],
			dataTotalCount: null,
			fetchedDataCount: null,
			isFetching: true,
			isFetched: false,
		}),
		[fetchTrendingSuccess]: (state, action) => ({
			...state,
			data: action.payload.data,
			dataTotalCount: action.meta.dataTotalCount,
			fetchedDataCount: action.meta.fetchedDataCount,
			isFetching: false,
			isFetched: true,
		}),
		[fetchTrendingFail]: (state, action) => ({
			...state,
			error: action.error,
			isFetched: false,
			isFetching: false,
		}),
	},
	{
		data: [],
		dataTotalCount: null,
		fetchedDataCount: null,
		isFetching: false,
		isFetched: true,
		error: false,
		offsetGifs: 0,
		ratingGifs: ``,
	}
);
