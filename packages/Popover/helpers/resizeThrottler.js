// copy/pasta from https://developer.mozilla.org/en-US/docs/Web/Events/resize
let resizeTimeout;
const resizeThrottler = callback => () => {
  // ignore resize events as long as an callback execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      callback();

      // callback will execute at a rate of 15fps
    }, 66);
  }
};

export default resizeThrottler;
