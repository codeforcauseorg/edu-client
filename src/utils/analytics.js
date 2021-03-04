function track(...args) {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  if (!window.gtag) {
    return;
  }

  window.gtag(...args);
}

function pageview(props) {
  track('config', process.env.REACT_APP_GA_MEASUREMENT_ID, props);
}

function event(type, props) {
  track('event', type, props);
}

export default {
  pageview,
  event
};
