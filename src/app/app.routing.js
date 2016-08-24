"use strict";
var router_1 = require('@angular/router');
var hero_list_component_1 = require('./hero-list.component');
var hero_detail_component_1 = require('./hero-detail.component');
var appRoutes = [
    {
        path: 'heroes',
        component: hero_list_component_1.HeroListComponent,
        data: {
            title: 'Heroes List'
        }
    },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
