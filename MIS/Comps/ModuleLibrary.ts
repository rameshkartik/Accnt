import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './AppComponent';
import { EmployeeComponent } from './EmployeeComponent';
import { GridComponent } from './GridComponent';

@NgModule(
    {
        imports: [
            BrowserModule,FormsModule
        ],
        declarations: [
            AppComponent,
            EmployeeComponent,GridComponent
           
        ],
        bootstrap: [AppComponent]

    })
export class ModuleLibrary { }
