import React, { useEffect, useRef } from 'react';
import useDocumentDimensions from '../../hooks/useDocumentDimensions';
import './Chalkboard.scss';

const Chalkboard = () => {
  // DOM refs
  const chalkboardRef = useRef(null);
  const chalkRef = useRef(null);

  // Instance refs
  const ctxRef = useRef(null);
  const widthRef = useRef(null);
  const heightRef = useRef(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const mouseDRef = useRef(false);
  const xLastRef = useRef(0);
  const yLastRef = useRef(0);
  const brushDiameterRef = useRef(7);

  // Custom Hooks
  const { width, height } = useDocumentDimensions();

  // Functions
  // Initializes the chalkboard canvas, setting multiple attribute values of the canvas
  const initChalkboardCanvas = () => {
    ctxRef.current = chalkboardRef.current.getContext('2d');

    document.onselectstart = () => {
      return false;
    };

    ctxRef.current.fillStyle = 'rgba(255,255,255,0.5)';
    ctxRef.current.strokeStyle = 'rgba(255,255,255,0.5)';
    ctxRef.current.lineWidth = brushDiameterRef.current;
    ctxRef.current.lineCap = 'round';
  };

  // Updates the width and height ref with the canvas dimensions
  const updateChalkboardDimensions = (canvas) => {
    widthRef.current = canvas.width;
    heightRef.current = canvas.height;
  };

  // Touch events for mobile
  const handleOnTouchMove = (e) => {
    let touch = e.touches[0];
    mouseXRef.current = touch.pageX;
    mouseYRef.current = touch.pageY;
    if (mouseYRef.current < height && mouseXRef.current < width) {
      // e.preventDefault();
      chalkRef.current.style.left = mouseXRef.current + 'px';
      chalkRef.current.style.top = mouseYRef.current + 'px';
      if (mouseDRef.current) {
        drawChalkboard(mouseXRef.current, mouseYRef.current);
      }
    }
  };

  const handleOnTouchStart = (e) => {
    let touch = e.touches[0];
    mouseDRef.current = true;
    mouseXRef.current = touch.pageX;
    mouseYRef.current = touch.pageY;
    xLastRef.current = mouseXRef.current;
    yLastRef.current = mouseYRef.current;
    drawChalkboard(mouseXRef.current + 1, mouseYRef.current + 1);
  };

  const handleOnTouchEnd = () => {
    mouseDRef.current = false;
  };

  // Mouse events
  const handleOnMouseMove = (e) => {
    mouseXRef.current = e.pageX;
    mouseYRef.current = e.pageY;
    if (mouseYRef.current < height && mouseXRef.current < width) {
      chalkRef.current.style.left =
        mouseXRef.current - 0.5 * brushDiameterRef + 'px';
      chalkRef.current.style.top =
        mouseYRef.current - 0.5 * brushDiameterRef + 'px';
      if (mouseDRef.current) {
        drawChalkboard(mouseXRef.current, mouseYRef.current);
      }
    } else {
      chalkRef.current.style.top = height - 10;
    }
  };

  const handleOnMouseDown = () => {
    mouseDRef.current = true;
    xLastRef.current = mouseXRef.current;
    yLastRef.current = mouseYRef.current;
    drawChalkboard(mouseXRef.current + 1, mouseYRef.current + 1);
  };

  const handleOnMouseUp = () => {
    mouseDRef.current = false;
  };

  // Draws on Chalkboard
  const drawChalkboard = (x, y) => {
    ctxRef.current.strokeStyle =
      'rgba(255,255,255,' + (0.4 + Math.random() * 0.2) + ')';
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(xLastRef.current, yLastRef.current);
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();

    // Chalk Effect
    let length = Math.round(
      Math.sqrt(
        Math.pow(x - xLastRef.current, 2) + Math.pow(y - yLastRef.current, 2)
      ) /
        (5 / brushDiameterRef.current)
    );

    let xUnit = (x - xLastRef.current) / length;
    let yUnit = (y - yLastRef.current) / length;

    for (let i = 0; i < length; i++) {
      let xCurrent = xLastRef.current + i * xUnit;
      let yCurrent = yLastRef.current + i * yUnit;
      let xRandom =
        xCurrent + (Math.random() - 0.5) * brushDiameterRef.current * 1.2;
      let yRandom =
        yCurrent + (Math.random() - 0.5) * brushDiameterRef.current * 1.2;
      ctxRef.current.clearRect(
        xRandom,
        yRandom,
        Math.random() * 2 + 2,
        Math.random() + 1
      );
    }

    xLastRef.current = x;
    yLastRef.current = y;
  };

  // useEffects
  useEffect(() => {
    initChalkboardCanvas();
  }, []);

  useEffect(() => {
    updateChalkboardDimensions(chalkboardRef.current);
    initChalkboardCanvas();
  }, [height, width]);

  return (
    <>
      <canvas
        className="chalkboard"
        ref={chalkboardRef}
        height={height}
        width={width}
        onTouchMove={handleOnTouchMove}
        onTouchStart={handleOnTouchStart}
        onTouchEnd={handleOnTouchEnd}
        onMouseMove={handleOnMouseMove}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
        onMouseOut={handleOnMouseUp}
        onBlur={handleOnMouseUp}
      ></canvas>
      <div className="chalk" ref={chalkRef}></div>
    </>
  );
};

export default Chalkboard;
