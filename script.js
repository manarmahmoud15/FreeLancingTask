// products.js

// Function to fetch products from a server
async function fetchProducts() {
    try {
      // Fetching products from the server
      const response = await fetch('https://alvioil.github.io/alvio.co.il/products.js');
      
      // Parsing the JSON response
      const products = await response.json();
      
      // Returning the products
      return products;
    } catch (error) {
      // Handling errors
      console.error('Error fetching products:', error);
      throw error;
    }
  }
  
  // Example usage:
  async function displayProducts() {
    try {
      // Fetching products
      const products = await fetchProducts();
      
      // Displaying products
      console.log('Products:', products);
      
      // You can now use the 'products' data in your application
      // For example, update the UI to display the products
    } catch (error) {
      // Handle errors
      console.error('Error displaying products:', error);
    }
  }
  
  // Calling the displayProducts function to fetch and display products
  displayProducts();
  