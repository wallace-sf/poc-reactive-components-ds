import React from "react";

import "./styles.css";

interface CatalogProps {
  atoms: { type: string; content?: any }[];
  onClick: (props: any) => void;
}

const ProductCard = ({ name = "", price = 0, image = "", onClick }) => {
  return (
    <div onClick={(event) => onClick({ type: "product_card", event: event })}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price.toFixed(2)}</p>
    </div>
  );
};

export const Catalog: React.FC<CatalogProps> = ({ atoms, onClick }) => {
  const getAtoms = React.useCallback(
    ({ type = "", content = "" }) => {
      switch (type) {
        case "product_card":
          return (
            <ProductCard
              name={content.name}
              price={content.price}
              image={content.image}
              onClick={onClick}
            />
          );
        default:
          break;
      }
    },
    [onClick]
  );

  const renderAtoms = React.useMemo(() => {
    return atoms.map(({ type, content }) => {
      return getAtoms({ type, content });
    });
  }, [atoms, getAtoms]);

  return <section className="catalog-container">{renderAtoms}</section>;
};
