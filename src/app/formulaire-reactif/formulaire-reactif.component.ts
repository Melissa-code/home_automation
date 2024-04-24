import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire-reactif',
  templateUrl: './formulaire-reactif.component.html',
  styleUrl: './formulaire-reactif.component.css'
})
export class FormulaireReactifComponent  {
  user = { instruction: '' };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Instruction:', form.value.instruction);
    } else {
      console.log('Form is not valid');
    }
  }
}