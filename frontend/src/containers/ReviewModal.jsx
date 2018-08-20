import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setData } from '<actions>/hotels';
import { sendReview } from '<actions>/review';

import ReviewModal from '<components>/ReviewModal';

const mapStateToProps = state => ({
  hotels: state.hotels,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setData,
    sendReview,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ReviewModal);
