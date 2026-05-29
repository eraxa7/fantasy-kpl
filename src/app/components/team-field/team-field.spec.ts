import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamField } from './team-field';

describe('TeamField', () => {
  let component: TeamField;
  let fixture: ComponentFixture<TeamField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamField],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
