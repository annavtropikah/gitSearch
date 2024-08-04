
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersListReducer } from "./features/usersListSlice";



// Функция makeStore создает и возвращает хранилище Redux с помощью функции configureStore.
export const store = configureStore({
    // Мы передаем объект, в котором свойство reducer содержит корневой редюсер, объединяющий все редюсеры нашего приложения.
    reducer: combineReducers({
      usersList: usersListReducer,
      //здесь будут все редьюсоры!!!!не забыть)
    }),
  });




export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

