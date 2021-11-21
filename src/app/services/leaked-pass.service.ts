import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeakedPassService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get<Object>('https://playground.nordsec.com/v2/worst-psw.json')
      .pipe(
        map((data) => {
          const pass = [];
          for (const key in data) {
            pass.push(...data[key]);
          }
          return pass;
        })
      );
  }
}
