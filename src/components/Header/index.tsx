import {Flex, Image} from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1440}
      h={["12", "24"]}
      mx="auto"
      px="6"
      align="center"
      justify="center"
    >
      <Image
        w={["82px", "185px"]}
        src="/images/Logo.svg"
        alt="World trip logo"
      />
    </Flex>
  )
}
