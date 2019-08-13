import { Injectable } from "@angular/core";
import { Product } from "./types";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { NgForm, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private http: HttpClient) {}

  uploadForm: FormGroup;
  readonly URL_API = "http://localhost:3000/files/cloudy2";

  addHero(data) {
    try {
      console.log('enviando: ', data);

      const formData = new FormData();
      formData.append('URL_API', data);

      return this.http.post(this.URL_API, data)
        .pipe(map((resp: any) => resp));
    } catch (err) {
      console.log(err);
    }
  }
}
