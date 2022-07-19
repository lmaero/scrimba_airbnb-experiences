import "./Card.css";

function Card(props) {
  const { openSpots, location, coverImg, stats, title, price } = props;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "Online";
  }

  return (
    <article className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img
        className="card__image"
        src={`/assets/images/${coverImg}`}
        alt={title}
      />

      <p className="card__review">
        {stats.rating}{" "}
        <span>
          ({stats.reviewCount}) • {location}
        </span>
      </p>
      <p>{title}</p>
      <p className="card__desc">
        <span>From ${price} </span>/ person
      </p>
    </article>
  );
}

export default Card;
