import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AddUserComponent } from '../main/add-user/add-user.component';
import { GetUserComponent } from '../main/get-user/get-user.component';

@Component({
  selector: 'app-fw',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent , FooterComponent , AddUserComponent , GetUserComponent],
  templateUrl: './fw.component.html',
  styleUrl: './fw.component.scss'
})
export class FwComponent {

}
