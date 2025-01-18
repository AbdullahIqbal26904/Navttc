//Jquery syntax
// $(selector).action()
// {

// }
//dom is ready and loaded
$(document).ready(function() {
    $("#btn").click(() => {
        $('#t').text('Saqlain');
        // $('#t1').text('hello 2')
        
    });
    $("#btn1").click(() => {
        $('#t1').text('Saqlain');
        // $('#t1').text('hello 2')
        
    });
    $("#btn2").click(() => {
        $('#t2').text('Saqlain');
        // $('#t1').text('hello 2')
        
    });
    $("#btn2").click(() => {
        $('#container').after('<strong>new html content</strong>');
        // $('#t1').text('hello 2')
        
    });
    $("#btn2").click(() => {
        $('#container').remove();
        // $('#t1').text('hello 2')
        
    });
    $("#btn2").click(() => {
        $('#container').empty();
        // $('#t1').text('hello 2')
        
    });
    $("#mybtn").click(() => {
        $('.highlighit').text("hello worlddd!")
    })
});
// document.getElementById("btn").addEventListener("click",() => {
//     document.querySelector('p').textContent = "hello worlds"
// })