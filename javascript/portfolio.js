/* jshint esversion: 6 */
/*global $ */


$(function(){                                                  /*Document.Ready*/
    $("header .name .menu .material-icons").on("click", e =>{  /* click icon */
      e.preventDefault();                                      /* prevent dragging*/
      $("footer .social-links").toggleClass("show-menu");      /* add class to show menu*/
    });                                                        /* close function*/
 });                                                           /* close document.ready*/
    