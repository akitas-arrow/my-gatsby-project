import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

function ServiceItem({src, title, description}) {

    const data = useStaticQuery(graphql`
        query ($src:String!) {
            file(relativePath:{eq:$src}){
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    
    return (
        <div>
            <Img fluid={data.file.childImageSharp.fluid}/>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default ServiceItem
