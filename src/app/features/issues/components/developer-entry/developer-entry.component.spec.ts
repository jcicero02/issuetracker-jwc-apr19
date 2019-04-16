import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperEntryComponent } from './developer-entry.component';

describe('DeveloperEntryComponent', () => {
  let component: DeveloperEntryComponent;
  let fixture: ComponentFixture<DeveloperEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
