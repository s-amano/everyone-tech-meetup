import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers {
    users(order_by: { user_id: asc }) {
      name
      user_id
    }
  }
`

// export const GET_USERS_LOCAL = gql`
//   query GetUsers {
//     users(order_by: { user_id: asc }) @client {
//       id
//       name
//     }
//   }
// `
