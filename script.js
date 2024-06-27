function loadPage(page) {
    $.ajax({
        url: 'pages/' + page,
        method: 'GET',
        success: function(data) {
            $('#content').html(data);
            console.log("Page is loaded.")
        },
        error: function() {
            $('#content').html('<p>Error while loading page.</p>');
            console.log("Error while loading page.");
        }
    });
}

$(document).ready(function() {
    loadPage('home.html');
});

let nav = document.querySelector(".header");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};
