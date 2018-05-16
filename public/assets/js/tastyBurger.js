$(function() {
    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
        var newState = $(this).data("newstate");

        var burgerState = {
            devour : newState
        }

        $.ajax("/api/burger"+id,  {
            type: "PUT",
            data: burgerState
        }).then(
            function() {
                console.log("Changed burger to ", newState)
            }
        )
    })

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name : $("#eat").val().trim(),
        }

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created burger");
                location.reload();
            }
        )
    })
})