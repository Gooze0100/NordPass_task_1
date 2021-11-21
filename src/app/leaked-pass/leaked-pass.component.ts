import { Component, OnChanges, OnInit } from '@angular/core';
import { LeakedPassService } from '../services/leaked-pass.service';

@Component({
  selector: 'app-leaked-pass',
  templateUrl: './leaked-pass.component.html',
  styleUrls: ['./leaked-pass.component.scss'],
})
export class LeakedPassComponent implements OnInit, OnChanges {
  public leakedPassData;
  private allData;
  constructor(private leakedPassService: LeakedPassService) {}

  ngOnInit(): void {
    this.leakedPassService.getData().subscribe((data) => {
      this.allData = data;

      const sortByCount = this.allData.sort((a, b) => {
        return a.count - b.count;
      });

      const tmp = [];
      for (let i = 0; i < 10; i++) {
        tmp.push(sortByCount[i]);
      }
      this.leakedPassData = tmp;
    });
  }

  ngOnChanges(type): void {
    if (type === 'count') {
      const sortByCount = this.allData.sort((a, b) => {
        return a.count - b.count;
      });
      const tmp = [];
      for (let i = 0; i < 10; i++) {
        tmp.push(sortByCount[i]);
      }
      this.leakedPassData = tmp;
    }
    if (type === 'abc') {
      const sortByAbc = this.allData.sort((a, b) => {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      });
      const tmp = [];
      for (let i = 0; i < 10; i++) {
        tmp.push(sortByAbc[i]);
      }
      this.leakedPassData = tmp;
    }
  }

  showAll() {
    this.leakedPassData = this.allData;
  }
}
