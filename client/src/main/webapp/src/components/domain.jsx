"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@stencil/core");
var Domain = /** @class */ (function () {
    function Domain() {
        this.time = Date.now();
    }
    Domain.prototype.componentDidLoad = function () {
        var _this = this;
        this.timer = window.setInterval(function () {
            _this.time = Date.now();
        }, 1000);
    };
    Domain.prototype.componentDidUnload = function () {
        window.clearInterval(this.timer);
    };
    Domain.prototype.render = function () {
        var time = new Date(this.time).toLocaleTimeString();
        return (<span>{time}</span>);
    };
    __decorate([
        core_1.State()
    ], Domain.prototype, "time", void 0);
    Domain = __decorate([
        core_1.Component({
            tag: 'app-domain'
        })
    ], Domain);
    return Domain;
}());
exports.Domain = Domain;
