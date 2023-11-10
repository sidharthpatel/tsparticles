import { DestroyType } from "../../../../Enums/Types/DestroyType";
import { EasingType } from "../../../../Enums/Types/EasingType";
import type { EasingTypeAlt } from "../../../../Enums/Types/EasingType";
import type { IOpacityAnimation } from "../../../Interfaces/Particles/Opacity/IOpacityAnimation";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { RangedAnimationOptions } from "../../AnimationOptions";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";

/**
 */
export class OpacityAnimation
    extends RangedAnimationOptions
    implements IOpacityAnimation, IOptionLoader<IOpacityAnimation>
{
    destroy: DestroyType | keyof typeof DestroyType;
    easing: EasingType | EasingTypeAlt;

    constructor() {
        super();
        this.destroy = DestroyType.none;
        this.speed = 2;
        this.easing = EasingType.easeInExpo;
    }

    /**
     * @deprecated this property is obsolete, please use the new minimumValue
     * @returns minimum opacity value
     */
    get opacity_min(): number | undefined {
        return this.minimumValue;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @param value -
     */
    set opacity_min(value: number | undefined) {
        this.minimumValue = value;
    }

    load(data?: RecursivePartial<IOpacityAnimation>): void {
        if (data?.opacity_min !== undefined && data.minimumValue === undefined) {
            data.minimumValue = data.opacity_min;
        }

        super.load(data);

        if (!data) {
            return;
        }

        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }

        if (data.easing !== undefined) {
            this.easing = data.easing;
        }
    }
}
