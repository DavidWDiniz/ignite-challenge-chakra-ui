import {Icon, Text, VStack, Tooltip} from "@chakra-ui/react";
import {FiInfo} from "react-icons/fi";

interface DetailProps {
  name: string
  value: number
  icon?: boolean
}

export function Detail({name, value, icon = false}: DetailProps) {
  return (
    <VStack
      align="flex-start"
    >
      <Text
        fontSize="4xl"
        fontWeight="600"
        color="yellow.400"
      >
        {value}
      </Text>
      <Text
        fontSize="xl"
        fontWeight="500"
      >
        {name} {icon && (
          <Tooltip label="Principais cidades">
            <span><Icon as={FiInfo} color="gray.600" boxSize="3.5"/></span>
          </Tooltip>
      )}
      </Text>
    </VStack>
  )
}
