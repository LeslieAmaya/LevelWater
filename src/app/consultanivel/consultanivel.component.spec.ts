import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanivelComponent } from './consultanivel.component';

describe('ConsultanivelComponent', () => {
  let component: ConsultanivelComponent;
  let fixture: ComponentFixture<ConsultanivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultanivelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultanivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
