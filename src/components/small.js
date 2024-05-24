import React from 'react';
import './small.css';
const SendMoney = () => {
  const accounts = [
    { name: ' Varunesh', lastTransfer: '2 hrs. ago', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBw2jn_0I7Z0468gPo3nhlPzaPe5C57cbBFA&s' },
    { name: 'Limsa', lastTransfer: '17 days ago', img: 'https://w7.pngwing.com/pngs/90/654/png-transparent-skin-care-elastin-human-skin-cream-woman-face-miscellaneous-cream-face-thumbnail.png' },
    { name: 'Prasanth', lastTransfer: '1 month ago', img: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg' },
    { name: 'Kamelesh', lastTransfer: '1 month ago', img: 'https://www.shutterstock.com/image-photo/close-portrait-young-smiling-handsome-260nw-1180874596.jpg' },
  ];

  return (
    <div className="send-money">
      <h3>Send Money To</h3>
      <button className="add-account-btn">+ Add New Account</button>
      <table className='tables'>
        <thead>
          <tr>
            <th>Account Holder Name</th>
            <th>Last Transfer</th>
           <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr>
              <td>
                <img src={account.img} alt={account.name} className="profile-pic" />
                {account.name}
              </td>
              <td>{account.lastTransfer}</td>
              <td><button className="pay-btn">Pay</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SendMoney;
