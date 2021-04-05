import type { Main } from "tsparticles";

export function loadHeartShape(tsParticles: Main): void {
    tsParticles.addShape("heart", (context, particle, radius) => {
        const x = -radius;
        const y = -radius;

        context.moveTo(x, y + radius / 2);
        context.quadraticCurveTo(x, y, x + radius / 2, y);
        context.quadraticCurveTo(x + radius, y, x + radius, y + radius / 2);
        context.quadraticCurveTo(x + radius, y, x + (radius * 3) / 2, y);
        context.quadraticCurveTo(x + radius * 2, y, x + radius * 2, y + radius / 2);
        context.quadraticCurveTo(x + radius * 2, y + radius, x + (radius * 3) / 2, y + (radius * 3) / 2);
        context.lineTo(x + radius, y + radius * 2);
        context.lineTo(x + radius / 2, y + (radius * 3) / 2);
        context.quadraticCurveTo(x, y + radius, x, y + radius / 2);
    });
}
