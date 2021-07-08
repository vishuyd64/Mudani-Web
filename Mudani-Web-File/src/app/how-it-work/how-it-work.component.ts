import {
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';
import * as CanvasJS from '../../assets/js/canvasjs.min';
declare var $: any;

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html',
  styleUrls: ['./how-it-work.component.scss']
})
export class HowItWorkComponent implements OnInit, AfterViewInit {
  principalAmount: number = 1000;
  time: number = 6;
  contribution: number = 50;
  activeDot = 3
  customOptions55: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 30,
    navSpeed: 700,
    navText: [' <img src="assets/images/arrow-blue.png">', '<img src="assets/images/arrow-white.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3,
        // slideBy: 3
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit() {
    this.allChart()
    $(document).on('click', '.freqBlockShow', function () {
      $('.freqBlockHide').slideDown();
      $('.freqBlockShow').hide();
    });

    var requestFullscreen = function (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        console.log('Fullscreen API is not supported.');
      }
    };

    var exitFullscreen = function () {

    };
    var fullscreenPage = document.getElementById('fullpage-button');
    var fullscreenExit = document.getElementById('fullpage-exit-button');

    fullscreenPage.addEventListener('click', function (e) {
      e.preventDefault();
      requestFullscreen(document.documentElement);
    });

    fullscreenExit.addEventListener('click', function (e) {
      e.preventDefault();

      exitFullscreen();
    });

    var fullscreenVideo = document.getElementById('video-button');
    var video = document.getElementById('video');

    fullscreenVideo.addEventListener('click', function (e) {
      e.preventDefault();
      requestFullscreen(video);
    });


    $(document).on('click', '#video-button', function (ev) {
      $('#video').get(0).play()

    });

    function scroller() {
      $(".slide1").css("width", "50%");
      $(".slide.slide2").css("width", "50%");
      $(".slide.slide3").css("width", "50%");
      $(".slide.slide5").css("width", "50%");
      // var range = $("#range5").attr("value");
      // $("#demo").html(range);
      // $(".slide.slide5").css("width", "50%");
      // $(document).on('input change', '#range5', function () {
      //   var slideWidth = $(this).val() * 100 / 100;
      //   $(".slide.slide5").css("width", slideWidth + "%");
      // });
    }
    scroller();

    $(document).on('click', '.AddSpan .form-control ,.arrowas', function () {
      $('.AddSpan ul').slideDown();
    });
    $(document).on('click', '.AddSpan ul li', function () {
      var x = $(this).text();
      $('.AddSpan .form-control').attr('value', x);
      $('.AddSpan ul').slideUp();
    });

    $(document).on('click', '.selfBox.selfBox2', function () {
      $('.selfBox.selfBox2').removeClass('active');
      $(this).addClass('active');

    });

    // accordian
    $(document).ready(function () {
      $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".content")
            .slideUp(200);
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        } else {
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
          $(this)
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
            .siblings(".content")
            .slideDown(200);
        }
      });
    });
  }

  initialAmount(event) {
    this.principalAmount = event.target.value
    var slideWidth = this.principalAmount * 100 / 250000;
    $(".slide1").css("width", slideWidth + "%");
    this.futureValueInvestment(this.principalAmount, undefined, undefined)
  }

  monthlyContribution(event) {
    this.contribution = event.target.value
    var slideWidth = this.contribution * 100 / 100;
    $(".slide.slide2").css("width", slideWidth + "%");
  }

  timeHorizon(event) {
    this.time = event.target.value
    var slideWidth = this.time * 100 / 15;
    $(".slide.slide3").css("width", slideWidth + "%");
    this.futureValueInvestment(undefined, this.time, undefined)
  }

  ngAfterViewInit() {
    this.nextEvent();
    this.prevEvent();
  }


  nextEvent() {
    let j = 3;

    const element = document.getElementsByClassName("owl-next")

    element[0].addEventListener('click', function (e) {
      var elements = document.getElementsByClassName("custom-next-click");
      console.log(e)
      if (j !== 5) {
        j++;
      }
      else {
        j = 3;
      }
      console.log(j, elements[4])
      elements[0];
      if (j == 3) {
        elements[0].className = "custom-next-click active"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click"
        elements[4].className = "custom-next-click"
      }
      if (j == 4) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active"
        elements[4].className = "custom-next-click"
      }
      if (j == 5) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active"
        elements[4].className = "custom-next-click active"
      }
    })
  }
  prevEvent() {
    let j = 3;

    const element = document.getElementsByClassName("owl-prev")

    element[0].addEventListener('click', function (e) {
      var elements = document.getElementsByClassName("custom-next-click");
      console.log(e)
      if (j !== 3) {
        j--;
      }
      else {
        j = 5;
      }
      console.log(j, elements[4])
      elements[0];
      if (j == 3) {
        elements[0].className = "custom-next-click active"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click"
        elements[4].className = "custom-next-click"
      }
      if (j == 4) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active"
        elements[4].className = "custom-next-click"
      }
      if (j == 5) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active"
        elements[4].className = "custom-next-click active"
      }
    })
    //  this.activeDot=j;
    //  console.log(this.activeDot)
  }

  marketData(value) {
    let rVal;
    if (value == 'all') {
      this.allChart()
    } else if (value == 'weak') {
      rVal = 5
      //chart rerender
      // let data = [{
      //   name: "Weak",
      //   color: "#D3EBFB",
      //   markerSize: 0,
      //   type: "stackedArea",
      //   xValueType: "dateTime",
      //   showInLegend: true,
      //   toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
      //   // dataPoints: [
      //   //   { x: 1609439400000, y: 1000 },
      //   //   { x: 1640975400000, y: 7000 },
      //   //   { x: 1672511400000, y: 20000 },
      //   //   { x: 1704047400000, y: 34000 },
      //   //   { x: 1735669800000, y: 53000 },
      //   //   { x: 1767205800000, y: 81000 },
      //   //   { x: 1798741800000, y: 102000 },
      //   //   { x: 1830277800000, y: 156000 },
      //   //   { x: 1861900200000, y: 194000 },
      //   //   { x: 1893436200000, y: 381000 },
      //   // ]
      //   dataPoints: [
      //     { x: 1609439400000, y: 1000 },
      //     { x: 1640975400000, y: 7000 },
      //     { x: 1672511400000, y: 20000 },
      //     { x: 1704047400000, y: 34000 },
      //     { x: 1735669800000, y: 53000 },
      //     { x: 1767205800000, y: 81000 },
      //     { x: 1798741800000 },
      //     { x: 1830277800000 },
      //     { x: 1861900200000 },
      //     { x: 1893436200000 },
      //   ]
      // }]
      let A = this.futureValueInvestment(undefined, undefined, rVal) //A is future value
      console.log('AAA', A)
      let data = [{
        name: "Weak",
        color: "#D3EBFB",
        markerSize: 0,
        type: "stackedArea",
        xValueType: "dateTime",
        showInLegend: true,
        toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
        dataPoints: [
          { x: 1609439400000, y: 1000 },
          { x: 1640975400000, y: 7000 },
          { x: 1672511400000, y: 20000 },
          { x: 1704047400000, y: 34000 },
          { x: 1735669800000, y: 53000 },
          { x: 1767205800000, y: 81000 },
          { x: 1798741800000, y: 102000 },
          { x: 1830277800000, y: 156000 },
          { x: 1861900200000, y: 194000 },
          { x: 1893436200000, y: 281000 },
        ]
      }]
      this.switchChart(data)
    } else if (value == 'normal') {
      rVal = 10
      let data = [{
        name: "Normal",
        markerSize: 0,
        color: "#9FD7FA",
        type: "stackedArea",
        xValueType: "dateTime",
        showInLegend: true,
        toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
        dataPoints: [
          { x: 1609439400000, y: 1000 },
          { x: 1640975400000, y: 7000 },
          { x: 1672511400000, y: 20000 },
          { x: 1704047400000, y: 34000 },
          { x: 1735669800000, y: 53000 },
          { x: 1767205800000, y: 81000 },
          { x: 1798741800000, y: 102000 },
          { x: 1830277800000, y: 156000 },
          { x: 1861900200000, y: 194000 },
          { x: 1893436200000, y: 281000 },
        ]
      }]
      this.switchChart(data)
    } else if (value == 'strong') {
      rVal = 15
      let A = this.futureValueInvestment(undefined, undefined, rVal) //A is future value
      console.log('AAAstrong', A)
      let data = [{
        name: "Strong",
        markerSize: 0,
        color: "#85CCFB",
        type: "stackedArea",
        xValueType: "dateTime",
        showInLegend: true,
        toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
        // dataPoints: [
        //   { x: 1609439400000, y: 1000 },
        //   { x: 1640975400000, y: 7000 },
        //   { x: 1672511400000, y: 20000 },
        //   { x: 1704047400000, y: 34000 },
        //   { x: 1735669800000, y: 53000 },
        //   { x: 1767205800000, y: 81000 },
        //   { x: 1798741800000, y: 102000 },
        //   { x: 1830277800000, y: 156000 },
        //   { x: 1861900200000, y: 194000 },
        //   { x: 1893436200000, y: 281000 },
        // ]
        dataPoints: [
          { x: 1609439400000 },
          { x: 1640975400000 },
          { x: 1672511400000 },
          { x: 1704047400000 },
          { x: 1735669800000 },
          { x: 1767205800000 },
          { x: 1798741800000, y: A },
          { x: 1830277800000 },
          { x: 1861900200000 },
          { x: 1893436200000 },
        ]
      }]
      this.switchChart(data)
    } else if (value == 'mudani') {
      rVal = 50
      let data = [{
        name: "Mudani",
        markerSize: 0,
        color: "#79BFE3",
        type: "stackedArea",
        xValueType: "dateTime",
        showInLegend: true,
        toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
        dataPoints: [
          { x: 1609439400000, y: 1000 },
          { x: 1640975400000, y: 7000 },
          { x: 1672511400000, y: 20000 },
          { x: 1704047400000, y: 34000 },
          { x: 1735669800000, y: 53000 },
          { x: 1767205800000, y: 81000 },
          { x: 1798741800000, y: 102000 },
          { x: 1830277800000, y: 156000 },
          { x: 1861900200000, y: 194000 },
          { x: 1893436200000, y: 281000 },
        ]
      }]
      this.switchChart(data)
    }

  }

  futureValueInvestment(P = 1000, t = 6, rVal = 5) {
    // let P = 1000
    console.log('------>', P, t, rVal)
    let r = rVal / 100;
    let n = 12;
    // let t = 10;
    let rn = 1 + (r / n)
    // console.log('rn---->', rn)
    let rn2 = r / n
    // console.log('rn2---->', rn2)
    let nt = n * t
    // console.log('nt---->', nt)
    let x = Math.pow(rn, nt)
    // console.log('x---->', x)
    let onePart = P * x
    // console.log('one parrt---->', onePart)
    let secondHalf = x - 1
    // console.log('second half part---->', secondHalf)
    let second = (secondHalf / rn2) * 100
    // console.log('second---->', second)
    let A = onePart + second
    console.log({ A })

    let value = 100
    $("#range5").val(A)
    var slideWidth = A * 100 / 100000;
    $(".slider.slide5").css("width", slideWidth + "%");
    // $(".slide.slide5").css("width", value + "%");
    // $("#range5").val(A)
    // var slideWidth = A * 100 / 100000;
    // $(".slider.slide5").css("width", slideWidth + "%");
    return A;
  }

  switchChart(data) {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
      },
      axisY: {
        valueFormatString: "#0,.",
        suffix: "k",
        gridThickness: 0,
      },
      toolTip: {
        shared: true
      },
      data: data
    });
    chart.render();
  }

  allChart() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        // text: "Cumulative App Downloads on iTunes and Play Store"
      },
      axisY: {
        valueFormatString: "#0,.",
        suffix: "k",
        gridThickness: 0,
      },
      // axisX: {
      // valueFormatString: 'YYYY',
      // interval: 100,
      // intervalType: 'year'
      // title: "Months After Launch"
      // },
      toolTip: {
        shared: true
      },
      data: [{
        name: "Weak",
        color: "#D3EBFB",
        markerSize: 0,
        type: "stackedArea",
        xValueType: "dateTime",
        showInLegend: true,
        toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
        dataPoints: [
          { x: 1609439400000, y: 1000 },
          { x: 1640975400000, y: 7000 },
          { x: 1672511400000, y: 20000 },
          { x: 1704047400000, y: 34000 },
          { x: 1735669800000, y: 53000 },
          { x: 1767205800000, y: 81000 },
          { x: 1798741800000, y: 102000 },
          { x: 1830277800000, y: 156000 },
          { x: 1861900200000, y: 194000 },
          { x: 1893436200000, y: 381000 },
        ]
      },
      {
        name: "Normal",
        markerSize: 0,
        color: "#9FD7FA",
        type: "stackedArea",
        xValueType: "dateTime",
        showInLegend: true,
        toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
        dataPoints: [
          { x: 1609439400000, y: 1000 },
          { x: 1640975400000, y: 7000 },
          { x: 1672511400000, y: 20000 },
          { x: 1704047400000, y: 34000 },
          { x: 1735669800000, y: 53000 },
          { x: 1767205800000, y: 81000 },
          { x: 1798741800000, y: 102000 },
          { x: 1830277800000, y: 156000 },
          { x: 1861900200000, y: 194000 },
          { x: 1893436200000, y: 381000 },
        ]
      },
      {
        name: "Strong",
        markerSize: 0,
        color: "#85CCFB",
        type: "stackedArea",
        xValueType: "dateTime",
        showInLegend: true,
        toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
        dataPoints: [
          { x: 1609439400000, y: 1000 },
          { x: 1640975400000, y: 7000 },
          { x: 1672511400000, y: 20000 },
          { x: 1704047400000, y: 34000 },
          { x: 1735669800000, y: 53000 },
          { x: 1767205800000, y: 81000 },
          { x: 1798741800000, y: 102000 },
          { x: 1830277800000, y: 156000 },
          { x: 1861900200000, y: 194000 },
          { x: 1893436200000, y: 281000 },
        ]
      },
      {
        name: "Mudani",
        markerSize: 0,
        color: "#79BFE3",
        type: "stackedArea",
        xValueType: "dateTime",
        showInLegend: true,
        toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
        dataPoints: [
          { x: 1609439400000, y: 1000 },
          { x: 1640975400000, y: 7000 },
          { x: 1672511400000, y: 20000 },
          { x: 1704047400000, y: 34000 },
          { x: 1735669800000, y: 53000 },
          { x: 1767205800000, y: 81000 },
          { x: 1798741800000, y: 102000 },
          { x: 1830277800000, y: 156000 },
          { x: 1861900200000, y: 194000 },
          { x: 1893436200000, y: 281000 },
        ]
      }
      ]
    });
    chart.render();
  }

}
