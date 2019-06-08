import { Component } from '@angular/core';
import { SubsinkService } from './services/subsink.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showCards = true;

  constructor(private subsinkService: SubsinkService) {}

  capitalizeFirstLetter(value) {
    this.subsinkService.capitalizeFirstLetter(value);
  }

  displayCards() {
    this.showCards = true;
  }

  hideCards() {
    this.showCards = false;
  }
}
