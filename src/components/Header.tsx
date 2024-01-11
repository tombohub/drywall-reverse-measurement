import { Box, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box as="header" textAlign={"center"}>
        <Heading size={"xl"}>Measurements from the other side</Heading>
      </Box>
    </>
  );
}
