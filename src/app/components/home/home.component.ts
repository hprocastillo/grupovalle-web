import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RequestsService} from "../../services/requests.service";
import {Request} from "../../interfaces/request";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  requestForm: FormGroup;

  constructor(private fb: FormBuilder, private requestService: RequestsService) {
    this.requestForm = this.fb.group({
      fullName: ['',[Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  sendRequest() {
    let newRequest: Request;
    console.log("Formulario" + this.requestForm.value);

    if (this.requestForm.valid) {
      newRequest = this.requestForm.value;
      newRequest.createdAt = Timestamp.fromDate(new Date());
      this.requestService.addRequest(newRequest)
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

}
