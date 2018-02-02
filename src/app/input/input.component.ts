import { Component, OnInit } from '@angular/core';
import Word from '../models/word.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  wordInputs: Word[] = [
    { type: 'exclamation', default: 'Ouch!', examples: 'e.g. hey!, no!' },
    { type: 'adverb', default: 'stupidly', examples: 'e.g. happily, slowly' },
    { type: 'noun', default: 'cat', examples: 'e.g. dog, bicycle' },
    { type: 'adjective', default: 'brave', examples: 'e.g. small, green' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
