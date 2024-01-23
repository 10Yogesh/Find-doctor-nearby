import { Button } from "@chakra-ui/react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styles from "./HomePage.module.css";
const list = ["Dentist", "Cardiologist", "Dermatologist", "Family Physicians"];

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.searchWrapper}>
        <div className={styles.firstWrapper}>
          <div className={styles.topSearch}>
            <div className={styles.searchSection}>
              <img src="./images/search.png" alt="search" />
              <input
                type="text"
                placeholder="Search by Doctors"
                className={styles.inputText}
              />
            </div>
            <div className={styles.locationSection}>
              <img src="./images/Location.png" alt="location" />
              <input
                type="text"
                placeholder="Search by Location"
                className={styles.inputText}
              />
            </div>
            <div className={styles.wsearchSection}>
              <img src="./images/wsearch.png" alt="search" />
            </div>
          </div>
          <div className={styles.sectionText}>
            <p>You may be looking for</p>
          </div>
          <div className={styles.bottomSearch}>
            {list.map((item, index) => (
              <div className={styles.departList} key={index}>
                {item}
              </div>
            ))}
            <Button bg="#08337DBA" color="white">
              More
            </Button>
          </div>
        </div>
        <div className={styles.secondWrapper}>
          <img src="./images/ellipse.png" alt="ellipse" />
          <div className={styles.secondImgWrapper}>
            <img src="./images/doctor.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
