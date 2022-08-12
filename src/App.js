
import Button from './components/Button';



function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <div className='container'>
        <div>
          <p className="label">{'<Button />'}</p>
          <Button />
        </div>
        <div>
          <p className='small'>{'&:hover, &:focus'}</p>
          <Button autoFocus />
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Button variant="outline"/>'}</p>
          <Button variant="outline"/>
        </div>
        <div>
          <p className='small'>{'&:hover, &:focus'}</p>
          <Button autoFocus variant="outline"/>
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Button variant="text"/>'}</p>
          <Button variant="text"/>
        </div>
        <div>
          <p className='small'>{'&:hover, &:focus'}</p>
          <Button autoFocus variant="text"/>
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Button disableShadow/>'}</p>
          <Button disableShadow color="primary" />
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Button disabled/>'}</p>
          <Button disabled />
        </div>
        <div>
          <p className="label">{'<Button disabled variant="text" />'}</p>
          <Button disabled  variant="text"/>
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Button startIcon="local_grocery_store" />'}</p>
          <Button startIcon="local_grocery_store" color="primary"/>
        </div>
        <div>
          <p className="label">{'<Button endIcon="local_grocery_store" />'}</p>
          <Button endIcon="local_grocery_store" color="primary"/>
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Button size="sm" />'}</p>
          <Button size="sm" color="primary"/>
        </div>
        <div>
          <p className="label">{'<Button size="md" />'}</p>
          <Button size="md" color="primary"/>
        </div>
        <div>
          <p className="label">{'<Button size="lg" />'}</p>
          <Button size="lg" color="primary"/>
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Button color="default" />'}</p>
          <Button color="default"/>
        </div>
        <div>
          <p className="label">{'<Button color="primary" />'}</p>
          <Button color="primary" />
        </div>
        <div>
          <p className="label">{'<Button color="secondary" />'}</p>
          <Button color="secondary"/>
        </div>
        <div>
          <p className="label">{'<Button color="danger" />'}</p>
          <Button color="danger"/>
        </div>
      </div>
      <div className='container'>
        <div>
          <p className='small'>{'&:hover, &:focus'}</p>
          <Button autoFocus color="default"/>
        </div>
        <div>
          <p className="label"></p>
          <Button autoFocus color="primary" />
        </div>
        <div>
          <p className="label"></p>
          <Button autoFocus color="secondary"/>
        </div>
        <div>
          <p className="label"></p>
          <Button autoFocus color="danger"/>
        </div>
      </div>
      <footer><p>created by <b>Michelle031</b> - devChallenges.io </p></footer>
    </div>
  );
}

export default App;
