import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUserFromStorage();

    this.authService.user$.subscribe(user => {
      if (!user && this.router.url !== '/login' && this.router.url !== '/register') {
        this.router.navigate(['/login']);
      }
    });
  }
}
