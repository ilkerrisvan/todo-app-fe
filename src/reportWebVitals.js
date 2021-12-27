const reportWebVitals = onTaskEntry => {
  if (onTaskEntry && onTaskEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onTaskEntry);
      getFID(onTaskEntry);
      getFCP(onTaskEntry);
      getLCP(onTaskEntry);
      getTTFB(onTaskEntry);
    });
  }
};

export default reportWebVitals;
