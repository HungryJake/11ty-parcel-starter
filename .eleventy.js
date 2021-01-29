module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/app.js');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: ['html', 'md', 'njk']
  };
};
