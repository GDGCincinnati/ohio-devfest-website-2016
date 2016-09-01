module.exports = {
  statistics: [{
    counter: 100,
    caption: 'Attendees'
  }, {
    counter: 1,
    caption: 'Day'
  }, {
    counter: 12,
    caption: 'Sessions'
  }, {
    counter: 3,
    caption: 'Parallel tracks'
  }],
  ticketsBlock: {
    title: 'Tickets',
    tickets: [
      {
        name: 'Professional Early Bird',
        price: 50,
        currency: 'USD',
        info: 'Ends on Sept 16, 2016'
      },{
        name: 'Student Early Bird',
        price: 25,
        currency: 'USD',
        info: 'Ends on Sept 16, 2016'
      },{
        name: 'Professional',
        price: 65,
        currency: 'USD',
        info: ''
      },{
        name: 'Student',
        price: 35,
        currency: 'USD',
        info: ''
      }
    ],
    details: 'Tickets grant access to all conference sessions, coffee breaks, and lunch. Accommodation is NOT included in the ticket price.'
  },
  socialFeed: {
    source: '/data/tweets.json'
  },
  partnershipProposition: '/assets/Sponsor.pdf'
};
