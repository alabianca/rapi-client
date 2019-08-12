import { Directive, Renderer2, ElementRef, Input, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({
    selector: '[rp-copy]'
})
export class CopyToCliboardDirective {

    @Input() textToCopy: string;
    @Output() copied = new EventEmitter<string>();

    constructor(
        private renderer: Renderer2,
        private el: ElementRef,
    ) {}

    @HostListener('click')
    public copy() {
        const el: HTMLTextAreaElement = this.renderer.createElement('textarea');
        el.value = this.textToCopy;
        el.setAttribute('readonly', '');
        
        this.renderer.setStyle(el, 'position', 'absolute');
        this.renderer.setStyle(el, 'left', '-9999px');

        this.renderer.appendChild(document.body, el);

        el.select();

        document.execCommand('copy');

        this.renderer.removeChild(document.body, el);
        
        this.copied.emit(this.textToCopy);
        
    }
}