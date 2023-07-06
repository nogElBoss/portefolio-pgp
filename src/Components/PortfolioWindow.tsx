import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

type PortfolioWindowProps = {
    delay: number;
    right: string;
    top: string;
    index: number;
};

export default function PortfolioWindow({
    delay,
    right,
    top,
    index,
}: PortfolioWindowProps) {
    const [scroll, setScroll] = useState(0);
    const [opacity, setOpacity] = useState(0.5);
    const [blur, setBlur] = useState(5);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;
            setScroll((value / 100) - delay);

            if (scroll > 14) {
                setBlur(4);
                setOpacity(0.6);
                if (scroll > 14.3) {
                    setBlur(3);
                    setOpacity(0.7);
                    if (scroll > 14.6) {
                        setBlur(2);
                        setOpacity(0.8);
                        if (scroll > 14.9) {
                            setBlur(1);
                            setOpacity(0.9);
                            if (scroll > 15.2) {
                                setBlur(0);
                                setOpacity(1);
                            }
                        }
                    }
                }
            } else {
                setBlur(5);
                setOpacity(0.5);
            }

            if (scroll > 23) {
                setOpacity(0.9);
                if (scroll > 23.5) {
                    setOpacity(0.8);
                    if (scroll > 24) {
                        setOpacity(0.7);
                        if (scroll > 24.5) {
                            setOpacity(0.6);
                            if (scroll > 25) {
                                setOpacity(0.5);
                                if (scroll > 25.5) {
                                    setOpacity(0.4);
                                    if (scroll > 26) {
                                        setOpacity(0.3);
                                        if (scroll > 26.5) {
                                            setOpacity(0.2);
                                            if (scroll > 27) {
                                                setOpacity(0.1);
                                                if (scroll > 27.5) {
                                                    setOpacity(0);
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
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scroll, delay]);

    const calculatedTop = 50 - scroll * 10 + "vh";
    const calculatedWidth = scroll > 28 ? 0 + "vw" : scroll * 10 + "vw";
    const calculatedHeight = scroll > 28 ? 0 + "vw" : scroll * 10 + "vw";
    const calculatedFilter = "blur(" + blur + "px)";

    return (
        <Box
            zIndex={20 - index}
            top={calculatedTop}
            w={calculatedWidth}
            h={calculatedHeight}
            position="fixed"
            overflowY="hidden"
            bg="none"
            opacity={opacity}
        >
            <Box
                w="12%"
                h="7%"
                bg="red"
                position="absolute"
                top={top}
                right={right}
                overflow="hidden"
                filter={calculatedFilter}
                bgImg="/image.jpg"
                bgSize="cover"
                bgRepeat="no-repeat"
            />
        </Box>
    );
}
