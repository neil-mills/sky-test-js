const c = require('./constants');

const getPortfolioRewards = portfolio => {
  return portfolio.reduce((result, channel) => {
    const reward = c.REWARDS[channel] || null;
    return reward ? [...result, reward] : result;
  }, []);
};

module.exports = (customerAccountNumber, portfolio, eligibilityService) => {
  const eligibility = eligibilityService(customerAccountNumber);
  const rewards =
    eligibility === c.CUSTOMER_ELIGIBLE ? getPortfolioRewards(portfolio) : [];
  const error =
    eligibility === c.INVALID_ACCOUNT ? 'Account number invalid' : null;
  return { rewards, error };
};
