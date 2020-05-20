import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teslappv1';
  user: User;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
      this.accountService.logout();
  }
}
