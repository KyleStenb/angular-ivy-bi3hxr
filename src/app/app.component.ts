import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Bob';
  itemImageURL: string =
    'https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/logo_usage/NDSU.logo.typebox.jpg';
  isSpecial: boolean = true;
  username: string = '';

  onMouseOver(): void {
    this.isSpecial = !this.isSpecial;
  }

  onMouseOut(): void {
    this.isSpecial = !this.isSpecial;
  }

  onClick() {
    this.username == 'hello world';
  }
}
