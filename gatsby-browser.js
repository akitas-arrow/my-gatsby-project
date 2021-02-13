/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.shouldUpdateScroll = () => {
  if (window.__navigatingToLink === true) {
    return [0, 0];
  }
  return true;
};

exports.onRouteUpdate = () => {
  window.__navigatingToLink = false;
};