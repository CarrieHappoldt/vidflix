import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Search from '../Search';
import preload from '../../data.json';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<Search />)
  expect(component).toMatchSnapshot();
});

test('search should render the correct amount of shows', () => {
  const component = shallow(<Search />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
})

test('Search should render correct amount of shows based on search term', () => {
  const searchWord = "black";
  const component = shallow(<Search />)
  component.find('input').simulate('change', { target: { value: searchWord }})
  const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase()
  .indexOf(searchWord.toUpperCase()) >= 0).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
})