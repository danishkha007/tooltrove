import React from "react";
import './loanCalculator.css'

const loanCalculator = () => {
	return (
		<section className="calculator-ctn">
			<form>
				<label>Loan Amount:
					<input type="Number" name="Loan Amount" className="input-box"></input>
				</label>
				<input className="input-box"></input>
				<input className="input-box"></input>
			</form>
		</section>
	);
};

export default loanCalculator;
