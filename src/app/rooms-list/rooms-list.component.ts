import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'pbhinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  
  @Input()
  title: string = "Add Rooms";

  @Input()
  rooms: RoomList[] | null = [];

  @Output()
  selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title'])
      this.title = changes['title']?.currentValue.toUpperCase();
  }

  ngOnDestroy(): void {
    console.log('OnDestroy is called.')
  }
}
