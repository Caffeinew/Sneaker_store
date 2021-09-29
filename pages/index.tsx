import React from "react";
import { gql, request } from "graphql-request";

import { GetServerSideProps } from "next";
import { IProduct, IFilters, IShoppingCart } from "../types/types";

import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";
import Header from "../components/Header";

interface IndexPageProps {
  products: IProduct[];
  filters: IFilters;
}

const IndexPage: React.FC<IndexPageProps> = (props) => {
  const [products, setProducts] = React.useState<IProduct[]>(props.products);
  const [filters, setFilters] = React.useState<IFilters>(props.filters);
  const [shoppingCart, setShoppingCart] = React.useState<IShoppingCart>({
    isOpen: false,
    products: [],
  });

  React.useEffect(() => {
    if (shoppingCart.isOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [shoppingCart.isOpen]);
  
  return (
    <React.Fragment>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <Layout>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { products } = await request(
    "https://api-eu-central-1.graphcms.com/v2/cku40jcdq018i01ze3bof255u/master",
    productQuery
  );
  const filters = await request(
    "https://api-eu-central-1.graphcms.com/v2/cku40jcdq018i01ze3bof255u/master",
    filterQuery
  );
  return {
    props: {
      products,
      filters,
    },
  };
};

const filterQuery = gql`
  {
    brands {
      name
      id
    }
    categories {
      name
      id
    }
    materials {
      name
      id
    }
    sizes {
      name
      id
    }
  }
`;

const productQuery = gql`
  {
    products {
      name
      id
      price
      images {
        url
      }
    }
  }
`;
