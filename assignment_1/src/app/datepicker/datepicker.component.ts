import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { Date } from '../shared/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatePickerComponent implements OnInit {

  picker: string;

  dates: Array<Date>;

  constructor() {
    this.dates = [];
  }

  ngOnInit() { 
   
  }

  getDate(dateVal){
    console.log(dateVal)
    let date = new Date(dateVal);
    this.dates.push(date);
  }

}
