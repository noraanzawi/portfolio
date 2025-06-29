/*  js/pandoc-functions.js
 *  Helpers copied from Pandoc/R-Markdown default template
 *  ------------------------------------------------------ */

/* ----------  Build Bootstrap-style tabsets  ------------ */
window.buildTabsets = function(tocID){
  $('div.section.tabset').each(function(i){
    var section   = $(this);
    var tabs      = $('<ul class="nav nav-pills nav-justified"></ul>');
    var tabSetID  = 'tabset' + i;
    section.prepend(tabs);

    section.children('h2,h3').each(function(j){
      var header   = $(this);
      var headerID = header.attr('id');
      var paneID   = tabSetID + '_pane' + j;
      header.nextUntil('h2,h3').wrapAll(
        '<div class="tab-pane" id="'+paneID+'"/>'
      );

      tabs.append(
        $('<li role="presentation"></li>')
          .append($('<a role="tab" data-toggle="tab"></a>')
          .attr('href','#'+paneID)
          .text(header.text()))
      );
      header.remove();               // hide the original heading
    });

    // activate first tab
    tabs.find('li:first').addClass('active')
        .find('a').attr('aria-expanded','true');
    section.find('.tab-pane:first').addClass('active');
  });
};

/* ----------  Collapsible R-code blocks  ---------------- */
window.initializeCodeFolding = function(show){
  var toggle  = $('<button class="btn btn-default btn-xs code-folding-btn">Show Code</button>');
  $('pre.sourceCode, pre > code.sourceCode').each(function(){
    var pre = $(this).closest('pre');
    pre.before(toggle.clone());
    if(show!=="show"){ pre.hide(); }
  });

  $('.code-folding-btn').click(function(){
    var btn = $(this);
    btn.next('pre').slideToggle(150);
    btn.text( btn.text()==='Show Code' ? 'Hide Code' : 'Show Code' );
  });
};
