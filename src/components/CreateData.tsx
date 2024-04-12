import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateData(){
    interface MyMovie{
        Title: string;
        Year: string;
        Runtime: string;
        Poster: string;
        id: string;
    }

    const [movie,setMovie] = useState({
        Title: "",
        Year: "",
        Runtime: "",
        Poster: "",
        id: ""
    });
    const navigate = useNavigate();

    const handleSubmit = (event:any) =>{
        event.preventDefault();
        console.log("Handle "+movie);
        axios.post("http://localhost:3000/movies",movie)
        .then(() => navigate("/prd"));
    };
    return(
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>Add New Cinema</h1>
            <div className=" w-75 rounded  shadow p-4">
                <form onSubmit={handleSubmit} >
                    <label className="m-4">Id: </label>
                    <input type="text" onChange={(e)=>setMovie({...movie,id : e.target.value})}/><br/>
                    <label className="m-4">Title: </label>
                    <input type="text" onChange={(e)=>setMovie({...movie,Title : e.target.value})} /><br/>
                    <label className="m-4">Year: </label>
                    <input type="text" onChange={(e)=>setMovie({...movie,Year : e.target.value})}/><br/>
                    <label className="m-4">Runtime: </label>
                    <input type="text" onChange={(e)=>setMovie({...movie,Runtime : e.target.value})}/><br/><br/>
                    <input type="submit" value="Submmit"/>
                </form>
            </div>

        </div>
    )
}
export default CreateData;