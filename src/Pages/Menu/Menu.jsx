import { Helmet } from "react-helmet-async";
import UseMenu from "../../Hooks/UseMenu";
import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss| Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"/>
      <SectionTitle subHeading="Don't Miss" heading="Todays Offer"/>
      {/* offered menu items */}
      <MenuCategory items={offered} /> 
      {/* dessert menu items */}
      <MenuCategory items={dessert} title="dessert" img={dessertImg}/>
      {/* pizza menu items */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}/>
      {/* salad menu items */}
      <MenuCategory items={salad} title="salad" img={saladImg}/>
      {/* soup menu items */}
      <MenuCategory items={soup} title="soup" img={soupImg}/>
    </div>
  );
};

export default Menu;
