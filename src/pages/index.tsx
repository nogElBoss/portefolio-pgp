import PortfolioWindow from "@/Components/PortfolioWindow";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import VerticalProgressBar from "@/Components/VerticalProgressBar";
import Year from "@/Components/Year";

export default function index() {
  const [scroll, setScroll] = useState(0)
  const [textOpacity, setTextOpacity] = useState(1)

  if (typeof window !== "undefined") {
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
  }

  return (
    <Flex backgroundColor="black" w="100vw" h="2670vh" alignItems="center" justifyContent="center" overflow="hidden" >
      {/* <Flex h="100vh" w="100vw" position="fixed" bgImage="/bg.jpg" zIndex={1} top={0} bgSize="cover" opacity={0.06} /> */}
      <PortfolioWindow delay={0} right={"40%"} top={"40%"} index={0} />
      <PortfolioWindow delay={12} right={"50%"} top={"52%"} index={1} />
      <PortfolioWindow delay={24} right={"50%"} top={"40%"} index={2} />
      <PortfolioWindow delay={36} right={"35%"} top={"52%"} index={4} />
      <PortfolioWindow delay={48} right={"40%"} top={"40%"} index={5} />
      <PortfolioWindow delay={60} right={"50%"} top={"52%"} index={6} />
      <PortfolioWindow delay={72} right={"50%"} top={"40%"} index={7} />
      <PortfolioWindow delay={84} right={"30%"} top={"40%"} index={8} />
      <PortfolioWindow delay={96} right={"40%"} top={"40%"} index={9} />
      <PortfolioWindow delay={108} right={"50%"} top={"52%"} index={10} />
      <PortfolioWindow delay={120} right={"50%"} top={"40%"} index={11} />
      <PortfolioWindow delay={132} right={"30%"} top={"40%"} index={12} />
      <PortfolioWindow delay={144} right={"40%"} top={"52%"} index={13} />
      <PortfolioWindow delay={156} right={"50%"} top={"52%"} index={14} />
      <PortfolioWindow delay={168} right={"50%"} top={"40%"} index={15} />
      <PortfolioWindow delay={180} right={"30%"} top={"40%"} index={16} />
      <PortfolioWindow delay={192} right={"50%"} top={"40%"} index={17} />
      <PortfolioWindow delay={204} right={"35%"} top={"52%"} index={18} />

      <Flex direction="row" alignItems="center" justifyContent="space-between" h="100vh" w="100vw" top={0} position="fixed" pt="80px" px="150px" zIndex={20}>
        <VerticalProgressBar />

        <Year year={"1998"} start={7.4} end={13.3} scroll={scroll} />
        <Year year={"2002"} start={13.4} end={19.3} scroll={scroll} />
        <Year year={"2004"} start={19.4} end={25.3} scroll={scroll} />
        <Year year={"2005"} start={25.4} end={31.3} scroll={scroll} />
        <Year year={"2007"} start={31.4} end={37.3} scroll={scroll} />
        <Year year={"2008"} start={37.4} end={43.3} scroll={scroll} />
        <Year year={"2009"} start={43.4} end={49.3} scroll={scroll} />
        <Year year={"2010"} start={49.4} end={55.3} scroll={scroll} />
        <Year year={"2012"} start={55.4} end={61.3} scroll={scroll} />
        <Year year={"2014"} start={61.4} end={67.3} scroll={scroll} />
        <Year year={"2015"} start={67.4} end={73.3} scroll={scroll} />
        <Year year={"2016"} start={73.4} end={79.3} scroll={scroll} />
        <Year year={"2017"} start={79.4} end={85.3} scroll={scroll} />
        <Year year={"2018"} start={85.4} end={91.3} scroll={scroll} />
        <Year year={"2019"} start={91.4} end={97.3} scroll={scroll} />
        <Year year={"2020"} start={97.4} end={103.3} scroll={scroll} />
        <Year year={"2021"} start={103.4} end={109.3} scroll={scroll} />
        <Year year={"2022"} start={109.4} end={115.3} scroll={scroll} />
      </Flex>
      <Flex direction="column" alignItems="center" justifyContent="center" h="100vh" w="40vw" top="0px" position="fixed" bgImage="/background.png" fontSize="50px" color="white" opacity={textOpacity} zIndex={50}>
        <Flex direction="column" alignItems="center" mt={"55px"} lineHeight={"55px"} >
          <Text >Faça scroll para</Text>
          <Text>conhecer os nossos</Text>
          <Text>projetos</Text>
        </Flex>
      </Flex>
    </Flex>

  );
}
