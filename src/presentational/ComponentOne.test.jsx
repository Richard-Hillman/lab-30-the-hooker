import React from 'react';
import { render, screen, waitfor } from '@testing-library/react';
import AllChars from './ComponentOne'; 

describe('AllChars containter', () => {
  it('displays a loading screen then a list of Characters', () => {
    render(<AllChars />);
    
    screen.getByText('loading');
  });
});
