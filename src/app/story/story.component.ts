import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Input() exclamation: string;
  @Input() adverb: string;
  @Input() noun: string;
  @Input() adjective: string;

  constructor() { }

  ngOnInit() {
  }

}
