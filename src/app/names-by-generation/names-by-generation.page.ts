import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchingService } from './fetching.service';
import { AllGenerations } from './all-generations.model';
import { Subscription } from 'rxjs';
import { SegmentChangeEventDetail } from '@ionic/core';
import { OneGeneration } from './one-generation.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-names-by-generation',
  templateUrl: './names-by-generation.page.html',
  styleUrls: ['./names-by-generation.page.scss'],
})
export class NamesByGenerationPage implements OnInit {
  generations: AllGenerations;
  generation: OneGeneration;
  private allGenerationsSub: Subscription;
  private oneGenerationSub: Subscription;
  private userName: string;

  constructor(private fetchingService: FetchingService, private authService: AuthService) { }

  ngOnInit() {
    this.userName = this.authService.onlyUserName;
    this.allGenerationsSub = this.fetchingService.fetchGenerationsApi().subscribe(resData => {
      this.generations = resData;
      //console.log(this.generations.results);
    });
  }

  onSelectedGeneration(event: CustomEvent<SegmentChangeEventDetail>) {
    this.oneGenerationSub = this.fetchingService.fetchOneGeneration((event.detail.value).toLowerCase()).subscribe(resData => {
      this.generation = resData;
      //console.log(this.generation.pokemon_species[0]);
    });
  }
}
