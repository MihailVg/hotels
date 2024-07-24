import classNames from 'classnames';
import { CITIES_ARRAY } from '../../const';
import cls from './location-tabs.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks/redux-hooks';
import { changeCity, changeSort } from '../../store/action';

export default function LocationsTabs() {
  const activeCity = useAppSelector((state) => state.currentCity);
  const dispatch = useAppDispatch();
  const sortingType = useAppSelector((state) => state.sorting);

  const clickHandler = (index: number) => {
    dispatch(changeCity(index));
    dispatch(changeSort(sortingType));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_ARRAY.map((item, index) => (
            <li key={item} className="locations__item" onClick={() => clickHandler(index)}>
              <button
                className={classNames(
                  `locations__item-link ${cls.button} tabs__item`,
                  {
                    'tabs__item--active': item === activeCity,
                  }
                )}
              >
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
