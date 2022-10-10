class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `<div class="footer">
		<div class="nav">
				<ul>
					<li>
						<a href="https://github.com/buwebdev/web-330">WEB-330 GitHub Repository</a>
					</li>
					<li>
						<a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University Web Development Degree</a>
					</li>
					<li>
						<a href="https://github.com/jdam05">My GitHub</a>
					</li>
					
				</ul>
			</div>
				<p>&copy; Jamal Damir - 2022</p>
			</div>`;
	}
}

customElements.define("footer-component", Footer);
