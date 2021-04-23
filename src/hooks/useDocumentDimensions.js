import { useState, useEffect } from 'react';

const getDocumentDimensions = () => {
  const { offsetWidth: width, offsetHeight: height } = window.document.body;
  return {
    width,
    height,
  };
};

const useDocumentDimensions = () => {
  const [documentDimensions, setDocumentDimensions] = useState(
    getDocumentDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setDocumentDimensions(getDocumentDimensions());
    };

    // Create an Observer instance
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    // Start observing a DOM node
    resizeObserver.observe(document.body);

    return () => {
      // Disconnect observing of DOM node
      resizeObserver.disconnect();
    };
  }, []);

  return documentDimensions;
};

export default useDocumentDimensions;
