import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <br />
          <p>
            <b>Address</b>
            {"125048"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <br />
          <p>
            <b>Name</b>
            {"Anku"}
          </p>
          <p>
            <b>Phone</b>
            {"9817672915"}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <br />
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"22-09-22"}
          </p>
          <p>
            <b>Delivered At</b>
            {"22-09-22"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <br />
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#
            {"adfhjgkhndgbcdf"}
          </p>
          <p>
            <b>Paid At</b>
            {"22-09-22"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <br />
          <p>
            <b>Items Total</b>
            ₹{1700}
          </p>
          <p>
            <b>Shipping Charges </b>
            ₹{70}
          </p>
          <p>
            <b>Tax </b>
            ₹{19}
          </p>
          <p>
            <b> Total Amount</b>
            ₹{1700+70+19}
          </p>
        </div>
        <article>
            <h1>Ordered Items</h1>
            <div>
                <h4>Cheese Burger</h4>
                <div>
                    <span>{12}</span> x <span>{212}</span>
                    
                </div>
            </div>
            <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{2132}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
