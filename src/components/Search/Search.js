// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Reducers
import {
	getSearchIsFetching,
	getSearchFail,
	getSearchData,
} from '../../reducers/index';
// Components
import GifContent from '../GifContent/GifContent';
import SearchInput from '../SearchInput/SearchInput';
// Style
import './search.scss';

class Search extends PureComponent {
	render() {
		const {searchData, isFetching, error} = this.props;

		return (
			<section className='search'>
				<h2 className='search__title'>Search Gif's</h2>
				<SearchInput
					fullWidth={true}
					showIcon={true}
					showHeaderSearchBtn={false}
					placeholder='Enter search phrase'
				/>

				<GifContent
					isFetching={isFetching}
					error={error}
					data={searchData}
					paginate={false}
					showDeleteBtn={false}
				/>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	isFetching: getSearchIsFetching(state),
	searchData: getSearchData(state),
	error: getSearchFail(state),
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);

Search.propsTypes = {
	searchData: PropTypes.array.isRequired,
	error: PropTypes.bool.isRequired,
	isFetching: PropTypes.bool.isRequired,
};
