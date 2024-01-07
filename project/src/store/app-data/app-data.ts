import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { NameSpace } from '../../const';
import {
  getFavoritesAction,
  getOfferByIdAction,
  getOffersAction,
  getOffersNearbyAction,
  getReviewsbyIdAction,
  postFavoriteAction,
  postReviewAction,
} from '../api-actions';

const initialState: AppData = {
  offers: [],
  offerById: null,
  offersNearby: [],
  reviews: [],
  favoriteOffers: [],
  isLoading: false,
  isFavorite: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOffersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(getOfferByIdAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOfferByIdAction.fulfilled, (state, action) => {
        state.offerById = action.payload;
        state.isLoading = false;
      })
      .addCase(getOfferByIdAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(getReviewsbyIdAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postFavoriteAction.pending, (state) => {
        state.isFavorite = true;
      })
      .addCase(postFavoriteAction.rejected, (state) => {
        state.isFavorite = false;
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(getFavoritesAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  },
});
