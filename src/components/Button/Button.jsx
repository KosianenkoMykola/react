import css from "../Button/Button.module.css";

export default function Button({ children, isActive, ...props }) {
  return (
    <button
      {...props}
      className={isActive ? `${css.button} ${css.active}` : css.button}
    >
      {children}
    </button>
  );
}
