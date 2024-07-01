import classNames from 'classnames';
import { CITIES_ARRAY } from '../../const';
import cls from './location-tabs.module.scss';

export default function LocationsTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_ARRAY.map((item, index) => (
            <li key={item} className="locations__item">
              <button
                className={classNames(
                  `locations__item-link ${cls.button} tabs__item`,
                  {
                    'tabs__item--active': index === 3,
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
