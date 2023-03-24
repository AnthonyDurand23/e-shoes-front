"use strict";
exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 7063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Delete.47785345.svg","height":24,"width":24});

/***/ }),

/***/ 6253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Select_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4025);
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5552);
/* harmony import */ var _hooks_reduxHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1720);
/* harmony import */ var _slices_dataSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(788);
/* harmony import */ var _slices_interfaceSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8777);
/* harmony import */ var _public_assets_img_Delete_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7063);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Select_Select__WEBPACK_IMPORTED_MODULE_4__]);
_Select_Select__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const quantities = [
    {
        id: 1,
        value: "1",
        unavailable: false
    },
    {
        id: 2,
        value: "2",
        unavailable: false
    },
    {
        id: 3,
        value: "3",
        unavailable: false
    },
    {
        id: 4,
        value: "4",
        unavailable: false
    },
    {
        id: 5,
        value: "5",
        unavailable: false
    }
];
const CartProduct = ({ product , productIndex  })=>{
    const isCartModalOpen = (0,_hooks_reduxHooks__WEBPACK_IMPORTED_MODULE_6__/* .useTypedSelector */ .i)((state)=>state.interface.isCartModalOpen);
    const sizes = (0,_tools_tools__WEBPACK_IMPORTED_MODULE_5__/* .getSizesByGender */ .W)(product.gender);
    const [selectedSize, setSelectedSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: sizes.find((size)=>size.value === product.size.toString())?.id || 0,
        value: product.size.toString(),
        unavailable: sizes.find((size)=>size.value === product.size.toString())?.unavailable || false
    });
    const [selectedQuantity, setSelectedQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: quantities.find((quantity)=>quantity.value === product.quantity.toString())?.id || 0,
        value: product.quantity.toString(),
        unavailable: false
    });
    const dispatch = (0,_hooks_reduxHooks__WEBPACK_IMPORTED_MODULE_6__/* .useTypedDispatch */ .z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (product.size.toString() === selectedSize.value) return;
        dispatch((0,_slices_dataSlice__WEBPACK_IMPORTED_MODULE_7__/* .modifySizeCartProduct */ .sc)({
            productIndex,
            size: Number(selectedSize.value)
        }));
    }, [
        selectedSize
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (product.quantity.toString() === selectedQuantity.value) return;
        dispatch((0,_slices_dataSlice__WEBPACK_IMPORTED_MODULE_7__/* .modifyQuantityCartProduct */ .TC)({
            productIndex,
            quantity: Number(selectedQuantity.value)
        }));
    }, [
        selectedQuantity
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "flex gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `relative min-w-[75px] md:min-w-[100px] h-[${isCartModalOpen ? "100px" : "110px"}] md:h-[${isCartModalOpen ? "125px" : "150px"}] ${!isCartModalOpen && "xl:min-w-[125px] xl:min-h-[160px]"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: `/${product.gender === "mixte" ? "homme" : product.gender}/${product.id}`,
                    onClick: ()=>dispatch((0,_slices_interfaceSlice__WEBPACK_IMPORTED_MODULE_8__/* .closeCartModal */ .uN)()),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: `${"https://res.cloudinary.com/doemagjfj/image/upload/v1677079486/e-shoes/"}${product.photo}.jpg`,
                        fill: true,
                        priority: true,
                        alt: `photo chaussures ${product.name}`,
                        sizes: "33vw"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col gap-2 xl:gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between items-center p4-b md:p2-b xl:p1-b",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: product.brand
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    (product.price * product.quantity).toFixed(2).replace(".", ","),
                                    " €"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/${product.gender === "mixte" ? "homme" : product.gender}/${product.id}`,
                        className: "p4-b md:p2-b xl:p1-b uppercase hover:underline",
                        onClick: ()=>dispatch((0,_slices_interfaceSlice__WEBPACK_IMPORTED_MODULE_8__/* .closeCartModal */ .uN)()),
                        children: product.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            isCartModalOpen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p4-r md:p2-r",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Taille :"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: product.size
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Quantit\xe9 :"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: product.quantity
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "xl:flex xl:gap-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Select_Select__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        name: "size",
                                        classname: "relative w-20 md:w-24 xl:w-28 mt-1 p4-r md:p2-r xl:p1-r",
                                        label: "Taille :",
                                        labelClassname: "p4-r md:p2-r xl:p1-r",
                                        selectedOption: selectedSize,
                                        setSelectedOption: setSelectedSize,
                                        options: sizes
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Select_Select__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        name: "quantity",
                                        classname: "relative w-16 md:w-20 xl:w-24 mt-1 p4-r md:p2-r xl:p1-r",
                                        label: "Quantit\xe9 :",
                                        labelClassname: "p4-r md:p2-r xl:p1-r",
                                        selectedOption: selectedQuantity,
                                        setSelectedOption: setSelectedQuantity,
                                        options: quantities
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "opacity-70 md:scale-125 xl:scale-150 cursor-pointer",
                                src: _public_assets_img_Delete_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                alt: "ic\xf4ne suppression article",
                                onClick: ()=>dispatch((0,_slices_dataSlice__WEBPACK_IMPORTED_MODULE_7__/* .deleteProductToCart */ .hp)(productIndex))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartProduct);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;