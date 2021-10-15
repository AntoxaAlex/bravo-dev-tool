import { Component, Input } from '@angular/core';
import { EmptyState } from "../../../core/interfaces/empty-state.interface";

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {

  @Input() public emptyState: EmptyState
  constructor() { }

}
