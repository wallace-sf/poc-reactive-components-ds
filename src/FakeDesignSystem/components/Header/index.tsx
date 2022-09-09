import React from "react";

import "./styles.css";

interface HeaderProps {
  atoms: { type: string; content?: string }[];
  onClick: (props: any) => void;
  onChange: (props: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ atoms, onClick, onChange }) => {
  const getAtom = React.useCallback(
    ({ type = "", content = "" }) => {
      switch (type) {
        case "search_bar":
          return (
            <input
              type="text"
              placeholder="Digite aqui"
              onClick={(event) =>
                onChange({
                  type: "search_bar",
                  event: event,
                })
              }
            />
          );
        case "logo":
          return (
            <img
              src={content}
              alt=""
              onClick={(event) => onClick({ type: "logo", event: event })}
            />
          );
        case "menu":
          return (
            <button
              type="button"
              onClick={(event) =>
                onClick({
                  type: "menu",
                  event: event,
                })
              }
            >
              Menu
            </button>
          );
        default:
          break;
      }
    },
    [onClick, onChange]
  );

  const renderAtoms = React.useMemo(() => {
    return atoms.map(({ type, content }) => {
      return getAtom({ type, content });
    });
  }, [atoms, getAtom]);

  return <header className="header-container">{renderAtoms}</header>;
};
