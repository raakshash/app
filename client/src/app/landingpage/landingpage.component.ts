import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import * as ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  // Disable Google Maps scrolling
  // See http://stackoverflow.com/a/25904582/1607849
  // Disable scroll zooming and bind back the click event
  onMapMouseleaveHandler(event) {
    var that = $(this);
    that.on('click', this.onMapClickHandler);
    that.off('mouseleave', this.onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }
  onMapClickHandler(event) {
    var that = $(this);
    // Disable the click handler until the user leaves the map area
    that.off('click', this.onMapClickHandler);
    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");
    // Handle the mouse leave event
    that.on('mouseleave', this.onMapMouseleaveHandler);
  }

  ngOnInit() {

    // Closes the sidebar menu
    $(".menu-toggle").click(function (e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
      $(this).toggleClass("active");
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, "swing");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('#sidebar-wrapper .js-scroll-trigger').click(function () {
      $("#sidebar-wrapper").removeClass("active");
      $(".menu-toggle").removeClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    });

    // Scroll to top button appear
    $(document).scroll(function () {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // var sr = ScrollReveal();
    // sr.reveal('.portfolio-item .left-flow', {
    //   duraion: 4000,
    //   origin: "left",
    //   distance:"300px",
    //   viewFactor: 0.2,
    //   reset: true
    // });
    // sr.reveal('.portfolio-item .right-flow', {
    //   duraion: 4000,
    //   origin: "right",
    //   distance:"300px",
    //   viewFactor: 0.2,
    //   reset: true
    // });
    // sr.reveal('.mb-1',{
    //   duraion: 4000,
    //   opacity: 0,
    //   distance:"500px",
    //   origin: "left",
    //   viewFactor: 0.2,
    //   reset: true
    // });
    // sr.reveal('#tagline',{
    //   duraion: 4000,
    //   delay:1000,
    //   distance:"500px",
    //   opacity: 0,
    //   origin: "right",
    //   viewFactor: 0.2,
    //   reset: true
    // });
    // sr.reveal('.masthead .btn',{
    //   duraion: 4000,
    //   delay:2000,
    //   opacity: 0,
    //   origin: "bottom",
    //   viewFactor: 0.2,
    //   reset: true
    // });

    // Enable map zooming with mouse scroll when the user clicks the map
    $('.map').on('click', this.onMapClickHandler);

  }

}
