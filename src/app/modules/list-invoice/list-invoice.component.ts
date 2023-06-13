import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements AfterViewInit {

  constructor(protected apiService: ApiService){}

  clients: any;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.apiService.getClients().subscribe((data) => {
        console.log(data);
        this.clients = data.data;
      });
    });


  }


}
