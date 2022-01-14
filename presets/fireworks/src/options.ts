import { DestroyMode, DestroyType, MoveDirection, OutMode, StartValueType } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";

export const options: ISourceOptions = {
    detectRetina: true,
    background: {
        color: "#000",
    },
    fpsLimit: 60,
    emitters: {
        direction: MoveDirection.top,
        life: {
            count: 0,
            duration: 0.1,
            delay: 0.1,
        },
        rate: {
            delay: 0.5,
            quantity: 1,
        },
        size: {
            width: 100,
            height: 0,
        },
        position: {
            y: 100,
            x: 50,
        },
    },
    particles: {
        number: {
            value: 0,
        },
        destroy: {
            mode: DestroyMode.split,
            split: {
                count: 1,
                factor: 0.333333,
                rate: 100,
                particles: {
                    color: {
                        value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
                    },
                    stroke: {
                        width: 0,
                    },
                    number: {
                        value: 0,
                    },
                    collisions: {
                        enable: false,
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: 1,
                        },
                        animation: {
                            enable: true,
                            speed: 0.7,
                            sync: false,
                            startValue: StartValueType.max,
                            destroy: DestroyType.min,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: 2,
                        animation: {
                            enable: false,
                        },
                    },
                    life: {
                        count: 1,
                        duration: {
                            value: {
                                min: 1,
                                max: 2,
                            },
                        },
                    },
                    move: {
                        enable: true,
                        gravity: {
                            enable: false,
                        },
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: OutMode.destroy,
                    },
                },
            },
        },
        life: {
            count: 1,
        },
        shape: {
            type: "line",
        },
        size: {
            value: {
                min: 0.1,
                max: 50,
            },
            animation: {
                enable: true,
                sync: true,
                speed: 90,
                startValue: StartValueType.max,
                destroy: DestroyType.min,
            },
        },
        stroke: {
            color: {
                value: "#ffffff",
            },
            width: 1,
        },
        rotate: {
            path: true,
        },
        move: {
            enable: true,
            gravity: {
                acceleration: 15,
                enable: true,
                inverse: true,
                maxSpeed: 100,
            },
            speed: {
                min: 10,
                max: 20,
            },
            outModes: {
                default: OutMode.destroy,
                top: OutMode.none,
            },
            trail: {
                fillColor: "#000",
                enable: true,
                length: 10,
            },
        },
    },
};
