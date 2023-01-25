import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import Header from '../components/Header'


describe ('Header' , () => {

test('Header renders correctly', () => {
render(<Header title="Movies"/>);
const headerText = screen.getByText('Movies');
expect(headerText).toBeInTheDocument();
})
})