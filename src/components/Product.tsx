import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Products() {
  interface MyMovie {
    Title: string;
    Year: string;
    Runtime: string;
    Poster: string;
    id: string;
  }

  const [movies, setMovies] = useState<MyMovie[]>([]);

  useEffect(() => {
    axios
      .get<MyMovie[]>("http://localhost:3000/movies")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((error) => console.log(error));
  },[]);

  return (
    <div className="vh-100">
      {/* vh-100 */}
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <h1>Movies List</h1>
      </div>
     
      <div className=" w-75 rounded  shadow p-4 d-flex flex-column justify-content-center align-items-center ">
        <table className="table">
        
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TItle</th>
              <th scope="col">Year</th>
              <th scope="col">Runtime</th>
              <th scope="col">Action</th>
              <div className="d-flex justify-content-start">
        <Link to='/create' className="btn btn-success">Add+</Link>
      </div>  
              {/* <th scope="col">Poster</th> */}
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr className="text-center">
                <th scope="row">{movie.id}</th>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Runtime}</td>
                <td className="d-flex justify-content-end">
                  <button className="btn btn-primary m-2 p-2">Edit</button>
                  <button className=" btn btn-danger m-2 p-2">Delete</button>
                </td>
                {/* <td>
                  <img
                    src={movie.Poster}
                    className="img-thumbnail"
                    alt={movie.Title}
                  />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;