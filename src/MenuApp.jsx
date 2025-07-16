import './App.css'
import RestaurantHeader from './components/RestaurantHeader'
import MenuCategory from './components/MenuCategory';
import SplashCursor from './components/SplashCursor';



function MenuApp() {

  const appetizers = [
    { id: 1, name: "Bruschetta", description: "Toasted bread with tomatoes", price: 12.50, isVegetarian: true, image: "https://www.simplyorganic.com/media/recipe/resized/520x520/wysiwyg/tmp/simply-oragnic-Roasted-Tomato-Bruschetta-1080x1080-thumbnail.jpg" },
    { id: 2, name: "Caesar Salad", description: "Classic Caesar with croutons", price: 15.00, isVegetarian: false, image: "https://static01.nyt.com/images/2024/09/10/multimedia/JG-Parmesan-Crusted-Salmon-Caesar-Saladrex-kjpb/JG-Parmesan-Crusted-Salmon-Caesar-Saladrex-kjpb-threeByTwoMediumAt2X.jpg?quality=75&auto=webp" },
    { id: 3, name: "Stuffed Mushrooms", description: "Mushrooms stuffed with cheese", price: 18.00, isVegetarian: true, image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/10/Stuffed-Mushrooms-7.jpg" },
  ];

  const mainCourses = [
    { id: 4, name: "Grilled Salmon", description: "Salmon fillet with herbs", price: 35.00, isVegetarian: false, image: "https://www.thecookierookie.com/wp-content/uploads/2023/05/grilled-salmon-recipe-2.jpg" },
    { id: 5, name: "Vegetable Stir Fry", description: "Mixed vegetables in a savory sauce", price: 22.00, isVegetarian: true, image:"https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-SQ.jpg" },
    { id: 6, name: "Chicken Parmesan", description: "Breaded chicken with marinara sauce", price: 28.00, isVegetarian: false, image: "https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_960,c_limit/Chicken-Parmesean-Recipe-Lede.jpg" },
  ];  

  const desserts = [
    { id: 7, name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: 10.00, isVegetarian: true, image:"https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&" },
    { id: 8, name: "Cheesecake", description: "Creamy cheesecake with a graham cracker crust", price: 9.00, isVegetarian: true, image: "https://www.onceuponachef.com/images/2017/12/cheesecake-1323x1536.jpg" },
    { id: 9, name: "Fruit Tart", description: "Seasonal fruits on a pastry crust", price: 11.00, isVegetarian: true, image: "https://hips.hearstapps.com/hmg-prod/images/fruit-tart-recipe-3-1650464619.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"},      
  ];  

  const handleOrder = (item) => {
     alert(`You ordered: ${item.name} for MYR${item.price.toFixed(2)}`);
     console.log(`Order placed for:`, item);
  };  


  return (
    <>
    <RestaurantHeader
      restaurantName="Gorgon Ramlee's Kitchen"
      tagline='Fine Dining Experience'
      rating={5}
      cuisine='French'
    />
   
    <MenuCategory
      categoryName="Appetizers"
      items={appetizers}
      onOrder={handleOrder}
    />
    <MenuCategory
      categoryName="Main Courses"
      items={mainCourses}     
      onOrder={handleOrder}
    />
    <MenuCategory
      categoryName="Desserts"
      items={desserts}
      onOrder={handleOrder}
    />
    
    <SplashCursor />

    
    </>
  );  
}


export default MenuApp;