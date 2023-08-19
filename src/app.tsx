import { PropsWithChildren } from 'react'
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/index";
import TaroSafeAreaView from '@/components/SafeAreaView'
import './app.less'

function App({ children }: PropsWithChildren) {
  return (
    <ReduxProvider store={store}>
      <TaroSafeAreaView>
        {children}
      </TaroSafeAreaView>
    </ReduxProvider>
  )
}

export default App
