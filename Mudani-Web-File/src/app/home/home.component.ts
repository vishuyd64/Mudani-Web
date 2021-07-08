import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Api } from '../../api/api.service';
declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  referForm: FormGroup;
  referSubmitCheck: boolean = false;
  spinValue: number;
  subscriptionForm: FormGroup;
  customOptionsImg: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [' <img src="assets/images/arrow-left.png">', '<img src="assets/images/arrow-right.png">'],
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
        items: 4
      }
    },
    nav: true
  }
  constructor(
    private fb: FormBuilder,
    private api: Api
  ) {
    this.referForm = this.fb.group({
      yourEmail: ['', [Validators.required]],
      friendEmail: ['', [Validators.required]]
    })
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#myModal').modal('show');
    });
    var degree = 1800;
    var clicks = 0;

    //Clear interval timer if id saved in attributes:
    function clear_interval(t) {
      var interval = parseInt(t.data('interval'));
      if (interval > 0) {
        clearInterval(interval);
        t.data('interval', '');
      }
    }

    $('#spin ,.btnSpin ').click(function () {
      clicks++;
      var newDegree = degree * clicks;
      var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
      let totalDegree = newDegree + extraDegree;

      //Calculate result index:
      var win_num = 6 - Math.floor((totalDegree % 360 + 30) / 60);

      $('#wheel .sec').each(function () {
        var t = $(this);

        clear_interval(t);

        //Save timer ID in data-interval attribute:
        t.data('interval', setInterval(function () {
          var aoY = t.offset().top;
          $("#txt").html(t.html());

          if (aoY < 23.89) {
            $('#spin ,.btnSpin ').addClass('spin');
            setTimeout(function () {
              $('#spin ,.btnSpin').removeClass('spin');
            }, 100);
          }
        }, 10));

        $('#inner-wheel').css({
          'transform': 'rotate(' + totalDegree + 'deg)'
        });
      });

      //Stop updates and show result when transition already ended:
      setTimeout(function () {
        $('#wheel .sec').each(function () {
          clear_interval($(this));
        });
        $("#txt").html($('#wheel div.sec:nth-child(' + win_num + ')').html());
        let selectedSpin = $('#wheel div.sec:nth-child(' + win_num + ')').html()
        let selectedId = $(selectedSpin).attr('id')
        if (selectedId == 'smile') {
          this.spinValue = 10
        } else {
          this.spinValue = 20
        }
        $('.thanks').html('Thank you, You have earned ' + this.spinValue + ' Points')
        setTimeout(function () {
          $('#thankYou').modal('show')
        }, 1000)

      }, 6100);
    });

    $(document).on('click', '.selfDirect', function () {
      $('.cardsLeft.cardsLeftF').addClass('active');
      $('.cardsLeft.cardsLeftNew').removeClass('active');
    });
    $(document).on('click', '.selfManag', function () {
      $('.cardsLeft.cardsLeftNew').addClass('active');
      $('.cardsLeft.cardsLeftF').removeClass('active');
    });
    $(document).on('click', '.pickCard li a', function () {
      $('.pickCard li a').removeClass('active');
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
            .removeClass("fa-chevron-up")
            .addClass("fa-chevron-down");
        } else {
          $(".set > a i")
            .removeClass("fa=chevron-up")
            .addClass("fa-chevron-down");
          $(this)
            .find("i")
            .removeClass("fa-chevron-down")
            .addClass("fa-chevron-up");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
            .siblings(".content")
            .slideDown(200);
        }
      });
    });

    $(document).ready(function () {
      $(".set5 > a.setb").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".content5")
            .slideUp(200);

        } else {
          $(".set5 > a.setb i")

          $(this)
          $(".set5 > a.setb").removeClass("active");
          $(this).addClass("active");
          $(".content5").slideUp(200);
          $(this)
            .siblings(".content5")
            .slideDown(200);
        }
      });
    });

    $(document).ready(function () {
      $(".setnew > a.setb").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".contentnew")
            .slideUp(200);
          $(".setnew > a.setb i")

        } else {
          $(".setnew > a.setb i")

          $(this)
            .find("i")

          $(".setnew > a.setb").removeClass("active");
          $(this).addClass("active");
          $(".contentnew").slideUp(200);
          $(this)
            .siblings(".contentnew")
            .slideDown(200);
        }
      });
    });
  }

  referSubmit() {
    // this.referSubmitCheck = true
    let data = {
      name: 'test',
      friendName: 'test',
      email: this.referForm.value.yourEmail,
      friendEmail: this.referForm.value.friendEmail,
    }
    console.log(this.referForm.value)
    let url = 'https://admin.mudani.com/refer-a-friend-responses'
    this.api.post(url, data).subscribe(result => {
      console.log('referRFesult', result)
      if (result.id != '' && result.id != undefined) {
        $('#refer').modal('hide')
        this.referForm.reset()
      } else {
        // this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })
    // $('#thankYou').modal('show')
  }

  submitSubscription() {
    let data = {
      email: this.subscriptionForm.value.email
    }
    let url = 'https://admin.mudani.com/newsletter-subscription-responses'
    this.api.post(url, data).subscribe(result => {
      console.log({ result })
      if (result.id != '' && result.id != undefined) {
        $('#ThanksModal').modal('show')
        this.subscriptionForm.reset()
      } else {
        // this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })


  }

}
