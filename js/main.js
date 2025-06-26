/*  js/main.js  */
$(function () {
  /* build tabsets (pandoc helper) */
  if (typeof window.buildTabsets === 'function') {
    window.buildTabsets('TOC');
  }

  /* initialise code-folding (pandoc helper) */
  if (typeof window.initializeCodeFolding === 'function') {
    window.initializeCodeFolding(true);
  }

  /* -------  TOCify  -------- */
  $('div.section.toc-ignore')
    .removeClass('toc-ignore')
    .children('h1,h2,h3,h4,h5')
    .addClass('toc-ignore');

  var options = {
    selectors:       'h1,h2',
    theme:           'bootstrap3',
    context:         '.toc-content',
    hashGenerator:   function (text) {
                       return text.replace(/[.\\/?&!#<>]/g, '')
                                  .replace(/\s/g, '_')
                                  .toLowerCase();
                     },
    ignoreSelector:  '.toc-ignore',
    scrollTo:        0,
    showAndHide:     true,
    smoothScroll:    true
  };

  $('#TOC').tocify(options).data('toc-tocify');
});
