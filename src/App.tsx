import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation(['common']);
  return (
    <div>{t('common:add')}</div>
  );
}

export default App;
