// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
// Actions
import {fetchSearch, setSearchPhrase} from '../../actions/index';
// Style
import './searchInput.scss';

const SearchIcon = props => (
	<span
		className='search-form__icon'
		style={{fontSize: `${props.fontSize}px`}}
		role='img'
		aria-label='serach'
	>
		&#128269;
	</span>
);

class SearchInput extends PureComponent {
	state = {
		searchPhrase: ``,
		search: false,
		inputWidth: ``,
		activeInput: ``,
	};

	static getDerivedStateFromProps(nextProps) {
		if (nextProps.fullWidth) {
			return {
				inputWidth: `search-form__input--full-width`,
			};
		} else {
			return {inputWidth: ``};
		}
	}

	onChangeSearch = e => {
		const {value} = e.target;
		const {setSearchPhrase} = this.props;

		this.setState({searchPhrase: value});

		setSearchPhrase(value);
	};

	onKeyDownSearch = e => {
		const {keyCode} = e;
		const {fetchSearch, setSearchPhrase} = this.props;
		const {searchPhrase, search} = this.state;
		const keyCodeEnter = 13;

		if (keyCode === keyCodeEnter) {
			setSearchPhrase(searchPhrase);
			fetchSearch();

			this.setState({search: true, searchPhrase: ``});
		}

		if (search) {
			this.setState({search: false});
		}
	};

	onClickSearchBtn = e => {
		const {fetchSearch} = this.props;
		const {searchPhrase} = this.state;

		e.preventDefault();

		if (searchPhrase !== ``) {
			fetchSearch();

			this.setState({searchPhrase: ``});

			if (window.location.pathname !== '/search') {
				this.setState({search: true, searchPhrase: ``});
			} else {
				this.setState({search: false});
			}
		}
	};

	onMouseOverForm = () => {
		this.setState({activeInput: `search-form__input--active`});
	};

	onMouseOutForm = () => {
		this.setState({activeInput: ``});
	};

	render() {
		const {searchPhrase, search, inputWidth, activeInput} = this.state;
		const {placeholder, showSearchBtn, showHeaderSearchBtn} = this.props;

		return (
			<React.Fragment>
				<div
					className='search-form'
					onMouseOver={this.onMouseOverForm}
					onMouseOut={this.onMouseOutForm}
				>
					{showHeaderSearchBtn ? (
						<button
							className='search-form__btn--header'
							onClick={this.onClickSearchBtn}
						>
							<SearchIcon fontSize='30' />
						</button>
					) : null}

					<input
						className={`search-form__input ${inputWidth} ${activeInput}`}
						type='text'
						value={searchPhrase}
						placeholder={placeholder}
						onChange={this.onChangeSearch}
						onKeyDown={this.onKeyDownSearch}
						onBlur={this.onBlurSearch}
					/>
					{showSearchBtn ? (
						<button
							className='search-form__btn--main'
							onClick={this.onClickSearchBtn}
						>
							<SearchIcon fontSize='24' />
						</button>
					) : null}
				</div>
				{search ? <Redirect to='/search' /> : null}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	fetchSearch,
	setSearchPhrase,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchInput);

SearchInput.propTypes = {
	fetchSearch: PropTypes.func.isRequired,
	fullWidth: PropTypes.bool.isRequired,
	placeholder: PropTypes.string,
	setSearchPhrase: PropTypes.func.isRequired,
	showHeaderSearchBtn: PropTypes.bool,
	showSearchBtn: PropTypes.bool,
};
