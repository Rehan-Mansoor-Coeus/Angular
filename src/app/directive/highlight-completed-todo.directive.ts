import { Directive, effect, inject, input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef);

  styleEffect = effect(() => {
    if (this.isCompleted()) {
      // Apply styles for completed todo items
      this.el.nativeElement.classList.add('green');
      this.el.nativeElement.classList.remove('white');
    } else {
      // Reset styles for non-completed todo items
      this.el.nativeElement.classList.remove('green');
      this.el.nativeElement.classList.add('white');
    }
  });
}
