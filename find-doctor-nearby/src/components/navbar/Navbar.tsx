import styles from "./Navbar.module.css";
import Herosection from "../mainSection/MainSection";
const menus = [
  {
    name: "Home",
    label: "/home",
  },
  {
    name: "Doctors",
    label: "/doctors",
  },
  {
    name: "FAQ",
    label: "/faq",
  },
  {
    name: "About",
    label: "/about",
  },
  {
    name: "Contact",
    label: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.navList}>
          {menus.map((menu, index) => (
            <div key={index} className={styles.menuItem}>
              {<span>{menu.name}</span>}
            </div>
          ))}
          <div>
            <button className={styles.loginBtn}>Login</button>
            <button className={styles.signupBtn}>Signup</button>
          </div>
        </div>
        <Herosection />
      </div>
    </>
  );
};

export default Navbar;
