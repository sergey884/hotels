import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class ReviewModal extends React.Component {
  handleClose = () => {
    const { setData } = this.props;

    setData({ shpowReviewModal: false });
  };

  handleCheckBoxChange = (event, reviewApproved) => {
    const { setData } = this.props;

    setData({ reviewApproved });
  }

  handleNameChange = (event) => {
    const { setData } = this.props;
    const { target: { value: reviewUser } } = event;
    console.log('reviewUser', event, reviewUser);
    setData({ reviewUser });
  }

  handleRatingChange = (event) => {
    const { setData } = this.props;
    const { target: { value: reviewRating } } = event;

    setData({ reviewRating });
  }

  sendReview = () => {
    const { sendReview } = this.props;

    sendReview();
  }

  render() {
    const modalStyles = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
    const { hotels } = this.props;
    const {
      shpowReviewModal,
      reviewUser,
      reviewApproved,
      reviewRating,
    } = hotels;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={shpowReviewModal}
          onClose={this.handleClose}
        >
          <div style={modalStyles}>
            <Paper style={{ paddingLeft: '20px' }}>
              <form autoComplete="off">
                <Grid container spacing={24} direction="column">
                  <Grid item xs={12} spacing={24}>
                    <TextField
                      id="name"
                      label="User Name"
                      value={reviewUser}
                      style={{ width: '90%' }}
                      onChange={this.handleNameChange}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} spacing={24}>
                    <TextField
                      id="rating"
                      label="Rating"
                      style={{ width: '90%' }}
                      value={reviewRating}
                      onChange={this.handleRatingChange}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} spacing={24}>
                    <Checkbox
                      checked={reviewApproved}
                      onChange={this.handleCheckBoxChange}
                      value={reviewApproved}
                      color="primary"
                    />
                  </Grid>
                  <Grid item xs={12} spacing={24}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.sendReview}
                    >
                      Send Review
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ReviewModal;
