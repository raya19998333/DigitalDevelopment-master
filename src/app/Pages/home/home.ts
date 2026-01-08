import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], // هذا مهم جدًا
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  userName: string = '';
  selectedTrack: string = '';
  motivationalMessage: string = '';
  showMessage: boolean = false;

  aiDataMessages: string[] = [
    'أنت تبني مستقبل التكنولوجيا! استمر في التعلم والإبداع',
    'البيانات هي نفط العصر الحديث، وأنت تتعلم كيف تستخرج منها الذهب',
    'كل خوارزمية تتعلمها اليوم، هي أداة قوية في يدك غداً',
    'الذكاء الاصطناعي يغير العالم، وأنت جزء من هذا التغيير',
    'من تحليل البيانات إلى بناء النماذج، رحلتك مذهلة!',
    'أنت لا تتعلم برمجة فقط، بل تتعلم كيف تعلّم الآلات التفكير',
    'كل dataset تحللها تجعلك أقرب إلى إتقان علم البيانات',
    'الذكاء الاصطناعي ليس سحراً، بل علم تتقنه أكثر كل يوم',
    'أنت تبني الجسر بين البيانات والقرارات الذكية',
    'استمر! المستقبل يحتاج لخبراء مثلك في الذكاء الاصطناعي',
  ];

  webDevMessages: string[] = [
    'كل تطبيق تبنيه هو إضافة لبصمتك الرقمية في العالم',
    'من الكود إلى واجهة مستخدم رائعة، أنت تصنع التجربة!',
    'الويب هو لوحتك الفنية، والكود هو فرشاتك',
    'أنت لا تكتب أكواداً فقط، بل تبني تجارب تغير حياة المستخدمين',
    'كل سطر كود تكتبه يجعلك مطور ويب أفضل',
    'من HTML إلى Angular، رحلتك في تطوير الويب مُلهمة!',
    'التطبيقات التي تبنيها اليوم قد تخدم الملايين غداً',
    'استمر في التعلم! عالم تطوير الويب مليء بالإمكانيات',
    'أنت تحول الأفكار إلى واقع تفاعلي على الشاشة',
    'كل مشروع تنجزه هو خطوة نحو احترافية أكبر في تطوير الويب',
  ];

  onSubmit() {
    if (this.userName && this.selectedTrack) {
      this.showMessage = true;
      this.generateMessage();
    }
  }

  generateMessage() {
    let messages: string[] = [];
    if (this.selectedTrack === 'ai') messages = this.aiDataMessages;
    else if (this.selectedTrack === 'web') messages = this.webDevMessages;

    const randomIndex = Math.floor(Math.random() * messages.length);
    this.motivationalMessage = `${this.userName}، ${messages[randomIndex]}`;
  }

  getAnother() {
    this.generateMessage();
  }

  reset() {
    this.userName = '';
    this.selectedTrack = '';
    this.motivationalMessage = '';
    this.showMessage = false;
  }
}
