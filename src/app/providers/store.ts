import { configureStore, Middleware } from '@reduxjs/toolkit';
import { reducers } from '@/app/providers/reducers';
import { api } from '@/api';

const testMiddleWare: Middleware = (store) => (next) => (action) => {
  // Действия, которые могут быть выполнены перед передачей действия следующему мидлвару или редюсеру
  console.log('Dispatching action:', action);

  // Вызов следующего мидлвара в цепочке
  const result = next(action);

  // Действия, которые могут быть выполнены после обработки действия
  console.log('New state:', store.getState().Product);

  return result;
};
export const makeStore = () => {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware, testMiddleWare)
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
