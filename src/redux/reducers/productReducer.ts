import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "products",
  initialState: {
    produtos: [
      {
        id: 1,
        name: "AirPods Apple Fones de ouvido",
        image: "../public/assets/images/produto-01.jpeg",
        price: 1499,
        alt: "Imagem do Produto 01",
        amount: 0,
        total: 0,
      },
      {
        id: 2,
        name: "Capa de silicone para iPhone 8/7 cor Areia - rosa",
        image: "../public/assets/images/produto-02.jpeg",
        price: 299,
        alt: "Imagem do Produto 02",
        amount: 0,
        total: 0,
      },
      {
        id: 3,
        name: "Apple Pencil",
        image: "../public/assets/images/produto-03.jpeg",
        price: 729,
        alt: "Imagem do Produto 03",
        amount: 0,
        total: 0,
      },
      {
        id: 4,
        name: "Magic Mouse 2 - Prateado",
        image: "../public/assets/images/produto-04.jpeg",
        price: 549,
        alt: "Imagem do Produto 04",
        amount: 0,
        total: 0,
      },
      {
        id: 5,
        name: "Caixa prateada de alumínio com pulseira esportiva branca",
        image: "../public/assets/images/produto-05.jpeg",
        price: 2899,
        alt: "Imagem do Produto 05",
        amount: 0,
        total: 0,
      },
      {
        id: 6,
        name: "Cabo de lightning para USB (1m)",
        image: "../public/assets/images/produto-06.jpeg",
        price: 149,
        alt: "Imagem do Produto 06",
        amount: 0,
        total: 0,
      },
      {
        id: 7,
        name: "Smart Keyboard para iPad Pro 12,9 polegadas - inglês (EUA)",
        image: "../public/assets/images/produto-07.jpeg",
        price: 1099,
        alt: "Imagem do Produto 07",
        amount: 0,
        total: 0,
      },
      {
        id: 8,
        name: "Carregador USB de 5W Apple",
        image: "../public/assets/images/produto-08.jpeg",
        price: 149,
        alt: "Imagem do Produto 08",
        amount: 0,
        total: 0,
      },
    ],
  },
  reducers: {
    addAmount: (state, action) => {
      state.produtos[action.payload].amount += 1;
    },
    removeAmount: (state, action) => {
      state.produtos[action.payload].amount -= 1;
    },
    totalPrice: (state, action) => {
      state.produtos.forEach((produto) => {
        produto.total = produto.amount * produto.price;
      });
    },
  },
});

export const { addAmount, removeAmount, totalPrice } = slice.actions;
export default slice.reducer;
