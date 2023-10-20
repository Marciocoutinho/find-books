import { ThemeProvider } from 'styled-components'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

import { Search } from './pages/Search'
import { Books } from './pages/Books'
import { BookDetail } from './pages/BookDetail'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
