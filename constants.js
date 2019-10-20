module.exports = {
  TECHNICAL_FAILURE: 'Technical failure exception',
  INVALID_ACCOUNT: 'Invalid account number exception',
  CUSTOMER_INELIGIBLE: 'CUSTOMER_INELIGIBLE',
  CUSTOMER_ELIGIBLE: 'CUSTOMER_ELIGIBLE',
  REWARDS: {
    SPORTS: 'CHAMPIONS_LEAGUE_FINAL_TICKET',
    MUSIC: 'KARAOKE_PRO_MICROPHONE',
    MOVIES: 'PIRATES_OF_THE_CARIBBEAN_COLLECTION'
  },
  CUSTOMER_SINGLE_REWARD: {
    customerAccountNumber: 'SKY0001',
    portfolio: ['SPORTS', 'KIDS', 'NEWS']
  },
  CUSTOMER_MULTI_REWARDS: {
    customerAccountNumber: 'SKY0002',
    portfolio: ['SPORTS', 'KIDS', 'MUSIC', 'NEWS', 'MOVIES']
  },
  CUSTOMER_NO_REWARD: {
    customerAccountNumber: 'SKY0003',
    portfolio: ['KIDS', 'NEWS']
  }
};
