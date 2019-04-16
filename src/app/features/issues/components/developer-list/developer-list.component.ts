import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DeveloperListItem } from '../../models';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperListComponent implements OnInit {

  @Input() developers: DeveloperListItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
