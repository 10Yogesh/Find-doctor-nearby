import styles from "./Header.module.css";
import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box className={styles.topContainer}>
      <Heading className={styles.title}>Find Doctors Near By</Heading>
    </Box>
  );
};

export default Header;
