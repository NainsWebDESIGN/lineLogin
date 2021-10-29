import { Component, OnInit } from '@angular/core';
import { Line, LineURL } from '@ts/lineLogin';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  linehref: string;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    let box = [], line = Object.keys(Line);
    box = line.map(item => `${item}=${Line[item]}`);
    this.linehref = LineURL + box.join("&");
    // this.http.get(req).map(
    //   data => console.log(data),
    //   err => console.log(err)
    // ).subscribe(el => console.log([req, el]));
  }
}
