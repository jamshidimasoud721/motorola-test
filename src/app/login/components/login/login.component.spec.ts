import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit loginEvent on valid form submission', () => {
    spyOn(component.loginEvent, 'emit');
    const usernameInput: HTMLInputElement = fixture.nativeElement.querySelector('input[type="text"]');
    const passwordInput: HTMLInputElement = fixture.nativeElement.querySelector('input[type="password"]');
    const loginButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    // Set input values
    usernameInput.value = 'andrew';
    passwordInput.value = 'andrew1234';

    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    // Submit the form
    loginButton.click();

    fixture.detectChanges();

    // Expect that the loginEvent has been emitted
    expect(component.loginEvent.emit).toHaveBeenCalled();
  });

  it('should not emit loginEvent on invalid form submission', () => {
    spyOn(component.loginEvent, 'emit');
    const loginButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    // Submit the form without entering values
    loginButton.click();

    fixture.detectChanges();

    // Expect that the loginEvent has not been emitted
    expect(component.loginEvent.emit).not.toHaveBeenCalled();
  });
});
