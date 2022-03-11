import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneldeusuarioComponent } from './paneldeusuario.component';

describe('PaneldeusuarioComponent', () => {
  let component: PaneldeusuarioComponent;
  let fixture: ComponentFixture<PaneldeusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaneldeusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneldeusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
