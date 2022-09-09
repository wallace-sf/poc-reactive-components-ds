import React from "react";

import { Catalog } from "../../FakeDesignSystem/components/Catalog";
import { Header } from "../../FakeDesignSystem/components/Header";

import "./styles.css";

const headerAtoms = [
  {
    type: "search_bar",
  },
  {
    type: "logo",
    content:
      "https://about.gitlab.com/images/press/logo/print/preview/gitlab-logo-450-preview.jpg",
  },
  {
    type: "menu",
  },
];

// give a array of 30 items of product object with price, name and image
const catalogAtoms = Array.from({ length: 30 }, (_, index) => ({
  type: "product_card",
  content: {
    name: `Product ${index}`,
    price: Math.random() * 100,
    image: `https://picsum.photos/200/300?random=${index}`,
  },
}));

export const Home: React.FC = () => {
  return (
    <section className="home-container">
      <Header
        atoms={headerAtoms}
        onClick={console.log}
        onChange={console.log}
      />
      <Catalog atoms={catalogAtoms} onClick={console.log} />
    </section>
  );
};
