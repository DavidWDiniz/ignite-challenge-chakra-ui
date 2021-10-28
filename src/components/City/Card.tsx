import {Box, HStack, Image} from "@chakra-ui/react";

interface CardProps {
  name: string
  country: string
  img: string
  flag: string
}

export function Card({name, country, img, flag}: CardProps) {
  return (
    <Box
      borderWidth="1px"
      borderColor="yellow.400"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        w="100%"
        h="175px"
        src={img}
        alt={name}
      />
      <HStack
        p="4"
        justify="space-between"
      >
        <Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
          >
            {name}
          </Box>

          <Box>
            {country}
          </Box>
        </Box>
        <Image
          boxSize="10"
          borderRadius="full"
          src={flag}
          alt={name}
        />
      </HStack>
    </Box>
  )
}
