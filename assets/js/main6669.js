window.addEventListener("load", function () {
  animatedEffect();
});

window.addEventListener("resize", function () {});

window.addEventListener("scroll", function () {
  head_1_sticky();
  animatedEffect();
});

function register() {
  head_1_sticky();
  head_1_hamburger();
  footerMenuToggle();
}
register();

function head_1_hamburger() {
  let hamb = document.querySelector(".hamburger");

  if (hamb == null) {
    return;
  }

  let body = document.querySelector("body");
  let html = document.querySelector("html");
  hamb.addEventListener("click", function () {
    body.classList.toggle("menu_opened");
    html.classList.toggle("no_overflow");
  });
}

function head_1_sticky() {
  let scrollpos = window.scrollY;
  let body = document.querySelector("body");

  let add_class_on_scroll = () => body.classList.add("sticky_h");
  let remove_class_on_scroll = () => body.classList.remove("sticky_h");

  scrollpos = window.scrollY;

  if (scrollpos >= 1) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
}

(function ($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function (partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

function animatedEffect() {
  $(".animated").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("a_active");
    }
  });

  $(".count").each(function (i, el) {
    var el = $(el);
    if (el.visible(true) && !el.hasClass("c_active")) {
      el.addClass("c_active");
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    }
  });
}

function footerMenuToggle() {
  let faqItems = document.querySelectorAll(".foot_1 .menus .menu .heading");
  if (faqItems == null) {
    return;
  }
  faqItems.forEach(function (userItem) {
    userItem.addEventListener("click", function () {
      this.parentElement.classList.toggle("active");
    });
  });
}

function phoneMask() {
  $(".phone_mask")
    .keydown(function (e) {
      var key = e.which || e.charCode || e.keyCode || 0;
      $phone = $(this);

      // Don't let them remove the starting '('
      if ($phone.val().length === 1 && (key === 8 || key === 46)) {
        $phone.val("(");
        return false;
      }
      // Reset if they highlight and type over first char.
      else if ($phone.val().charAt(0) !== "(") {
        $phone.val("(" + String.fromCharCode(e.keyCode) + "");
      }

      // Auto-format- do not expose the mask as the user begins to type
      if (key !== 8 && key !== 9) {
        if ($phone.val().length === 4) {
          $phone.val($phone.val() + ")");
        }
        if ($phone.val().length === 5) {
          $phone.val($phone.val() + " ");
        }
        if ($phone.val().length === 9) {
          $phone.val($phone.val() + "-");
        }
      }

      // Allow numeric (and tab, backspace, delete) keys only
      return (
        key == 8 ||
        key == 9 ||
        key == 46 ||
        (key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105)
      );
    })

    .bind("focus click", function () {
      $phone = $(this);

      if ($phone.val().length === 0) {
        $phone.val("(");
      } else {
        var val = $phone.val();
        $phone.val("").val(val); // Ensure cursor remains at the end
      }
    })

    .blur(function () {
      $phone = $(this);

      if ($phone.val() === "(") {
        $phone.val("");
      }
    });
}
phoneMask();

function sendContact() {
  $(".myform").on("submit", function (e) {
    e.preventDefault();

    var valid;
    valid = validateContact();
    if (valid) {
      var form = $(this);
      $.ajax({
        url: "form-send.php",
        type: "POST",
        data: form.serialize(),
        success: function (data) {
          console.log("success");
          form.addClass("success");
        },
        error: function () {
          console.log("error");
        },
      });
    }
    formClickHideError();
  });
}

function sendContact2() {
  $(".foot_1 .email_form").on("submit", function (e) {
    e.preventDefault();

    var valid;
    valid = validateContact2();
    if (valid) {
      var form = $(this);
      $.ajax({
        url: "form-send-email.php",
        type: "POST",
        data: form.serialize(),
        success: function (data) {
          console.log("success");
          form.addClass("success");
        },
        error: function () {
          console.log("error");
        },
      });
    }
    formClickHideError();
  });
}

function sendContact4() {
  $(".bl-50 .email_form").on("submit", function (e) {
    e.preventDefault();

    var valid;
    valid = validateContact4();
    if (valid) {
      var form = $(this);
      $.ajax({
        url: "form-send-email.php",
        type: "POST",
        data: form.serialize(),
        success: function (data) {
          console.log("success");
          form.addClass("success");
        },
        error: function () {
          console.log("error");
        },
      });
    }
    formClickHideError();
  });
}

function sendContact3() {
  $(".form_careers").on("submit", function (e) {
    e.preventDefault();

    var valid;
    valid = validateContact3();
    if (valid) {
      var form = $(this);
      $.ajax({
        url: "form-send-careers.php",
        type: "POST",
        data: form.serialize(),
        success: function (data) {
          console.log("success");
          form.addClass("success");
        },
        error: function () {
          console.log("error");
        },
      });
    }
    formClickHideError();
  });
}

function validateContact2() {
  var valid = true;

  jQuery(".i_error").removeClass("i_error");

  if ($(".foot_1 .email_form #foot-email").length) {
    if (!$(".foot_1 .email_form #foot-email").val()) {
      $(".foot_1 .email_form #foot-email").parent().addClass("i_error");
      valid = false;
    }
  }

  return valid;
}

function validateContact4() {
  var valid = true;

  jQuery(".i_error").removeClass("i_error");

  if ($(".bl-50 .email_form #foot-email").length) {
    if (!$(".bl-50 .email_form #foot-email").val()) {
      $(".bl-50 .email_form #foot-email").parent().addClass("i_error");
      valid = false;
    }
  }

  return valid;
}

function validateContact() {
  var valid = true;

  jQuery(".i_error").removeClass("i_error");

  if ($(".b_form_contact #name").length) {
    if (!$(".b_form_contact #name").val()) {
      $(".b_form_contact #name").parent().addClass("i_error");
      valid = false;
    }
  }

  if ($(".b_form_contact #company").length) {
    if (!$(".b_form_contact #company").val()) {
      $(".b_form_contact #company").parent().addClass("i_error");
      valid = false;
    }
  }

  if ($(".b_form_contact #phone.required").length) {
    if (!$(".b_form_contact #phone").val()) {
      $(".b_form_contact #phone").parent().addClass("i_error");
      valid = false;
    }
  }

  if ($(".b_form_contact #email").length) {
    if (!$(".b_form_contact #email").val()) {
      $(".b_form_contact #email").parent().addClass("i_error");
      valid = false;
    }
  }

  if ($(".b_form_contact #help").length) {
    if (!$(".b_form_contact #help").val()) {
      $(".b_form_contact #help").parent().addClass("i_error");
      valid = false;
    }
  }

  if ($(".b_form_contact #help").length) {
    if (!$(".b_form_contact #help").val()) {
      $(".b_form_contact #help").parent().addClass("i_error");
      valid = false;
    }
  }

  if ($(".b_form_contact .form_c_b input:checkbox").length) {
    if (
      $(".b_form_contact .form_c_b input:checkbox").filter(":checked").length <
      1
    ) {
      $(".b_form_contact .form_c_b").addClass("i_error");
      valid = false;
    }
  }

  return valid;
}

function validateContact3() {
  var valid = true;

  jQuery(".i_error").removeClass("i_error");

  if ($(".b_form_careers #name").length) {
    if (!$(".b_form_careers #name").val()) {
      $(".b_form_careers #name").parent().addClass("i_error");
      valid = false;
    }
  }

  if ($(".b_form_careers #phone.required").length) {
    if (!$(".b_form_careers #phone").val()) {
      $(".b_form_careers #phone").parent().addClass("i_error");
      valid = false;
    }
  }

  if ($(".b_form_careers #email").length) {
    if (!$(".b_form_careers #email").val()) {
      $(".b_form_careers #email").parent().addClass("i_error");
      valid = false;
    }
  }

  if ($(".b_form_careers #portfolio").length) {
    if (!$(".b_form_careers #portfolio").val()) {
      $(".b_form_careers #portfolio").parent().addClass("i_error");
      valid = false;
    }
  }

  if ($(".b_form_careers #why").length) {
    if (!$(".b_form_careers #why").val()) {
      $(".b_form_careers #why").parent().addClass("i_error");
      valid = false;
    }
  }

  return valid;
}
sendContact();
sendContact2();
sendContact3();
sendContact4();

function formClickHideError() {
  $(".i_error").on("click", function () {
    $(this).removeClass("i_error");
  });
}

$(document).ready(function () {
  // Add smooth scrolling to all links
  $(".smooth_scroll").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    const fixedHeaderHeight = 82;
    const top =
      document.querySelector("" + blockID).offsetTop - fixedHeaderHeight;
    window.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    });
  });
}
