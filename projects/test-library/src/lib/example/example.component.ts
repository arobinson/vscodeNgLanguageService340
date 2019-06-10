import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bug-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  @Input() valueToDisplay: string;

  constructor() { }

  ngOnInit(): void {
  }
}
