import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

const section = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 20,
  paddingVertical: 50,
  backgroundColor: Colors.transparent
}

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  heading: {
    marginTop: 14,
    fontFamily: Fonts.type.bold,
    fontSize: 31,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: '#FDE5FF',
    letterSpacing: 0.47,
    lineHeight: 23
  },
  hashtag: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.snow
  },
  twitter: {
    ...section
  },
  tabsContainer: {
    flex: 1,
    backgroundColor: Colors.transparent,
    marginVertical: Metrics.doubleBaseMargin
  },
  tabs: {
    flexDirection: 'row'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(253,229,255,0.5)',
    padding: Metrics.baseMargin
  },
  activeTab: {
    borderBottomColor: Colors.snow
  },
  tabText: {
    fontFamily: Fonts.type.base,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0.47,
    color: 'rgba(253,229,255,0.5)'
  },
  activeTabText: {
    fontWeight: '600',
    color: Colors.snow
  },
  sponsors: {
    ...section,
    paddingTop: 30
  },
  slack: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55,
    paddingBottom: 35
  },
  slackButton: {
    marginTop: 25
  },
  sponsorTierTitle: {
    marginTop: 60,
    marginBottom: Metrics.baseMargin,
    fontFamily: Fonts.type.bold,
    fontSize: 15,
    color: Colors.snow,
    opacity: 0.6,
    letterSpacing: 0.5,
    lineHeight: 23
  },
  sponsorTier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth,
    flexWrap: 'wrap'
  },
  sponsor: {
    margin: 15,
    flexShrink: 0,
    alignItems: 'center'
  },
  lowTierSponsor: {
    marginHorizontal: 25
  },
  liveHelp: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  liveHelpPhone: {
    color: Colors.snow,
    fontFamily: Fonts.type.bold,
    fontSize: 31,
    fontWeight: '900'
  },
  liveHelpText: {
    margin: 5,
    color: Colors.snow,
    opacity: 0.9,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: Fonts.type.base,
    lineHeight: 23,
    textAlign: 'center'
  },
  liveHelpButton: {
    marginTop: 25,
    width: 200
  }
})
