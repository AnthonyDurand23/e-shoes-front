"use strict";
exports.id = 301;
exports.ids = [301];
exports.modules = {

/***/ 1720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useTypedSelector),
/* harmony export */   "z": () => (/* binding */ useTypedDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useTypedDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dl": () => (/* binding */ getCartFromLocalStorage),
/* harmony export */   "TC": () => (/* binding */ modifyQuantityCartProduct),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "al": () => (/* binding */ deleteCart),
/* harmony export */   "hp": () => (/* binding */ deleteProductToCart),
/* harmony export */   "sc": () => (/* binding */ modifySizeCartProduct),
/* harmony export */   "tR": () => (/* binding */ addEvenProductAndSizeToCart)
/* harmony export */ });
/* unused harmony exports dataSlice, getProducts */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    products: [],
    cart: [],
    nbProductsCart: 0,
    totalPriceCart: 0
};
const dataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "data",
    initialState,
    reducers: {
        getProducts: (state, action)=>{
            state.products = action.payload;
        },
        getCartFromLocalStorage: (state)=>{
            if (localStorage.getItem("cart")) {
                state.cart = JSON.parse(localStorage.getItem("cart") || "") || [];
                state.nbProductsCart = state.cart.map(({ quantity  })=>quantity).reduce((a, b)=>a + b, 0);
                state.totalPriceCart = state.cart.map(({ price , quantity  })=>price * quantity).reduce((a, b)=>a + b, 0);
            }
        },
        addToCart: (state, action)=>{
            state.cart = [
                ...state.cart,
                action.payload
            ];
            state.nbProductsCart = state.cart.map(({ quantity  })=>quantity).reduce((a, b)=>a + b);
            state.totalPriceCart = state.cart.map(({ price , quantity  })=>price * quantity).reduce((a, b)=>a + b);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        addEvenProductAndSizeToCart: (state, action)=>{
            state.cart = state.cart.map((product)=>{
                if (action.payload.reference === product.reference && action.payload.size === product.size) return {
                    ...product,
                    quantity: product.quantity + 1
                };
                else return product;
            });
            state.nbProductsCart = state.cart.map(({ quantity  })=>quantity).reduce((a, b)=>a + b);
            state.totalPriceCart = state.cart.map(({ price , quantity  })=>price * quantity).reduce((a, b)=>a + b);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        modifySizeCartProduct: (state, action)=>{
            state.cart = state.cart.map((product, index)=>{
                if (action.payload.productIndex !== index) return product;
                else return {
                    ...product,
                    size: action.payload.size
                };
            });
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        modifyQuantityCartProduct: (state, action)=>{
            state.cart = state.cart.map((product, index)=>{
                if (action.payload.productIndex !== index) return product;
                else return {
                    ...product,
                    quantity: action.payload.quantity
                };
            });
            state.nbProductsCart = state.cart.map(({ quantity  })=>quantity).reduce((a, b)=>a + b);
            state.totalPriceCart = state.cart.map(({ price , quantity  })=>price * quantity).reduce((a, b)=>a + b);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        deleteProductToCart: (state, action)=>{
            state.cart = state.cart.filter((_, index)=>index !== action.payload);
            state.nbProductsCart = state.cart.map(({ quantity  })=>quantity).reduce((a, b)=>a + b, 0);
            state.totalPriceCart = state.cart.map(({ price , quantity  })=>price * quantity).reduce((a, b)=>a + b, 0);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        deleteCart: (state)=>{
            state.cart = [];
            state.nbProductsCart = state.totalPriceCart = 0;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    }
});
const { getProducts , getCartFromLocalStorage , addToCart , modifySizeCartProduct , modifyQuantityCartProduct , addEvenProductAndSizeToCart , deleteProductToCart , deleteCart  } = dataSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataSlice.reducer);


/***/ }),

/***/ 8777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cl": () => (/* binding */ closeResultCheckoutModal),
/* harmony export */   "Sx": () => (/* binding */ closeMobileMenuModal),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aF": () => (/* binding */ openResultCheckoutModal),
/* harmony export */   "iz": () => (/* binding */ setOnHoverCartLink),
/* harmony export */   "kZ": () => (/* binding */ openCartModal),
/* harmony export */   "np": () => (/* binding */ openMobileMenuModal),
/* harmony export */   "uN": () => (/* binding */ closeCartModal)
/* harmony export */ });
/* unused harmony export interfaceSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isMobileMenuModalOpen: false,
    isCartModalOpen: false,
    onHoverCartLink: false,
    isResultCheckoutModalOpen: false
};
const interfaceSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "interface",
    initialState,
    reducers: {
        openMobileMenuModal: (state)=>{
            state.isMobileMenuModalOpen = true;
        },
        closeMobileMenuModal: (state)=>{
            state.isMobileMenuModalOpen = false;
        },
        openCartModal: (state)=>{
            state.isCartModalOpen = true;
        },
        closeCartModal: (state)=>{
            state.isCartModalOpen = false;
        },
        setOnHoverCartLink: (state, action)=>{
            state.onHoverCartLink = action.payload;
        },
        openResultCheckoutModal: (state)=>{
            state.isResultCheckoutModalOpen = true;
        },
        closeResultCheckoutModal: (state)=>{
            state.isResultCheckoutModalOpen = false;
        }
    }
});
const { openMobileMenuModal , closeMobileMenuModal , openCartModal , closeCartModal , setOnHoverCartLink , openResultCheckoutModal , closeResultCheckoutModal  } = interfaceSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interfaceSlice.reducer);


/***/ }),

/***/ 5552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getSizesByGender),
/* harmony export */   "c": () => (/* binding */ getDeliveryDate)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_locale_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7688);
/* harmony import */ var dayjs_locale_fr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_fr__WEBPACK_IMPORTED_MODULE_1__);


dayjs__WEBPACK_IMPORTED_MODULE_0___default().locale("fr");
const getSizesByGender = (gender)=>{
    const genderSizes = {
        femme: [
            35,
            49.5
        ],
        homme: [
            35,
            49.5
        ],
        enfant: [
            15,
            37
        ]
    };
    if (gender === "mixte") gender = "homme";
    return Array.from({
        length: (genderSizes[gender][1] - genderSizes[gender][0]) / 0.5 + 1
    }, (_, index)=>genderSizes[gender][0] + index * 0.5).map((item, index)=>{
        return {
            id: index + 1,
            value: item.toString(),
            unavailable: false
        };
    });
};
const getDeliveryDate = ()=>{
    let deliveryTime = 3;
    if (dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(deliveryTime, "day").format("dddd") === "dimanche") deliveryTime = 4;
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(deliveryTime, "day").format("dddd D MMMM").split(" ").map((el)=>el.charAt(0).toUpperCase() + el.substring(1).toLowerCase()).join(" ");
};


/***/ })

};
;