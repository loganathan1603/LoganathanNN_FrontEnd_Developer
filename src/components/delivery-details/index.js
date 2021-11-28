//import dataStore from '../../mocks/cart.json';
import { useSelector} from 'react-redux';
import Style from './DeliveryDetails.module.scss';

export default function DeliveryDetails({type}){

  const dataStore = useSelector(state => state);

  const user = dataStore.user;
  return(
    <div className={Style.block}>
      <div className={Style.title}>
        {type === 'PROFILE' ? 'My Details' : 'Delivery Address'}
      </div>
      <div className={Style.content}>
        {user.fullName}, <br/>
        {user.address} <br/>
        <b>Contact:</b> {user.mobileNumber} | {user.username}
      </div>
    </div>
  )
}
