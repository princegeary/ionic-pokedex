import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchingService } from '../fetching.service';
import { Subscription } from 'rxjs';
import { OneSpecie } from '../one-specie.model';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-specie-detail',
  templateUrl: './specie-detail.page.html',
  styleUrls: ['./specie-detail.page.scss'],
})
export class SpecieDetailPage implements OnInit, OnDestroy {
  private specieSub: Subscription;
  specie: OneSpecie;

  isLoading = false;
  specieImageUrl: string;
  specieFound = true;
  queryText: string;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private fetchingService: FetchingService,
    //private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('specieName')) {
        this.navCtrl.navigateBack('/names-by-generation');
        return;
      }
      this.getPokemon(paramMap.get('specieName'));
    });
  }

  searchPokemon() {
    this.queryText = this.queryText.toLowerCase();
    this.getPokemon(this.queryText);
  }

  getPokemon(specieNameID: string) {
    this.isLoading = true;
    this.specieSub = this.fetchingService.fetchOneSpecie(specieNameID).subscribe(specie => {
      this.specie = specie;
      this.specieImageUrl = `https://img.pokemondb.net/artwork/large/${specie.name}.jpg`;
      this.specieFound = true;
      this.isLoading = false;
    }, error => {
      this.specieFound = false;
      this.isLoading = false;
    });
    window.history.replaceState({}, '', `/pokemons/${specieNameID}`)
  }

  ngOnDestroy() {
    this.specieSub.unsubscribe();
  }
}

