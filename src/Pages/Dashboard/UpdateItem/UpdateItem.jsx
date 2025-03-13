import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const {name, category, recipe, price, _id} = useLoaderData();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send the menu data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        // reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle heading="Update An Item" subHeading="Refresh Info" />
      <div>
        <div className="bg-[#E8E8E8] p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Recipe name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                defaultValue={name}
                placeholder="Recipe Name"
                className="input input-bordered"
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="flex gap-6">
              {/* Category */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="select 
                          input-bordered w-full"
                >
                  <option disabled value="default">
                    Select a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks"> Drinks</option>
                </select>
              </div>
              {/* Price */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price"
                  defaultValue={price}
                  className="input input-bordered"
                />
                {errors.price && <span>This field is required</span>}
              </div>
            </div>
            {/* Recipe Details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>
              {/* photo */}
              <textarea
                {...register("recipe", { required: true })}
                placeholder="Recipe Details"
                defaultValue={recipe}
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
              {errors.recipe && <span>This field is required</span>}
            </div>
            <div className="mt-4">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            <button className="btn text-white bg-gradient-to-br from-[#835D23] to-[#B58130] mt-6 w-36">
              Update Item 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
