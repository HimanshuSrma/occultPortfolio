import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
// import { ResultDisplayComponent } from '../result-display/result-display.component';
import { LoaderComponent } from "../loader/loader.component";
import { ServicesGridComponent } from '../services-grid/services-grid.component';
import { ResultComponent } from '../result/result.component';
import { NumerologyInput } from '../../../models/numerology.model';
import { NumerologyService } from '../../../services/numerology.service';
import { NumerologyResult } from '../../../models/numerology.model';
import { FirestoreService } from '../../../services/firestore.service';
import { InputFormComponent } from '../input-form/input-form.component';
// import { driverConductordata, numbersRemedy, personalYearData, personalMonthData, personalDayData, nameNumberCharacteristics, englishMobilePairsMeaningArr, hindiMobilePairsMeaningArr, mustExcludePairs, repetitionOfNumbers, nameLettersData} from '../assets/data/data';
@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, InputFormComponent, ResultComponent, LoaderComponent, ServicesGridComponent],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})

export class ReportComponent {
  loader: boolean = true;
  requestDataType:any=null;
  numerologyResult: NumerologyResult | null = null;
  particles: Array<{ x: number; y: number; delay: number }> = [];
  constructor(private fs:FirestoreService,@Inject(PLATFORM_ID) private platformId: Object,private numerologyService: NumerologyService) {
    this.generateParticles();
  }

  noteHTML:any=`<h1 class="text-2xl md:text-3xl font-bold text-center mb-6">Note</h1>
    <p class="mb-4"><strong>Numerology is an ancient metaphysical science</strong> that believes numbers carry unique vibrations which can reflect your personality, desires, strengths, and life direction. Based on your full name and date of birth, this personalized report aims to offer insights into your true self and potential life path.</p>
    <p class="mb-4">This report has been created with care and attention to guide you in understanding yourself more deeply. Every detail shared here is intended for <strong>guidance</strong>, not for <strong>prediction</strong>. The purpose is not to forecast your future, but to help you live more consciously in the present.</p>
    <p class="mb-4">Through this report, you may discover qualities you didn’t know you had, affirm patterns you’ve observed, or receive clarity on certain challenges. But please remember - <strong>numerology does not determine your fate.</strong> It simply offers a map; it is you who decides the journey.</p>
    <p class="mb-4">This report is based solely on numerological principles and does not incorporate astrology, tarot, or any other spiritual system. The goal is to decode the symbolic meaning of your numbers to reveal your natural tendencies, emotional needs, strengths, and life lessons.</p>
    <p class="mb-4">Use this as a tool for reflection, not judgment. Every number - whether it reveals ease or challenge - is a part of your unique journey. Let it spark curiosity and deeper self - awareness.</p>
    <p class="mb-4"><strong>Your future is not fixed.</strong> While numerology can help you recognize your potential and the energies you naturally align with, your choices, mindset, and actions shape your reality. You are the author of your story.</p>
    <p class="mb-4">This report can also support your decision - making process. Whether you’re setting personal goals, improving relationships, or exploring life paths, numerology can help you make choices that feel more authentic and aligned with who you are.</p>
    <p class="mb-4">As you evolve, revisit this report. You may uncover new meanings or see familiar messages in new ways. Growth brings fresh understanding - even to the same numbers.</p>
    <p class="mt-6 italic text-center text-lg text-green-600">Wishing you clarity, confidence, and conscious growth.<br /><span class="not-italic font-semibold">- Good luck from my side!</span></p>
    `

  
  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   window.addEventListener('beforeunload', this.beforeUnloadListener);
    // }
    setTimeout(() => {
      this.uploadAll();
      this.fetchAllData();
    }, 0);
  }
    
  ngOnDestroy(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   window.removeEventListener('beforeunload', this.beforeUnloadListener);
    // }
  }
  
  generateParticles() {
    for (let i = 0; i < 100; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      });
    }
    console.log("..", this.particles);
    
  }

  handleRequestedData(data: any) {
    data = data == 'null' ? null : data
    this.requestDataType = data;
    console.log('Received from child:', data);
  }

  async uploadAll() {
    // await this.fs.uploadData(driverConductordata,'driverConductordata');
    // await this.fs.uploadData(nameLettersData,'nameLettersData');
    // await this.fs.uploadData(nameNumberCharacteristics,'nameNumberCharacteristics');
    // await this.fs.uploadData(numbersRemedy,'numbersRemedy');
    // await this.fs.uploadData(personalDayData,'personalDayData');
    // await this.fs.uploadData(personalMonthData,'personalMonthData');
    // await this.fs.uploadData(personalYearData,'personalYearData');
    // await this.fs.uploadData(repetitionOfNumbers,'repetitionOfNumbers');
    // await this.fs.uploadData(englishMobilePairsMeaningArr,'englishMobilePairsMeaningArr');
    // await this.fs.uploadData(hindiMobilePairsMeaningArr,'hindiMobilePairsMeaningArr');
    // await this.fs.uploadData(mustExcludePairs,'mustExcludePairs');
    // console.group('All data sets uploaded!');
  }


  async fetchAllData(){
    this.fs.numbersData = await this.fs.getData('numbersRemedy');
    this.fs.personalYearData = await this.fs.getData('personalYearData');
    this.fs.personalMonthData = await this.fs.getData('personalMonthData');
    this.fs.personalDayData = await this.fs.getData('personalDayData');
    this.fs.nameNumberCharacteristics = await this.fs.getData('nameNumberCharacteristics');
    this.fs.englishMobilePairsMeaningArr = await this.fs.getData('englishMobilePairsMeaningArr');
    // this.fs.hindiMobilePairsMeaningArr = await this.fs.getData('hindiMobilePairsMeaningArr');
    this.fs.repetitionOfNumbers = await this.fs.getData('repetitionOfNumbers');
    this.fs.nameLettersData = await this.fs.getData('nameLettersData'); 
    this.fs.reports = await this.fs.getData('reports'); 
    console.group('All data fetched!', this.fs.reports);
    this.loader = false;
  };
  

  handleCalculation(data: NumerologyInput) {
    this.numerologyResult = this.numerologyService.calculateAll(
      data.name,
      data.dob,
      data.gender,
      data.mobile
    );
  }

  reset() {
    this.numerologyResult = null;
  }

  beforeUnloadListener = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = ''; // Required for Chrome to show the prompt
    return '';
  };

  
  // Disable Right-click (context menu)
  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    if(window.location.hostname != 'localhost') {
      event.preventDefault(); // Prevent the context menu from showing
      console.log('Right-click is disabled');
    }
  }

  // Disable the Ctrl key and specific combinations like Ctrl+C, Ctrl+V
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    // Block Ctrl key (any key with Ctrl pressed)
    if (event.ctrlKey) {
      if(window.location.hostname != 'localhost') {
        event.preventDefault();
        event.stopPropagation();
        console.log('Ctrl key press is disabled');
      }
    }

    // Block Ctrl+C (Copy)
    if (event.ctrlKey && event.key === 'c') {
      if(window.location.hostname != 'localhost') {
        event.preventDefault();
        console.log('Ctrl+C (Copy) is disabled');
      }
    }

    // // Block Ctrl+V (Paste)
    // if (event.ctrlKey && event.key === 'v') {
    //   event.preventDefault();
    //   console.log('Ctrl+V (Paste) is disabled');
    // }

    // // Block Ctrl+A (Select All)
    // if (event.ctrlKey && event.key === 'a') {
    //   event.preventDefault();
    //   console.log('Ctrl+A (Select All) is disabled');
    // }

  }
  
}
