const redeemService = require('./redeemService');
const c = require('./constants');

const eligibilityService = jest.fn(customerAccountNumber => {
  return c.CUSTOMER_INELIGIBLE;
});

const getRewards = (customer, eligibilityResponse) => {
  const { customerAccountNumber, portfolio } = customer;
  eligibilityService.mockReturnValueOnce(eligibilityResponse);
  return redeemService(customerAccountNumber, portfolio, eligibilityService);
};

test('customer is ineligible, no rewards returned', () => {
  const { customerAccountNumber, portfolio } = c.CUSTOMER_SINGLE_REWARD;
  const { rewards, error } = redeemService(
    customerAccountNumber,
    portfolio,
    eligibilityService
  );
  expect(rewards).toHaveLength(0);
  expect(error).toBeNull();
});

test('customer is eligible and has one reward, one reward and no error returned', () => {
  const { rewards, error } = getRewards(
    c.CUSTOMER_SINGLE_REWARD,
    c.CUSTOMER_ELIGIBLE
  );
  expect(rewards).toHaveLength(1);
  expect(error).toBeNull();
});

test('customer is eligible and has multiple rewards, multiple rewards and no error returned', () => {
  const { rewards, error } = getRewards(
    c.CUSTOMER_MULTI_REWARDS,
    c.CUSTOMER_ELIGIBLE
  );
  expect(rewards.length).toBeGreaterThan(1);
  expect(error).toBeNull();
});

test('customer is eligible, but has no rewards, no reward or error returned', () => {
  const { rewards, error } = getRewards(
    c.CUSTOMER_NO_REWARD,
    c.CUSTOMER_ELIGIBLE
  );
  expect(rewards).toHaveLength(0);
  expect(error).toBeNull();
});

test('technical failure of eligibility service, no reward or error returned', () => {
  const { rewards, error } = getRewards(
    c.CUSTOMER_SINGLE_REWARD,
    c.TECHNICAL_FAILURE
  );
  expect(rewards).toHaveLength(0);
  expect(error).toBeNull();
});

test('customer account number is invalid, no reward but an error is returned', () => {
  const { rewards, error } = getRewards(
    c.CUSTOMER_SINGLE_REWARD,
    c.INVALID_ACCOUNT
  );
  expect(rewards).toHaveLength(0);
  expect(error).toBeTruthy();
  console.error(error);
});
