import {
  Image,
  Button,
  SimpleGrid,
  Heading,
  Box,
  Input,
  Center,
  Text,
  Grid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styles from "./HomePage.module.css";
import Footer from "../../components/footer/Footer";

const list = ["Dentist", "Cardiologist", "Dermatologist", "Family Physicians"];

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* search section */}
      <Box className={styles.searchWrapper}>
        <Box className={styles.firstWrapper}>
          <Box className={styles.topSearch}>
            <Box className={styles.searchSection}>
              <Image src="./images/search.png" alt="search" />
              <Input
                type="text"
                placeholder="Search by Doctors"
                className={styles.inputText}
              />
            </Box>
            <Box className={styles.locationSection}>
              <Image src="./images/Location.png" alt="location" />
              <Input
                type="text"
                placeholder="Search by Location"
                className={styles.inputText}
              />
            </Box>
            <Box className={styles.wsearchSection}>
              <Image src="./images/wsearch.png" alt="search" />
            </Box>
          </Box>
          <Box className={styles.sectionText}>
            <Text>You may be looking for</Text>
          </Box>
          <Box className={styles.bottomSearch}>
            {list.map((item) => (
              <Button>{item}</Button>
            ))}
            <Button bg="#08337DBA" color="white">
              More
            </Button>
          </Box>
        </Box>
        <Box className={styles.secondWrapper}>
          <Image src="./images/ellipse.png" alt="ellipse" />
          <Box className={styles.secondImgWrapper}>
            <Image src="./images/doctor.png" alt="image" />
          </Box>
        </Box>
      </Box>

      {/* second section */}
      <Box className={styles.secondSection}>
        <Box className={styles.secondSecWrapper}>
          <Box className={styles.firstWrapper}>
            <Heading>Find the right Doctor Right At Your Fingertips </Heading>

            <Box className={styles.searchHospital}>
              <Image
                src="./images/search.png"
                alt="image"
                className={styles.inputImg}
              />
              <Input
                type="text"
                placeholder="Search Nearest Hospital"
                className={styles.searchBox}
              />
            </Box>
            <Box className={styles.sugestions}>
              <UnorderedList>
                <ListItem>We are here to hear and heal your health</ListItem>
                <ListItem>It is not about the money</ListItem>
                <ListItem>More than treating patients</ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <Box className={styles.rightHeroWrapper}>
            <Image
              src="./images/Rectangle 22.png"
              alt="Rectangle"
              className={styles.rectangle22}
            />
            <Box className={styles.rightHeroImage}>
              <Image
                src="./images/Rectangle 23.png"
                alt="Rectangle"
                className={styles.rectangle23}
              />
            </Box>

            <Box className={styles.rightFrontImage}>
              <Image
                src="./images/image 1.png"
                alt="Rectangle"
                className={styles.image1}
              />
            </Box>
            <Text w="500px" p={14}>
              Top rated primary care physicians
            </Text>
          </Box>
        </Box>
      </Box>

      {/* specialist section */}
      <Center>
        <Text fontSize="3xl" fontWeight="700" py="20px">
          Search by Specialist
        </Text>
      </Center>

      <Box className={styles.specialContainer}>
        <Grid className={styles.specialWrapper}>
          <Box className={styles.specialList}>
            <SimpleGrid minChildWidth="120px" spacing="40px">
              <Box className={styles.lists}>
                <Image
                  src="./images/Rectangle 17.png"
                  alt="specialist"
                  className={styles.imageGroup}
                />
                <Text fontSize="2xl" fontWeight={600}>
                  Dr: Name Name
                </Text>
                <Text>Doctor degree name</Text>
              </Box>

              <Box className={styles.lists}>
                <Image
                  src="./images/Rectangle 18.png"
                  alt="specialist"
                  className={styles.imageGroup}
                />
                <Text fontSize="2xl" fontWeight={600}>
                  Dr: Name Name
                </Text>
                <Text>Doctor degree name</Text>
              </Box>

              <Box className={styles.lists}>
                <Image
                  src="./images/Rectangle 19.png"
                  alt="specialist"
                  className={styles.imageGroup}
                />
                <Text fontSize="2xl" fontWeight={600}>
                  Dr: Name Name
                </Text>
                <Text>Doctor degree name</Text>
              </Box>

              <Box className={styles.lists}>
                <Image
                  src="./images/Rectangle 20.png"
                  alt="specialist"
                  className={styles.imageGroup}
                />
                <Text fontSize="2xl" fontWeight={600}>
                  Dr: Name Name
                </Text>
                <Text>Doctor degree name</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Grid>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
