
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Icon, IconColor } from "../../components/pm-icon/pm-icon.component";
import {ButtonType, IconPosition, IconSize } from '../../components/pm-button/pm-button.component';

export enum PmModalActionState {
  CONFIRM = 'confirm',
  CANCEL = 'cancel',
  CLOSE = 'close',
}

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ActionButtonConfig {
  PRIMARY = 'primary',
  DELETE = 'delete',
  DISABLED = 'disabled',
}

@Component({
  selector: 'pm-modal',
  templateUrl: './pm-modal.component.html',
  styleUrls: ['./pm-modal.component.scss'],
})
export class PmModalComponent implements OnInit {
  @Input()
  isModalOpen: boolean = true;

  @Input()
  labelYes: string = 'Confirm';

  @Input()
  actionButtonDisabled: boolean = true;

  @Input()
  labelNo: string = 'Cancel';

  @Input()
  headerCode: string = 'A1-DD5467';

  @Input()
  preHeaderCode: string = 'ID:';

  @Input()
  headerTitle: string = 'Ausgewählte Mitarbeiter löschen';

  @Input()
  modalSize: ModalSize = ModalSize.MEDIUM;

  @Input()
  actionButtonConfig: ActionButtonConfig = ActionButtonConfig.PRIMARY;

  @Input()
  hasHeaderCode: boolean = false;

  @Output()
  onCloseClicked: EventEmitter<PmModalActionState> = new EventEmitter<PmModalActionState>();

  @Output()
  onCancelClicked: EventEmitter<PmModalActionState> = new EventEmitter<PmModalActionState>();

  @Output()
  onConfirmClicked: EventEmitter<PmModalActionState> = new EventEmitter<PmModalActionState>();

  /**
   * @ignore
   */
    readonly EIcon: typeof Icon = Icon;

  /**
   * @ignore
   */
  readonly EIconColor: typeof IconColor = IconColor;

  /**
   * @ignore
   */
  readonly EModalSize: typeof ModalSize = ModalSize;

  /**
   * @ignore
   */
  readonly EButtonType: typeof ButtonType = ButtonType;

  /**
   * @ignore
   */
    readonly EActionButtonConfig: typeof ActionButtonConfig = ActionButtonConfig;

  constructor() {
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  /**
   * @ignore
   */
  onCancelBtnClicked() {
    this.onCancelClicked.emit(PmModalActionState.CANCEL);
  }

  /**
   * @ignore
   */
  onConfirmBtnClicked() {
    this.onConfirmClicked.emit(PmModalActionState.CONFIRM);
  }

  /**
   * @ignore
   */
  onCloseBtnClicked() {
    this.onCloseClicked.emit(PmModalActionState.CLOSE);
    this.isModalOpen = false;
  }
}
