import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private activePokemonSubject: BehaviorSubject<string> = new BehaviorSubject<string>('pikachu');
  activePokemon$ = this.activePokemonSubject.asObservable();
  pokemonData$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
    this.activePokemon$.subscribe(pokemonName => {
      this.fetchPokemonData(pokemonName);
    });
  }

  setActivePokemon(pokemonName: string): void {
    this.activePokemonSubject.next(pokemonName);
  }

  private fetchPokemonData(pokemonName: string): void {
    this.http.get<any>(`${this.baseUrl}${pokemonName}`).subscribe(
      (response) => {
        this.pokemonData$.next(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
