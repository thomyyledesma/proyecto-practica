import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoItem } from './producto-item.component';

describe('ProductoItem', () => {
  let component: ProductoItem;
  let fixture: ComponentFixture<ProductoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
