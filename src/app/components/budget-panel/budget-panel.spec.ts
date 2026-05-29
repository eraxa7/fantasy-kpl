import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPanel } from './budget-panel';

describe('BudgetPanel', () => {
  let component: BudgetPanel;
  let fixture: ComponentFixture<BudgetPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
