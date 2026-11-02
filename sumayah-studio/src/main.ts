import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // تأكدي أن المسار يطابق مكان ملف app.ts لديك

bootstrapApplication(App)
  .catch((err) => console.error(err));
