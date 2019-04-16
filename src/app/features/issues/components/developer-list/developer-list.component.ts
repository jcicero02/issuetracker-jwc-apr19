import { Component, OnInit } from '@angular/core';
import { DeveloperListItem } from '../../models';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  developers: DeveloperListItem[] = [
    { id: '1', firstName: 'Lee', lastName: 'Cooper', team: 'Commercial Lines' },
    { id: '2', firstName: 'Daryl', lastName: 'Sconyers', team: 'ERO' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
