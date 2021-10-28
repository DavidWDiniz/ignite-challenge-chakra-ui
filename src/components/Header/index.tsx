import {Flex, Icon, Image, Grid} from "@chakra-ui/react";
import {FiChevronLeft} from "react-icons/fi";
import Link from "next/link";

interface HeaderProps {
  isHomepage?: boolean
}

export function Header({isHomepage = false}: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1440}
      h={["12", "24"]}
      px="6"
    >
      <Grid
        mx="auto"
        w="100%"
        h="100%"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {!isHomepage && (
          <Link href="/">
            <a>
              <Icon
                fontSize={[20, 40]}
                as={FiChevronLeft}
              />
            </a>
          </Link>
        )}
        <Image
          justifySelf="center"
          w={["82px", "185px"]}
          src="/images/Logo.svg"
          alt="World trip logo"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}
