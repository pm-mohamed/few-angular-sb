import { Component, OnInit, Input } from '@angular/core';

export enum TextType {
  H4 = "h4",
  COPY_L_BOLD = "copy-l-bold",
  COPY_M_BOLD_PRIMARY = "copy-m-bold-primary",
  COPY_M_BOLD_SECONDARY = "copy-m-bold-secondary",
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
