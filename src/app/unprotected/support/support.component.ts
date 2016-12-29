import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  posts=[
    {title:'Technical maintenance (плановые технические работы)', by:'Jango A', createdOn:'30 September 2016 04:18 PM', body:'Technical maintenance in data center', avatar:'http://www.freeiconspng.com/uploads/profile-icon-9.png'},
    {title:'Technical maintenance (плановые технические работы)', by:'Jango A', createdOn:'30 September 2016 04:18 PM', body:'Technical maintenance in data center', avatar:'http://www.freeiconspng.com/uploads/profile-icon-9.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
