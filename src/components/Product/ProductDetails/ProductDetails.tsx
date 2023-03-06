import { ProductType } from '@/types/types';

interface ProductDetailsProps {
  product: ProductType;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <>
      <p className="p2-b md:p1-b underline">Détails du produit :</p>
      <div className="pt-4 flex flex-col xl:gap-2">
        {product.top && (
          <div>
            <p className="product-details-b">Dessus / Tige :</p>
            <p className="product-details-r">{product.top}</p>
          </div>
        )}
        {product.lining && (
          <div>
            <p className="product-details-b">Doublure :</p>
            <p className="product-details-r">{product.lining}</p>
          </div>
        )}
        {product.sockliner && (
          <div>
            <p className="product-details-b">Semelle de propreté :</p>
            <p className="product-details-r">{product.sockliner}</p>
          </div>
        )}
        {product.outsole && (
          <div>
            <p className="product-details-b">Semelle d&apos;usure :</p>
            <p className="product-details-r">{product.outsole}</p>
          </div>
        )}
        {product.lining_thickness && (
          <div>
            <p className="product-details-b">Épaisseur de la doublure :</p>
            <p className="product-details-r">{product.lining_thickness}</p>
          </div>
        )}
        {product.material && (
          <div>
            <p className="product-details-b">Matière :</p>
            <p className="product-details-r">{product.material}</p>
          </div>
        )}
        {product.weather && (
          <div>
            <p className="product-details-b">Temps :</p>
            <p className="product-details-r">{product.weather}</p>
          </div>
        )}
        {product.sport && (
          <div>
            <p className="product-details-b">Sport :</p>
            <p className="product-details-r">{product.sport}</p>
          </div>
        )}
        {product.end && (
          <div>
            <p className="product-details-b">Bout de la chaussure :</p>
            <p className="product-details-r">{product.end}</p>
          </div>
        )}
        {product.heel_shape && (
          <div>
            <p className="product-details-b">Forme du talon :</p>
            <p className="product-details-r">{product.heel_shape}</p>
          </div>
        )}
        {product.closure && (
          <div>
            <p className="product-details-b">Fermeture :</p>
            <p className="product-details-r">{product.closure}</p>
          </div>
        )}
        {product.pattern && (
          <div>
            <p className="product-details-b">Motif / Couleur :</p>
            <p className="product-details-r">{product.pattern}</p>
          </div>
        )}
        {product.additional_infos && (
          <div>
            <p className="product-details-b">Informations supplémentaires :</p>
            <p className="product-details-r">{product.additional_infos}</p>
          </div>
        )}
        {product.properties && (
          <div>
            <p className="product-details-b">Propriétés :</p>
            <p className="product-details-r">{product.properties}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
