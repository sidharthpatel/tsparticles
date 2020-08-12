import { EditorGroup, EditorSelectInput, EditorType } from "object-gui";
import type { Container } from "tsparticles/dist/Core/Container";
import { HoverMode } from "tsparticles";
import type { IHoverEvent } from "tsparticles/dist/Options/Interfaces/Interactivity/Events/IHoverEvent";
import { EditorBase } from "../../../../EditorBase";

export class HoverEventsOptionsEditor extends EditorBase {
    public group!: EditorGroup;
    private options!: IHoverEvent;

    constructor(particles: Container) {
        super(particles);
    }

    public addToGroup(parent: EditorGroup): void {
        this.group = parent.addGroup("onHover", "Hover Events");
        this.options = this.group.data as IHoverEvent;

        this.addParallax();
        this.addProperties();
    }

    private addParallax(): void {
        const particles = this.particles;
        const options = this.options.parallax;
        const parallax = this.group.addGroup("parallax", "Parallax");

        parallax.addProperty("enable", "Enable", EditorType.boolean).change(async () => {
            await particles.refresh();
        });

        parallax.addProperty("force", "Force", EditorType.number).change(async () => {
            await particles.refresh();
        });

        parallax.addProperty("smooth", "Smooth", EditorType.number).change(async () => {
            await particles.refresh();
        });
    }

    private addProperties(): void {
        const particles = this.particles;
        const options = this.options;

        this.group.addProperty("enable", "Enable", EditorType.boolean).change(async () => {
            await particles.refresh();
        });

        const modeSelectInput = this.group.addProperty("mode", "Mode", EditorType.select).change(async () => {
            await particles.refresh();
        }) as EditorSelectInput;

        modeSelectInput.addItem(HoverMode.attract);
        modeSelectInput.addItem(HoverMode.bubble);
        modeSelectInput.addItem(HoverMode.connect);
        modeSelectInput.addItem(HoverMode.grab);
        modeSelectInput.addItem(HoverMode.light);
        modeSelectInput.addItem(HoverMode.repulse);
        modeSelectInput.addItem(HoverMode.slow);
        modeSelectInput.addItem(HoverMode.trail);
    }
}
