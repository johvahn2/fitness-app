import { NgModule } from '@angular/core';

// Material
import {
	MatInputModule,
	MatToolbarModule,
	MatPaginatorModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatBadgeModule,
	MatSidenavModule,
	MatCheckboxModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatTooltipModule,
	MatListModule
} from '@angular/material';

const materials = [
    MatInputModule,
    MatToolbarModule,
	MatPaginatorModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatSidenavModule,
	MatCheckboxModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatTooltipModule,
	MatListModule
  ];

  @NgModule({
    declarations: [
    ],
    imports: [
      materials
    ],
    exports:[materials]
  })
  export class MaterialModule { }