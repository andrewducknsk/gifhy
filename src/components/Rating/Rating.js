// Lib
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// Style
import './rating.scss';

class Rating extends Component {
	onChangeRating = e => {
		const {value} = e.target;
		const {setRating} = this.props;

		setRating(value);
	};

	render() {
		return (
			<div className='rating'>
				<p className='rating__text'>Rating gif: </p>
				<select
					className='rating__field'
					name='rating'
					onChange={this.onChangeRating}
				>
					<option value='' defaultValue />
					<option value='y'>Y</option>
					<option value='g'>G - General audiences</option>
					<option value='pg'>PG - Parental guidance suggested</option>
					<option value='pg-13'>PG-13 - Parents strongly cautioned </option>
					<option value='r'>R - Restricted</option>
				</select>
			</div>
		);
	}
}

export default Rating;

Rating.propTypes = {
	setRating: PropTypes.func.isRequired,
};
