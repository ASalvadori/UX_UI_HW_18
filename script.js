$(document).ready(function () {
    const toggleSwitch = $("#dark-mode-toggle");
  
    toggleSwitch.on("change", function () {
      if (this.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  
    function enableDarkMode() {
      $("body").addClass("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    }
  
    function disableDarkMode() {
      $("body").removeClass("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  
    // Check localStorage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
      toggleSwitch.prop("checked", true);
      enableDarkMode();
    }
  
    // Scroll Up Button
    const scrollUpBtn = $("#scrollUpBtn");
  
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        scrollUpBtn.show();
      } else {
        scrollUpBtn.hide();
      }
    });
  
    scrollUpBtn.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  });
                