$(document).ready(function() {
    $('#get').click(() => {
        console.log('first')
        $.ajax( {
            url: 'http://localhost:3000/getdata',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                var datacontainer = $('#acb');
                datacontainer.empty();
                console.log(data);
                $.each(data,function(index,row) {
                    var div = $('<div>')
                    console.log(row)
                    datacontainer.innerText(row.Make + row.Model + row.Color + row.Mileage + row.Comments);
                    datacontainer.append(div);
                } )
            },
            error: function(xhr,status,eroor){
                console.log('Error',eroor)
            }
        })
    })
})