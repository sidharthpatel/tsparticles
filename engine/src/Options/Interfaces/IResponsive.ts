import type { IOptions } from "./IOptions";
import type { RecursivePartial } from "../../Types";
import type { ResponsiveMode } from "../../Enums";

export interface IResponsive {
    maxWidth: number;
    options: RecursivePartial<IOptions>;
    mode: ResponsiveMode;
}
