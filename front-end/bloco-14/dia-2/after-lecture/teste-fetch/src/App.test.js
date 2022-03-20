import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

test('fetching', async () => {
  const result = {
    message: "https://images.dog.ceo/breeds/dingo/n02115641_4800.jpg",
    status: "success",
  };

  global.fetch = jest.fn(async () => ({
    json: async () => result
  }));
  
  render(<App />)

  const imageElement = await screen.findByRole('img');
  expect(imageElement.src).toBe(result.message);

  const requestElement = await screen.findByText("Request success");
  expect(requestElement).toBeInTheDocument();
  // console.log(requestElement);
});
