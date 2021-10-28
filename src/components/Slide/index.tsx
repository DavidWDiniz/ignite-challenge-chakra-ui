import {A11y, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Flex, Text, Heading} from "@chakra-ui/react";
import Link from "next/link";

type ContinentData = {
  id: number
  name: string
  description: string
  img: string
}[]

interface SlideProps {
  continents: ContinentData
}

export function Slide({continents}: SlideProps) {
  return (
    <Flex
      mx="auto"
      mb={["5", "10"]}
      maxW="1240px"
      w="100%"
      h={["250px", "450px"]}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
      >
        {continents.map(continent => {
          return (
            <SwiperSlide key={continent.id}>
              <Flex
                w="100%"
                h="100%"
                bgImage={continent.img}
                bgRepeat="no-repeat"
                bgSize="cover"
                align="center"
                justify="center"
                textAlign="center"
              >
                <Link href={`/continent/${continent.id}`}>
                  <a>
                    <Heading
                      fontSize={["3xl", "4xl", "5xl"]}
                      color="gray.50"
                      fontWeight="bold"
                    >
                      {continent.name}
                    </Heading>
                    <Text
                      fontWeight="bold"
                      color="gray.200"
                      fontSize={["0.8rem", "1xl", "2xl"]}
                      mt={["2", "4"]}
                    >
                      {continent.description}
                    </Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Flex>
  )
}
