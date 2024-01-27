import React  from "react";
import Banner from "./COMPONENTS/BANNER/Banner.js";
import Fooditem from './COMPONENTS/FOODITEM/Fooditem.js';
import Footer from "./COMPONENTS/FOOTER/Footer.js";
import './App.css';

      const App = () => {
        const handleAddClicked = () => {
        };
        const fooditem = [
            {
              id:1,
              imageUrl:
               "https://www.foodandwine.com/thmb/HVbJsZlSG7BQF1mif2Z5tZICM8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Buttermilk-Pancakes-FT-RECIPE1222-5589088e52c94e6f8a610b4393196fbb.jpg",
              name:"CHISSE PANCAKE",
              price:"199/-",
              text:"free delivery!",
            },
            {
              id:2,
              imageUrl:
              "https://hips.hearstapps.com/hmg-prod/images/pesto-egg-in-a-hole2-1650646256.jpg?crop=1.00xw:0.804xh;0,0&resize=640:*",
              name:"EGG BUTTER TOST",
              price:"199/-",
              text:"free delivery!",
            },
            {
              id:3,
              imageUrl:
              "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
              name:"CHIKEN BIRIYANI",
              price:"199/-",
              text:"free delivery!",
            },
        
              {
                id:4,
                imageUrl:
                "https://omnivorescookbook.com/wp-content/uploads/2022/10/221013_Chicken-Chow-Mein_5.jpg",
                name:"CHIKEN CHOWMIN",
                price:"199/-",
                text:"free delivery!",
              },
        
              {
                id:5,
              imageUrl:
                "https://cdn.dotpe.in/longtail/store-items/8007309/Z6ytLCL9.jpeg",
              name:"EGG CHIKEN ROLL",
              price:"199/-",
              text:"free delivery!",
              },
        
              {
                id:6,
              imageUrl:
              "https://imgs.search.brave.com/yZzY_eTCUVndedZoGTsfmwWzEh9qwkkUISKix6Vb5ow/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXZhcnMuZ3VsZm5l/d3MuY29tLzIwMjEv/MDgvMjQvQmVuZ2Fs/aS1yZWNpcGUtLUNo/aWNrZW4ta29zaGEt/XzE3Yjc3OGU5OTQ0/X21lZGl1bS5qcGc",
              name:"MASALA CHIKEN",
              price:"199/-",
              text:"free delivery!",
              },
        
              {
                id:7,
              imageUrl:
              "https://bellyfull.net/wp-content/uploads/2021/09/Beef-Fried-Rice-blog-2.jpg",
              name:"VEG FRIED RICE",
              price:"199/-",
              text:"free delivery!",
              },
              {
                id:8,
              imageUrl:
              "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
              name:"BUTTER HOT COFFE ",
              price:"199/-",
              text:"free delivery!",
              },
              {
                
                  id:9,
                imageUrl:
                "https://cdn.dotpe.in/longtail/store-items/1332303/IX4B7CFe.jpeg",
                name:" ICECREAM COLD COFFE",
                price:"199/-",
                text:"free delivery!",
                },
                
                  {
                    id:10,
                  imageUrl:
                  "https://houseofnasheats.com/wp-content/uploads/2023/08/Mango-Lassi-Recipe-15-500x500.jpg",
                  name:"MANGO JUICE",
                 price:"199/-",
                  text:"free delivery!",
                  },

                 
                  {
                    id:11,
                    imageUrl:
                     "https://www.merirasoi.com/wp-content/uploads/2020/05/chicken-momos-recipe-780x390-1.jpg",
                     name: "CHIKEN MOMO",
                     price:"199/-",
                     text:"free delivery!",
                  },

                  {
                    id:12,
                    imageUrl:
                    "https://www.sawadindiaka.in/wp-content/uploads/2021/05/momo-recipe-main.jpg",
                    name:"VEG MOMO BOIL",
                    price:"199/-",
                    text:"free delivery!"
                    
                  },
                  {
                    id:13,
                    imageUrl:
                    "https://images.sbs.com.au/dims4/default/0aa5136/2147483647/strip/true/crop/2000x1125+0+58/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Ffood%2Fpublic%2Frx055-tcu-s4-wine-time-sofia-levin-red-wine-chocolate-cake-l.jpg",
                    name:"CHOCOLATE CAKE",
                    price:"199/-",
                    text:"free delivery!"
                    
                  },

                  {
                    id:14,
                    imageUrl:
                      "https://littlespicejar.com/wp-content/uploads/2014/02/Chicken-Puff-Pastry-Chicken-Patties-17.jpg",
                    name:"CHICKEN PATTIES",
                    price:"199/-",
                    text:"free delivery!",                      
                  },

                  {
                    id:15,
                    imageUrl:
                     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/640px-Supreme_pizza.jpg",
                     name:"HOT PIZZA CHILLI",
                     price:"199/-",
                     text:"free delivery!",
                  },

                  {
                    id:16,
                    imageUrl:
                     "https://www.foodandwine.com/thmb/V1OEgtLQGUv_w2Fvm40WMLsJ4rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indulgent-Hot-Chocolate-FT-RECIPE0223-fd36942ef266417ab40440374fc76a15.jpg",
                     name:"HOT CHOCOLATE",
                     price:"199/-",
                     text:"free delivery!",
                  }

                 
                  
         ];

         return (
          <div>
            <Banner />
            <div className="products-section">
              <h1>OUR FOODS</h1>
              <ul className="product-row-list">
                {fooditem.map((eachObj) => (
                  <Fooditem
                    key={eachObj.id}
                    product={eachObj}
                    onAddClicked={handleAddClicked} // Pass the function here
                  />
                ))}
              </ul>
            </div>
            <Footer />
          </div>
        );
      };
      
      export default App;
       