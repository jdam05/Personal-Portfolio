class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<div class="header">
				<a href="index.html"><h1>Jamal Damir</h1></a>
			</div>
        `;
	}
}

customElements.define("header-component", Header);
