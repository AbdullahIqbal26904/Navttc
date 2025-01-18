
$(document).ready(function() {
    $('#add').on('click', function() {
        const student = {
            name: $('#name').val(),
            cnic: $('#cnic').val(),
            course: $('#course').val(),
            grade: $('#grade').val(),
            gpa: $('#gpa').val()
        };
        console.log(student)
        $.ajax({
            url:'/add-data',
            method:'POST',
            contentType: 'application/json',
            data: JSON.stringify(student),
            success: function(response) {
                alert(response)
            },
            error: function(error){
                console.log('error',error);
            }
        })
})
    
})