import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import provideHttpClient

const updatedAppConfig = {
  ...appConfig,
  providers: [
    provideHttpClient(),
    ...(appConfig.providers || []), provideAnimationsAsync(), // Merge existing providers, if any
  ]
};

bootstrapApplication(AppComponent, updatedAppConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient() // Add provideHttpClient to make HttpClient available globally
//   ]
// }).catch(err => console.error(err));
