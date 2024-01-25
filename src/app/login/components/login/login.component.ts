import {AfterViewInit, Component, ElementRef, EventEmitter, Inject, Output, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../data/auth/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements AfterViewInit{
  @ViewChild('usernameInput') usernameInput?: ElementRef<HTMLInputElement>;
  @Output() loginEvent = new EventEmitter();

  loginForm = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService,
              @Inject(DOCUMENT) private document: Document,) {
  }

  ngAfterViewInit() {
    this.document.defaultView?.setTimeout(() => {
      this.usernameInput?.nativeElement.focus();
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginEvent.emit();
    const {username, password} = this.loginForm.getRawValue();
    this.authService.login({username, password}).subscribe(
      res => {
        const user = res.find(value => value.username === username && value.password === password);
        if (user) {
          localStorage.setItem('id', JSON.stringify(user.id));
          this.router.navigate(['/home']);
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }
    )

  }
}
