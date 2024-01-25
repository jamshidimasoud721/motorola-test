import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../data/auth/auth.service";
import {LoginResponse} from "../../../data/auth/auth.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user?: LoginResponse

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    const id = localStorage.getItem('id')
    this.authService.getAllUsers().subscribe(res => {
      this.user = res.find(item => item.id === Number(id))
    })
  }

  logout() {
    localStorage.removeItem('id');

    this.router.navigate(['']);
  }
}
