$(function() {
    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
        var newState = $(this).data("newstate");

        var burgerState = {
            devoured : newState
        }

        $.ajax("/api/burger/"+id,  {
            type: "PUT",
            data: burgerState
        }).then(
            function() {
                location.reload();
                console.log("Changed burger to ", burgerState.devoured)

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