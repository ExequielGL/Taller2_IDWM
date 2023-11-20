import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validator-msg.component.html'
})
export class ValidatorRequiredMsgComponent {
  @Input() control!: FormControl;
  @Input() errorMessage!: string;
  @Input() serverError!: string;
}
