import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  columns = [
    { name: 'Name', prop: 'Name' },
    { name: 'Email', prop: 'Email' },
    { name: 'Age', prop: 'Age' },
    { name: 'Gender', prop: 'Gender' },
    { name: 'DOB', prop: 'DOB' },
  ];

  rows: any[] = [
    {
      Name: 'Alice',
      Email: 'alice@example.com',
      Age: '25',
      Gender: 'Female',
      DOB: '1999-01-01',
    },
    {
      Name: 'Bob',
      Email: 'bob@example.com',
      Age: '30',
      Gender: 'Male',
      DOB: '1994-05-20',
    },
    {
      Name: 'Charlie',
      Email: 'charlie@example.com',
      Age: '22',
      Gender: 'Other',
      DOB: '2002-03-15',
    },
  ];

  constructor() {}

  addRow() {
    const newRow: any = {};
    this.columns.forEach(
      (col) => (newRow[col.prop] = col.prop === 'Gender' ? 'Male' : '')
    );
    this.rows = [...this.rows, newRow];
  }

  updateValue(event: any, cell: string, rowIndex: number) {
    this.rows[rowIndex][cell] = event.target.value;
  }

  convertToCSV(data: any[]): string {
    const headers = this.columns.map((col) => col.prop).join(',');
    const rows = data.map((row) =>
      this.columns
        .map((col) => `"${(row[col.prop] || '').replace(/"/g, '""')}"`)
        .join(',')
    );
    return [headers, ...rows].join('\n');
  }

  submitData() {
    const csvData = this.convertToCSV(this.rows);
    console.log(csvData);
  }
}
