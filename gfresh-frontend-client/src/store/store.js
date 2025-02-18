import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { categoryApi } from './api/categoryapi'
import { userApi } from './api/userapi'
import { productApi } from './api/productapi'
import { cartApi } from './api/cartapi'
import token from './state/token'
import cart from './state/cart'
import wishlist from './state/wishlist'
import { wishlistApi } from './api/wishlistapi'
import { bannerApi } from './api/bannerapi'
import { brandApi } from './api/brandapi'
import { addressApi } from './api/addressapi'
import { orderApi } from './api/orderapi'

export const store = configureStore({
  reducer: {
    token:token,
    cart:cart,
    wishlist:wishlist,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware).concat(userApi.middleware).concat(productApi.middleware).concat(cartApi.middleware).concat(wishlistApi.middleware).concat(bannerApi.middleware).concat(brandApi.middleware).concat(addressApi.middleware).concat(orderApi.middleware),
})

setupListeners(store.dispatch)