"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(routeParams, heroService) {
        this.routeParams = routeParams;
        this.heroService = heroService;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHero(parseInt(this.routeParams.get('id'), 10)).subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-detail',
            templateUrl: 'hero-detail.component.html',
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
