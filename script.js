$(document).ready(init);

function init() {

  elementClick();
  subElementHover()
}

function elementClick() {

  var navElement = $(".navElement");
  navElement.click( function() {

    hideOldElement();

    var me = $(this);
    me.children(".dropContainerI").slideToggle();
  });
}

function hideOldElement() {

  var subElement = $(".dropContainerI");
  subElement.slideUp("fast");
}

function subElementHover() {

  var subElement = $(".dropElementI");
  subElement.hover(
    function() {

      var me = $(this);
      var subsubElement = me.children(".dropContainerII");

      subsubElement.slideToggle();
    },
    function() {

      var me = $(this);
      var subsubElement = me.children(".dropContainerII");

      subsubElement.slideToggle("fast");
    }
  );
}
