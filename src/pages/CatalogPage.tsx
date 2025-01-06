import ProductCatalog from '@/components/ProductCatalog/Product.catalog';
import Layout from '@/components/Layout/Layout';
import { Product } from '@/components/types/product';
import { useState } from 'react';
import { useImmerReducer } from 'use-immer';

const CatalogPage = () => {
  const [products, dispatch] = useImmerReducer<Array<Product>>([
    {
      id: 1,
      name: 'Наручные часы мужские SKMEI 1251',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: false,
      count: 0,
    },
    {
      id: 2,
      name: 'Наручные часы мужские SKMEI 1252',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/169156375/600000279174b0.jpeg',
      price: 8100,
      discount: 40,
      rating: 4.2,
      isFavorite: false,
      count: 0,
    },
    {
      id: 3,
      name: 'Наручные часы мужские SKMEI 1100',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/204/604/296/910/312/10/100038696967b0.jpg',
      price: 9200,
      discount: 30,
      rating: 4.6,
      isFavorite: false,
      count: 0,
    },
    {
      id: 4,
      name: 'Наручные часы мужские SKMEI 1122',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/206/630/277/110/312/11/100038697049b0.jpg',
      price: 8800,
      discount: 70,
      rating: 4.9,
      isFavorite: false,
      count: 0,
    },
    {
      id: 5,
      name: 'Наручные часы мужские SKMEI 1010',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/206/621/243/710/312/11/100038697018b0.jpg',
      price: 10000,
      discount: 20,
      rating: 4.2,
      isFavorite: false,
      count: 0,
    },
    {
      id: 6,
      name: 'Наручные часы мужские SKMEI 1091',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/204/613/330/310/312/11/100038696998b0.jpg',
      price: 5600,
      discount: 20,
      rating: 4.3,
      isFavorite: false,
      count: 0,
    },
  ]);

  return (
    <Layout>
      <section>
        <ProductCatalog products={products} dispatch={dispatch} />
      </section>
    </Layout>
  );
};

export default CatalogPage;
