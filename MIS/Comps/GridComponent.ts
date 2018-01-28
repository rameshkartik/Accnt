import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeComponent } from './EmployeeComponent';

@Component(
    {

        selector: 'grid-ui',
        templateUrl: './UI/Grid.html'
    })

export class GridComponent {

    @Output("grid-output")
    selected:EventEmitter<Object> = new EventEmitter<Object>();

    gridData: Array<Object> = new Array<Object>();
    gridColumns: Array<Object> = new Array<Object>();

    @Input("grid-entity")
    EntityName: string = "";

    @Input("grid-Data")
    set gridDataSet(_gridData: Array<Object>) {
        if (_gridData.length > 0) {
            var cols = Object.keys(_gridData[0]);
            this.gridColumns = Array<Object>();
            for (var index in cols) {
                this.gridColumns.push(cols[index]);
            }
        }
        this.gridData = _gridData;
    }

    Select(_selected: Object) {
        this.selected.emit(_selected);
    }
}