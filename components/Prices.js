//No need to bring React in Next

class Prices extends React.Component {
	state = {
		currency: "USD"
	};

	render() {
		//Retrieves selected properties from props object, based on State.
		const { description, rate, code } = this.props.bpi[this.state.currency];
		return (
			<div>
				<ul className="list-group" />
				<li className="list-group-item">
					Bitcoin rate for {description}:
					<span className="badge badge-primary">{code}</span>
					<strong>{rate}</strong>;
				</li>
				<br />
				<select
					name=""
					id=""
					onChange={e => this.setState({ currency: e.target.value })}
					className="form-control"
				>
					<option value="USD">USD</option>
					<option value="GBP">GBP</option>
					<option value="EUR">EUR</option>
				</select>
			</div>
		);
	}
}

export default Prices;
