import { useState, useEffect } from 'react';

const getDocumentDimensions = () => {
  console.log;

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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return documentDimensions;
};

export default useDocumentDimensions;
