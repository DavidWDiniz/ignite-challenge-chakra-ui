import {Header} from "../components/Header";
import {Banner} from "../components/Banner";
import {TravelTypes} from "../components/TravelTypes";
import {Box, Flex, Text} from "@chakra-ui/react";
import {Slide} from "../components/Slide";
import {GetStaticProps} from "next";
import api from "../services/api";
import Head from "next/head";

type ContinentData = {
  id: number
  name: string
  description: string
  img: string
}[]

interface HomeProps {
  continents: ContinentData
}

export default function Home({continents}: HomeProps) {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>
      <Flex
        direction="column"
        align="center"
      >
        <Header/>
        <Banner/>
        <TravelTypes/>
        <Box
          w={["60px", "90px"]}
          mx="auto" h="2px"
          bg="gray.900"
          my={["9", "20"]}
        />
        <Flex
          px="10"
          mb="12"
        >
          <Text
            fontWeight="500"
            fontSize={["lg", "3xl"]}
            textAlign="center"
          >
            Vamos nessa?<br/>
            Então escolha seu continente
          </Text>
        </Flex>
        <Slide
          continents={continents}
        />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await api.get("/continents").then(data => data.data)
  return {
    props: {continents}
  }
}
