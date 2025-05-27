// Sample list of registered users (for demonstration purposes)
const registeredUsers = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
  ];
  
  // Function to check if the user is registered
  function checkUserRegistration(username, password) {
    return registeredUsers.some(user => user.username === username && user.password === password);
  }
  
  // Add an event listener for the login form submission
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to server for demo purposes
  
    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if the user is registered
    if (checkUserRegistration(username, password)) {
      // Redirect to inputs.html if login is successful
      window.location.href = "inputs.html";
    } else {
      // Show a popup message if user is not registered
      alert("User not registered. Please sign up.");
    }
  });
  