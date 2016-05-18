import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from "angular2/router"
import { HomeComponent } from "../home/home.component.ts"
import { AboutComponent } from "../about/about.component.ts"
import { PortfolioComponent } from "../portfolio/portfolio.component.ts"
import { OurServicesComponent } from "../ourServices/ourServices.component.ts"
import { ContactComponent } from "../contact/contact.component.ts"
import { BlogListComponent } from "../blog/blog-list.component.ts"
import { BlogDetailsComponent } from "../blog/blog-details.component.ts"
import { NotFoundComponent } from "../notFound/notFound.component.ts"
import { PricingComponent } from "../pricing/pricing.component.ts"
import { ShortCodesComponent } from "../shortCodes/shortCodes.component.ts"

@Component({
    selector: "app-component",
    templateUrl: "js/appComponent/app.component.html",
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ HTTP_PROVIDERS, ROUTER_PROVIDERS ]
})
@RouteConfig([
    { path: "/Home", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/About", name: "About", component: AboutComponent },
    { path: "/Portfolio", name: "Portfolio", component: PortfolioComponent },
    { path: "/Services", name: "Services", component: OurServicesComponent },
    { path: "/Contact", name: "Contact", component: ContactComponent },
    { path: "/Blog", name: "Blog", component: BlogListComponent },
    { path: "/BlogDetails", name: "BlogDetails", component: BlogDetailsComponent },
    { path: "/NotFound", name: "NotFound", component: NotFoundComponent },
    { path: "/Pricing", name: "Pricing", component: PricingComponent },
    { path: "/ShortCodes", name: "ShortCodes", component: ShortCodesComponent }
])
export class AppComponent {}