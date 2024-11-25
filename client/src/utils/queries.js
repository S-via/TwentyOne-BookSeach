import { gql } from '@apollo/client'

export const GET_ME = gql`
query getMe($id:ID,$username:String) {
    getMe(id:$id, username:$username) {
        _id
        username
        email
        savedBooks{
        bookId
        title
        authors
        description
        image
        link
        }
    }

    }
    `

