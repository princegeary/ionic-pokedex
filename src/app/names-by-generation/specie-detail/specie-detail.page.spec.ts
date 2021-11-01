import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecieDetailPage } from './specie-detail.page';

describe('SpecieDetailPage', () => {
  let component: SpecieDetailPage;
  let fixture: ComponentFixture<SpecieDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecieDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
