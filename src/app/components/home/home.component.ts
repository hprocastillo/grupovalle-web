import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RequestsService} from "../../services/requests.service";
import {Request} from "../../interfaces/request";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public requestForm: FormGroup;
  public messageFormType: string = "";
  public messageFormContent: string = "";

  constructor(private fb: FormBuilder, private requestService: RequestsService) {
    this.requestForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  sendRequest() {
    if (this.requestForm.valid) {
      let newRequest: Request;
      newRequest = this.requestForm.value;
      newRequest.createdAt = Timestamp.fromDate(new Date());

      try {
        this.requestService.addRequest(newRequest)
          .then(res => {
            console.log(res);
            this.messageFormType = "success";
            this.messageFormContent = "¡Su consulta fue enviada con éxito! Nos comunicaremos lo antes posible.";
            this.requestForm.reset();
            setTimeout(() => {
              this.messageFormType = "";
              this.messageFormContent = "";
            }, 5000);

          })
          .catch(e => console.log(e));

      } catch (e) {
        console.log(e);
        this.messageFormType = "danger";
        this.messageFormContent = "Su mensaje no pudo ser enviado. Inténtelo nuevamente.";
        this.requestForm.reset();
        setTimeout(() => {
          this.messageFormType = "";
          this.messageFormContent = "";
        }, 5000);

      }
    } else {
      this.messageFormType = "warning";
      this.messageFormContent = "Debe completar todos los campos del formulario.";
      setTimeout(() => {
        this.messageFormType = "";
        this.messageFormContent = "";
      }, 5000);

    }

  }

}
