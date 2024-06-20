import css from '../IntroSection/IntroSection.module.css'

export default function IntroSection() {
    return (
        <section className={css.introSection}>
            <h1 className={css.introTitle}>Lorem, ipsum dolor.</h1>
            <h3 className={css.introTitle}>Lorem ipsum dolor sit amet consectetur.</h3>
        </section>
    )
}