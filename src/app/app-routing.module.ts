import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./users/user/user.component";
import { ServerComponent } from "./servers/server/server.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { RouterModule, Routes } from '@angular/router';
import { Router } from "@angular/router";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./users/auth-guard.servece";
import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    {
        path: 'users', component: UsersComponent,
        children: [
            { path: ':id/:name', component: UserComponent },
        ]
    },
    {
        // path: 'servers', component: ServersComponent,canActivate:[AuthGuard],children: [
        path: 'servers', component: ServersComponent, children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent }
        ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page Not Found!' } },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(appRoutes , {useHash: true} )
        //in this part we can add this: "(appRoutes , {useHash: True})"
        // we add this part to inform my web server that (only care about the Part in the URL Before the Hash so this part will be ignored by the web server)
    ],
    //in this part i told angular that any module imoprt this Module "AppRoutingModule" imort this "RouterModule" Routs 
    exports: [RouterModule]
})

export class AppRoutingModule {

}