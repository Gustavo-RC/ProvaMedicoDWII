import { Medico } from "../models/medico";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MedicoService {
  baseURL = "http://localhost:1234";

  constructor(private http: HttpClient) {}

  list(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.baseURL);
  }
  create(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.baseURL, medico);
  }
}
