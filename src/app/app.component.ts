import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from './data.service';

interface Phonebook {
 contacts: [{
  name: string,
  phone_number: string,
  address: string
 }]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Phonebook App';
  private url: 'http://www.mocky.io/v2/581335f71000004204abaf83'
  public data: Phonebook[];
  tableWidth = "100%";

  constructor(
    private dataService: DataService
  ) {

  }

  ngOnInit() {
    const raw = this.dataService.getData();
    raw.subscribe((res: any) => {
      res.json();
      const parsed = JSON.parse(res._body);
      this.data = parsed['contacts'];
      console.log('data: ', this.data);
    });
  }


}
