import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';
import userEvent from '@testing-library/user-event';

describe('Test Page Home', () => {
  const testMessage = 'Test Message'
  
  test('Render link Home', () => {
    render(<Home />);
    const linkElement = screen.queryByText(testMessage);
    expect(linkElement).toBeNull();
  });

  test('Test title h1', () => {
    const { getByText } = render(<Home />);
    const searchText = getByText('Pegada Baby');
    expect(searchText).toBeDefined();
  });
  
  test('Test text h3', () => {
    const { getByText } = render(<Home />);
    const searchText = getByText('Aqui calçamos sua criança com amor e estilo á um preço justo!');
    expect(searchText).toBeDefined();
  });
  
  test('Test button Site', () => {
    render(<Home />);
    userEvent.click(screen.getByText('Site'))
    expect(screen.getByText('Site')).toBeEnabled();
  });
  
  test('Test button Shopee', () => {
    render(<Home />);
    userEvent.click(screen.getByText('Shopee'))
    expect(screen.getByText('Shopee')).toBeEnabled();
  });

  test('Test button Mercado Livre', () => {
    render(<Home />);
    userEvent.click(screen.getByText('Mercado Livre'))
    expect(screen.getByText('Mercado Livre')).toBeEnabled();
  });

  test('Test button Lojas Americanas', () => {
    render(<Home />);
    userEvent.click(screen.getByText('Lojas Americanas'))
    expect(screen.getByText('Lojas Americanas')).toBeEnabled();
  });

  test('Test button Magazine Luiza', () => {
    render(<Home />);
    userEvent.click(screen.getByText('Magazine Luiza'))
    expect(screen.getByText('Magazine Luiza')).toBeEnabled();
  });
  
  test('Test button Ponto Frio', () => {
    render(<Home />);
    userEvent.click(screen.getByText('Ponto Frio'))
    expect(screen.getByText('Ponto Frio')).toBeEnabled();
  });

  test('Test button Shoptime', () => {
    render(<Home />);
    userEvent.click(screen.getByText('Shoptime'))
    expect(screen.getByText('Shoptime')).toBeEnabled();
  });
  
  test('Test button Casas Bahia', () => {
    render(<Home />);
    userEvent.click(screen.getByText('Casas Bahia'))
    expect(screen.getByText('Casas Bahia')).toBeEnabled();
  });
})
