import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    
    return this._http.post('http://192.168.1.10/aprod/index.php', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
        
    const body = { id , ...data}; // Crear el cuerpo de la solicitud con el ID    
 
    const headers = { 'Content-Type': 'application/json' };
    console.log(headers);
    return this._http.put(`http://192.168.1.10/aprod/`, body, { headers });
  }

  getEmployeeList(): Observable<any> {
    //return this._http.get('http://localhost:3000/employees');
    return this._http.get('http://192.168.1.10/aprod/index.php');
  }

  deleteEmployee(id: number): Observable<any> {
    const body = { id }; // Crear el cuerpo de la solicitud con el ID
    const options = {
      headers: { 'Content-Type': 'application/json' },
      body: body,
    };

    return this._http.delete('http://192.168.1.10/aprod/index.php', options);
  }
}
