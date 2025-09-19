import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

    return (
      <div className="bg-linear-to-r from-cyan-300 to-blue-300 h-screen">
        <div className="p-4 border-white transform transition-transform duration-500 hover:scale-107 w-100 h-auto text-center rounded relative top-50 mx-auto shadow-lg shadow-cyan-500/50">
          <h1 className="text-2xl font-bold mb-4">Welcome to My Notes App</h1>

          <button
            onClick={() => navigate("/notes")}
            className="bg-green-500 mt-3 text-white px-4 py-2 rounded"
          >
            View Notes
          </button>
          <br />
          <button
            onClick={() => navigate("/add")}
            className=" bg-blue-500 text-white mt-4 rounded-full w-12 h-12 text-3xl"
          >
            +
          </button>
        </div>
      </div>
    );
};

export default Home;
