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
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [opacity, setOpacity] = useState(0.5);
    const [blur, setBlur] = useState(5);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const currentScrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
            setScrollPercentage(currentScrollPercentage - delay);

            if (scrollPercentage > 5) {
                setBlur(4);
                setOpacity(0.6);
                if (scrollPercentage > 5.3) {
                    setBlur(3);
                    setOpacity(0.7);
                    if (scrollPercentage > 5.6) {
                        setBlur(2);
                        setOpacity(0.8);
                        if (scrollPercentage > 5.9) {
                            setBlur(1);
                            setOpacity(0.9);
                            if (scrollPercentage > 5.2) {
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

            if (scrollPercentage > 7) {
                setOpacity(0.9);
                if (scrollPercentage > 7.5) {
                    setOpacity(0.8);
                    if (scrollPercentage > 8) {
                        setOpacity(0.7);
                        if (scrollPercentage > 8.5) {
                            setOpacity(0.6);
                            if (scrollPercentage > 9) {
                                setOpacity(0.5);
                                if (scrollPercentage > 9.5) {
                                    setOpacity(0.4);
                                    if (scrollPercentage > 10) {
                                        setOpacity(0.3);
                                        if (scrollPercentage > 10.5) {
                                            setOpacity(0.2);
                                            if (scrollPercentage > 11) {
                                                setOpacity(0.1);
                                                if (scrollPercentage > 11.5) {
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
    }, [scrollPercentage, delay]);

    const calculatedTop = 50 - scrollPercentage * 30 + "vh";
    const calculatedWidth = scrollPercentage > 28 ? 0 + "vw" : scrollPercentage * 30 + "vw";
    const calculatedHeight = scrollPercentage > 28 ? 0 + "vw" : scrollPercentage * 30 + "vw";
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
