import { getUserInfo, setPayment } from '../localStorage';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentScreen = {
  after_render: () => {
    document
      .getElementById('payment-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        const paymentMethod = document.querySelector(
          'input[name="payment-method"]:checked'
        ).value;
        setPayment({ paymentMethod });
        document.location.hash = '/placeorder';
      });
  },
  render: () => {
    const { name } = getUserInfo();
    if (!name) {
      document.location.hash = '/';
    }
    return `
    ${CheckoutSteps.render({ step1: true, step2: true, step3: true })}
    <div class="form-container">
      <form id="payment-form">
        <ul class="form-items">
          <li>
            <h1>Payment</h1>
          </li>
          <li>
            <div>
              <input type="radio"
              name="payment-method"
              id="Bank Transfer"
              value="Bank Transfer"
              checked />
              <label for="Bank Transfer" >Bank Transfer</label>
             </div> 
          </li>
          <li>
          <div>
            <input type="radio"
            name="payment-method"
            id="Virtual Account"
            value="Virtual Account"
             />
            <label for="Virtual Account" >Virtual Account</label>
           </div> 
           </li>
           <li>
           <div>
             <input type="radio"
             name="payment-method"
             id="E-Wallet"
             value="E-Wallet"
              />
             <label for="E-Wallet" >E-Wallet</label>
            </div> 
            </li>
            <li>
            <div>
              <input type="radio"
              name="payment-method"
              id="Cash on Delivery"
              value="Cash on Delivery"
               />
              <label for="Cash on Delivery" >Cash on Delivery</label>
             </div> 
        </li>
          <li>
            <button type="submit" class="primary">Continue</button>
          </li>        
        </ul>
      </form>
    </div>
    `;
  },
};
export default PaymentScreen;
