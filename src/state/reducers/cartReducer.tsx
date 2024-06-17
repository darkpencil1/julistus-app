import { DropdownOption } from "../../components/productPageComponents/AddToCartDropdown";
import IProduct from "../../resources/interfaces/ProductInterface";

export type CartProduct = Pick<
  IProduct,
  "id" | "name" | "productType" | "images" | "price"
>;

export interface CartItem extends CartProduct {
  cartId: string; //Unique id for a cart item
  quantity: number;
  specs: DropdownOption["name"][];
}

export type CartState = {
  items: CartItem[];
};

export const initialCartState: CartState = {
  items: [],
};

export type CartAction =
  | { type: "ADD_ITEM"; cartItem: CartItem }
  | { type: "REMOVE_ITEM"; cartId: CartItem["cartId"] }
  | { type: "INCREASE_QUANTITY"; cartId: CartItem["cartId"] }
  | { type: "DECREASE_QUANTITY"; cartId: CartItem["cartId"] };

function arraysEqual(
  arr1: DropdownOption["name"][],
  arr2: DropdownOption["name"][]
): boolean {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((item, index) => item === arr2[index]);
}

function doesItemExist(obj1: CartItem, obj2: CartItem): boolean {
  const quantityField: keyof CartItem = "quantity";
  const cartIdField: keyof CartItem = "cartId";
  const imageField: keyof CartItem = "images";
  const excludeFields: Array<keyof CartItem> = [
    quantityField,
    cartIdField,
    imageField,
  ];

  const fields = (Object.keys(obj1) as Array<keyof CartItem>).filter(
    (field) => !excludeFields.includes(field)
  );

  return fields.every((field) => {
    const value1 = obj1[field];
    const value2 = obj2[field];

    //Spec arrays need to be checked separatedly because arrays are seen as different instances even if their contents are same
    if (Array.isArray(value1) && Array.isArray(value2)) {
      return arraysEqual(value1, value2);
    }

    return value1 === value2;
  });
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      let existingItem;
      //Check if identical item has already been placed to cart
      for (const item of state.items) {
        existingItem = doesItemExist(item, action.cartItem);
        if (existingItem) break;
      }
      if (!existingItem) {
        return {
          ...state,
          items: [...state.items, { ...action.cartItem }],
        };
      } else return state;
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.cartId !== action.cartId),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartId === action.cartId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartId === action.cartId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
