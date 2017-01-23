import $ from 'jquery';

let columnOne = 0;
let columnTwo = 0;
let columnThree = 0;
let columnFour = 0;

$('[data-grid-container]').children().each((index, el) => {
  if (window.innerWidth < 1024) {
      if (columnThree <= columnTwo) {
        $(el).css('top', columnThree + 'px');
        $(el).css('left', $(el).outerWidth()*2+50  + 'px');
        columnThree += parseInt($(el).css('height'));
      } else if ( columnTwo <= columnOne) {
        $(el).css('top', columnTwo + 'px');
        $(el).css('left', $(el).outerWidth()+50 + 'px');
        columnTwo += parseInt($(el).css('height'));
      } else if (columnOne < columnTwo) {
        $(el).css('top', columnOne + 'px');
        columnOne += parseInt($(el).css('height'));
      }
      return;
    }

    if (columnFour <= columnThree) {
      $(el).css('top', columnThree + 'px');
      $(el).css('left', $(el).outerWidth()*3+50 + 'px');
      columnFour += parseInt($(el).css('height'));
    } else if (columnThree <= columnTwo) {
      $(el).css('top', columnThree + 'px');
      $(el).css('left', $(el).outerWidth()*2+50  + 'px');
      columnThree += parseInt($(el).css('height'));
    } else if ( columnTwo <= columnOne) {
      $(el).css('top', columnTwo + 'px');
      $(el).css('left', $(el).outerWidth()+50 + 'px');
      columnTwo += parseInt($(el).css('height'));
    } else if (columnOne < columnTwo) {
      $(el).css('top', columnOne + 'px');
      columnOne += parseInt($(el).css('height'));
    }

});

[...document.querySelectorAll('[data-sub-menu]')].forEach((subMenu) => {
  subMenu.addEventListener('mouseover', (el) => {
    el.target.classList.add('is-shown');
  });

  subMenu.addEventListener('mouseleave', (el) => {
    el.target.classList.remove('is-shown');
  });
});
