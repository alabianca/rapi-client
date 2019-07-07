import { Injectable, ElementRef, Component, Injector, InjectionToken } from "@angular/core";
import { Overlay, OverlayConfig, ScrollStrategy, PositionStrategy, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal, ComponentType, PortalInjector, Portal } from "@angular/cdk/portal";
import { ConnectedPosition } from "@angular/cdk/overlay/typings/position/flexible-connected-position-strategy";

export const POPUP_DATA = new InjectionToken<any>("POPUP_DATA");

export interface PopupConfig {
    hasBackdrop?: boolean,
    backdropClass?: string
    width?: string,
    height?: string,
    data?: any,
    origin?: ElementRef,
    maxHeight?: string,
    maxWidth?: string,
    panelClass?: string,
    scrollStrategy?: ScrollStrategy,
    positionStrategy?: PositionStrategy,
}

const DEFAULT_CONFIG: PopupConfig = {
    hasBackdrop: true,
    backdropClass: 'popup-backdrop',
    panelClass: 'popup-container',
    maxHeight: "100px",
    maxWidth: "200px",
}

@Injectable()
export class PopupService {
    constructor(private overlay: Overlay, private injector: Injector) {}

    public open(component: ComponentType<any>, config?: PopupConfig) {
        // Returns an OverlayRef (which is a PortalHost)
        const conf = {...DEFAULT_CONFIG, ...config};
        const overlayRef = this.createOverlay(conf);
        const popupRef = new PopupRef(overlayRef);

        popupRef.backdropClick().subscribe(() => popupRef.close())

        this.attachContainer(overlayRef, conf, popupRef, component);

        return popupRef;
    }

    private createOverlay(conf: PopupConfig) {
        const options = this.getOverlayConfig(conf);
        return this.overlay.create(options);
    }

    private getOverlayConfig(config: PopupConfig): OverlayConfig {
        const positions:ConnectedPosition[] = [
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
            }
        ]
        const positionStrategy = this.overlay.position()
          .flexibleConnectedTo(config.origin)
          .setOrigin(config.origin)
          .withPositions(positions)
        

        const overlayConfig = new OverlayConfig({
          hasBackdrop: config.hasBackdrop,
          backdropClass: config.backdropClass,
          panelClass: config.panelClass,
          scrollStrategy: this.overlay.scrollStrategies.block(),
          positionStrategy
        });
    
        return overlayConfig;
    }

    private createInjector(config: PopupConfig, ref: PopupRef): PortalInjector {
        const injectionTokens = new WeakMap();

        injectionTokens.set(PopupRef, ref);
        injectionTokens.set(POPUP_DATA, config.data);

        return new PortalInjector(this.injector, injectionTokens);
    }

    private attachContainer(overlayRef: OverlayRef, config: PopupConfig, popupRef: PopupRef, component: ComponentType<any>) {
        const injector = this.createInjector(config, popupRef);
        const containerPortal = new ComponentPortal(component, null, injector);
        const containerRef = overlayRef.attach(containerPortal);

        return containerRef.instance;
    }
}

export class PopupRef {
    constructor(private overlayRef: OverlayRef) {}

    public close() {
        this.overlayRef.dispose();
    }

    public backdropClick() {
        return this.overlayRef.backdropClick();
    }
}


