import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trabalho-final';

  public sympla$: Observable<any>;

  constructor(private http: HttpClient){

  }

  ngOnInit(){

    this.http.get("https://api.sympla.com.br/public/v3")
      .subscribe(d=> console.log(d));

    this.sympla$ = this.http.get("https://api.sympla.com.br/public/v3")
  }
}

