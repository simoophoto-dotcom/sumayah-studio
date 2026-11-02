import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'sumayah-studio';
  selectedPackage: string = '';

  bookPackage(packageName: string) {
    this.selectedPackage = packageName;
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  sendToWhatsApp(event: Event) {
    event.preventDefault();

    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const eventDate = (document.getElementById('eventDate') as HTMLInputElement).value;
    const notes = (document.getElementById('notes') as HTMLTextAreaElement).value;

    const whatsappNumber = '96897088082';

    const message = `مرحباً سمية استوديو، أود حجز باقة تصوير:\n` +
                    `- الباقة المختارة: ${this.selectedPackage || 'لم يتم تحديد باقة محددة'}\n` +
                    `- الاسم الكامل: ${fullName}\n` +
                    `- البريد الإلكتروني: ${email}\n` +
                    `- رقم الهاتف: ${phone}\n` +
                    `- تاريخ المناسبة: ${eventDate}\n` +
                    `- ملاحظات إضافية: ${notes || 'لا يوجد'}`;

    // ترميز الرسالة للرابط
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // إنشاء رابط مؤقت والنقر عليه برمجياً لضمان فتحه في نافذة جديدة خارج بيئة Codespaces
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}
