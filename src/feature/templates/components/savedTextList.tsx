import { TemplateText } from '@/SavedText';
import React from 'react';
import SavedTextItem from './savedTextItem';



interface SavedTextListProps {
  savedTexts: TemplateText[];
}

const SavedTextList: React.FC<SavedTextListProps> = ({ savedTexts }) => {
  return (
    <ul>
      {savedTexts.map((savedText: TemplateText) => (
        <SavedTextItem tt={savedText} />
      ))}
    </ul>
  );
};

export default SavedTextList;
