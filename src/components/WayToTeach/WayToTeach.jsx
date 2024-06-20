import css from '../WayToTeach/WayToTeach'

export default function WayToTeach({ title, description }) {
  return (
    <li className={css.teachList}>
      <p>
        <strong>{title}</strong>
        {description}
      </p>
    </li>
  );
}