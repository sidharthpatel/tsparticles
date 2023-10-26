import { EasingType, EasingTypeAlt } from "../../../../exports";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { ISize } from "../../../Interfaces/Particles/Size/ISize";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { SizeAnimation } from "./SizeAnimation";
import { ValueWithRandom } from "../../ValueWithRandom";
import { setRangeValue } from "../../../../Utils/NumberUtils";

/**
 * [[include:Options/Particles/Size.md]]
 */
export class Size extends ValueWithRandom implements ISize, IOptionLoader<ISize> {
    animation;
    easing: EasingType | EasingTypeAlt;

    constructor() {
        super();
        this.animation = new SizeAnimation();
        this.random.minimumValue = 1;
        this.value = 3;
        this.easing = EasingType.easeInBack;
    }

    /**
     * @deprecated this property is obsolete, please use the new animation
     * @returns the size animation object
     */
    get anim(): SizeAnimation {
        return this.animation;
    }

    /**
     * @deprecated this property is obsolete, please use the new animation
     * @param value -
     */
    set anim(value: SizeAnimation) {
        this.animation = value;
    }

    load(data?: RecursivePartial<ISize>): void {
        super.load(data);

        if (!data) {
            return;
        }

        const animation = data.animation ?? data.anim;

        if (animation !== undefined) {
            this.animation.load(animation);

            this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }

        if(data.easing !== undefined) {
            this.easing = data.easing;
        }
    }
}
