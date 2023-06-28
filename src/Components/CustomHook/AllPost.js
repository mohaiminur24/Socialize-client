import { useQuery } from "react-query";

const AllPost = () => {
  const { refetch, data: allpost } = useQuery({
    queryFn: async () => {
      const result = fetch("http://localhost:5000/getallpost").then(res=>res.json());
      return result;
    },
  });
  return [refetch, allpost];
};

export default AllPost;
