import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailsPageComponent } from './contacts-details-page.component';

describe('ContactsDetailsPageComponent', () => {
  let component: ContactsDetailsPageComponent;
  let fixture: ComponentFixture<ContactsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
