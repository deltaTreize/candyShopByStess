import React from "react";
import "./etages-container.scss";

export function EtagesContainer() {
	return (
		<div className="etages-container">
			<p>&#192; &Eacute;tages</p>
			<div className="etages-wrapper">
				<div className="3etages">
					<img src="./assets/3etages.png" alt="" className="3etages-img" />
					<p>3 étages</p>
				</div>
				<div className="4etages">
					<img src="./assets/4etages.png" alt="" className="4etages-img" />
					<p>4 étages</p>
				</div>
				<div className="5etages">
					<img src="./assets/5etages.png" alt="" className="5etages-img" />
					<p>5 étages</p>
				</div>
				<div className="6etages">
					<img src="./assets/6etages.png" alt="" className="6etages-img" />
					<p>6 étages</p>
				</div>
				<div className="7etages">
					<img src="./assets/7etages.png" alt="" className="7etages-img" />
					<p>7 étages</p>
				</div>
			</div>
		</div>
	);
}
