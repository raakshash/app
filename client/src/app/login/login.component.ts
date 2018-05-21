import { Component, OnInit, HostBinding, Host } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import * as firebase from 'firebase';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: { '[@moveIn]': '' }
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(private af: AngularFireAuth, private router: Router) {
    this.af.user.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  loginFb() {
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
          this.error = err;
        });
  }

  loginGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
          this.error = err;
        });
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
  }

}
