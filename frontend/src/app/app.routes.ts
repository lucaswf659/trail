import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './navigation/home/home.component';
import { RegionComponent } from './navigation/region/region.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'region', component: RegionComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}