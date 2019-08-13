var Pretty = require('pretty');
var Prism = require('prismjs');
require('prismjs/components/prism-sass');
require('prismjs/components/prism-bash');

const copyToClipboard = str => {
  const el = document.createElement('textarea'); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
};

const swapStyleSheet = id => {
  document.getElementById('pagestyles').setAttribute('href', id);
};

// const initiate = () => {
//   console.log("Script Initialized");
//   var toggle = document.getElementById("style-switch");
//   toggle.onchange = function (e) {
//     if (e.target.checked) {
//       swapStyleSheet("../assets/ether-dark.min.css");
//     } else {
//       swapStyleSheet("../assets/ether.min.css");
//     }
//   };
// };

const PrevNext = (current, future) => {
  var list = [];
  //find current
  // href current + 1 or current - 1;
};

const codePen = elem => {
  let el = $(elem[0]),
    HTML = '',
    CSS = '',
    JS = '';

  HTML = el.text();

  var data = {
    title: 'Ether Pen',
    description: '',
    html: HTML,
    html_pre_processor: 'none',
    css: 'body {padding: 40px}',
    css_pre_processor: 'none',
    css_starter: 'neither',
    css_prefix_free: false,
    js: JS,
    js_pre_processor: 'none',
    js_modernizr: false,
    js_library: '',
    html_classes: '',
    css_external:
      'https://styles.trimblemaps.com/css/ether.min-0.3.2.css;https://styles.trimblemaps.com/css/ether-layout.min-0.3.2.css;https://styles.trimblemaps.com/assets/1.1.0/fonts/ether-icons.css;https://fonts.googleapis.com/icon?family=Material+Icons',
    js_external: 'https://styles.trimblemaps.com/css/ether-layout.min-0.3.2.js',
    template: true,
  };

  var JSONstring = JSON.stringify(data)
    // Quotes will screw up the JSON
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  var form =
    '<form action="https://codepen.io/pen/define" method="POST" target="_blank">' +
    '<input type="hidden" name="data" value=\'' +
    JSONstring +
    "'>" +
    '<button type="submit" value="Open in CodePen" class="btn btn-link codepen-mover-button">Open in CodePen</button>' +
    '</form>';

  el.after(form);
};

$(document).ready(function() {
  $('.guide-code').each(function(i, block) {
    var prev_html = Pretty(
      $(block)
        .siblings('.guide-sample')
        .html()
    );
    var html_code = Prism.highlight(
      prev_html,
      Prism.languages.markup,
      'markup'
    );
    var elem = $('<pre>')
      .addClass('codepen-able')
      .html(html_code)
      .appendTo('<code>');
    $(block).append(elem);
    codePen(elem);
  });

  $('.guide-copy-code,.guide-code').on('click', e => {
    var str = $(e.currentTarget)
      .siblings('.guide-sample')
      .html();
    copyToClipboard(str);
    // Get the snackbar DIV
    var snack = $('#snackbar');

    // Add the "show" class to DIV
    snack.text('Code copied to clipboard.').addClass('show');

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
      snack.removeClass('show');
    }, 3000);
  });

  $('.bg-color-select').on('change', e => {
    const thisColor = $(e.currentTarget).val();
    $(e.currentTarget).parent().siblings('.guide-sample').css('background-color',thisColor);
  });

  $('#copyExampleButton').on('click', () => {
    var str = $('#interactiveExample').html();
    copyToClipboard(str);
    // Get the snackbar DIV
    var snack = $('#snackbar');

    // Add the "show" class to DIV
    snack.text('Code copied to clipboard.').addClass('show');

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
      snack.removeClass('show');
    }, 3000);
  });

  const close_popovers = () => {
    $('.hover-dimensions')
      .find('*')
      .removeClass('pop-highlight')
      .popover('dispose');
  };

  $('.hover-dimensions')
    .find('*')
    .not('p')
    .not('div')
    .on('mouseenter', e => {
      close_popovers();
      var elem = $(e.currentTarget);
      elem.addClass('pop-highlight');
      var pop = elem.popover({
        placement: 'top',
        content: `
        <p class="small text-primary font-weight-bold m-0">${elem.prop('tagName')}</p>
        <p class="small mb-0"><strong>Height:</strong> ${elem.outerHeight()}px</p>
        <p class="small mb-0"><strong>Font size:</strong> ${elem.css('font-size')}</p>
        <p class="small mb-0"><strong>Padding:</strong> ${elem.css('padding')}</p>
        <p class="small mb-0"><strong>Border:</strong> ${elem.css('border-width')}</p>
        `,
        html: true,
      });
      elem.popover('show');
    });

  $('.hover-dimensions')
    .find('*')
    .on('mouseleave', e => {
      var elem = $(e.currentTarget);
      elem.removeClass('pop-highlight');
      elem.popover('dispose');
    });

  const rightNavTemplate = id => {
    return `<h5 class="border-bottom border-primary">Contents</h5>
    <nav class="nav flex-column" id="${id}"></nav>`;
  };

  const buildRightNav = (navItems, navId)=> {
    $('.guide-right-nav').children().remove();
    const navPrefix = navId.substr(0, navId.indexOf('-') + 1);
    if(navItems.length > 0) {
      $('.guide-right-nav').append(rightNavTemplate(navId));
      $(navItems).each((i, e) => {
        const elem = $(e);
        const elemName = $(elem).text().replace(/\s+/g, '-').toLowerCase();
        elem.wrapInner('<a name="' + navPrefix + elemName + '" />');
        const navItem = $('<li class="nav-item"></li>').appendTo($('#' + navId));
        $('<a class="nav-link" href="#' + navPrefix + elemName + '"></a>').text( $(elem).text()).appendTo(navItem);
      });
      $('.guide-right-nav .nav li:first-child a').addClass('active');
    }
  };

  $('.guide-tab-panes .tab-pane.active').each((idx, t) => {
    // $(".guide-right-nav").css("margin-top", $(t).parent().offset().top - 108);
    const thisNav = $(t).attr("id") + '-nav';
    const navItems = $(t).find('h2,h3,h4');
    buildRightNav(navItems, thisNav);
  });

  $('#ContentTabs .nav-link').on('click', e => {
    if($(e.currentTarget).hasClass('active')){
      return;
    } else {
      const elem = $('.tab-pane').not('.active');
      const thisNav = $(elem).attr("id") + '-nav';
      const navItems = $(elem).find('h2,h3,h4');
      buildRightNav(navItems, thisNav);
    }
  });

  $('.guide-section').each((idx, t) => {
    // $(".guide-right-nav").css("margin-top", $(t).offset().top - 150);
    const navItems = $(t).children('h2,h3,h4');
    buildRightNav(navItems, 'section-nav');
  });

  $('.guide-content').on('scroll', e =>{
    $(e.currentTarget).find('.tab-section, .guide-section').children('h2,h3,h4').each((i,t)=>{
      let elemOffset = ($(t).offset().top - $(e.currentTarget).offset().top);
      if(  elemOffset > -20 &&  elemOffset < 60) {
        const thisName = $(t).find('a').attr('name');
        $('.guide-right-nav a').removeClass('active');
        $('.guide-right-nav [href="#' + thisName + '"]').addClass('active');
      }
    });
  });

  if ($('#ContentTabs').length !== 0) {
    const tabs = $('#ContentTabs');
    const scrollContainer = $('.guide-scroll-container');
    const guideContent = $('.guide-content');
    const pos = tabs.offset().top;

    guideContent.on('scroll', () => {

      if(guideContent.scrollTop() + $('.guide-header').outerHeight() >= pos) {
        //stick tabs
        tabs.addClass('sticky');
        scrollContainer.addClass('has-sticky');
      } else {
        //unstick tabs
        tabs.removeClass('sticky');
        scrollContainer.removeClass('has-sticky');
      }
    });
  }
});

// window.onload = initiate;

$(function() {
  function findAnchorElement(path) {
    const anchors = $('a[href]').toArray();
    const currentAnchor = anchors.find(node => node.href.endsWith(path));
    $(currentAnchor).addClass('active');
    return currentAnchor;
  }

  function findNavGroup(anchorElement) {
    if (!anchorElement) {
      return [];
    }

    const parentElement = $(anchorElement).parents('div');
    if (!parentElement || parentElement.length < 1) {
      return [];
    }

    const parentElementId = parentElement[0].id;
    return parentElementId === 'componentsSubnav'
      ? [$('#components'), $('#componentsSubnav')]
      : parentElementId === 'utilitiesSubnav'
      ? [$('#utilities'), $('#utilitiesSubnav')]
      : parentElementId === 'foundationsSubnav'
      ? [$('#foundations'), $('#foundationsSubnav')]
      : [];
  }

  function expandNavGroup([nav, subnav]) {
    if (!nav || !subnav) {
      return;
    }

    nav.removeClass('collapsed').attr('aria-expanded', true);
    subnav.addClass('show');
  }

  (function() {
    const anchorElement = findAnchorElement(window.location.pathname);
    // console.log(anchorElement);
    const navGroup = findNavGroup(anchorElement);
    // console.log(navGroup);
    expandNavGroup(navGroup);
  })();
});
