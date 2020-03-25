import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'due','process'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator ;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
export interface PeriodicElement {
  id: string;
  name: string;
  date: string;
  due: string;
  process: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'c79496df', name: 'Approve Invoice', date: '12-02-2020', due: '19-02-2020', process: 'c73045e0'},
  {id: 'a4496d53', name: 'Approve Invoice', date: '06-03-2020', due: '13-03-2020', process: 'a44834b0'},
  {id: '0b32db4a', name: 'Approve Invoice', date: '16-03-2020', due: '23-03-2020', process: '0b31a2a7'},
  {id: '7a752b57', name: 'Approve Invoice', date: '20-03-2020', due: '27-03-2020', process: '7a4d09c4'},
];
