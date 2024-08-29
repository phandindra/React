import { useCallback, useEffect, useRef, useState } from 'react';


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()[]_+=`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-2 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button className='bg-blue-700 text-white px-3 py-1' onClick={copyPasswordToClipboard}>
          Copy
        </button>
      </div>

      <div className='flex flex-col text-sm gap-y-2 items-start'>
        <div className='flex items-center'>
          <input 
            type='range' 
            min={6} 
            max={100} 
            value={length}
            onChange={(e) => setLength(e.target.value)} 
            className='cursor-pointer mr-2'
          />
          <label>Length: {length}</label>
        </div>
        
        <div className='flex items-center'>
          <input 
            type='checkbox' 
            checked={numberAllowed} 
            id="numberInput"
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label htmlFor='numberInput' className='ml-2'>Numbers</label>
        </div>
        
        <div className='flex items-center'>
          <input 
            type='checkbox' 
            checked={charAllowed} 
            id="charInput"
            onChange={() => setCharAllowed(prev => !prev)}
          />
          <label htmlFor='charInput' className='ml-2'>Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
