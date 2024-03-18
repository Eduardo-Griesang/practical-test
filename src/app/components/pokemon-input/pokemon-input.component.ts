import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-input',
  templateUrl: './pokemon-input.component.html',
  styleUrls: ['./pokemon-input.component.sass']
})
export class PokemonInputComponent {
  pokemonName: string = '';

  constructor(private pokemonService: PokemonService) {}

  fetchPokemon(): void {
    if (this.pokemonName.trim()) {
      this.pokemonService.setActivePokemon(this.pokemonName.trim());
    }
  }
}
