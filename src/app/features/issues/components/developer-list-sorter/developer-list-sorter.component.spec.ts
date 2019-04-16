import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperListSorterComponent } from './developer-list-sorter.component';

describe('DeveloperListSorterComponent', () => {
  let component: DeveloperListSorterComponent;
  let fixture: ComponentFixture<DeveloperListSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperListSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperListSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
