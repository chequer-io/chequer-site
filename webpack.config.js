// module.exports
module.exports = function() {
  return require(`./webpack.${
    process.env.NODE_ENV === 'production' ? 'production' : 'dev'
  }.js`);
};
