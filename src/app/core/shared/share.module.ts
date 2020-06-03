import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class ShareModule { }
