import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {

  // Without Environment setup
  // private url = 'http://localhost:3000/status';

  // With Environment setup
  private url = environment.statusApiUrl;
  status$: Observable<StatusResponse>;

  // to get data in only one call
  // status: StatusResponse;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getData() {
    this.status$ = this.http.get<StatusResponse>(this.url);

    // to get data in only one call
    // this.http.get<StatusResponse>(this.url).subscribe(r => this.status = r);
  }

}

export interface StatusResponse {
  message: string;
  at: string;
}
