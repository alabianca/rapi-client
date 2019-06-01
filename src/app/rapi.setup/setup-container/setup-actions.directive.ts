import { Directive, Input, ElementRef, OnInit, TemplateRef, ViewContainerRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[rapi-setup-actions]'
})
export class RapiSetupActionsDirective implements OnInit {
    @Input() public  align: string;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2) {

    }

    public ngOnInit() {
        const element: HTMLElement = this.el.nativeElement;
        this.renderer.setStyle(element, 'display', 'flex')
        switch (this.align) {
            case "end":
                this.renderer.setStyle(element,'justify-content', 'flex-end')
                break;
            case "start":
                this.renderer.setStyle(element, 'justify-content', 'flex-start')
                break;
            case "between":
                this.renderer.setStyle(element, 'justify-content', 'space-between')
                break;
            default:
                this.renderer.setStyle(element, 'justify-content', 'flex-start')

        }
    }


}