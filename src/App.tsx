import './App.css'
import TopView from './feature/builder/components/builder'
import { TemplateInput } from './feature/templates/components/template_input'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <h1>Vite + React</h1>
        <TopView />
        <TemplateInput />
      </>
    </QueryClientProvider>
  )
}

export default App
