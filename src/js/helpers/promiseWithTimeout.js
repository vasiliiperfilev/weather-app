function promiseWithTimeout(promise) {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error('Request timed out'));
    }, 5000);
  });
  return {
    promiseOrTimeout: Promise.race([promise, timeoutPromise]),
    timeoutId,
  };
}

export default promiseWithTimeout;
