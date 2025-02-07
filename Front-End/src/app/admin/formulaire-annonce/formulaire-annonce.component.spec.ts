import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAnnonceComponent } from './formulaire-annonce.component';

describe('FormulaireAnnonceComponent', () => {
  let component: FormulaireAnnonceComponent;
  let fixture: ComponentFixture<FormulaireAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireAnnonceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
