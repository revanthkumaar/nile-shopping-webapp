import HomePage from './pages/homepage/homepage.component'
import CartPage from './pages/cart/cart-page.component'
import SignInPage from './pages/signin/signin-page.component'
import {Route} from 'react-router-dom'

function App(){
  return (
    <div id="app-component">
      <Route path="/" component={HomePage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/signin" component={CartPage} />
    </div>
  );
}

export default App;