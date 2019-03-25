import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
@Injectable()
export class DataService{
    constructor(private http:HttpClient){

    }
    // url for communication
    // login - > /api/auth/login
    // logout -> '/api/auth/logout'
    // get customers data url - > '/api/customers'
    // put -> /api/customers/:id
    // get -> /api/orders/:id
    // delete -> /api/customers/:id
    // get states data \
    // get -> /api/states

    deleteCustomer(id:number){
        return this.http.delete('/api/customers/'+id);
    }
    updateCustomer(customer):Observable<any>{
        return this.http.put('/api/customers/'+customer.id ,customer).pipe(
            map((res)=> res)
        )
    }
    getCustomersData():Observable<any>{
        return this.http.get('/api/customers');
    }
    getCustomer(id:number):Observable<any>{
        return this.http.get('/api/customers'+'/'+id);
    }

    login(loginCredentials){
        return this.http.post('/api/auth/login',loginCredentials).pipe(
            map((resp)=> resp)
        );
    }
    
}