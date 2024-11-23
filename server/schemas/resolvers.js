/* 
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        getsingleUser: async (parent, { id, username }) => {
            const user = await User.findOne({
                $or: [{ _id: id }, { username }],
            });
            return user;
        },

        login: async (parent, { email, username, password }) => {
            const user = await User.findOne({
                $or: [{ username }, { email }],
            });

            if (!user) {
                throw new Error('not found');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new Error('not found')
            }

            const token = signToken(user);
            return { token, user };
        },

        Mutation: {

            addUser: async (parent, args) => {
                const user = await User.create(args);
                const token = signToken(user)
                return { token, user };
            },

            saveBook: async (parent, {bookData }, context) => {
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: bookData } },
                    { new: true, runValidators: true }

                )
                return user;
            },
            deleteBook: async (parent, { bookId }, context) => {
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                )
                return user;
            },
        },
    }
}

module.exports = resolvers;

 */
/* Add more error handling */