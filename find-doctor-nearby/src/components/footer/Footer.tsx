import { Box, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box bg="#738CE2AD" p="50px">
      <Box>
        <Text fontSize="4xl" fontWeight="600" size="lg">
          About us:
        </Text>
        <Box fontSize="2xl" fontWeight="600" p="20px">
          <Text>email: youremail@gmail.com </Text>
          <Text py="15px">mobile: +91 98xxxxxx10</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
