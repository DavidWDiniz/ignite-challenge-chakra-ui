import {Flex, Text} from "@chakra-ui/react";
import {Header} from "../../components/Header";
import {BannerContinent} from "../../components/BannerContinent";
import {GetStaticProps} from "next";
import api from "../../services/api";
import Head from "next/head";
import {ContinentDetails} from "../../components/ContinentDetails";
import {City} from "../../components/City";


type ContinentData = {
  id: number
  name: string
  description: string
  img: string
  info: string
  countries: number
  languages: number
  quantity: number
  "cities": {
    name: string,
    country: string,
    img: string
    flag: string
  }[]
}

interface ContinentProps {
  continent: ContinentData
}

export default function Continent({continent}: ContinentProps) {
  return (
    <>
      <Head>
        <title>{`World Trip | ${continent.name}`}</title>
      </Head>
      <Flex
        direction="column"
        align="center"
      >
        <Header/>
        <BannerContinent
          name={continent.name}
          img={continent.img}
        />
        <ContinentDetails
          continent={continent}
        />
        <Text
          px={["4", "4", "4", "36"]}
          mb="8"
          fontSize="2xl"
          fontWeight="500"
        >
          Cidades +100
        </Text>
        <City
          continent={continent}
        />
      </Flex>
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {id} = context.params
  const continent = await api.get(`/continents/${id}`).then(data => data.data)

  return {
    props: {continent}
  }
}
