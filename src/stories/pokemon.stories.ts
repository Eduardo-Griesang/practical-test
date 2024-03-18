import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { PokemomComponent } from 'src/app/components/pokemom/pokemom.component';

export default {
  title: 'Pokemon',
  decorators: [
    moduleMetadata({
      declarations: [PokemomComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Default = () => ({
  component: PokemomComponent,
  props: {
    pokemonData: {
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
        // Add more stats as needed
      ],
    },
  },
});
