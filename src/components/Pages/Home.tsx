import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
  // add any props here
}

const Home: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>Tervetuloa Julistukseen</h1>
      <p>Tähän rakennetaan kotisivut.</p>
      <div className="d-flex justify-content-center">
        <Button  variant="outline-success">
          Aloitetaan Rock! 
        </Button>
      </div>
    </div>
  );
};

export default Home;

