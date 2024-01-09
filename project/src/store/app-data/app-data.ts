import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { NameSpace } from '../../const';
import {
  getFavoritesOffersAction,
  getOfferByIdAction,
  getOffersAction,
  getOffersNearbyAction,
  getReviewsbyIdAction,
  postFavoriteAction,
  postReviewAction,
} from '../api-actions';
import { updateFavoriteStatus } from '../../utils';


const initialState: AppData = {
  offers: [],
  offerById: null,
  offersNearby: [],
  reviews: [],
  favoriteOffers: [],
  isLoading: false,
  isFavoriteStatus: false,
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
      .addCase(getFavoritesOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(postFavoriteAction.pending, (state) => {
        state.isFavoriteStatus = true;
      })
      .addCase(postFavoriteAction.rejected, (state) => {
        state.isFavoriteStatus = true;
      })
      .addCase(postFavoriteAction.fulfilled,(state, action) => {
        const { id, isFavorite } = action.payload;
        const targetIndex = state.favoriteOffers.findIndex(
          (offer) => offer.id === id
        );

        if (isFavorite) {
          state.favoriteOffers =
            targetIndex !== -1
              ? [
                ...state.favoriteOffers.slice(0, targetIndex),
                { ...state.favoriteOffers[targetIndex], isFavorite },
                ...state.favoriteOffers.slice(targetIndex + 1),
              ]
              : [...state.favoriteOffers, { ...action.payload }];
        } else {
          state.favoriteOffers =
            targetIndex !== -1
              ? [
                ...state.favoriteOffers.slice(0, targetIndex),
                ...state.favoriteOffers.slice(targetIndex + 1),
              ]
              : state.favoriteOffers;
        }

        state.offers = updateFavoriteStatus(state.offers, id, isFavorite);

        state.isFavoriteStatus = false;
      }
      );
  },
});
