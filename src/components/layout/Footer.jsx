import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";


export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW='1400px'
        py={4}
        direction={{base: "column", md: "row"}}
        spacing={4}
        justify={{base: "center", md: "space-between"}}
        align={{base: "center", md: "center"}}
      >
        <Text>© 2024 Esha Gunjekar.</Text>
        <Stack direction={"row"} spacing={6}>
          <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={12}
            h={12}
            cursor={"pointer"}
            as={"a"}
            href={"https://github.com/eshagunjekar"}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
              bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
          >
            <FaGithub />
          </chakra.button>
          <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={12}
            h={12}
            cursor={"pointer"}
            as={"a"}
            href={"https://linkedin.com/eshagunjekar"}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
              bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
          >
            <FaLinkedinIn />
           
          </chakra.button>
        </Stack>
      </Container>
    </Box>
  );
}
