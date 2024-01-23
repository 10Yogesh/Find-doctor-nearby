import styles from "./Header.module.css";
import { Heading } from "@chakra-ui/react";
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.hinnerWrapper}>
        <Heading bg="#528BBF" className={styles.topHeader}>
          Find Doctors Near By
        </Heading>
      </div>
    </div>
  );
};

export default Header;
