import { Component, OnInit, Input } from '@angular/core';
import { StatusResponse } from '../server-status/server-status.component';

@Component({
  selector: 'app-server-status-display',
  templateUrl: './server-status-display.component.html',
  styleUrls: ['./server-status-display.component.css']
})
export class ServerStatusDisplayComponent implements OnInit {

  @Input()
  status: StatusResponse;
  constructor() { }

  ngOnInit() {
  }

}
