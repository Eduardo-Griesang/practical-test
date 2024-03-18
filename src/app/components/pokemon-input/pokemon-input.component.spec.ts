import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInputComponent } from './pokemon-input.component';
import { FormsModule } from '@angular/forms';

describe('PokemonInputComponent', () => {
  let component: PokemonInputComponent;
  let fixture: ComponentFixture<PokemonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonInputComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchPokemon() when form is submitted', () => {
    spyOn(component, 'fetchPokemon');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.fetchPokemon).toHaveBeenCalled();
  });

  it('should update pokemonName property on input change', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'Pikachu';
    input.dispatchEvent(new Event('input'));
    expect(component.pokemonName).toEqual('Pikachu');
  });
});
