import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";




function App() {

  const FILMS_QUERY = gql`
   {
    getTodo {
      id,
      name
    }
  }
`;
const { data, loading, error } = useQuery(FILMS_QUERY);
console.log("loding",loading)

useEffect(()=>{


},[])



  return (
    <div className="flex flex-col dark:bg-red-500 bg-gradient-to-r from-teal-400 to-blue-500  h-screen">
      {/* <div className="flex flex-row h-10  justify-center space-x-4 items-center">
        <div className="hover:text-green-400">HOME</div>
        <div className="hover:text-green-400">DEMOS</div>
        <div className="hover:text-green-400">INNER PAGES</div>
        <div className="hover:text-green-400">FEATURES</div>
      </div> */}

      {/* <div className="bg-blue-500 sm:bg-green-500 md:bg-indigo-500 lg:bg-red-500 xl:bg-black h-48">
        </div> */}

      <div className="h-16">

      <Navbar/>

      </div>

     
{/* {JSON.stringify((data?.getTodo))} */}


{data?.getTodo.map((i)=>{


return(

  <p>

    {(i.name)}
  </p>
)
})}

      <div className="h-48 mx-5 rounded-lg flex flex-col sm:flex-col md:flex-row lg:flex-row my-5">
        <img
          className="h-48 bg-blue-500 basis-1/3 mx-5 rounded-lg my-5"
          src={require("./asset/image/Mountain.webp")}
        />
        <img
          className="h-48 bg-green-500 basis-1/3 mx-5 rounded-lg my-5"
          src={require("./asset/image/Mountain1.jpeg")}
        />
        <img
          className="h-48 bg-orange-500 basis-1/3 mx-5 rounded-lg my-5"
          src={require("./asset/image/Mountain.webp")}
        />
      </div>
    </div>
  );
}

export default App;
