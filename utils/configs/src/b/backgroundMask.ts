import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
    key: "backgroundMask",
    name: "Background Mask",
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 1,
        },
        size: {
            value: {
                min: 1,
                max: 30,
            },
        },
        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 1,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "bubble",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            bubble: {
                distance: 400,
                size: 100,
                duration: 2,
                opacity: 1,
            },
            push: {
                quantity: 4,
            },
        },
    },
    backgroundMask: {
        enable: true,
        cover: {
            color: {
                value: {
                    r: 255,
                    g: 255,
                    b: 255,
                },
            },
        },
    },
    background: {
        color: "#ffffff",
        image: "url('https://particles.js.org/images/background3.jpg')",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
    },
};

export default options;
