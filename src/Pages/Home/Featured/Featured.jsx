import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featuredItem text-white px-32 mt-8 bg-cover  pt-10 pb-16 bg-fixed ">
      <div className="bg-[#151515B3] p-4">
        <SectionTitle subHeading="Check it out" heading="Featured Item" />
        <div className="md:flex justify-center items-center pt-8 ">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md: ml-8">
            <p>March 20, 2023 </p>
            <p> WHERE CAN I GET SOME? </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-2 text-white mt-6">
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
