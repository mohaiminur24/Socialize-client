import { useQuery } from "react-query";

const UserProduct = (email) => {
    const {refetch, data: product} = useQuery({
        queryFn: async()=>{
            const result = await fetch(`https://eidproject.vercel.app/getuserproduct?email=${email}`).then(res=> res.json());
            return result;
        }
    });
    return [product, refetch];
};

export default UserProduct;