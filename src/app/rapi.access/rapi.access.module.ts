import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRootComponent } from './access-root/access-root.component';
import { KeysComponent } from './keys/keys.component';
import { RapiCommonModule } from '../rapi.common/rapi.common.module';
import { KeyService } from './services/key.service';
import { RapiAuthModule } from '../rapi.auth/rapiAuth.module';
import { CreateKeyComponent } from './create-key/create-key.component';
import { EndpointComponent } from './endpoint/endpoint.component';

@NgModule({
  declarations: [AccessRootComponent, KeysComponent, CreateKeyComponent, EndpointComponent],
  imports: [
    CommonModule,
    RapiCommonModule,
    RapiAuthModule,
  ],
  providers: [
    KeyService,
  ],
  entryComponents: [
    CreateKeyComponent,
  ]
})
export class RapiAccessModule { }
