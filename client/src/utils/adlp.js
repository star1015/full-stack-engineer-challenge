const adlp = window.DA_adlp || {};
const MOBILE_MAX_WIDTH = 500;
const DESKTOP_MIN_WIDTH = 1100;

const isTouchDevice = function isTouchDevice() {
  return !!("ontouchstart" in window);
};
const isMobile = function isMobile() {
  if (adlp && adlp.device) {
    return adlp.device === "mobile";
  }
  return isTouchDevice() && window.screen.width < MOBILE_MAX_WIDTH;
};
const isDesktop = function isDesktop() {
  if (adlp && adlp.device) {
    return adlp.device === "desktop";
  }
  return (
    !isTouchDevice() ||
    (!!window.navigator.platform.match(/(Mac|Win)/g) &&
      window.screen.width >= DESKTOP_MIN_WIDTH)
  );
};
const isTablet = function isTablet() {
  if (adlp && adlp.device) {
    return adlp.device === "tablet";
  }
  return isTouchDevice() && window.screen.width >= MOBILE_MAX_WIDTH && !isDesktop();
};
const getPlatform = function getPlatform() {
  let platform;
  if (isMobile()) {
    platform = "mobile";
  } else if (isTablet()) {
    platform = "tablet";
  } else {
    platform = "desktop";
  }
  return platform;
};

export { adlp, getPlatform };
