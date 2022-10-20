import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeusIngressosComponent } from './seus-ingressos.component';

describe('SeusIngressosComponent', () => {
  let component: SeusIngressosComponent;
  let fixture: ComponentFixture<SeusIngressosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeusIngressosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeusIngressosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
