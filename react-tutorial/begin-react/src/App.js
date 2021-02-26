import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  return (
    <>
    <Wrapper>
      <Hello name="react" color="red" isSpecial/>
      <Hello color="pink"/>
    </Wrapper>
    <Counter>

    </Counter>
    <InputSample/>
    </>
  );
}

export default App;
