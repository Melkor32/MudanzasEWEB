import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent implements AfterViewInit{

  @ViewChild('clientsForm') clientsForm!: NgForm;

  constructor(protected apiService: ApiService){}

  ngAfterViewInit(): void {
    console.log(this);
  }

  resetForm(){
    this.clientsForm.reset();
  }

  acceptHandler(){

    let client: Client = {
      'client_id': this.clientsForm.form.value['clients_id'],
      'name': this.clientsForm.form.value['name'],
      'address': this.clientsForm.form.value['address'],
      'email': this.clientsForm.form.value['email'],
    }

    setTimeout(() => {
      this.apiService.saveClient(client).subscribe((data) => {
        console.log(data);
      });
    });

    this.resetForm();
  }
}
