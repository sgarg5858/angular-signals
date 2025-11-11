import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserContainerComponent } from './edit-user-container.component';

describe('EditUserContainerComponent', () => {
  let component: EditUserContainerComponent;
  let fixture: ComponentFixture<EditUserContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
