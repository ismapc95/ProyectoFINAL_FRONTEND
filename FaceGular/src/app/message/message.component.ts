import { Component, OnInit, Output, Input } from '@angular/core';
import { Historieta } from '../domain/historieta.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Historieta;

  constructor() { }

  ngOnInit() {
  }

}
