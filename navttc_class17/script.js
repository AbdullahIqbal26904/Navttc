$(document).ready(function() {
    $("#mybtn").click(function()
    {
        alert("alert! button was clicked");
    }
)
$("#mybtn1").dblclick(function()
    {
        alert("alert! button was clicked");
    }
)
$("#mybtn2").mouseenter(function()
    {
        alert("alert! button was clicked");
    }
)
$("#mybtn3").mouseleave(function()
    {
        alert("alert! button was clicked");
    }
)
$("#mybtn4").keydown(function()
    {
        alert("alert! button was clicked");
    }
)
$("#mybtn5").keyup(function()
    {
        alert("alert! button was clicked");
    }
)
$("#myybtn1").click(function()
    {
        $("#mydiv2").show()
    }
)
$("#myybtn12").click(function()
    {
        $("#mydiv2").hide()
    }
)
$("#myybtn13").click(function()
    {
        $("#mydiv2").toggle()
    }
)
$("#fade_in").click(function()
    {
        $("#mydiv3").fadeIn(1000)
    }
)
$("#fade_out").click(function()
    {
        $("#mydiv3").fadeOut(1000)
    }
)
$("#fade_toggle").click(function()
    {
        $("#mydiv3").fadeToggle(1000)
    }
)
$("#slide_in").click(function()
    {
        $("#mydiv3").slideUp(1000)
    }
)
$("#slide_out").click(function()
    {
        $("#mydiv3").slideDown(1000)
    }
)
$("#slide_toggle").click(function()
    {
        $("#mydiv3").slideToggle(1000)
    }
)
$("#animateButton").click(function()
    {
        $("#myDiv").animate({
            width: "300px",
            height: "300px",
            opacity: 0.5,
            backgroundColor: "olive",
            color: "red"
        },1000, function(){
            alert("animation complete")
        })
    }
)
$("#animatestop").click(() => {
    $("#myDiv").stop()
})

})