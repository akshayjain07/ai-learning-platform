import styles from "./style";
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Feedbacks, Contact} from "./components";
// import Feedbacks from "./components/Feedbacks";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Contact} from "./components";
// import Feedbacks from "./components/Feedbacks";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Billing />
        <CardDeal />
        <Business />
        <Clients />
        <Testimonials />
        {/* <Feedbacks/> */}
        {/* <CTA /> */}
        <Contact/>
        <Footer /> 
      </div>
    </div>
  </div>
);

export default App;
