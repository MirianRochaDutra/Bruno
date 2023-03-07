import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponente2Component } from './novo-componente2.component';

describe('NovoComponente2Component', () => {
  let component: NovoComponente2Component;
  let fixture: ComponentFixture<NovoComponente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponente2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
