import { Route } from "@angular/router";
import { ClientComponent } from "./client.component";
import { ClientHomeComponent } from "./client-home.component";
import { ClientPromotionsComponent } from "./client-promotions.component";

export const CLIENT_ROUTES: Route[] = [
    { path: '', component: ClientComponent },
    { path: 'home', component: ClientHomeComponent },
    { path: 'promotions', component: ClientPromotionsComponent }
]