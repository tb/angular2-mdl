import {
  Component,
  ElementRef,
  Provider,
  Renderer,
  forwardRef,
  NgModule
} from '@angular/core';

import {
  NG_VALUE_ACCESSOR,
  FormsModule
} from '@angular/forms';
import { MdlCheckboxComponent } from './../checkbox/mdl-checkbox.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mdl-switch',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MdlSwitchComponent),
    multi: true
  }],
  host: {
    '(click)': 'onClick()',
    '[class.mdl-switch]': 'true',
    '[class.is-upgraded]': 'true',
    '[class.is-checked]': 'value'
  },
  template: `
    <input type="checkbox" class="mdl-switch__input" 
      (focus)="onFocus()" 
      (blur)="onBlur()"
      [(ngModel)]="value">
    <span class="mdl-switch__label"><ng-content></ng-content></span>
    <div class="mdl-switch__track"></div>
    <div class="mdl-switch__thumb"><span class="mdl-switch__focus-helper"></span></div>
  `
})
export class MdlSwitchComponent extends MdlCheckboxComponent {

  constructor(elementRef: ElementRef, renderer: Renderer) {
    super(elementRef, renderer);
  }

}

/** @deprecated */
export const MDL_SWITCH_DIRECTIVES = [MdlSwitchComponent];

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: MDL_SWITCH_DIRECTIVES,
  declarations: MDL_SWITCH_DIRECTIVES,
})
export class MdlSwitchModule {}
