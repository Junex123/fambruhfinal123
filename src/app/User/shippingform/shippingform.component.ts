import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../Website/navbar/navbar.component';

@Component({
  selector: 'app-shippingform',
  standalone: true,
  imports: [RouterModule,NavbarComponent],
  templateUrl: './shippingform.component.html',
  styleUrl: './shippingform.component.scss'
})
export class ShippingformComponent {
  constructor(private router: Router) { }



  goToPayment() {
    this.router.navigate(['cart', 'shippingaddress', 'payment']); // Navigate to PaymentComponent
  }
}
