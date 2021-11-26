const Product = ({ shows }) => {
  return (
    <div className={shows ? "rightbar active" : "rightbar"}>
      <ul className="lists">
        <p className="list-heading-right">Intelligent Entrerpise</p>
        <li>Supply Chain Solutions</li>
        <li>EKAA</li>
        <li>University Chatbots</li>
        <li>SAP / ERP Chatbots</li>
        <li>Enterprise Chatbots</li>
        <li>C-SMART</li>
        <li>Digital Motor Claim Management</li>
        <li>Speech To Text</li>
      </ul>
    </div>
  );
};

export default Product;
