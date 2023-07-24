import {
    Box,
    Flex,
    Heading,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    Button,
} from "@chakra-ui/react";
import React from "react";

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
    const [ratio, setRatio] = useState(0);
    const [active, setActive] = useState(false);
    const [fontSize, setFontSize] = useState(0);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    useEffect(() => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const documentHeight = document.documentElement.scrollHeight;
        setRatio(windowWidth / windowHeight);

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const currentScrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
            setScrollPercentage(currentScrollPercentage - delay);
            setFontSize(5 * scrollPercentage)

            if (scrollPercentage > 5) {
                setBlur(4);
                setOpacity(0.6);
                if (scrollPercentage > 5.3) {
                    setBlur(3);
                    setOpacity(0.7);
                    if (scrollPercentage > 5.6) {
                        setBlur(2);
                        setOpacity(0.8); `q`
                        if (scrollPercentage > 5.9) {
                            setBlur(1);
                            setOpacity(0.9);
                            if (scrollPercentage > 5.2) {
                                setBlur(0);
                                setActive(true)
                                setOpacity(1);
                            }
                        }
                    }
                }
            } else {
                setBlur(5);
                setOpacity(0.5);
            }

            if (scrollPercentage > 8) {
                setOpacity(0.9);
                if (scrollPercentage > 8.5) {
                    setOpacity(0.7);
                    if (scrollPercentage > 9) {
                        setOpacity(0.5);
                        setActive(false)
                        if (scrollPercentage > 9.5) {
                            setOpacity(0.3);
                            if (scrollPercentage > 10) {
                                setOpacity(0.1);
                                if (scrollPercentage > 10.9) {
                                    setOpacity(0.0);
                                    /* if (scrollPercentage > 11) {
                                        setOpacity(0.3);
                                        if (scrollPercentage > 11.5) {
                                            setOpacity(0.2);
                                            if (scrollPercentage > 12) {
                                                setOpacity(0.1);
                                                if (scrollPercentage > 12.5) {
                                                    setOpacity(0);
                                                }
                                            }
                                        }
                                    } */
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

    const calculatedTop = 50 - scrollPercentage * (14.7 * ratio) + "vh";
    const calculatedWidth = scrollPercentage > 28 ? 0 : scrollPercentage * 30;
    const calculatedHeight = scrollPercentage > 28 ? 0 : scrollPercentage * 30;
    const calculatedFilter = "blur(" + blur + "px)";

    return (
        <>
            <Box
                zIndex={100 - index}
                top={calculatedTop}
                w={calculatedWidth >= 400 ? 400 + "vw" : calculatedWidth + "vw"}
                h={calculatedHeight >= 400 ? 200 + "vw" : calculatedHeight + "vw"}
                position="fixed"
                overflowY="hidden"
                bg="none"
                opacity={opacity}
                display={opacity == 0 ? "none" : "block"}

            >
                <Box
                    w="12%"
                    h="7%"
                    position="absolute"
                    top={top}
                    right={right}
                    overflow="hidden"
                    filter={calculatedFilter}
                    bgImg="/image.jpg"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    _hover={active ? {
                        cursor: "pointer"
                    } : {}}
                >
                    <Flex
                        onClick={active ? onOpen : () => { }}
                        w="100%"
                        h="100%"
                        alignItems="center"
                        justifyContent="center"
                        opacity={0}
                        _hover={active ? {
                            background: "rgb(0,0,0,0.4)",
                            filter: "brightness(100%)",
                            opacity: 1
                        } : {}}

                    >
                        <Heading color="white" fontSize={fontSize}>NOME DO PROJETO</Heading>
                    </Flex>
                </Box>
            </Box>
            <Drawer
                size="full"
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
