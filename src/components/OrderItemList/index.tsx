import * as S from "./style";
import React, { HTMLAttributes } from "react";

const OrderItemList = ({
    header,
    list,
    footer,
    ...props
  }: OrderItemListProps) => {
    return <div { ...props }>
    {header && <S.OrderItemListTitle> {header} </S.OrderItemListTitle>}

    <S.OrderItemList role="listbox">{list}</S.OrderItemList>

    {footer && <footer> {footer} </footer>}
  </div>

  };
  
type DivType = HTMLAttributes<HTMLDivElement>;


export type OrderItemListProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  list: React.ReactNode;
} & DivType;


export default OrderItemList;
