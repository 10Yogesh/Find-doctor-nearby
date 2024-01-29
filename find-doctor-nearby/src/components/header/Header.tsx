import styles from "./Header.module.css";
import { Heading, Box, Container } from "@chakra-ui/react";
const Header = () => {
  return (
    <Box p={5} className={styles.hinnerWrapper}>
      <Container borderRadius="10px" p={5} maxW="715px" bg="#528BBF">
        <Heading size="3xl" noOfLines={1}>
          Find Doctors Near By
        </Heading>
      </Container>
    </Box>
  );
};

export default Header;
