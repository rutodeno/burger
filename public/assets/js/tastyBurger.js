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
                location.reload();

            }
        )
    })

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name : $("#eat").val().trim(),
        }
        console.log("new Burger" + newBurger.name);


        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        )
    })
})