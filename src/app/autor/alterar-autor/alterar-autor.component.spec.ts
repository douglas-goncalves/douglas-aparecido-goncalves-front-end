import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAutorComponent } from './alterar-autor.component';

describe('AlterarAutorComponent', () => {
  let component: AlterarAutorComponent;
  let fixture: ComponentFixture<AlterarAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
