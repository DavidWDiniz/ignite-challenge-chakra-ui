import {Flex, Image, Text, useBreakpointValue, VStack} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      bgImage="/images/Background.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h={["40", "80"]}
      mx="auto"
      px={["4", "8", "32"]}
      align="center"
      justify="space-between"
    >
      <VStack
        align="flex-start"
      >
        <Text
          fontSize={["xl", "3xl"]}
          fontWeight="500"
          color="gray.50"
        >
          5 Continentes,<br/>
          infinitas possibilidades.
        </Text>
        <Text
          fontSize={["sm", "lg"]}
          fontWeight="400"
          color="gray.200"
        >
          Chegou a hora de tirar do papel a viagem que {isWideVersion && <br/>} você sempre sonhou.
        </Text>
      </VStack>
      {isWideVersion && (
        <Image
          w={["300px", "300px", "300px", "430px"]}
          mt="20"
          src="/images/Airplane.svg"
          alt="Airplane"
        />
      )}
    </Flex>
  )
}
