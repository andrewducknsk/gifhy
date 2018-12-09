// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import {
	fetchTrending,
	setTrendingOffsetGifs,
	setRatingTrendingGifs,
} from '../../actions';
// Reducers
import {
	getTrendingIsFetching,
	getTrendingFail,
	getTrendingData,
	getRatingTrendingGifs,
	getDataTotalCount,
	getFetchedDataCount,
} from '../../reducers';
// Components
import GifContent from '../GifContent/GifContent';
import Rating from '../Rating/Rating';
// Style
import './trending.scss';

class Trending extends PureComponent {
	state = {
		selectedPage: 0,
	};

	componentDidUpdate(prevProps) {
		const {ratingGifs, fetchTrending} = this.props;

		if (prevProps.ratingGifs !== ratingGifs && ratingGifs !== ``) {
			fetchTrending();
			this.setState({test: true});
		} else {
			this.setState({taedt: false});
		}
	}

	onClickPaginatorBtn = e => {
		const {selected} = e;
		const {fetchTrending, setTrendingOffsetGifs, fetchedDataCount} = this.props;

		this.setState({selectedPage: selected});

		setTrendingOffsetGifs(selected * fetchedDataCount);
		fetchTrending();
	};

	render() {
		const {
			isFetching,
			error,
			trendingData,
			setRatingTrendingGifs,
			dataTotalCount,
			fetchedDataCount,
		} = this.props;
		const {selectedPage} = this.state;

		return (
			<section className='trending'>
				<h2 className='trending__title'>Trending Gif's</h2>
				<Rating setRating={setRatingTrendingGifs} />
				{trendingData.length === 0 ? (
					<p className='random__warning'>Please select a rating (;</p>
				) : (
					<GifContent
						isFetching={isFetching}
						error={error}
						data={trendingData}
						paginate={true}
						showDeleteBtn={false}
						dataTotalCount={dataTotalCount}
						fetchedDataCount={fetchedDataCount}
						selectedPage={selectedPage}
						onClickPaginatorBtn={this.onClickPaginatorBtn}
					/>
				)}
			</section>
		);
	}
}

const mapStateToProps = state => ({
	isFetching: getTrendingIsFetching(state),
	trendingData: getTrendingData(state),
	error: getTrendingFail(state),
	ratingGifs: getRatingTrendingGifs(state),
	dataTotalCount: getDataTotalCount(state),
	fetchedDataCount: getFetchedDataCount(state),
});

const mapDispatchToProps = {
	fetchTrending,
	setTrendingOffsetGifs,
	setRatingTrendingGifs,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Trending);

Trending.propTypes = {
	trendingData: PropTypes.array.isRequired,
	dataTotalCount: PropTypes.oneOfType([
		PropTypes.number.isRequired,
		// PropTypes.
	]),
	error: PropTypes.bool.isRequired,
	fetchTrending: PropTypes.func.isRequired,
	// fetchedDataCount: PropTypes.number.isRequired,
	ratingGifs: PropTypes.string.isRequired,
	setRatingTrendingGifs: PropTypes.func.isRequired,
	setTrendingOffsetGifs: PropTypes.func.isRequired,
};
