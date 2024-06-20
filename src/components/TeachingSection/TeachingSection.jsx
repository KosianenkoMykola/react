import WayToTeach from "../WayToTeach/WayToTeach.jsx";
import { ways } from "/data.js";
import css from '../TeachingSection/TeachingSection'

export default function TeachingSection() {
  return (
    <section className={css.container}>
      <h3>Lorem ipsum list</h3>
      <ol>
        {ways.map((way) => (
          <WayToTeach {...way} key={way.title} />
        ))}
      </ol>
    </section>
  );
}
