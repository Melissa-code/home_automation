import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-reactif',
  templateUrl: './formulaire-reactif.component.html',
  styleUrls: ['./formulaire-reactif.component.css']
})
export class FormulaireReactifComponent implements OnInit {
  instruction: string = "";
  instructions: any[] = [];

  ngOnInit() {
    this.loadInstructions(); 
  }

  loadInstructions() {
    const existingData = localStorage.getItem('formData');
    if (existingData) {
      this.instructions = JSON.parse(existingData);
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      const newInstruction = form.value.instruction;
      const isDuplicate = this.instructions.some(data => data.instruction === newInstruction);

      if (!isDuplicate) {
        this.instructions.push({ instruction: newInstruction });
        localStorage.setItem('formData', JSON.stringify(this.instructions));
      } else {
        console.log('Duplicate instruction');
        alert("Cette instruction existe déjà. Veuillez en saisir une autre.");
      }

      console.log('Instruction:', newInstruction);
      form.resetForm();
    } else {
      console.log('Form is not valid');
    }
  }

  deleteInstruction(index: number) {
    this.instructions.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(this.instructions));
  }
}
