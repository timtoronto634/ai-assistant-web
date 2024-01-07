import './App.css'
import { useState } from 'react'
import TopView from './feature/builder/components/builder'
import { TemplateBox } from './feature/templates/components/template_input'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Divider } from '@mui/material'
import PromptBuildingBlock from './feature/builder/buildingBlock'
import TemplateAdder from './feature/templates/components/templateBox'
import { TemplateText } from './SavedText'
import SavedTextList from './feature/templates/components/savedTextList'

const queryClient = new QueryClient()

function App() {
  const [content, setContent] = useState('')

  const [savedTexts, setSavedTexts] = useState<TemplateText[]>([]);
  const [promptText, setPromptText] = useState('');

  const handleDrop = (e: any) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    setPromptText(promptText + text);
  };

  const handleDragOver = (e: any) => {  }

  const handleSave = (text: TemplateText) => {
    // Add the new text to the array of saved texts
    setSavedTexts(prevTexts => [...prevTexts, text]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Vite + React</h1>
        <TopView content={content} setContent={setContent} />
        <TemplateBox setContent={setContent} />
      </div>
      <Divider />
      <div>
        <PromptBuildingBlock onDrop={handleDrop} onDragOver={handleDragOver} >

        </PromptBuildingBlock>
        <TemplateAdder onSave={handleSave} />
        <div>
        <h2>Saved Texts</h2>
        <SavedTextList savedTexts={savedTexts} />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
