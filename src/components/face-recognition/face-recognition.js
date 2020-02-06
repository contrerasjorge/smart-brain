import React from 'react';
import styled from 'styled-components';

const BoundingBox = styled.div`
  position: absolute;
  box-shadow: inset 0 0 0 3px #149df2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`;

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img
          id='inputimage'
          alt=''
          src={imageUrl}
          width='500px'
          height='auto'
        />
        {boxes.map(box => (
          <BoundingBox
            key={`box${box.topRow}${box.rightCol}`}
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
