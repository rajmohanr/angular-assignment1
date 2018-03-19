import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../shared/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

   // blogs: Blog[];
  // private blogs  = [];
  data: any;
  private blogs: Blog[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   const responseData =  this.http.get('./assets/data/blogData.json')
        .subscribe(response => this.data);
        // console.log('data' + responseData);
        // blogs: responseData;
  }


}
