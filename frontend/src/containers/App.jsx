import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHotels, setData } from '<actions>/hotels';

import App from '<components>/App';

const mapStateToProps = state => ({
  hotels: state.hotels.hotels,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getHotels,
    setData,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);