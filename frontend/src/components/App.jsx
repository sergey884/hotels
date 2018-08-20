import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hotel from '<components>/Hotel';

class App extends React.Component {
  componentDidMount() {
    const { getHotels } = this.props;

    getHotels();
  }

  render() {
    const { hotels, setData } = this.props;
    console.log(hotels);
    return (
      <div style={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={24}
          justify="center"
        >
          {
            hotels && hotels.length > 0 &&
            hotels.map((item, index) => <Hotel key={index} hotel={item} setData={setData} />)
          }
        </Grid>
      </div>
    );
  }
}

export default App
