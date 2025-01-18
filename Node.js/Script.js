$(document).ready(function () {
    function fetchData() {
        $.ajax({
            url: '/abc',
            method: 'GET',
            datatype: 'json',
            success: function (data) {
                var dataContainer = $('#data-container');
                dataContainer.empty();
                data.map(function (item) {
                    dataContainer.append(
                        `<div key="${item.id}">User Id : ${item.id}, User Name: ${item.Name}, Email: ${item.email}</div>`
                    )
                });
            },
            error: function (xhr, status, error) {
                console.log('ERROR FETCHING DATA: ', error);
            }
        })
    }



    fetchData()
})