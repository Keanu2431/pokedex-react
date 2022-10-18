import { Card } from "@mui/material";

const MainCard = (props) => {
  const pokemon = props.main;
  return (
    <Card>
      <h1>{pokemon.name}</h1>
    </Card>
  );
};
export default MainCard;
