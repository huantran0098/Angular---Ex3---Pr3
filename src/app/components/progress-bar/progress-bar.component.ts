import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loading()
  }
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress : string = "";

  loading() {
    let interval = setInterval(() => {
      console.log(this.progress);
      this.progress = (+this.progress + 5).toString();
      if (this.progress == "100") {
        clearInterval(interval);
      }
    }, 1000);
  }
}
