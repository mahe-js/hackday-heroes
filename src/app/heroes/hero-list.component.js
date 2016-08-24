"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var hero_detail_component_1 = require('./hero-detail.component');
var HeroListComponent = (function () {
    function HeroListComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.selectedHero = {};
    }
    HeroListComponent.prototype.ngOnInit = function () {
        this.heroes = this.heroService.getHeroes();
    };
    HeroListComponent.prototype.onSelect = function (hero) {
        var link = ['Hero', { id: hero.id }];
        this.router.navigate(link);
    };
    HeroListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-list',
            templateUrl: 'hero-list.component.html',
            styleUrls: ['hero-list.component.css'],
            directives: [hero_detail_component_1.HeroDetailComponent]
        })
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
