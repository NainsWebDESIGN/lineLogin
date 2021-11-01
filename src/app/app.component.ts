import { Component, OnInit } from '@angular/core';
import { Line, LineURL, LineAPI, postLine } from '@ts/lineLogin';
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
  checkLoginStatus() {
    let loginStatus = [];
    location.search.split("&").forEach(item => {
      let data = item.split("=");
      loginStatus.push({ key: data[0], value: data[1] });
    })
    let index = loginStatus.findIndex(el => el.key == "?code");
    console.log(loginStatus);
    console.log(index);
    switch (index) {
      case -1: return "Line Login Error !";
      default:
        const header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const option = { headers: header };
        postLine.code = loginStatus[index].value;
        // let data = this.forMateObj(postLine);
        // const req = LineAPI;
        let box = [], PostLine = Object.keys(postLine);
        box = PostLine.map(item => `${item}=${postLine[item]}`);
        const req = LineAPI + box.join("&");
        console.log(req);
        this.http.post(req, option).subscribe(
          data => console.log(data),
          err => console.log(err),
          () => console.log(`${req} is "Complete!"`)
        )
        return "OK";
    }
  }
  forMateObj(obj: any) {
    let key = Object.keys(obj), data = new FormData();
    key.forEach(item => data.append(item, obj[item]));
    return data;
  }
  ngOnInit() {
    let box = [], line = Object.keys(Line);
    box = line.map(item => `${item}=${Line[item]}`);
    this.linehref = LineURL + box.join("&");
    this.checkLoginStatus();
  }
}
