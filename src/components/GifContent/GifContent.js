// Lib
import React, {PureComponent} from 'react';
import {BounceLoader} from 'react-spinners';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
// Components
import DeleteGifBtn from '../DeleteGifBtn/DeleteGifBtn';
// Style
import './gifContent.scss';

class GifContent extends PureComponent {
	render() {
		const {
			data,
			isFetching,
			error,
			paginate,
			showDeleteBtn,
			fetchedDataCount,
			dataTotalCount,
			onClickPaginatorBtn,
			selectedPage,
		} = this.props;

		let gifTemplate = data.map((el, it) => (
			<div key={it} className='gif-content__item'>
				<h4 className='gif-content__title'>{el.title}</h4>
				<DeleteGifBtn id={el.id} showDeleteBtn={showDeleteBtn} />
				<a href={el.url}>
					<img
						className='gif-content__img'
						src={el.images.fixed_height_downsampled.webp}
						alt={el.title}
					/>
				</a>
				<div className='gif-content__author'>
					Author:&nbsp;
					{el.user === undefined ? (
						<span className='gif-content__author-name'>unknown</span>
					) : (
						<a className='gif-content__author-link' href={el.user.profile_url}>
							{el.username}
						</a>
					)}
				</div>
			</div>
		));

		if (isFetching) {
			return (
				<section className='gif-content__preload'>
					<BounceLoader color='darkcyan' />
				</section>
			);
		} else if (error) {
			return <p>Произошла ошибка</p>;
		} else {
			return (
				<React.Fragment>
					<section className='gif-content'>{gifTemplate}</section>
					{paginate ? (
						<div className='paginate'>
							<ReactPaginate
								containerClassName='paginate__list'
								activeClassName='paginate__active'
								previousClassName='paginate__prev'
								nextClassName='paginate__next'
								disabledClassName='paginate__disabled'
								onPageChange={onClickPaginatorBtn}
								pageCount={dataTotalCount / fetchedDataCount}
								pageRangeDisplayed={2}
								marginPagesDisplayed={2}
								forcePage={selectedPage}
							/>
						</div>
					) : null}
				</React.Fragment>
			);
		}
	}
}

export default GifContent;

GifContent.propTypes = {
	data: PropTypes.array.isRequired,
	error: PropTypes.bool.isRequired,
	isFetching: PropTypes.bool.isRequired,
	paginate: PropTypes.bool.isRequired,
	showDeleteBtn: PropTypes.bool.isRequired,
	dataTotalCount: PropTypes.number,
	fetchedDataCount: PropTypes.number,
	onClickPaginatorBtn: PropTypes.func,
	selectedPage: PropTypes.number,
};
