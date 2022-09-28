import create from "zustand";

type MouseState = {
  x: number;
  y: number;
  isShowed: boolean;
  updateState: ({
    x,
    y,
    isShowed,
  }: {
    x: number;
    y: number;
    isShowed: boolean;
  }) => void;
};

type Coin = {
  time: number;
  x: number;
  y: number;
};

type CoinState = {
  coinList: Coin[];
  addCoin: (coin: Coin) => void;
};

export const useMousePositionStore = create<MouseState>((set) => ({
  x: 0,
  y: 0,
  isShowed: false,
  updateState: (newState) => set(newState),
}));

export const useCoinStore = create<CoinState>((set) => ({
  coinList: [],
  addCoin: (coin: Coin) =>
    set((state) => ({
      ...state,
      coinList: [...state.coinList, coin],
    })),
}));
