import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAnneeComponent } from './ajout-annee.component';

describe('AjoutAnneeComponent', () => {
  let component: AjoutAnneeComponent;
  let fixture: ComponentFixture<AjoutAnneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutAnneeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
