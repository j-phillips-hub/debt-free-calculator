import React from "react";
import "../styles/ExtraPayments.css";

class ExtraPayments extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="extraPaymentsSection">
        <p className="extraPaymentsSection__text">
          Calculate the impact of extra payments using any combination of the
          inputs below. To see your new estimated payoff date, click 'Show
          amortization schedule' link above.
        </p>

        <div className="flex extraPaymentsFlex">
          <form className="flexReverse extraPaymentForm">
            <label
              className="extraPaymentForm__label"
              htmlFor="extra-monthly-payment"
            >
              to your monthly payment
            </label>
            <input className="form__input" type="text" />
          </form>
        </div>

        <div className="flex extraPaymentsFlex">
          <form className="flexReverse extraPaymentForm">
            <label
              className="extraPaymentForm__label"
              htmlFor="extra-yearly-payment"
            >
              as an extra yearly payment occurring every:
            </label>
            <input className="form__input" type="text" />
          </form>

          <div className="selectContainer">
            <div className="select">
              <div>
                <span id="selectText">Month</span>
              </div>

              <div>
                <i id="selectArrow" class="selectArrow fas fa-chevron-down"></i>
              </div>
            </div>

            <div id="selectModal" class="selectModal">
              <div id="optionContainer" class="optionContainer">
                <p class="option" value="January">
                  January
                </p>
                <p class="option" value="February">
                  February
                </p>
                <p class="option" value="March">
                  March
                </p>
                <p class="option" value="April">
                  April
                </p>
                <p class="option" value="May">
                  May
                </p>
                <p class="option" value="June">
                  June
                </p>
                <p class="option" value="July">
                  July
                </p>
                <p class="option" value="August">
                  August
                </p>
                <p class="option" value="September">
                  September
                </p>
                <p class="option" value="October">
                  October
                </p>
                <p class="option" value="November">
                  November
                </p>
                <p class="option" value="December">
                  December
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex extraPaymentsFlex">
          <form className="flexReverse extraPaymentForm">
            <label
              className="extraPaymentForm__label"
              htmlFor="one-time-payment"
            >
              as a one-time payment in:
            </label>
            <input className="form__input" type="text" />
          </form>

          <div className="selectContainer">
            <div className="select">
              <div>
                <span id="selectText">Month</span>
              </div>

              <div>
                <i id="selectArrow" class="selectArrow fas fa-chevron-down"></i>
              </div>
            </div>

            <div id="selectModal" class="selectModal">
              <div id="optionContainer" class="optionContainer">
                <p class="option" value="January">
                  January
                </p>
                <p class="option" value="February">
                  February
                </p>
                <p class="option" value="March">
                  March
                </p>
                <p class="option" value="April">
                  April
                </p>
                <p class="option" value="May">
                  May
                </p>
                <p class="option" value="June">
                  June
                </p>
                <p class="option" value="July">
                  July
                </p>
                <p class="option" value="August">
                  August
                </p>
                <p class="option" value="September">
                  September
                </p>
                <p class="option" value="October">
                  October
                </p>
                <p class="option" value="November">
                  November
                </p>
                <p class="option" value="December">
                  December
                </p>
              </div>
            </div>
          </div>

          <div className="selectContainer">
            <div className="select">
              <div>
                <span id="selectText">Year</span>
              </div>

              <div>
                <i id="selectArrow" class="selectArrow fas fa-chevron-down"></i>
              </div>
            </div>

            <div id="selectModal" class="selectModal">
              <div id="optionContainer" class="optionContainer">
                <p class="option" value="2022">
                  2022
                </p>
                <p class="option" value="2023">
                  2023
                </p>
                <p class="option" value="2024">
                  2024
                </p>
                <p class="option" value="2025">
                  2025
                </p>
                <p class="option" value="2026">
                  2026
                </p>
                <p class="option" value="2027">
                  2027
                </p>
                <p class="option" value="2028">
                  2028
                </p>
                <p class="option" value="2029">
                  2029
                </p>
                <p class="option" value="2030">
                  2030
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ExtraPayments;
