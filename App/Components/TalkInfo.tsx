import React from 'react'
import { View, Text } from 'react-native'
import RemindMeButton from './RemindMeButton'
import SocialMediaButton from './SocialMediaButton'
import { format } from 'date-fns'
import styles from './Styles/TalkInfoStyle'

interface TalkInfoProps {
  start: Date
  duration: Number
  remindMe: boolean
  toggleRemindMe (): void
  isFinished: boolean
  showWhenFinished: boolean
  onPressGithub (): void
  onPressTwitter (): void
}

const TalkInfo = (props: TalkInfoProps) => {
  const { start, duration, remindMe, toggleRemindMe, isFinished, showWhenFinished } = props
  const formattedStart = format(start, 'h:mmA')
  const showRemindMe = !isFinished
  const showSocialMedia = isFinished && showWhenFinished

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>
            Start
          </Text>
          <Text style={styles.detailText}>
            {formattedStart}
          </Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>
            Duration
          </Text>
          <Text style={styles.detailText}>
            {`${duration} Minutes`}
          </Text>
        </View>
      </View>
      {showRemindMe &&
        <View style={styles.remindMe}>
          <RemindMeButton onPress={toggleRemindMe} on={remindMe} />
        </View>
      }
      {showSocialMedia &&
        <View style={styles.socialButtons}>
          <SocialMediaButton network='twitter' onPress={props.onPressTwitter} />
          <SocialMediaButton network='github' onPress={props.onPressGithub} />
        </View>
      }
    </View>
  )
}
export default TalkInfo
