import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemomComponent } from './pokemom.component';

describe('PokemomComponent', () => {
  let component: PokemomComponent;
  let fixture: ComponentFixture<PokemomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Pokemon data', () => {
    const pokemonData = {
      id: 25,
      name: 'Pikachu',
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      },
      types: [
        { type: { name: 'electric' } }
      ],
      stats: [
        { stat: { name: 'hp' }, base_stat: 35 },
        { stat: { name: 'attack' }, base_stat: 55 },
        { stat: { name: 'defense' }, base_stat: 40 },
      ],
    };

    component.pokemonData = pokemonData;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Pikachu');
    expect(compiled.querySelector('img').src).toContain('25.png');
    expect(compiled.querySelector('.pokemon-type').textContent).toContain('electric');
    expect(compiled.querySelectorAll('.pokemon-stat').length).toBe(3);
  });
});
