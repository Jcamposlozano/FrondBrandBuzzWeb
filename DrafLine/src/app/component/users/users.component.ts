import { Component, OnInit } from '@angular/core';

import {ServerDraflineSkipTestsService} from '../../services/server-drafline--skip-tests.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  constructor(private servDraft: ServerDraflineSkipTestsService) { }

  ngOnInit(): void {
    
    /* 
      this.servDraft.getUser('3').subscribe(
      res => console.log(res),
      err => console.log(err)       
      );  */

  }


  

}
