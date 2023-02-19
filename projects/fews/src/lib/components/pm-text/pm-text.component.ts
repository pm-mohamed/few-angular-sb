import { Component, OnInit, Input } from '@angular/core';

export enum TextType {
  H1 = "h1",
  H2 = "h2",
  COPY_M_MEDIUM = "copy-m-medium",
  COPY_M_REGULAR = "copy-m-regular",
  COPY_M_REGULAR_DISABLED = "copy-m-regular-disabled",
  COPY_M_REGULAR_PRIMARY = "copy-m-regular-primary",
  COPY_M_REGULAR_ACTIVE = "copy-m-regular-active",
  COPY_S = "copy-s",
  COPY_S_LIGHTEST = "copy-s-lightest",
  COPY_S_MEDIUM = "copy-s-medium",
  COPY_XS = "copy-xs",
}

@Component({
  selector: 'pm-text',
  templateUrl: './pm-text.component.html',
  styleUrls: ['./pm-text.component.scss']
})
export class PmTextComponent implements OnInit {
  @Input()
  type: TextType = TextType.H1;

  @Input()
  text: string = 'Lorem Ipsum';

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
}
