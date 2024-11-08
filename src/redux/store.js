import { create } from "zustand";
import axios from "axios";

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
};

export const refreshTag = create((set) => ({
  tag: false,
  toggleRefresh: () => set((state) => ({ tag: !state.tag })),
}));

export const useGetCategories = create((set) => ({
  ...initialState,

  execute: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get("/data/category");
      set({ ...initialState, success: true, data: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
}));

export const useGetMovies = create((set) => ({
  ...initialState,

  execute: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get("/data/movie");
      set({ ...initialState, success: true, data: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
}));

export const useGetActs = create((set) => ({
  ...initialState,

  execute: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get("/data/upload");
      set({ ...initialState, success: true, data: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
}));

export const useGetCat = create((set) => ({
  ...initialState,

  execute: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get("/data/category");
      set({ ...initialState, success: true, data: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
}));

export const useGetElement = create((set) => ({
  ...initialState,

  execute: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get("/data/element");
      set({ ...initialState, success: true, data: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
}));
