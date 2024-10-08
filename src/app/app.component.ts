import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { SingleCategoryComponent } from "./pages/single-category/single-category.component";
import { CatagoryNavbarComponent } from "./layout/catagory-navbar/catagory-navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { PostCardComponent } from "./layout/post-card/post-card.component";
import { SubscriptionFormComponent } from "./subscription-form/subscription-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SingleCategoryComponent, CatagoryNavbarComponent, FooterComponent, PostCardComponent, SubscriptionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogApp';
}
