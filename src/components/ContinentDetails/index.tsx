import {Flex, HStack, Text} from "@chakra-ui/react";
import {Detail} from "./Detail";

interface ContinentDetailsProps {
  continent: {
    info: string
    countries: number
    languages: number
    quantity: number
  }
}

export function ContinentDetails({continent}: ContinentDetailsProps) {
  return (
    <Flex
      maxW={1440}
      px={["4", "4", "4", "36"]}
      py={["6"]}
      flexDir={["column", "column", "column", "row", "row"]}
    >
      <Text
        textAlign="justify"
        fontWeight="400"
        fontSize={["md", "xl"]}
      >
        {continent.info}
      </Text>
      <HStack
        align="center"
        justify="space-between"
        minW={["0", "0", "400px"]}
        pt={["6", "6", "6", "0"]}
        mx={["0", "16"]}
      >
        <Detail
          name="países"
          value={continent.countries}
        />
        <Detail
          name="linguas"
          value={continent.languages}
        />
        <Detail
          name="cidades +100"
          value={continent.quantity}
          icon
        />
      </HStack>
    </Flex>
  )
}
