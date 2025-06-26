/*  js/main.js  */
/* Runs after jQuery and the Tocify plugin have loaded */
$(function () {

  /* ----------  Build Table-of-Contents  ---------- */
  var toc = $("#TOC").tocify({
    selectors:       "h1,h2",
    theme:           "bootstrap3",
    context:         ".toc-content",
    hashGenerator:   function (text) {
                       return text.replace(/[.\\/?&!#<>]/g, '')
                                  .replace(/\s/g, '_')
                                  .toLowerCase();
                     },
    ignoreSelector:  ".toc-ignore",
    scrollTo:        0,
    showAndHide:     true,
    smoothScroll:    true
  }).data("toc-tocify");

  /* ----------  Code-folding or tabsets (if you use them)  ---------- */
  if (typeof window.buildTabsets === "function") {
    window.buildTabsets("TOC");
  }
  if (typeof window.initializeCodeFolding === "function") {
    window.initializeCodeFolding(true);
  }

//   /* ----------  Portfolio filter buttons  ---------- */
//   $("#portfolio-button-container").on("click", "button", function () {
//     var section = $(this).data("portfolio-section");
//     $("#portfolio-button-container button").removeClass("active");
//     $(this).addClass("active");
//     if (section === "all") {
//       $("#portfolio-items > div").addClass("show");
//     } else {
//       $("#portfolio-items > div").removeClass("show")
//                                  .filter("." + section).addClass("show");
//     }
//   });
// });
