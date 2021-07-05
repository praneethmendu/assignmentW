import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MachineService } from 'src/api/api';
import { Machine } from 'src/model/models';

@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.scss']
})
export class MachineDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private machineService: MachineService) { }
  machine$: Observable<Machine>;
  ngOnInit(): void {

    this.machine$ = this.route.paramMap.pipe(
      switchMap(params => this.machineService.machineById(parseInt(params.get('id'))))
    )
  }

}
