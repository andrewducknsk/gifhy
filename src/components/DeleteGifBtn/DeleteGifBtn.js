// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import {deleteGif} from '../../actions/index';
// Style
import './deleteGifBtn.scss';

class DeleteGifBtn extends PureComponent {
	onClickDeleteGif = () => {
		const {deleteGif, id} = this.props;

		deleteGif(id);
	};

	render() {
		const {showDeleteBtn} = this.props;

		return (
			<React.Fragment>
				{showDeleteBtn ? (
					<button className='delete-btn' onClick={this.onClickDeleteGif}>
						X
					</button>
				) : null}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispathToProps = {
	deleteGif,
};

export default connect(
	mapStateToProps,
	mapDispathToProps
)(DeleteGifBtn);

DeleteGifBtn.propTypes = {
	id: PropTypes.string.isRequired,
	showDeleteBtn: PropTypes.bool.isRequired,
	deleteGif: PropTypes.func.isRequired,
};
