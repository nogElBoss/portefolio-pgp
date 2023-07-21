import { Heading } from "@chakra-ui/react";
import { useState } from "react";

type PortfolioWindow = {
    year: string
    start: number
    end: number
    scroll: number
}

export default function Year({ year, start, end, scroll }: PortfolioWindow) {

    /* const [scroll, setScroll] = useState(0)

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", function () {
            let value = window.scrollY
            setScroll((value / 200))
            console.log(scroll)
        })
    } */



    return (
        <Heading position="absolute" left={(start + 1.2) + "vw"} fontSize="20px" fontFamily="numbers" color="white" opacity={(scroll >= start && scroll <= end) ? 1 : 0.05} transition="all .2s ease-in-out" transform={(scroll >= start && scroll <= end) ? "scale(1.1)" : "scale(1)"}>{year}</Heading>
    );
};