import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerAllModule,
          TimePickerAllModule,
          DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './common/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    CheckBoxAllModule,
    ToolbarAllModule,
    DropDownListAllModule,
    ContextMenuAllModule,
    MaskedTextBoxModule,
    MultiSelectAllModule,
    SharedModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
