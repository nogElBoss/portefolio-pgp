import PortfolioWindow from "@/Components/portfolioWindow";
import { Flex } from "@chakra-ui/react";

export default function index() {

  return (
    <Flex backgroundColor="black" w="100vw" h="4000vh" alignItems="center" justifyContent="center">
      <PortfolioWindow delay={0} right={"30%"} top={"40%"}></PortfolioWindow>
      <PortfolioWindow delay={24} right={"40%"} top={"60%"}></PortfolioWindow>
    </Flex >
  );
};

