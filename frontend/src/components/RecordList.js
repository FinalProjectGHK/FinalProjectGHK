// // import styles from "./RecordList.module.css";

// // export default function RecordList({ chineseName, quantity, price }) {
// //   return (
// //     <div className={styles.shoppingCartItem}>
  
// //       <div className={styles.itemDetails}>
      
// //         <div className={styles.itemQuantityPrice}>
// //         <div className={styles.itemName}>{chineseName}</div>
// //           <div className={styles.itemQuantity}>
// //             <span>x{quantity}</span>
// //           </div>
// //           <div className={styles.itemPrice}>${price * quantity}</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import styles from "./RecordList.module.css";

// export default function RecordList({ chineseName, quantity, price, location, time }) {
//   return (
//     <div className={styles.previousOrderRecord}>
//       <table className={styles.orderTable}>
//         <thead>
//           <tr>
//             <th>Location</th>
//             <th>Time</th>
//             <th>Items</th>
//             <th>Qty</th>
//             <th>Price</th>
//             <th>Total Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{location}</td>
//             <td>{time}</td>
//             <td>{chineseName}</td>
//             <td>{quantity}</td>
//             <td>${price}</td>
//             <td>${price * quantity}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from 'react';
import styles from './RecordList.module.css';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const RecordList = ({ orders, onSelectOrder }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-CA', options).replace(',', '');
  };

  return (
    <div className={styles.orderList}>
      {orders.map((order, index) => (
        <div key={index} className={styles.orderItem} onClick={() => onSelectOrder(order)}>
          <div><AccessTimeIcon style={{ color: "#705b38" }} />{" "}{formatDate(order.time)}</div>
          <div><LocationOnIcon style={{ color: "#705b38" }} />{" "}{order.location}</div>
          <div><AttachMoneyIcon style={{ color: "#705b38" }} />{" "}{order.totalPrice}</div>
        </div>
      ))}
    </div>
  );
};

export default RecordList;