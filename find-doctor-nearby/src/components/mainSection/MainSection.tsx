import styles from "./MainSection.module.css";
const list = ["Dentist", "Cardiologist", "Dematologists", "Family Physicians"];
const Herosection = () => {
  return (
    <div className={styles.mainSection}>
      <div className={styles.fmainSection}>
        <div className={styles.fullSection}>
          <div className={styles.sectionDoctor}>
            <img src="../images/search.png" alt="Search" />
            <input
              type="text"
              className={styles.iDoctor}
              placeholder="Search by Doctors"
            />
          </div>
          <div className={styles.sectionLocation}>
            <img src="../images/Location.png" alt="Location" />
            <input
              type="text"
              className={styles.iLocation}
              placeholder="Search by Location"
            />
          </div>
          <div className={styles.searchBtn}>
            <img src="../images/wsearch.png" alt="Search" />
          </div>
        </div>
        <div className={styles.sectionText}>
          <p>You may be looking for</p>
          <div className={styles.sectionList}>
            {list.map((item, index) => (
              <div className={styles.departmentList} key={index}>
                {item}
              </div>
            ))}
            <button>More</button>
          </div>
        </div>
      </div>

      <div className={`${styles.smainSection} ${styles.firstImageHero}`}>
        <div className={styles.firstImageHero}>
          <img src="../images/ellipse.png" alt="Ellipse" />
          <div className={styles.secondImageHero}></div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
