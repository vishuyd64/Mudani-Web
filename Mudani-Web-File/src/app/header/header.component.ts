import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){

    $(window).scroll(function () {

      if ($(window).scrollTop() >= 1) {
          $('.header').addClass('fixedHeader');
      } else {
          $('.header').removeClass('fixedHeader');
      }
  });

$(document).on('click' ,'.loginPart li a',function(){
  $('.loginPart li a').removeClass('active');
  $(this).addClass('active');
});

  }

}
