import { NgModule } from '@angular/core';

import {
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatMenuModule
    ],
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatMenuModule
    ]
})

export class MaterialModule {
}