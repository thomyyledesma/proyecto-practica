import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CajaPage } from './caja-page';

describe('CajaPage', () => {
  let component: CajaPage;
  let fixture: ComponentFixture<CajaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CajaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
