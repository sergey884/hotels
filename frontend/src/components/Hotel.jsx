import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

import ReviewsList from '<components>/ReviewsList';

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleToggleReviews = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const { hotel, setData } = this.props;
    const {
      name,
      pricePerNight,
      address,
      reviews,
    } = hotel;
    const { city, country } = address;

    return (
      <Grid item xs={8}>
        <Card>
          <CardContent>
            <Typography variant="subheading">
              Hotel {name}
            </Typography>
            <Table>
              <TableBody>
                <TableRow >
                  <TableCell>Name</TableCell>
                  <TableCell>{name}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell>Price per night</TableCell>
                  <TableCell>{pricePerNight}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell>Address</TableCell>
                  <TableCell>{`${country} : ${city}`}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton
              aria-label="Show reviews"
              onClick={this.handleToggleReviews}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <ReviewsList reviews={reviews} setData={setData} />
          </Collapse>
        </Card>
      </Grid>
    );
  }
}

export default Hotel;

