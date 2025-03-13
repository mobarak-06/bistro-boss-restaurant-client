import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UseMenu = () => {
  const axiosPublic = useAxiosPublic();
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://bistro-boss-server-tau-seven.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false)
  //     });
  // }, []);

  const {data: menu = [], isPending: loading, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async() => {
      const res = await axiosPublic.get('/menu');
      return res.data
    }
  })

  return [menu, loading, refetch];
};

export default UseMenu;
