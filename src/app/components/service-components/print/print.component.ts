import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NumerologyResult, LoShuNumber, excessNumberVastuDoshDirection, vastuLoShuGrid, monthNames, multiYearBlocks, yearlyMonths, readingGuide, reportYears } from '../../../models/numerology.model';
import { mustExcludePairs } from '../../../../assets/data/data';
import { NumerologyService } from '../../../services/numerology.service';
import { FirestoreService } from '../../../services/firestore.service';
import { NgxPrintModule } from 'ngx-print';
import dayjs from 'dayjs';
@Component({
  selector: 'app-print',
  imports: [CommonModule, NgxPrintModule, HttpClientModule],
  standalone: true,
  templateUrl: './print.component.html',
  styleUrl: './print.component.scss',
})
export class PrintComponent implements OnChanges {
  @Output() requestDataInResult = new EventEmitter<string>();
  @Input() result!: NumerologyResult;
  @Input() requestDataType: any;
  @Input() reportTimeInYear: any;
  combinationData: any = null;
  driverConductordata: any = null;
  numbersRemedy: any = null;
  nameIsLucky: boolean = false;
  mobileIsLucky: boolean = false;
  personalYearData: any = null;
  personalMonthData: any = null;
  personalDayData: any = null;
  personalYear: any;
  personalMonth: any;
  personalDay: any;
  nameData: any;
  mobileData: any = [];
  mobileNumberTotal: number | null = null;
  mobileCompound: number | null = null;
  missingRemediesMap: any;
  excessRemediesMap: any = [];
  repeatedNumbers: any = [];
  nameLettersData: any;
  nameLettersArr: string[] = [];
  vastuGreyAreaDirection: any = [];
  multiYearBlocks: multiYearBlocks[] = [];
  yearlyMonths: yearlyMonths[] = []
  readingGuide:any;
  // ##################################################
  numYears: number = 3; // can be set via UI dropdown
  noteHTML:any;
  downloadFileName: string = 'report';

  
  constructor(private numerologyService: NumerologyService, private firestoreService: FirestoreService) {
    this.readingGuide = readingGuide;
    this.noteHTML = this.firestoreService?.reports?.numerologyNoteHTML?.html;
  }
  
  async ngOnInit(): Promise<void> {
    this.numYears = this.reportTimeInYear;
    if(this.numYears){
      this.requestDataType = 'full-report';
      this.generateReports();
    }
    this.downloadFileName = `${this.result?.name || 'report'}_${this.requestDataType}_${dayjs().format('YYYYMMDD_HHmmss')}`;
  }

  // Main generator - rebuilds arrays whenever numYears changes
  generateReports(): void {
    this.yearlyMonths = [];
    this.multiYearBlocks = [];

    const basePY = this.result.personalYear;
    const startYear = dayjs().year();
    const startMonth0 = dayjs().month(); // 0-based index; Jan = 0 :contentReference[oaicite:1]{index=1}
    const totalMonths = this.numYears * 12;

    for (let i = 0; i < totalMonths; i++) {
      const monthIdx0 = (startMonth0 + i) % 12;
      const calMonth = monthIdx0 + 1;
      const yearOffset = Math.floor((startMonth0 + i) / 12);
      const calYear = startYear + yearOffset;

      const pYearForMonth = ((basePY + yearOffset - 1) % 9) + 1;
      const pMonthNo = ((pYearForMonth + calMonth - 1) % 9) || 9;

      this.yearlyMonths.push({
        calendarMonth: calMonth,
        calendarYear: calYear,
        personalMonthNo: pMonthNo,
        data: this.firestoreService.personalMonthData[pMonthNo],
      });
    }

    const yearsSpanned = Math.floor((startMonth0 + totalMonths - 1) / 12) + 1;

    for (let y = 0; y < yearsSpanned; y++) {
      const calYear = startYear + y;
      const pYearNo = ((basePY + y - 1) % 9) + 1;

      this.multiYearBlocks.push({
        calendarYearLabel: `${calYear}`,
        personalYearNo: pYearNo,
        yearData: this.firestoreService.personalYearData[pYearNo],
      });
    }
  }

  monthName(n: number): string {
    return monthNames[n - 1];
  }

  loadCurrentPeriods(): void {
    this.personalYear =
      this.firestoreService.personalYearData[this.result?.personalYear];
    this.personalMonth =
      this.firestoreService.personalMonthData[this.result?.personalMonth];
    this.personalDay =
      this.firestoreService.personalDayData[this.result?.personalDay];
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (this.result) {
      console.log('result', this.result);
      this.setCombination();
    }

    this.missingRemediesMap = await Promise.all(
      this.result.missingNumbers.map(async (num: any) => {
        const data = (await this.getDataForNumber(num, 'missing')) || {};
        return {
          number: num,
          title: data.title,
          effect: data.effect,
          missingRemedies: data.missingRemedies,
          excessRemedies: data.excessRemedies,
        };
      })
    );

    this.excessRemediesMap = await Promise.all(
      this.result.excessNumbers.map(async (num: any) => {
        const data = (await this.getDataForNumber(num, 'excess')) || {};
        return {
          number: num,
          title: data.title,
          effect: data.effect,
          missingRemedies: data.missingRemedies,
          excessRemedies: data.excessRemedies,
        };
      })
    );

    // this.missingRemediesMap = this.result.missingNumbers.map((num) => {
    //   const data = this.getDataForNumber(num);
    //   return {
    //     number: num,
    //     title: data?.title,
    //     effect: data?.effect,
    //     remedies: data?.remedies,
    //   };
    // });

    // this.excessRemediesMap = this.result.excessNumbers.map((num) => {
    //   const data = this.getDataForNumber(num);
    //   return {
    //     number: num,
    //     title: data?.title,
    //     effect: data?.effect,
    //     remedies: data?.remedies,
    //   };
    // });

    // this.missingRemediesMap = this.result.missingNumbers.map((num) => ({
    //   number: num,
    //   title: this.getDataForNumber(num, 'title'),
    //   effect: this.getDataForNumber(num, 'effect'),
    //   remedies: this.getDataForNumber(num, 'missing'),
    // }));

    // this.excessRemediesMap = this.result.excessNumbers.map((num) => ({
    //   number: num,
    //   title: this.getDataForNumber(num, 'title'),
    //   effect: this.getDataForNumber(num, 'effect'),
    //   remedies: this.getDataForNumber(num, 'excess'),
    // }));
  }

  private async setCombination(): Promise<void> {
    const lifePath = String(this.result?.lifePath);
    const destiny = String(this.result?.destiny);
    this.repeatedNumbers = await this.processLoShuGridForRepeatedNumbers();
    this.combinationData = await this.fetchDriverConductorData(
      lifePath,
      destiny
    );
    const findLuckyNameNo = [
      ...this.combinationData.luckyNameNumbers,
      ...this.combinationData.luckyNumbers,
    ];
    this.nameIsLucky =
      this.result.nameNumber == 5
        ? true
        : findLuckyNameNo.includes(Number(this.result.nameNumber));
    // this.nameIsLucky = this.result.nameNumber == 5 ? true : findLuckyNameNo.includes(Number(this.result.nameTotalSum));
    this.personalYear =
      this.firestoreService.personalYearData[this.result?.personalYear];
    this.personalMonth =
      this.firestoreService.personalMonthData[this.result?.personalMonth];
    this.personalDay =
      this.firestoreService.personalDayData[this.result?.personalDay];
    const fetchNameNumData =
      this.result.nameTotalSum <= 108
        ? this.result.nameTotalSum
        : this.result.nameNumber;
    this.nameData =
      this.firestoreService.nameNumberCharacteristics[fetchNameNumData];
    this.mobileData = this.setMobileData(this.result.mobileNumberPairs);
    this.mobileNumberTotal = this.numerologyService.calculateMobileSum(
      this.result.mobileNumber
    );
    this.mobileCompound = this.numerologyService.reduceToSingleDigit(
      this.result.mobileNumber
    );
    this.mobileIsLucky = mustExcludePairs.data.every(
      (excluded: any) =>
        !this.result.mobileNumberPairs.includes(Number(excluded))
    );
    this.nameLettersArr = this.result.name
      .replace(/\s/g, '')
      .toUpperCase()
      .split('');
    this.nameLettersData = this.firestoreService.nameLettersData;
    // this.fetchNameLettersData(this.nameLettersArr);
  }

  async getDataForNumber(
    number: number,
    type: string
  ): Promise<{
    title: string[];
    effect: string[];
    missingRemedies: string[];
    excessRemedies: string[];
  }> {
    const numKey = number.toString();
    const data = this.firestoreService.numbersData[numKey] || {};
    return {
      title: data.title || [],
      effect: data.missingEffect || [],
      missingRemedies: data.missingRemedy || [],
      excessRemedies: data.excessRemedy || [],
    };
  }

  setMobileData(mobileNoPairs: any[]) {
    let arr: { combo: number; effect: string; type: number }[] = [];
    mobileNoPairs.forEach(async (element) => {
      // const matched = this.firestoreService.englishMobilePairsMeaningArr?.find((item:any) => item.combo === element);
      const matched =
        this.firestoreService.englishMobilePairsMeaningArr?.[
          element?.toString()
        ];
      if (matched) {
        arr.push(matched);
      }
    });
    return arr;
  }

  async processLoShuGridForRepeatedNumbers() {
    let arr = [];
    this.vastuGreyAreaDirection = this.result.missingNumbers.map((num: keyof typeof vastuLoShuGrid) => vastuLoShuGrid[num]);
    for (const digitStr in this.result.loShuGrid) {
      const digitKey =
        digitStr as unknown as keyof typeof this.result.loShuGrid;
      if (this.result.loShuGrid[digitKey] > 2) {
        this.vastuGreyAreaDirection.push(
          excessNumberVastuDoshDirection[digitKey]
        );
        let key = String(digitKey) + '_' + this.result.loShuGrid[digitKey];
        let data = this.firestoreService.repetitionOfNumbers[key];
        arr.push(data);
      }
    }
    return arr;
  }

  get hasCombinationData(): boolean {
    return !!this.combinationData;
  }

  get loShuDisplayOrder(): LoShuNumber[] {
    return [4, 9, 2, 3, 5, 7, 8, 1, 6];
  }

  get vastuDirectionDisplayOrder(): any {
    return ['SE', 'S', 'SW', 'E', 'C', 'W', 'NE', 'N', 'NW'];
  }

  // Store open index per accordion group
  openIndices: { [key: string]: number | null } = {};

  toggle(group: string, index: number): void {
    this.openIndices[group] = this.openIndices[group] === index ? null : index;
  }

  isOpen(group: string, index: number): boolean {
    return this.openIndices[group] === index;
  }

  async fetchDriverConductorData(lifePath: string, destiny: string) {
    const doc = await this.firestoreService.getDriverConductorData(lifePath);
    const result = doc?.[destiny];
    // console.log(`Match for LifePath ${lifePath} and Destiny ${destiny}:`, result);
    return result;
  }

  async fetchData(json: string, key?: any) {
    const result = await this.firestoreService.getData(json, key);
    // console.log(`Match data for ${json} -> ${key}:`, result);
    return result;
  }
  goBack() {
    this.requestDataInResult.emit('null');
  }
}
