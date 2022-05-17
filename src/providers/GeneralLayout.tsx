import React, { useCallback, useContext } from "react";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";
import { Box } from "@mui/system";
import { ThemeContext } from "../context";
import { colors } from "../theme";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vH",
  background: "#e1e1e1",

  "& .navTop": {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    height: "5%",
    alignItems: "center",

    "& >div ": {
      padding: "1rem",
      width: "33.33%",
      textAlign: "center",
    },

    "& >div:hover": {
      cursor: "pointer",
    },

    "& >button": {
      height: "100%",
      width: "4%",
      textAlign: "center",
    },

    "& >button:hover": {
      cursor: "pointer",
    },
  },

  "& .mainContainer": {
    height: "95%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    "& >*": {
      height: "90%",
      width: "95%",
    },
  },
};

interface IGeneralLayout {
  children: React.ReactNode;
}

const navigationInfo: any[] = [
  {
    label: "Comptes client",
    path: "/customers",
  },
  {
    label: "Sites",
    path: "/sites",
  },
  {
    label: "Contacts",
    path: "/contacts",
  },
];

const GeneralLayout: React.FC<IGeneralLayout> = ({ children }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClick = useCallback(
    (path: string) => () => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <Box
      sx={() => ({
        "& .navTop >div": {
          background: theme === "light" ? colors.bgNavLight : colors.bgNavDark,
          color: theme === "light" ? colors.fontNavLight : colors.fontNavDark,
        },
        "& .navTop >div:hover": {
          background: theme === "light" ? colors.fontLight : colors.fontDark,
        },
        "& .navTop >button": {
          background: theme === "light" ? colors.bgNavLight : colors.bgNavDark,
          color: theme === "light" ? colors.fontNavLight : colors.fontNavDark,
        },
        "& .navTop >button:hover": {
          background: theme === "light" ? colors.fontLight : colors.fontDark,
        },
        "& .mainContainer >*": {
          background: theme === "light" ? colors.bgLight : colors.bgDark,
          color: theme === "light" ? colors.fontLight : colors.fontDark,
        },
        ...style,
      })}
    >
      <div className="navTop">
        <button onClick={() => navigate(-1)}>⌫</button>
        {navigationInfo.map(
          ({ label, path }: { label: string; path: string }) => (
            <div key={label} onClick={handleClick(path)}>
              <span>{label}</span>
            </div>
          )
        )}
        <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
      </div>

      <div className="mainContainer">
        <Paper>{children}</Paper>
      </div>
    </Box>
  );
};

export default GeneralLayout;
