import { useState } from "react";
import Button from "../Button/Button";
import { differences } from "../../../data.js";
import css from '../TubButtonSection/TubButtonSection.module.css'

export default function TubButtonSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section className={css.container}>
      <h3 className={css.title}>Section 2</h3>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        button1
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        button2
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        button3
      </Button>

      {contentType ? (
        <p>{differences[contentType]}</p>
      ) : (
        <p>Press the button</p>
      )}
    </section>
  );
}
