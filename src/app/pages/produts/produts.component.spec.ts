import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsComponent } from './produts.component';

describe('ProdutsComponent', () => {
  let component: ProdutsComponent;
  let fixture: ComponentFixture<ProdutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
