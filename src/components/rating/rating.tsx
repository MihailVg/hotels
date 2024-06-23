export default function Rating() {
  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{ width: '80%' }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">4</span>
    </div>
  );
}
