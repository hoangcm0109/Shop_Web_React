import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Helmet from '..//components/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'


const Product = () => {
    let params = useParams()

    const product = productData.getProductBySlug(params.slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={item.price}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>

        </Helmet>
    )
}

export default Product
