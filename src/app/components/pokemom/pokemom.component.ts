import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemom',
  templateUrl: './pokemom.component.html',
  styleUrls: ['./pokemom.component.sass']
})
export class PokemomComponent {
  @Input() isSidebarVisible!: boolean 
  pokemonData: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.pokemonData$.subscribe(data => {
      this.pokemonData = data;
    });
  }
}
