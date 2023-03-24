"use strict";
exports.id = 199;
exports.ids = [199];
exports.modules = {

/***/ 4199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_reduxHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1720);
/* harmony import */ var _slices_dataSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(788);
/* harmony import */ var _slices_interfaceSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8777);
/* harmony import */ var _Select_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4025);
/* harmony import */ var _ProductDetails_ProductDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2782);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__, _Select_Select__WEBPACK_IMPORTED_MODULE_8__]);
([uuid__WEBPACK_IMPORTED_MODULE_1__, _Select_Select__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Product = ({ product , sizes  })=>{
    const dispatch = (0,_hooks_reduxHooks__WEBPACK_IMPORTED_MODULE_5__/* .useTypedDispatch */ .z)();
    const cart = (0,_hooks_reduxHooks__WEBPACK_IMPORTED_MODULE_5__/* .useTypedSelector */ .i)((state)=>state.data.cart);
    const [selectedImg, setselectedImg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [selectedSize, setSelectedSize] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        id: 0,
        value: "Taille",
        unavailable: false
    });
    const [sizeAlert, setSizeAlert] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [imgZoom, setImgZoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [zoomClassName, setZoomClassName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (selectedSize.id !== 0) setSizeAlert(false);
    }, [
        selectedSize
    ]);
    const handleSubmitForm = (event)=>{
        event.preventDefault();
        if (selectedSize.id === 0) {
            setSizeAlert(true);
        } else {
            const evenProductAndSize = cart.find(({ reference , size  })=>reference === product.reference && size === Number(selectedSize.value));
            if (evenProductAndSize) {
                dispatch((0,_slices_dataSlice__WEBPACK_IMPORTED_MODULE_6__/* .addEvenProductAndSizeToCart */ .tR)({
                    reference: product.reference,
                    size: Number(selectedSize.value)
                }));
            } else {
                dispatch((0,_slices_dataSlice__WEBPACK_IMPORTED_MODULE_6__/* .addToCart */ .Xq)({
                    id: product.id,
                    reference: product.reference,
                    brand: product.brand,
                    name: product.name,
                    price: product.price,
                    photo: product.photos.split("|")[0],
                    gender: product.gender,
                    size: Number(selectedSize.value),
                    quantity: 1
                }));
            }
            dispatch((0,_slices_interfaceSlice__WEBPACK_IMPORTED_MODULE_7__/* .openCartModal */ .kZ)());
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleMouseMove = (event)=>{
            const productImgContainer = event.view?.document.getElementById("product-img");
            if (productImgContainer) {
                setZoomClassName({
                    transform: `translate(${productImgContainer.getClientRects()[0].width / 2 - (event.clientX - productImgContainer.getClientRects()[0].left)}px, ${productImgContainer.getClientRects()[0].height / 2 - (event.clientY - productImgContainer.getClientRects()[0].top)}px) scale(2)`,
                    cursor: "zoom-in"
                });
            }
        };
        if (imgZoom && window.innerWidth >= 1280) {
            window.addEventListener("mousemove", handleMouseMove);
        } else {
            setZoomClassName({});
        }
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [
        imgZoom
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: `La page de l'article: ${product.name}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `E-SHOES | Article: ${product.name}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "product-body",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                    className: "product-body-container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full md:w-[60%] flex gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "w-fit h-full flex flex-col gap-2",
                                    children: product.photos.split("|").map((photo, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: `w-[50px] md:w-[75px] xl:w-[100px] h-[50px] md:h-[75px] xl:h-[100px] relative cursor-pointer ${index === selectedImg ? "border" : ""}`,
                                            onMouseEnter: ()=>setselectedImg(index),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                src: `${"https://res.cloudinary.com/doemagjfj/image/upload/v1677079486/e-shoes/"}${photo}.jpg`,
                                                fill: true,
                                                alt: `photo chaussures ${product.name}`,
                                                sizes: "(max-width: 768px) 100vw, 50vw"
                                            }, (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)())
                                        }, (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)()))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "product-img",
                                    className: "relative w-full h-[398px] md:h-[573px] xl:h-[748px] shadow-md overflow-hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: `${"https://res.cloudinary.com/doemagjfj/image/upload/v1677079486/e-shoes/"}${product.photos.split("|")[selectedImg]}.jpg`,
                                        fill: true,
                                        priority: true,
                                        style: zoomClassName,
                                        alt: `photo chaussures ${product.name}`,
                                        sizes: "(max-width: 768px) 100vw, 50vw",
                                        onMouseEnter: ()=>setImgZoom(true),
                                        onMouseLeave: ()=>setImgZoom(false)
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full md:w-[40%]",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "pt-8 md:pt-0 flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "h5 md:h4 xl:h3",
                                            children: product.brand
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "h5 md:h4 xl:h3 uppercase",
                                            children: product.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "h6 md:h5 xl:h4",
                                            children: product.categories.length > 1 ? product.categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        index !== 0 ? " - " : "",
                                                        category
                                                    ]
                                                }, (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)())) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: product.categories[0]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            method: "post",
                                            className: "flex flex-col gap-2 md:gap-4",
                                            onSubmit: handleSubmitForm,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "h5 md:h4 xl:h3",
                                                            children: [
                                                                product.price.toFixed(2).replace(".", ","),
                                                                " €"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Select_Select__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            name: "size",
                                                            classname: "relative w-24 xl:w-32 mt-1 p3-r md:p2-r xl:p1-r",
                                                            selectedOption: selectedSize,
                                                            setSelectedOption: setSelectedSize,
                                                            options: sizes
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex gap-4 items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            type: "submit",
                                                            className: "bp-sm xl:bp-lg",
                                                            children: "Ajouter au panier"
                                                        }),
                                                        sizeAlert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "p2-b text-validation-red",
                                                            children: "Veuillez choisir une taille"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pt-8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductDetails_ProductDetails__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        product: product
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ProductDetails = ({ product  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "p2-b md:p1-b underline",
                children: "D\xe9tails du produit :"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pt-4 flex flex-col xl:gap-2",
                children: [
                    product.top && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Dessus / Tige :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.top
                            })
                        ]
                    }),
                    product.lining && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Doublure :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.lining
                            })
                        ]
                    }),
                    product.sockliner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Semelle de propret\xe9 :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.sockliner
                            })
                        ]
                    }),
                    product.outsole && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Semelle d'usure :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.outsole
                            })
                        ]
                    }),
                    product.lining_thickness && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "\xc9paisseur de la doublure :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.lining_thickness
                            })
                        ]
                    }),
                    product.material && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Mati\xe8re :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.material
                            })
                        ]
                    }),
                    product.weather && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Temps :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.weather
                            })
                        ]
                    }),
                    product.sport && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Sport :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.sport
                            })
                        ]
                    }),
                    product.end && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Bout de la chaussure :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.end
                            })
                        ]
                    }),
                    product.heel_shape && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Forme du talon :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.heel_shape
                            })
                        ]
                    }),
                    product.closure && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Fermeture :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.closure
                            })
                        ]
                    }),
                    product.pattern && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Motif / Couleur :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.pattern
                            })
                        ]
                    }),
                    product.additional_infos && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Informations suppl\xe9mentaires :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.additional_infos
                            })
                        ]
                    }),
                    product.properties && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-b",
                                children: "Propri\xe9t\xe9s :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "product-details-r",
                                children: product.properties
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetails);


/***/ })

};
;