import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { SubsinkService } from 'src/app/services/subsink.service';

@Component({
  selector: 'app-subsink',
  templateUrl: './subsink.component.html',
  styleUrls: ['./subsink.component.css']
})
export class SubsinkComponent implements OnInit, OnDestroy {
  name = 'Subsink component 1 - Test';
  name2 = 'Subsink component 2 - Test';
  message: string;
  msg: string;

  private subs = new SubSink();

  constructor(private subsinkService: SubsinkService) { }

  ngOnInit() {
    // this.subs.sink = this.subsinkService.getString()
    //   .subscribe((message: string) => {
    //     this.message = message;
    //     console.log(`${this.name} - ${message}`);
    //   });
    // this.subs.sink = this.subsinkService.getString()
    //   .subscribe((message: string) => {
    //     this.msg = message;
    //     console.log(`${this.name2} - ${message}`);
    //   });

    this.subsSinkSubscriptions();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  subsSinkSubscriptions() {
    this.subs.add(
      this.subsinkService.getString()
        .subscribe((message: string) => {
          this.message = message;
          console.log(`${this.name} - ${message}`);
        }),
      this.subsinkService.getString()
        .subscribe((message: string) => {
          this.msg = message;
          console.log(`${this.name2} - ${message}`);
        })
    );
  }

}
