module.exports = function (eleventyConfig) {
  // Passthrough Css file
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.setTemplateFormats("html,liquid,njk");

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public",
      data: "_data",
    },
  };
};
