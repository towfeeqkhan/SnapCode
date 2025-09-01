import { Toaster } from 'react-hot-toast';

import Header from "./components/Header";
import EditorContainer from './components/EditorContainer';

function App() {
  return (
    <div className="flex flex-col items-center">
      <Toaster
        toastOptions={{
          style: {
            background: '#1E2939',
            color: '#fff',
          },
        }}
      />
      <Header />
      <EditorContainer />
    </div>
  );
}

export default App;