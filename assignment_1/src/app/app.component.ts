import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { Blog } from './shared/blog';
import { Date } from './shared/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, HttpClient, FormsModule ],
})

export class AppComponent {
  title = 'blog';
}
