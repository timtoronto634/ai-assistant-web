import { useState } from 'react';

const sampleTemplates = [
  '書いたコードに追加の修正が不要だった場合は報酬を与えます。',
];

export const useTemplates = () => {
  const [templates, setTemplates] = useState<string[]>(sampleTemplates);

  const addTemplate = (keyword: string) => {
    setTemplates((prev) => [...prev, keyword]);
  };

  return { templates, addTemplate };
};
