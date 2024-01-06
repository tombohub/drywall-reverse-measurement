import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box as="header" textAlign={"center"}>
        <Heading size={"xl"}>Drywall Reverse Measurement</Heading>
        <Text>
          Given is measurement along the width of 48" sheet. Guess the reverse
          measurement. Example: regular measurement is 28", reverse measurement
          is 20"
        </Text>
      </Box>
    </>
  );
}
