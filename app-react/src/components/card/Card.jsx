import "./card.scss";
export function Card(props) {
  const { image, title, description, url } = props;

  return (
    <div className="card">
      <figure className="card__figure">
        <img src={image} />
      </figure>
      <div className="card__text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
