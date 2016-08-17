import { OnInit } from '@angular/core';
export declare class MdlCardComponent {
}
export declare class MdlCardChildStructure implements OnInit {
    private mdlCardComponent;
    private childComponentName;
    constructor(mdlCardComponent: MdlCardComponent, childComponentName: string);
    ngOnInit(): void;
}
export declare class MdlCardTitleComponent extends MdlCardChildStructure {
    constructor(mdlCardComponent: MdlCardComponent);
}
export declare class MdlCardSupportingTextComponent extends MdlCardChildStructure {
    constructor(mdlCardComponent: MdlCardComponent);
}
export declare class MdlCardMediaComponent extends MdlCardChildStructure {
    constructor(mdlCardComponent: MdlCardComponent);
}
export declare class MdlCardActionsComponent extends MdlCardChildStructure {
    constructor(mdlCardComponent: MdlCardComponent);
}
export declare class MdlCardMenuComponent extends MdlCardChildStructure {
    constructor(mdlCardComponent: MdlCardComponent);
}
export declare class MdlCardTitleTextDirective {
}
export declare class MdlCardBorderDirective {
}
export declare class MdlCardExpandDirective {
}
/** @deprecated */
export declare const MDL_CARD_DIRECTIVES: (typeof MdlCardComponent | typeof MdlCardTitleComponent)[];
export declare class MdlCardModule {
}
