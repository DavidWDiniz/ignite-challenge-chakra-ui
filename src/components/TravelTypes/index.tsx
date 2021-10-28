import {Grid, GridItem} from "@chakra-ui/layout";
import {TravelType} from "./TravelType";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w={["275px", "100%"]}
      maxW="1440px"
      mt={["9", "32"]}
      mx="auto"
      gap={[1, 5]}
    >
      <GridItem>
        <TravelType
          icon="cocktail"
          text="vida noturna"
          justify={["left", "center"]}
        />
      </GridItem>
      <GridItem>
        <TravelType
          icon="surf"
          text="praia"
          justify={["right", "center"]}
        />
      </GridItem>
      <GridItem>
        <TravelType
          icon="building"
          text="moderno"
          justify={["left", "center"]}
        />
      </GridItem>
      <GridItem>
        <TravelType
          icon="museum"
          text="clássico"
          justify={["right", "center"]}
        />
      </GridItem>
      <GridItem
        colSpan={[2, 2, 2, 1]}
      >
        <TravelType
          icon="earth"
          text="e mais..."
          justify="center"
        />
      </GridItem>
    </Grid>
  )
}
