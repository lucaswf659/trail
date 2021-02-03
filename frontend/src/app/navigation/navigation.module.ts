import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    imports: [
        RouterModule
    ],
    exports: [
        FooterComponent, 
        MenuComponent, 
        HomeComponent, 
        RegionComponent
    ]
})
export class NavigationModule{

}