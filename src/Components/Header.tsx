import {
    Flex, Image, Link
} from "@chakra-ui/react";
import React from "react";


export default function PortfolioWindow() {

    return (
        <Flex w="100vw" h="100px" bg="linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))" position="fixed" zIndex={200} alignItems="start" justifyContent="space-between" px={10} py={7}>
            <Link href="/"><Image src="\pgp-logo.png" h="60px" mt={-4}></Image></Link>

            <Image src="\hamburger.png" h="15px" mr="20px"></Image>
        </Flex >
    );
}
