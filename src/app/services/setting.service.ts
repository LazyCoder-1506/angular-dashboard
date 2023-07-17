import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  updateSettings(newSettings: Setting):Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.settingEndpoint, JSON.stringify(newSettings), { headers: headers })
  }
}
