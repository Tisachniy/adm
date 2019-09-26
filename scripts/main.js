// A $( document ).ready() block.
    Swal.fire({
        title: 'Write your name',
        input: 'text',
      
        // validator is optional
        inputValidator: function(result) {
          if (!result) {
            return 'You need to select something!';
          }
        }
      }).then(function(result) {
        if (result.value) {
            console.log(result.value);
            document.getElementById("currentUser").innerText = result.value;
        }
      })




