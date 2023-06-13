import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent implements AfterViewInit{

  @ViewChild('clientsForm') clientsForm!: NgForm;

  ngAfterViewInit(): void {
    console.log(this);
  }
}
