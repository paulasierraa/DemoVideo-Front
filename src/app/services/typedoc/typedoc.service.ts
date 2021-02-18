import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Typedoc } from '../../models/Typedoc.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypedocService {

constructor(private http:HttpClient) { }

  getAll():Observable<Typedoc[]>
  {
    return this.http.get<Typedoc[]>(`${environment.url_api}/typedoc/`);
  }
}
