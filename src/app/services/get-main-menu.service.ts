import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetMainMenuService {

  private menuUrl = "app/main_menu";

  constructor(
    private http: Http
  ) { }

  fetchMenu() {
    let main_menu = this.http.get(this.menuUrl)
                          .map(this.handleResponse);
    return main_menu;
  }

  handleResponse(response: Response) {
    return response.json().data;
  }

}