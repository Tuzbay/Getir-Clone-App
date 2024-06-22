import { createSlice, nanoid } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    products: [
      {
        id: nanoid(),
        image:
          'https://cdn.getir.com/product/61e8237ddaafed5cc5f4c9f8_tr_1643885762259.jpeg',
        name: 'Magnum Düet Kırmızı Meyveler',
        miktar: '100 ml',
        fiyat: 20.45,
        quantity: 1,
      },
      {
        id: nanoid(),
        image:
          'https://cdn.getir.com/product/58d38fbd09492e0004044254_tr_1618323822610.jpeg',
        name: 'Magnum Beyaz',
        miktar: '100 ml',
        fiyat: 24.25,
        quantity: 1,
      },
    ],
    totalPrice: 0,
  },

  reducers: {
    ADD_PRODUCT: (state, action) => {
      const { name, image, miktar, fiyat } = action.payload;

      const existingProduct = state.products.find((item) => item.name === name);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({
          id: nanoid(),
          image,
          name,
          miktar,
          fiyat,
          quantity: 1,
        });
      }
      state.totalPrice = state.products.reduce(
        (total, item) => total + item.fiyat * item.quantity,
        0
      );
    },
    REMOVE_PRODUCT: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state?.products.findIndex(
        (product) => product.id === id
      );
      if (existingProduct !== -1) {
        if (state.products[existingProduct].quantity === 1) {
          // Eğer miktar 1 ise ürünü sil
          state.products.splice(existingProduct, 1);
        } else {
          // Miktarı azalt
          state.products[existingProduct].quantity--;
        }
      }
      state.totalPrice = state.products.reduce(
        (total, item) => total + item.fiyat * item.quantity,
        0
      );
    },
    CLEAN_CART: (state: any) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { ADD_PRODUCT, CLEAN_CART, REMOVE_PRODUCT } = cartSlice.actions;
export const CartSlice = cartSlice.reducer;
