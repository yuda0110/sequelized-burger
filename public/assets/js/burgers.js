$(function() {
  $('.devour-btn').on('click', function(event) {
    const burgerId = $(this).attr('id');
    const updatedBurger = {
      id: burgerId
    };
    const newCustomer = {
      BurgerId: burgerId,
      customerName: $(`#customer-name-${burgerId}`).val().trim()
    };
    console.log('id: ' + updatedBurger.id);

    if (newCustomer.customerName.length > 0) {
      // Send the PUT request.
      $.ajax('/', {
        type: 'PUT',
        data: updatedBurger
      }).then(
        () => {
          console.log('Devoured burger ID', updatedBurger.id);
          // Reload the page to get the updated list
          location.reload();
        }
      );

      // Send the POST request.
      $.ajax('/customer', {
        type: 'POST',
        data: newCustomer
      }).then(() => {
          console.log('Created new customer');
          // Reload the page to get the updated list
          location.reload();
        }
      );
    } else {
      alert('Please type in a customer\'s name before eating!');
    }
  });

  $("#add-form").on("submit", function(event) {
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