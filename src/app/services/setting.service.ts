import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Setting } from '../state/setting/setting.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private settingEndpoint = 'http://localhost:3000/settings';

  constructor(private http: HttpClient) { }

  fetchSettings():Observable<any> {
    return this.http.get<any>(this.settingEndpoint)
  }
}
