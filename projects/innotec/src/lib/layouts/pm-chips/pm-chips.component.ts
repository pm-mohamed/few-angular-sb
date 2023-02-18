import {Component, EventEmitter, Input, Output} from "@angular/core";
import {LabelType} from "../../components/pm-label/pm-label.component";

export interface ChipData {
  key: number;
  primaryText: string;
  secondaryText: string;
}

@Component({
  selector: 'pm-chips',
  templateUrl: './pm-chips.component.html',
  styleUrls: ['./pm-chips.component.scss']
})
export class PmChipsComponent {
  @Input()
  removeAllText: string = "remove all";

  @Output()
  onChipsChanged: EventEmitter<ChipData[]> = new EventEmitter<ChipData[]>();

  @Input()
  chips: ChipData[] = [];

  @Input()
  disabled: boolean = false;

  /**
   * @ignore
   */
  readonly LabelType: typeof LabelType = LabelType;

  /**
   * @ignore
   */
  public removeChip(chip: ChipData) {
    if(this.disabled)
      return;

    this.chips = this.chips.filter(current => {
      return current.key != chip.key
    });
    this.emitChipsChanged();
  }

  /**
   * @ignore
   */
  public removeAll() {
    if(this.disabled)
      return;

    this.chips = [];
    this.emitChipsChanged();
  }

  /**
   * @ignore
   */
  private emitChipsChanged() {
    this.onChipsChanged.emit(this.chips);
  }
}
