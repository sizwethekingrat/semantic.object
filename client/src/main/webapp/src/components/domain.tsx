import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-domain'
})
export class Domain {

    timer: number;

    @State() time: number = Date.now();

    componentDidLoad() {
        this.timer = window.setInterval(() => {
            this.time = Date.now();
        }, 1000);
    }

    componentDidUnload() {
        window.clearInterval(this.timer);
    }

    render() {
        const time = new Date(this.time).toLocaleTimeString();

        return (
            <span>{ time }</span>
        );
    }
}