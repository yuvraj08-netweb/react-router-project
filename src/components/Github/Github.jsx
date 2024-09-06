// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data =useLoaderData()
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/yuvraj08-netweb")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       });
//   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4">
      Github Followers : {data.followers}
        <img src={data.avatar_url} alt="GitPicture" width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () =>{
    const res = await fetch("https://api.github.com/users/yuvraj08-netweb")
    return res.json()
}