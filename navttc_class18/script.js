$(document).ready(() => {
    var savedContent = ''
    $('#savedContent').click(() => {
        savedContent = $("#contentDiv").html()
        alert("content saved")
    })
    $('#displayContent').click(() => {
        if(savedContent)
            {
                $("#displayArea").html(savedContent)
            }else{
                $("#contentDiv").html(`<p>No content have been saved yet</p>`)
            }
    })
    $('#setContent').click(() => {
        savedContent = $("#contentDiv").html()
        $("#contentDiv").html(`<p>Abdullah Iqbal</p>`)
    })
    $('#btn1').click(() => {
        $('#h3').text(`Product 1`)
        $('#ul').removeClass("hide")
        $('#li1').text( `Quality 1`)
        $('#li2').text( `Quality 2`)
        $('#li3').text( `Quality 3`)
            
    })
    $('#btn2').click(() => {
        $('#h3').text(`Product 2`)
        $('#ul').removeClass("hide")
        $('#li1').text( `Quality 1`)
        $('#li2').text( `Quality 2`)
        $('#li3').text( `Quality 3`)
    })
    $('#btn5').click(() => {
        $('#product').append(`<p>this is good phone</p>`)
    })
    let cont1 = "Samsung Watch"
    let cont2 = "Xiaomi Watch"
    $('#btnn1').click(() => {
        $("#span").text(`${cont1}`)
    })
    $('#btnn2').click(() => {
        $("#span").text(cont2)
    })
    
   
})