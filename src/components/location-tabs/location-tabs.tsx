import classNames from 'classnames';
import { CITIES_ARRAY } from '../../const';
import cls from './location-tabs.module.scss';
import { CityNamesType } from '../../types/city-names.type';

type LocationsTabsProps = {
  activeCity: CityNamesType;
  onActiveCity: (city: CityNamesType) => void;
};

export default function LocationsTabs({
  activeCity,
  onActiveCity,
}: LocationsTabsProps) {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_ARRAY.map((item) => (
            <li
              key={item}
              className="locations__item"
            >
              <button
                className={classNames(
                  `locations__item-link ${cls.button} tabs__item`,
                  {
                    'tabs__item--active': item === activeCity,
                  }
                )}
                onClick={() => onActiveCity(item)}
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
