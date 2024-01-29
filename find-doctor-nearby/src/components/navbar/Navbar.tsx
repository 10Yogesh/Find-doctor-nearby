import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
const menus = ["Home", "Doctors", "FAQ", "About", "Contact"];

const Navbar = () => {
  return (
    <Box bg="#D9D9D9" className={styles.navbarWrapper}>
      <Box className={styles.innernavbarWrapper}>
        <Box className={styles.navList}>
          <Box className={styles.hamburgerMenu}>
            <i className="fa-solid fa-bars"></i>
          </Box>
          {menus.map((menu, index) => (
            <Box key={index} className={styles.menuItem}>
              {<span>{menu}</span>}
            </Box>
          ))}
          <Box className={styles.navBtn}>
            <ButtonGroup gap="4">
              <Button bg="black" color="white">
                Login
              </Button>
              <Button bg="#004F95" color="white">
                Sign up
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
