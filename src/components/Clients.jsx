import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 py-20`}>
    <div className="overflow-hidden w-full">
      <div
        className="flex animate-marquee"
        style={{ animationDuration: "20s" }} // Adjust the speed as needed
      >
        {/* Repeat the clients array twice to create a seamless scrolling effect */}
        {[...clients, ...clients].map((client) => (
          <div
            key={client.id}
            className="flex-shrink-0 m-5"
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="w-[100px] sm:w-[192px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;



// import { clients } from "../constants";
// import styles from "../style";

// const Clients = () => (
//   <section className={`${styles.flexCenter} my-4 py-20`}>
//     <div className={`${styles.flexCenter} flex-wrap w-full`}>
//       {clients.map((client) => (
//         <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
//           <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Clients;
