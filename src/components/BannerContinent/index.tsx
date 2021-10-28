import {Flex, Text} from "@chakra-ui/react";

interface BannerContinentProps {
  name: string;
  img: string;
}

export function BannerContinent({name, img}: BannerContinentProps) {
  return (
    <Flex
      bgImage={img}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h={["150px", "500px"]}
      mx="auto"
      px={["4", "8", "16"]}
      py={["0", "16"]}
      align={["center", "flex-end"]}
      justify={["center", "flex-start"]}
    >
      <Text
        fontSize={["3xl", "5xl"]}
        fontWeight="600"
        color="gray.50"
      >
        {name}
      </Text>
    </Flex>
  )
}
