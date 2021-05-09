jQuery(function($){
    $('.sidebar-toggler').on('click', function () {
        $('#sidebar').toggleClass('hidden');
    });

    $('#addUserButton').submit(function(event){
        alert("User Added Successfully");
    });


    $('#updateUserButton').submit(function(event){
        event.preventDefault();
        var unindexed_array = $(this).serializeArray();
        var data = {}

        $.map(unindexed_array,function(n,i){
            data[n['name']] = n['value']
        })
        
        console.log(data);

        var request = {
        "url":`${PORT}/api/users/${data.id}`,
        "method":"PUT",
        "data":data
        }

        $.ajax(request).done(function(response){
            alert("Data Updated Successfully!!!")
        })
    });

    $(document).ready(function(){
        $('.anthorDeleteButton a').click(function() {
            
            var id = $(this).attr("data-id");
            var request = {
                "url":`${PORT}/api/users/${id}`,
                "method":"DELETE",
            }
            
            if(confirm("Do you really want to delete this record?")){
                $.ajax(request).done(function(response) {
                    alert("Data Deleted Successfully!");
                    location.reload();
                })    
            }
        });
    });
});

