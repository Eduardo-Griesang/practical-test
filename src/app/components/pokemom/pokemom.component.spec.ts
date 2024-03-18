import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemomComponent } from './pokemom.component';

describe('PokemomComponent', () => {
  let component: PokemomComponent;
  let fixture: ComponentFixture<PokemomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemomComponent]
    });
    fixture = TestBed.createComponent(PokemomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
