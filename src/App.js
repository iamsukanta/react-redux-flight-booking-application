import Header from "./components/Header";
import Input from "./components/Input";
import Preview from "./components/Preview";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <section>
          <Input />
          <Preview />
        </section>
      </div>
    </Provider>
  );
}

export default App;
