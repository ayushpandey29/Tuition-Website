import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  // Extract course ID from path if it contains course_content
  const getCourseDetailPath = () => {
    if (props.path && props.path.includes('course_content')) {
      const urlParams = new URLSearchParams(props.path.split('?')[1]);
      const courseId = urlParams.get('id');
      return `/course-detail?id=${courseId}`;
    }
    return props.path;
  };

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={getCourseDetailPath()}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Course Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {props.instructor && (
              <p className='cards__item__instructor'>By {props.instructor}</p>
            )}
            {props.rating && (
              <div className='cards__item__rating'>
                <span>⭐ {props.rating}</span>
                {props.students && <span>({props.students} students)</span>}
              </div>
            )}
            {props.price && (
              <div className='cards__item__price'>${props.price}</div>
            )}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;