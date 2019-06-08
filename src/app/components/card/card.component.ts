import { Component, OnInit } from '@angular/core';
import { SubsinkService } from './../../services/subsink.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name = 'No unsubscribe component';
  message: string;

  constructor(private subsinkService: SubsinkService) { }

  ngOnInit() {
    this.subsinkService.getString()
      .subscribe((message: string) => {
        this.message = message;
        console.log(`${this.name} - ${message}`);
      });
  }

}
