//создаем редьюсер goodSlice (в index.js он goodsReduser)

import { createSlice } from '@reduxjs/toolkit'; // спец. функция redux
import goodsArr from '../data/goods.json'; // масив данных

// createSlice, функция redux для конфигурации хранилища
export const goodsSlice = createSlice({
  name: 'goods', // имя хранилища
  initialState: {
    goods: goodsArr // начальное состояние хранилища
  },
  reducers: {  // методы для обработки данных в хранилище

  }
})

export const { } = goodsSlice.actions; //для импортирования методов что будут в redusers
export const selectGoods = state => state.goods.goods; // гетер для получения данных из хранилища, который наз. goods
export default goodsSlice.reducer;