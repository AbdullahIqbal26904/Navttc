$(document).ready(() => {
    let savedHref = ""

    $("#saveAttr").click(() => {
        savedHref = $('#link').attr("href")
        console.log(savedHref)
        alert("Attribute saved")
    })
    $("#displayAttr").click(() => {
        if(savedHref){
            $("#displayArea").append("Saved href: "+savedHref)
        }else{
            $("displayArea").append("No attributehas been saved yet.")
        }
    })
    $("#setAttr").click(() => {
        $("#link").attr("href","https://www.facebook.com")
    })
})