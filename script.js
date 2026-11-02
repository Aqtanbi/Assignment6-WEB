$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h2").css("letter-spacing", "0.2px");                 
  $("#name").css("color", "#3a5bd9");                      
  $(".intro").css("font-size", "1.1rem");                 

  const headlines = [
    "Software engineering student",
    "jQuery learner",
    "Future full-stack developer"
  ];
  let h = 0;

  $("#changeHeadline").click(function () {
    h = (h + 1) % headlines.length;
    $("#headline").html("<em>" + headlines[h] + "</em>");  
    $(".intro").text("Hi! I am Aktanbi, " + headlines[h].toLowerCase() + "."); 
  });

  $("#highlightIntro").click(function () {
    $(".intro").css({
      "background": "rgba(58,91,217,.12)",
      "padding": "8px",
      "border-radius": "6px"
    });
  });

  $("#darkBtn").click(function () { $("body").addClass("dark"); });
  $("#lightBtn").click(function () { $("body").removeClass("dark"); });

  $("#hideBtn").click(function () { $("#status, #facts").hide(); });
  $("#showBtn").click(function () { $("#status, #facts").show(); });
  $("#toggleBtn").click(function () { $("#status, #facts").toggle(); });

  $("#fadeInBtn").click(function () { $(".gallery img").fadeIn(500); });
  $("#fadeOutBtn").click(function () { $(".gallery img").fadeOut(500); });
  $("#fadeToggleBtn").click(function () { $(".gallery img").fadeToggle(500); });

  $(".panel-title").click(function () { $(this).next(".panel").slideToggle(300); });
  $("#slideDownAll").click(function () { $(".panel").slideDown(300); });
  $("#slideUpAll").click(function () { $(".panel").slideUp(300); });

  function getSkill() {
    const value = $.trim($("#skillInput").val());
    if (value === "") {
      $("#error").text("Please enter a skill first.");
      return null;
    }
    $("#error").text("");
    return value;
  }

  $("#addSkill").click(function () {
    const skill = getSkill();
    if (skill) {
      $("#skills").append($("<li>").text(skill));
      $("#skillInput").val("");
    }
  });

  $("#prependSkill").click(function () {
    const skill = getSkill();
    if (skill) {
      $("#skills").prepend($("<li>").text(skill));
      $("#skillInput").val("");
    }
  });

  $("#removeSkill").click(function () {
    $("#skills li:last").remove();
    $("#error").text("");
  });

  $("#changeLink").click(function () {
    $("#socialLink")
      .attr("href", "https://www.linkedin.com")
      .text("LinkedIn");
  });

  $("#nameInput").on("input", function () { $("#liveName").text($(this).val()); });
  $("#emailInput").on("input", function () { $("#liveEmail").text($(this).val()); });

  let expanded = false;
  $("#animateSkills").click(function () {
    $(".bar").each(function () {
      const target = expanded ? 0 : $(this).data("level");
      $(this).stop().animate({ width: target + "%" }, 1000);
    });
    expanded = !expanded;
  });
});
