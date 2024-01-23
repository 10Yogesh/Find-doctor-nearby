import { Button, ButtonGroup } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
const menus = ["Home", "Doctors", "FAQ", "About", "Contact"];

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.innernavbarWrapper}>
        <div className={styles.navList}>
          <div className={styles.hamburgerMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
          {menus.map((menu, index) => (
            <div key={index} className={styles.menuItem}>
              {<span>{menu}</span>}
            </div>
          ))}
          <div className={styles.navBtn}>
            <ButtonGroup gap="4">
              <Button bg="black" color="white">
                Login
              </Button>
              <Button bg="#004F95" color="white">
                Sign up
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
