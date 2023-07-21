import { useEffect, useState } from 'react';

const VerticalProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            const scrolledHeight = window.scrollY;
            const percentage = (scrolledHeight / (fullHeight - windowHeight)) * 100;
            setScrollPercentage(percentage);


        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: "50%",
                    left: 0,
                    width: '100vw',
                    height: '7px',
                    backgroundColor: 'white',
                    opacity: 0.1,
                    zIndex: 25,
                    transform: "rotate(180deg)"
                }}
            >

            </div>
            <div
                style={{
                    opacity: 1,
                    position: 'fixed',
                    top: "50%",
                    bottom: 0,
                    left: 0,
                    width: `${scrollPercentage}%`,
                    height: '7px',
                    backgroundColor: 'white',
                    zIndex: 25,
                }} />
        </>
    );
};

export default VerticalProgressBar;
