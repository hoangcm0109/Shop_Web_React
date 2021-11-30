import React, { useState, useCallback, useEffect, useRef } from 'react'

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'

import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'

const Catalog = () => {

    const initFilter = {
        category: [],
        color: [],
        size: []
    }

    const productList = productData.getAllProducts()

    const [products, setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break;
                case "COLOR":
                    setFilter({...filter, color: [...filter.category, item.color]})
                    break;
                case "SIZE":
                    setFilter({...filter, size: [...filter.category, item.size]})
                    break;
            
                default:
                    break;
            }
            
        } else {
            switch (type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({...filter, category: newCategory})
                    break;
                case "COLOR":
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({...filter, color: newColor})
                    break;
                case "SIZE":
                    const newSize = filter.size.filter(e => e !== item.size)
                    setFilter({...filter, size: newSize})
                    break;
            
                default:
                    break;
            }
        }
    }

    const updateProduct = useCallback(
        () => {
            let temp = productList

            if(filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }

            if(filter.color.length > 0) {
                temp = temp.filter(e => {
                    const check = e.colors.find(color => filter.color.includes(color))
                    return check !== undefined
                })
            }

            if(filter.size.length > 0) {
                temp = temp.filter(e => {
                    const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined
                })
            }

            setProducts(temp)
        },
        [filter, setProducts]
    )

    const clearFilter = () => {
        setFilter(initFilter)
        updateProduct()
    }

    useEffect(() => {
        updateProduct()
    }, [updateProduct])

    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle('active')

    return (
        <Helmet title="Sản phẩm">
            {
                console.log(filter)
            }
            <div className="catalog">
                <div className="catalog_filter" ref={filterRef}>
                    <div className="catalog_filter_close" onClick={showHideFilter}>
                        <i className='bx bx-left-arrow-alt'></i>
                    </div>
                    <div className="catalog_filter_widget">
                        <div className="catalog_filter_widget_title">
                            Danh mục sản phẩm
                        </div>
                        <div className="catalog_filter_widget_content">
                            {
                                category.map((item, index) => (
                                    <div className="catalog_filter_widget_content_item" key={index}>
                                        <CheckBox 
                                            label={item.display}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                            checked={filter.category.includes(item.categorySlug)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog_filter_widget">
                        <div className="catalog_filter_widget_title">
                            Màu sắc
                        </div>
                        <div className="catalog_filter_widget_content">
                            {
                                colors.map((item, index) => (
                                    <div className="catalog_filter_widget_content_item" key={index}>
                                        <CheckBox 
                                            label={item.display}
                                            onChange={(input) => filterSelect("COLOR", input.checked, item)}
                                            checked={filter.color.includes(item.color)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog_filter_widget">
                        <div className="catalog_filter_widget_title">
                            Kich thước
                        </div>
                        <div className="catalog_filter_widget_content">
                            {
                                size.map((item, index) => (
                                    <div className="catalog_filter_widget_content_item" key={index}>
                                        <CheckBox 
                                            label={item.display}
                                            onChange={(input) => filterSelect("SIZE", input.checked, item)}
                                            checked={filter.size.includes(item.size)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog_filter_widget">
                        <div className="catalog_filter_widget_content">
                            <Button
                                size="sm"
                                onClick={clearFilter}
                            >
                                Xóa dữ liệu
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="catalog_filter_toggle">
                    <Button size="sm" onClick={() => showHideFilter()}>Bộ lọc</Button>
                </div>
                <div className="catalog_content">
                    <InfinityList 
                        data={products}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
