import React, {Component} from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr'
import { translate } from 'react-i18next';

const Config = require('Config');
const ROOT_URL = Config.server_url+':'+Config.server_port;

const io = require('socket.io-client');
const socket = io(ROOT_URL);

class ReduxSocket extends Component {
  
  constructor(props) {
    super(props);
  
    const { t } = this.props;
  
    socket.on('system:update', function(data) {
      if (data.status === 'progress') toastr.info(t('dashboard.systemupdate.title'), t('dashboard.systemupdate.progress'));
      if (data.status === 'finished') toastr.success(t('dashboard.systemupdate.title'), t('dashboard.systemupdate.finished'));
    });
  
  }
  
  render() {
    return false
  }
}

export default connect()(translate()(ReduxSocket));
