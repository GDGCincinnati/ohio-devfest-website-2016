module.exports = {
  statistics: [{
    counter: 100,
    caption: 'Attendees'
  }, {
    counter: 1,
    caption: 'Day'
  }, {
    counter: 13,
    caption: 'Sessions'
  }, {
    counter: 2,
    caption: 'Parallel tracks'
  }],
  callToAction: {
    text: 'GDG DevFest 2014',
    buttonText: 'See how it was',
    video: {
      id: 't95z_HLMTmM',
      title: 'GDG DevFest Ukraine 2014 - Highlights'
    }
  },
  galleryBlock: {
    title: 'GDG DevFest Ukraine 2014 - Photos',
    photos: {
      big: '../images/backgrounds/2015_1.jpg',
      small: ['../images/backgrounds/2015_2.jpg', '../images/backgrounds/2015_3.jpg']
    },
    albumUrl: 'https://plus.google.com/events/gallery/cc6tosp4ohkp6qj9pg5jb4g6o3k?sort=1'
  },
  ticketsBlock: {
    title: 'Tickets',
    tickets: [{
      name: 'General',
      price: 45,
      currency: 'USD',
      info: ''
    }],
    details: 'Tickets grant access to all conference sessions, coffee breaks, and lunch. Accommodation is NOT included in the ticket price.'
  },
  socialFeed: {
    source: '/data/tweets.json'
  },
  partnershipProposition: '/assets/GDG_DevFest_Ukraine_2015_Partnership_Proposition.pdf'
};
