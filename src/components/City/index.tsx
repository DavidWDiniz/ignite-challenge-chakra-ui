import {Grid} from "@chakra-ui/react";
import {Card} from "./Card";

type ContinentData = {
  cities: {
    name: string,
    country: string,
    img: string
    flag: string
  }[]
}

interface CityProps {
  continent: ContinentData
}

export function City({continent}: CityProps) {
  return (
    <Grid
      my="8"
      templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
      gap={['20px', '45px']}
      alignItems="center"
      justifyContent="center"
      px={["4", "4", "4", "36"]}
    >
      {continent.cities?.map(data => {
        return (
          <Card
            name={data.name}
            img={data.img}
            flag={data.flag}
            country={data.country}
            key={data.name}
          />
        )
      })}
    </Grid>
  )
}
