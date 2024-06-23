import LocationItem from '../location-item/location-item';

export default function Tabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <LocationItem />
        </ul>
      </section>
    </div>
  );
}
