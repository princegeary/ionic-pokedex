import { Injectable } from '@angular/core';
import { AllGenerations } from './all-generations.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { OneGeneration } from './one-generation.model';
import { OneSpecie } from './one-specie.model';

@Injectable({
  providedIn: 'root'
})


export class FetchingService {
  private allGenerations: AllGenerations;
  private oneGeneration: OneGeneration;
  private oneSpecie: OneSpecie;
  private specieImageUrl: string;

  constructor(private http: HttpClient) { }

  fetchGenerationsApi() {
    return this.http.get<AllGenerations>('https://pokeapi.co/api/v2/generation').pipe(map(resData => {
      return new AllGenerations(
        resData.count,
        resData.next,
        resData.previous,
        resData.results
      )
    }));
  }
  fetchOneGeneration(generationName: string) {
    return this.http.get<OneGeneration>(`https://pokeapi.co/api/v2/generation/${generationName}`).pipe(map(resData => {
      return new OneGeneration(
        resData.abilities,
        resData.id,
        resData.main_region,
        resData.moves,
        resData.name,
        resData.names,
        resData.pokemon_species,
        resData.types,
        resData.version_groups
      )
    }));
  }

  fetchOneSpecie(specieName: string) {
    return this.http.get<OneSpecie>(`https://pokeapi.co/api/v2/pokemon/${specieName}`).pipe(map(specie => {
      return new OneSpecie(
        specie.abilities,
        specie.base_experience,
        specie.forms,
        specie.game_indices,
        specie.height,
        specie.held_items,
        specie.id,
        specie.is_default,
        specie.location_area_encounters,
        specie.moves,
        specie.name,
        specie.order,
        specie.species,
        specie.sprites,
        specie.stats,
        specie.types,
        specie.weight,
      )
    }));
  }
} 
