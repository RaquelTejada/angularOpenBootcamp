import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestFormComponent } from './nest-form.component';

describe('NestFormComponent', () => {
  let component: NestFormComponent;
  let fixture: ComponentFixture<NestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
