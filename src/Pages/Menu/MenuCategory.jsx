import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex flex-col justify-center items-center">
      <button className="btn btn-outline border-0 border-b-2 my-6">
        View Full Menu
      </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
