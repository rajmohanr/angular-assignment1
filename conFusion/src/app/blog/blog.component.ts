import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../shared/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('./assets/data/blogData.json')
        .subscribe(response => console.log(response));
  }
}
