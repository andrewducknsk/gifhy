import {handleActions} from 'redux-actions';
import {
	fetchSearch,
	fetchSearchSuccess,
	fetchSearchFail,
	setSearchPhrase,
} from '../../actions';

export const search = handleActions(
	{
		[fetchSearch]: state => ({
			...state,
			isFetching: true,
			isFetched: false,
		}),
		[fetchSearchSuccess]: (state, action) => ({
			...state,
			data: action.payload,
			searchPhrase: null,
			isFetched: true,
			isFetching: false,
		}),
		[fetchSearchFail]: (state, action) => ({
			...state,
			error: action.error,
			isFetched: false,
			isFetching: false,
		}),
		[setSearchPhrase]: (state, action) => ({
			...state,
			searchPhrase: action.payload,
		}),
	},
	{
		data: [],
		isFetching: false,
		isFetched: true,
		error: false,
		searchPhrase: null,
	}
);
