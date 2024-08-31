import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks/redux-hooks/redux-hooks';
import { SORT_ARRAY } from '../../const';
import classNames from 'classnames';
import { changeSortAction } from '../../store/action';

export default function Sorting() {
  const [isVisible, setVisible] = useState(false);
  const sortingType = useAppSelector((state) => state.sorting);
  const dispatch = useAppDispatch();
  const clickHandler = (item: string) => {
    dispatch(changeSortAction(item));
    setVisible(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setVisible(!isVisible)}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isVisible && (
        <ul className="places__options places__options--custom places__options--opened">
          {SORT_ARRAY.map((item) => (
            <li
              className={classNames('places__option', {
                'places__option--active': item === sortingType,
              })}
              tabIndex={0}
              key={item}
              onClick={() => clickHandler(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
