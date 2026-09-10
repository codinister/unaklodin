import { dollarRateType, productsType } from '@/types/types';
import ProductsRepository from '../../domain/repository/ProductsRepository';
import serverConfig from '@/state/sanity/server.config';

const QUERY_PRODUCT_BY_ID = `
          *[_id == $id]{
          'id': _id,
          title,
          'type': _type, 
          'createdAt' : _create5dAt, 
          'updatedAt' : _updatedAt,
          "cat" : category->title, 
          "colour": colour[]->{
          title,
          hex
          },
          "size": sizes[]->title,
          "description": items.description,
          "excerpt": array::join(string::split((pt::text(items.description)), "")[0..200], "")+"...",
          "features": items.features[]{
          title, 
          sub_title, 
          body
          },
          "gallery": items.gallery.images[].img.asset->url,
          "price": items.price,
          "product": items.product,
          "stock": items.stock,
          "sub_title": items.sub_title ,
          "thumbnail": items.thumbnail.img.asset->url
        }
        `;

const QUERY_PRODUCTS = `
          *[_type == $type]{
          'id': _id,
          title,
          'type': _type, 
          'createdAt' : _create5dAt, 
          'updatedAt' : _updatedAt,
          "cat" : category->title, 
          "colour": colour[]->{
          title,
          hex
          },
          "size": sizes[]->title,
          "description": items.description,
          "excerpt": array::join(string::split((pt::text(items.description)), "")[0..200], "")+"...",
          "features": items.features[]{
          title, 
          sub_title, 
          body
          },
          "gallery": items.gallery.images[].img.asset->url,
          "price": items.price,
          "product": items.product,
          "stock": items.stock,
          "sub_title": items.sub_title ,
          "thumbnail": items.thumbnail.img.asset->url
        }
        `;

      const QUERY_MATCHED_PRODUCTS = `
          *[_type in $arr]{
          'id': _id,
          title,
          'type': _type, 
          'createdAt' : _create5dAt, 
          'updatedAt' : _updatedAt,
          "cat" : category->title, 
          "colour": colour[]->{
          title,
          hex
          },
          "size": sizes[]->title,
          "description": items.description,
          "excerpt": array::join(string::split((pt::text(items.description)), "")[0..200], "")+"...",
          "features": items.features[]{
          title, 
          sub_title, 
          body
          },
          "gallery": items.gallery.images[].img.asset->url,
          "price": items.price,
          "product": items.product,
          "stock": items.stock,
          "sub_title": items.sub_title ,
          "thumbnail": items.thumbnail.img.asset->url
        }
        `;

class ProductsDataRepository extends ProductsRepository {

  override async getDollarRate(): Promise<dollarRateType> {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/GHS');
    const data = await res.json();
    const rate = data.rates.USD;
    return rate;
  }

  override getProductById(id: string): Promise<productsType[]> {
    return serverConfig.fetch(QUERY_PRODUCT_BY_ID, { id });
  }

  override getProducts(type: string): Promise<productsType[]> {
    return serverConfig.fetch(QUERY_PRODUCTS, { type });
  }

  override getMatchedProducts(arr: string[]): Promise<productsType[]> {
    return serverConfig.fetch(QUERY_MATCHED_PRODUCTS, arr);
  }

}

export default ProductsDataRepository;
