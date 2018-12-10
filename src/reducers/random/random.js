import {handleActions} from 'redux-actions';
import {
	fetchRandom,
	fetchRandomSuccess,
	fetchRandomFail,
	setRatingRandomGif,
	deleteGif,
	deleteAllGif,
} from '../../actions';

export const random = handleActions(
	{
		[setRatingRandomGif]: (state, action) => ({
			...state,
			ratingGif: action.payload,
		}),
		[deleteGif]: (state, action) => ({
			...state,
			data: state.data.filter(el => el.id !== action.payload),
		}),
		[deleteAllGif]: state => ({
			...state,
			data: [],
		}),
		[fetchRandom]: state => ({
			...state,
			isFetching: true,
			isFetched: false,
			error: false,
		}),
		[fetchRandomSuccess]: (state, action) => ({
			...state,
			data: [...state.data, action.payload],
			isFetching: false,
			isFetched: true,
			error: false,
		}),
		[fetchRandomFail]: (state, action) => ({
			...state,
			error: action.error,
			isFetched: false,
			isFetching: false,
		}),
	},

	{
		data: [],
		isFetching: false,
		isFetched: true,
		error: false,
		ratingGif: ``,
	}
);
