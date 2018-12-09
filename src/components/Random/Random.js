// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import {
	fetchRandom,
	setRatingRandomGif,
	deleteAllGif,
} from '../../actions/index';
// Reducers
import {
	getRandomIsFetching,
	getRandomFail,
	getRandomData,
} from '../../reducers';
// Components
import Rating from '../Rating/Rating';
import GifContent from '../GifContent/GifContent';
// Style
import './random.scss';

class Random extends PureComponent {
	onClickGetMoreBtn = () => {
		const {fetchRandom} = this.props;

		fetchRandom();
	};

	onClickDeleteAllBtn = () => {
		const {deleteAllGif} = this.props;

		deleteAllGif();
	};

	render() {
		const {isFetching, error, randomData, setRatingRandomGif} = this.props;

		return (
			<section className='random'>
				<h2 className='random__title'>Random Gif's</h2>
				<Rating setRating={setRatingRandomGif} />
				<button className='random__btn' onClick={this.onClickGetMoreBtn}>
					Get Gif
				</button>
				<button className='random__btn' onClick={this.onClickDeleteAllBtn}>
					Delete all
				</button>
				{randomData.length === 0 ? (
					<p className='random__warning'>
						Please select a rating and click on the button (;
					</p>
				) : (
					<GifContent
						isFetching={isFetching}
						error={error}
						data={randomData}
						paginate={false}
						showDeleteBtn={true}
					/>
				)}
			</section>
		);
	}
}

const mapStateToProps = state => ({
	isFetching: getRandomIsFetching(state),
	error: getRandomFail(state),
	randomData: getRandomData(state),
});

const mapDispatchToProps = {
	fetchRandom,
	setRatingRandomGif,
	deleteAllGif,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Random);

Random.propTypes = {
	randomData: PropTypes.array.isRequired,
	deleteAllGif: PropTypes.func.isRequired,
	fetchRandom: PropTypes.func.isRequired,
	setRatingRandomGif: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
};
