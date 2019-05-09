import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './dashboard.component';
import { routes } from './dashboard.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
        ],

    declarations: [ DashboardComponent],
    providers: [
    ]
})

export class DashboardModule { }
