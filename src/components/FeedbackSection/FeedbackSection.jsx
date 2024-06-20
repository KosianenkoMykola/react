import { useState } from "react";
import Button from "../Button/Button.jsx";
import css from "../FeedbackSection/FeedbackSection.module.css";

function StateVsRef() {
const [value, setValue] = useState('')

  return (
    <div>
      <h3>Input Value: {value}</h3>
      <input className={css.control} type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError( event.target.value.trim().length === 0 )
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  return (
    <section className={css.container}>
      <h3>Feedback</h3>

      <form>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          className={css.control}
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label id="reason">Your problem</label>
        <select
          id="reason"
          className={css.control}
          value={form.reason}
          onChange={(event) => setForm(prev => ({ ... prev, reason: event.target.value}))}
        >
          <option value="error">Error</option>
          <option value="help">Help</option>
          <option value="message">Message</option>
        </select>
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Send
        </Button>
        <StateVsRef />
      </form>
    </section>
  );
}
