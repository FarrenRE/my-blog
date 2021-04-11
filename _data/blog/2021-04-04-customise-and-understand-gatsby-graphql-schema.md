---
template: BlogPost
date: 2021-04-04T02:23:18.180Z
path: /customise-gatsby-graphql-schema
title: Customise (and understand) Gatsby GraphQL Schema
tagline: Cannot query field X on type Y?
metaDescription: >-
  Cannot query field X on type Y? You may need to customise your GraphQL Schema.
  In Gatsby, it's easy to do!
thumbnail: /assets/graphql-explorer-sample-order.png
---
## Quick reference

1. Create field in `config.yml`
2. Update schema customization in `gatbsy-node.js`
3. Update page query

And somewhere along the way, implement the field in desired component/file!

## Desired result

While building this site using Gatbsy + Netlify CMS, I wanted to add a field to the pre-existing blog template found in `config.yml`:

```yaml
# config.yml
- name: blog
  ...
  fields:
    ...
    name: order,
    label: Order,
    widget: string,
    hint: "Uses flex order, -1 will display first",
    required: false
    ...
```

With the field appearing in the Netlify CMS admin panel like so:

![Sample field: Order](/assets/netlify-cms-sample-field-order.png "Sample field: Order")

Done & done, save & run -- lo and behold an error in the console:

```
Cannot query field "order" on type "Frontmatter".

If you don't expect "order" to exist on the type "Frontmatter" it is most likely a typo.
However, if you expect "order" to exist there are a couple of solutions to common problems:

- If you added a new data source and/or changed something inside gatsby-node.js/gatsby-config.js, please try a restart of your development server
- The field might be accessible in another subfield, please try your query in GraphiQL and use the GraphiQL explorer to see which fields you can query and what shape they have
- You want to optionally use your field "order" and right now it is not used anywhere. Therefore Gatsby can't infer the type and add it to the GraphQL schema. A quick fix is to add a least one entry with that field ("dummy content")

It is recommended to explicitly type your GraphQL schema if you want to use optional fields. This way you don't have to add the mentioned "dummy content". Visit our docs to learn how you can define the schema for "Frontmatter":
https://www.gatsbyjs.org/docs/schema-customization/#creating-type-definitions
```

As error messages go, it's pretty self-explanatory. I was definitely in the third bucket: "**You want to optionally use your field "order" and right now it is not used anywhere. Therefore Gatsby can't infer the type and add it to the GraphQL schema. A quick fix is to add a least one entry with that field ("dummy content")**"

As someone still learning Gatsby however, it was a turning point in my perception of GraphQL.

## Extending Frontmatter

The [provided link](https://www.gatsbyjs.org/docs/schema-customization/#creating-type-definitions) for schema customisation demystified the particulars. For my purposes, this was the relevant documentation (under "Nested types"):

```javascript
// gatsby-node.js
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      tags: [String!]!
    }
  `
  createTypes(typeDefs)
}
```

> https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#nested-types

I came here to extend Frontmatter, and that's what I did:

```javascript
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      order: Int
    }
  `
```

Restarted the development environment, and it worked like a charm! That's always a good feeling but I still felt that I was stabbing in the dark; not truly comprehending the instructions from the documentation.

Here's what changed that for me:

## Perusing the GraphQL Schema Explorer

In short, http://localhost:8000/___graphql

Now, I've been here before, but I'm reminded of the times when I kept asking myself: Do I need React? Truth is, you'll know when you do -- and when that time comes you will understand the value it provides.

This time, I was able to use the GraphQL Explorer as context for all these patterns I've been coming across (and attempting to extend by replicating without understanding) in my Gatsby project.

Like page queries (edges and nodes, oh my!):

```javascript
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            order
          }
        }
      }
    }
  }
`
```

And data props:

```javascript
const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    ...
  )
}
```

Or even just what the heck "allMarkdownRemark" actually is and where it sits in the site data:

![GraphQL Explorer](/assets/graphql-explorer-sample-order.png "GraphQL Explorer")

^ Here! ^

## It's all very obvious really...

At least, now it is! And that, in part, is the beauty of it all.
