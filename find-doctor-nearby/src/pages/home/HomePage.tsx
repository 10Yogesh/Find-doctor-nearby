import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styles from "./HomePage.module.css";
const list = ["Dentist", "Cardiologist", "Dermatologist", "Family Physicians"];
const statements = [
  "We are here to hear and heal your health problems",
  "It is not only about the money",
  "More than just treating patients",
];
const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.firstSection}>
        <div className={styles.fullFirstSection}>
          <div className={styles.firstFirstSection}>
            <div className={styles.topfFirstSection}>
              <div className={styles.doctorSection}>
                <img src="./images/search.png" alt="Search" />
                <input type="text" placeholder="Search by Doctors" />
              </div>
              <div className={styles.locationSection}>
                <img src="./images/Location.png" alt="Location" />
                <input type="text" placeholder="Search by Location" />
              </div>
              <div className={styles.whiteSearch}>
                <img src="./images/wsearch.png" alt="wsearch" />
              </div>
            </div>
            <div className={styles.bottomsFirstSection}>
              <div className={styles.sectionText}>
                <p>You may be looking for</p>
              </div>

              <div className={styles.sectionList}>
                {list.map((item, index) => (
                  <div className={styles.departList} key={index}>
                    {item}
                  </div>
                ))}
                <button>More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondFirstSection}>
          <div className={styles.imgSection}>
            <img src="./images/ellipse.png" alt="" />
            <div className={styles.firstimgSection}>
              <img src="./images/doctor.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* info section */}
      <div className={styles.infoContainer}>
        <div className={styles.leftinfoContainer}>
          <h2>Find the right Doctor Right at your fingertips</h2>

          <div className={styles.leftInputSearch}>
            <img src="./images/psearch.png" alt="" />
            <div className={styles.inputWithImg}>
              <input type="text" placeholder="Search Nearest Hospital" />
              <img
                src="./images/psearch.png"
                alt=""
                className={styles.inputImg}
              />
            </div>
          </div>
          <div className={styles.statementContainer}>
            {statements.map((key, index) => (
              <div key={index} className={styles.unorderStatements}>
                <ul>
                  <li>{key}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightinfoContainer}>
          <div className={styles.rightImageContainer}>
            <img
              src="./images/Rectangle 22.png"
              alt=""
              className={styles.rectangle22}
            />
            <img
              src="./images/Rectangle 23.png"
              alt=""
              className={styles.rectangle23}
            />
            <img src="./images/image 1.png" alt="" className={styles.image1} />
          </div>
        </div>
      </div>
      <div className={styles.rightText}>
        <p>Top rated primary care physicians</p>
      </div>

      {/* Specialist section */}

      <div className={styles.specialistSection}>
        <h1>Search by Specialist</h1>
        <div className={styles.SpecialistList}>
          <div>
            <img src="./images/Rectangle 17.png" alt="imgone" />
            <caption>Dr:Name Name</caption>
            <p>Doctor Degree Name</p>
          </div>
          <div>
            <img src="./images/Rectangle 18.png" alt="imgtwo" />
            <caption>Dr:Name Name</caption>
            <p>Doctor Degree Name</p>
          </div>
          <div>
            <img src="./images/Rectangle 19.png" alt="imgthree" />
            <caption>Dr:Name Name</caption>
            <p>Doctor Degree Name</p>
          </div>
          <div>
            <img src="./images/Rectangle 20.png" alt="imgfour" />
            <caption>Dr:Name Name</caption>
            <p>Doctor Degree Name</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
