import Button from "../Button/Button";
import css from '../TabsSections/TabsSections'

export default function TabsSections({ active, onChange }) {
  return (
    <section className={css.container}>
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Главная
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => onChange("feedback")}
      >
        Feedback
      </Button>
    </section>
  );
}
