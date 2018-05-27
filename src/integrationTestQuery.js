const integrationTestQuery = `
  subscription {
    live {
      ...CatQueryFragment

      query {
        houses {
          ... on House {
            id
          }

          address(includePostalCode: false)
        }

        jedis {
          id
          name
          houses {
            address(includePostalCode: true)
          }
        }
      }

      patch { op, path, from, value }
    }
  }

  fragment CatQueryFragment on LiveSubscription {
    query {
      houses {
        numberOfCats
      }
    }
  }
`

export default integrationTestQuery
