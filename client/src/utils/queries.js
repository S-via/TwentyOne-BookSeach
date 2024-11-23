import { gql } from 'apollo/client'

export const GET_SINGLE_USER = gql`
query getsingleUser($id:ID,$username:String) {
    getSingleUser(id:$id, username:$username) {
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

export const LOGIN_USER = gql`
query login($email: String, $username: String, $password: String!){
    login(email: $email, username: $username, password: $password){
user {
            _id
            username
            email
        }
    }
    }
    `