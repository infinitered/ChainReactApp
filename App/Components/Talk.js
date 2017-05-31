import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity, LayoutAnimation } from 'react-native'
import TalkInfo from './TalkInfo'
import TimeIndicator from './TimeIndicator'
import styles from './Styles/TalkStyle'
import PushNotification from 'react-native-push-notification'

export default class Talk extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      sendReminder: false,
      isActive: false
    }
  }

  toggleReminder () {
    LayoutAnimation.easeInEaseOut()
    this.setState((prevProps) => ({sendReminder: !prevProps.sendReminder}))
    PushNotification.localNotification({message: 'TEST NOTIFICATION'})
  }

  render () {
    const { sendReminder } = this.state
    const {
      isCurrentDay,
      isActive,
      name,
      title,
      avatarURL,
      start,
      duration,
      currentTime,
      isFinished
    } = this.props

    const containerStyles = [
      styles.container,
      isCurrentDay && styles.currentDay,
      isActive && styles.active,
      isFinished && styles.finished
    ]

    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={containerStyles}>
            <View style={styles.info}>
              <View style={styles.infoText}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.title}>{title}</Text>
              </View>
              <Image style={styles.avatar} source={{uri: avatarURL}} />
            </View>
            <TalkInfo
              start={start}
              duration={duration}
              remindMe={sendReminder}
              isFinished={isFinished}
              showWhenFinished={this.props.showWhenFinished}
              toggleRemindMe={() => this.toggleReminder()}
              onPressGithub={this.props.onPressGithub}
              onPressTwitter={this.props.onPressTwitter}
            />
          </View>
        </TouchableOpacity>
        {isActive &&
          <TimeIndicator start={start} duration={duration} time={currentTime} />
        }
      </View>
    )
  }

}

Talk.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  onPressTwitter: PropTypes.func.isRequired,
  onPressGithub: PropTypes.func.isRequired,
  isFinished: PropTypes.bool.isRequired,
  showWhenFinished: PropTypes.bool.isRequired
}
