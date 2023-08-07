import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    exports:[
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatTableModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSnackBarModule,
    ]
})

export class MaterialModule{}
