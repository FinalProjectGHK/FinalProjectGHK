// import React, { useState } from 'react';
// import Orderjson from '../Orderjson';
// import RecordList from '../components/RecordList';
// import styles from './Record.module.css';
// import InfoIcon from '@mui/icons-material/Info';
// import ContentPasteIcon from '@mui/icons-material/ContentPaste';
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import receiptImg from '../image/receipt.svg'; // for empty record
// const Record = () => {
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const handleSelectOrder = (order) => {
//     setSelectedOrder(order);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftPane}>
//         <h2><ContentPasteIcon sx={{ fontSize: '0.7em', color: "#705b38" }} />{" "}訂單記錄</h2>
//         <div className={styles.RecordList}>
//           <RecordList orders={Orderjson} onSelectOrder={handleSelectOrder} />
//         </div>
//       </div>

//       <div className={styles.rightPane} >
//         <h2><InfoIcon sx={{ fontSize: '0.7em', color: "#705b38" }} />{" "}訂單詳情</h2>
//         <div className={styles.detail}>
//   {selectedOrder.order.map((item, index) => (
//     <div key={index} className={styles.item}>
//       <div className={styles.itemDetails}>
//         <span>• {item.chineseName}</span>
//         <span>x{item.quantity}</span>
//         <span>${item.price}</span>
//       </div>
//     </div>
//   ))}
//   <div>
//     <strong>Location: </strong>{selectedOrder.location}
//   </div>
//   <div>
//     <strong>Total Price: </strong>{selectedOrder.totalPrice}
//   </div>
// </div>


//       </div>
//     </div>
//   );
// };

// export default Record;

// import React, { useState } from 'react';
// import Orderjson from '../Orderjson';
// import RecordList from '../components/RecordList';
// import styles from './Record.module.css';
// import InfoIcon from '@mui/icons-material/Info';
// import ContentPasteIcon from '@mui/icons-material/ContentPaste';
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import receiptImg from '../image/receipt.svg'; // for empty record

// const Record = () => {
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const handleSelectOrder = (order) => {
//     setSelectedOrder(order);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftPane}>
//         <h2><ContentPasteIcon sx={{ fontSize: '0.7em', color: "#705b38" }} />{" "}訂單記錄</h2>
//         <div className={styles.RecordList}>
//           <RecordList orders={Orderjson} onSelectOrder={handleSelectOrder} />
//         </div>
//       </div>

//       <div className={styles.rightPane}>
//         <h2><InfoIcon sx={{ fontSize: '0.7em', color: "#705b38" }} />{" "}訂單詳情</h2>
//         {selectedOrder ? (
//           <div className={styles.detail}>
//             <table>
//               <thead>
//                 <tr>
                  // <th>項目</th>
                  // <th>價錢</th>
                  // <th>數量</th>
                  // <th>小計</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {selectedOrder.order.map((item, index) => (
//                   <tr key={index}>
//                     <td>• {item.chineseName}</td>
//                     <td>${item.price}</td>
//                     <td>{item.quantity}</td>
//                     <td>${item.price * item.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div>
//             <LocationOnIcon style={{ color: "#705b38" }} />{" "}{selectedOrder.location}
//             </div>
//             <div>
//               <strong>總數:$ </strong>{selectedOrder.totalPrice}
//             </div>
//           </div>
//         ) : (
//           <div className={styles.noSelection}>
//             <img src={receiptImg} alt="No record selected" />
//             <p>Please select an order to see the details.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Record;

import React, { useState } from 'react';
import Orderjson from '../Orderjson';
import RecordList from '../components/RecordList';
import styles from './Record.module.css';
import InfoIcon from '@mui/icons-material/Info';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import receiptImg from '../image/receipt.svg'; // for empty record

const Record = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <h2><ContentPasteIcon sx={{ fontSize: '0.7em', color: "#705b38" }} />{" "}訂單記錄</h2>
        <div className={styles.RecordList}>
          <RecordList orders={Orderjson} onSelectOrder={handleSelectOrder} />
        </div>
      </div>

      <div className={styles.rightPane}>
        <h2><InfoIcon sx={{ fontSize: '0.7em', color: "#705b38" }} />{" "}訂單詳情</h2>
        <div className={styles.box}>
        {selectedOrder ? (
          
          <div className={styles.detail}>
             <div className={styles.location}>
            <LocationOnIcon style={{ color: "#705b38" }} />{" "}{selectedOrder.location}
            </div>
            <table className={styles.orderTable}>
              <thead>
                <tr>
                <th>• 項目</th>
                  <th>價錢</th>
                  <th>數量</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrder.order.map((item, index) => (
                  <tr key={index}>
                    <td>• {item.chineseName}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
          
            <div className={styles.totalPrice}>
            <strong>總數: </strong>${selectedOrder.totalPrice}
            </div>
          </div>
        ) : (
          <div className={styles.noSelection}>
            <img src={receiptImg} alt="No record selected" />
            <p>請選擇訂單查看詳細資訊</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Record;