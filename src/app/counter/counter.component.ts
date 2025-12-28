import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)" [disabled]="counter >= 15">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)"[disabled]="counter <= 0">-1</button>
  `,
  standalone: false
})


export class CounterComponent {
  public counter: number = 10;


  increaseBy( value: number): void {
    const newValue = this.counter + value;
    // Clamping
    this.counter = Math.min(15, Math.max(0, newValue))
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
