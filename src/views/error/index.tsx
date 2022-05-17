import { useContext } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { colors } from "../../theme";
import { ThemeContext } from "../../context";

const Error = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        paddingLeft: "25px",
        background: theme === "light" ? colors.bgLight : colors.bgDark,
        color: theme === "light" ? colors.fontLight : colors.fontDark,
      }}
    >
      <div>
        <h2>
          La page {window.location.href} n'existe pas.
          <br />
          Pour retourner à l'accueil c'est par <Link to="/">ici</Link>
        </h2>
      </div>
    </Box>
  );
};

export default Error;
