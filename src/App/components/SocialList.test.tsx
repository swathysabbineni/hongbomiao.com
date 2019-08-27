import React from 'react';
import { shallow } from 'enzyme';

import WEBSITES from '../fixtures/websites';
import TestUtils from '../../shared/utils/testUtils';
import HmSocialList from './SocialList';

describe('SocialList', () => {
  test('render SocialList', () => {
    TestUtils.testComponent(<HmSocialList websites={WEBSITES} />);
  });

  test('render .hm-social-item', () => {
    const wrapper = shallow(<HmSocialList websites={WEBSITES} />);
    expect(wrapper.find('.hm-social-item')).toHaveLength(WEBSITES.length);
  });
});
