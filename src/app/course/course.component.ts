import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  /*template: `
      <input  (keyup.enter)="onKeyUp()"  />
  `,*/
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 // email="brook";
  constructor() { }

  ngOnInit() {
  }

  onKeyUp(){
    console.log(this.email);
  }


/*
  course = {
    title: "The Playbook",
    rating : 4.61875,
    students: 10518,
    price: 190.95,
    releaseDate: new Date(2019, 5, 24)
  }
*/

lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

}
