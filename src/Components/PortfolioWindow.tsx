import { Box } from "@chakra-ui/react";
import { useState } from "react";

type PortfolioWindow = {
    delay: GLfloat
    right: string
    top: string
    index: number
}

export default function PortfolioWindow({ delay, right, top, index }: PortfolioWindow) {

    const [scroll, setScroll] = useState(0)

    const [opacity, setOpacity] = useState([1])

    if (!opacity[index]) {
        opacity.push(1)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", function () {
            let value = window.scrollY
            setScroll((value / 100) - delay)
            console.log(scroll)

            if (scroll + delay > 11) {
                setOpacity(0.9)
                if (scroll + delay > 11.5) {
                    setOpacity(0.8)
                    if (scroll + delay > 12) {
                        setOpacity(0.7)
                        if (scroll + delay > 12.5) {
                            setOpacity(0.6)
                            if (scroll + delay > 13) {
                                setOpacity(0.5)
                                if (scroll + delay > 13.5) {
                                    setOpacity(0.4)
                                    if (scroll + delay > 14) {
                                        setOpacity(0.3)
                                        if (scroll + delay > 14.5) {
                                            setOpacity(0.2)
                                            if (scroll + delay > 15) {
                                                setOpacity(0.1)
                                                if (scroll + delay > 15.5) {
                                                    setOpacity(0)
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
        <Box
            top={50 - scroll * 10 + "vh"}
            w={scroll * 10 + "vw"}
            h={scroll * 10 + "vw"}
            position="fixed"
            overflowY="hidden"
            bg="none"
            opacity={opacity}
        >
            <Box
                w="10%"
                h="7%"
                bg="red"
                position="absolute"
                top={top}
                right={right}
                overflow="hidden"
            />
        </Box>
    );
};