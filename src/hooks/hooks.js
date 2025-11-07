import React from "react";


// хук возвращает дочерний элемент нужного типа
export function useSlot(children, types) {
    return React.Children.toArray(children).filter(child => types.find(type => type === child.type));
}
