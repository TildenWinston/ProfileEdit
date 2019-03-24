import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  snapname;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.snapname = this._route.snapshot.params['id'];
    console.log(this._route.snapshot.params['id']);
  }

}
