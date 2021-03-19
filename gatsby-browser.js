/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const styles = require("@fortawesome/fontawesome-svg-core/styles.css")
const config = require("@fortawesome/fontawesome-svg-core")

config.autoAddCss = false
exports.shouldUpdateScroll = () => {
  if (window.__navigatingToLink === true) {
    return [0, 0];
  }
  return true;
};

exports.onRouteUpdate = () => {
  window.__navigatingToLink = false;
};