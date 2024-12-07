import { card, mentor } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Driving AI Innovation and <br className="sm:block hidden" /> Education Accessibility.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A PhD scholar and award-winning innovator excelling in AI, teaching, startups, and open-source. Passionate about ethical AI, mentorship, accessible education, and advancing AI-powered equitable learning worldwide.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={mentor} alt="billing" className="w-[100%] h-[100%]" />
      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
    </div>
  </section>
);

export default CardDeal;
