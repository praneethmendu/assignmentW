import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Machine, MachineQueryParams } from "../../model/machine";
import { MachineService } from "../../api/machine.service";


export class MachineTableDataSource extends DataSource<Machine> {
  data: Machine[] = [];
  paginator: MatPaginator;
  sort: MatSort;
  params: MachineQueryParams
  machineService: MachineService

  constructor(queryParams, machineService) {
    super();
    this.params = queryParams
    this.machineService = machineService
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Machine[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    return this.machineService.queryMachines(
      'customer' in this.params ? this.params.customer : null,
      this.params.drainSensorOn ? this.params.drainSensorOn : null,
      this.params.pump5On ? this.params.pump5On : null,
      this.params.pump10On ? this.params.pump10On : null,
      this.params.waterTemp ? (JSON.stringify(this.params.waterTemp)) : null,
      this.params.waterLevel ? encodeURIComponent(JSON.stringify(this.params.waterLevel)) : null)
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Machine[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Machine[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'customerId': return compare(a.customerId, b.customerId, isAsc);
        // case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
