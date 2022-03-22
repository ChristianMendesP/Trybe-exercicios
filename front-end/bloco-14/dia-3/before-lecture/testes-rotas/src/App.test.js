import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from './App';

describe('The path "/"', () => {
  it('renders the "Home" component', () => {
    const { history: { location: { pathname } } } = renderWithRouter(<App />);
    expect(pathname).toBe('/');
  })

  it('redirect to "/about" when the link "Sobre" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  })

  it('redirect to "/projects" when the link "Projetos" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    const projectsLink = screen.getByRole('link', { name: 'Projetos' });
    expect(projectsLink).toBeInTheDocument();
    userEvent.click(projectsLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/projects');
  })

  it('redirect to "/projects" when the link "Contatos" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    const contactsLink = screen.getByRole('link', { name: 'Contatos' });
    expect(contactsLink).toBeInTheDocument();
    userEvent.click(contactsLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/contacts');
  })

  it('contains the <h1> "Você está na página Início"', () => {
    renderWithRouter(<App />);
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  })

})

describe('The path "/about"', () => {
  it('redirect to "/" when the link "Início" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    history.push('about');
    const aboutLink = screen.getByRole('link', { name: 'Início' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  })

  it('redirect to "/projects" when the link "Projetos" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    history.push('about');
    const projectsLink = screen.getByRole('link', { name: 'Projetos' });
    expect(projectsLink).toBeInTheDocument();
    userEvent.click(projectsLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/projects');
  })

  it('redirect to "/projects" when the link "Contatos" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    history.push('about');
    const contactsLink = screen.getByRole('link', { name: 'Contatos' });
    expect(contactsLink).toBeInTheDocument();
    userEvent.click(contactsLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/contacts');
  })

  it('contains the <h1> "Christian Mendes Pereira"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('about');
    const aboutTitle = screen.getByRole('heading', {
      name: 'Christian Mendes Pereira',
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('contains a photo', () => {
    const { history } = renderWithRouter(<App />);
    history.push('about');
    const picElement = screen.getByAltText("Christian");
    expect(picElement).toBeInTheDocument();
  })

  it('contains the place of birth', () => {
    const { history } = renderWithRouter(<App />);
    history.push('about');
    const birthElement = screen.getByText("Naturalidade: Três Marias/MG");
    expect(birthElement).toBeInTheDocument();
  })
})

describe('The path "/contacts"', () => {
  it('redirect to "/" when the link "Início" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    history.push('contacts');
    const aboutLink = screen.getByRole('link', { name: 'Início' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  })

  it('redirect to "/projects" when the link "Projetos" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    history.push('contacts');
    const projectsLink = screen.getByRole('link', { name: 'Projetos' });
    expect(projectsLink).toBeInTheDocument();
    userEvent.click(projectsLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/projects');
  })

  it('redirect to "/about" when the link "Sobre" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    history.push('contacts');
    const contactsLink = screen.getByRole('link', { name: 'Sobre' });
    expect(contactsLink).toBeInTheDocument();
    userEvent.click(contactsLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  })

  it('contains the <h1> "Você está na página Contatos"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('contacts');
    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Contatos',
    });
    expect(aboutTitle).toBeInTheDocument();
  });

})

describe('Any other path', () => {
  it('redirect to "/" when the link "Início" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    history.push('any-other-path');
    const aboutLink = screen.getByRole('link', { name: 'Início' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  })

  it('redirect to "/projects" when the link "Projetos" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    history.push('any-other-path');
    const projectsLink = screen.getByRole('link', { name: 'Projetos' });
    expect(projectsLink).toBeInTheDocument();
    userEvent.click(projectsLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/projects');
  })

  it('redirect to "/about" when the link "Sobre" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    history.push('any-other-path');
    const contactsLink = screen.getByRole('link', { name: 'Sobre' });
    expect(contactsLink).toBeInTheDocument();
    userEvent.click(contactsLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  })

  it('redirect to "/contacts" when the link "Contatos" is clicked', () => {
    const { history } = renderWithRouter(<App />);
    history.push('any-other-path');
    const contactsLink = screen.getByRole('link', { name: 'Contatos' });
    expect(contactsLink).toBeInTheDocument();
    userEvent.click(contactsLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/contacts');
  })

  it('contains the <h1> "Página não encontrada"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('any-other-path');
    const errorTitle = screen.getByRole('heading', {
      name: 'Página não encontrada',
    });
    expect(errorTitle).toBeInTheDocument();
  })
})