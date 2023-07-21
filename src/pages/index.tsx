import PortfolioWindow from "@/Components/PortfolioWindow";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import VerticalProgressBar from "@/Components/VerticalProgressBar";
import Year from "@/Components/Year";

export default function index() {
  const [scroll, setScroll] = useState(0)
  const [textOpacity, setTextOpacity] = useState(1)
  const [scrollPercentage, setScrollPercentage] = useState(0)


  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const currentScrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(currentScrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPercentage]);

  /* if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      let value = window.scrollY
      setScroll((value / 200))

      if (scroll >= 0) {
        setTextOpacity(1)
        if (scroll > 0.5) {
          setTextOpacity(0.8)
          if (scroll > 1) {
            setTextOpacity(0.6)
            if (scroll > 1.5) {
              setTextOpacity(0.4)
              if (scroll > 2) {
                setTextOpacity(0.3)
                if (scroll > 2.5) {
                  setTextOpacity(0.2)
                  if (scroll > 3) {
                    setTextOpacity(0.1)
                    if (scroll > 3.5) {
                      setTextOpacity(0.06)
                      if (scroll > 4) {
                        setTextOpacity(0.04)
                        if (scroll > 4.5) {
                          setTextOpacity(0.02)
                          if (scroll > 5) {
                            setTextOpacity(0)
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    })
  } */

  return (
    <Flex backgroundColor="black" w="100vw" h="1850vw" alignItems="center" justifyContent="center" overflow="hidden" >
      {/* <Flex h="100vh" w="100vw" position="fixed" bgImage="/bg.jpg" zIndex={1} top={0} bgSize="cover" opacity={0.06} /> */}
      <PortfolioWindow delay={0} right={"40%"} top={"40%"} index={0} />
      <PortfolioWindow delay={5} right={"50%"} top={"52%"} index={1} />
      <PortfolioWindow delay={10} right={"50%"} top={"40%"} index={2} />
      <PortfolioWindow delay={15} right={"35%"} top={"52%"} index={4} />
      <PortfolioWindow delay={20} right={"40%"} top={"40%"} index={5} />
      <PortfolioWindow delay={25} right={"50%"} top={"52%"} index={6} />
      <PortfolioWindow delay={30} right={"50%"} top={"40%"} index={7} />
      <PortfolioWindow delay={35} right={"30%"} top={"40%"} index={8} />
      <PortfolioWindow delay={40} right={"40%"} top={"40%"} index={9} />
      <PortfolioWindow delay={45} right={"50%"} top={"52%"} index={10} />
      <PortfolioWindow delay={50} right={"50%"} top={"40%"} index={11} />
      <PortfolioWindow delay={55} right={"30%"} top={"40%"} index={12} />
      <PortfolioWindow delay={60} right={"40%"} top={"52%"} index={13} />
      <PortfolioWindow delay={65} right={"50%"} top={"52%"} index={14} />
      <PortfolioWindow delay={70} right={"50%"} top={"40%"} index={15} />
      <PortfolioWindow delay={75} right={"30%"} top={"40%"} index={16} />
      <PortfolioWindow delay={80} right={"50%"} top={"40%"} index={17} />
      <PortfolioWindow delay={85} right={"35%"} top={"52%"} index={18} />

      <Flex direction="row" alignItems="center" justifyContent="space-between" h="100vh" w="100%" top={0} position="fixed" pt="80px" px="150px" zIndex={20}>
        <VerticalProgressBar />
      </Flex>

      <Flex alignItems="center" justifyContent="center" h="100vh" w="100vw" top={0} position="fixed" zIndex={20}>
        <Flex direction="row" alignItems="center" h="100vh" w="100vw" top={0} position="fixed" pt="80px" zIndex={20}>
          <Year year={"1998"} start={5} end={9.9} scroll={scrollPercentage} />
          <Year year={"2002"} start={10} end={14.9} scroll={scrollPercentage} />
          <Year year={"2004"} start={15} end={19.9} scroll={scrollPercentage} />
          <Year year={"2005"} start={20} end={24.9} scroll={scrollPercentage} />
          <Year year={"2007"} start={25} end={29.9} scroll={scrollPercentage} />
          <Year year={"2008"} start={30} end={34.9} scroll={scrollPercentage} />
          <Year year={"2009"} start={35} end={39.9} scroll={scrollPercentage} />
          <Year year={"2010"} start={40} end={44.9} scroll={scrollPercentage} />
          <Year year={"2012"} start={45} end={49.9} scroll={scrollPercentage} />
          <Year year={"2014"} start={50} end={54.9} scroll={scrollPercentage} />
          <Year year={"2015"} start={55} end={59.9} scroll={scrollPercentage} />
          <Year year={"2016"} start={60} end={64.9} scroll={scrollPercentage} />
          <Year year={"2017"} start={65} end={69.9} scroll={scrollPercentage} />
          <Year year={"2018"} start={70} end={74.9} scroll={scrollPercentage} />
          <Year year={"2019"} start={75} end={79.9} scroll={scrollPercentage} />
          <Year year={"2020"} start={80} end={84.9} scroll={scrollPercentage} />
          <Year year={"2021"} start={85} end={89.9} scroll={scrollPercentage} />
          <Year year={"2022"} start={90} end={94.9} scroll={scrollPercentage} />
        </Flex>
      </Flex>
      {/* <Flex direction="column" alignItems="center" justifyContent="center" h="100vh" w="40vw" top="0px" position="fixed" bgImage="/background.png" fontSize="50px" color="white" opacity={textOpacity} zIndex={50}>
        <Flex direction="column" alignItems="center" mt={"55px"} lineHeight={"55px"} >
          <Text >Faça scroll para</Text>
          <Text>conhecer os nossos</Text>
          <Text>projetos</Text>
        </Flex>
      </Flex> */}
    </Flex >

  );
}
