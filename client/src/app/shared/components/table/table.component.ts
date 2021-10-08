import { Component, Input, OnInit } from '@angular/core';
import { TestTableItem } from "../../../interfaces/table-state.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  @Input() public tableData: TestTableItem[]
  public columnNames: string[]

  constructor() { }

  ngOnInit() {
    this.columnNames = Object.keys(this.tableData[0])
  }

}
