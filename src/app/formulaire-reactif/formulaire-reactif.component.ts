import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire-reactif',
  templateUrl: './formulaire-reactif.component.html',
  styleUrl: './formulaire-reactif.component.css'
})
export class FormulaireReactifComponent {

  user = {
    name: "",
    email: ""
  }

  onSubmit(form: any){
    console.log("User:", form.value);
  }

}