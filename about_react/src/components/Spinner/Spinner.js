import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Spinner.css';

class SpinnerModal extends React.Component {
  render() {
    const { open } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="loading">Loading&#8230;</div>
        </Dialog>
      </div>
    );
  }
}

SpinnerModal.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

function mapStateToProps(state, props) {
  return {
    open: state.utils.mostrarSpinner
  }
}

export default connect(mapStateToProps)(withMobileDialog()(SpinnerModal));

