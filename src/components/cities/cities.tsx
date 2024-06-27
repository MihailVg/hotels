import { CITIES_ARRAY } from '../../const';

export default function Cities() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_ARRAY.map((item) => (
            <li key={item} className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
