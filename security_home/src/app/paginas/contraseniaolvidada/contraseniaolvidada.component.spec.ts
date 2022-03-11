import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraseniaolvidadaComponent } from './contraseniaolvidada.component';

describe('ContraseniaolvidadaComponent', () => {
  let component: ContraseniaolvidadaComponent;
  let fixture: ComponentFixture<ContraseniaolvidadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraseniaolvidadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraseniaolvidadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
