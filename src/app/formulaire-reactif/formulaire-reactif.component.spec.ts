import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireReactifComponent } from './formulaire-reactif.component';

describe('FormulaireReactifComponent', () => {
  let component: FormulaireReactifComponent;
  let fixture: ComponentFixture<FormulaireReactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireReactifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireReactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
