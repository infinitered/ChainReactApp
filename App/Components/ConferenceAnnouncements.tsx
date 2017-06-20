import React from 'react'
import { Images } from '../Themes'
import Announcement from './Announcement'

const ConferenceAnnouncements = () => {
  return (
    <Announcement
      style={{height: 350}}
      preEvent={{
        title: 'Happy Hour',
        subtitle: 'At Squarespace PDX',
        eventTimeInfo: 'SUNDAY, JULY 9 | 4-8PM',
        address: '311 SW WASHINGTON STREET',
        image: Images.squarespacePhoto,
        buttonUri: 'https://chainreact.squarespace.com',
        buttonText: 'I want to go'
      }}
      eventDays={[
        {
          title: 'Happy Hour',
          subtitle: 'Come for the fun',
          eventTimeInfo: 'Stay for the cats',
          address: '#1 Happy St',
          buttonUri: 'https://chainreact.squarespace.com',
          image: {uri: 'https://assets.rbl.ms/4314213/980x.jpg'},
          buttonText: 'wassaa party'
        },
        {
          title: 'Not So Happy Hour',
          subtitle: '',
          eventTimeInfo: '',
          address: '1313 Mockingbird Ln.',
          image: {uri: 'https://cogpunksteamscribe.files.wordpress.com/2016/04/surprisecat1.jpg?w=500'},
          buttonUri: 'https://chainreact.squarespace.com',
          buttonText: 'Not So Happy'
        }
      ]}
      postEvent={{
        title: 'The Sad Hour',
        subtitle: 'Sorry to see you go',
        eventTimeInfo: '',
        address: '',
        image: {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-06/24/19/campaign_images/webdr09/this-may-be-this-cutest-saddest-cat-ever-2-4626-1435188004-0_dblbig.jpg'},
        buttonUri: 'https://chainreact.squarespace.com',
        buttonText: 'Not So Happy'
      }}
    />
  )
}

export default ConferenceAnnouncements
