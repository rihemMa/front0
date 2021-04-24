import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Api } from '../api';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  api = new Api();
  myToken = localStorage.getItem('token')
  header = {headers: new HttpHeaders().append('Authorization','Bearer '+this.myToken )}
  constructor(private http:HttpClient) { }

  getCompanyInfo()
  {
    return this.http.get<any>(this.api.api+'/getCompanyInfo',this.header)
  }

  updateCompany(id,company,path)
  {
    return this.http.put<any>(this.api.api+'/updateCompany/'+id , {company : company, path:path},this.header) ;
  }

  getItems()
  {
    return this.http.get<any>(this.api.api+'/getItems',this.header)
  }

  saveItems(Item)
  {
    return this.http.post<any>(this.api.api+'/createItem' , {Item : Item},this.header) ;
  }

  GetItems(id)
  {
    return this.http.get<any>(this.api.api+'/getItems'+id,this.header)
  }

  saveQuote(quote,items,config)
  {
    return this.http.post<any>(this.api.api+'/createQuote' , {quote : quote,items : items, config : config},this.header) ;
  }

  getQuotes()
  {
    return this.http.get<any>(this.api.api+'/getQuote',this.header)
  }

  getQuoteById(id)
  {
    return this.http.get<any>(this.api.api+'/getQuote/'+id ,this.header) ;
  }

  updateQuotes(id,items,quote)
  {
    return this.http.put<any>(this.api.api+'/updateQuote/'+id , {quote : quote,items : items},this.header) ;
  }

  deleteQuote(quotes_id)
  {
    return this.http.post<any>(this.api.api+'/deleteQuote' , {quotes_id : quotes_id},this.header) ;
  }
  calcNumQuotes(year)
  {
    return this.http.post<any>(this.api.api+'/calcNumQuote',{year:year},this.header).toPromise() ;
  }
}
