var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, Listen } from '@stencil/core';
let AppRoot = class AppRoot {
    /**
     * Handle service worker updates correctly.
     * This code will show a toast letting the
     * user of the PWA know that there is a
     * new version available. When they click the
     * reload button it then reloads the page
     * so that the new service worker can take over
     * and serve the fresh content
     */
    async onSWUpdate() {
        const toast = await this.toastCtrl.create({
            message: 'New version available',
            showCloseButton: true,
            closeButtonText: 'Reload'
        });
        await toast.present();
        await toast.onWillDismiss();
        window.location.reload();
    }
    render() {
        return (h("ion-app", null,
            h("ion-router", { useHash: false },
                h("ion-route", { url: "/", component: "app-home" }),
                h("ion-route", { url: "/profile/:name", component: "app-profile" })),
            h("ion-nav", null)));
    }
};
__decorate([
    Prop({ connect: 'ion-toast-controller' })
], AppRoot.prototype, "toastCtrl", void 0);
__decorate([
    Listen('window:swUpdate')
], AppRoot.prototype, "onSWUpdate", null);
AppRoot = __decorate([
    Component({
        tag: 'app-root',
        styleUrl: 'app-root.css'
    })
], AppRoot);
export { AppRoot };
