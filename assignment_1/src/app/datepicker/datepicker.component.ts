import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { Date } from '../shared/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatePickerComponent implements OnInit {

  //newDate: string;

  dates: Array<Date>;

  // picker: string;

  // dates: Array<Date>;

  // isValid: boolean;
  // showSelected: boolean;


  constructor() {
    this.dates = [];
  }

  ngOnInit() { 
   
  }

// getDate(): void {
//   //do sth with the str e.g. 
//   let date = new Date(name,phone);
//   this.dates.push(date);
//   console.log(this.newDate);
// }

getDate(dateVal){
  let date = new Date(dateVal);
  this.dates.push(date);
  console.log(this.dates)


}

  // getDate(dateVal){
  //  console.log(dateVal)
  //  this.isValid = true;
  //  this.showSelected = true;
  //   let date = new Date(dateVal);
  //   this.dates.push(date);
  //  //console.log('aa'+ this.dates.push(date))
  //   //let date1 = "Apr 1, 2018, 3:44:12 PM";
  //   //let eventStartTime = date;
  //   //console.log(eventStartTime)
  //   //let eventEndTime = +new Date(date1);
  //  // let duration = eventEndTime.valueOf() - eventStartTime.valueOf();
  //  // console.log(duration)
  // }

}
