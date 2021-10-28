import {ChakraProvider} from "@chakra-ui/react";
import {AppProps} from "next/app";
import {theme} from "../styles/theme";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../styles/swiperStyles.css";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
