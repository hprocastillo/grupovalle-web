import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"grupovalle-sistemas","appId":"1:1052925877594:web:9f6b53ae42877790bf6763","storageBucket":"grupovalle-sistemas.appspot.com","apiKey":"AIzaSyBCAoe3BuhmxTcdjc1f-u2RO3iDQvVmYnQ","authDomain":"grupovalle-sistemas.firebaseapp.com","messagingSenderId":"1052925877594","measurementId":"G-5431BWSF5R"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
