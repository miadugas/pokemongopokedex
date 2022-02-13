import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/");
  });

  if (!state) {
    return null;
  } else {
    return (
      <div className="card">
        <h1>{state.name}</h1>
        <h2>{state.num}</h2>
      </div>
    );
  }
};

export default Details;