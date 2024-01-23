import { Image, Button, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styles from "./HomePage.module.css";

const list = ["Dentist", "Cardiologist", "Dermatologist", "Family Physicians"];

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* search section */}
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

      {/* second section */}
      <div className={styles.secondSection}>
        <div className={styles.secondSecWrapper}>
          <div className={styles.firstWrapper}>
            <h2>Find the right Doctor Right At Your Fingertips </h2>

            <div className={styles.searchHospital}>
              <img
                src="./images/search.png"
                alt="image"
                className={styles.inputImg}
              />
              <input
                type="text"
                placeholder="Search Nearest Hospital"
                className={styles.searchBox}
              />
            </div>
            <div className={styles.sugestions}>
              <ul>
                <li>We are here to hear and heal your health</li>
                <li>It is not about the money</li>
                <li>More than treating patients</li>
              </ul>
            </div>
          </div>
          <div className={styles.secondWrapper}>
            <div className={styles.rightImageContainer}>
              <img
                src="./images/Rectangle 22.png"
                alt="Rectangle"
                className={styles.imageLayer0}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className={styles.imageCaption}>
          Top rated primary care physicians
        </h3>
      </div>
      {/* specialist section */}
      <div className={styles.specialHeader}>
        <h3>Search by Specialist</h3>
      </div>

      <div className={styles.specialContainer}>
        <div className={styles.specialWrapper}>
          <div className={styles.specialList}>
            <SimpleGrid minChildWidth="120px" spacing="40px">
              <div className={styles.lists}>
                <Image
                  src="./images/Rectangle 17.png"
                  alt="specialist"
                  className={styles.imageGroup}
                />
                <h4>Dr: Name Name</h4>
                <p>Doctor degree name</p>
              </div>

              <div className={styles.lists}>
                <Image
                  src="./images/Rectangle 18.png"
                  alt="specialist"
                  className={styles.imageGroup}
                />
                <h4>Dr: Name Name</h4>
                <p>Doctor degree name</p>
              </div>

              <div className={styles.lists}>
                <Image
                  src="./images/Rectangle 19.png"
                  alt="specialist"
                  className={styles.imageGroup}
                />
                <h4>Dr: Name Name</h4>
                <p>Doctor degree name</p>
              </div>

              <div className={styles.lists}>
                <Image
                  src="./images/Rectangle 20.png"
                  alt="specialist"
                  className={styles.imageGroup}
                />
                <h4>Dr: Name Name</h4>
                <p>Doctor degree name</p>
              </div>
            </SimpleGrid>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.footerWrapper}>
          <Heading size="2xl">About us:</Heading>
          <div className={styles.footerInfo}>
            <Text fontSize="md" as="b">
              email: youremail@gmail.com
            </Text>
            <Text fontSize="md" as="b">
              mobile: +91 98xxxxxxxx10
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
