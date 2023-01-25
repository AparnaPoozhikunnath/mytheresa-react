import {render, screen, fireEvent} from '@testing-library/react'
import { Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Carousel from '../components/Carousel'


describe ('Carousel' , () => {

    test('Should take user to details page once image is clicked', () => {
    render(
        <Routes>
            <Route path="details/:category/:id"></Route>
        </Routes>
    );
    userEvent.click(screen.getByRole('link'));
     screen.findByText('Details');

    })
    })