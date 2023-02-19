import { Component, OnInit, Input } from '@angular/core';

export enum TextType {
  H4 = "h4",
  COPY_S_MEDIUM_PRIMARY = "copy-s-medium-primary",
  COPY_S_MEDIUM_SECONDARY = "copy-s-medium-secondary",
}

@Component({
  selector: 'pm-text',
  templateUrl: './pm-text.component.html',
  styleUrls: ['./pm-text.component.scss']
})
export class PmTextComponent implements OnInit {
  @Input()
  type: TextType = TextType.H4;

  @Input()
  text: string = 'Lorem Ipsum';

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
}
