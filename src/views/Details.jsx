import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';


const Details = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/");
  });

  if (!state) {
    return null;
  } else {
    return (
      <div className="card-details">
        <img className="card-img" src={state.img} alt="pokemon" />
        <h1>{state.name}</h1>
        <small>{state.num}</small>
        <h2>Weakness:</h2>
        <ul>
        {state.weaknesses.map((weakness, index) => {
          return <li key={"key" + weakness + index}>{weakness}</li>;
        })}
      </ul>
        <h2>Type:</h2>
        <ul>
        {state.type.map((typ, index) => {
          return <li key={"key" + typ + index}>{typ}</li>;
        })}
      </ul>
        <h3>Height: {state.height}</h3>
        <h3>Weight: {state.weight}</h3>
        <div>
        <Button className="card-button" component={Link} to="/" variant="outlined">Go Back</Button>
        </div>
      </div>
    );
  }
};

export default Details;