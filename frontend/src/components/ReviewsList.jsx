import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Modal from '<components>/Modal';
import ReviewModal from '<containers>/ReviewModal';

class ReviewsList extends React.Component {
  openReviewModal = () => {
    const { setData } = this.props;

    setData({ shpowReviewModal: true });
  }

  render() {
    const { reviews } = this.props;
    return (
      <React.Fragment>
        <List>
          {reviews && reviews.length > 0 &&
            reviews.map((item, index) => (
              <ListItem key={index}>
                <Table>
                  <TableBody>
                    <TableRow >
                      <TableCell>{item.userName}</TableCell>
                      <TableCell>Rating: {item.raiting}</TableCell>
                      <TableCell>Approved: {item.approved ? 'Yes' : 'No'}</TableCell>
                    </TableRow>
                    <TableRow >
                      <Typography variant="body2" gutterBottom>
                        fdsssssssssssssssssssssssssssssssssss
                      </Typography>
                    </TableRow>
                  </TableBody>
                </Table>
              </ListItem>))
          }
        </List>
        <Modal>
          <ReviewModal />
        </Modal>
        <Button
          variant="contained"
          color="primary"
          onClick={this.openReviewModal}
        >
          Add Review
        </Button>
      </React.Fragment>
    );
  }
}

export default ReviewsList;
