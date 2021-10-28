import {Flex, FlexProps, Image, Text, useBreakpointValue} from "@chakra-ui/react";

interface TravelTypeProps extends FlexProps {
  icon: string;
  text: string;
}

export function TravelType({icon, text, ...rest}: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex direction={["row", "column"]} align="center" {...rest}>
      {isMobile ? (
        <Image
          src={`/images/${icon}.svg`}
          alt={`${text} icon`}
          boxSize="85px"
          mb="6"
        />
      ) : (
        <Text
          color="yellow.400"
          fontSize="4xl"
          mr="2"
        >
          •
        </Text>)}
      <Text
        fontWeight="500"
        color="gray.900"
        fontSize={["md", "xl", "2xl"]}
      >
        {text}
      </Text>
    </Flex>
  )
}
