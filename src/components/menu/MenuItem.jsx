export default function MenuItem({ dish }) {
  let { image, name, description } = dish;
  return (
    <article className="menu-item">
      <img alt={name + " dish"} src={image} className="image" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <i>{Math.floor(Math.random() * 100)}</i>
      </div>
    </article>
  );
}
