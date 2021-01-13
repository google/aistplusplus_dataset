// Toggles between adding and removing the "responsive" class to topnav when the 
// user clicks on the icon.
function navbarResize() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function setActive(activeID) {
   var menu_item = document.getElementById( activeID );
   menu_item.className += ' active';
}

// Resizes the height of the div with id="main" of the page to fill in the whole
// page, except the navbar and header.
function mainDivResize(activeID) {
  if (activeID != null) {
    setActive(activeID);
  }

  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(
      body.scrollHeight, body.offsetHeight, html.clientHeight,
      html.scrollHeight, html.offsetHeight);

  const navbarHeight =
      document.getElementById('myTopnav').getBoundingClientRect().height;

  document.getElementById('main').style.height =
      String(height - navbarHeight) + 'px';
}

// Resizes the header when the user scroll, so that it does not take up that 
// much space.
function scrollCallback(event, bannerID) {
  if (event.target.scrollTop < 40) {
    document.getElementById(bannerID).style.height = '50px';
  }
  else if (event.target.scrollTop<190) {
    document.getElementById(bannerID).style.height = String(
        240-event.target.scrollTop) + 'px';
  }
  else if (event.target.scrollTop>=190) {
    document.getElementById(bannerID).style.height = '50px';
  }
}
