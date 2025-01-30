import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesAboutComponent } from './viajes-about.component';

describe('ViajesAboutComponent', () => {
  let component: ViajesAboutComponent;
  let fixture: ComponentFixture<ViajesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
