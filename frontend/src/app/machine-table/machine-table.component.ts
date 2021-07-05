import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MachineTableDataSource } from './machine-table-datasource';
import { Machine, MachineQueryParams } from "../../model/machine";
import { MachineService } from "../../api/machine.service";

@Component({
  selector: 'app-machine-table',
  templateUrl: './machine-table.component.html',
  styleUrls: ['./machine-table.component.scss']
})
export class MachineTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<Machine>;
  @Input() queryParams: MachineQueryParams;
  dataSource: MachineTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
  'customerId',
  'customerName',
  'machineNr',
  'machineId',
  'machineTypeSerial',
  'process',
  'processTime',
  // 'sensorData',
  'onlineFrom'
];

  constructor( private machineService: MachineService ) {}
  ngOnInit() {
    this.dataSource = new MachineTableDataSource(this.queryParams, this.machineService);
  }

  ngAfterViewInit() {
    
    console.log('view init');
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnChanges() {
    this.dataSource = new MachineTableDataSource(this.queryParams, this.machineService);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource

  }

  splitLines = (raw) => raw.replace(';','\n')
}
