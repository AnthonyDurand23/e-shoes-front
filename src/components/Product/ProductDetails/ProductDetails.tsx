import { ProductType } from '@/types/types';

interface ProductDetailsProps {
  product: ProductType;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <>
      <p className="p2-b md:p1-b underline">Détails du produit :</p>
      <div className="pt-4 flex flex-col xl:gap-2">
        {product.dessus && (
          <div>
            <p className="product-details-b">Dessus / Tige :</p>
            <p className="product-details-r">{product.dessus}</p>
          </div>
        )}
        {product.doublure && (
          <div>
            <p className="product-details-b">Doublure :</p>
            <p className="product-details-r">{product.doublure}</p>
          </div>
        )}
        {product.semelle_proprete && (
          <div>
            <p className="product-details-b">Semelle de propreté :</p>
            <p className="product-details-r">{product.semelle_proprete}</p>
          </div>
        )}
        {product.semelle_usure && (
          <div>
            <p className="product-details-b">Semelle d&apos;usure :</p>
            <p className="product-details-r">{product.semelle_usure}</p>
          </div>
        )}
        {product.epaisseur_doublure && (
          <div>
            <p className="product-details-b">Épaisseur de la doublure :</p>
            <p className="product-details-r">{product.epaisseur_doublure}</p>
          </div>
        )}
        {product.matiere && (
          <div>
            <p className="product-details-b">Matière :</p>
            <p className="product-details-r">{product.matiere}</p>
          </div>
        )}
        {product.temps && (
          <div>
            <p className="product-details-b">Temps :</p>
            <p className="product-details-r">{product.temps}</p>
          </div>
        )}
        {product.sport && (
          <div>
            <p className="product-details-b">Sport :</p>
            <p className="product-details-r">{product.sport}</p>
          </div>
        )}
        {product.bout && (
          <div>
            <p className="product-details-b">Bout de la chaussure :</p>
            <p className="product-details-r">{product.bout}</p>
          </div>
        )}
        {product.forme_talon && (
          <div>
            <p className="product-details-b">Forme du talon :</p>
            <p className="product-details-r">{product.forme_talon}</p>
          </div>
        )}
        {product.fermeture && (
          <div>
            <p className="product-details-b">Fermeture :</p>
            <p className="product-details-r">{product.fermeture}</p>
          </div>
        )}
        {product.motif && (
          <div>
            <p className="product-details-b">Motif / Couleur :</p>
            <p className="product-details-r">{product.motif}</p>
          </div>
        )}
        {product.info_sup && (
          <div>
            <p className="product-details-b">Informations supplémentaires :</p>
            <p className="product-details-r">{product.info_sup}</p>
          </div>
        )}
        {product.proprietes && (
          <div>
            <p className="product-details-b">Propriétés :</p>
            <p className="product-details-r">{product.proprietes}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
