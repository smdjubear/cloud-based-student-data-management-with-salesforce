function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
   
    // Check if the username and password match
    if (username === "rayalaseemauniversity@gmail.com" && password === "RU@gmail.com") {
      // Open another file link
      window.open("data-entry.html" , "_blank");
    } else {
      // Show an error message
      alert("Invalid username or password. Please try again.");
    }
   }
   