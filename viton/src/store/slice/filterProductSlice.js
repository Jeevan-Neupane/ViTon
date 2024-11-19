import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filter_products: [],
    allProducts: [],
    sortingWay: "Sorting",
    gridView: true,
    showFilterDiv: false,

    filters: {
        category: "all",
        rating: 4,
        maxPrice: 0,
        minPrice: 0,
        brand: "all"

    }
}


const filterProductSlice = createSlice({
    name: "filterProducts",
    initialState,
    reducers: {
        loadFilterProducts: (state, action) => {
            let priceArray = action?.payload?.map((item) => {
                return item.price;
            })
            let minPrice;
            let maxPrice;
            if (priceArray) {

                minPrice = Math.min(...priceArray);
                maxPrice = Math.max(...priceArray);
            }
            state.allProducts = action?.payload;
            state.filter_products = action?.payload;
            state.filters.maxPrice = maxPrice;
            state.filters.minPrice = minPrice;


        },
        setCategory: (state, action) => {
            state.filters.category = action.payload;
        },
        setRating: (state, action) => {
            state.filters.rating = action.payload;
        },
        setPriceRange: (state, action) => {
            state.filters.maxPrice = action.payload.max;
            state.filters.minPrice = action.payload.min;




        },
        setBrandName: (state, action) => {
            state.filters.brand = action.payload;
        },
        setSortingWay: (state, action) => {
            state.sortingWay = action.payload;

        },
        setView: (state, action) => {
            state.gridView = action.payload;

        },
        sortProducts: (state, action) => {
            let sortedData;
            const { filter_products, sortingWay } = state;

            let tempSortPorducts = [...filter_products];





            const sortFunction = (a, b) => {
                if (sortingWay === "Price(low-high)") {
                    return a.price - b.price;
                }
                if (sortingWay === 'Price(high-low)') {
                    return b.price - a.price;

                }
                if (sortingWay === 'Ascending(a-z)') {
                    return a.title.localeCompare(b.title);
                }
                if (sortingWay === 'Descending(z-a)') {
                    return b.title.localeCompare(a.title);
                }
                if (sortingWay === "Rating(low-high)") {
                    return a.rating - b.rating;
                }
                if (sortingWay === 'Rating(high-low)') {
                    return b.rating - a.rating;

                } if (sortingWay === 'Discount%(low-high)') {
                    return a.discountPercentage - b.discountPercentage;
                }
                if (sortingWay === "Discount%(high-low)") {
                    return b.discountPercentage - a.discountPercentage;

                }

            }


            sortedData = tempSortPorducts.sort(sortFunction);
            state.filter_products = sortedData;


        },
        filterProducts: (state, action) => {

            let { allProducts } = state;
            let tempFilter = allProducts;


            const { category, rating, minPrice, maxPrice, brand } = state.filters;

            if (category != "all") {
                tempFilter = tempFilter?.filter((item) => {
                    return category === item.category;
                })
            }

            if (rating !== 4) {
                tempFilter = tempFilter?.filter((item) => {
                    return rating <= item.rating;
                })
            }
            if (minPrice || maxPrice) {
                tempFilter = tempFilter?.filter((item) => {
                    if (item.price >= minPrice && item.price <= maxPrice) {
                        return true;
                    } else {
                        return false;
                    }
                })

            }

            if (brand != "all") {
                tempFilter = tempFilter?.filter((item) => {
                    return item.brand === brand;
                })
            }






            state.filter_products = tempFilter;
        },
        resetFilters: (state, actions) => {

            let priceArray = state?.allProducts?.map((item) => {
                return item.price;
            })
            let minPrice;
            let maxPrice;
            if (priceArray) {

                minPrice = Math.min(...priceArray);
                maxPrice = Math.max(...priceArray);
            }

            state.filters.category = "all";
            state.filters.rating = 4;
            state.filter_products = state.allProducts;
            state.filters.maxPrice = maxPrice;
            state.filters.minPrice = minPrice;
            state.filters.brand = "all"

        },
        setShowFilterDiv: (state, action) => {
            state.showFilterDiv = true;
        },


        hideShowFilterDiv: (state, action) => {
            state.showFilterDiv = false;
        },

    }
})


export default filterProductSlice.reducer;
export const { loadFilterProducts, setCategory, filterProducts, setRating, setPriceRange, setBrandName, resetFilters, setSortingWay, sortProducts, setView, setShowFilterDiv, hideShowFilterDiv } = filterProductSlice.actions;