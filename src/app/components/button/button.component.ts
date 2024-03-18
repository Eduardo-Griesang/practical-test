import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  @Input() pokemonName: string = '';

  constructor(private pokemonService: PokemonService) {}

  setActivePokemon(): void {
    this.pokemonService.setActivePokemon(this.pokemonName);
  }
}
