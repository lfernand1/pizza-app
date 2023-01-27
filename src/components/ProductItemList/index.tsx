import * as S from "./style";

interface ProductItemListProps {
  children: React.ReactNode;
}


const ProductItemList = () => {
  return (
    <section>
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderTitle>
          Escolha os sabores
        </S.ProductItemListHeaderTitle>
        <S.ProductItemListHeaderSelect>
          <option value="default">Selecione a mesa</option>
          <option value="">Mesa</option>
        </S.ProductItemListHeaderSelect>
      </S.ProductItemListHeader>
      <S.ProductItemList>
      { children }
    </S.ProductItemList>
    </section>
  );
};

export default ProductItemList;