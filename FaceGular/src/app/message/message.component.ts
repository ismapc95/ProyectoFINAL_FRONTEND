import { Component, OnInit, Output, Input } from '@angular/core';
import { Historieta } from '../domain/historieta.model';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Historieta;
  // @Output() messageReact: EventEmitter<Historieta> = new EventEmitter<Historieta>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
