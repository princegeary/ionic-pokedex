import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NamesByGenerationPage } from './names-by-generation.page';

describe('NamesByGenerationPage', () => {
  let component: NamesByGenerationPage;
  let fixture: ComponentFixture<NamesByGenerationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesByGenerationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NamesByGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
