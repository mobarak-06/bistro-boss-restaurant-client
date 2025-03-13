import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle subHeading="Popular Items" heading="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <button className="btn  btn-outline border-0 border-b-2  mt-6">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
