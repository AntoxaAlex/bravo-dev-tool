import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Modules
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

//Material Modules
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from "@angular/material/chips";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';

//Components
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { ChipsComponent } from './components/chips/chips.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    LogoComponent,
    ButtonComponent,
    ChipsComponent,
    InputComponent,
    SelectComponent,
    TooltipComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    LogoComponent,
    ButtonComponent,
    ChipsComponent,
    InputComponent,
    SelectComponent,
    TooltipComponent
  ]
})
export class SharedModule { }
