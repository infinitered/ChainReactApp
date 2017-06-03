import React, { Component, PropTypes } from 'react'
import { View, Modal, Text, TouchableOpacity } from 'react-native'
import StatusBarAlert from 'react-native-statusbar-alert'
import PurpleGradient from './PurpleGradient'
import styles from './Styles/ModalStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

const NotificationScreen = ({notifications, onDismissModal}) => {
  const notificationItems = notifications.map((message) => (
    <Text style={styles.description} key={message}>
      {message}
    </Text>
  ))

  return (
    <View style={styles.mainContainer}>
      <PurpleGradient style={[styles.linearGradient, {flex: 1}]}>
        <View style={styles.section}>
          <Text style={styles.heading}>Sessions Starting!</Text>
          {notificationItems}
        </View>
        <TouchableOpacity onPress={onDismissModal}>
          <View style={styles.button}>
            <Icon name='times-circle' size={20} style={styles.closeIcon} />
            <Text style={styles.text}>
              Dismiss
            </Text>
          </View>
        </TouchableOpacity>
      </PurpleGradient>
    </View>
  )
}

class NotificationsBar extends Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired,
    clearNotifications: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { showModal: false }
  }

  onPressStatusBarAlert = () => {
    this.setState({ showModal: true })
  }

  onDismissModal = () => {
    this.setState({ showModal: false })
    this.props.clearNotifications()
  }

  render () {
    const {notifications} = this.props

    if (notifications.length === 0) {
      return null
    }

    return (
      <View>
        <StatusBarAlert
          visible
          message='Talk coming up! (tap for details)'
          backgroundColor='#a843af'
          color='white'
          pulse='background'
          onPress={this.onPressStatusBarAlert}
        />
        <Modal
          animationType={'slide'}
          visible={this.state.showModal}
          onRequestClose={this.onDismissModal}>
          <NotificationScreen
            onDismissModal={this.onDismissModal}
            notifications={notifications}
          />
        </Modal>
      </View>
    )
  }
}

export default NotificationsBar
