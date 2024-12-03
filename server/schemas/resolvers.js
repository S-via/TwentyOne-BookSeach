
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        me: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({
                    _id: context.user._id
                });
                return user;
            }
        }
    },



    Mutation: {

        login: async (parent, { email, password }) => {
            const user = await User.findOne({
                $or: [{ email }, { password }],
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

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)
            return { token, user };
        },

        saveBook: async (parent, { bookData }, context) => {
            console.log(context.user)
            if (context.user) {
                console.log(bookData)
                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: bookData } },
                    { new: true}
                )
                return user;
            }

        },
        removeBook: async (parent,args, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: args } },
                    { new: true }
                )
                return user;
            }
        },
    }
}


module.exports = resolvers;


/* Add more error handling */