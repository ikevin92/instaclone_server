const userController = require('../controllers/user');
// const followController = require('../controllers/follow');
// const publicationController = require('../controllers/publication');
// const commentController = require('../controllers/comment');
// const likeController = require('../controllers/like');

const resolvers = {
  Query: {
    // User
    getUser: (_, { id, username }) => userController.getUser(id, username),
    // search: (_, { search }) => userController.search(search),
  },
  Mutation: {
    // User
    register: (_, { input }) => userController.register(input),
    // login: (_, { input }) => userController.login(input),
    login: (_, { input }) => userController.login(input),
  },
};

module.exports = resolvers;
