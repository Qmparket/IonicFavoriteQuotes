import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FavoritesPage } from '../favorites/favorites.page';
import { TabsPage } from './tabs.page';


const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'library',
                children: [
                    {
                        path: '',
                        loadChildren: '../library/library.module#LibraryPageModule'
                    },
                    {
                        path: 'quotes',
                        loadChildren: '../quotes/quotes.module#QuotesPageModule'
                    }
                ]
            },
            {
                path: 'quotes',
                children: [
                    {
                        path: '',
                        loadChildren: '../quotes/quotes.module#QuotesPageModule'
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: '../settings/settings.module#SettingsPageModule'
                    }
                ]
            },
            {
                path: 'favorites',
                children: [
                    {
                        path: '',
                        loadChildren: '../favorites/favorites.module#FavoritesPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/favorites',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
