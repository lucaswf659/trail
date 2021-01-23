import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RegionComponent } from './region/region.component';

@NgModule({
    declarations: [
        FooterComponent, 
        MenuComponent, 
        HomeComponent, 
        RegionComponent
    ],
    imports: [],
    exports: [
        FooterComponent, 
        MenuComponent, 
        HomeComponent, 
        RegionComponent
    ]
})
export class NavigationModule{

}