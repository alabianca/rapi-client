import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[rapi-setup-header]'
})
export class RapiSetupHeaderDirective implements OnInit {
    constructor(private el: ElementRef, private renderer: Renderer2) {

    }

    public ngOnInit() {
        const element = this.el.nativeElement as HTMLElement
        this.renderer.setStyle(element, 'fontSize', '32px')
    }
}