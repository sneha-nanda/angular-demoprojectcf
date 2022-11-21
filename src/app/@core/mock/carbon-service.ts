
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
const baseUrl     : string = 'https://localhost:7247/api/Move';
const marsRoverKey : string ="eEHCWMMpiamsCo41wD5dkgUbsqidTlE8eRdLXrMM";
//https://api.nasa.gov/planetary/apod?api_key=eEHCWMMpiamsCo41wD5dkgUbsqidTlE8eRdLXrMM

const httpOptions : any    = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
    providedIn: 'root'
})
export class CarbonService {
  constructor(private _http: HttpClient) { }

  getByDateAndCamera(date: string, camera: string) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this._http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&api_key=" + marsRoverKey, { headers: httpOptions.headers })
  }

  public getAllDetails() : Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this._http.get(baseUrl , { headers: httpOptions.headers });
  }

}
