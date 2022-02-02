export const responsiveImageFragment = `
    fragment responsiveImage on ResponsiveImage {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64 
    }

`

export const metaTagsFragment = `
    fragment metaTagsFragment on Tag {
        attributes
        content
        tag
    }
`;