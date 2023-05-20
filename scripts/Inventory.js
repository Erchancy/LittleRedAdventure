export const openInventory = () => {
    // Check if the inventory popup window is already open
    if (!window.myinventory || window.myinventory.closed) {
      const inventory = window.open("", "myinventory", "width=300,height=200");
  
      // Customize the contents of the pop-up window
      inventory.document.write("<h1>Hello, Pop-up!</h1>");
      inventory.document.write("<p>This is a custom pop-up window.</p>");
  
      // Add styles to the pop-up window
      const style = inventory.document.createElement("style");
      style.textContent = `
        body {
          background-color: lightgray;
          text-align: center;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: red;
        }
      `;
      inventory.document.head.appendChild(style);
    }
  }
  