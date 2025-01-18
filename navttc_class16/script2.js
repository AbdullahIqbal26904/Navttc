$(document).ready(function() {
    $("#btn").click(() => {
        event.preventDefault()
        let task = $("#inp").val()
        let desc = $("#description").val()
        console.log(task)
        console.log(desc)
        if(task === "" || desc === ""){
            $(".container").html(`<div class="alert alert-danger" role="alert">
                                       task or description feilds Empty!!
                                    </div>`)
            return;
        }
        $("#add").append(`<tr>
                <td>
                <div>
                    <h3 id="task">${task}</h3>
                    <p id="desc">${desc}</p>
                    <button class="btn btn-danger mb-2"  onclick="delRow(this)">remove</button>
                    <button class="btn btn-warning mb-2" onclick="editRow(this)">edit</button>
                    <button class="btn btn-success mb-2" onclick="markComplete(this)">mark complete</button>
                    <span class="tick"></span>
                    </div>
                </td>
            </tr>`)
        $("#form")[0].reset()
    })
})
function delRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function editRow(button){
    let task = $("#task").text()
    let description = $("#desc").text()
    console.log(task)
    console.log(description)
    $("#inp").val(task)
    $("#description").val(description)
    delRow(button)
}
function markComplete(button) {
    var row = $(button).closest("tr").find("td");
    row.addClass("completed");
    $(button).siblings(".tick").html("&#10004;"); 
    $(button).remove(); 
}
