import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearingBootstrapComponent } from './learing-bootstrap.component';

describe('LearingBootstrapComponent', () => {
  let component: LearingBootstrapComponent;
  let fixture: ComponentFixture<LearingBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearingBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearingBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
