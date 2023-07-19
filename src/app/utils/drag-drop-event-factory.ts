import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

export class DragDropEventFactory<T> {

  createInContainerEvent(containerId: string, data: T[], fromIndex: number, toIndex: number): CdkDragDrop<T[], T[]> {
    const event = this.createEvent(fromIndex, toIndex);
    const container: any = { id: containerId, data: data };
    event.container = container;
    event.previousContainer = event.container;
    event.item = { data: data[fromIndex] } as CdkDrag<T>;
    return event;
  }

  private createEvent(previousIndex: number, currentIndex: number): CdkDragDrop<T[], T[]> {
    return {
      previousIndex: previousIndex,
      currentIndex: currentIndex,
      item: undefined,
      container: undefined,
      previousContainer: undefined,
      isPointerOverContainer: true,
      distance: { x: 0, y: 0 },
      dropPoint: undefined,
      event: new MouseEvent(null)
    };
  }
}

export interface ContainerModel<T> {
  id: string,
  data: T[],
  index: number
}