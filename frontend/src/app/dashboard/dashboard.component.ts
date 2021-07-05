import { Component, OnInit,  NgZone } from '@angular/core';
import { MachineService } from 'src/api/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allData = []

  constructor(private machineService: MachineService, private zone: NgZone) { }

  ngOnInit(): void {
    this.machineService.queryMachines().subscribe(x => {this.allData = x})
    }
}