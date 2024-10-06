import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ErrorPageComponent implements OnInit {

  errormessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.errormessage = this.route.snapshot.data['message'];

    // Uncomment this if you want to subscribe to future data changes:
    // this.route.data.subscribe(
    //   (data: Data) => {
    //     this.errormessage = data['message'];
    //   }
    // );
  }
}
