import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { first } from 'rxjs/operators';

import {ListComponent} from '../baterias/list.component';
import { HttpBaterias } from '../_services';
import { HttpLineas } from '../_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    baterias = null;
    lineas = null;
    todayString: string = new Date().toDateString();
    currentJustify = 'start'

    // Loader
    @ViewChild("loader") loader: ElementRef

    // Elementos del voltaje de las baterias
    @ViewChild("bat1") bat1: ElementRef
    @ViewChild("bat2") bat2: ElementRef
    @ViewChild("bat3") bat3: ElementRef
    @ViewChild("bat4") bat4: ElementRef
    @ViewChild("bat5") bat5: ElementRef
    // Datos de la db
    // @ViewChild("batdb") batdb: ElementRef

    // Elementos de la temperatura de las baterias
    @ViewChild("temp1") temp1: ElementRef
    @ViewChild("temp2") temp2: ElementRef
    @ViewChild("temp3") temp3: ElementRef
    @ViewChild("temp4") temp4: ElementRef
    @ViewChild("temp5") temp5: ElementRef
    // Datos de la db
    // @ViewChild("tempdb") tempdb: ElementRef

    // Elementos de corriente
    @ViewChild("cor1") cor1: ElementRef
    @ViewChild("cor2") cor2: ElementRef
    @ViewChild("cor3") cor3: ElementRef
    @ViewChild("cor4") cor4: ElementRef
    @ViewChild("cor5") cor5: ElementRef
    
    // Charts
    // Voltaje baterias
    @ViewChild("chartvol1") chartvol1: ElementRef
    @ViewChild("chartvol1txt") chartvol1txt: ElementRef
    @ViewChild("chartvol2") chartvol2: ElementRef
    @ViewChild("chartvol2txt") chartvol2txt: ElementRef
    @ViewChild("chartvol3") chartvol3: ElementRef
    @ViewChild("chartvol3txt") chartvol3txt: ElementRef
    @ViewChild("chartvol4") chartvol4: ElementRef
    @ViewChild("chartvol4txt") chartvol4txt: ElementRef
    @ViewChild("chartvol5") chartvol5: ElementRef
    @ViewChild("chartvol5txt") chartvol5txt: ElementRef
    // Temperatura baterias
    @ViewChild("charttemp1") charttemp1: ElementRef
    @ViewChild("charttemp1txt") charttemp1txt: ElementRef
    @ViewChild("charttemp2") charttemp2: ElementRef
    @ViewChild("charttemp2txt") charttemp2txt: ElementRef
    @ViewChild("charttemp3") charttemp3: ElementRef
    @ViewChild("charttemp3txt") charttemp3txt: ElementRef
    @ViewChild("charttemp4") charttemp4: ElementRef
    @ViewChild("charttemp4txt") charttemp4txt: ElementRef
    @ViewChild("charttemp5") charttemp5: ElementRef
    @ViewChild("charttemp5txt") charttemp5txt: ElementRef

    // Corriente
    @ViewChild("chartcor1") chartcor1: ElementRef
    @ViewChild("chartcor1txt") chartcor1txt: ElementRef
    @ViewChild("chartcor2") chartcor2: ElementRef
    @ViewChild("chartcor2txt") chartcor2txt: ElementRef
    @ViewChild("chartcor3") chartcor3: ElementRef
    @ViewChild("chartcor3txt") chartcor3txt: ElementRef
    @ViewChild("chartcor4") chartcor4: ElementRef
    @ViewChild("chartcor4txt") chartcor4txt: ElementRef
    @ViewChild("chartcor5") chartcor5: ElementRef
    @ViewChild("chartcor5txt") chartcor5txt: ElementRef

    constructor(private httpBaterias: HttpBaterias, private httpLineas: HttpLineas) {}

    ngOnInit() {
      this.ngAfterViewInit
        this.httpBaterias.getAll()
            .pipe(first())
            .subscribe(baterias => this.baterias = baterias); 
        this.httpLineas.getAll()
            .pipe(first())
            .subscribe(lineas => this.lineas = lineas);
    }

    ngAfterViewInit() {
        setTimeout(() => {
          this.loader.nativeElement.style.display = 'none'
        }, 10000)
        const time = setInterval(() => {
          // Elementos del voltaje de las baterias
          let bat1 = this.bat1.nativeElement
          let bat2 = this.bat2.nativeElement
          let bat3 = this.bat3.nativeElement
          let bat4 = this.bat4.nativeElement
          let bat5 = this.bat5.nativeElement
          // Datos de la db
          // let batdb = this.batdb.nativeElement

          // Elementos de la temperatura de las baterias
          let temp1 = this.temp1.nativeElement
          let temp2 = this.temp2.nativeElement
          let temp3 = this.temp3.nativeElement
          let temp4 = this.temp4.nativeElement
          let temp5 = this.temp5.nativeElement
          // Datos de la db
          // let tempdb = this.tempdb.nativeElement

          // Elementos de corriente 
          let cor1 = this.cor1.nativeElement
          let cor2 = this.cor2.nativeElement
          let cor3 = this.cor3.nativeElement
          let cor4 = this.cor4.nativeElement
          let cor5 = this.cor5.nativeElement

          // Charts
          // Voltaje baterias
          let chartvol1 = this.chartvol1.nativeElement
          let chartvol1txt = this.chartvol1txt.nativeElement
          let chartvol2 = this.chartvol2.nativeElement
          let chartvol2txt = this.chartvol2txt.nativeElement
          let chartvol3 = this.chartvol3.nativeElement
          let chartvol3txt = this.chartvol3txt.nativeElement
          let chartvol4 = this.chartvol4.nativeElement
          let chartvol4txt = this.chartvol4txt.nativeElement
          let chartvol5 = this.chartvol5.nativeElement
          let chartvol5txt = this.chartvol5txt.nativeElement
          // Temperatura baterias
          let charttemp1 = this.charttemp1.nativeElement
          let charttemp1txt = this.charttemp1txt.nativeElement
          let charttemp2 = this.charttemp2.nativeElement
          let charttemp2txt = this.charttemp2txt.nativeElement
          let charttemp3 = this.charttemp3.nativeElement
          let charttemp3txt = this.charttemp3txt.nativeElement
          let charttemp4 = this.charttemp4.nativeElement
          let charttemp4txt = this.charttemp4txt.nativeElement
          let charttemp5 = this.charttemp5.nativeElement
          let charttemp5txt = this.charttemp5txt.nativeElement   
          
          // Corriente
          let chartcor1 = this.chartcor1.nativeElement
          let chartcor1txt = this.chartcor1txt.nativeElement
          let chartcor2 = this.chartcor2.nativeElement
          let chartcor2txt = this.chartcor2txt.nativeElement
          let chartcor3 = this.chartcor3.nativeElement
          let chartcor3txt = this.chartcor3txt.nativeElement
          let chartcor4 = this.chartcor4.nativeElement
          let chartcor4txt = this.chartcor4txt.nativeElement
          let chartcor5 = this.chartcor5.nativeElement
          let chartcor5txt = this.chartcor5txt.nativeElement
          
          // Porcentaje a restar y sumar cada 05 segundos en el voltaje
          let porcentaje = 0.8
          // Porcentaje a restar y sumar cada 05 segundos en la temperatura
          let porcentajeTemp = 1

          // Porcentaje para restar y sumar cada 05 segundos en la corriente 
          let porcentajeCor = 1

          if(
            // Voltaje baterias
            bat1.innerHTML <= 13 ||
            bat2.innerHTML <= 13 ||
            bat3.innerHTML <= 13 ||
            bat4.innerHTML <= 13 ||
            bat5.innerHTML <= 13 ||
            // Datos de la db
            // batdb.innerHTML <= 13 ||
            // Temperatura baterias
            temp1.innerHTML <= 20 ||
            temp2.innerHTML <= 20 ||
            temp3.innerHTML <= 20 ||
            temp4.innerHTML <= 20 ||
            temp5.innerHTML <= 20 ||
            // Datos de la db
            // tempdb.innerHTML <= 20 ||

            // Corriente
            cor1.innerHTML <= 20 ||
            cor2.innerHTML <= 20 ||
            cor3.innerHTML <= 20 ||
            cor4.innerHTML <= 20 ||
            cor5.innerHTML <= 20 
            ) {
            setTimeout(function() {
              // Voltaje de las baterias
              let resultado1 = bat1.innerHTML = parseFloat(bat1.innerHTML) - porcentaje
              chartvol1.style.height = '44vh'
              chartvol1.style.display = 'flex'
              chartvol1txt.innerHTML = resultado1 + 'V'
              let resultado2 = bat2.innerHTML = parseFloat(bat2.innerHTML) - porcentaje
              chartvol2.style.height = '39vh'
              chartvol2.style.display = 'flex'
              chartvol2txt.innerHTML = resultado2 + 'V'
              let resultado3 = bat3.innerHTML = parseFloat(bat3.innerHTML) - porcentaje
              chartvol3.style.height = '35vh'
              chartvol3.style.display = 'flex'
              chartvol3txt.innerHTML = resultado3 + 'V'
              let resultado4 = bat4.innerHTML = parseFloat(bat4.innerHTML) - porcentaje
              chartvol4.style.height = '32vh'
              chartvol4.style.display = 'flex'
              chartvol4txt.innerHTML = resultado4 + 'V'
              let resultado5 = bat5.innerHTML = parseFloat(bat5.innerHTML) - porcentaje
              chartvol5.style.height = '37vh'
              chartvol5.style.display = 'flex'
              chartvol5txt.innerHTML = resultado5 + 'V'
              // Datos de la db
              // let resultadodb = batdb.innerHTML = parseFloat(batdb.innerHTML) - porcentaje
              // Voltaje de las baterias
              //Se determina que haya solo dos decimales despues de la coma
              bat1.innerHTML = resultado1.toFixed(2)
              bat2.innerHTML = resultado2.toFixed(2)
              bat3.innerHTML = resultado3.toFixed(2)
              bat4.innerHTML = resultado4.toFixed(2)
              bat5.innerHTML = resultado5.toFixed(2)
              // Datos de la db
              // batdb.innerHTML = resultadodb.toFixed(2)

              // Temperatura de las baterias
              let resultadoTemp1 = temp1.innerHTML = parseFloat(temp1.innerHTML) - porcentajeTemp
              charttemp1.style.height = '40vh'
              chartvol1.style.display = 'flex'
              charttemp1txt.innerHTML = resultadoTemp1 + '°'
              let resultadoTemp2 = temp2.innerHTML = parseFloat(temp2.innerHTML) - porcentajeTemp
              charttemp2.style.height = '38vh'
              chartvol2.style.display = 'flex'
              charttemp2txt.innerHTML = resultadoTemp2 + '°'
              let resultadoTemp3 = temp3.innerHTML = parseFloat(temp3.innerHTML) - porcentajeTemp
              charttemp3.style.height = '45vh'
              chartvol3.style.display = 'flex'
              charttemp3txt.innerHTML = resultadoTemp3 + '°'
              let resultadoTemp4 = temp4.innerHTML = parseFloat(temp4.innerHTML) - porcentajeTemp
              charttemp4.style.height = '28vh'
              chartvol4.style.display = 'flex'
              charttemp4txt.innerHTML = resultadoTemp4 + '°'
              let resultadoTemp5 = temp5.innerHTML = parseFloat(temp5.innerHTML) - porcentajeTemp
              charttemp5.style.height = '44vh'
              chartvol5.style.display = 'flex'
              charttemp5txt.innerHTML = resultadoTemp5 + '°'
              // Datos de la db
              // let resultadoTempdb = tempdb.innerHTML = parseFloat(tempdb.innerHTML) - porcentajeTemp
              // Temperatura de las baterias
              //Se determina que haya solo dos decimales despues de la coma
              temp1.innerHTML = resultadoTemp1.toFixed(2)
              temp2.innerHTML = resultadoTemp2.toFixed(2)
              temp3.innerHTML = resultadoTemp3.toFixed(2)
              temp4.innerHTML = resultadoTemp4.toFixed(2)
              temp5.innerHTML = resultadoTemp5.toFixed(2)
              // Datos de la db
              // tempdb.innerHTML = resultadoTempdb.toFixed(2)

              // Corriente 
              let resultadoCor1 = cor1.innerHTML = parseFloat(cor1.innerHTML) - porcentajeCor
              chartcor1.style.height = '45vh'
              chartcor1.style.display = 'flex'
              chartcor1txt.innerHTML = resultadoCor1 + 'A'
              let resultadoCor2 = cor2.innerHTML = parseFloat(cor2.innerHTML) - porcentajeCor
              chartcor2.style.height = '46vh'
              chartcor2.style.display = 'flex'
              chartcor2txt.innerHTML = resultadoCor2 + 'A'
              let resultadoCor3 = cor3.innerHTML = parseFloat(cor3.innerHTML) - porcentajeCor
              chartcor3.style.height = '45vh'
              chartcor3.style.display = 'flex'
              chartcor3txt.innerHTML = resultadoCor3 + 'A'
              let resultadoCor4 = cor4.innerHTML = parseFloat(cor4.innerHTML) - porcentajeCor
              chartcor4.style.height = '46vh'
              chartcor4.style.display = 'flex'
              chartcor4txt.innerHTML = resultadoCor4 + 'A'
              let resultadoCor5 = cor5.innerHTML = parseFloat(cor5.innerHTML) - porcentajeCor
              chartcor5.style.height = '45vh'
              chartcor5.style.display = 'flex'
              chartcor5txt.innerHTML = resultadoCor5 + 'A'
            }, 5000)
          }
          if(
            // Voltaje de las baterias
            bat1.innerHTML < 12 ||
            bat2.innerHTML < 12 ||
            bat3.innerHTML < 12 ||
            bat4.innerHTML < 12 ||
            bat5.innerHTML < 12 ||
            // Datos de la db
            // batdb.innerHTML < 12 ||
            // Temperatura de las baterias
            temp1.innerHTML < 20 ||
            temp2.innerHTML < 20 ||
            temp3.innerHTML < 20 ||
            temp4.innerHTML < 20 ||
            temp5.innerHTML < 20 ||
            // Datos de la db
            // tempdb.innerHTML < 20 ||

            // Corriente
            cor1.innerHTML < 20 ||
            cor2.innerHTML < 20 ||
            cor3.innerHTML < 20 ||
            cor4.innerHTML < 20 ||
            cor5.innerHTML < 20 
            ) {
            // Voltaje de las baterias
            let resultado1 = bat1.innerHTML = parseFloat(bat1.innerHTML) + porcentaje + porcentaje 
            chartvol1.style.height = '47vh'
            chartvol1txt.innerHTML = resultado1 + 'V'    
            let resultado2 = bat2.innerHTML = parseFloat(bat2.innerHTML) + porcentaje + porcentaje
            chartvol2.style.height = '42vh'
            chartvol2txt.innerHTML = resultado2 + 'V'
            let resultado3 = bat3.innerHTML = parseFloat(bat3.innerHTML) + porcentaje + porcentaje
            chartvol3.style.height = '38vh'
            chartvol3txt.innerHTML = resultado3 + 'V'
            let resultado4 = bat4.innerHTML = parseFloat(bat4.innerHTML) + porcentaje + porcentaje
            chartvol4.style.height = '35vh'
            chartvol4txt.innerHTML = resultado4 + 'V'
            let resultado5 = bat5.innerHTML = parseFloat(bat5.innerHTML) + porcentaje + porcentaje
            chartvol5.style.height = '40vh'
            chartvol5txt.innerHTML = resultado5 + 'V'
            // Datos de la db
            // let resultadodb = batdb.innerHTML = parseFloat(batdb.innerHTML) + porcentaje + porcentaje

            // Temperatura de las baterias
            let resultadoTemp1 = temp1.innerHTML = parseFloat(temp1.innerHTML) + porcentajeTemp + porcentajeTemp            
            charttemp1.style.height = '44vh'
            charttemp1txt.innerHTML = resultadoTemp1 + '°'
            let resultadoTemp2 = temp2.innerHTML = parseFloat(temp2.innerHTML) + porcentajeTemp + porcentajeTemp
            charttemp2.style.height = '42vh'
            charttemp2txt.innerHTML = resultadoTemp2 + '°'
            let resultadoTemp3 = temp3.innerHTML = parseFloat(temp3.innerHTML) + porcentajeTemp + porcentajeTemp
            charttemp3.style.height = '47vh'
            charttemp3txt.innerHTML = resultadoTemp3 + '°'
            let resultadoTemp4 = temp4.innerHTML = parseFloat(temp4.innerHTML) + porcentajeTemp + porcentajeTemp
            charttemp4.style.height = '33vh'
            charttemp4txt.innerHTML = resultadoTemp4 + '°'
            let resultadoTemp5 = temp5.innerHTML = parseFloat(temp5.innerHTML) + porcentajeTemp + porcentajeTemp
            charttemp5.style.height = '48vh'
            charttemp5txt.innerHTML = resultadoTemp5 + '°'
            // Datos de la db
            // let resultadoTempdb = tempdb.innerHTML = parseFloat(tempdb.innerHTML) + porcentajeTemp + porcentajeTemp

            // Corriente
            let resultadoCor1 = cor1.innerHTML = parseFloat(cor1.innerHTML) + porcentajeCor 
            chartcor1.style.height = '47vh'
            chartcor1txt.innerHTML = resultadoCor1 + 'A'    
            let resultadoCor2 = cor2.innerHTML = parseFloat(cor2.innerHTML) + porcentajeCor
            chartcor2.style.height = '44vh'
            chartcor2txt.innerHTML = resultadoCor2 + 'A'
            let resultadoCor3 = cor3.innerHTML = parseFloat(cor3.innerHTML) + porcentajeCor
            chartcor3.style.height = '47vh'
            chartcor3txt.innerHTML = resultadoCor3 + 'A'
            let resultadoCor4 = cor4.innerHTML = parseFloat(cor4.innerHTML) + porcentajeCor
            chartcor4.style.height = '48vh'
            chartcor4txt.innerHTML = resultadoCor4 + 'A'
            let resultadoCor5 = cor5.innerHTML = parseFloat(cor5.innerHTML) + porcentajeCor
            chartcor5.style.height = '47vh'
            chartcor5txt.innerHTML = resultadoCor5 + 'A'

            // Voltaje de las baterias
            bat1.innerHTML = resultado1.toFixed(2)
            bat2.innerHTML = resultado2.toFixed(2)
            bat3.innerHTML = resultado3.toFixed(2)
            bat4.innerHTML = resultado4.toFixed(2)
            bat5.innerHTML = resultado5.toFixed(2)
            // Datos de la db
            // batdb.innerHTML = resultadodb.toFixed(2)

            // Temperatura de las baterias
            temp1.innerHTML = resultadoTemp1.toFixed(2)
            temp2.innerHTML = resultadoTemp2.toFixed(2)
            temp3.innerHTML = resultadoTemp3.toFixed(2)
            temp4.innerHTML = resultadoTemp4.toFixed(2)
            temp5.innerHTML = resultadoTemp5.toFixed(2)
            // Datos de la db
            // tempdb.innerHTML = resultadoTempdb.toFixed(2)
          }

          if(
            // Voltaje de las baterias
            bat1.innerHTML > 12 ||
            bat2.innerHTML > 12 ||
            bat3.innerHTML > 12 ||
            bat4.innerHTML > 12 ||
            bat5.innerHTML > 12 ||
            // Datos de la db
            // batdb.innerHTML > 12 ||

            // Temperatura de las baterias
            temp1.innerHTML > 20 || temp1.innerHTML < 10 ||
            temp2.innerHTML > 20 || temp2.innerHTML < 10 ||
            temp3.innerHTML > 20 || temp3.innerHTML < 10 ||
            temp4.innerHTML > 20 || temp4.innerHTML < 10 ||
            temp5.innerHTML > 20 || temp5.innerHTML < 10 ||
            // Datos de la db
            // tempdb.innerHTML > 20 || tempdb.innerHTML < 10 ||

            // Corriente
            cor1.innerHTML > 20 || cor1.innerHTML < 18 ||
            cor2.innerHTML > 20 || cor2.innerHTML < 18 ||
            cor3.innerHTML > 20 || cor3.innerHTML < 18 ||
            cor4.innerHTML > 20 || cor4.innerHTML < 18 ||
            cor5.innerHTML > 20 || cor5.innerHTML < 18 
            ) {
            // Voltaje de las baterias
            let resultado1 = bat1.innerHTML = 12.38
            chartvol1.style.height = '47vh'
            chartvol1.style.display = 'flex'
            chartvol1txt.innerHTML = resultado1 + 'V'      
            let resultado2 = bat2.innerHTML = 12.08
            chartvol2.style.height = '43vh'
            chartvol2.style.display = 'flex'
            chartvol2txt.innerHTML = resultado2 + 'V' 
            let resultado3 = bat3.innerHTML = 11.08
            chartvol3.style.height = '36vh'
            chartvol3.style.display = 'flex'
            chartvol3txt.innerHTML = resultado3 + 'V' 
            let resultado4 = bat4.innerHTML = 10.08
            chartvol4.style.height = '33vh'
            chartvol4.style.display = 'flex'
            chartvol4txt.innerHTML = resultado4 + 'V' 
            let resultado5 = bat5.innerHTML = 11.38
            chartvol5.style.height = '39vh'
            chartvol5.style.display = 'flex'
            chartvol5txt.innerHTML = resultado5 + 'V'
            // Datos de la db
            // let resultadodb = batdb.innerHTML = 12.38

            // Temperatura de las baterias
            let resultadoTemp1 = temp1.innerHTML = 17
            charttemp1.style.height = '44vh'
            charttemp1.style.display = 'flex'
            charttemp1txt.innerHTML = resultadoTemp1 + '°'
            let resultadoTemp2 = temp2.innerHTML = 15
            charttemp2.style.height = '42vh'
            charttemp2.style.display = 'flex'
            charttemp2txt.innerHTML = resultadoTemp2 + '°'
            let resultadoTemp3 = temp3.innerHTML = 19
            charttemp3.style.height = '47vh'
            charttemp3.style.display = 'flex'
            charttemp3txt.innerHTML = resultadoTemp3 + '°'
            let resultadoTemp4 = temp4.innerHTML = 11
            charttemp4.style.height = '30vh'
            charttemp4.style.display = 'flex'
            charttemp4txt.innerHTML = resultadoTemp4 + '°'
            let resultadoTemp5 = temp5.innerHTML = 18
            charttemp5.style.height = '46vh'
            charttemp5.style.display = 'flex'
            charttemp5txt.innerHTML = resultadoTemp5 + '°'
            // Datos de la db
            // let resultadoTempdb = tempdb.innerHTML = 20

            // Corriente
            let resultadoCor1 = cor1.innerHTML = 18
            chartcor1.style.height = '46vh'
            chartcor1.style.display = 'flex'
            chartcor1txt.innerHTML = resultadoCor1 + 'A'      
            let resultadoCor2 = cor2.innerHTML = 19
            chartcor2.style.height = '48vh'
            chartcor2.style.display = 'flex'
            chartcor2txt.innerHTML = resultadoCor2 + 'A' 
            let resultadoCor3 = cor3.innerHTML = 18
            chartcor3.style.height = '46vh'
            chartcor3.style.display = 'flex'
            chartcor3txt.innerHTML = resultadoCor3 + 'A' 
            let resultadoCor4 = cor4.innerHTML = 19
            chartcor4.style.height = '48vh'
            chartcor4.style.display = 'flex'
            chartcor4txt.innerHTML = resultadoCor4 + 'A' 
            let resultadoCor5 = cor5.innerHTML = 18
            chartcor5.style.height = '46vh'
            chartcor5.style.display = 'flex'
            chartcor5txt.innerHTML = resultadoCor5 + 'A'

            // Voltaje de las baterias
            bat1.innerHTML = resultado1.toFixed(2)
            bat2.innerHTML = resultado2.toFixed(2)
            bat3.innerHTML = resultado3.toFixed(2)
            bat4.innerHTML = resultado4.toFixed(2)
            bat5.innerHTML = resultado5.toFixed(2)
            // Datos de la db
            // batdb.innerHTML = resultadodb.toFixed(2)

            // Temperatura de las baterias
            temp1.innerHTML = resultadoTemp1.toFixed(2)
            temp2.innerHTML = resultadoTemp2.toFixed(2)
            temp3.innerHTML = resultadoTemp3.toFixed(2)
            temp4.innerHTML = resultadoTemp4.toFixed(2)
            temp5.innerHTML = resultadoTemp5.toFixed(2)
            // Datos de la db
            // tempdb.innerHTML = resultadoTempdb.toFixed(2)
          }
        }, 10000)
      }

    deleteBateria(id: string) {
        const bateria = this.baterias.find(x => x.id === id);
        bateria.isDeleting = true;
        this.httpBaterias.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.baterias = this.baterias.filter(x => x.id !== id) 
            });
    }
}