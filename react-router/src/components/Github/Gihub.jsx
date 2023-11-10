// import React, { Component } from 'react'

// import { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'

// export class Gihub extends Component {
//   render() {
//     return (
//       <div>Gihub</div>
//     )
//   }
// }

// export default Gihub

export default function Github() {
//   const url = "https:api.github.com/users/priyaranjan12345";
//   const [data, setData] = useState(0);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

const data = useLoaderData()

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <img src={data.avatar_url} alt="" width={200} height={300} />
        GitHub Followers: {data.followers}
        <br></br>
        Bio: {data.bio}
      </div>
    </>
  );
}

export const githubInfoLoaded = async ()=> {
    const url = "https:api.github.com/users/priyaranjan12345";
    const response = await fetch(url)

    return await response.json()
}