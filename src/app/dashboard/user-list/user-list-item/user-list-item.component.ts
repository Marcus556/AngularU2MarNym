import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  @Input() user;
  @Input() textColor;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let user = this.route.snapshot.paramMap.get('user');
  }

}
