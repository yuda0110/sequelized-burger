$(function() {
  $('.devour-btn').on('click', function(event) {
    const updatedBurger = {
      id: $(this).attr('id')
    };
    console.log('id: ' + updatedBurger.id);

    // Send the PUT request.
    $.ajax("/", {
      type: "PUT",
      data: updatedBurger
    }).then(
      () => {
        console.log("Devoured burger ID", updatedBurger.id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#burger-name").val().trim()
    };

    if (newBurger.name.length > 0) {
      // Send the POST request.
      $.ajax("/", {
        type: "POST",
        data: newBurger
      }).then(() => {
          console.log("Created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    } else {
      alert("Please type in a burger name before submitting!");
    }
  });
});